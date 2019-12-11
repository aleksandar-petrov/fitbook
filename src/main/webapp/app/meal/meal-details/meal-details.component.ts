import {Component, OnInit} from '@angular/core';
import {Meal} from "../meal.model";
import {MealService} from "../meal.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CommentModel} from "../../comment/comment.model";
import {CommentBindingModel} from "../../comment/comment-binding.model";
import {CommentService} from "../../comment/comment.service";
import {UserAuthModel} from "../../auth/user-auth.model";
import {UserModel} from "../../user/user.model";
import {AuthService} from "../../auth/auth.service";
import {UserService} from "../../user/user.service";

@Component({
    selector: 'app-meal-details',
    templateUrl: './meal-details.component.html',
    styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent implements OnInit {

    meal: Meal;
    mealId: string;
    macroNutrientsData: any[];

    commentBindingModel: CommentBindingModel;
    mealComments: CommentModel[];
    isLoggedInUserModerator: boolean;
    loggedInUserUsername: string;


    constructor(private mealService: MealService,
                private authService: AuthService,
                private userService: UserService,
                private commentService: CommentService,
                private route: ActivatedRoute,
                private modalService: NgbModal,
                private router: Router) {
    }

    ngOnInit() {

        this.meal = new Meal();

        this.commentBindingModel = new CommentBindingModel();
        this.mealComments = [];
        this.authService.user.subscribe((user: UserAuthModel) => {
            this.isLoggedInUserModerator = this.authService.isUserModerator(user.role);
        });

        this.userService.getLoggedInUserObservable().subscribe((user: UserModel) => {
            if (user) {
                this.loggedInUserUsername = user.username;
            }
        });

        this.route.params.subscribe((params: Params) => {
                this.mealId = params['id'];
                this.fetchMealDetails();
            }
        );

    }

    fetchMealDetails(): void {
        this.mealService.fetchMealById(this.mealId).subscribe((meal: Meal) => {
            if (meal) {
                this.meal = meal;
                this.mealComments = meal.comments;

                this.makeChartDataForMacroNutrients();
            }
        });
    }

    makeChartDataForMacroNutrients() {

        const stats = [];

        let counter = 1;
        for (const mealFood of this.meal.foods) {

            const mealFoodStats = {
                "name": counter++ + '. ' + mealFood.food.name,
                "series": [
                    {
                        "name": 'Protein',
                        "value": mealFood.proteinPerServing
                    },
                    {
                        "name": 'Carbohydrates',
                        "value": mealFood.carbohydratesPerServing
                    },
                    {
                        "name": 'Fats',
                        "value": mealFood.fatsPerServing
                    }
                ]
            };

            stats.push(mealFoodStats);

            this.macroNutrientsData = stats;

        }
    }

    open(content) {


        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {

            this.mealService.copyMealToLoggedUserMeals(this.mealId).subscribe((meal: Meal) => {
                this.router.navigate(['my-meals', meal.id])
            });
        }, (reason) => {
        });
    }

    onLikeHandler() {
        this.mealService.likeMeal(this.meal.id).subscribe((meal: Meal) => {
            this.meal = meal;
        });
    }

    onPostHandler() {


        this.commentService.commentMeal(this.meal.id, this.commentBindingModel).subscribe((comment: CommentModel) => {
            this.commentBindingModel = new CommentBindingModel();
            this.mealComments.push(comment);
        });
    }

    onDeleteCommentHandler(id: string) {

        this.commentService.deleteMealComment(id).subscribe(() => {
            this.fetchMealDetails();
        })

    }

}
