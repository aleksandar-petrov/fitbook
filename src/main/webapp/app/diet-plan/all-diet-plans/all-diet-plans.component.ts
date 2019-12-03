import {Component, OnInit} from "@angular/core";
import {DietPlanService} from "../diet-plan.service";
import {Router} from "@angular/router";
import {DietPlan} from "../diet-plan.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-all-diet-plans',
  templateUrl: './all-diet-plans.component.html',
  styleUrls: ['./all-diet-plans.component.css']
})
export class AllDietPlansComponent implements OnInit {

  dietPlans: DietPlan[];
  filteredDietPlans: DietPlan[];
  page: number = 1;
  pageSize: number = 6;

  selectedDietPlanId: string;
  selectedDietPlanForModal: DietPlan;

  constructor(private dietPlanService: DietPlanService, private modalService: NgbModal, private router: Router) {
  }

  ngOnInit() {

    this.dietPlanService.getAllPublicDietPlans().subscribe((dietPlans: DietPlan[]) => {
      if (dietPlans) {
        this.dietPlans = dietPlans;
        this.filteredDietPlans = JSON.parse(JSON.stringify(dietPlans));
      }
    });


  }

  open(content, dietPlanId) {

    this.selectedDietPlanForModal = this.dietPlans.find(e => e.id === dietPlanId);

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: "lg", scrollable: true}).result.then((result) => {

      this.dietPlanService.copyDietPlanToMyDietPlans(dietPlanId).subscribe((dietPlan : DietPlan) => {
        this.router.navigate(['my-diet-plans', dietPlan.id])
      });
    }, (reason) => {
    });
  }

}
