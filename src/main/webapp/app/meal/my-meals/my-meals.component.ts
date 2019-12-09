import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AuthService} from "../../auth/auth.service";
import {ActivatedRoute, NavigationEnd, Params, Router, RouterEvent} from "@angular/router";
import {filter} from "rxjs/operators";
import {Meal} from "../meal.model";
import {MealBindingModel} from "../meal-binding-model";
import {MealService} from "../meal.service";

@Component({
    selector: 'app-my-meals',
    templateUrl: './my-meals.component.html',
    styleUrls: ['./my-meals.component.css']
})
export class MyMealsComponent implements OnInit {

    meals: Meal[];
    selectedMealId: string;
    mealBindingModel: MealBindingModel;
    loggedUserId: string;

    constructor(private modalService: NgbModal, private mealService: MealService, private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {

        this.router.events.pipe(
            filter((event: RouterEvent) => event instanceof NavigationEnd)
        ).subscribe(() => {
            this.fetchMeals();
        });

        this.setSelectedMealIdFromParams();
        this.fetchMeals();
        this.mealBindingModel = new MealBindingModel();
    }

    fetchMeals() {
        this.mealService.getLoggedInUserMeals().subscribe((meals: Meal[]) => {
            meals.sort((w1, w2) => w1.name.localeCompare(w2.name));
            this.meals = meals;
        })
    }

    open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.mealService.createMeal(this.mealBindingModel)
                .subscribe((meal: Meal) => {
                    this.fetchMeals();
                    this.router.navigate(['my-meals/' + meal.id])
                });
            this.mealBindingModel = new MealBindingModel();
        }, (reason) => {
        });
    }

    setSelectedMealIdFromParams() {
        this.route.firstChild.params.subscribe((params: Params) => {
            this.selectedMealId = params['id'] ? params['id'] : undefined;
        });
    }

    onMealButtonClick(mealId: string) {
        this.selectedMealId = mealId;
        this.router.navigate([mealId], {relativeTo: this.route})
    }

    onRouterOutletDeactivate() {
        this.fetchMeals();
    }

    onRouterOutletActivate() {
        this.setSelectedMealIdFromParams();
        this.fetchMeals();
    }
}


