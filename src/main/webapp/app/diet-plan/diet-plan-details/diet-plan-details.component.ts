import {ActivatedRoute, Params, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Component, OnInit} from "@angular/core";
import {DietPlan} from "../diet-plan.model";
import {DietPlanService} from "../diet-plan.service";

@Component({
    selector: 'app-diet-plan-details',
    templateUrl: './diet-plan-details.component.html',
    styleUrls: ['./diet-plan-details.component.css']
})
export class DietPlanDetailsComponent implements OnInit {

    dietPlan: DietPlan;
    dietPlanId: string;
    exercisesSets: any[];
    customColors: any[];
    macroNutrientsData: any[];


    constructor(private dietPlanService: DietPlanService,
                private route: ActivatedRoute,
                private modalService: NgbModal,
                private router: Router) {
    }

    ngOnInit() {

        this.dietPlan = new DietPlan();

        this.route.params.subscribe((params: Params) => {

                this.dietPlanId = params['id'];
                this.fetchDietPlanDetails();
            }
        );

    }

    fetchDietPlanDetails(): void {
        this.dietPlanService.getDietPlanById(this.dietPlanId).subscribe((dietPlan: DietPlan) => {
            if (dietPlan) {
                this.dietPlan = dietPlan;
                this.makeChartDataForMacroNutrients();
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

            this.dietPlanService.copyDietPlanToMyDietPlans(this.dietPlanId).subscribe((dietPlan: DietPlan) => {
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

}
