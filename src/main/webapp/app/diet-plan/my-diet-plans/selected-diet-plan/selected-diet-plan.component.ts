import {Meal} from "../../../meal/meal.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {DietPlanService} from "../../diet-plan.service";
import {DietPlan} from "../../diet-plan.model";
import {GetConstantViewNamePipe} from "../../../get-constant-view-name.pipe";
import {MealService} from "../../../meal/meal.service";
import {moveItemInArray} from "@angular/cdk/drag-drop";
import {UserService} from "../../../user/user.service";
import {NutritionGoal} from "../../../user/nutrition-goal.model";


@Component({
    selector: 'app-selected-diet-plan',
    templateUrl: './selected-diet-plan.component.html',
    styleUrls: ['./selected-diet-plan.component.css']
})
export class SelectedDietPlanComponent implements OnInit {

    loading: boolean;

    @Output() mealDelete: EventEmitter<any> = new EventEmitter();

    selectedDietPlan: DietPlan;
    editDietPlanBindingModel: DietPlan;
    deletedMealsStack: string[];
    dietPlanId: string;
    loggedUserMeals: Meal[];

    editMode = false;
    muscleGroupSets: any[];
    customColors: any[];
    selectedMealForModal: Meal;
    selectedMealIdForModal: string;
    macroNutrientsData: any[];
    userNutritionGoal: NutritionGoal;


    constructor(private route: ActivatedRoute,
                private dietPlanService: DietPlanService,
                private mealService: MealService,
                private router: Router,
                private constantViewPipe: GetConstantViewNamePipe,
                private modalService: NgbModal,
                private userService: UserService
    ) {
    }

    ngOnInit() {

        this.loading = true;

        this.selectedDietPlan = new DietPlan();
        this.selectedMealForModal = new Meal();

        this.userService.getLoggedInUserObservable()
            .subscribe((user) => {
                if (user) {
                    this.userNutritionGoal = user.fitnessProfile.nutritionGoal;
                }
            });

        this.route.params.subscribe((params: Params) => {
                this.dietPlanId = params['id'];
                this.fetchDietPlanDetails();
            }
        );

        this.mealService.getLoggedInUserMeals().subscribe((meals: Meal[]) => {

            if (meals) {
                this.loggedUserMeals = meals;
                this.selectedMealForModal = meals[0];
                this.selectedMealIdForModal = meals[0].id;
            }

        });

        this.route.queryParams.subscribe((queryParams: Params) => {

            if (queryParams['edit']) {
                this.editMode = queryParams['edit'] === '1';
                if (this.editMode) {
                    this.editDietPlanBindingModel = JSON.parse(JSON.stringify(this.selectedDietPlan));
                    this.editDietPlanBindingModel.isPublic = this.selectedDietPlan.isPublic;
                    this.deletedMealsStack = [];
                }
            } else {
                this.editMode = false;
            }
        });
    }

    open(content) {
        this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            size: 'xl',
            scrollable: false
        }).result.then((result) => {
        }, (reason) => {
        });
    }

    openAddMealModal(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {

            this.dietPlanService.addMealFromMyMealsToMyDietPlan(this.dietPlanId, this.selectedMealIdForModal)
                .subscribe((dietPlan: DietPlan) => {
                    if (dietPlan) {
                        this.selectedDietPlan = dietPlan;
                        this.makeChartDataForMacroNutrients();
                    }
                });

        }, (reason) => {
        });
    }

    fetchDietPlanDetails()
        :
        void {
        this.dietPlanService.getLoggedInUserDietPlans().subscribe((dietPlans: DietPlan[]) => {
            if (dietPlans) {
                this.selectedDietPlan = dietPlans.find(w => w.id === this.dietPlanId);

                if (!this.selectedDietPlan) {
                    this.router.navigate(['/404']);
                }

                this.makeChartDataForMacroNutrients();
                this.loading = false;
            }
        });
    }


    onMealDeleteHandler(mealId: string, orderIndex: number) {
        this.editDietPlanBindingModel.meals =
            this.editDietPlanBindingModel.meals.filter(w => w.orderIndex !== orderIndex || w.id !== mealId);
        this.rearrangeOrderIndexes();
        this.recalculateBindingModelTotalNutrition();
    }


    onSaveHandler() {

        this.loading = true;

        this.dietPlanService.editMyDietPlan(this.dietPlanId, this.editDietPlanBindingModel).subscribe((dietPlan: DietPlan) => {
            this.selectedDietPlan = dietPlan;
            this.makeChartDataForMacroNutrients
            this.loading = false;
        });

        this.router.navigate(['./'], {relativeTo: this.route})
    }

    onDietPlanDeleteHandler() {

        this.dietPlanService.deleteMyDietPlan(this.dietPlanId).subscribe(result => {
            if (result) {
                this.router.navigate(['/my-diet-plans']);
            }
        });

    }

    recalculateBindingModelTotalNutrition() {

        let totalProtein = 0;
        let totalCarbohydrates = 0;
        let totalFats = 0;
        let totalCalories = 0;

        this.editDietPlanBindingModel.meals.forEach(m => {

            totalProtein += m.meal.totalProtein;
            totalCarbohydrates += m.meal.totalCarbohydrates;
            totalFats += m.meal.totalFats;
            totalCalories += m.meal.totalCalories;

        });

        this.editDietPlanBindingModel.totalProtein = totalProtein;
        this.editDietPlanBindingModel.totalCarbohydrates = totalCarbohydrates;
        this.editDietPlanBindingModel.totalFats = totalFats;
        this.editDietPlanBindingModel.totalCalories = totalCalories;

    }

    onDrop(event: any) {
        moveItemInArray(this.editDietPlanBindingModel.meals, event.previousIndex, event.currentIndex);
        this.rearrangeOrderIndexes();
    }

    rearrangeOrderIndexes() {
        const meals = this.editDietPlanBindingModel.meals;

        for (let i = 0; i < meals.length; i++) {
            meals[i].orderIndex = i + 1;
        }
    }

    setSelectedMealForModal() {
        this.selectedMealForModal = this.loggedUserMeals.filter(w => w.id === this.selectedMealIdForModal)[0];
    }


    exportToExcelHandler() {

        this.dietPlanService.exportDietPlanToExcel(this.selectedDietPlan.id).subscribe((blob: Blob) => {
            const url = window.URL.createObjectURL(blob);
            const anchor = document.createElement("a");
            anchor.download = this.selectedDietPlan.name.replace(/\s+/g, '-').toLowerCase() + '.xlsx';
            anchor.href = url;
            anchor.click();

        })
    }

    makeChartDataForMacroNutrients() {

        const stats = [];


        let counter = 1;

        for (const meal of this.selectedDietPlan.meals) {

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

}
