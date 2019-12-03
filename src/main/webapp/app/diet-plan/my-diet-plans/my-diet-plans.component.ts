import {DietPlanBindingModel} from "../diet-plan-binding-model";
import {ActivatedRoute, NavigationEnd, Params, Router, RouterEvent} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Component, OnInit} from "@angular/core";
import {filter} from "rxjs/operators";
import {AuthService} from "../../auth/auth.service";
import {DietPlanService} from "../diet-plan.service";
import {DietPlan} from "../diet-plan.model";

@Component({
  selector: 'app-my-diet-plans',
  templateUrl: './my-diet-plans.component.html',
  styleUrls: ['./my-diet-plans.component.css']
})
export class MyDietPlansComponent implements OnInit {

  dietPlans: DietPlan[];
  selectedDietPlanId: string;
  dietPlanBindingModel: DietPlanBindingModel;
  loggedUserId: string;

  constructor(private modalService: NgbModal,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private dietPlanService: DietPlanService) {
  }

  ngOnInit() {

    this.router.events.pipe(
        filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.fetchDietPlans();
    });

    this.setSelectedDietPlanIdFromParams();
    this.fetchDietPlans();
    this.dietPlanBindingModel = new DietPlanBindingModel();
  }

  setSelectedDietPlanIdFromParams() {
    this.route.firstChild.params.subscribe((params: Params) => {
      this.selectedDietPlanId = params['id'] ? params['id'] : undefined;
    });
  }

  fetchDietPlans() {
    this.dietPlanService.getLoggedInUserDietPlans().subscribe((dietPlans: DietPlan[]) => {
      this.dietPlans = dietPlans;
    })
  }

  onDietPlanButtonClick(id: string) {

    this.selectedDietPlanId = id;
    this.router.navigate([id], {relativeTo: this.route});
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.dietPlanService.createDietPlan(this.dietPlanBindingModel)
          .subscribe((dietPlan: DietPlan) => {
            if (dietPlan) {
              this.fetchDietPlans();
              this.router.navigate(['my-diet-plans/' + dietPlan.id])
            }
          });
      this.dietPlanBindingModel = new DietPlanBindingModel();
    }, (reason) => {
    });
  }

  onRouterOutletDeactivate() {
    this.fetchDietPlans();
  }

  onRouterOutletActivate() {
    this.setSelectedDietPlanIdFromParams();
  }

}
