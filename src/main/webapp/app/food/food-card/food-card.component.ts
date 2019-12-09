import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Exercise} from "../../exercise/exercise.model";
import {GetConstantViewNamePipe} from "../../get-constant-view-name.pipe";
import {Food} from "../food.model";

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css']
})
export class FoodCardComponent implements OnInit {


  @Input() food: Food;
  @Output() modalOpen: EventEmitter<any> = new EventEmitter();


  constructor() { }



  ngOnInit() {
  }


  addToMealHandler(id: string) {
    this.modalOpen.emit(id);
  }

}