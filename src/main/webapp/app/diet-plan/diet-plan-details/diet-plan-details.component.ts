import {ActivatedRoute, Params, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Component, OnInit} from "@angular/core";
import {DietPlan} from "../diet-plan.model";
import {DietPlanService} from "../diet-plan.service";
import {CommentModel} from "../../comment/comment.model";
import {CommentBindingModel} from "../../comment/comment-binding.model";
import {AuthService} from "../../auth/auth.service";
import {UserService} from "../../user/user.service";
import {CommentService} from "../../comment/comment.service";
import {UserAuthModel} from "../../auth/user-auth.model";
import {UserModel} from "../../user/user.model";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-diet-plan-details',
    templateUrl: './diet-plan-details.component.html',
    styleUrls: ['./diet-plan-details.component.css']
})
export class DietPlanDetailsComponent implements OnInit {

    loading: boolean;

    dietPlan: DietPlan;
    dietPlanId: string;
    exercisesSets: any[];
    customColors: any[];
    macroNutrientsData: any[];

    commentBindingModel: CommentBindingModel;
    dietPlanComments: CommentModel[];
    isLoggedInUserModerator: boolean;
    loggedInUserUsername: string;


    constructor(private dietPlanService: DietPlanService,
                private authService: AuthService,
                private userService: UserService,
                private commentService: CommentService,
                private route: ActivatedRoute,
                private modalService: NgbModal,
                private router: Router,
                private titleService: Title) {
    }

    ngOnInit() {

        this.titleService.setTitle( 'FitBook' + '- Diet Plan Details' );

        this.dietPlan = new DietPlan();

        this.commentBindingModel = new CommentBindingModel();
        this.dietPlanComments = [];
        this.authService.user.subscribe((user: UserAuthModel) => {
            this.isLoggedInUserModerator = this.authService.isUserModerator(user.role);
        });

        this.userService.getLoggedInUserObservable().subscribe((user: UserModel) => {
            if (user) {
                this.loggedInUserUsername = user.username;
            }
        });

        this.route.params.subscribe((params: Params) => {

                this.dietPlanId = params['id'];
                this.fetchDietPlanDetails();
            }
        );

    }

    fetchDietPlanDetails(): void {

        this.loading = true;

        this.dietPlanService.getDietPlanById(this.dietPlanId).subscribe((dietPlan: DietPlan) => {
            if (dietPlan) {
                this.dietPlan = dietPlan;
                this.dietPlanComments = dietPlan.comments;
                this.makeChartDataForMacroNutrients();

                this.loading = false;
            }
        });
    }

    makeChartDataForMacroNutrients() {

        const stats = [];


        let counter = 1;

        for (const meal of this.dietPlan.meals) {

            const mealFoodStats = {
                "name": counter++ + '. ' + meal.meal.name,
                "series": [
                    {
                        "name": 'Protein',
                        "value": meal.meal.totalProtein
                    },
                    {
                        "name": 'Carbohydrates',
                        "value": meal.meal.totalCarbohydrates
                    },
                    {
                        "name": 'Fats',
                        "value": meal.meal.totalFats
                    }
                ]
            };

            stats.push(mealFoodStats);

        }

        this.macroNutrientsData = stats;
    }

    open(content) {


        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: "lg"}).result.then((result) => {

            this.loading = true;

            this.dietPlanService.copyDietPlanToMyDietPlans(this.dietPlanId).subscribe((dietPlan: DietPlan) => {
                this.loading = false;
                this.router.navigate(['my-diet-plans/', dietPlan.id])
            });
        }, (reason) => {
        });
    }

    exportToExcelHandler() {

        this.dietPlanService.exportDietPlanToExcel(this.dietPlanId).subscribe((blob: Blob) => {
            const url = window.URL.createObjectURL(blob);
            const anchor = document.createElement("a");
            anchor.download = this.dietPlan.name.replace(/\s+/g, '-').toLowerCase() + '.xlsx';
            anchor.href = url;
            anchor.click();

        })
    }

    onLikeHandler() {
        this.dietPlanService.likeDietPlan(this.dietPlan.id).subscribe((dietPlan: DietPlan) => {
            this.dietPlan = dietPlan;
        });
    }

    onPostHandler() {


        this.commentService.commentDietPlan(this.dietPlan.id, this.commentBindingModel).subscribe((comment: CommentModel) => {
            this.commentBindingModel = new CommentBindingModel();
            this.dietPlanComments.push(comment);
        });
    }

    onDeleteCommentHandler(id: string) {

        this.commentService.deleteDietPlanComment(id).subscribe(() => {
            this.fetchDietPlanDetails();
        })

    }

}
