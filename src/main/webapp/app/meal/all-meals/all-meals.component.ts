import {Component, OnInit} from '@angular/core';

import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {Meal} from "../meal.model";
import {MealService} from "../meal.service";

@Component({
  selector: 'app-all-meals',
  templateUrl: './all-meals.component.html',
  styleUrls: ['./all-meals.component.css']
})
export class AllMealsComponent implements OnInit {

  meals: Meal[];
  filteredMeals: Meal[];
  page: number = 1;
  pageSize: number = 6;

  selectedMealId: string;
  selectedMealForModal: Meal;

  constructor(private mealService: MealService, private modalService: NgbModal, private router: Router) {
  }

  ngOnInit() {

    this.mealService.fetchAllPublicMeals().subscribe((meals: Meal[]) => {
      if (meals) {
        this.meals = meals;
        this.filteredMeals = [...meals];
      }
    });


  }

  open(content, mealId) {

    this.selectedMealForModal = this.meals.find(e => e.id === mealId);

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {

      this.mealService.copyMealToLoggedUserMeals(mealId).subscribe((meal: Meal) => {
        this.router.navigate(['my-meals', meal.id])
      });
    }, (reason) => {
    });
  }

}
