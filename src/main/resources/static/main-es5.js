(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/admin-panel/admin-panel.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/admin-panel/admin-panel.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div *ngIf=\"loading\" class=\"loader-container\">\n        <img src=\"assets/static/images/global-loader.gif\" alt=\"Loader\">\n    </div>\n\n    <div class=\"jumbotron\">\n        <div class=\"container\">\n\n            <img src=\"assets/static/images/logo.png\" height=\"300px\" class=\"align-center\" alt=\"\">\n            <h1 class=\"display-4\">Admin Panel</h1>\n        </div>\n\n\n        <div class=\"row justify-content-center\">\n        </div>\n\n\n        <hr class=\"my-4\">\n        <div class=\"container justify-content-center pb-0\">\n            <ng-template [ngIf]=\"users.length > 0\" [ngIfElse]=\"noSuchUsers\">\n\n\n                <div class=\"results-container col-10 mx-auto py-2\">\n                    <h2 class=\"font-weight-bold text-center py-4\">All Users</h2>\n                    <table class=\"table table-striped table-hover mb-4\">\n                        <thead>\n                        <tr>\n                            <th scope=\"col\" style=\"width: 10%\">Order</th>\n                            <th scope=\"col\" style=\"width: 25%\">Username</th>\n                            <th scope=\"col\" style=\"width: 25%\">Role</th>\n                            <th scope=\"col\" style=\"width: 40%\">Actions</th>\n\n                        </tr>\n                        </thead>\n                        <tbody>\n\n                        <tr *ngFor=\"let user of users| slice: (page-1) * pageSize : (page-1) * pageSize + pageSize; let i = index\">\n                            <td class=\"align-middle\">{{i + 1 + (page - 1) * pageSize}}</td>\n                            <td class=\"align-middle\">{{user.username}}</td>\n                            <td class=\"align-middle\">{{(user.role | getConstantViewName | slice:4)}}</td>\n                            <td>\n                                <ng-template [ngIf]=\"user.role !== 'roleRootAdmin'\">\n                                    <button type=\"button\" *ngIf=\"user.role !== 'roleAdmin'\"\n                                            class=\"btn btn-success mr-2\" (click)=\"onPromoteHandler(user.id)\">\n                                        Promote\n                                    </button>\n                                    <button type=\"button\" *ngIf=\"user.role === 'roleAdmin'\"\n                                            class=\"btn btn-success mr-2\" style=\"visibility: hidden\">\n                                        Promote\n                                    </button>\n                                    <button type=\"button\" *ngIf=\"user.role !== 'roleUser' && !(user.role === 'roleAdmin' && loggedUserRole ==='ROLE_ADMIN')\"\n                                            class=\"btn btn-danger mr-2\" (click)=\"onDemoteHandler(user.id)\">\n                                        Demote\n                                    </button>\n                                    <button type=\"button\" *ngIf=\"user.role === 'roleUser' || (user.role === 'roleAdmin' && loggedUserRole ==='ROLE_ADMIN')\"\n                                            class=\"btn btn-success mr-2\" style=\"visibility: hidden\">\n                                        Demote\n                                    </button>\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <ngb-pagination class=\"d-inline-block mt-5\" [(page)]=\"page\"\n                                [pageSize]=\"pageSize\"\n                                [collectionSize]=\"users.length\"></ngb-pagination>\n            </ng-template>\n\n            <ng-template #noSuchUsers>\n                <h5>There are no foods with given description.</h5>\n            </ng-template>\n\n        </div>\n\n\n    </div>\n\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/app.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/app.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n\r\n<main>\r\n  <router-outlet></router-outlet>\r\n</main>\r\n\r\n<app-footer></app-footer>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/diet-plan/all-diet-plans/all-diet-plans.component.html": 
        /*!**************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/diet-plan/all-diet-plans/all-diet-plans.component.html ***!
          \**************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n    <div *ngIf=\"loading\" class=\"loader-container\">\n        <img src=\"assets/static/images/global-loader.gif\" alt=\"Loader\">\n    </div>\n\n    <ng-template #copyDietPlanToMyDietPlansModal let-modal>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Copy Diet Plan To My Diet Plans</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <form #createDietPlanForm=\"ngForm\">\n                <h5 class=\"text-center\">{{selectedDietPlanForModal.name}}</h5>\n                <table class=\"table table-striped table-hover mb-4 text-center\" *ngFor=\"let meal of selectedDietPlanForModal.meals\">\n                    <thead>\n                    <tr>\n                        <th colspan=\"6\" class=\"py-auto\"><h5>{{meal.meal.name}}</h5></th>\n                    </tr>\n                    <tr *ngIf=\"meal.meal.foods && !meal.meal.foods.length\">\n                        <td colspan=\"6\" class=\"py-auto\"><h5>No added foods in this meal.</h5></td>\n                    </tr>\n                    <tr *ngIf=\"meal.meal.foods && meal.meal.foods.length\">\n                        <th scope=\"col\" style=\"width: 25%\">Food name</th>\n                        <th scope=\"col\" style=\"width: 15%\">Serving</th>\n                        <th scope=\"col\" style=\"width: 15%\">P</th>\n                        <th scope=\"col\" style=\"width: 15%\">C</th>\n                        <th scope=\"col\" style=\"width: 15%\">F</th>\n                        <th scope=\"col\" style=\"width: 15%\">Calories</th>\n                    </tr>\n                    </thead>\n                    <tbody *ngIf=\"meal.meal.foods && meal.meal.foods.length\">\n                    <tr *ngFor=\"let food of meal.meal.foods\">\n                        <td class=\"align-middle\">{{food.food.name}}</td>\n                        <td class=\"align-middle\">{{food.serving}} g.</td>\n                        <td class=\"align-middle\">{{food.proteinPerServing}} g.</td>\n                        <td class=\"align-middle\">{{food.carbohydratesPerServing}} g.</td>\n                        <td class=\"align-middle\">{{food.fatsPerServing}} g.</td>\n                        <td class=\"align-middle\">{{food.caloriesPerServing}}</td>\n                    </tr>\n\n                    <tr>\n                        <td colspan=\"2\" class=\"align-middle text-center\">Total:</td>\n                        <td class=\"align-middle\">{{meal.meal.totalProtein}} g.</td>\n                        <td class=\"align-middle\">{{meal.meal.totalCarbohydrates}} g.</td>\n                        <td class=\"align-middle\">{{meal.meal.totalFats}} g.</td>\n                        <td class=\"align-middle\">{{meal.meal.totalCalories}}</td>\n                    </tr>\n\n                    </tbody>\n                </table>\n            </form>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Copy to My Diet Plans</button>\n        </div>\n    </ng-template>\n\n    <div class=\"jumbotron\">\n        <div class=\"container\">\n\n            <img src=\"assets/static/images/logo.png\" height=\"300px\" class=\"align-center\" alt=\"\">\n            <h1 class=\"display-4\">All Diet Plans</h1>\n        </div>\n\n\n        <hr class=\"my-4\">\n        <div class=\"container justify-content-center pb-0\">\n            <ng-template [ngIf]=\"filteredDietPlans.length > 0\" [ngIfElse]=\"noSuchDietPlans\">\n                <div class=\"row\">\n                    <app-diet-plan-card\n                            (modalOpen)=\"open(copyDietPlanToMyDietPlansModal, $event)\"\n                            [dietPlan]=\"dietPlan\"\n                            class=\"col-lg-4 col-sm-12 my-3 d-flex mx-auto align-items-stretch\"\n                            *ngFor=\"let dietPlan of filteredDietPlans | slice: (page-1) * pageSize : (page-1) * pageSize + pageSize\">\n                        >\n                    </app-diet-plan-card>\n                </div>\n                <ngb-pagination class=\"d-inline-block mt-5\" [(page)]=\"page\"\n                                [pageSize]=\"pageSize\"\n                                [collectionSize]=\"filteredDietPlans.length\"></ngb-pagination>\n            </ng-template>\n\n            <ng-template #noSuchDietPlans>\n                <h5>There are no diet plans.</h5>\n            </ng-template>\n\n        </div>\n\n\n    </div>\n\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/diet-plan/diet-plan-card/diet-plan-card.component.html": 
        /*!**************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/diet-plan/diet-plan-card/diet-plan-card.component.html ***!
          \**************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card d-inline-flex col-12\">\n    <div class=\"card-body\">\n        <h3 class=\"card-title\">{{dietPlan.name}}</h3>\n        <hr/>\n        <h4 class=\"font-weight-light pb-2\">Creator: <a class=\"card-link\"\n                                                       routerLink=\"/profile/{{dietPlan.creator.username}}\">{{dietPlan.creator.username}}</a>\n        </h4>\n        <hr/>\n        <div class=\"row\">\n            <h4 class=\"col-7 font-weight-light my-auto p-1\">{{dietPlan.likesCount}} Likes</h4>\n            <button class=\"button button-like my-auto\" (click)=\"onLikeHandler()\" [ngClass]=\"{'liked': dietPlan.isLiked}\"\n                    type=\"button\">\n                <i class=\"fa fa-heart\"></i>\n                <span>Like</span>\n            </button>\n        </div>\n        <hr/>\n\n        <h3 class=\"text-center font-weight-bold\">Calories: {{dietPlan.totalCalories}}</h3>\n        <div class=\"chart-container row align-middle\">\n            <ngx-charts-pie-chart\n                [results]=\"macroNutrientsData\"\n                [animations]=\"true\"\n                [trimLabels]=\"false\"\n                [doughnut]=\"true\"\n                >\n\n            </ngx-charts-pie-chart>\n\n            <div class=\"macros text-center mx-auto\">\n                <h5 class=\"font-weight-light \">\n                    Protein: {{dietPlan.totalProtein}}g.</h5>\n                <h5 class=\"font-weight-light \">\n                    Carbohydrates: {{dietPlan.totalCarbohydrates}}g.</h5>\n                <h5 class=\"font-weight-light \">Fats: {{dietPlan.totalFats}}\n                    g.</h5>\n            </div>\n        </div>\n\n        <hr class=\"mb-5\"/>\n        <div class=\"buttons-wrapper left\">\n            <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"copyToMyDietPlansHandler(dietPlan.id)\">Copy To\n                My Plans\n            </button>\n        </div>\n        <div class=\"buttons-wrapper right\">\n            <a routerLink=\"/diet-plans/details/{{dietPlan.id}}\" class=\"btn btn-sm btn-info\">Details</a>\n        </div>\n\n    </div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/diet-plan/diet-plan-details/diet-plan-details.component.html": 
        /*!********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/diet-plan/diet-plan-details/diet-plan-details.component.html ***!
          \********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n    <ng-template #copyDietPlanToMyDietPlansModal let-modal>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Copy Diet Plan To My Diet Plans</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <form #createDietPlanForm=\"ngForm\">\n                <h5 class=\"text-center\">{{dietPlan.name}}</h5>\n                <table class=\"table table-striped table-hover mb-4 text-center\" *ngFor=\"let meal of dietPlan.meals\">\n                    <thead>\n                    <tr>\n                        <th colspan=\"6\" class=\"py-auto\"><h5>{{meal.meal.name}}</h5></th>\n                    </tr>\n                    <tr *ngIf=\"meal.meal.foods && !meal.meal.foods.length\">\n                        <td colspan=\"6\" class=\"py-auto\"><h5>No added foods in this meal.</h5></td>\n                    </tr>\n                    <tr *ngIf=\"meal.meal.foods && meal.meal.foods.length\">\n                        <th scope=\"col\" style=\"width: 25%\">Food name</th>\n                        <th scope=\"col\" style=\"width: 15%\">Serving</th>\n                        <th scope=\"col\" style=\"width: 15%\">P</th>\n                        <th scope=\"col\" style=\"width: 15%\">C</th>\n                        <th scope=\"col\" style=\"width: 15%\">F</th>\n                        <th scope=\"col\" style=\"width: 15%\">Calories</th>\n                    </tr>\n                    </thead>\n                    <tbody *ngIf=\"meal.meal.foods && meal.meal.foods.length\">\n                    <tr *ngFor=\"let food of meal.meal.foods\">\n                        <td class=\"align-middle\">{{food.food.name}}</td>\n                        <td class=\"align-middle\">{{food.serving}} g.</td>\n                        <td class=\"align-middle\">{{food.proteinPerServing}} g.</td>\n                        <td class=\"align-middle\">{{food.carbohydratesPerServing}} g.</td>\n                        <td class=\"align-middle\">{{food.fatsPerServing}} g.</td>\n                        <td class=\"align-middle\">{{food.caloriesPerServing}}</td>\n                    </tr>\n\n                    <tr>\n                        <td colspan=\"2\" class=\"align-middle text-center\">Total:</td>\n                        <td class=\"align-middle\">{{meal.meal.totalProtein}} g.</td>\n                        <td class=\"align-middle\">{{meal.meal.totalCarbohydrates}} g.</td>\n                        <td class=\"align-middle\">{{meal.meal.totalFats}} g.</td>\n                        <td class=\"align-middle\">{{meal.meal.totalCalories}}</td>\n                    </tr>\n\n                    </tbody>\n                </table>\n            </form>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Copy to My Diet Plans</button>\n        </div>\n    </ng-template>\n\n\n    <div class=\"jumbotron\">\n        <img src=\"assets/static/images/logo.png\" height=\"300px\" class=\"d-inline-block align-center\" alt=\"\">\n        <h1 class=\"display-4\">Diet Plan Details</h1>\n        <hr class=\"my-2\"/>\n        <div class=\"container pt-4\">\n            <div class=\"row\">\n                <div class=\"diet-plan-container col-lg-9 mx-auto\">\n                    <div class=\"exercise-intro mt-4\">\n                        <h2 class=\"display-4 d-block mx-auto font-weight-bolder\">{{dietPlan.name}}</h2>\n                    </div>\n\n                    <hr class=\"my-4\"/>\n\n                    <h3 class=\"font-weight-light pb-3\">Creator: <a class=\"card-link\"\n                                                                   routerLink=\"/profile/{{dietPlan.creator.username}}\">{{dietPlan.creator.username}}</a>\n                    </h3>\n\n                    <hr/>\n                    <div class=\"row mb-3\">\n                        <h4 class=\"col-7 font-weight-light my-auto p-1\">{{dietPlan.likesCount}} Likes</h4>\n                        <button class=\"button button-like my-auto\" (click)=\"onLikeHandler()\"\n                                [ngClass]=\"{'liked': dietPlan.isLiked}\" type=\"button\">\n                            <i class=\"fa fa-heart\"></i>\n                            <span>Like</span>\n                        </button>\n                    </div>\n\n                    <table class=\"table table-striped table-hover mb-4\"\n                           *ngFor=\"let meal of dietPlan.meals\">\n                        <h4 class=\"order-index-meal font-weight-bold font-italic\">{{meal.orderIndex}}</h4>\n                        <thead>\n                        <tr>\n                            <th colspan=\"7\" class=\"py-auto\"><h5><a\n                                    routerLink=\"/meals/details/{{meal.meal.id}}\">{{meal.meal.name}}</a>\n                            </h5></th>\n                        </tr>\n                        <tr *ngIf=\"meal.meal.foods && !meal.meal.foods.length\">\n                            <td colspan=\"7\" class=\"py-auto\"><h5>No added foods in this meal.</h5></td>\n                        </tr>\n                        <tr *ngIf=\"meal.meal.foods && meal.meal.foods.length\">\n                            <th scope=\"col\" style=\"width: 25%\">Food name</th>\n                            <th scope=\"col\" style=\"width: 15%\">Serving</th>\n                            <th scope=\"col\" style=\"width: 10%\">P</th>\n                            <th scope=\"col\" style=\"width: 10%\">C</th>\n                            <th scope=\"col\" style=\"width: 10%\">F</th>\n                            <th scope=\"col\" style=\"width: 10%\">Calories</th>\n                            <th scope=\"col\" style=\"width: 20%;\"></th>\n                        </tr>\n                        </thead>\n                        <tbody *ngIf=\"meal.meal.foods && meal.meal.foods.length\">\n\n                        <tr *ngFor=\"let food of meal.meal.foods\">\n                            <td class=\"align-middle\">{{food.food.name}}</td>\n                            <td class=\"align-middle\">{{food.serving}} g.</td>\n                            <td class=\"align-middle\">{{food.proteinPerServing}} g.</td>\n                            <td class=\"align-middle\">{{food.carbohydratesPerServing}} g.</td>\n                            <td class=\"align-middle\">{{food.fatsPerServing}} g.</td>\n                            <td class=\"align-middle\">{{food.caloriesPerServing}}</td>\n                            <td>\n                                <button type=\"button\" routerLink=\"/foods/details/{{food.food.id}}\"\n                                        class=\"btn btn-primary mr-2\"><i class=\"far fa-eye\"></i></button>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td colspan=\"2\" class=\"align-middle text-center\">Total: </td>\n                            <td class=\"align-middle\">{{meal.meal.totalProtein}} g.</td>\n                            <td class=\"align-middle\">{{meal.meal.totalCarbohydrates}} g.</td>\n                            <td class=\"align-middle\">{{meal.meal.totalFats}} g.</td>\n                            <td class=\"align-middle\">{{meal.meal.totalCalories}}</td>\n                            <td class=\"align-middle\"></td>\n                        </tr>\n                        </tbody>\n                    </table>\n\n\n                    <ng-template [ngIf]=\"dietPlan.meals && dietPlan.meals.length\">\n\n                        <hr class=\"my-2\"/>\n\n                        <h2 class=\"mx-auto font-weight-bold\">Diet Plan Nutrition</h2>\n\n                        <h3 class=\"text-center font-weight-light\">Calories: {{dietPlan.totalCalories}}</h3>\n                        <div class=\"macros text-center mx-auto\">\n                            <h3 class=\"font-weight-light \">\n                                Protein: {{dietPlan.totalProtein}}g.</h3>\n                            <h3 class=\"font-weight-light \">\n                                Carbohydrates: {{dietPlan.totalCarbohydrates}}g.</h3>\n                            <h3 class=\"font-weight-light \">Fats: {{dietPlan.totalFats}}\n                                g.</h3>\n                            <span class=\"display-5 opacity-5\"><i\n                                    class=\"fas fa-utensils fa-lg\"></i></span>\n                        </div>\n                        <div class=\"chart-container row align-middle\">\n                            <ngx-charts-bar-horizontal-2d *ngIf=\"macroNutrientsData\"\n                                                          class=\"mx-auto\"\n                                                          [view]=\"[800, 600]\"\n                                                          [animations]=\"true\"\n                                                          [xAxis]=\"true\"\n                                                          [yAxis]=\"true\"\n                                                          [results]=\"macroNutrientsData\"\n                                                          [trimXAxisTicks]=\"false\"\n                                                          legendTitle=\"Nutrition\"\n                                                          [legend]=\"true\"\n                                                          [showXAxisLabel]=\"true\"\n                                                          [showDataLabel]=\"true\"\n                                                          [showGridLines]=\"true\"\n                                                          [showYAxisLabel]=\"true\"\n                                                          [gradient]=\"true\"\n                                                          [noBarWhenZero]=\"true\"\n                                                          [roundDomains]=\"true\"\n                                                          [tooltipDisabled]=\"false\"\n                                                          [trimYAxisTicks]=\"false\">\n\n                            </ngx-charts-bar-horizontal-2d>\n\n\n                        </div>\n                    </ng-template>\n\n                    <h3 *ngIf=\"dietPlan && !dietPlan.meals.length\">No added meals.</h3>\n\n                    <div class=\"buttons col-12 mx-auto p-3\">\n                        <button type=\"button\" class=\"btn btn-success\" (click)=\"open(copyDietPlanToMyDietPlansModal)\">\n                            Copy to My Diet Plans\n                        </button>\n\n                        <button type=\"button\"\n                                class=\"btn btn-info my-3 mx-2\" (click)=\"exportToExcelHandler()\">Export to Excel\n                        </button>\n                    </div>\n\n                </div>\n\n\n            </div>\n\n            <div class=\"diet-plan-container col-lg-9 mx-auto row mt-5\">\n\n                <h2 class=\"d-block py-5 mx-auto font-weight-bolder\">Comments Section</h2>\n\n                <div class=\"col-12\">\n                    <div class=\"comment-wrapper\">\n                        <div class=\"panel panel-info\">\n                            <div class=\"panel-body\">\n                                <form #postForm=\"ngForm\">\n                                        <textarea class=\"form-control\" placeholder=\"Write a comment...\"\n                                                  #comment=\"ngModel\"\n                                                  name=\"comment\"\n                                                  rows=\"3\" [(ngModel)]=\"commentBindingModel.comment\"\n                                                  required></textarea>\n                                </form>\n                                <br>\n                                <button type=\"button\" class=\"btn btn-info\" [disabled]=\"comment.invalid\"\n                                        (click)=\"onPostHandler()\">Post\n                                </button>\n                                <div class=\"clearfix\"></div>\n                                <hr>\n                                <ul class=\"media-list\">\n                                    <li *ngIf=\"dietPlanComments && !dietPlanComments.length\">\n                                        <h4>\n                                            No comments.\n                                        </h4>\n                                    </li>\n                                    <li class=\"media\" *ngFor=\"let comment of dietPlanComments\">\n                                        <div class=\"text-center row\">\n                                            <div class=\"col-12 text-center\">\n                                                <a routerLink=\"/profile/{{comment.username}}\" class=\"d-block\">\n                                                    <img src=\"{{comment.profilePictureURL}}\"\n                                                         alt=\"Profile Picture\">\n                                                </a>\n                                                <a routerLink=\"/profile/{{comment.username}}\" class=\"d-block\">\n                                                    <strong class=\"d-block text-success\">@{{comment.username}}</strong>\n                                                </a>\n\n                                            </div>\n\n                                        </div>\n\n                                        <div class=\"media-body\">\n                                <span class=\"text-muted float-right\">\n                                    <small class=\"text-muted\">{{comment.postedOn | commentDate}}</small>\n                                </span>\n\n                                            <button *ngIf=\"isLoggedInUserModerator || dietPlan.creator.username === loggedInUserUsername || comment.username === loggedInUserUsername\"\n                                                    type=\"button\" (click)=\"onDeleteCommentHandler(comment.id)\"\n                                                    class=\"btn btn-danger delete-btn ml-3 comment-delete-btn\"><i\n                                                    class=\"far fa-trash-alt\"></i></button>\n                                            <h4 class=\"mt-3 comment mr-2 font font-weight-light\">\n                                                {{comment.comment}}\n                                            </h4>\n                                        </div>\n                                        <div class=\"clearfix\"></div>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n\n        </div>\n\n    </div>\n\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/diet-plan/my-diet-plans/my-diet-plans.component.html": 
        /*!************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/diet-plan/my-diet-plans/my-diet-plans.component.html ***!
          \************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n    <div *ngIf=\"loading\" class=\"loader-container\">\n        <img src=\"assets/static/images/global-loader.gif\" alt=\"Loader\">\n    </div>\n\n    <ng-template #createDietPlanModal let-modal>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Create Diet Plan</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <form #createDietPlanForm=\"ngForm\">\n                <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"inputDietPlanName\">Diet Plan Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"inputDietPlanName\" name=\"name\" #inputdietPlanName=\"ngModel\"\n                               required\n                               [ngClass]=\"{'is-valid': inputdietPlanName.valid && inputdietPlanName.touched,\n                               'is-invalid': inputdietPlanName.invalid && inputdietPlanName.touched}\"\n                               [(ngModel)]=\"dietPlanBindingModel.name\">\n                        <div class=\"valid-feedback\"></div>\n                        <div class=\"invalid-feedback\">\n                            Diet Plan Name is required.\n                        </div>\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"inputStatus\">Status</label>\n                        <select id=\"inputStatus\" name=\"status\" class=\"form-control\" #inputDietPlanStatus\n                                [(ngModel)]=\"dietPlanBindingModel.isPublic\">\n                            <option [ngValue]=\"true\" selected>Public</option>\n                            <option [ngValue]=\"false\">Private</option>\n                        </select>\n                    </div>\n                </div>\n            </form>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" [disabled]=\"createDietPlanForm.invalid\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Save</button>\n        </div>\n    </ng-template>\n\n    <div class=\"jumbotron\">\n        <img src=\"assets/static/images/logo.png\" height=\"300px\" class=\"d-inline-block align-center\" alt=\"\">\n        <h1 class=\"display-4\">My Diet Plans</h1>\n        <div class=\"container pt-4\">\n            <div class=\"row\">\n                <div class=\"col-lg-4 mx-auto\">\n                    <h2>Diet Plans</h2>\n                    <hr/>\n                    <div class=\"list-group\" *ngIf=\"dietPlans && dietPlans.length\">\n                        <button type=\"button\" class=\"list-group-item list-group-item-action\"\n                                [ngClass]=\"{'active': selectedDietPlanId === dietPlan.id}\"\n                                (click)=\"onDietPlanButtonClick(dietPlan.id)\"\n                                *ngFor=\"let dietPlan of dietPlans\">\n                            {{dietPlan.name}}\n                        </button>\n                    </div>\n\n                    <h5 *ngIf=\"!dietPlans || !dietPlans.length\">You don't have any created diet plans.</h5>\n\n\n                    <button type=\"button\" class=\"btn btn-success mt-3\" (click)=\"open(createDietPlanModal)\">Create Diet Plan</button>\n                </div>\n                <div class=\"col-lg-8 mx-auto\">\n                    <h2>Selected Diet Plan</h2>\n                    <hr/>\n                    <router-outlet (deactivate)=\"onRouterOutletDeactivate()\" (activate)=\"onRouterOutletActivate()\"></router-outlet>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/diet-plan/my-diet-plans/no-selected-diet-plan/no-selected-diet-plan.component.html": 
        /*!******************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/diet-plan/my-diet-plans/no-selected-diet-plan/no-selected-diet-plan.component.html ***!
          \******************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h4>No selected diet plan.</h4>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/diet-plan/my-diet-plans/selected-diet-plan/selected-diet-plan.component.html": 
        /*!************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/diet-plan/my-diet-plans/selected-diet-plan/selected-diet-plan.component.html ***!
          \************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"selected-diet-plan\">\n\n    <div *ngIf=\"loading\" class=\"loader-container\">\n        <img src=\"assets/static/images/global-loader.gif\" alt=\"Loader\">\n    </div>\n\n    <ng-template #addMealToDietPlanModal let-modal>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title2\">Add Meal To Diet Plan</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <form *ngIf=\"selectedMealForModal\" #addMealToDietPlanForm=\"ngForm\">\n\n                <div class=\"form-group col-6\">\n                    <label for=\"inputStatus\">Meal</label>\n                    <select id=\"inputMealId\" name=\"mealId\" class=\"form-control\" #inputMealId\n                            (change)=\"setSelectedMealForModal()\"\n                            [(ngModel)]=\"selectedMealIdForModal\">\n                        <option [ngValue]=\"meal.id\"\n                                *ngFor=\"let meal of loggedUserMeals\">{{meal.name}}</option>\n                    </select>\n                </div>\n\n                <hr/>\n\n                <h5 class=\"text-center\">{{selectedMealForModal.name}}</h5>\n\n                <table class=\"table table-striped table-hover mx-auto\">\n                    <thead>\n                    <tr *ngIf=\"selectedMealForModal.foods && !selectedMealForModal.foods.length\">\n                        <td colspan=\"5\" class=\"py-auto\"><h5 class=\"text-center\">No added foods in this meal.</h5></td>\n                    </tr>\n                    <tr *ngIf=\"selectedMealForModal.foods && selectedMealForModal.foods.length\">\n                        <th scope=\"col\" style=\"width: 25%\">Food name</th>\n                        <th scope=\"col\" style=\"width: 15%\">Serving</th>\n                        <th scope=\"col\" style=\"width: 15%\">P</th>\n                        <th scope=\"col\" style=\"width: 15%\">C</th>\n                        <th scope=\"col\" style=\"width: 15%\">F</th>\n                        <th scope=\"col\" style=\"width: 15%\">Calories</th>\n\n                    </tr>\n                    </thead>\n                    <tbody *ngIf=\"selectedMealForModal.foods && selectedMealForModal.foods.length\">\n\n                    <tr *ngFor=\"let food of selectedMealForModal.foods\">\n                        <td class=\"align-middle\">{{food.food.name}}</td>\n                        <td class=\"align-middle\">{{food.serving}} g.</td>\n                        <td class=\"align-middle\">{{food.proteinPerServing}} g.</td>\n                        <td class=\"align-middle\">{{food.carbohydratesPerServing}} g.</td>\n                        <td class=\"align-middle\">{{food.fatsPerServing}} g.</td>\n                        <td class=\"align-middle\">{{food.caloriesPerServing}}</td>\n                    </tr>\n\n                    <tr>\n                        <td colspan=\"2\" class=\"align-middle text-center\">Total:</td>\n                        <td class=\"align-middle\">{{selectedMealForModal.totalProtein}} g.</td>\n                        <td class=\"align-middle\">{{selectedMealForModal.totalCarbohydrates}} g.</td>\n                        <td class=\"align-middle\">{{selectedMealForModal.totalFats}} g.</td>\n                        <td class=\"align-middle\">{{selectedMealForModal.totalCalories}}</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </form>\n\n            <div *ngIf=\"!selectedMealForModal\"><h5 class=\"text-center\">You don't have any\n                meals.</h5>\n                <button type=\"button\" class=\"btn btn-success d-block mt-3 mx-auto\"\n                        routerLink=\"/my-meals\" (click)=\"modal.dismiss()\">Go to My Meals\n                </button>\n            </div>\n\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" [disabled]=\"!selectedMealForModal\" class=\"btn btn-outline-dark\"\n                    (click)=\"modal.close()\">Add to Diet Plan\n            </button>\n        </div>\n    </ng-template>\n\n    <ng-template #showDietPlanNutritionModal let-modal>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Diet Plan Nutrition Info</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body row\">\n\n            <div class=\"col-lg-3 align-middle my-auto pl-5\">\n                <h1 class=\"text-center font-weight-bold\">{{selectedDietPlan.name}}</h1>\n\n\n                <h3 class=\"text-center font-weight-light\">Calories: {{selectedDietPlan.totalCalories}}</h3>\n                <div class=\"macros text-center mx-auto\">\n                    <h3 class=\"font-weight-light \">\n                        Protein: {{selectedDietPlan.totalProtein}}g.</h3>\n                    <h3 class=\"font-weight-light \">\n                        Carbohydrates: {{selectedDietPlan.totalCarbohydrates}}g.</h3>\n                    <h3 class=\"font-weight-light \">Fats: {{selectedDietPlan.totalFats}}\n                        g.</h3>\n                    <span class=\"display-5 opacity-5\"><i\n                            class=\"fas fa-utensils fa-lg\"></i></span>\n                </div>\n            </div>\n            <div class=\"chart-container row align-middle col-lg-9\">\n\n                <ngx-charts-bar-horizontal-2d *ngIf=\"macroNutrientsData\"\n                                              class=\"mx-auto\"\n                                              [view]=\"[600, 400]\"\n                                              [animations]=\"true\"\n                                              [xAxis]=\"true\"\n                                              [yAxis]=\"true\"\n                                              [results]=\"macroNutrientsData\"\n                                              [trimXAxisTicks]=\"false\"\n                                              legendTitle=\"Nutrition\"\n                                              [legend]=\"true\"\n                                              [showXAxisLabel]=\"true\"\n                                              [showGridLines]=\"true\"\n                                              [showYAxisLabel]=\"true\"\n                                              [gradient]=\"true\"\n                                              [noBarWhenZero]=\"true\"\n                                              [roundDomains]=\"true\"\n                                              [tooltipDisabled]=\"false\"\n                                              [trimYAxisTicks]=\"false\"\n                                              [showDataLabel]=\"true\">\n\n                </ngx-charts-bar-horizontal-2d>\n\n\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.dismiss()\">Close</button>\n        </div>\n    </ng-template>\n\n\n    <form #editForm=\"ngForm\">\n    <h2 *ngIf=\"!editMode\" class=\"pt-3 font-weight-light\">{{selectedDietPlan.name}}</h2>\n    <div class=\"py-3 mx-auto col-5\" *ngIf=\"editMode\"><input type=\"text\" value=\"{{editDietPlanBindingModel.name}}\"\n                                                            class=\"form-control form-control-lg text-center\"\n                                                            id=\"inputName\"\n                                                            name=\"inputName\" #inputName=\"ngModel\"\n                                                            required\n                                                            [ngClass]=\"{'is-valid': inputName.valid && inputName.touched,\n                         'is-invalid': inputName.invalid && inputName.touched}\"\n                                                            [(ngModel)]=\"editDietPlanBindingModel.name\"></div>\n    <h4 class=\"pb-3 font-weight-light\" *ngIf=\"!editMode && !selectedDietPlan.isCopied\">\n        ({{selectedDietPlan.isPublic ? 'Public' : 'Private'}})</h4>\n    <h4 class=\"pb-3 font-weight-light\" *ngIf=\"selectedDietPlan.isCopied\">(Copy)</h4>\n    <div *ngIf=\"editMode && !selectedDietPlan.isCopied\" class=\"pb-3 col-3 mx-auto\">\n        <select id=\"inputStatus\" name=\"status\" class=\"form-control\" #inputMealStatus\n                [(ngModel)]=\"editDietPlanBindingModel.isPublic\">\n            <option [ngValue]=\"true\">Public</option>\n            <option [ngValue]=\"false\">Private</option>\n        </select>\n    </div>\n\n    </form>\n    <button *ngIf=\"!editMode\" type=\"button\" routerLink=\"/diet-plans/details/{{dietPlanId}}\"\n            class=\"btn btn-dark mb-2\"><i class=\"fas fa-share-alt\"></i></button>\n\n\n    <h5 *ngIf=\"!selectedDietPlan.meals || !selectedDietPlan.meals.length\">No added meals in this diet\n        plan.</h5>\n\n\n    <div class=\"meals-container col-12 mx-auto\" *ngIf=\"!editMode\">\n        <table class=\"table table-striped table-hover mb-4\" *ngFor=\"let meal of selectedDietPlan.meals\">\n            <h4 class=\"order-index-meal font-weight-bold font-italic\">{{meal.orderIndex}}</h4>\n            <thead>\n            <tr>\n                <th colspan=\"7\" class=\"py-auto\"><h5><a\n                        routerLink=\"/my-meals/{{meal.meal.id}}\">{{meal.meal.name}}</a></h5></th>\n            </tr>\n            <tr *ngIf=\"meal.meal.foods && !meal.meal.foods.length\">\n                <td colspan=\"7\" class=\"py-auto\"><h5>No added foods in this meal.</h5></td>\n            </tr>\n            <tr *ngIf=\"meal.meal.foods && meal.meal.foods.length\">\n                <th scope=\"col\" style=\"width: 25%\">Food name</th>\n                <th scope=\"col\" style=\"width: 15%\">Serving</th>\n                <th scope=\"col\" style=\"width: 10%\">P</th>\n                <th scope=\"col\" style=\"width: 10%\">C</th>\n                <th scope=\"col\" style=\"width: 10%\">F</th>\n                <th scope=\"col\" style=\"width: 10%\">Calories</th>\n                <th scope=\"col\" style=\"width: 20%;\"></th>\n            </tr>\n            </thead>\n            <tbody *ngIf=\"!editMode && meal.meal.foods && meal.meal.foods.length\">\n            <tr *ngFor=\"let food of meal.meal.foods\">\n                <td class=\"align-middle\">{{food.food.name}}</td>\n                <td class=\"align-middle\">{{food.serving}} g.</td>\n                <td class=\"align-middle\">{{food.proteinPerServing}} g.</td>\n                <td class=\"align-middle\">{{food.carbohydratesPerServing}} g.</td>\n                <td class=\"align-middle\">{{food.fatsPerServing}} g.</td>\n                <td class=\"align-middle\">{{food.caloriesPerServing}}</td>\n                <td>\n                    <button type=\"button\" routerLink=\"/foods/details/{{food.food.id}}\"\n                            class=\"btn btn-primary mr-2\"><i class=\"far fa-eye\"></i></button>\n                </td>\n            </tr>\n\n            <tr>\n                <td colspan=\"2\" class=\"align-middle text-center\">Total:</td>\n                <td class=\"align-middle\">{{meal.meal.totalProtein}} g.</td>\n                <td class=\"align-middle\">{{meal.meal.totalCarbohydrates}} g.</td>\n                <td class=\"align-middle\">{{meal.meal.totalFats}} g.</td>\n                <td class=\"align-middle\">{{meal.meal.totalCalories}}</td>\n                <td class=\"align-middle\"></td>\n            </tr>\n\n            </tbody>\n        </table>\n\n        <div class=\"nutrition-goal\" *ngIf=\"selectedDietPlan.meals && selectedDietPlan.meals.length\">\n            <table class=\"table table-hover table-borderless mb-4\">\n                <tbody>\n                <tr>\n                    <td class=\"align-middle\" style=\"width: 37%\"><h5 class=\"m-0\">Diet Plan: </h5></td>\n                    <td class=\"align-middle\" style=\"width: 11%\"><p class=\"font-weight-bold m-0\">{{selectedDietPlan.totalProtein}} g.</p></td>\n                    <td class=\"align-middle\" style=\"width: 11%\"><p class=\"font-weight-bold m-0\">{{selectedDietPlan.totalCarbohydrates}} g.</p></td>\n                    <td class=\"align-middle\" style=\"width: 11%\"><p class=\"font-weight-bold m-0\">{{selectedDietPlan.totalFats}} g.</p></td>\n                    <td class=\"align-middle\" style=\"width: 11%\"><p class=\"font-weight-bold m-0\">{{selectedDietPlan.totalCalories}}</p></td>\n                    <td class=\"align-middle\" style=\"width: 19%\"></td>\n                </tr>\n                <tr>\n                    <td class=\"align-middle\" style=\"width: 37%\"><h5 class=\"m-0\">Nutrition Goal: </h5></td>\n                    <td class=\"align-middle\" style=\"width: 11%\"><p class=\"font-weight-bold m-0\">{{userNutritionGoal.gramsOfProtein}} g.</p></td>\n                    <td class=\"align-middle\" style=\"width: 11%\"><p class=\"font-weight-bold m-0\">{{userNutritionGoal.gramsOfCarbohydrates}} g.</p>\n                    </td>\n                    <td class=\"align-middle\" style=\"width: 11%\"><p class=\"font-weight-bold m-0\">{{userNutritionGoal.gramsOfFats}} g.</p></td>\n                    <td class=\"align-middle\" style=\"width: 11%\"><p class=\"font-weight-bold m-0\">{{userNutritionGoal.calories}}</p></td>\n                    <td class=\"align-middle\" style=\"width: 19%\"></td>\n                </tr>\n                <tr>\n                    <td class=\"align-middle\" style=\"width: 37%\"><h5 class=\"m-0\">Remaining: </h5></td>\n                    <td class=\"align-middle\" style=\"width: 11%\"><p class=\"font-weight-bold m-0\" [ngClass]=\"{'text-danger': userNutritionGoal.gramsOfProtein - selectedDietPlan.totalProtein < 0,\n                        'text-success': userNutritionGoal.gramsOfProtein - selectedDietPlan.totalProtein >= 0}\">\n                        {{userNutritionGoal.gramsOfProtein - selectedDietPlan.totalProtein}} g.</p></td>\n                    <td class=\"align-middle\" style=\"width: 11%\">\n                        <p class=\"font-weight-bold m-0\" [ngClass]=\"{'text-danger': userNutritionGoal.gramsOfCarbohydrates - selectedDietPlan.totalCarbohydrates < 0,\n                        'text-success': userNutritionGoal.gramsOfCarbohydrates - selectedDietPlan.totalCarbohydrates >= 0}\">\n                            {{userNutritionGoal.gramsOfCarbohydrates - selectedDietPlan.totalCarbohydrates}} g.</p>\n                    </td>\n                    <td class=\"align-middle\" style=\"width: 11%\"><p class=\"font-weight-bold m-0\" [ngClass]=\"{'text-danger': userNutritionGoal.gramsOfFats - selectedDietPlan.totalFats < 0,\n                        'text-success': userNutritionGoal.gramsOfFats - selectedDietPlan.totalFats >= 0}\">\n                        {{userNutritionGoal.gramsOfFats - selectedDietPlan.totalFats}} g.</p>\n                    </td>\n                    <td class=\"align-middle\" style=\"width: 11%\"><p class=\"font-weight-bold m-0\" [ngClass]=\"{'text-danger': userNutritionGoal.calories - selectedDietPlan.totalCalories < 0,\n                        'text-success': userNutritionGoal.calories - selectedDietPlan.totalCalories >= 0}\">\n                        {{userNutritionGoal.calories - selectedDietPlan.totalCalories}}</p>\n                    </td>\n                    <td class=\"align-middle\" style=\"width: 19%\"></td>\n                </tr>\n\n                </tbody>\n            </table>\n        </div>\n\n\n    </div>\n    <div class=\"meals-container col-12 mx-auto\" cdkDropList (cdkDropListDropped)=\"onDrop($event)\" *ngIf=\"editMode\">\n        <table cdkDrag class=\"table table-striped table-hover mb-4\"\n               *ngFor=\"let meal of editDietPlanBindingModel.meals\">\n            <h4 class=\"order-index-meal font-weight-bold font-italic\">{{meal.orderIndex}}</h4>\n            <thead>\n            <tr>\n                <th colspan=\"7\" class=\"py-auto\"><h5 class=\"d-inline-block\">{{meal.meal.name}}</h5>\n                    <button type=\"button\" (click)=\"onMealDeleteHandler(meal.id, meal.orderIndex)\"\n                            class=\"btn btn-danger delete-btn ml-3\"><i class=\"far fa-trash-alt\"></i></button>\n                </th>\n\n            </tr>\n            <tr *ngIf=\"meal.meal.foods && !meal.meal.foods.length\">\n                <td colspan=\"7\" class=\"py-auto\"><h5>No added foods in this meal.</h5></td>\n            </tr>\n            <tr *ngIf=\"meal.meal.foods && meal.meal.foods.length\">\n                <th scope=\"col\" style=\"width: 25%\">Food name</th>\n                <th scope=\"col\" style=\"width: 15%\">Serving</th>\n                <th scope=\"col\" style=\"width: 10%\">P</th>\n                <th scope=\"col\" style=\"width: 10%\">C</th>\n                <th scope=\"col\" style=\"width: 10%\">F</th>\n                <th scope=\"col\" style=\"width: 10%\">Calories</th>\n                <th scope=\"col\" style=\"width: 20%;\"></th>\n            </tr>\n            </thead>\n            <tbody *ngIf=\"meal.meal.foods && meal.meal.foods.length\">\n\n            <tr *ngFor=\"let food of meal.meal.foods\">\n                <td class=\"align-middle\">{{food.food.name}}</td>\n                <td class=\"align-middle\">{{food.serving}} g.</td>\n                <td class=\"align-middle\">{{food.proteinPerServing}} g.</td>\n                <td class=\"align-middle\">{{food.carbohydratesPerServing}} g.</td>\n                <td class=\"align-middle\">{{food.fatsPerServing}} g.</td>\n                <td class=\"align-middle\">{{food.caloriesPerServing}}</td>\n                <td>\n                    <button type=\"button\" routerLink=\"/foods/details/{{food.food.id}}\"\n                            class=\"btn btn-primary mr-2\"><i class=\"far fa-eye\"></i></button>\n                </td>\n            </tr>\n\n            <tr>\n                <td colspan=\"2\" class=\"align-middle text-center\">Total:</td>\n                <td class=\"align-middle\">{{meal.meal.totalProtein}} g.</td>\n                <td class=\"align-middle\">{{meal.meal.totalCarbohydrates}} g.</td>\n                <td class=\"align-middle\">{{meal.meal.totalFats}} g.</td>\n                <td class=\"align-middle\">{{meal.meal.totalCalories}}</td>\n                <td class=\"align-middle\"></td>\n            </tr>\n\n            </tbody>\n            <tr *cdkDragPreview class=\"text-center\">\n            </tr>\n        </table>\n\n        <div class=\"nutrition-goal\" *ngIf=\"editDietPlanBindingModel.meals && editDietPlanBindingModel.meals.length\">\n            <table class=\"table table-hover table-borderless mb-4\">\n                <tbody>\n                <tr>\n                    <td colspan=\"2\" class=\"align-middle\"><h5>Diet Plan: </h5></td>\n                    <td class=\"align-middle\"><h5>{{editDietPlanBindingModel.totalProtein}} g.</h5></td>\n                    <td class=\"align-middle\"><h5>{{editDietPlanBindingModel.totalCarbohydrates}} g.</h5></td>\n                    <td class=\"align-middle\"><h5>{{editDietPlanBindingModel.totalFats}} g.</h5></td>\n                    <td class=\"align-middle\"><h5>{{editDietPlanBindingModel.totalCalories}}</h5></td>\n                </tr>\n                <tr>\n                    <td colspan=\"2\" class=\"align-middle\"><h5>Nutrition Goal: </h5></td>\n                    <td class=\"align-middle\"><h5>{{userNutritionGoal.gramsOfProtein}} g.</h5></td>\n                    <td class=\"align-middle\"><h5>{{userNutritionGoal.gramsOfCarbohydrates}} g.</h5></td>\n                    <td class=\"align-middle\"><h5>{{userNutritionGoal.gramsOfFats}} g.</h5></td>\n                    <td class=\"align-middle\"><h5>{{userNutritionGoal.calories}}</h5></td>\n                </tr>\n                <tr>\n                    <td colspan=\"2\" class=\"align-middle\"><h5>Remaining: </h5></td>\n                    <td class=\"align-middle\"><h5 [ngClass]=\"{'text-danger': userNutritionGoal.gramsOfProtein - editDietPlanBindingModel.totalProtein < 0,\n                        'text-success': userNutritionGoal.gramsOfProtein - editDietPlanBindingModel.totalProtein >= 0}\">\n                        {{userNutritionGoal.gramsOfProtein - editDietPlanBindingModel.totalProtein}} g.</h5></td>\n                    <td class=\"align-middle\">\n                        <h5 [ngClass]=\"{'text-danger': userNutritionGoal.gramsOfCarbohydrates - editDietPlanBindingModel.totalCarbohydrates < 0,\n                        'text-success': userNutritionGoal.gramsOfCarbohydrates - editDietPlanBindingModel.totalCarbohydrates >= 0}\">\n                            {{userNutritionGoal.gramsOfCarbohydrates - editDietPlanBindingModel.totalCarbohydrates}}\n                            g.</h5>\n                    </td>\n                    <td class=\"align-middle\"><h5 [ngClass]=\"{'text-danger': userNutritionGoal.gramsOfFats - editDietPlanBindingModel.totalFats < 0,\n                        'text-success': userNutritionGoal.gramsOfFats - editDietPlanBindingModel.totalFats >= 0}\">\n                        {{userNutritionGoal.gramsOfFats - editDietPlanBindingModel.totalFats}} g.</h5>\n                    </td>\n                    <td class=\"align-middle\"><h5 [ngClass]=\"{'text-danger': userNutritionGoal.calories - editDietPlanBindingModel.totalCalories < 0,\n                        'text-success': userNutritionGoal.calories - editDietPlanBindingModel.totalCalories >= 0}\">\n                        {{userNutritionGoal.calories - editDietPlanBindingModel.totalCalories}}</h5>\n                    </td>\n                </tr>\n\n                </tbody>\n            </table>\n        </div>\n\n    </div>\n\n\n    <div class=\"meal-actions\" *ngIf=\"!editMode\">\n\n        <button *ngIf=\"selectedDietPlan.meals && selectedDietPlan.meals.length\" type=\"button\"\n                class=\"btn btn-info my-3 mx-2\" (click)=\"exportToExcelHandler()\">Export to Excel\n        </button>\n\n        <button *ngIf=\"selectedDietPlan.meals && selectedDietPlan.meals.length\" type=\"button\"\n                class=\"btn btn-secondary my-3 mx-2\" (click)=\"open(showDietPlanNutritionModal)\">Show Nutrition Info\n        </button>\n\n\n        <button type=\"link\" class=\"btn btn-primary my-3 mx-2\"\n                (click)=\"openAddMealModal(addMealToDietPlanModal)\">Add Meal\n        </button>\n\n        <button type=\"button\"\n                class=\"btn btn-success my-3 mx-2\" routerLink=\"./\" [queryParams]=\"{'edit': 1}\">Edit\n        </button>\n\n        <button type=\"button\" (click)=\"onDietPlanDeleteHandler()\" class=\"btn btn-danger my-3 mx-2\">\n            Delete\n        </button>\n    </div>\n\n\n    <div class=\"meal-actions-edit\" *ngIf=\"editMode\">\n        <button type=\"link\" [disabled]=\"editForm.invalid\" class=\"btn btn-success my-3 mx-2\" (click)=\"onSaveHandler()\">\n            Save\n        </button>\n        <button type=\"link\" class=\"btn btn-danger my-3 mx-2\" routerLink=\"./\">Cancel</button>\n    </div>\n\n\n</div>\n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/exercise/all-exercises/all-exercises.component.html": 
        /*!***********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/exercise/all-exercises/all-exercises.component.html ***!
          \***********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n    <div *ngIf=\"loading\" class=\"loader-container\">\n        <img src=\"assets/static/images/global-loader.gif\" alt=\"Loader\">\n    </div>\n\n    <ng-template #createWorkoutExerciseModal let-modal>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Exercise to Workout</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <form #addToWorkoutForm=\"ngForm\">\n                <ng-template [ngIf]=\"userWorkouts && userWorkouts.length\">\n                    <h5>{{selectedExerciseForModal.name}}</h5>\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-3\">\n                            <label for=\"inputReps\">Reps</label>\n                            <input type=\"number\" class=\"form-control\" id=\"inputReps\" name=\"inputReps\"\n                                   #inputReps=\"ngModel\"\n                                   required\n                                   pattern=\"^[1-9][0-9]*\"\n                                   min=\"1\"\n                                   [ngClass]=\"{'is-valid': inputReps.valid && inputReps.touched,\n                         'is-invalid': inputReps.invalid && inputReps.touched}\"\n                                   [(ngModel)]=\"workoutExerciseBindingModel.reps\">\n                            <div class=\"valid-feedback\"></div>\n                            <div class=\"invalid-feedback\">\n                                Reps should be a positive number.\n                            </div>\n                        </div>\n                        <div class=\"form-group col-3\">\n                            <label for=\"inputSets\">Sets</label>\n                            <input type=\"number\" class=\"form-control\" id=\"inputSets\" name=\"inputSets\"\n                                   #inputSets=\"ngModel\"\n                                   required\n                                   pattern=\"^[1-9][0-9]*\"\n                                   min=\"1\"\n                                   [ngClass]=\"{'is-valid': inputSets.valid && inputSets.touched,\n                         'is-invalid': inputSets.invalid && inputSets.touched}\"\n                                   [(ngModel)]=\"workoutExerciseBindingModel.sets\">\n                            <div class=\"valid-feedback\"></div>\n                            <div class=\"invalid-feedback\">\n                                Sets should be a positive number.\n                            </div>\n                        </div>\n\n                        <div class=\"form-group col-6\">\n                            <label for=\"inputStatus\">Workout</label>\n                            <select id=\"inputStatus\" name=\"status\" class=\"form-control\" #inputWorkoutId\n                                    [(ngModel)]=\"selectedWorkoutId\">\n                                <option [ngValue]=\"workout.id\"\n                                        *ngFor=\"let workout of userWorkouts\">{{workout.name}}</option>\n                            </select>\n                        </div>\n\n                        <ng-template [ngIf]=\"userWorkouts && !userWorkouts.length\">\n                            <h3 class=\"mb-3\">You don't have any created workouts.</h3>\n                            <button type=\"button\" class=\"btn btn-success mt-3 d-block mx-auto\" routerLink=\"/my-workouts\"\n                                    (click)=\"modal.dismiss()\">Go to My Workouts\n                            </button>\n                        </ng-template>\n\n                    </div>\n                </ng-template>\n            </form>\n\n            <ng-template [ngIf]=\"userWorkouts && !userWorkouts.length\">\n                <h3 class=\"mb-3\">You don't have any created meals.</h3>\n                <button type=\"button\" class=\"btn btn-success mt-3 d-block mx-auto\" routerLink=\"/my-workouts\" (click)=\"modal.dismiss()\">Go to My Workouts</button>\n            </ng-template>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-dark\" [disabled]=\"addToWorkoutForm.invalid || userWorkouts && !userWorkouts.length\"\n                    (click)=\"modal.close()\">Add to Workout\n            </button>\n        </div>\n    </ng-template>\n\n    <div class=\"jumbotron\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"inline-block col-md-4 my-auto\">\n                    <div class=\"form-label-group p-4\">\n                        <h3 class=\"d-block\">Select involving muscles</h3>\n                        <div class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"checkbox\" id=\"bicepsCheckBox\"\n                                   value=\"biceps\" [(ngModel)]=\"muscleGroupFilter.biceps\" (change)=\"handleFilter()\">\n                            <label class=\"form-check-label\" for=\"bicepsCheckBox\">Biceps</label>\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"checkbox\" id=\"tricepsCheckBox\"\n                                   value=\"triceps\" [(ngModel)]=\"muscleGroupFilter.triceps\" (change)=\"handleFilter()\">\n                            <label class=\"form-check-label\" for=\"tricepsCheckBox\">Triceps</label>\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"checkbox\" id=\"forearmCheckBox\"\n                                   value=\"forearm\" [(ngModel)]=\"muscleGroupFilter.forearm\" (change)=\"handleFilter()\">\n                            <label class=\"form-check-label\" for=\"forearmCheckBox\">Forearm</label>\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"checkbox\" id=\"latisimusCheckBox\"\n                                   value=\"latisimus\" [(ngModel)]=\"muscleGroupFilter.latisimus\"\n                                   (change)=\"handleFilter()\">\n                            <label class=\"form-check-label\"\n                                   for=\"latisimusCheckBox\">Latisimus</label>\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"checkbox\" id=\"erectorsCheckBox\"\n                                   value=\"erectors\" [(ngModel)]=\"muscleGroupFilter.erectors\" (change)=\"handleFilter()\">\n                            <label class=\"form-check-label\" for=\"erectorsCheckBox\">Erectors</label>\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"checkbox\" id=\"trapsCheckBox\"\n                                   value=\"traps\" [(ngModel)]=\"muscleGroupFilter.traps\" (change)=\"handleFilter()\">\n                            <label class=\"form-check-label\" for=\"trapsCheckBox\">Traps</label>\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"checkbox\" id=\"chestCheckBox\"\n                                   value=\"chest\" [(ngModel)]=\"muscleGroupFilter.chest\" (change)=\"handleFilter()\">\n                            <label class=\"form-check-label\" for=\"chestCheckBox\">Chest</label>\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"checkbox\"\n                                   id=\"anteriorDeltoidCheckBox\" value=\"anteriorDeltoid\"\n                                   [(ngModel)]=\"muscleGroupFilter.anteriorDeltoid\" (change)=\"handleFilter()\">\n                            <label class=\"form-check-label\" for=\"anteriorDeltoidCheckBox\">Anterior\n                                Deltoid</label>\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"checkbox\"\n                                   id=\"lateralDeltoidCheckBox\" value=\"lateralDeltoid\"\n                                   [(ngModel)]=\"muscleGroupFilter.lateralDeltoid\"\n                                   (change)=\"handleFilter()\">\n                            <label class=\"form-check-label\" for=\"lateralDeltoidCheckBox\">Lateral\n                                Deltoid</label>\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"checkbox\"\n                                   id=\"posteriorDeltoidCheckBox\" value=\"posteriorDeltoid\"\n                                   [(ngModel)]=\"muscleGroupFilter.posteriorDeltoid\" (change)=\"handleFilter()\">\n                            <label class=\"form-check-label\" for=\"posteriorDeltoidCheckBox\">Posterior\n                                Deltoid</label>\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"checkbox\" id=\"hamstringsCheckBox\"\n                                   value=\"hamstrings\" [(ngModel)]=\"muscleGroupFilter.hamstrings\"\n                                   (change)=\"handleFilter()\">\n                            <label class=\"form-check-label\"\n                                   for=\"hamstringsCheckBox\">Hamstrings</label>\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"checkbox\" id=\"gluteusCheckBox\"\n                                   value=\"gluteus\" [(ngModel)]=\"muscleGroupFilter.gluteus\" (change)=\"handleFilter()\">\n                            <label class=\"form-check-label\" for=\"gluteusCheckBox\">Gluteus</label>\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"checkbox\" id=\"calvesCheckBox\"\n                                   value=\"calves\" [(ngModel)]=\"muscleGroupFilter.calves\" (change)=\"handleFilter()\">\n                            <label class=\"form-check-label\" for=\"calvesCheckBox\">Calves</label>\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"checkbox\" id=\"quadricepsCheckBox\"\n                                   value=\"quadriceps\" [(ngModel)]=\"muscleGroupFilter.quadriceps\"\n                                   (change)=\"handleFilter()\">\n                            <label class=\"form-check-label\"\n                                   for=\"quadricepsCheckBox\">Quadriceps</label>\n                        </div>\n\n                        <div class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"checkbox\" id=\"absCheckBox\"\n                                   value=\"abs\" [(ngModel)]=\"muscleGroupFilter.abs\" (change)=\"handleFilter()\">\n                            <label class=\"form-check-label\" for=\"absCheckBox\">Abs</label>\n                        </div>\n                    </div>\n\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onClearFilter()\">Clear Filter</button>\n\n                </div>\n                <div class=\"d-inline-block col-md-4 mt-4\">\n                    <img src=\"assets/static/images/logo.png\" height=\"300px\" class=\"align-center\" alt=\"\">\n                    <h1 class=\"display-4\">All Exercises</h1>\n                </div>\n                <div class=\"inline-block col-md-3\">\n                    <svg class=\"body-model\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\"\n                         xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" height=\"400\"\n                         viewBox=\"0 0 612 792\" xml:space=\"preserve\">\n\n                                        <image style=\"overflow:visible;\" xlink:href=\"assets/static/images/muscles.png\"\n                                               transform=\"matrix(0.7228 0 0 0.7228 -42.5334 69.2174)\"></image>\n                        <path (click)=\"onMuscleClick('abs')\" (mouseenter)=\"onMuscleMouseEnter('abs')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='abs',\n        'major-muscle-group': muscleGroupFilter.abs}\"\n                              class=\"abs muscle\" d=\"M137.3,267.09c0,0-53.61,7.17-50.74,35.87c2.87,28.7,4.57,25.83,1.7,45.39c-2.87,19.57,4.83,28.7,4.83,28.7\n\tl38.09,50.74c0,0,18.26,21.78,32.87-14.48c14.61-36.26,27-42.39,27-42.39l7.3-6.78c0,0-1.43-7.3-1.3-10.3\n\tc0.13-3-2.87-16.04-2.87-16.04s-2.35-10.83,0.13-19.3c2.48-8.48,0-25.04-0.65-26.22s-1.96-16.43-20.74-18s-22.88-5.43-22.88-5.43\n\tL137.3,267.09z\"><title>Abs</title></path>\n                        <path (click)=\"onMuscleClick('traps')\" (mouseenter)=\"onMuscleMouseEnter('traps')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='traps',\n        'major-muscle-group': muscleGroupFilter.traps}\"\n                              class=\"traps muscle\" d=\"M83.7,184.85l10.76,6.46l8.22,3.91l10.17,2.93h6.65v-4.3v-10.57l-1.96-10.76\n                    C117.54,172.52,107.17,185.43,83.7,184.85z\"><title>Traps</title></path>\n                        <path (click)=\"onMuscleClick('traps')\" (mouseenter)=\"onMuscleMouseEnter('traps')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='traps',\n        'major-muscle-group': muscleGroupFilter.traps}\"\n                              class=\"traps muscle\" d=\"M163.72,169.98l-1.96,15.36l-0.98,12.82l1.47,1.37l15.95-2.35l12.72-4.3l9-3.52l4.11-1.76\n                    C204.02,187.59,193.46,190.13,163.72,169.98z\"><title>Traps</title></path>\n                        <path (click)=\"onMuscleClick('chest')\" (mouseenter)=\"onMuscleMouseEnter('chest')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='chest',\n        'major-muscle-group': muscleGroupFilter.chest}\"\n                              class=\"chest muscle\" d=\"M74.5,213.41l-1.37,11.93l0.68,2.15l2.64,2.74l1.96,11.74c0,0,3.91,20.93,11.15,25.43s5.48,4.11,5.48,4.11\n                    l6.55,2.74l9.77-0.32c0,0,15.18-1.05,18.7-7.5c3.52-6.46,3.33-5.48,3.52-10.37s0-13.11,0-13.11l0.09-11.54l-3.22-9l-0.2-11.54\n                    l-0.39-5.28l-10.37-3.52l-11.74-1.17C107.76,200.89,79.59,208.52,74.5,213.41z\"><title>Chest</title></path>\n                        <path (click)=\"onMuscleClick('chest')\" (mouseenter)=\"onMuscleMouseEnter('chest')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='chest',\n        'major-muscle-group': muscleGroupFilter.chest}\"\n                              class=\"chest muscle\" d=\"M168.41,200.89l-14.28,2.15l-5.67,2.15v2.93v6.85l-1.96,9.2l-4.89,10.37l-0.98,15.26c0,0,1.19,16.46,8.41,18.71\n                    c7.23,2.25,10.37,4.18,17.22,4.77c6.85,0.59,13.3-1.17,13.3-1.17s8.41-1.57,13.89-10.37c5.48-8.8,7.24-14.48,7.24-14.48l2.35-10.11\n                    l3.33-10.82l1.57-9l-5.28-5.09C202.65,212.24,180.15,199.12,168.41,200.89z\"><title>Chest</title></path>\n                        <path (click)=\"onMuscleClick('biceps')\" (mouseenter)=\"onMuscleMouseEnter('biceps')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='biceps',\n        'major-muscle-group': muscleGroupFilter.biceps}\"\n                              class=\"biceps muscle\" d=\"M71.96,229.46c0,0-16.96,12.07-19.3,34.11c-2.35,22.04-2.22,25.7-2.22,25.7l1.17,12.91l1.3,6.78l2.35,5.35\n                    l2.09,6.39l15.26-17.35l8.61-37.3l-3.92-30.78l-2.82-7.08L71.96,229.46z\"><title>Biceps</title></path>\n                        <path (click)=\"onMuscleClick('biceps')\" (mouseenter)=\"onMuscleMouseEnter('biceps')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='biceps',\n        'major-muscle-group': muscleGroupFilter.biceps}\"\n                              class=\"biceps muscle\" d=\"M208.91,228.87l17.22,21.91c0,0,12.33,19.57,11.35,38.93c-0.98,19.37-0.98,19.37-0.98,19.37l-3.52,12.33\n                    l-9.75-5.87l-10.59-18.59l-3.72-14.09V228.87z\"><title>Biceps</title></path>\n                        <path (click)=\"onMuscleClick('quadriceps')\" (mouseenter)=\"onMuscleMouseEnter('quadriceps')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='quadriceps',\n        'major-muscle-group': muscleGroupFilter.quadriceps}\"\n                              class=\"quadriceps muscle\" d=\"M96,400.04l0.61,8.83L88,425.7l-7.24,17.41l-5.28,19.17c0,0,0,21.13,3.33,40.89\n                    c3.33,19.76,5.87,34.83,5.87,34.83l5.28,19.57l2.54,10.17l2.93,2.54l2.15-2.54L99.93,556v-10.37c0,0,3.21-5.28,6.21-4.7\n                    c2.99,0.59,7.49,0.39,7.88,6.85c0.39,6.46,1.96,15.26,1.96,15.26s-0.39,9.2,5.67,7.24c6.07-1.96,7.24-3.72,7.24-3.72l2.15-7.24\n                    l2.09-25.76l-4.96-30l-6-22.96l-14.87-40.17l-6.14-34.06L96,400.04z\"><title>Quadriceps</title></path>\n                        <path (click)=\"onMuscleClick('quadriceps')\" (mouseenter)=\"onMuscleMouseEnter('quadriceps')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='quadriceps',\n        'major-muscle-group': muscleGroupFilter.quadriceps}\"\n                              class=\"quadriceps muscle\"\n                              d=\"M185.34,394.05l-7.86,36.56l-11.22,32.52l-4.7,11.74l-6.52,23.74l-2.61,18.52l-0.52,37.3l1.3,5.22l4.43,4.43\n                    c0,0,7.04,4.17,8.09-11.22c1.04-15.39,4.17-14.87,4.17-14.87l6.78-0.52c0,0,4.7-1.3,3.65,12.78c-1.04,14.09,12.78,5.48,12.78,5.48\n                    l3.65-12.78l6-23.48l4.96-20.87l4.17-27.39l-2.09-15.91c0,0-3.65-16.7-14.61-35.74S185.34,394.05,185.34,394.05z\"><title>Quadriceps</title></path>\n                        <path (click)=\"onMuscleClick('calves')\" (mouseenter)=\"onMuscleMouseEnter('calves')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='calves',\n        'major-muscle-group': muscleGroupFilter.calves}\"\n                              class=\"calves muscle\" d=\"M422.57,562.07l-4.11,16.24l-1.37,16.43l-1.76,29.15c0,0-0.39,23.67,3.62,28.37c4.01,4.7,7.92,7.43,7.92,7.43\n                    s9.39-1.76,9-8.02s0.01-10.57,0.01-10.57l3.51,8.02l6.26,9l6.46,4.89l7.63,1.57l1.17-24.85l-2.48-24l-3.39-15.13l-0.52-5.54\n                    l-11.35-18.59l-6.78-10.3l-2.09,6.39l-1.17,1.43l-5.22-10.3l-3.13-3.39h-1.7L422.57,562.07z\"><title>Calves</title></path>\n                        <path (click)=\"onMuscleClick('calves')\" (mouseenter)=\"onMuscleMouseEnter('calves')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='calves',\n        'major-muscle-group': muscleGroupFilter.calves}\"\n                              class=\"calves muscle\" d=\"M499.52,572.7l-5.35,8.35l-4.43,9.91l-3.91,7.96l-0.78,4.17L483.09,637v13.3l2.74,12.39l0.91,7.7\n                    c0,0,9.26-6.13,9.52-6.65s6.39-11.35,6.39-11.35l2.35-7.7l0.65-0.65l1.3,6.13v4.96l3.52,4.43l7.83,1.96c0,0,9-4.17,8.61-10.57\n                    s1.57-21.65,1.57-21.65l-3.78-23.74l-2.61-12.39c0,0-0.78-9.13-2.61-13.57c-1.83-4.43-6.65-14.74-6.65-14.74l-8.35,9.13l-1.57,3.39\n                    L499.52,572.7z\"><title>Calves</title></path>\n                        <path (click)=\"onMuscleClick('calves')\" (mouseenter)=\"onMuscleMouseEnter('calves')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='calves',\n        'major-muscle-group': muscleGroupFilter.calves}\"\n                              class=\"calves muscle\" d=\"M96.09,585.74l-7.3,15.39l-3.91,30.52l1.83,29.48c0,0,7.04,32.35,7.04,33.13s3.91,26.09,3.91,26.09l17.48-3.65\n                    l-6.26-42l-5.48-47.74l-1.3-16.43l-0.52-13.57L96.09,585.74z\"><title>Calves</title></path>\n                        <polygon (click)=\"onMuscleClick('calves')\" (mouseenter)=\"onMuscleMouseEnter('calves')\"\n                                 (mouseout)=\"resetSelectedMuscleGroup()\"\n                                 [ngClass]=\"{'is-focused': focusedMuscleGroup ==='calves',\n        'major-muscle-group': muscleGroupFilter.calves}\"\n                                 class=\"calves muscle\" points=\"128.11,605.5 127.49,606.57 119.7,619.98 115.98,630.35 115.13,648.35 117.35,675.54 119.5,700.59\n                    120.67,713.5 123.8,684.93 128.11,661.07 130.07,649.91 130.07,636.8 130.07,625.85 \"><title>Calves</title></polygon>\n                        <path (click)=\"onMuscleClick('calves')\" (mouseenter)=\"onMuscleMouseEnter('calves')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='calves',\n        'major-muscle-group': muscleGroupFilter.calves}\"\n                              class=\"calves muscle\" d=\"M157.13,603.74l4.7,13.04l1.57,7.57l-1.83,32.61l-3.13,22.43l-3.65,23.48l-2.74-53.93v-20.02\n                    C152.04,628.91,157.78,604.33,157.13,603.74z\"><title>Calves</title></path>\n                        <polygon (click)=\"onMuscleClick('calves')\" (mouseenter)=\"onMuscleMouseEnter('calves')\"\n                                 (mouseout)=\"resetSelectedMuscleGroup()\"\n                                 [ngClass]=\"{'is-focused': focusedMuscleGroup ==='calves',\n        'major-muscle-group': muscleGroupFilter.calves}\"\n                                 class=\"calves muscle\" points=\"161.57,711.74 177.22,717.61 181.65,698.96 189.35,670.52 195.35,648.74 198.22,632.83 197.17,612.48\n                    194.83,595.52 190.13,595.52 187.13,587.04 182.7,586.26 179.89,599.96 175.39,623.96 167.96,664.13 \"><title>Calves</title>\n  </polygon>\n                        <path (click)=\"onMuscleClick('gluteus')\" (mouseenter)=\"onMuscleMouseEnter('gluteus')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='gluteus',\n        'major-muscle-group': muscleGroupFilter.gluteus}\"\n                              class=\"gluteus muscle\"\n                              d=\"M417.22,365.57l-4.43,11.87l-1.96,10.43L409,403.65l-0.65,20.87c0,0,4.04,21.78,17.35,24.39\n                    c13.3,2.61,18.78,2.35,18.78,2.35s13.96-1.57,15.91-8.35c1.96-6.78,4.3-4.3,4.3-4.3l5.09,9.52c0,0,7.43,11.35,18.91,10.17\n                    s18.78-3.52,18.78-3.52s15.26-7.57,13.96-29.09c-1.3-21.52,0.08-37.43,0.08-37.43l-3.47-18.65c0,0-31.3,11.35-35.87,15.26\n                    s-16.75,20.22-17.24,24.52s-2.97,2.59-2.97,2.59s-0.26-13.54-13.57-26.33c-13.3-12.78-19.7-14.87-19.7-14.87\"><title>Gluteus</title></path>\n                        <path (click)=\"onMuscleClick('anteriorDeltoid')\"\n                              (mouseenter)=\"onMuscleMouseEnter('anteriorDeltoid')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='anteriorDeltoid',\n        'major-muscle-group': muscleGroupFilter.anteriorDeltoid}\"\n                              class=\"anteriorDeltoid muscle\" d=\"M109.39,200.89l-12.13-3.72l-6.65-3.65c0,0-17.61-0.65-21.13,2.22c-3.52,2.87-7.96,7.04-10.17,13.3\n                    c-2.22,6.26-2.61,6.65-3,13.04c-0.39,6.39-0.91,9.26,0,13.83s2.24,9.29,2.24,9.29l6.37-10.46l7.7-6.56l0.52-1.01l1.15-11.81\n                    l0.22-1.95C74.5,213.41,92.04,198.87,109.39,200.89z\"><title>Anterior Deltoid</title></path>\n                        <path (click)=\"onMuscleClick('lateralDeltoid')\"\n                              (mouseenter)=\"onMuscleMouseEnter('lateralDeltoid')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='lateralDeltoid',\n        'major-muscle-group': muscleGroupFilter.lateralDeltoid}\"\n                              class=\"lateralDeltoid muscle\"\n                              d=\"M89.96,192.97l-11.84-4.99c0,0-14.77,0.59-20.93,10.86c-6.16,10.27-8.51,17.8-8.51,17.8L47.6,231.8l1.27,9.88\n                    l0.39,10.47L52,264.97l4.4-16.73l1.99-3.6l-2.09-8.72c0,0-0.68-17.39,2.64-25.86C62.27,201.58,69.61,190.03,89.96,192.97z\"><title>Lateral Deltoid</title>\n  </path>\n                        <path (click)=\"onMuscleClick('anteriorDeltoid')\"\n                              (mouseenter)=\"onMuscleMouseEnter('anteriorDeltoid')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='anteriorDeltoid',\n        'major-muscle-group': muscleGroupFilter.anteriorDeltoid}\"\n                              class=\"anteriorDeltoid muscle\" d=\"M173.43,199.52l20.83,8.35l9.76,4.57l5.8,8.48v9.78l15.76,19.4l3.23,5.55l3.05-12.29c0,0,1.7-9.91,0.65-18.65\n                    c-1.04-8.74-2.48-12.39-5.74-16.3c-3.26-3.91-13.96-13.83-24.39-13.96c-10.43-0.13-12.65,1.43-12.65,1.43l-6.78,2.28L173.43,199.52z\n                    \"><title>Anterior Deltoid</title></path>\n                        <path (click)=\"onMuscleClick('lateralDeltoid')\"\n                              (mouseenter)=\"onMuscleMouseEnter('lateralDeltoid')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='lateralDeltoid',\n        'major-muscle-group': muscleGroupFilter.lateralDeltoid}\"\n                              class=\"lateralDeltoid muscle\" d=\"M193.65,194.43l9.5-2.34c0,0,12.03-0.98,16.33,1.66c4.3,2.64,13.01,8.9,15.95,19.27\n                    c2.93,10.37,4.21,17.02,4.21,17.61s-0.49,15.26-0.49,15.26l-3.52,20.74l-1.32,2.2l-4.95-12.13l2.63-14.06c0,0,3.89-26.66-6.66-35.87\n                    s-15-10.58-15-10.58S200.7,193.05,193.65,194.43z\"><title>Lateral Deltoid</title></path>\n                        <path (click)=\"onMuscleClick('traps')\" (mouseenter)=\"onMuscleMouseEnter('traps')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='traps',\n        'major-muscle-group': muscleGroupFilter.traps}\"\n                              class=\"traps muscle\" d=\"M404.96,187.39L424,197.83l6.78,4.7l-4.17,2.09l4.17,25.3l2.87,28.43c0,0,27.65,43.04,28.43,54.52\n                    c0.78,11.48,11.48,2.09,11.48,2.09l3.39-14.87l12.52-22.7l8.87-17.74l2.61-10.96l3.13-28.96l4.17-17.74l22.96-11.48l7.3-5.22\n                    c0,0-44.09-1.83-56.09-29.48s-24.78,0-24.78,0S454.26,177.48,404.96,187.39z\"><title>Traps</title></path>\n                        <path (click)=\"onMuscleClick('posteriorDeltoid')\"\n                              (mouseenter)=\"onMuscleMouseEnter('posteriorDeltoid')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='posteriorDeltoid',\n        'major-muscle-group': muscleGroupFilter.posteriorDeltoid}\"\n                              class=\"posteriorDeltoid muscle\" d=\"M373.13,241.91l15.65-23.22l7.04-8.87c0,0,26.87-4.96,30.78-5.22c3.91-0.26,4.17-2.09,4.17-2.09l-15.4-9.42\n                    l-10.42-5.71c0,0-22.7,6.52-26.61,21.39c-3.91,14.87-5.22,34.43-5.22,34.43V241.91z\"><title>Posterior Deltoid</title></path>\n                        <path (click)=\"onMuscleClick('posteriorDeltoid')\"\n                              (mouseenter)=\"onMuscleMouseEnter('posteriorDeltoid')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='posteriorDeltoid',\n        'major-muscle-group': muscleGroupFilter.posteriorDeltoid}\"\n                              class=\"posteriorDeltoid muscle\" d=\"M538.52,185.3c0,0,15.78,4.83,20.35,14.87c4.57,10.04,6.39,19.3,6.39,19.3l1.3,14.09l-1.96,8.61l-7.17-11.87\n                    l-7.3-11.22c0,0-6.65-14.22-13.17-13.17c-6.52,1.04-8.74,0.52-9.13,0.13c-0.39-0.39-8.87-1.7-8.87-1.7l-8.87-0.52l-2.06-0.82\n                    c0,0,18.06-8.82,23.19-12.49C536.35,186.86,538.52,185.3,538.52,185.3z\"><title>Posterior Deltoid</title></path>\n                        <path (click)=\"onMuscleClick('hamstrings')\" (mouseenter)=\"onMuscleMouseEnter('hamstrings')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='hamstrings',\n        'major-muscle-group': muscleGroupFilter.hamstrings}\"\n                              class=\"hamstrings muscle\"\n                              d=\"M414.09,459.74l-4.43,24.52l2.22,33.13l1.17,16.17l3.65,23.22l1.48,24.84l4.91-21.32l3-9.78l1.04-2.61\n                    l10.1,19.53l17.29,27.62v-13.24l-6-61.04l-7.04-40.96l-4.17-21.44C437.3,458.39,425.83,446.17,414.09,459.74z\"><title>Hamstrings</title></path>\n                        <path (click)=\"onMuscleClick('hamstrings')\" (mouseenter)=\"onMuscleMouseEnter('hamstrings')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='hamstrings',\n        'major-muscle-group': muscleGroupFilter.hamstrings}\"\n                              class=\"hamstrings muscle\"\n                              d=\"M488.7,499.39l-4.17,24.81v34.93l-1.43,26.09l2.74,13.7l13.7-26.22l8.74-18l8.25,18.16l6.88-21.82v-49.3\n                    c0,0-1.04-27.39-5.74-34.43c-2.46-3.69-15.28-13.81-22.17-4.43C489.2,471.41,488.7,499.39,488.7,499.39z\"><title>Hamstrings</title></path>\n                        <path (click)=\"onMuscleClick('latisimus')\" (mouseenter)=\"onMuscleMouseEnter('latisimus')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='latisimus',\n        'major-muscle-group': muscleGroupFilter.latisimus}\"\n                              class=\"latisimus muscle\" d=\"M433.39,255.71l-15.65,1.85h-11.22v14.87l-1.57,10.7l6.78,17.22l6,14.87l3.65,17.74l6.26,19.83\n                    c0,0,5.22,9.65,3.13,13.83c-2.09,4.17,6-8.61,6-8.61l2.61-13.3c0,0,4.99-17.52,13.57-26.12c8.58-8.6,8.96-6.99,8.96-6.99\n                    l-12.54-27.12L433.39,255.71z\"><title>Latisimus</title></path>\n                        <path (click)=\"onMuscleClick('latisimus')\" (mouseenter)=\"onMuscleMouseEnter('latisimus')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='latisimus',\n        'major-muscle-group': muscleGroupFilter.latisimus}\"\n                              class=\"latisimus muscle\"\n                              d=\"M499.29,255.71l-12.95,27.38l-9.38,16.99l-2.62,11.49l16.71,15.38l8.24,15.65l1.15,24.84l3.65,4.12l6.26-17.48\n                    l9.65-19.3l3.65-16.21l3.13-18.49l5.48-15.91l2.09-30l-7.04,4.17C527.3,258.35,508.83,260.12,499.29,255.71z\"><title>Latisimus</title></path>\n                        <path (click)=\"onMuscleClick('triceps')\" (mouseenter)=\"onMuscleMouseEnter('triceps')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='triceps',\n        'major-muscle-group': muscleGroupFilter.triceps}\"\n                              class=\"triceps muscle\"\n                              d=\"M389.3,222.61l-4.56,2.08l-9.95,14.76L370,257.57l-1.83,25.83v19.57l3.39,7.04l14.35,12.52l10.43-13.3\n                    l5.61-10.96l1.17-15.91l3.39-13.3L403.65,238c0,0-1.57-17.22-12.26-15.39C380.7,224.43,389.3,222.61,389.3,222.61z\"><title>Triceps</title></path>\n                        <path (click)=\"onMuscleClick('triceps')\" (mouseenter)=\"onMuscleMouseEnter('triceps')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='triceps',\n        'major-muscle-group': muscleGroupFilter.triceps}\"\n                              class=\"triceps muscle\" d=\"M534.35,224.43l1.04,21.65l-2.42,27.89l1.21,12.81l1.21,18.78l7.04,6.01l9.13,2.85l13.3-9.13l3.13-8.87v-22.17\n                    l-2.87-21.65l-1.57-9.39l-6.13-12.91l-8.22-13C549.22,217.3,535.13,217.65,534.35,224.43z\"><title>Triceps</title></path>\n                        <path (click)=\"onMuscleClick('erectors')\" (mouseenter)=\"onMuscleMouseEnter('erectors')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='erectors',\n        'major-muscle-group': muscleGroupFilter.erectors}\"\n                              class=\"erectors muscle\" d=\"M469.12,317.83c0,0,26.61,7.3,27.4,23.48c0.78,16.17,0,33.13,0,33.13L478,385.39l-14.35,23.48l-13.57-25.83\n                    l-14.61-11.48l5.3-26.7C440.78,344.87,443.81,317.83,469.12,317.83z\"><title>Erectors</title></path>\n                        <path (click)=\"onMuscleClick('forearm')\" (mouseenter)=\"onMuscleMouseEnter('forearm')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='forearm',\n        'major-muscle-group': muscleGroupFilter.forearm}\"\n                              class=\"forearm muscle\"\n                              d=\"M45,298s-6.53,18.52-6.53,43.83S34.78,396,34.78,396L58,398.7s3.65-17.74,7.83-26.87S77,343.91,77.57,337.91s1-16.5,1-16.5l-9.83-9.06-3.66-.49-6.34,8.84Z\"><title>Forearm</title>\n  </path>\n                        <path (click)=\"onMuscleClick('forearm')\" (mouseenter)=\"onMuscleMouseEnter('forearm')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='forearm',\n        'major-muscle-group': muscleGroupFilter.forearm}\"\n                              class=\"forearm muscle\"\n                              d=\"M215.3,325.91l7.92-10.37,9.76,5.87,6.65-14.28,5.67-13s8.61,25.82,9.92,35.74,5.21,44.6,5.21,44.6l4.7,24.27L243.74,400s-13.57-29-17.48-37.87S216.61,341,215.3,325.91Z\"><title>Forearm</title>\n  </path>\n                        <path (click)=\"onMuscleClick('forearm')\" (mouseenter)=\"onMuscleMouseEnter('forearm')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='forearm',\n        'major-muscle-group': muscleGroupFilter.forearm}\"\n                              class=\"forearm muscle\"\n                              d=\"M346.78,400l20.09,2.31,2.87-6.35s16.69-31.74,20.09-41.13,9.79-31.62,9.65-40.44l-.14-8.81-13.06,18.43s-12.1,7.08-13.15-1.53l-1-8.61L371,309.52l-5.14-9.17s-7.57,21.65-10.18,42.78S346.78,400,346.78,400Z\"><title>Forearm</title>\n  </path>\n                        <path (click)=\"onMuscleClick('forearm')\" (mouseenter)=\"onMuscleMouseEnter('forearm')\"\n                              (mouseout)=\"resetSelectedMuscleGroup()\"\n                              [ngClass]=\"{'is-focused': focusedMuscleGroup ==='forearm',\n        'major-muscle-group': muscleGroupFilter.forearm}\"\n                              class=\"forearm muscle\"\n                              d=\"M534.35,306.15l1.89,32.09L540,352.33l12.32,30.32,5.09,20,21.91-2.94-2.93-19.56L576,333.54s-.2-14.47-2.74-24.06A99.07,99.07,0,0,0,568,294.22l-2.7,9.87-7.15,12s2.47,7.63-7.66,11.15-8.19-3.91-8.19-3.91l1.37-2.94Z\"><title>Forearm</title>\n  </path>\n                                    </svg>\n                </div>\n\n            </div>\n        </div>\n\n\n        <hr class=\"my-4\">\n        <div class=\"container justify-content-center pb-0\">\n            <ng-template [ngIf]=\"filteredExercises.length > 0\" [ngIfElse]=\"noSuchExercises\">\n                <div class=\"row\">\n                    <app-exercise-card\n                            (modalOpen)=\"open(createWorkoutExerciseModal, $event)\"\n                            [exercise]=\"exercise\"\n                            class=\"col-lg-4 col-sm-12 my-3 d-flex mx-auto align-items-stretch\"\n                            *ngFor=\"let exercise of filteredExercises | slice: (page-1) * pageSize : (page-1) * pageSize + pageSize\">\n                        >\n                    </app-exercise-card>\n                </div>\n                <ngb-pagination class=\"d-inline-block mt-5\" [(page)]=\"page\"\n                                [pageSize]=\"pageSize\"\n                                [collectionSize]=\"filteredExercises.length\"></ngb-pagination>\n            </ng-template>\n\n            <ng-template #noSuchExercises>\n                <h5>There are no exercises.</h5>\n            </ng-template>\n\n        </div>\n\n\n    </div>\n\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/exercise/create-exercise/create-exercise.component.html": 
        /*!***************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/exercise/create-exercise/create-exercise.component.html ***!
          \***************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n    <div *ngIf=\"loading\" class=\"loader-container\">\n        <img src=\"assets/static/images/global-loader.gif\" alt=\"Loader\">\n    </div>\n\n    <div class=\"jumbotron\">\n        <div class=\"col-lg-10 col-xl-9 mx-auto\">\n            <img src=\"assets/static/images/logo.png\" height=\"300px\" class=\"d-inline-block align-center\" alt=\"\">\n            <h1 class=\"display-4\">Create Exercise</h1>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-10 col-xl-9 mx-auto\">\n                        <div class=\"card card-signin create-exercise flex-row my-5\">\n                            <div class=\"card-img-left d-none d-md-flex\">\n                                <svg class=\"body-model\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\"\n                                     xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" height=\"800\"\n                                     viewBox=\"0 0 612 792\" xml:space=\"preserve\">\n\n                                        <image style=\"overflow:visible;\" xlink:href=\"assets/static/images/muscles.png\"\n                                               transform=\"matrix(0.7228 0 0 0.7228 -42.5334 69.2174)\"></image>\n                                    <path (click)=\"onMuscleClick('abs')\" (mouseenter)=\"onMuscleMouseEnter('abs')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='abs',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'abs',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.abs}\"\n                                          class=\"abs muscle\" d=\"M137.3,267.09c0,0-53.61,7.17-50.74,35.87c2.87,28.7,4.57,25.83,1.7,45.39c-2.87,19.57,4.83,28.7,4.83,28.7\n\tl38.09,50.74c0,0,18.26,21.78,32.87-14.48c14.61-36.26,27-42.39,27-42.39l7.3-6.78c0,0-1.43-7.3-1.3-10.3\n\tc0.13-3-2.87-16.04-2.87-16.04s-2.35-10.83,0.13-19.3c2.48-8.48,0-25.04-0.65-26.22s-1.96-16.43-20.74-18s-22.88-5.43-22.88-5.43\n\tL137.3,267.09z\"><title>Abs</title></path>\n                                    <path (click)=\"onMuscleClick('traps')\" (mouseenter)=\"onMuscleMouseEnter('traps')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='traps',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'traps',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.traps}\"\n                                          class=\"traps muscle\" d=\"M83.7,184.85l10.76,6.46l8.22,3.91l10.17,2.93h6.65v-4.3v-10.57l-1.96-10.76\n                    C117.54,172.52,107.17,185.43,83.7,184.85z\"><title>Traps</title></path>\n                                    <path (click)=\"onMuscleClick('traps')\" (mouseenter)=\"onMuscleMouseEnter('traps')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='traps',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'traps',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.traps}\"\n                                          class=\"traps muscle\" d=\"M163.72,169.98l-1.96,15.36l-0.98,12.82l1.47,1.37l15.95-2.35l12.72-4.3l9-3.52l4.11-1.76\n                    C204.02,187.59,193.46,190.13,163.72,169.98z\"><title>Traps</title></path>\n                                    <path (click)=\"onMuscleClick('chest')\" (mouseenter)=\"onMuscleMouseEnter('chest')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='chest',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'chest',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.chest}\"\n                                          class=\"chest muscle\" d=\"M74.5,213.41l-1.37,11.93l0.68,2.15l2.64,2.74l1.96,11.74c0,0,3.91,20.93,11.15,25.43s5.48,4.11,5.48,4.11\n                    l6.55,2.74l9.77-0.32c0,0,15.18-1.05,18.7-7.5c3.52-6.46,3.33-5.48,3.52-10.37s0-13.11,0-13.11l0.09-11.54l-3.22-9l-0.2-11.54\n                    l-0.39-5.28l-10.37-3.52l-11.74-1.17C107.76,200.89,79.59,208.52,74.5,213.41z\"><title>Chest</title></path>\n                                    <path (click)=\"onMuscleClick('chest')\" (mouseenter)=\"onMuscleMouseEnter('chest')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='chest',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'chest',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.chest}\"\n                                          class=\"chest muscle\" d=\"M168.41,200.89l-14.28,2.15l-5.67,2.15v2.93v6.85l-1.96,9.2l-4.89,10.37l-0.98,15.26c0,0,1.19,16.46,8.41,18.71\n                    c7.23,2.25,10.37,4.18,17.22,4.77c6.85,0.59,13.3-1.17,13.3-1.17s8.41-1.57,13.89-10.37c5.48-8.8,7.24-14.48,7.24-14.48l2.35-10.11\n                    l3.33-10.82l1.57-9l-5.28-5.09C202.65,212.24,180.15,199.12,168.41,200.89z\"><title>Chest</title></path>\n                                    <path (click)=\"onMuscleClick('biceps')\" (mouseenter)=\"onMuscleMouseEnter('biceps')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='biceps',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'biceps',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.biceps}\"\n                                          class=\"biceps muscle\" d=\"M71.96,229.46c0,0-16.96,12.07-19.3,34.11c-2.35,22.04-2.22,25.7-2.22,25.7l1.17,12.91l1.3,6.78l2.35,5.35\n                    l2.09,6.39l15.26-17.35l8.61-37.3l-3.92-30.78l-2.82-7.08L71.96,229.46z\"><title>Biceps</title></path>\n                                    <path (click)=\"onMuscleClick('biceps')\" (mouseenter)=\"onMuscleMouseEnter('biceps')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='biceps',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'biceps',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.biceps}\"\n                                          class=\"biceps muscle\" d=\"M208.91,228.87l17.22,21.91c0,0,12.33,19.57,11.35,38.93c-0.98,19.37-0.98,19.37-0.98,19.37l-3.52,12.33\n                    l-9.75-5.87l-10.59-18.59l-3.72-14.09V228.87z\"><title>Biceps</title></path>\n                                    <path (click)=\"onMuscleClick('quadriceps')\"\n                                          (mouseenter)=\"onMuscleMouseEnter('quadriceps')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='quadriceps',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'quadriceps',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.quadriceps}\"\n                                          class=\"quadriceps muscle\" d=\"M96,400.04l0.61,8.83L88,425.7l-7.24,17.41l-5.28,19.17c0,0,0,21.13,3.33,40.89\n                    c3.33,19.76,5.87,34.83,5.87,34.83l5.28,19.57l2.54,10.17l2.93,2.54l2.15-2.54L99.93,556v-10.37c0,0,3.21-5.28,6.21-4.7\n                    c2.99,0.59,7.49,0.39,7.88,6.85c0.39,6.46,1.96,15.26,1.96,15.26s-0.39,9.2,5.67,7.24c6.07-1.96,7.24-3.72,7.24-3.72l2.15-7.24\n                    l2.09-25.76l-4.96-30l-6-22.96l-14.87-40.17l-6.14-34.06L96,400.04z\"><title>Quadriceps</title></path>\n                                    <path (click)=\"onMuscleClick('quadriceps')\"\n                                          (mouseenter)=\"onMuscleMouseEnter('quadriceps')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='quadriceps',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'quadriceps',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.quadriceps}\"\n                                          class=\"quadriceps muscle\"\n                                          d=\"M185.34,394.05l-7.86,36.56l-11.22,32.52l-4.7,11.74l-6.52,23.74l-2.61,18.52l-0.52,37.3l1.3,5.22l4.43,4.43\n                    c0,0,7.04,4.17,8.09-11.22c1.04-15.39,4.17-14.87,4.17-14.87l6.78-0.52c0,0,4.7-1.3,3.65,12.78c-1.04,14.09,12.78,5.48,12.78,5.48\n                    l3.65-12.78l6-23.48l4.96-20.87l4.17-27.39l-2.09-15.91c0,0-3.65-16.7-14.61-35.74S185.34,394.05,185.34,394.05z\"><title>Quadriceps</title></path>\n                                    <path (click)=\"onMuscleClick('calves')\" (mouseenter)=\"onMuscleMouseEnter('calves')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='calves',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'calves',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.calves}\"\n                                          class=\"calves muscle\" d=\"M422.57,562.07l-4.11,16.24l-1.37,16.43l-1.76,29.15c0,0-0.39,23.67,3.62,28.37c4.01,4.7,7.92,7.43,7.92,7.43\n                    s9.39-1.76,9-8.02s0.01-10.57,0.01-10.57l3.51,8.02l6.26,9l6.46,4.89l7.63,1.57l1.17-24.85l-2.48-24l-3.39-15.13l-0.52-5.54\n                    l-11.35-18.59l-6.78-10.3l-2.09,6.39l-1.17,1.43l-5.22-10.3l-3.13-3.39h-1.7L422.57,562.07z\"><title>Calves</title></path>\n                                    <path (click)=\"onMuscleClick('calves')\" (mouseenter)=\"onMuscleMouseEnter('calves')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='calves',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'calves',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.calves}\"\n                                          class=\"calves muscle\" d=\"M499.52,572.7l-5.35,8.35l-4.43,9.91l-3.91,7.96l-0.78,4.17L483.09,637v13.3l2.74,12.39l0.91,7.7\n                    c0,0,9.26-6.13,9.52-6.65s6.39-11.35,6.39-11.35l2.35-7.7l0.65-0.65l1.3,6.13v4.96l3.52,4.43l7.83,1.96c0,0,9-4.17,8.61-10.57\n                    s1.57-21.65,1.57-21.65l-3.78-23.74l-2.61-12.39c0,0-0.78-9.13-2.61-13.57c-1.83-4.43-6.65-14.74-6.65-14.74l-8.35,9.13l-1.57,3.39\n                    L499.52,572.7z\"><title>Calves</title></path>\n                                    <path (click)=\"onMuscleClick('calves')\" (mouseenter)=\"onMuscleMouseEnter('calves')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='calves',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'calves',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.calves}\"\n                                          class=\"calves muscle\" d=\"M96.09,585.74l-7.3,15.39l-3.91,30.52l1.83,29.48c0,0,7.04,32.35,7.04,33.13s3.91,26.09,3.91,26.09l17.48-3.65\n                    l-6.26-42l-5.48-47.74l-1.3-16.43l-0.52-13.57L96.09,585.74z\"><title>Calves</title></path>\n                                    <polygon (click)=\"onMuscleClick('calves')\"\n                                             (mouseenter)=\"onMuscleMouseEnter('calves')\"\n                                             (mouseout)=\"resetSelectedMuscleGroup()\"\n                                             [ngClass]=\"{'is-focused': focusedMuscleGroup ==='calves',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'calves',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.calves}\"\n                                             class=\"calves muscle\" points=\"128.11,605.5 127.49,606.57 119.7,619.98 115.98,630.35 115.13,648.35 117.35,675.54 119.5,700.59\n                    120.67,713.5 123.8,684.93 128.11,661.07 130.07,649.91 130.07,636.8 130.07,625.85 \"><title>Calves</title></polygon>\n                                    <path (click)=\"onMuscleClick('calves')\" (mouseenter)=\"onMuscleMouseEnter('calves')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='calves',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'calves',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.calves}\"\n                                          class=\"calves muscle\" d=\"M157.13,603.74l4.7,13.04l1.57,7.57l-1.83,32.61l-3.13,22.43l-3.65,23.48l-2.74-53.93v-20.02\n                    C152.04,628.91,157.78,604.33,157.13,603.74z\"><title>Calves</title></path>\n                                    <polygon (click)=\"onMuscleClick('calves')\"\n                                             (mouseenter)=\"onMuscleMouseEnter('calves')\"\n                                             (mouseout)=\"resetSelectedMuscleGroup()\"\n                                             [ngClass]=\"{'is-focused': focusedMuscleGroup ==='calves',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'calves',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.calves}\"\n                                             class=\"calves muscle\" points=\"161.57,711.74 177.22,717.61 181.65,698.96 189.35,670.52 195.35,648.74 198.22,632.83 197.17,612.48\n                    194.83,595.52 190.13,595.52 187.13,587.04 182.7,586.26 179.89,599.96 175.39,623.96 167.96,664.13 \"><title>Calves</title>\n  </polygon>\n                                    <path (click)=\"onMuscleClick('gluteus')\"\n                                          (mouseenter)=\"onMuscleMouseEnter('gluteus')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='gluteus',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'gluteus',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.gluteus}\"\n                                          class=\"gluteus muscle\"\n                                          d=\"M417.22,365.57l-4.43,11.87l-1.96,10.43L409,403.65l-0.65,20.87c0,0,4.04,21.78,17.35,24.39\n                    c13.3,2.61,18.78,2.35,18.78,2.35s13.96-1.57,15.91-8.35c1.96-6.78,4.3-4.3,4.3-4.3l5.09,9.52c0,0,7.43,11.35,18.91,10.17\n                    s18.78-3.52,18.78-3.52s15.26-7.57,13.96-29.09c-1.3-21.52,0.08-37.43,0.08-37.43l-3.47-18.65c0,0-31.3,11.35-35.87,15.26\n                    s-16.75,20.22-17.24,24.52s-2.97,2.59-2.97,2.59s-0.26-13.54-13.57-26.33c-13.3-12.78-19.7-14.87-19.7-14.87\"><title>Gluteus</title></path>\n                                    <path (click)=\"onMuscleClick('anteriorDeltoid')\"\n                                          (mouseenter)=\"onMuscleMouseEnter('anteriorDeltoid')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='anteriorDeltoid',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'anteriorDeltoid',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.anteriorDeltoid}\"\n                                          class=\"anteriorDeltoid muscle\" d=\"M109.39,200.89l-12.13-3.72l-6.65-3.65c0,0-17.61-0.65-21.13,2.22c-3.52,2.87-7.96,7.04-10.17,13.3\n                    c-2.22,6.26-2.61,6.65-3,13.04c-0.39,6.39-0.91,9.26,0,13.83s2.24,9.29,2.24,9.29l6.37-10.46l7.7-6.56l0.52-1.01l1.15-11.81\n                    l0.22-1.95C74.5,213.41,92.04,198.87,109.39,200.89z\"><title>Anterior Deltoid</title></path>\n                                    <path (click)=\"onMuscleClick('lateralDeltoid')\"\n                                          (mouseenter)=\"onMuscleMouseEnter('lateralDeltoid')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='lateralDeltoid',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'lateralDeltoid',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.lateralDeltoid}\"\n                                          class=\"lateralDeltoid muscle\"\n                                          d=\"M89.96,192.97l-11.84-4.99c0,0-14.77,0.59-20.93,10.86c-6.16,10.27-8.51,17.8-8.51,17.8L47.6,231.8l1.27,9.88\n                    l0.39,10.47L52,264.97l4.4-16.73l1.99-3.6l-2.09-8.72c0,0-0.68-17.39,2.64-25.86C62.27,201.58,69.61,190.03,89.96,192.97z\">\n  <title>Lateral Deltoid</title></path>\n                                    <path (click)=\"onMuscleClick('anteriorDeltoid')\"\n                                          (mouseenter)=\"onMuscleMouseEnter('anteriorDeltoid')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='anteriorDeltoid',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'anteriorDeltoid',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.anteriorDeltoid}\"\n                                          class=\"anteriorDeltoid muscle\" d=\"M173.43,199.52l20.83,8.35l9.76,4.57l5.8,8.48v9.78l15.76,19.4l3.23,5.55l3.05-12.29c0,0,1.7-9.91,0.65-18.65\n                    c-1.04-8.74-2.48-12.39-5.74-16.3c-3.26-3.91-13.96-13.83-24.39-13.96c-10.43-0.13-12.65,1.43-12.65,1.43l-6.78,2.28L173.43,199.52z\n                    \"><title>Anterior Deltoid</title></path>\n                                    <path (click)=\"onMuscleClick('lateralDeltoid')\"\n                                          (mouseenter)=\"onMuscleMouseEnter('lateralDeltoid')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='lateralDeltoid',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'lateralDeltoid',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.lateralDeltoid}\"\n                                          class=\"lateralDeltoid muscle\" d=\"M193.65,194.43l9.5-2.34c0,0,12.03-0.98,16.33,1.66c4.3,2.64,13.01,8.9,15.95,19.27\n                    c2.93,10.37,4.21,17.02,4.21,17.61s-0.49,15.26-0.49,15.26l-3.52,20.74l-1.32,2.2l-4.95-12.13l2.63-14.06c0,0,3.89-26.66-6.66-35.87\n                    s-15-10.58-15-10.58S200.7,193.05,193.65,194.43z\"><title>Lateral Deltoid</title></path>\n                                    <path (click)=\"onMuscleClick('traps')\" (mouseenter)=\"onMuscleMouseEnter('traps')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='traps',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'traps',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.traps}\"\n                                          class=\"traps muscle\" d=\"M404.96,187.39L424,197.83l6.78,4.7l-4.17,2.09l4.17,25.3l2.87,28.43c0,0,27.65,43.04,28.43,54.52\n                    c0.78,11.48,11.48,2.09,11.48,2.09l3.39-14.87l12.52-22.7l8.87-17.74l2.61-10.96l3.13-28.96l4.17-17.74l22.96-11.48l7.3-5.22\n                    c0,0-44.09-1.83-56.09-29.48s-24.78,0-24.78,0S454.26,177.48,404.96,187.39z\"><title>Traps</title></path>\n                                    <path (click)=\"onMuscleClick('posteriorDeltoid')\"\n                                          (mouseenter)=\"onMuscleMouseEnter('posteriorDeltoid')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='posteriorDeltoid',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'posteriorDeltoid',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.posteriorDeltoid}\"\n                                          class=\"posteriorDeltoid muscle\" d=\"M373.13,241.91l15.65-23.22l7.04-8.87c0,0,26.87-4.96,30.78-5.22c3.91-0.26,4.17-2.09,4.17-2.09l-15.4-9.42\n                    l-10.42-5.71c0,0-22.7,6.52-26.61,21.39c-3.91,14.87-5.22,34.43-5.22,34.43V241.91z\"><title>Posterior Deltoid</title></path>\n                                    <path (click)=\"onMuscleClick('posteriorDeltoid')\"\n                                          (mouseenter)=\"onMuscleMouseEnter('posteriorDeltoid')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='posteriorDeltoid',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'posteriorDeltoid',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.posteriorDeltoid}\"\n                                          class=\"posteriorDeltoid muscle\" d=\"M538.52,185.3c0,0,15.78,4.83,20.35,14.87c4.57,10.04,6.39,19.3,6.39,19.3l1.3,14.09l-1.96,8.61l-7.17-11.87\n                    l-7.3-11.22c0,0-6.65-14.22-13.17-13.17c-6.52,1.04-8.74,0.52-9.13,0.13c-0.39-0.39-8.87-1.7-8.87-1.7l-8.87-0.52l-2.06-0.82\n                    c0,0,18.06-8.82,23.19-12.49C536.35,186.86,538.52,185.3,538.52,185.3z\"><title>Posterior Deltoid</title></path>\n                                    <path (click)=\"onMuscleClick('hamstrings')\"\n                                          (mouseenter)=\"onMuscleMouseEnter('hamstrings')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='hamstrings',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'hamstrings',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.hamstrings}\"\n                                          class=\"hamstrings muscle\"\n                                          d=\"M414.09,459.74l-4.43,24.52l2.22,33.13l1.17,16.17l3.65,23.22l1.48,24.84l4.91-21.32l3-9.78l1.04-2.61\n                    l10.1,19.53l17.29,27.62v-13.24l-6-61.04l-7.04-40.96l-4.17-21.44C437.3,458.39,425.83,446.17,414.09,459.74z\"><title>Hamstrings</title></path>\n                                    <path (click)=\"onMuscleClick('hamstrings')\"\n                                          (mouseenter)=\"onMuscleMouseEnter('hamstrings')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='hamstrings',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'hamstrings',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.hamstrings}\"\n                                          class=\"hamstrings muscle\"\n                                          d=\"M488.7,499.39l-4.17,24.81v34.93l-1.43,26.09l2.74,13.7l13.7-26.22l8.74-18l8.25,18.16l6.88-21.82v-49.3\n                    c0,0-1.04-27.39-5.74-34.43c-2.46-3.69-15.28-13.81-22.17-4.43C489.2,471.41,488.7,499.39,488.7,499.39z\"><title>Hamstrings</title></path>\n                                    <path (click)=\"onMuscleClick('latisimus')\"\n                                          (mouseenter)=\"onMuscleMouseEnter('latisimus')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='latisimus',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'latisimus',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.latisimus}\"\n                                          class=\"latisimus muscle\" d=\"M433.39,255.71l-15.65,1.85h-11.22v14.87l-1.57,10.7l6.78,17.22l6,14.87l3.65,17.74l6.26,19.83\n                    c0,0,5.22,9.65,3.13,13.83c-2.09,4.17,6-8.61,6-8.61l2.61-13.3c0,0,4.99-17.52,13.57-26.12c8.58-8.6,8.96-6.99,8.96-6.99\n                    l-12.54-27.12L433.39,255.71z\"><title>Latisimus</title></path>\n                                    <path (click)=\"onMuscleClick('latisimus')\"\n                                          (mouseenter)=\"onMuscleMouseEnter('latisimus')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='latisimus',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'latisimus',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.latisimus}\"\n                                          class=\"latisimus muscle\"\n                                          d=\"M499.29,255.71l-12.95,27.38l-9.38,16.99l-2.62,11.49l16.71,15.38l8.24,15.65l1.15,24.84l3.65,4.12l6.26-17.48\n                    l9.65-19.3l3.65-16.21l3.13-18.49l5.48-15.91l2.09-30l-7.04,4.17C527.3,258.35,508.83,260.12,499.29,255.71z\"><title>Latisimus</title></path>\n                                    <path (click)=\"onMuscleClick('triceps')\"\n                                          (mouseenter)=\"onMuscleMouseEnter('triceps')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='triceps',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'triceps',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.triceps}\"\n                                          class=\"triceps muscle\"\n                                          d=\"M389.3,222.61l-4.56,2.08l-9.95,14.76L370,257.57l-1.83,25.83v19.57l3.39,7.04l14.35,12.52l10.43-13.3\n                    l5.61-10.96l1.17-15.91l3.39-13.3L403.65,238c0,0-1.57-17.22-12.26-15.39C380.7,224.43,389.3,222.61,389.3,222.61z\"><title>Triceps</title></path>\n                                    <path (click)=\"onMuscleClick('triceps')\"\n                                          (mouseenter)=\"onMuscleMouseEnter('triceps')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='triceps',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'triceps',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.triceps}\"\n                                          class=\"triceps muscle\" d=\"M534.35,224.43l1.04,21.65l-2.42,27.89l1.21,12.81l1.21,18.78l7.04,6.01l9.13,2.85l13.3-9.13l3.13-8.87v-22.17\n                    l-2.87-21.65l-1.57-9.39l-6.13-12.91l-8.22-13C549.22,217.3,535.13,217.65,534.35,224.43z\"><title>Triceps</title></path>\n                                    <path (click)=\"onMuscleClick('erectors')\"\n                                          (mouseenter)=\"onMuscleMouseEnter('erectors')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='erectors',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'erectors',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.erectors}\"\n                                          class=\"erectors muscle\" d=\"M469.12,317.83c0,0,26.61,7.3,27.4,23.48c0.78,16.17,0,33.13,0,33.13L478,385.39l-14.35,23.48l-13.57-25.83\n                    l-14.61-11.48l5.3-26.7C440.78,344.87,443.81,317.83,469.12,317.83z\"><title>Erectors</title></path>\n                                    <path (click)=\"onMuscleClick('forearm')\"\n                                          (mouseenter)=\"onMuscleMouseEnter('forearm')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='forearm',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'forearm',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.forearm}\"\n                                          class=\"forearm muscle\"\n                                          d=\"M45,298s-6.53,18.52-6.53,43.83S34.78,396,34.78,396L58,398.7s3.65-17.74,7.83-26.87S77,343.91,77.57,337.91s1-16.5,1-16.5l-9.83-9.06-3.66-.49-6.34,8.84Z\">\n  <title>Abs</title></path>\n                                    <path (click)=\"onMuscleClick('forearm')\"\n                                          (mouseenter)=\"onMuscleMouseEnter('forearm')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='forearm',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'forearm',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.forearm}\"\n                                          class=\"forearm muscle\"\n                                          d=\"M215.3,325.91l7.92-10.37,9.76,5.87,6.65-14.28,5.67-13s8.61,25.82,9.92,35.74,5.21,44.6,5.21,44.6l4.7,24.27L243.74,400s-13.57-29-17.48-37.87S216.61,341,215.3,325.91Z\">\n  <title>Forearm</title></path>\n                                    <path (click)=\"onMuscleClick('forearm')\"\n                                          (mouseenter)=\"onMuscleMouseEnter('forearm')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='forearm',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'forearm',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.forearm}\"\n                                          class=\"forearm muscle\"\n                                          d=\"M346.78,400l20.09,2.31,2.87-6.35s16.69-31.74,20.09-41.13,9.79-31.62,9.65-40.44l-.14-8.81-13.06,18.43s-12.1,7.08-13.15-1.53l-1-8.61L371,309.52l-5.14-9.17s-7.57,21.65-10.18,42.78S346.78,400,346.78,400Z\">\n  <title>Forearm</title></path>\n                                    <path (click)=\"onMuscleClick('forearm')\"\n                                          (mouseenter)=\"onMuscleMouseEnter('forearm')\"\n                                          (mouseout)=\"resetSelectedMuscleGroup()\"\n                                          [ngClass]=\"{'is-focused': focusedMuscleGroup ==='forearm',\n        'major-muscle-group': exerciseBindingModel.majorMuscleGroup === 'forearm',\n        'assisting-muscle-group': assistingMuscleGroupsSelected.forearm}\"\n                                          class=\"forearm muscle\"\n                                          d=\"M534.35,306.15l1.89,32.09L540,352.33l12.32,30.32,5.09,20,21.91-2.94-2.93-19.56L576,333.54s-.2-14.47-2.74-24.06A99.07,99.07,0,0,0,568,294.22l-2.7,9.87-7.15,12s2.47,7.63-7.66,11.15-8.19-3.91-8.19-3.91l1.37-2.94Z\">\n  <title>Forearm</title></path>\n                                    </svg>\n                            </div>\n                            <div class=\"card-body\">\n                                <h5 class=\"card-title text-center\">Exercise Form</h5>\n                                <form class=\"form-signin\" #exerciseForm=\"ngForm\">\n\n                                    <div class=\"form-label-group\">\n                                        <label for=\"inputExerciseName\">Exercise name</label>\n                                        <input type=\"text\" id=\"inputExerciseName\" class=\"form-control\"\n                                               placeholder=\"Exercise name\" name=\"exerciseName\"\n                                               #inputExerciseName=\"ngModel\" required\n                                               [ngClass]=\"{'is-valid': inputExerciseName.valid && inputExerciseName.touched,\n                         'is-invalid': inputExerciseName.invalid && inputExerciseName.touched}\"\n                                               [(ngModel)]=\"exerciseBindingModel.name\">\n                                        <div class=\"valid-feedback\"></div>\n                                        <div class=\"invalid-feedback\">\n                                            Exercise name is required.\n                                        </div>\n                                    </div>\n\n                                    <div class=\"form-label-group\">\n                                        <label for=\"inputExerciseInstructions\">Exercise instructions</label>\n                                        <textarea class=\"form-control\" id=\"inputExerciseInstructions\" rows=\"4\" required\n                                                  wrap=\"hard\" placeholder=\"Exercise instructions\"\n                                                  name=\"exerciseInstructions\"\n                                                  #inputExerciseInstructions=\"ngModel\"\n                                                  [ngClass]=\"{'is-valid': inputExerciseInstructions.valid && inputExerciseInstructions.touched,\n                         'is-invalid': inputExerciseInstructions.invalid && inputExerciseInstructions.touched}\"\n                                                  [(ngModel)]=\"exerciseBindingModel.instructions\"></textarea>\n                                        <div class=\"valid-feedback\"></div>\n                                        <div class=\"invalid-feedback\">\n                                            Exercise instructions are required.\n                                        </div>\n                                    </div>\n\n                                    <div class=\"form-label-group\">\n                                        <label for=\"customFile\" id=\"exercisePictureLabel\">Exercise picture</label>\n                                        <div class=\"custom-file\" id=\"customFileContainer\">\n                                            <input type=\"file\" class=\"custom-file-input form-control\"\n                                                   id=\"customFile\" name=\"exercisePictureFile\"\n                                                   #inputExercisePicture=\"ngModel\"\n                                                   accept=\"image/*\"\n                                                   [(ngModel)]=\"file\"\n                                                   [ngClass]=\"{'is-valid': file && inputExercisePicture.touched,\n                         'is-invalid': !file && inputExercisePicture.touched}\"\n                                                   (change)=\"handleFileInput($event.target.files, chooseFileLabel)\">\n                                            <label class=\"custom-file-label\" for=\"customFile\"\n                                                   id=\"çhooseFileLabel\" #chooseFileLabel>Choose\n                                                file</label>\n                                            <div class=\"valid-feedback\"></div>\n                                            <div class=\"invalid-feedback\">\n                                                Exercise picture file should be an image.\n                                            </div>\n                                        </div>\n\n                                    </div>\n\n                                    <div class=\"form-label-group\">\n                                        <label for=\"youtubeVideoUrl\">YouTube Video URL</label>\n                                        <input type=\"url\" class=\"form-control is-valid\" id=\"youtubeVideoUrl\"\n                                               name=\"youtubeVideoUrl\" #youtubeVideoUrl=\"ngModel\"\n                                               required\n                                               placeholder=\"Enter YouTube Video URL\"\n                                               pattern=\"http(?:s?):\\/\\/(?:www\\.)?youtu(?:be\\.com\\/watch\\?v=|\\.be\\/)([\\w\\-\\_]*)(&(amp;)?[\\w\\?‌​=]*)?\"\n                                               [ngClass]=\"{'is-valid': youtubeVideoUrl.valid && youtubeVideoUrl.touched,\n                         'is-invalid': youtubeVideoUrl.invalid && youtubeVideoUrl.touched}\"\n                                               [(ngModel)]=\"exerciseBindingModel.youtubeURL\">\n                                        <div class=\"valid-feedback\">\n                                        </div>\n                                        <div class=\"invalid-feedback\">\n                                            Please enter a valid YouTube link.\n                                        </div>\n                                    </div>\n\n                                    <div class=\"form-label-group\">\n                                        <label for=\"inputMajorMuscleGroup\">Major Muscle Group</label>\n                                        <select class=\"custom-select form-control\" id=\"inputMajorMuscleGroup\"\n                                                name=\"inputMajorMuscleGroup\" #inputMajorMuscleGroup=\"ngModel\" required\n                                                [ngClass]=\"{'is-valid': inputMajorMuscleGroup.valid && inputMajorMuscleGroup.touched,\n                         'is-invalid': inputMajorMuscleGroup.invalid && inputMajorMuscleGroup.touched}\"\n                                                [(ngModel)]=\"exerciseBindingModel.majorMuscleGroup\"\n                                                (change)=\"handleMajorMuscleGroupChange($event)\">\n                                            <option selected value=\"\">Select Major Muscle Group</option>\n                                            <option value=\"biceps\">Biceps</option>\n                                            <option value=\"triceps\">Triceps</option>\n                                            <option value=\"forearm\">Forearm</option>\n                                            <option value=\"latisimus\">Latisimus</option>\n                                            <option value=\"erectors\">Erectors</option>\n                                            <option value=\"traps\">Traps</option>\n                                            <option value=\"chest\">Chest</option>\n                                            <option value=\"anteriorDeltoid\">Anterior Deltoid</option>\n                                            <option value=\"lateralDeltoid\">Lateral Deltoid</option>\n                                            <option value=\"posteriorDeltoid\">Posterior Deltoid</option>\n                                            <option value=\"hamstrings\">Hamstrings</option>\n                                            <option value=\"gluteus\">Gluteus</option>\n                                            <option value=\"calves\">Calves</option>\n                                            <option value=\"quadriceps\">Quadriceps</option>\n                                            <option value=\"abs\">Abs</option>\n                                        </select>\n                                    </div>\n\n                                    <div class=\"form-label-group\">\n                                        <label class=\"d-block\">Assisting Muscle Groups</label>\n                                        <div class=\"form-check form-check-inline\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" id=\"bicepsCheckBox\"\n                                                   value=\"biceps\" (change)=\"handleAssistingMuscleGroupsChange($event)\"\n                                                   [checked]=\"assistingMuscleGroupsSelected.biceps\"\n                                                   [disabled]=\"exerciseBindingModel.majorMuscleGroup==='biceps'\">\n                                            <label class=\"form-check-label\" for=\"bicepsCheckBox\">Biceps</label>\n                                        </div>\n                                        <div class=\"form-check form-check-inline\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" id=\"tricepsCheckBox\"\n                                                   value=\"triceps\" (change)=\"handleAssistingMuscleGroupsChange($event)\"\n                                                   [checked]=\"assistingMuscleGroupsSelected.triceps\"\n                                                   [disabled]=\"exerciseBindingModel.majorMuscleGroup==='triceps'\">\n                                            <label class=\"form-check-label\" for=\"tricepsCheckBox\">Triceps</label>\n                                        </div>\n                                        <div class=\"form-check form-check-inline\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" id=\"forearmCheckBox\"\n                                                   value=\"forearm\" (change)=\"handleAssistingMuscleGroupsChange($event)\"\n                                                   [checked]=\"assistingMuscleGroupsSelected.forearm\"\n                                                   [disabled]=\"exerciseBindingModel.majorMuscleGroup==='forearm'\">\n                                            <label class=\"form-check-label\" for=\"forearmCheckBox\">Forearm</label>\n                                        </div>\n                                        <div class=\"form-check form-check-inline\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" id=\"latisimusCheckBox\"\n                                                   value=\"latisimus\"\n                                                   (change)=\"handleAssistingMuscleGroupsChange($event)\"\n                                                   [checked]=\"assistingMuscleGroupsSelected.latisimus\"\n                                                   [disabled]=\"exerciseBindingModel.majorMuscleGroup==='latisimus'\">\n                                            <label class=\"form-check-label\" for=\"latisimusCheckBox\">Latisimus</label>\n                                        </div>\n                                        <div class=\"form-check form-check-inline\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" id=\"erectorsCheckBox\"\n                                                   value=\"erectors\" (change)=\"handleAssistingMuscleGroupsChange($event)\"\n                                                   [checked]=\"assistingMuscleGroupsSelected.erectors\"\n                                                   [disabled]=\"exerciseBindingModel.majorMuscleGroup==='erectors'\">\n                                            <label class=\"form-check-label\" for=\"erectorsCheckBox\">Erectors</label>\n                                        </div>\n                                        <div class=\"form-check form-check-inline\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" id=\"trapsCheckBox\"\n                                                   value=\"traps\" (change)=\"handleAssistingMuscleGroupsChange($event)\"\n                                                   [checked]=\"assistingMuscleGroupsSelected.traps\"\n                                                   [disabled]=\"exerciseBindingModel.majorMuscleGroup==='traps'\">\n                                            <label class=\"form-check-label\" for=\"trapsCheckBox\">Traps</label>\n                                        </div>\n                                        <div class=\"form-check form-check-inline\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" id=\"chestCheckBox\"\n                                                   value=\"chest\" (change)=\"handleAssistingMuscleGroupsChange($event)\"\n                                                   [checked]=\"assistingMuscleGroupsSelected.chest\"\n                                                   [disabled]=\"exerciseBindingModel.majorMuscleGroup==='chest'\">\n                                            <label class=\"form-check-label\" for=\"chestCheckBox\">Chest</label>\n                                        </div>\n                                        <div class=\"form-check form-check-inline\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" id=\"anteriorDeltoidCheckBox\"\n                                                   value=\"anteriorDeltoid\"\n                                                   (change)=\"handleAssistingMuscleGroupsChange($event)\"\n                                                   [checked]=\"assistingMuscleGroupsSelected.anteriorDeltoid\"\n                                                   [disabled]=\"exerciseBindingModel.majorMuscleGroup==='anteriorDeltoid'\">\n                                            <label class=\"form-check-label\" for=\"anteriorDeltoidCheckBox\">Anterior\n                                                Deltoid</label>\n                                        </div>\n                                        <div class=\"form-check form-check-inline\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" id=\"lateralDeltoidCheckBox\"\n                                                   value=\"lateralDeltoid\"\n                                                   (change)=\"handleAssistingMuscleGroupsChange($event)\"\n                                                   [checked]=\"assistingMuscleGroupsSelected.lateralDeltoid\"\n                                                   [disabled]=\"exerciseBindingModel.majorMuscleGroup==='lateralDeltoid'\">\n                                            <label class=\"form-check-label\" for=\"lateralDeltoidCheckBox\">Lateral\n                                                Deltoid</label>\n                                        </div>\n                                        <div class=\"form-check form-check-inline\">\n                                            <input class=\"form-check-input\" type=\"checkbox\"\n                                                   id=\"posteriorDeltoidCheckBox\"\n                                                   value=\"posteriorDeltoid\"\n                                                   (change)=\"handleAssistingMuscleGroupsChange($event)\"\n                                                   [checked]=\"assistingMuscleGroupsSelected.posteriorDeltoid\"\n                                                   [disabled]=\"exerciseBindingModel.majorMuscleGroup==='posteriorDeltoid'\">\n                                            <label class=\"form-check-label\" for=\"posteriorDeltoidCheckBox\">Posterior\n                                                Deltoid</label>\n                                        </div>\n                                        <div class=\"form-check form-check-inline\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" id=\"hamstringsCheckBox\"\n                                                   value=\"hamstrings\"\n                                                   (change)=\"handleAssistingMuscleGroupsChange($event)\"\n                                                   [checked]=\"assistingMuscleGroupsSelected.hamstrings\"\n                                                   [disabled]=\"exerciseBindingModel.majorMuscleGroup==='hamstrings'\">\n                                            <label class=\"form-check-label\" for=\"hamstringsCheckBox\">Hamstrings</label>\n                                        </div>\n                                        <div class=\"form-check form-check-inline\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" id=\"gluteusCheckBox\"\n                                                   value=\"gluteus\" (change)=\"handleAssistingMuscleGroupsChange($event)\"\n                                                   [checked]=\"assistingMuscleGroupsSelected.gluteus\"\n                                                   [disabled]=\"exerciseBindingModel.majorMuscleGroup==='gluteus'\">\n                                            <label class=\"form-check-label\" for=\"gluteusCheckBox\">Gluteus</label>\n                                        </div>\n                                        <div class=\"form-check form-check-inline\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" id=\"calvesCheckBox\"\n                                                   value=\"calves\" (change)=\"handleAssistingMuscleGroupsChange($event)\"\n                                                   [checked]=\"assistingMuscleGroupsSelected.calves\"\n                                                   [disabled]=\"exerciseBindingModel.majorMuscleGroup==='calves'\">\n                                            <label class=\"form-check-label\" for=\"calvesCheckBox\">Calves</label>\n                                        </div>\n                                        <div class=\"form-check form-check-inline\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" id=\"quadricepsCheckBox\"\n                                                   value=\"quadriceps\"\n                                                   (change)=\"handleAssistingMuscleGroupsChange($event)\"\n                                                   [checked]=\"assistingMuscleGroupsSelected.quadriceps\"\n                                                   [disabled]=\"exerciseBindingModel.majorMuscleGroup==='quadriceps'\">\n                                            <label class=\"form-check-label\" for=\"quadricepsCheckBox\">Quadriceps</label>\n                                        </div>\n\n                                        <div class=\"form-check form-check-inline\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" id=\"absCheckBox\"\n                                                   value=\"abs\" (change)=\"handleAssistingMuscleGroupsChange($event)\"\n                                                   [checked]=\"assistingMuscleGroupsSelected.abs\"\n                                                   [disabled]=\"exerciseBindingModel.majorMuscleGroup==='abs'\">\n                                            <label class=\"form-check-label\" for=\"absCheckBox\">Abs</label>\n                                        </div>\n\n                                    </div>\n\n\n                                    <hr>\n\n                                    <button class=\"btn btn-lg btn-secondary btn-block text-uppercase\"\n                                            type=\"submit\" [disabled]=\"exerciseForm.invalid\" (click)=\"onSubmit()\">Submit\n                                    </button>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/exercise/exercise-card/exercise-card.component.html": 
        /*!***********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/exercise/exercise-card/exercise-card.component.html ***!
          \***********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card d-inline-flex\">\n  <div class=\"thumbnail\">\n    <img class=\"card-img-top\" src=\"{{exercise.pictureURL}}\" alt=\"Card image cap\"/>\n  </div>\n  <div class=\"card-body\">\n    <h3 class=\"card-title\">{{exercise.name}}</h3>\n    <hr/>\n    <h4 class=\"font-weight-light\">Used in <span class=\"font-weight-bold\">{{exercise.workoutsCounter}}</span> workouts</h4>\n    <hr/>\n    <h5 class=\"card-subtitle font-weight-light mb-3\">Major Muscle Group:</h5>\n    <h5 class=\"card-subtitle\"> {{exercise.majorMuscleGroup | getConstantViewName}} </h5>\n    <hr/>\n    <h5 class=\"card-subtitle font-weight-light mb-1\">Assisting Muscle Groups:</h5>\n    <h6 class=\"card-subtitle mt-2\">{{assistingMuscleGroups.join(\", \")}}</h6>\n    <hr class=\"mb-5\"/>\n    <div class=\"buttons-wrapper left\">\n      <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"addToWorkoutHandler(exercise.id)\">Add to workout</button>\n    </div>\n    <div class=\"buttons-wrapper right\">\n      <a routerLink=\"/exercises/details/{{exercise.id}}\" class=\"btn btn-sm btn-info\">Details</a>\n    </div>\n  </div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/exercise/exercise-details/exercise-details.component.html": 
        /*!*****************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/exercise/exercise-details/exercise-details.component.html ***!
          \*****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n\r\n    <ng-template #createWorkoutExerciseModal let-modal>\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Exercise to Workout</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <form #createWorkoutExerciseForm=\"ngForm\">\r\n                <h5>{{selectedExercise.name}}</h5>\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-3\">\r\n                        <label for=\"inputReps\">Reps</label>\r\n                        <input type=\"number\" class=\"form-control\" id=\"inputReps\" name=\"inputReps\" #inputReps=\"ngModel\"\r\n                               required\r\n                               pattern=\"^[1-9][0-9]*\"\r\n                               min=\"1\"\r\n                               [ngClass]=\"{'is-valid': inputReps.valid && inputReps.touched,\r\n                         'is-invalid': inputReps.invalid && inputReps.touched}\"\r\n                               [(ngModel)]=\"workoutExerciseBindingModel.reps\">\r\n                        <div class=\"valid-feedback\"></div>\r\n                        <div class=\"invalid-feedback\">\r\n                            Reps should be a positive number.\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-3\">\r\n                        <label for=\"inputSets\">Sets</label>\r\n                        <input type=\"number\" class=\"form-control\" id=\"inputSets\" name=\"inputSets\" #inputSets=\"ngModel\"\r\n                               required\r\n                               pattern=\"^[1-9][0-9]*\"\r\n                               min=\"1\"\r\n                               [ngClass]=\"{'is-valid': inputSets.valid && inputSets.touched,\r\n                         'is-invalid': inputSets.invalid && inputSets.touched}\"\r\n                               [(ngModel)]=\"workoutExerciseBindingModel.sets\">\r\n                        <div class=\"valid-feedback\"></div>\r\n                        <div class=\"invalid-feedback\">\r\n                            Sets should be a positive number.\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-6\">\r\n                        <label for=\"inputStatus\">Workout</label>\r\n                        <select id=\"inputStatus\" name=\"status\" class=\"form-control\" #inputWorkoutId\r\n                                [(ngModel)]=\"selectedWorkoutId\">\r\n                            <option [ngValue]=\"workout.id\"\r\n                                    *ngFor=\"let workout of userWorkouts\">{{workout.name}}</option>\r\n                        </select>\r\n                    </div>\r\n\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" [disabled]=\"createWorkoutExerciseForm.invalid\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Add to Workout</button>\r\n        </div>\r\n    </ng-template>\r\n\r\n\r\n    <div class=\"jumbotron\">\r\n        <img src=\"assets/static/images/logo.png\" height=\"300px\" class=\"d-inline-block align-center\" alt=\"\">\r\n        <h1 class=\"display-4\">Exercise Details</h1>\r\n        <hr class=\"my-2\"/>\r\n        <div class=\"container pt-4\">\r\n            <div class=\"row\">\r\n                <div class=\"exercise-container col-lg-9 mx-auto\">\r\n                    <div class=\"exercise-intro mt-4\">\r\n                        <img src=\"{{selectedExercise.pictureURL}}\" height=\"300px\"\r\n                             class=\"d-block mx-auto img-thumbnail\" alt=\"Exercise picture\">\r\n                        <h2 class=\"display-4 d-block mx-auto font-weight-bolder\">{{selectedExercise.name}}</h2>\r\n                    </div>\r\n\r\n                    <hr class=\"my-4\"/>\r\n\r\n                    <h3 class=\"font-weight-light pb-2\">Used in <span class=\"font-weight-bold\">{{selectedExercise.workoutsCounter}}</span> workouts</h3>\r\n                    <hr/>\r\n\r\n                    <div class=\"involving-muscles\">\r\n                        <div class=\"col-lg-5 d-inline-block\">\r\n                            <svg class=\"body-model\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                                 xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" height=\"400\"\r\n                                 viewBox=\"0 0 612 792\" xml:space=\"preserve\">\r\n\r\n                                        <image style=\"overflow:visible;\" xlink:href=\"assets/static/images/muscles.png\"\r\n                                               transform=\"matrix(0.7228 0 0 0.7228 -42.5334 69.2174)\"></image>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('abs'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'abs'}\"\r\n                                      class=\"abs muscle\" d=\"M137.3,267.09c0,0-53.61,7.17-50.74,35.87c2.87,28.7,4.57,25.83,1.7,45.39c-2.87,19.57,4.83,28.7,4.83,28.7\r\n\tl38.09,50.74c0,0,18.26,21.78,32.87-14.48c14.61-36.26,27-42.39,27-42.39l7.3-6.78c0,0-1.43-7.3-1.3-10.3\r\n\tc0.13-3-2.87-16.04-2.87-16.04s-2.35-10.83,0.13-19.3c2.48-8.48,0-25.04-0.65-26.22s-1.96-16.43-20.74-18s-22.88-5.43-22.88-5.43\r\n\tL137.3,267.09z\"><title>Abs</title></path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('traps'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'traps'}\"\r\n                                      class=\"traps muscle\" d=\"M83.7,184.85l10.76,6.46l8.22,3.91l10.17,2.93h6.65v-4.3v-10.57l-1.96-10.76\r\n                    C117.54,172.52,107.17,185.43,83.7,184.85z\"><title>Traps</title></path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('traps'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'traps'}\"\r\n                                      class=\"traps muscle\" d=\"M163.72,169.98l-1.96,15.36l-0.98,12.82l1.47,1.37l15.95-2.35l12.72-4.3l9-3.52l4.11-1.76\r\n                    C204.02,187.59,193.46,190.13,163.72,169.98z\"><title>Traps</title></path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('chest'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'chest'}\"\r\n                                      class=\"chest muscle\" d=\"M74.5,213.41l-1.37,11.93l0.68,2.15l2.64,2.74l1.96,11.74c0,0,3.91,20.93,11.15,25.43s5.48,4.11,5.48,4.11\r\n                    l6.55,2.74l9.77-0.32c0,0,15.18-1.05,18.7-7.5c3.52-6.46,3.33-5.48,3.52-10.37s0-13.11,0-13.11l0.09-11.54l-3.22-9l-0.2-11.54\r\n                    l-0.39-5.28l-10.37-3.52l-11.74-1.17C107.76,200.89,79.59,208.52,74.5,213.41z\"><title>Chest</title></path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('chest'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'chest'}\"\r\n                                      class=\"chest muscle\" d=\"M168.41,200.89l-14.28,2.15l-5.67,2.15v2.93v6.85l-1.96,9.2l-4.89,10.37l-0.98,15.26c0,0,1.19,16.46,8.41,18.71\r\n                    c7.23,2.25,10.37,4.18,17.22,4.77c6.85,0.59,13.3-1.17,13.3-1.17s8.41-1.57,13.89-10.37c5.48-8.8,7.24-14.48,7.24-14.48l2.35-10.11\r\n                    l3.33-10.82l1.57-9l-5.28-5.09C202.65,212.24,180.15,199.12,168.41,200.89z\"><title>Chest</title></path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('biceps'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'biceps'}\"\r\n                                      class=\"biceps muscle\" d=\"M71.96,229.46c0,0-16.96,12.07-19.3,34.11c-2.35,22.04-2.22,25.7-2.22,25.7l1.17,12.91l1.3,6.78l2.35,5.35\r\n                    l2.09,6.39l15.26-17.35l8.61-37.3l-3.92-30.78l-2.82-7.08L71.96,229.46z\"><title>Biceps</title></path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('biceps'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'biceps'}\"\r\n                                      class=\"biceps muscle\" d=\"M208.91,228.87l17.22,21.91c0,0,12.33,19.57,11.35,38.93c-0.98,19.37-0.98,19.37-0.98,19.37l-3.52,12.33\r\n                    l-9.75-5.87l-10.59-18.59l-3.72-14.09V228.87z\"><title>Biceps</title></path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('quadriceps'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'quadriceps'}\"\r\n                                      class=\"quadriceps muscle\" d=\"M96,400.04l0.61,8.83L88,425.7l-7.24,17.41l-5.28,19.17c0,0,0,21.13,3.33,40.89\r\n                    c3.33,19.76,5.87,34.83,5.87,34.83l5.28,19.57l2.54,10.17l2.93,2.54l2.15-2.54L99.93,556v-10.37c0,0,3.21-5.28,6.21-4.7\r\n                    c2.99,0.59,7.49,0.39,7.88,6.85c0.39,6.46,1.96,15.26,1.96,15.26s-0.39,9.2,5.67,7.24c6.07-1.96,7.24-3.72,7.24-3.72l2.15-7.24\r\n                    l2.09-25.76l-4.96-30l-6-22.96l-14.87-40.17l-6.14-34.06L96,400.04z\"><title>Quadriceps</title></path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('quadriceps'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'quadriceps'}\"\r\n                                      class=\"quadriceps muscle\"\r\n                                      d=\"M185.34,394.05l-7.86,36.56l-11.22,32.52l-4.7,11.74l-6.52,23.74l-2.61,18.52l-0.52,37.3l1.3,5.22l4.43,4.43\r\n                    c0,0,7.04,4.17,8.09-11.22c1.04-15.39,4.17-14.87,4.17-14.87l6.78-0.52c0,0,4.7-1.3,3.65,12.78c-1.04,14.09,12.78,5.48,12.78,5.48\r\n                    l3.65-12.78l6-23.48l4.96-20.87l4.17-27.39l-2.09-15.91c0,0-3.65-16.7-14.61-35.74S185.34,394.05,185.34,394.05z\"><title>Quadriceps</title></path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('calves'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'calves'}\"\r\n                                      class=\"calves muscle\" d=\"M422.57,562.07l-4.11,16.24l-1.37,16.43l-1.76,29.15c0,0-0.39,23.67,3.62,28.37c4.01,4.7,7.92,7.43,7.92,7.43\r\n                    s9.39-1.76,9-8.02s0.01-10.57,0.01-10.57l3.51,8.02l6.26,9l6.46,4.89l7.63,1.57l1.17-24.85l-2.48-24l-3.39-15.13l-0.52-5.54\r\n                    l-11.35-18.59l-6.78-10.3l-2.09,6.39l-1.17,1.43l-5.22-10.3l-3.13-3.39h-1.7L422.57,562.07z\"><title>Calves</title></path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('calves'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'calves'}\"\r\n                                      class=\"calves muscle\" d=\"M499.52,572.7l-5.35,8.35l-4.43,9.91l-3.91,7.96l-0.78,4.17L483.09,637v13.3l2.74,12.39l0.91,7.7\r\n                    c0,0,9.26-6.13,9.52-6.65s6.39-11.35,6.39-11.35l2.35-7.7l0.65-0.65l1.3,6.13v4.96l3.52,4.43l7.83,1.96c0,0,9-4.17,8.61-10.57\r\n                    s1.57-21.65,1.57-21.65l-3.78-23.74l-2.61-12.39c0,0-0.78-9.13-2.61-13.57c-1.83-4.43-6.65-14.74-6.65-14.74l-8.35,9.13l-1.57,3.39\r\n                    L499.52,572.7z\"><title>Calves</title></path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('calves'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'calves'}\"\r\n                                      class=\"calves muscle\" d=\"M96.09,585.74l-7.3,15.39l-3.91,30.52l1.83,29.48c0,0,7.04,32.35,7.04,33.13s3.91,26.09,3.91,26.09l17.48-3.65\r\n                    l-6.26-42l-5.48-47.74l-1.3-16.43l-0.52-13.57L96.09,585.74z\"><title>Calves</title></path>\r\n                                <polygon\r\n\r\n                                        [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('calves'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'calves'}\"\r\n                                        class=\"calves muscle\" points=\"128.11,605.5 127.49,606.57 119.7,619.98 115.98,630.35 115.13,648.35 117.35,675.54 119.5,700.59\r\n                    120.67,713.5 123.8,684.93 128.11,661.07 130.07,649.91 130.07,636.8 130.07,625.85 \"><title>Calves</title></polygon>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('calves'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'calves'}\"\r\n                                      class=\"calves muscle\" d=\"M157.13,603.74l4.7,13.04l1.57,7.57l-1.83,32.61l-3.13,22.43l-3.65,23.48l-2.74-53.93v-20.02\r\n                    C152.04,628.91,157.78,604.33,157.13,603.74z\"><title>Calves</title></path>\r\n                                <polygon\r\n\r\n                                        [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('calves'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'calves'}\"\r\n                                        class=\"calves muscle\" points=\"161.57,711.74 177.22,717.61 181.65,698.96 189.35,670.52 195.35,648.74 198.22,632.83 197.17,612.48\r\n                    194.83,595.52 190.13,595.52 187.13,587.04 182.7,586.26 179.89,599.96 175.39,623.96 167.96,664.13 \"><title>Calves</title>\r\n  </polygon>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('gluteus'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'gluteus'}\"\r\n                                      class=\"gluteus muscle\"\r\n                                      d=\"M417.22,365.57l-4.43,11.87l-1.96,10.43L409,403.65l-0.65,20.87c0,0,4.04,21.78,17.35,24.39\r\n                    c13.3,2.61,18.78,2.35,18.78,2.35s13.96-1.57,15.91-8.35c1.96-6.78,4.3-4.3,4.3-4.3l5.09,9.52c0,0,7.43,11.35,18.91,10.17\r\n                    s18.78-3.52,18.78-3.52s15.26-7.57,13.96-29.09c-1.3-21.52,0.08-37.43,0.08-37.43l-3.47-18.65c0,0-31.3,11.35-35.87,15.26\r\n                    s-16.75,20.22-17.24,24.52s-2.97,2.59-2.97,2.59s-0.26-13.54-13.57-26.33c-13.3-12.78-19.7-14.87-19.7-14.87\"><title>Gluteus</title></path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('anteriorDeltoid'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'anteriorDeltoid'}\"\r\n                                      class=\"anteriorDeltoid muscle\" d=\"M109.39,200.89l-12.13-3.72l-6.65-3.65c0,0-17.61-0.65-21.13,2.22c-3.52,2.87-7.96,7.04-10.17,13.3\r\n                    c-2.22,6.26-2.61,6.65-3,13.04c-0.39,6.39-0.91,9.26,0,13.83s2.24,9.29,2.24,9.29l6.37-10.46l7.7-6.56l0.52-1.01l1.15-11.81\r\n                    l0.22-1.95C74.5,213.41,92.04,198.87,109.39,200.89z\"><title>Anterior Deltoid</title></path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('lateralDeltoid'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'lateralDeltoid'}\"\r\n                                      class=\"lateralDeltoid muscle\"\r\n                                      d=\"M89.96,192.97l-11.84-4.99c0,0-14.77,0.59-20.93,10.86c-6.16,10.27-8.51,17.8-8.51,17.8L47.6,231.8l1.27,9.88\r\n                    l0.39,10.47L52,264.97l4.4-16.73l1.99-3.6l-2.09-8.72c0,0-0.68-17.39,2.64-25.86C62.27,201.58,69.61,190.03,89.96,192.97z\"><title>Lateral Deltoid</title>\r\n  </path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('anteriorDeltoid'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'anteriorDeltoid'}\"\r\n                                      class=\"anteriorDeltoid muscle\" d=\"M173.43,199.52l20.83,8.35l9.76,4.57l5.8,8.48v9.78l15.76,19.4l3.23,5.55l3.05-12.29c0,0,1.7-9.91,0.65-18.65\r\n                    c-1.04-8.74-2.48-12.39-5.74-16.3c-3.26-3.91-13.96-13.83-24.39-13.96c-10.43-0.13-12.65,1.43-12.65,1.43l-6.78,2.28L173.43,199.52z\r\n                    \"><title>Anterior Deltoid</title></path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('lateralDeltoid'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'lateralDeltoid'}\"\r\n                                      class=\"lateralDeltoid muscle\" d=\"M193.65,194.43l9.5-2.34c0,0,12.03-0.98,16.33,1.66c4.3,2.64,13.01,8.9,15.95,19.27\r\n                    c2.93,10.37,4.21,17.02,4.21,17.61s-0.49,15.26-0.49,15.26l-3.52,20.74l-1.32,2.2l-4.95-12.13l2.63-14.06c0,0,3.89-26.66-6.66-35.87\r\n                    s-15-10.58-15-10.58S200.7,193.05,193.65,194.43z\"><title>Lateral Deltoid</title></path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('traps'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'traps'}\"\r\n                                      class=\"traps muscle\" d=\"M404.96,187.39L424,197.83l6.78,4.7l-4.17,2.09l4.17,25.3l2.87,28.43c0,0,27.65,43.04,28.43,54.52\r\n                    c0.78,11.48,11.48,2.09,11.48,2.09l3.39-14.87l12.52-22.7l8.87-17.74l2.61-10.96l3.13-28.96l4.17-17.74l22.96-11.48l7.3-5.22\r\n                    c0,0-44.09-1.83-56.09-29.48s-24.78,0-24.78,0S454.26,177.48,404.96,187.39z\"><title>Traps</title></path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('posteriorDeltoid'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'posteriorDeltoid'}\"\r\n                                      class=\"posteriorDeltoid muscle\" d=\"M373.13,241.91l15.65-23.22l7.04-8.87c0,0,26.87-4.96,30.78-5.22c3.91-0.26,4.17-2.09,4.17-2.09l-15.4-9.42\r\n                    l-10.42-5.71c0,0-22.7,6.52-26.61,21.39c-3.91,14.87-5.22,34.43-5.22,34.43V241.91z\"><title>Posterior Deltoid</title></path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('posteriorDeltoid'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'posteriorDeltoid'}\"\r\n                                      class=\"posteriorDeltoid muscle\" d=\"M538.52,185.3c0,0,15.78,4.83,20.35,14.87c4.57,10.04,6.39,19.3,6.39,19.3l1.3,14.09l-1.96,8.61l-7.17-11.87\r\n                    l-7.3-11.22c0,0-6.65-14.22-13.17-13.17c-6.52,1.04-8.74,0.52-9.13,0.13c-0.39-0.39-8.87-1.7-8.87-1.7l-8.87-0.52l-2.06-0.82\r\n                    c0,0,18.06-8.82,23.19-12.49C536.35,186.86,538.52,185.3,538.52,185.3z\"><title>Posterior Deltoid</title></path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('hamstrings'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'hamstrings'}\"\r\n                                      class=\"hamstrings muscle\"\r\n                                      d=\"M414.09,459.74l-4.43,24.52l2.22,33.13l1.17,16.17l3.65,23.22l1.48,24.84l4.91-21.32l3-9.78l1.04-2.61\r\n                    l10.1,19.53l17.29,27.62v-13.24l-6-61.04l-7.04-40.96l-4.17-21.44C437.3,458.39,425.83,446.17,414.09,459.74z\"><title>Hamstrings</title></path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('hamstrings'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'hamstrings'}\"\r\n                                      class=\"hamstrings muscle\"\r\n                                      d=\"M488.7,499.39l-4.17,24.81v34.93l-1.43,26.09l2.74,13.7l13.7-26.22l8.74-18l8.25,18.16l6.88-21.82v-49.3\r\n                    c0,0-1.04-27.39-5.74-34.43c-2.46-3.69-15.28-13.81-22.17-4.43C489.2,471.41,488.7,499.39,488.7,499.39z\"><title>Hamstrings</title></path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('latisimus'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'latisimus'}\"\r\n                                      class=\"latisimus muscle\" d=\"M433.39,255.71l-15.65,1.85h-11.22v14.87l-1.57,10.7l6.78,17.22l6,14.87l3.65,17.74l6.26,19.83\r\n                    c0,0,5.22,9.65,3.13,13.83c-2.09,4.17,6-8.61,6-8.61l2.61-13.3c0,0,4.99-17.52,13.57-26.12c8.58-8.6,8.96-6.99,8.96-6.99\r\n                    l-12.54-27.12L433.39,255.71z\"><title>Latisimus</title></path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('latisimus'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'latisimus'}\"\r\n                                      class=\"latisimus muscle\"\r\n                                      d=\"M499.29,255.71l-12.95,27.38l-9.38,16.99l-2.62,11.49l16.71,15.38l8.24,15.65l1.15,24.84l3.65,4.12l6.26-17.48\r\n                    l9.65-19.3l3.65-16.21l3.13-18.49l5.48-15.91l2.09-30l-7.04,4.17C527.3,258.35,508.83,260.12,499.29,255.71z\"><title>Latisimus</title></path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('triceps'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'triceps'}\"\r\n                                      class=\"triceps muscle\"\r\n                                      d=\"M389.3,222.61l-4.56,2.08l-9.95,14.76L370,257.57l-1.83,25.83v19.57l3.39,7.04l14.35,12.52l10.43-13.3\r\n                    l5.61-10.96l1.17-15.91l3.39-13.3L403.65,238c0,0-1.57-17.22-12.26-15.39C380.7,224.43,389.3,222.61,389.3,222.61z\"><title>Triceps</title></path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('triceps'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'triceps'}\"\r\n                                      class=\"triceps muscle\" d=\"M534.35,224.43l1.04,21.65l-2.42,27.89l1.21,12.81l1.21,18.78l7.04,6.01l9.13,2.85l13.3-9.13l3.13-8.87v-22.17\r\n                    l-2.87-21.65l-1.57-9.39l-6.13-12.91l-8.22-13C549.22,217.3,535.13,217.65,534.35,224.43z\"><title>Triceps</title></path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('erectors'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'erectors'}\"\r\n                                      class=\"erectors muscle\" d=\"M469.12,317.83c0,0,26.61,7.3,27.4,23.48c0.78,16.17,0,33.13,0,33.13L478,385.39l-14.35,23.48l-13.57-25.83\r\n                    l-14.61-11.48l5.3-26.7C440.78,344.87,443.81,317.83,469.12,317.83z\"><title>Erectors</title></path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('forearm'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'forearm'}\"\r\n                                      class=\"forearm muscle\"\r\n                                      d=\"M45,298s-6.53,18.52-6.53,43.83S34.78,396,34.78,396L58,398.7s3.65-17.74,7.83-26.87S77,343.91,77.57,337.91s1-16.5,1-16.5l-9.83-9.06-3.66-.49-6.34,8.84Z\"><title>Forearm</title>\r\n  </path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('forearm'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'forearm'}\"\r\n                                      class=\"forearm muscle\"\r\n                                      d=\"M215.3,325.91l7.92-10.37,9.76,5.87,6.65-14.28,5.67-13s8.61,25.82,9.92,35.74,5.21,44.6,5.21,44.6l4.7,24.27L243.74,400s-13.57-29-17.48-37.87S216.61,341,215.3,325.91Z\"><title>Forearm</title>\r\n  </path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('forearm'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'forearm'}\"\r\n                                      class=\"forearm muscle\"\r\n                                      d=\"M346.78,400l20.09,2.31,2.87-6.35s16.69-31.74,20.09-41.13,9.79-31.62,9.65-40.44l-.14-8.81-13.06,18.43s-12.1,7.08-13.15-1.53l-1-8.61L371,309.52l-5.14-9.17s-7.57,21.65-10.18,42.78S346.78,400,346.78,400Z\"><title>Forearm</title>\r\n  </path>\r\n                                <path [ngClass]=\"{'assisting-muscle-group': selectedExercise.assistingMuscleGroups.includes('forearm'),\r\n        'major-muscle-group': selectedExercise.majorMuscleGroup === 'forearm'}\"\r\n                                      class=\"forearm muscle\"\r\n                                      d=\"M534.35,306.15l1.89,32.09L540,352.33l12.32,30.32,5.09,20,21.91-2.94-2.93-19.56L576,333.54s-.2-14.47-2.74-24.06A99.07,99.07,0,0,0,568,294.22l-2.7,9.87-7.15,12s2.47,7.63-7.66,11.15-8.19-3.91-8.19-3.91l1.37-2.94Z\"><title>Forearm</title>\r\n  </path>\r\n                                    </svg>\r\n                        </div>\r\n                        <div class=\"col-lg-5 d-inline-block align-middle\">\r\n                            <h4>Major Muscle Group</h4>\r\n                            <h4 class=\"font-weight-light\">{{selectedExercise.majorMuscleGroup | getConstantViewName}}</h4>\r\n                            <h4>Assisting Muscle Groups</h4>\r\n                            <h4 class=\"font-weight-light\"\r\n                                *ngFor=\"let muscleGroup of selectedExercise.assistingMuscleGroups\">\r\n                                {{muscleGroup | getConstantViewName}}\r\n                            </h4>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"instructions col-12 my-3\">\r\n                        <h4 class=\"mb-4\">Instructions</h4>\r\n                        <p class=\"text-center text-justify\">{{selectedExercise.instructions}}</p>\r\n                    </div>\r\n\r\n                    <div class=\"video px-5 pb-5 pt-0 my-0 d-inline-block col-12\" *ngIf=\"youtubeVideoId\">\r\n                        <h4 class=\"m-5\">Video Instructions</h4>\r\n                        <youtube-player [videoId]=\"youtubeVideoId\" class=\"embed-responsive embed-responsive-16by9\"\r\n                                        (ready)=\"onPlayerInit($event)\"></youtube-player>\r\n                    </div>\r\n\r\n                    <hr/>\r\n\r\n                    <div class=\"buttons col-12 mx-auto p-3\">\r\n                        <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"open(createWorkoutExerciseModal)\">\r\n                            Add to workout\r\n                        </button>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/food/all-foods/all-foods.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/food/all-foods/all-foods.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n    <div *ngIf=\"loading\" class=\"loader-container\">\n        <img src=\"assets/static/images/global-loader.gif\" alt=\"Loader\">\n    </div>\n\n    <ng-template #createMealFoodModal let-modal>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Food to Meal</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <form #addToMealForm=\"ngForm\">\n                <ng-template [ngIf]=\"userMeals && userMeals.length\">\n                    <h5>{{selectedFoodForModal.name}}</h5>\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-3\">\n                            <label for=\"inputServing\">Serving (g.)</label>\n                            <input type=\"number\" class=\"form-control\" id=\"inputServing\" name=\"inputServing\"\n                                   #inputServing=\"ngModel\"\n                                   required\n                                   pattern=\"^[1-9][0-9]*\"\n                                   min=\"1\"\n                                   (change)=\"this.makeChartDataForMacroNutrients()\"\n                                   [ngClass]=\"{'is-valid': inputServing.valid && inputServing.touched,\n                         'is-invalid': inputServing.invalid && inputServing.touched}\"\n                                   [(ngModel)]=\"mealFoodBindingModel.serving\">\n                            <div class=\"valid-feedback\"></div>\n                            <div class=\"invalid-feedback\">\n                                Serving should be a positive number.\n                            </div>\n                        </div>\n\n                        <div class=\"form-group col-6\">\n                            <label for=\"inputStatus\">Meal</label>\n                            <select id=\"inputStatus\" name=\"status\" class=\"form-control\" #inputMealId required\n                                    [(ngModel)]=\"selectedMealId\">\n                                <option [ngValue]=\"meal.id\"\n                                        *ngFor=\"let meal of userMeals\">{{meal.name}}</option>\n                            </select>\n                        </div>\n\n                    </div>\n\n                    <hr/>\n\n                    <h3 class=\"text-center font-weight-light\">Calories: {{mealFoodCaloriesPerServing}}</h3>\n                    <div class=\"chart-container row align-middle\">\n                        <ngx-charts-pie-chart\n                                [results]=\"macroNutrientsData\"\n                                [animations]=\"true\"\n                                [trimLabels]=\"false\"\n                                [doughnut]=\"true\"\n                        >\n\n                        </ngx-charts-pie-chart>\n\n                        <div class=\"macros text-center mx-auto\">\n                            <h5 class=\"font-weight-light \">\n                                Protein: {{mealFoodProteinPerServing}}g.</h5>\n                            <h5 class=\"font-weight-light \">\n                                Carbohydrates: {{mealFoodCarbohydratesPerServing}}g.</h5>\n                            <h5 class=\"font-weight-light \">Fats: {{mealFoodFatsPerServing}}\n                                g.</h5>\n                            <span class=\"display-5 opacity-5\"><i\n                                    class=\"fas fa-utensils fa-lg\"></i></span>\n                        </div>\n                    </div>\n                </ng-template>\n            </form>\n\n            <ng-template [ngIf]=\"userMeals && !userMeals.length\">\n                <h3 class=\"mb-3\">You don't have any created meals.</h3>\n                <button type=\"button\" class=\"btn btn-success mt-3 d-block mx-auto\" routerLink=\"/my-meals\" (click)=\"modal.dismiss()\">Go to My Meals</button>\n            </ng-template>\n\n\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-dark\" [disabled]=\"addToMealForm.invalid || userMeals && !userMeals.length\"\n                    (click)=\"modal.close()\">Add to Meal\n            </button>\n        </div>\n    </ng-template>\n\n    <div class=\"jumbotron\">\n\n        <img src=\"assets/static/images/logo.png\" height=\"300px\" class=\"align-center\" alt=\"\">\n        <h1 class=\"display-4\">All Foods</h1>\n\n\n        <hr class=\"my-4\">\n        <div class=\"container justify-content-center pb-0\">\n            <ng-template [ngIf]=\"filteredFoods.length > 0\" [ngIfElse]=\"noSuchFoods\">\n                <div class=\"row\">\n                    <app-food-card\n                            (modalOpen)=\"open(createMealFoodModal, $event)\"\n                            [food]=\"food\"\n                            class=\"col-lg-4 col-sm-12 my-3 d-flex mx-auto align-items-stretch\"\n                            *ngFor=\"let food of filteredFoods | slice: (page-1) * pageSize : (page-1) * pageSize + pageSize\">\n                        >\n                    </app-food-card>\n                </div>\n                <ngb-pagination class=\"d-inline-block mt-5\" [(page)]=\"page\"\n                                [pageSize]=\"pageSize\"\n                                [collectionSize]=\"filteredFoods.length\"></ngb-pagination>\n            </ng-template>\n\n            <ng-template #noSuchFoods>\n                <h5>There are no foods.</h5>\n            </ng-template>\n\n        </div>\n\n\n    </div>\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/food/food-card/food-card.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/food/food-card/food-card.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card d-inline-flex\">\n    <div class=\"thumbnail\">\n        <img class=\"card-img-top\" src=\"{{food.pictureURL}}\" alt=\"Card image cap\"/>\n    </div>\n    <div class=\"card-body\">\n        <h3 class=\"card-title\">{{food.name}}</h3>\n        <hr/>\n\n        <h3 class=\"font-weight-light\">Used in <span class=\"font-weight-bold\">{{food.mealsCounter}}</span> meals</h3>\n        <hr/>\n\n        <h4 class=\"card-title\">Nutrition Per 100 g</h4>\n        <h5 class=\"card-subtitle font-weight-light mb-1\">Protein: {{food.proteinPerHundred}}</h5>\n        <h5 class=\"card-subtitle font-weight-light mb-1\">Carbohydrates: {{food.carbohydratesPerHundred}}</h5>\n        <h5 class=\"card-subtitle font-weight-light mb-1\">Fats: {{food.fatsPerHundred}}</h5>\n        <hr/>\n        <h4 class=\"card-subtitle font-weight-bold mb-3\">Calories: {{food.caloriesPerHundred}}</h4>\n        <hr class=\"mb-5\"/>\n        <div class=\"buttons-wrapper left\">\n            <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"addToMealHandler(food.id)\">Add to meal\n            </button>\n        </div>\n        <div class=\"buttons-wrapper right\">\n            <a routerLink=\"/foods/details/{{food.id}}\" class=\"btn btn-sm btn-info\">Details</a>\n        </div>\n    </div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/food/food-details/food-details.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/food/food-details/food-details.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n    <ng-template #createMealFoodModal let-modal>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Food to Meal</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <form #addToMealForm=\"ngForm\">\n                <ng-template [ngIf]=\"userMeals && userMeals.length\">\n                    <h5>{{selectedFood.name}}</h5>\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-3\">\n                            <label for=\"inputServing\">Serving (g.)</label>\n                            <input type=\"number\" class=\"form-control\" id=\"inputServing\" name=\"inputServing\"\n                                   #inputServing=\"ngModel\"\n                                   required\n                                   pattern=\"^[1-9][0-9]*\"\n                                   min=\"1\"\n                                   (change)=\"this.makeChartDataForMacroNutrients()\"\n                                   [ngClass]=\"{'is-valid': inputServing.valid && inputServing.touched,\n                         'is-invalid': inputServing.invalid && inputServing.touched}\"\n                                   [(ngModel)]=\"mealFoodBindingModel.serving\">\n                            <div class=\"valid-feedback\"></div>\n                            <div class=\"invalid-feedback\">\n                                Serving should be a positive number.\n                            </div>\n                        </div>\n\n                        <div class=\"form-group col-6\">\n                            <label for=\"inputStatus\">Meal</label>\n                            <select id=\"inputStatus\" name=\"status\" class=\"form-control\" #inputMealId required\n                                    [(ngModel)]=\"selectedMealId\">\n                                <option [ngValue]=\"meal.id\"\n                                        *ngFor=\"let meal of userMeals\">{{meal.name}}</option>\n                            </select>\n                        </div>\n\n                    </div>\n\n                    <hr/>\n\n                    <h3 class=\"text-center font-weight-light\">Calories: {{mealFoodCaloriesPerServing}}</h3>\n                    <div class=\"chart-container row align-middle\">\n                        <ngx-charts-pie-chart\n                                [results]=\"macroNutrientsData\"\n                                [animations]=\"true\"\n                                [trimLabels]=\"false\"\n                                [doughnut]=\"true\"\n                        >\n\n                        </ngx-charts-pie-chart>\n\n                        <div class=\"macros text-center mx-auto\">\n                            <h5 class=\"font-weight-light \">\n                                Protein: {{mealFoodProteinPerServing}}g.</h5>\n                            <h5 class=\"font-weight-light \">\n                                Carbohydrates: {{mealFoodCarbohydratesPerServing}}g.</h5>\n                            <h5 class=\"font-weight-light \">Fats: {{mealFoodFatsPerServing}}\n                                g.</h5>\n                            <span class=\"display-5 opacity-5\"><i\n                                    class=\"fas fa-utensils fa-lg\"></i></span>\n                        </div>\n                    </div>\n                </ng-template>\n            </form>\n\n            <ng-template [ngIf]=\"userMeals && !userMeals.length\">\n                <h3 class=\"mb-3\">You don't have any created meals.</h3>\n                <button type=\"button\" class=\"btn btn-success mt-3 d-block mx-auto\" routerLink=\"/my-meals\"  (click)=\"modal.dismiss()\">Go to My Meals</button>\n            </ng-template>\n\n\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-dark\" [disabled]=\"addToMealForm.invalid || userMeals && !userMeals.length\"\n                    (click)=\"modal.close()\">Add to Meal\n            </button>\n        </div>\n    </ng-template>\n\n\n    <div class=\"jumbotron\">\n        <img src=\"assets/static/images/logo.png\" height=\"300px\" class=\"d-inline-block align-center\" alt=\"\">\n        <h1 class=\"display-4\">Food Details</h1>\n        <hr class=\"my-2\"/>\n        <div class=\"container pt-4\">\n            <div class=\"row\">\n                <div class=\"food-container col-lg-9 mx-auto\">\n                    <div class=\"food-intro mt-4\">\n                        <img src=\"{{selectedFood.pictureURL}}\" height=\"300px\"\n                             class=\"d-block mx-auto img-thumbnail\" alt=\"Exercise picture\">\n                        <h2 class=\"display-4 d-block mx-auto font-weight-bolder\">{{selectedFood.name}}</h2>\n                    </div>\n\n                    <hr class=\"my-4\"/>\n\n                    <div class=\"description col-12 my-3\">\n                        <h4 class=\"mb-4\">{{selectedFood.description}}</h4>\n                    </div>\n\n\n                    <hr/>\n\n                    <h3 class=\"text-center\">Nutrition per 100 g</h3>\n                    <h3 class=\"text-center font-weight-light\">Calories: {{selectedFood.caloriesPerHundred}}</h3>\n                    <div class=\"chart-container row align-middle\">\n                        <ngx-charts-pie-chart\n                                [results]=\"macroNutrientsData\"\n                                [animations]=\"true\"\n                                [trimLabels]=\"false\"\n                                [doughnut]=\"true\"\n                        >\n\n                        </ngx-charts-pie-chart>\n\n                        <div class=\"macros text-center mx-auto\">\n                            <h5 class=\"font-weight-light \">\n                                Protein: {{this.selectedFood.proteinPerHundred}}g.</h5>\n                            <h5 class=\"font-weight-light \">\n                                Carbohydrates: {{this.selectedFood.carbohydratesPerHundred}}g.</h5>\n                            <h5 class=\"font-weight-light \">Fats: {{this.selectedFood.fatsPerHundred}}\n                                g.</h5>\n                            <span class=\"display-5 opacity-5\"><i\n                                    class=\"fas fa-utensils fa-lg\"></i></span>\n                        </div>\n\n                    </div>\n\n                    <div class=\"buttons col-12 mx-auto p-3\">\n                        <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"open(createMealFoodModal)\">\n                            Add to meal\n                        </button>\n                    </div>\n\n\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/food/food.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/food/food.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>food works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/food/search-food/search-food.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/food/search-food/search-food.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n    <div *ngIf=\"loading\" class=\"loader-container\">\n        <img src=\"assets/static/images/global-loader.gif\" alt=\"Loader\">\n    </div>\n\n    <ng-template #foodNutritionDataModal let-modal>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Nutrition Info per 100 grams</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <form #createFoodForm=\"ngForm\">\n                <h1 class=\"text-center font-weight-light\">{{selectedFoodForModal.description}}</h1>\n\n\n                <h3 class=\"text-center font-weight-light\">Calories: {{selectedFoodForModal.caloriesPerHundred}}</h3>\n                <div class=\"chart-container row align-middle\">\n                    <ngx-charts-pie-chart\n                            [results]=\"macroNutrientsData\"\n                            [animations]=\"true\"\n                            [trimLabels]=\"false\"\n                            [doughnut]=\"true\"\n                    >\n\n                    </ngx-charts-pie-chart>\n\n                    <div class=\"macros text-center mx-auto\">\n                        <h5 class=\"font-weight-light \">\n                            Protein: {{selectedFoodForModal.proteinPerHundred}}g.</h5>\n                        <h5 class=\"font-weight-light \">\n                            Carbohydrates: {{selectedFoodForModal.carbohydratesPerHundred}}g.</h5>\n                        <h5 class=\"font-weight-light \">Fats: {{selectedFoodForModal.fatsPerHundred}}\n                            g.</h5>\n                        <span class=\"display-5 opacity-5\"><i\n                                class=\"fas fa-utensils fa-lg\"></i></span>\n                    </div>\n\n                </div>\n            </form>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.dismiss()\">Close</button>\n        </div>\n    </ng-template>\n\n    <ng-template #createFoodModal let-modal>\n\n        <div class=\"card card-signin create-food flex-row\" id=\"foodForm\">\n\n            <div class=\"card-img-left d-none d-md-flex\">\n            </div>\n            <div class=\"card-body\">\n                <button type=\"button\" class=\"close close-btn\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n                <h5 class=\"card-title text-center\">Food Form</h5>\n                <form class=\"form-signin\" #createFoodForm=\"ngForm\">\n\n\n                    <div class=\"form-label-group\">\n\n                        <div class=\"form-label-group\">\n                            <label for=\"inputFoodName\">Food name</label>\n                            <input type=\"text\" id=\"inputFoodName\" class=\"form-control\"\n                                   required\n                                   placeholder=\"Food name\" name=\"foodName\" #inputFoodName=\"ngModel\"\n                                   [ngClass]=\"{'is-valid': inputFoodName.valid && inputFoodName.touched,\n                         'is-invalid': inputFoodName.invalid && inputFoodName.touched}\"\n                                   [(ngModel)]=\"foodBindingModel.name\">\n                            <div class=\"valid-feedback\"></div>\n                            <div class=\"invalid-feedback\">\n                                Food name is required.\n                            </div>\n                        </div>\n\n                        <div class=\"form-label-group\">\n                            <label for=\"inputFoodName\">Food description</label>\n                            <textarea class=\"form-control\" id=\"textarea\" rows=\"4\" required wrap=\"hard\" #inputFoodDescription=\"ngModel\"\n                                      [value]=\"selectedFoodForModal.description\"\n                                      placeholder=\"Food description\"\n                                      [ngClass]=\"{'is-valid': inputFoodDescription.valid && inputFoodDescription.touched,\n                         'is-invalid': inputFoodDescription.invalid && inputFoodDescription.touched}\"\n                                      [(ngModel)]=\"foodBindingModel.description\"\n                                      name=\"foodDescription\"></textarea>\n                            <div class=\"valid-feedback\"></div>\n                            <div class=\"invalid-feedback\">\n                                Food description is required.\n                            </div>\n                        </div>\n\n\n                        <div class=\"form-label-group\">\n                            <label for=\"inputFoodPicture\" id=\"inputFoodPictureLabel\">Food picture</label>\n                            <div class=\"custom-file\" id=\"customFileContainer\">\n                                <input type=\"file\" class=\"custom-file-input form-control\"\n                                       #inputFoodPicture=\"ngModel\"\n                                       accept=\"image/*\"\n                                       [(ngModel)]=\"file\"\n                                       id=\"inputFoodPicture\" name=\"inputFoodPicture\"\n                                       [ngClass]=\"{'is-valid': file && inputFoodPicture.touched,\n                         'is-invalid': !file && inputFoodPicture.touched}\"\n                                       (change)=\"handleFileInput($event.target.files, chooseFileLabel)\">\n                                <label class=\"custom-file-label\" for=\"inputFoodPicture\"\n                                       id=\"çhooseFileLabel\" #chooseFileLabel>Choose\n                                    file</label>\n                                <div class=\"valid-feedback\"></div>\n                                <div class=\"invalid-feedback\">\n                                    Food picture file should be an image.\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n\n\n                    <div class=\"form-label-group\">\n                        <label class=\"d-block mb-2\">Macronutrients per 100 <span\n                                id=\"unit\">g</span></label>\n\n\n                        <div class=\"form-inline my-2 macro-container\">\n                            <label class=\"mr-2 ml-auto\" for=\"inputProtein\">Protein</label>\n                            <input type=\"number\" id=\"inputProtein\"\n                                   class=\"form-control mr-auto text-center\" value=\"0\" min=\"0\"\n                                   [value]=\"selectedFoodForModal.proteinPerHundred\"\n                                   [(ngModel)]=\"foodBindingModel.proteinPerHundred\"\n                                   name=\"protein\" required>\n                        </div>\n                        <div class=\"form-inline my-2 macro-container\">\n                            <label class=\"mr-2 ml-auto\"\n                                   for=\"inputCarbohydrates\">Carbohydrates</label>\n                            <input type=\"number\" id=\"inputCarbohydrates\"\n                                   class=\"form-control mr-auto text-center\" value=\"0\" min=\"0\"\n                                   [value]=\"selectedFoodForModal.carbohydratesPerHundred\"\n                                   [(ngModel)]=\"foodBindingModel.carbohydratesPerHundred\"\n                                   name=\"carbohydrates\" required>\n                        </div>\n                        <div class=\"form-inline my-2 macro-container\">\n                            <label class=\"mr-2 ml-auto\" for=\"inputFat\">Fat</label>\n\n                            <input type=\"number\" id=\"inputFat\"\n                                   class=\"form-control mr-auto text-center\" value=\"0\" min=\"0\"\n                                   [value]=\"selectedFoodForModal.fatsPerHundred\"\n                                   [(ngModel)]=\"foodBindingModel.fatsPerHundred\"\n                                   name=\"fat\" required>\n\n\n                        </div>\n                    </div>\n                    <hr>\n\n                    <button class=\"btn btn-lg btn-secondary btn-block text-uppercase\"\n                            type=\"submit\" [disabled]=\"createFoodForm.invalid\" (click)=\"onSubmit()\">Create Food\n                    </button>\n                </form>\n\n\n            </div>\n        </div>\n    </ng-template>\n\n    <div class=\"jumbotron\">\n        <div class=\"container\">\n\n            <img src=\"assets/static/images/logo.png\" height=\"300px\" class=\"align-center\" alt=\"\">\n            <h1 class=\"display-4\">Search Food in USDA FoodData Central</h1>\n        </div>\n\n        <hr/>\n\n        <div class=\"row justify-content-center\">\n            <div class=\"col-6\">\n                <form class=\"card card-sm\">\n                    <div class=\"card-body row no-gutters align-items-center\">\n                        <div class=\"col-lg-1\">\n                            <label for=\"searchInput\"><i class=\"fas fa-search fa-2x\"></i></label>\n\n                        </div>\n                        <div class=\"col-lg-9\">\n                            <form #searchForm=\"ngForm\">\n                                <input class=\"form-control form-control-lg form-control-borderless\" id=\"searchInput\"\n                                       type=\"search\"\n                                       placeholder=\"Enter food description. E.g. boiled egg.\"\n                                       #inputSearch=\"ngModel\"\n                                       name=\"name\"\n                                       required\n                                       [ngClass]=\"{'is-valid': inputSearch.valid && inputSearch.touched, 'is-invalid': inputSearch.invalid && inputSearch.touched}\"\n                                       [(ngModel)]=\"searchFoodName\">\n                            </form>\n                        </div>\n                        <div class=\"col-lg-2\">\n                            <button class=\"btn btn-lg btn-success\" [disabled]=\"!searchFoodName || searchFoodName === ''\" type=\"submit\"\n                                    (click)=\"onSearchHandler()\">Search\n                            </button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n\n        <hr class=\"my-4\">\n        <div class=\"container justify-content-center pb-0\">\n            <ng-template [ngIf]=\"foodSearchResults.length > 0\">\n\n\n                <div class=\"results-container col-10 mx-auto py-2\">\n                    <h2 class=\"font-weight-bold text-center py-4\">Search Food Results</h2>\n                    <table class=\"table table-striped table-hover mb-4\">\n                        <thead>\n                        <tr>\n                            <th scope=\"col\" style=\"width: 10%\">Order</th>\n                            <th scope=\"col\" style=\"width: 50%\">Description</th>\n                            <th scope=\"col\" style=\"width: 40%\">Actions</th>\n\n                        </tr>\n                        </thead>\n                        <tbody>\n\n                        <tr *ngFor=\"let food of foodSearchResults| slice: (page-1) * pageSize : (page-1) * pageSize + pageSize; let i = index\">\n                            <td class=\"align-middle\">{{i + 1 + (page - 1) * pageSize}}</td>\n                            <td class=\"align-middle\">{{food.description}}</td>\n                            <td>\n                                <button type=\"button\"\n                                        class=\"btn btn-secondary mr-2\" (click)=\"open(foodNutritionDataModal, food.id)\">\n                                    Nutrition Info\n                                </button>\n                                <button type=\"button\"\n                                        class=\"btn btn-primary mr-2\" (click)=\"open(createFoodModal, food.id)\">Create\n                                    Food\n                                </button>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <ngb-pagination class=\"d-inline-block mt-5\" [(page)]=\"page\"\n                                [pageSize]=\"pageSize\"\n                                [collectionSize]=\"foodSearchResults.length\"></ngb-pagination>\n            </ng-template>\n\n            <ng-template [ngIf]=\"foodSearchResults.length === 0 && searchOccurred\" #noSuchFoods>\n                <h5>There are no foods with given description.</h5>\n            </ng-template>\n\n        </div>\n\n\n    </div>\n\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/footer/footer.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/footer/footer.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<footer>\n\n  <div class=\"bg-light p-4\">\n    <div class=\"footer-info text-center\">© 2019 Copyright:<a href=\"/\"> FitBook</a></div>\n  </div>\n\n\n</footer>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/home/create-fitness-profile/create-fitness-profile.component.html": 
        /*!*************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/home/create-fitness-profile/create-fitness-profile.component.html ***!
          \*************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div *ngIf=\"loading\" class=\"loader-container\">\n    <img src=\"assets/static/images/global-loader.gif\" alt=\"Loader\">\n  </div>\n  <div class=\"jumbotron\">\n    <img src=\"assets/static/images/logo.png\" height=\"300px\" class=\"d-inline-block align-center\" alt=\"\">\n    <h1 class=\"display-4\">Welcome to FitBook, {{userFirstName}}!</h1>\n    <p class=\"lead\">You are almost ready to use our platform! The last step is to fill your Fitness Profile.\n    </p>\n    <div class=\"row\">\n      <div class=\"col-lg-5 col-xl-4 mx-auto\">\n        <div style=\"height: 17px\" class=\"progress rounded-pill\">\n          <div role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n               style=\"width: 80%\"\n               class=\"progress-bar progress-bar-striped progress-bar-animated rounded-pill bg-primary\"></div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-10 col-xl-9 mx-auto\">\n          <div class=\"card card-signin flex-row my-5\"\n               [ngClass]=\"{'female-fitness-profile': userGender === 'female', 'male-fitness-profile': userGender==='male'}\">\n            <div class=\"card-img-left d-none d-md-flex\">\n            </div>\n            <div class=\"card-body text-center\">\n              <h5 class=\"card-title text-center\">Fitness Profile</h5>\n              <form class=\"form-signin\" #fitnessProfileForm=\"ngForm\">\n\n                <div class=\"form-label-group\">\n                  <label for=\"inputWeight\">Weight in KG</label>\n                  <input type=\"number\" id=\"inputWeight\" name=\"inputWeight\" #inputWeight=\"ngModel\"\n                         class=\"form-control\" placeholder=\"Enter your weight in KG\"\n                         required\n                         pattern=\"^[1-9][0-9]*\"\n                         min=\"1\"\n                         [ngClass]=\"{'is-valid': inputWeight.valid && inputWeight.touched,\n                         'is-invalid': inputWeight.invalid && inputWeight.touched}\"\n                         [(ngModel)]=\"fitnessProfileBindingModel.weight\">\n                  <div class=\"valid-feedback\"></div>\n                  <div class=\"invalid-feedback\">\n                    Weight should be a positive number.\n                  </div>\n                </div>\n\n                <div class=\"form-label-group\">\n                  <label for=\"inputHeight\">Height in CM</label>\n                  <input type=\"number\" id=\"inputHeight\" name=\"inputHeight\" #inputHeight=\"ngModel\"\n                         class=\"form-control\" placeholder=\"Enter your height in CM\"\n                         min=\"1\"\n                         required\n                         pattern=\"^[1-9][0-9]*\"\n                         min=\"1\"\n                         [ngClass]=\"{'is-valid': inputHeight.valid && inputHeight.touched,\n                         'is-invalid': inputHeight.invalid && inputHeight.touched}\"\n                         [(ngModel)]=\"fitnessProfileBindingModel.height\">\n                  <div class=\"valid-feedback\"></div>\n                  <div class=\"invalid-feedback\">\n                    Height should be a positive number.\n                  </div>\n                </div>\n\n                <div class=\"form-label-group\">\n                  <label for=\"inputAge\">Age</label>\n                  <input type=\"number\" id=\"inputAge\" name=\"inputAge\" #inputAge=\"ngModel\"\n                         class=\"form-control\" placeholder=\"Enter your age\"\n                         min=\"1\"\n                         required\n                         pattern=\"^[1-9][0-9]*\"\n                         min=\"1\"\n                         [ngClass]=\"{'is-valid': inputAge.valid && inputAge.touched,\n                         'is-invalid': inputAge.invalid && inputAge.touched}\"\n                         [(ngModel)]=\"fitnessProfileBindingModel.age\">\n                  <div class=\"valid-feedback\"></div>\n                  <div class=\"invalid-feedback\">\n                    Age should be a positive number.\n                  </div>\n                </div>\n\n                <div class=\"form-label-group\">\n                  <label for=\"inputExperience\">Sports Experience</label>\n                  <select class=\"custom-select form-control\" id=\"inputExperience\" #inputExperience=\"ngModel\"\n                          name=\"inputExperience\" required\n                          [ngClass]=\"{'is-valid': inputExperience.valid && inputExperience.touched,\n                         'is-invalid': inputExperience.invalid && inputExperience.touched}\"\n                          [(ngModel)]=\"fitnessProfileBindingModel.sportsExperience\">\n                    <option selected value=\"\">Select your Sports Experience</option>\n                    <option value=\"beginner\">Beginner</option>\n                    <option value=\"intermediate\">Intermediate</option>\n                    <option value=\"advanced\">Advanced</option>\n                  </select>\n                  <div class=\"valid-feedback\"></div>\n                  <div class=\"invalid-feedback\">\n                    Sports Experience is required.\n                  </div>\n                </div>\n\n                <div class=\"form-label-group\">\n                  <label for=\"inputActivity\">Level of Daily Activity</label>\n                  <select class=\"custom-select form-control\" id=\"inputActivity\" #activityLevel=\"ngModel\"\n                          name=\"inputActivity\" required\n                          [ngClass]=\"{'is-valid': activityLevel.valid && activityLevel.touched,\n                         'is-invalid': activityLevel.invalid && activityLevel.touched}\"\n                          [(ngModel)]=\"fitnessProfileBindingModel.activityLevel\">\n                    <option selected value=\"\">Select your Level of Daily Activity</option>\n                    <option value=\"little\">Desk job, Little to no exercise</option>\n                    <option value=\"light\">Light exercise (1–3 days per week)</option>\n                    <option value=\"moderate\">Moderate exercise (3–5 days per week)</option>\n                    <option value=\"heavy\">Heavy exercise (6–7 days per week)</option>\n                    <option value=\"veryHeavy\">Very heavy exercise (physical job and heavy\n                      workouts)\n                    </option>\n                  </select>\n                  <div class=\"valid-feedback\"></div>\n                  <div class=\"invalid-feedback\">\n                    Level of Daily Activity is required.\n                  </div>\n                </div>\n\n                <div class=\"form-label-group\">\n                  <label for=\"inputWeightGoal\">Weight Goal</label>\n                  <select class=\"custom-select form-control\" id=\"inputWeightGoal\" #weightGoal=\"ngModel\"\n                          name=\"inputWeightGoal\" required\n                          [ngClass]=\"{'is-valid': weightGoal.valid && weightGoal.touched,\n                         'is-invalid': weightGoal.invalid && weightGoal.touched}\"\n                          [(ngModel)]=\"fitnessProfileBindingModel.weightGoal\"\n                          (change)=\"onWeightGoalChange($event.target)\">\n                    <option selected value=\"\">Select your Weight Goal</option>\n                    <option value=\"maintainWeight\">To maintain your weight</option>\n                    <option value=\"loseWeight\">To lose weight</option>\n                    <option value=\"gainWeight\">To gain weight</option>\n                  </select>\n                  <div class=\"valid-feedback\"></div>\n                  <div class=\"invalid-feedback\">\n                    Weight Goal is required.\n                  </div>\n                </div>\n\n                <div class=\"form-label-group\">\n                  <label for=\"inputLostGainedWeight\">Weight Change Rate</label>\n                  <select class=\"custom-select form-control\" id=\"inputLostGainedWeight\" #weightChangeRate=\"ngModel\"\n                          name=\"inputLostGainedWeight\"\n                          [required]=\"fitnessProfileBindingModel.weightGoal !=='maintainWeight'\"\n                          [disabled]=\"fitnessProfileBindingModel.weightGoal==='maintainWeight' || fitnessProfileBindingModel.weightGoal===''\"\n                          [ngClass]=\"{'is-valid': weightChangeRate.valid && weightChangeRate.touched,\n                         'is-invalid': weightChangeRate.invalid && weightChangeRate.touched}\"\n                          [(ngModel)]=\"fitnessProfileBindingModel.weightChangeRate\">\n                    <option selected value=\"\">Select your Weight Change Rate\n                    </option>\n                    <option value=\"slow\">Slow (0.250 KG per Week)</option>\n                    <option value=\"moderate\">Moderate (0.500 KG per Week)</option>\n                    <option value=\"rapid\">Rapid (1 KG per Week)</option>\n                  </select>\n                  <div class=\"valid-feedback\"></div>\n                  <div class=\"invalid-feedback\">\n                    Weight Change Rate is required.\n                  </div>\n                </div>\n\n\n                <hr>\n\n                <button class=\"btn btn-lg btn-secondary btn-block text-uppercase\"\n                        type=\"submit\" (click)=\"onSubmit()\" [disabled]=\"fitnessProfileForm.invalid && fitnessProfileForm.touched\">Submit\n                </button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/home/edit-fitness-profile/edit-fitness-profile.component.html": 
        /*!*********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/home/edit-fitness-profile/edit-fitness-profile.component.html ***!
          \*********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div *ngIf=\"loading\" class=\"loader-container\">\n    <img src=\"assets/static/images/global-loader.gif\" alt=\"Loader\">\n  </div>\n  <div class=\"jumbotron\">\n    <img src=\"assets/static/images/logo.png\" height=\"300px\" class=\"d-inline-block align-center\" alt=\"\">\n    <h1 class=\"display-4\">Edit Fitness Profile</h1>\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-10 col-xl-9 mx-auto\">\n          <div class=\"card card-signin flex-row my-5\"\n               [ngClass]=\"{'female-fitness-profile': userGender === 'female', 'male-fitness-profile': userGender==='male'}\">\n            <div class=\"card-img-left d-none d-md-flex\">\n            </div>\n            <div class=\"card-body text-center\">\n              <h5 class=\"card-title text-center\">Fitness Profile</h5>\n              <form class=\"form-signin\" (change)=\"onFormChange()\" #fitnessProfileForm=\"ngForm\">\n\n                <div class=\"form-label-group\">\n                  <label for=\"inputWeight\">Weight in KG</label>\n                  <input type=\"number\" id=\"inputWeight\" name=\"inputWeight\" #inputWeight=\"ngModel\"\n                         class=\"form-control\" placeholder=\"Enter your weight in KG\"\n                         required\n                         pattern=\"^[1-9][0-9]*\"\n                         min=\"1\"\n                         [ngClass]=\"{'is-valid': inputWeight.valid && inputWeight.touched,\n                         'is-invalid': inputWeight.invalid && inputWeight.touched}\"\n                         [(ngModel)]=\"fitnessProfileBindingModel.weight\">\n                  <div class=\"valid-feedback\"></div>\n                  <div class=\"invalid-feedback\">\n                    Weight should be a positive number.\n                  </div>\n                </div>\n\n                <div class=\"form-label-group\">\n                  <label for=\"inputHeight\">Height in CM</label>\n                  <input type=\"number\" id=\"inputHeight\" name=\"inputHeight\" #inputHeight=\"ngModel\"\n                         class=\"form-control\" placeholder=\"Enter your height in CM\"\n                         min=\"1\"\n                         required\n                         pattern=\"^[1-9][0-9]*\"\n                         min=\"1\"\n                         [ngClass]=\"{'is-valid': inputHeight.valid && inputHeight.touched,\n                         'is-invalid': inputHeight.invalid && inputHeight.touched}\"\n                         [(ngModel)]=\"fitnessProfileBindingModel.height\">\n                  <div class=\"valid-feedback\"></div>\n                  <div class=\"invalid-feedback\">\n                    Height should be a positive number.\n                  </div>\n                </div>\n\n                <div class=\"form-label-group\">\n                  <label for=\"inputAge\">Age</label>\n                  <input type=\"number\" id=\"inputAge\" name=\"inputAge\" #inputAge=\"ngModel\"\n                         class=\"form-control\" placeholder=\"Enter your age\"\n                         min=\"1\"\n                         required\n                         pattern=\"^[1-9][0-9]*\"\n                         min=\"1\"\n                         [ngClass]=\"{'is-valid': inputAge.valid && inputAge.touched,\n                         'is-invalid': inputAge.invalid && inputAge.touched}\"\n                         [(ngModel)]=\"fitnessProfileBindingModel.age\">\n                  <div class=\"valid-feedback\"></div>\n                  <div class=\"invalid-feedback\">\n                    Age should be a positive number.\n                  </div>\n                </div>\n\n                <div class=\"form-label-group\">\n                  <label for=\"inputExperience\">Sports Experience</label>\n                  <select class=\"custom-select form-control\" id=\"inputExperience\" #inputExperience=\"ngModel\"\n                          name=\"inputExperience\" required\n                          [ngClass]=\"{'is-valid': inputExperience.valid && inputExperience.touched,\n                         'is-invalid': inputExperience.invalid && inputExperience.touched}\"\n                          [(ngModel)]=\"fitnessProfileBindingModel.sportsExperience\">\n                    <option value=\"beginner\">Beginner</option>\n                    <option value=\"intermediate\">Intermediate</option>\n                    <option value=\"advanced\">Advanced</option>\n                  </select>\n                  <div class=\"valid-feedback\"></div>\n                  <div class=\"invalid-feedback\">\n                    Sports Experience is required.\n                  </div>\n                </div>\n\n                <div class=\"form-label-group\">\n                  <label for=\"inputActivity\">Level of Daily Activity</label>\n                  <select class=\"custom-select form-control\" id=\"inputActivity\" #activityLevel=\"ngModel\"\n                          name=\"inputActivity\" required\n                          [ngClass]=\"{'is-valid': activityLevel.valid && activityLevel.touched,\n                         'is-invalid': activityLevel.invalid && activityLevel.touched}\"\n                          [(ngModel)]=\"fitnessProfileBindingModel.activityLevel\">\n                    <option value=\"little\">Desk job, Little to no exercise</option>\n                    <option value=\"light\">Light exercise (1–3 days per week)</option>\n                    <option value=\"moderate\">Moderate exercise (3–5 days per week)</option>\n                    <option value=\"heavy\">Heavy exercise (6–7 days per week)</option>\n                    <option value=\"veryHeavy\">Very heavy exercise (physical job and heavy\n                      workouts)\n                    </option>\n                  </select>\n                  <div class=\"valid-feedback\"></div>\n                  <div class=\"invalid-feedback\">\n                    Level of Daily Activity is required.\n                  </div>\n                </div>\n\n                <div class=\"form-label-group\">\n                  <label for=\"inputWeightGoal\">Weight Goal</label>\n                  <select class=\"custom-select form-control\" id=\"inputWeightGoal\" #weightGoal=\"ngModel\"\n                          name=\"inputWeightGoal\" required\n                          [ngClass]=\"{'is-valid': weightGoal.valid && weightGoal.touched,\n                         'is-invalid': weightGoal.invalid && weightGoal.touched}\"\n                          [(ngModel)]=\"fitnessProfileBindingModel.weightGoal\"\n                          (change)=\"onWeightGoalChange($event.target)\">\n                    <option value=\"maintainWeight\">To maintain your weight</option>\n                    <option value=\"loseWeight\">To lose weight</option>\n                    <option value=\"gainWeight\">To gain weight</option>\n                  </select>\n                  <div class=\"valid-feedback\"></div>\n                  <div class=\"invalid-feedback\">\n                    Weight Goal is required.\n                  </div>\n                </div>\n\n                <div class=\"form-label-group\">\n                  <label for=\"inputLostGainedWeight\">Weight Change Rate</label>\n                  <select class=\"custom-select form-control\" id=\"inputLostGainedWeight\" #weightChangeRate=\"ngModel\"\n                          name=\"inputLostGainedWeight\"\n                          [required]=\"fitnessProfileBindingModel.weightGoal !=='maintainWeight'\"\n                          [disabled]=\"fitnessProfileBindingModel.weightGoal==='maintainWeight'\"\n                          [ngClass]=\"{'is-valid': weightChangeRate.valid && weightChangeRate.touched,\n                         'is-invalid': weightChangeRate.invalid && weightChangeRate.touched}\"\n                          [(ngModel)]=\"fitnessProfileBindingModel.weightChangeRate\">\n                    <option *ngIf=\"fitnessProfileBindingModel.weightGoal === 'maintainWeight' \" value=\"none\">None\n                    </option>\n                    <option value=\"slow\">Slow (0.250 KG per Week)</option>\n                    <option value=\"moderate\">Moderate (0.500 KG per Week)</option>\n                    <option value=\"rapid\">Rapid (1 KG per Week)</option>\n                  </select>\n                  <div class=\"valid-feedback\"></div>\n                  <div class=\"invalid-feedback\">\n                    Weight Change Rate is required.\n                  </div>\n                </div>\n\n\n                <hr>\n\n                <button class=\"btn btn-lg btn-secondary btn-block text-uppercase\"\n                        type=\"submit\" (click)=\"onSubmit()\" [disabled]=\"fitnessProfileForm.invalid\">Save\n                </button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/home/home.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/home/home.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loading\" class=\"loader-container\">\r\n    <img src=\"assets/static/images/global-loader.gif\" alt=\"Loader\">\r\n</div>\r\n\r\n<div *ngIf=\"loading\" class=\"jumbotron\" style=\"height: 100vh\"></div>\r\n\r\n<app-create-fitness-profile *ngIf=\"!hasFitnessProfile && !loading\"></app-create-fitness-profile>\r\n<app-my-profile *ngIf=\"hasFitnessProfile && !loading\"></app-my-profile>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/home/my-profile/my-profile.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/home/my-profile/my-profile.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div *ngIf=\"loading\" class=\"loader-container\">\n        <img src=\"assets/static/images/global-loader.gif\" alt=\"Loader\">\n    </div>\n    <div class=\"jumbotron\">\n        <img src=\"assets/static/images/logo.png\" height=\"300px\" class=\"d-inline-block align-center\" alt=\"\">\n        <h1 class=\"display-4\">Welcome to FitBook, {{loggedUserFirstName}}!</h1>\n        <h4 class=\"font-weight-light\">This is your Fitness Profile!</h4>\n        <h4 class=\"font-weight-light\">You can use it to build your workout plans and diet plans for your personal\n            needs.</h4>\n        <h4 class=\"font-weight-light\">Don't wait to get in the best shape of your life!</h4>\n\n\n        <div class=\"container mt-5\">\n\n            <div class=\"row fitness-profile-wrapper col-10 text-center mx-auto\">\n                <div class=\"info col-lg-5 justify-content-center mx-auto\">\n                    <div class=\"profile-photo col-12 my-3\">\n                        <img class=\"img-thumbnail\" src=\"{{loggedUser.profilePictureURL}}\" alt=\"Profile picture\">\n                    </div>\n                    <div class=\"col-12 mt-lg-5\">\n                        <h1 class=\"font-weight-light\">{{loggedUser.firstName}} {{loggedUser.lastName}}</h1>\n                        <h2 class=\"font-weight-light\">Age: {{loggedUser.fitnessProfile.age}}</h2>\n                    </div>\n                </div>\n\n                <div class=\"card calories d-block col-lg-5 mt-5 mt-lg-0 mx-auto\">\n\n\n                    <div class=\"card-body\">\n                        <h3 class=\"card-title text-white font-weight-light\">Daily Calories Goal</h3>\n                        <div class=\"d-block\">\n                            <h2 class=\"text-white font-weight-light\">{{loggedUserFitnessProfile.nutritionGoal.calories}}</h2>\n                        </div>\n                        <span class=\"display-5 opacity-5 text-white\"><i class=\"fas fa-fire-alt fa-lg\"></i></span>\n\n                    </div>\n                    <div class=\"chart-container row align-middle\">\n\n                        <ngx-charts-pie-chart\n                                [results]=\"macroNutrientsData\"\n                                [animations]=\"true\"\n                                [trimLabels]=\"false\"\n                                [doughnut]=\"true\"\n                        >\n\n                        </ngx-charts-pie-chart>\n\n                      <div class=\"macros text-center mx-auto\">\n                        <h5 class=\"font-weight-light text-white \">\n                          Protein: {{loggedUserFitnessProfile.nutritionGoal.gramsOfProtein}}g.</h5>\n                        <h5 class=\"font-weight-light text-white \">\n                          Carbohydrates: {{loggedUserFitnessProfile.nutritionGoal.gramsOfCarbohydrates}}g.</h5>\n                        <h5 class=\"font-weight-light text-white \">Fats: {{loggedUserFitnessProfile.nutritionGoal.gramsOfFats}}\n                          g.</h5>\n                        <span class=\"display-5 opacity-5 text-white\"><i\n                                class=\"fas fa-utensils fa-lg\"></i></span>\n                      </div>\n\n                    </div>\n                </div>\n\n\n                <div class=\"row justify-content-around fitness-profile-attributes mt-5\">\n\n\n                    <div class=\"card height col-lg-3 mt-3 mx-2 \">\n                        <div class=\"card-body\">\n                            <span class=\"display-5 opacity-5 text-white\"><i\n                                    class=\"fas fa-ruler-vertical fa-lg\"></i></span>\n                            <h3 class=\"card-title text-white font-weight-light\">Height</h3>\n                            <div class=\"d-block\">\n                                <h2\n                                        class=\"text-white font-weight-light\">{{loggedUserFitnessProfile.height}}cm.</h2>\n                            </div>\n\n                        </div>\n                    </div>\n\n                    <div class=\"card weight col-lg-3 mt-3 mx-2 \">\n                        <div class=\"card-body\">\n                            <span class=\"display-5 opacity-5 text-white\"><i class=\"fas fa-weight fa-lg\"></i></span>\n                            <h3 class=\"card-title text-white font-weight-light\">Weight</h3>\n                            <div class=\"d-block\">\n                                <h2\n                                        class=\"text-white font-weight-light\">{{loggedUserFitnessProfile.weight}}kg.</h2>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"card activity col-lg-3 mt-3 mx-2 \">\n                        <div class=\"card-body\">\n                            <span class=\"display-5 opacity-5 text-white\"><i class=\"fas fa-running fa-lg\"></i></span>\n                            <h3 class=\"card-title text-white font-weight-light\">Activity Level</h3>\n                            <div class=\"d-block\">\n                                <h2\n                                        class=\"text-white font-weight-light\">{{loggedUserFitnessProfile.activityLevel | getConstantViewName}}</h2>\n                            </div>\n\n                        </div>\n                    </div>\n\n                    <div class=\"card sports-experience col-lg-3 mt-3 mx-2 \">\n\n                        <div class=\"card-body\">\n                            <span class=\"display-5 opacity-5 text-white\"><i class=\"fas fa-dumbbell fa-lg\"></i></span>\n                            <h3 class=\"card-title text-white font-weight-light\">Sports Experience</h3>\n                            <div class=\"d-block\">\n                                <h2\n                                        class=\"text-white font-weight-light\">{{loggedUserFitnessProfile.sportsExperience | getConstantViewName}}</h2>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"card weight-goal col-lg-3 mt-3 mx-2  \">\n                        <div class=\"card-body\">\n                            <span class=\"display-5 opacity-5 text-white\"><i\n                                    class=\"fas fa-balance-scale-right fa-lg\"></i></span>\n                            <h3 class=\"card-title text-white font-weight-light\">Weight Goal</h3>\n                            <div class=\"d-block\">\n                                <h2\n                                        class=\"text-white font-weight-light\">{{loggedUserFitnessProfile.weightGoal | getConstantViewName}}</h2>\n                            </div>\n\n                        </div>\n                    </div>\n\n\n                    <div class=\"card weight-change-rate col-lg-3 mt-3 mx-2 \">\n                        <div class=\"card-body\">\n                            <span class=\"display-5 opacity-5 text-white\"><i\n                                    class=\"fas fa-tachometer-alt fa-lg\"></i></span>\n                            <h3 class=\"card-title text-white font-weight-light\">Weight Change Rate</h3>\n                            <div class=\"d-block\">\n                                <h2\n                                        class=\"text-white font-weight-light\">{{loggedUserFitnessProfile.weightChangeRate | getConstantViewName}}</h2>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <button type=\"button\" routerLink=\"/fitness-profile/edit\" class=\"btn btn-info btn-lg mt-5\">Edit Fitness Profile\n        </button>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/index/index.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/index/index.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"jumbotron\">\n    <img src=\"assets/static/images/logo.png\" height=\"300px\" class=\"align-center\" alt=\"\">\n    <h1 class=\"display-4\">Welcome to FitBook!</h1>\n    <p class=\"lead\">FitBook is a web-platform for creating and sharing fitness-related workout plans and\n      diet\n      plans. </p>\n    <hr class=\"my-4\">\n    <p>Create your plans and share them with your friends, receive feedback in form of likes and comments.\n    </p>\n    <p>Don't wait to get fit!</p>\n\n\n    <a class=\"btn btn-secondary btn-lg m-2\" routerLink=\"/signin\" role=\"button\">Sign in</a>\n    <a class=\"btn btn-secondary btn-lg m-2\" routerLink=\"/register\" role=\"button\">Register</a>\n  </div>\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/meal/all-meals/all-meals.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/meal/all-meals/all-meals.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n    <div *ngIf=\"loading\" class=\"loader-container\">\n        <img src=\"assets/static/images/global-loader.gif\" alt=\"Loader\">\n    </div>\n\n    <ng-template #copyMealModal let-modal>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Copy Meal To My Meals</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <form #createMealForm=\"ngForm\">\n                <h5 class=\"text-center\">{{selectedMealForModal.name}}</h5>\n                <table class=\"table table-striped table-hover text-center\">\n                    <thead>\n                    <tr *ngIf=\"selectedMealForModal.foods && !selectedMealForModal.foods.length\">\n                        <td colspan=\"5\" class=\"py-auto\"><h5>No added foods in this meal.</h5></td>\n                    </tr>\n                    <tr *ngIf=\"selectedMealForModal.foods && selectedMealForModal.foods.length\">\n                        <th scope=\"col\" style=\"width: 25%\">Food name</th>\n                        <th scope=\"col\" style=\"width: 15%\">Serving</th>\n                        <th scope=\"col\" style=\"width: 10%\">P</th>\n                        <th scope=\"col\" style=\"width: 10%\">C</th>\n                        <th scope=\"col\" style=\"width: 10%\">F</th>\n                        <th scope=\"col\" style=\"width: 10%\">Calories</th>\n\n                    </tr>\n                    </thead>\n                    <tbody *ngIf=\"selectedMealForModal.foods && selectedMealForModal.foods.length\">\n\n                    <tr *ngFor=\"let food of selectedMealForModal.foods\">\n                        <td class=\"align-middle\">{{food.food.name}}</td>\n                        <td class=\"align-middle\">{{food.serving}} g.</td>\n                        <td class=\"align-middle\">{{food.proteinPerServing}} g.</td>\n                        <td class=\"align-middle\">{{food.carbohydratesPerServing}} g.</td>\n                        <td class=\"align-middle\">{{food.fatsPerServing}} g.</td>\n                        <td class=\"align-middle\">{{food.caloriesPerServing}}</td>\n                    </tr>\n\n                    <tr>\n                        <td colspan=\"2\" class=\"align-middle text-right\">Total: </td>\n                        <td class=\"align-middle\">{{selectedMealForModal.totalProtein}} g.</td>\n                        <td class=\"align-middle\">{{selectedMealForModal.totalCarbohydrates}} g.</td>\n                        <td class=\"align-middle\">{{selectedMealForModal.totalFats}} g.</td>\n                        <td class=\"align-middle\">{{selectedMealForModal.totalCalories}}</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </form>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Copy to My Meals</button>\n        </div>\n    </ng-template>\n\n    <div class=\"jumbotron\">\n        <div class=\"container\">\n\n            <img src=\"assets/static/images/logo.png\" height=\"300px\" class=\"align-center\" alt=\"\">\n            <h1 class=\"display-4\">All Meals</h1>\n        </div>\n\n\n        <hr class=\"my-4\">\n        <div class=\"container justify-content-center pb-0\">\n            <ng-template [ngIf]=\"filteredMeals.length > 0\" [ngIfElse]=\"noSuchMeals\">\n                <div class=\"row\">\n                    <app-meal-card\n                            (modalOpen)=\"open(copyMealModal, $event)\"\n                            [meal]=\"meal\"\n                            class=\"col-lg-4 col-sm-12 my-3 d-flex mx-auto align-items-stretch\"\n                            *ngFor=\"let meal of filteredMeals | slice: (page-1) * pageSize : (page-1) * pageSize + pageSize\">\n                        >\n                    </app-meal-card>\n                </div>\n                <ngb-pagination class=\"d-inline-block mt-5\" [(page)]=\"page\"\n                                [pageSize]=\"pageSize\"\n                                [collectionSize]=\"filteredMeals.length\"></ngb-pagination>\n            </ng-template>\n\n            <ng-template #noSuchMeals>\n                <h5>There are no meals.</h5>\n            </ng-template>\n\n        </div>\n\n\n    </div>\n\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/meal/meal-card/meal-card.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/meal/meal-card/meal-card.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card d-inline-flex col-12\">\n    <div class=\"card-body\">\n        <h3 class=\"card-title\">{{meal.name}}</h3>\n        <hr/>\n        <h4 class=\"font-weight-light pb-2\">Creator: <a class=\"card-link\"\n                                                       routerLink=\"/profile/{{meal.creator.username}}\">{{meal.creator.username}}</a>\n        </h4>\n        <hr/>\n        <div class=\"row\">\n            <h4 class=\"col-7 font-weight-light my-auto p-1\">{{meal.likesCount}} Likes</h4>\n            <button class=\"button button-like my-auto\" (click)=\"onLikeHandler()\" [ngClass]=\"{'liked': meal.isLiked}\" type=\"button\">\n                <i class=\"fa fa-heart\"></i>\n                <span>Like</span>\n            </button>\n        </div>\n\n        <hr/>\n\n        <h3 class=\"text-center font-weight-bold\">Calories: {{meal.totalCalories}}</h3>\n        <div class=\"chart-container row align-middle\">\n            <ngx-charts-pie-chart\n                    [results]=\"macroNutrientsData\"\n                    [animations]=\"true\"\n                    [trimLabels]=\"false\"\n                    [doughnut]=\"true\"\n            >\n\n            </ngx-charts-pie-chart>\n\n            <div class=\"macros text-center mx-auto\">\n                <h5 class=\"font-weight-light \">\n                    Protein: {{meal.totalProtein}}g.</h5>\n                <h5 class=\"font-weight-light \">\n                    Carbohydrates: {{meal.totalCarbohydrates}}g.</h5>\n                <h5 class=\"font-weight-light \">Fats: {{meal.totalFats}}\n                    g.</h5>\n            </div>\n        </div>\n        <hr class=\"mb-5\"/>\n        <div class=\"buttons-wrapper left\">\n            <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"copyToMyMealsHandler(meal.id)\">Copy to\n                My Meals\n            </button>\n        </div>\n        <div class=\"buttons-wrapper right\">\n            <a routerLink=\"/meals/details/{{meal.id}}\" class=\"btn btn-sm btn-info\">Details</a>\n        </div>\n\n    </div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/meal/meal-details/meal-details.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/meal/meal-details/meal-details.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n    <ng-template #copyMealModal let-modal>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Copy Meal To My Meals</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <form #copyMealForm=\"ngForm\">\n                <h5 class=\"text-center\">{{meal.name}}</h5>\n                <table class=\"table table-striped table-hover text-center\">\n                    <thead>\n                    <tr *ngIf=\"meal.foods && !meal.foods.length\">\n                        <td colspan=\"5\" class=\"py-auto\"><h5>No added foods in this meal.</h5></td>\n                    </tr>\n                    <tr *ngIf=\"meal.foods && meal.foods.length\">\n                        <th scope=\"col\" style=\"width: 25%\">Food name</th>\n                        <th scope=\"col\" style=\"width: 15%\">Serving</th>\n                        <th scope=\"col\" style=\"width: 10%\">P</th>\n                        <th scope=\"col\" style=\"width: 10%\">C</th>\n                        <th scope=\"col\" style=\"width: 10%\">F</th>\n                        <th scope=\"col\" style=\"width: 10%\">Calories</th>\n\n                    </tr>\n                    </thead>\n                    <tbody *ngIf=\"meal.foods && meal.foods.length\">\n\n                    <tr *ngFor=\"let food of meal.foods\">\n                        <td class=\"align-middle\">{{food.food.name}}</td>\n                        <td class=\"align-middle\">{{food.serving}} g.</td>\n                        <td class=\"align-middle\">{{food.proteinPerServing}} g.</td>\n                        <td class=\"align-middle\">{{food.carbohydratesPerServing}} g.</td>\n                        <td class=\"align-middle\">{{food.fatsPerServing}} g.</td>\n                        <td class=\"align-middle\">{{food.caloriesPerServing}}</td>\n                    </tr>\n\n                    <tr>\n                        <td colspan=\"2\" class=\"align-middle text-right\">Total:</td>\n                        <td class=\"align-middle\">{{meal.totalProtein}} g.</td>\n                        <td class=\"align-middle\">{{meal.totalCarbohydrates}} g.</td>\n                        <td class=\"align-middle\">{{meal.totalFats}} g.</td>\n                        <td class=\"align-middle\">{{meal.totalCalories}}</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </form>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Copy to My Meals</button>\n        </div>\n    </ng-template>\n\n\n    <div class=\"jumbotron\">\n        <img src=\"assets/static/images/logo.png\" height=\"300px\" class=\"d-inline-block align-center\" alt=\"\">\n        <h1 class=\"display-4\">Meal Details</h1>\n        <hr class=\"my-2\"/>\n        <div class=\"container pt-4\">\n            <div class=\"row\">\n                <div class=\"meal-details col-lg-9 mx-auto\">\n                    <div class=\"exercise-intro mt-4\">\n                        <h2 class=\"display-4 d-block mx-auto font-weight-bolder\">{{meal.name}}</h2>\n                    </div>\n\n                    <hr class=\"my-4\"/>\n\n                    <h3 class=\"font-weight-light pb-3\">Creator: <a class=\"card-link\"\n                                                                   routerLink=\"/profile/{{meal.creator.username}}\">{{meal.creator.username}}</a>\n                    </h3>\n\n                    <hr/>\n                    <div class=\"row mb-3\">\n                        <h4 class=\"col-7 font-weight-light my-auto p-1\">{{meal.likesCount}} Likes</h4>\n                        <button class=\"button button-like my-auto\" (click)=\"onLikeHandler()\"\n                                [ngClass]=\"{'liked': meal.isLiked}\" type=\"button\">\n                            <i class=\"fa fa-heart\"></i>\n                            <span>Like</span>\n                        </button>\n                    </div>\n\n                    <div *ngIf=\"meal.foods && meal.foods.length\">\n                        <table class=\"table table-striped table-hover\">\n                            <thead>\n                            <tr *ngIf=\"meal.foods && !meal.foods.length\">\n                                <td colspan=\"5\" class=\"py-auto\"><h5>No added foods in this meal.</h5></td>\n                            </tr>\n                            <tr *ngIf=\"meal.foods && meal.foods.length\">\n                                <th scope=\"col\" style=\"width: 25%\">Food name</th>\n                                <th scope=\"col\" style=\"width: 15%\">Serving</th>\n                                <th scope=\"col\" style=\"width: 10%\">P</th>\n                                <th scope=\"col\" style=\"width: 10%\">C</th>\n                                <th scope=\"col\" style=\"width: 10%\">F</th>\n                                <th scope=\"col\" style=\"width: 10%\">Calories</th>\n                                <th scope=\"col\" style=\"width: 20%;\"></th>\n\n                            </tr>\n                            </thead>\n                            <tbody *ngIf=\"meal.foods && meal.foods.length\">\n\n                            <tr *ngFor=\"let food of meal.foods\">\n                                <td class=\"align-middle\">{{food.food.name}}</td>\n                                <td class=\"align-middle\">{{food.serving}} g.</td>\n                                <td class=\"align-middle\">{{food.proteinPerServing}} g.</td>\n                                <td class=\"align-middle\">{{food.carbohydratesPerServing}} g.</td>\n                                <td class=\"align-middle\">{{food.fatsPerServing}} g.</td>\n                                <td class=\"align-middle\">{{food.caloriesPerServing}}</td>\n                                <td>\n                                    <button type=\"button\" routerLink=\"/foods/details/{{food.food.id}}\"\n                                            class=\"btn btn-primary mr-2\"><i class=\"far fa-eye\"></i></button>\n                                </td>\n                            </tr>\n\n                            <tr>\n                                <td colspan=\"2\" class=\"align-middle text-center\">Total:</td>\n                                <td class=\"align-middle\">{{meal.totalProtein}} g.</td>\n                                <td class=\"align-middle\">{{meal.totalCarbohydrates}} g.</td>\n                                <td class=\"align-middle\">{{meal.totalFats}} g.</td>\n                                <td class=\"align-middle\">{{meal.totalCalories}}</td>\n                                <td class=\"align-middle\"></td>\n                            </tr>\n                            </tbody>\n                        </table>\n\n                        <hr class=\"my-2\"/>\n\n                        <h2 class=\"mx-auto font-weight-bold\">Meal Nutrition</h2>\n\n                        <h3 class=\"text-center font-weight-light\">Calories: {{meal.totalCalories}}</h3>\n                        <div class=\"macros text-center mx-auto\">\n                            <h3 class=\"font-weight-light \">\n                                Protein: {{this.meal.totalProtein}}g.</h3>\n                            <h3 class=\"font-weight-light \">\n                                Carbohydrates: {{this.meal.totalCarbohydrates}}g.</h3>\n                            <h3 class=\"font-weight-light \">Fats: {{this.meal.totalFats}}\n                                g.</h3>\n                            <span class=\"display-5 opacity-5\"><i\n                                    class=\"fas fa-utensils fa-lg\"></i></span>\n                        </div>\n                        <div class=\"chart-container row align-middle\">\n                            <ngx-charts-bar-horizontal-2d *ngIf=\"macroNutrientsData\"\n                                                          class=\"mx-auto\"\n                                                          [view]=\"[800, 600]\"\n                                                          [animations]=\"true\"\n                                                          [xAxis]=\"true\"\n                                                          [yAxis]=\"true\"\n                                                          [results]=\"macroNutrientsData\"\n                                                          [trimXAxisTicks]=\"false\"\n                                                          legendTitle=\"Nutrition\"\n                                                          [legend]=\"true\"\n                                                          [showXAxisLabel]=\"true\"\n                                                          [showDataLabel]=\"true\"\n                                                          [showGridLines]=\"true\"\n                                                          [showYAxisLabel]=\"true\"\n                                                          [gradient]=\"true\"\n                                                          [noBarWhenZero]=\"true\"\n                                                          [roundDomains]=\"true\"\n                                                          [tooltipDisabled]=\"false\"\n                                                          [trimYAxisTicks]=\"false\">\n\n                            </ngx-charts-bar-horizontal-2d>\n\n\n                        </div>\n\n                        <h3 *ngIf=\"meal.foods && !meal.foods.length\">No added foods to this meal.</h3>\n\n                        <div class=\"buttons col-12 mx-auto p-3\">\n                            <button type=\"button\" class=\"btn btn-success\" (click)=\"open(copyMealModal)\">\n                                Copy to My Meals\n                            </button>\n                        </div>\n\n\n                    </div>\n\n                </div>\n\n                <div class=\"meal-details col-lg-9 mx-auto row mt-5\">\n\n                    <h2 class=\"d-block py-5 mx-auto font-weight-bolder\">Comments Section</h2>\n\n                    <div class=\"col-12\">\n                        <div class=\"comment-wrapper\">\n                            <div class=\"panel panel-info\">\n                                <div class=\"panel-body\">\n                                    <form #postForm=\"ngForm\">\n                                        <textarea class=\"form-control\" placeholder=\"Write a comment...\"\n                                                  #comment=\"ngModel\"\n                                                  name=\"comment\"\n                                                  rows=\"3\" [(ngModel)]=\"commentBindingModel.comment\"\n                                                  required></textarea>\n                                    </form>\n                                    <br>\n                                    <button type=\"button\" class=\"btn btn-info\" [disabled]=\"comment.invalid\"\n                                            (click)=\"onPostHandler()\">Post\n                                    </button>\n                                    <div class=\"clearfix\"></div>\n                                    <hr>\n                                    <ul class=\"media-list\">\n                                        <li *ngIf=\"mealComments && !mealComments.length\">\n                                            <h4>\n                                                No comments.\n                                            </h4>\n                                        </li>\n                                        <li class=\"media\" *ngFor=\"let comment of mealComments\">\n                                            <div class=\"text-center row\">\n                                                <div class=\"col-12 text-center\">\n                                                    <a routerLink=\"/profile/{{comment.username}}\" class=\"d-block\">\n                                                        <img src=\"{{comment.profilePictureURL}}\"\n                                                             alt=\"Profile Picture\">\n                                                    </a>\n                                                    <a routerLink=\"/profile/{{comment.username}}\" class=\"d-block\">\n                                                        <strong class=\"d-block text-success\">@{{comment.username}}</strong>\n                                                    </a>\n\n                                                </div>\n\n                                            </div>\n\n                                            <div class=\"media-body\">\n                                <span class=\"text-muted float-right\">\n                                    <small class=\"text-muted\">{{comment.postedOn | commentDate}}</small>\n                                </span>\n\n                                                <button *ngIf=\"isLoggedInUserModerator || meal.creator.username === loggedInUserUsername || comment.username === loggedInUserUsername\"\n                                                        type=\"button\" (click)=\"onDeleteCommentHandler(comment.id)\"\n                                                        class=\"btn btn-danger delete-btn ml-3 comment-delete-btn\"><i\n                                                        class=\"far fa-trash-alt\"></i></button>\n                                                <h4 class=\"mt-3 comment mr-2 font font-weight-light\">\n                                                    {{comment.comment}}\n                                                </h4>\n                                            </div>\n                                            <div class=\"clearfix\"></div>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/meal/my-meals/my-meals.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/meal/my-meals/my-meals.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n    <ng-template #createMealModal let-modal>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Create Meal</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <form #createMealForm=\"ngForm\">\n                <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"inputMealName\">Meal Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"inputMealName\" name=\"name\" #inputMealName=\"ngModel\"\n                               required\n                               [ngClass]=\"{'is-valid': inputMealName.valid && inputMealName.touched,\n                               'is-invalid': inputMealName.invalid && inputMealName.touched}\"\n                               [(ngModel)]=\"mealBindingModel.name\">\n\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"inputStatus\">Status</label>\n                        <select id=\"inputStatus\" name=\"status\" class=\"form-control\" #inputMealStatus\n                                [(ngModel)]=\"mealBindingModel.isPublic\">\n                            <option [ngValue]=\"true\" selected>Public</option>\n                            <option [ngValue]=\"false\">Private</option>\n                        </select>\n                    </div>\n                </div>\n            </form>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" [disabled]=\"createMealForm.invalid\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Save</button>\n        </div>\n    </ng-template>\n\n    <div class=\"jumbotron\">\n        <img src=\"assets/static/images/logo.png\" height=\"300px\" class=\"d-inline-block align-center\" alt=\"\">\n        <h1 class=\"display-4\">My Meals</h1>\n        <div class=\"container pt-4\">\n            <div class=\"row\">\n                <div class=\"col-lg-4 mx-auto\">\n                    <h2>Meals</h2>\n                    <hr/>\n                    <div class=\"list-group\" *ngIf=\"meals && meals.length\">\n                        <button type=\"button\" class=\"list-group-item list-group-item-action\"\n                                [ngClass]=\"{'active': selectedMealId === meal.id}\"\n                                (click)=\"onMealButtonClick(meal.id)\"\n                                *ngFor=\"let meal of meals\">\n                            {{meal.name}}\n                        </button>\n                    </div>\n\n                    <h5 *ngIf=\"!meals || !meals.length\">You don't have any created meals.</h5>\n\n\n                    <button type=\"button\" class=\"btn btn-success mt-3\" (click)=\"open(createMealModal)\">Create Meal</button>\n                </div>\n                <div class=\"col-lg-8 mx-auto\">\n                    <h2>Selected Meal</h2>\n                    <hr/>\n                    <router-outlet (deactivate)=\"onRouterOutletDeactivate()\" (activate)=\"onRouterOutletActivate()\"></router-outlet>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/meal/my-meals/no-selected-meal/no-selected-meal.component.html": 
        /*!**********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/meal/my-meals/no-selected-meal/no-selected-meal.component.html ***!
          \**********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h4>No selected meal.</h4>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/meal/my-meals/selected-meal/selected-meal.component.html": 
        /*!****************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/meal/my-meals/selected-meal/selected-meal.component.html ***!
          \****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"selected-meal\">\n\n    <ng-template #mealNutritionInfoModal let-modal>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Meal Nutrition Info</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body row\">\n\n            <div class=\"col-lg-3 align-middle my-auto mx-auto pl-5\">\n                <h1 class=\"text-center font-weight-bold\">{{selectedMeal.name}}</h1>\n\n\n                <h3 class=\"text-center font-weight-light\">Calories: {{selectedMeal.totalCalories}}</h3>\n                <div class=\"macros text-center mx-auto\">\n                    <h3 class=\"font-weight-light \">\n                        Protein: {{this.selectedMeal.totalProtein}}g.</h3>\n                    <h3 class=\"font-weight-light \">\n                        Carbohydrates: {{this.selectedMeal.totalCarbohydrates}}g.</h3>\n                    <h3 class=\"font-weight-light \">Fats: {{this.selectedMeal.totalFats}}\n                        g.</h3>\n                    <span class=\"display-5 opacity-5\"><i\n                            class=\"fas fa-utensils fa-lg\"></i></span>\n                </div>\n            </div>\n            <div class=\"chart-container row align-middle col-lg-9\">\n\n                <ngx-charts-bar-horizontal-2d *ngIf=\"macroNutrientsData\"\n                                              class=\"mx-auto\"\n                                              [view]=\"[600, 400]\"\n                                              [animations]=\"true\"\n                                              [xAxis]=\"true\"\n                                              [yAxis]=\"true\"\n                                              [results]=\"macroNutrientsData\"\n                                              [trimXAxisTicks]=\"false\"\n                                              legendTitle=\"Nutrition\"\n                                              [legend]=\"true\"\n                                              [showXAxisLabel]=\"true\"\n                                              [showGridLines]=\"true\"\n                                              [showYAxisLabel]=\"true\"\n                                              [gradient]=\"true\"\n                                              [noBarWhenZero]=\"true\"\n                                              [roundDomains]=\"true\"\n                                              [tooltipDisabled]=\"false\"\n                                              [trimYAxisTicks]=\"false\"\n                                              [showDataLabel]=\"true\">\n\n                </ngx-charts-bar-horizontal-2d>\n\n\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.dismiss()\">Close</button>\n        </div>\n    </ng-template>\n\n\n    <h2 class=\"pt-3 font-weight-light\" *ngIf=\"!editMode\">{{selectedMeal.name}}</h2>\n    <form #editForm=\"ngForm\">\n    <div class=\"py-3 mx-auto col-5\" *ngIf=\"editMode\"><input type=\"text\" value=\"{{editMealBindingModel.name}}\"\n                                                            class=\"form-control form-control-lg text-center\"\n                                                            id=\"inputName\"\n                                                            name=\"inputName\" #inputName=\"ngModel\"\n                                                            required\n                                                            [ngClass]=\"{'is-valid': inputName.valid && inputName.touched,\n                         'is-invalid': inputName.invalid && inputName.touched}\" [(ngModel)]=\"editMealBindingModel.name\">\n    </div>\n    <h4 class=\"pb-3 font-weight-light\" *ngIf=\"!editMode && !selectedMeal.isCopied\">\n        ({{selectedMeal.isPublic ? 'Public' : 'Private'}})</h4>\n    <h4 class=\"pb-3 font-weight-light\" *ngIf=\"selectedMeal.isCopied\">(Copy)</h4>\n    <div *ngIf=\"editMode && !selectedMeal.isCopied\" class=\"pb-3 col-3 mx-auto\">\n        <select id=\"inputStatus\" name=\"status\" class=\"form-control\" #inputWorkoutStatus\n                [(ngModel)]=\"editMealBindingModel.isPublic\">\n            <option [ngValue]=\"true\">Public</option>\n            <option [ngValue]=\"false\">Private</option>\n        </select>\n    </div>\n    <button *ngIf=\"!editMode\" type=\"button\" routerLink=\"/meals/details/{{mealId}}\"\n            class=\"btn btn-dark mb-2\"><i class=\"fas fa-share-alt\"></i></button>\n\n\n        <table class=\"table table-striped table-hover\">\n            <thead>\n            <tr *ngIf=\"selectedMeal.foods && !selectedMeal.foods.length\">\n                <td colspan=\"5\" class=\"py-auto\"><h5>No added foods in this meal.</h5></td>\n            </tr>\n            <tr *ngIf=\"selectedMeal.foods && selectedMeal.foods.length\">\n                <th scope=\"col\" style=\"width: 25%\">Food name</th>\n                <th scope=\"col\" style=\"width: 15%\">Serving</th>\n                <th scope=\"col\" style=\"width: 10%\">P</th>\n                <th scope=\"col\" style=\"width: 10%\">C</th>\n                <th scope=\"col\" style=\"width: 10%\">F</th>\n                <th scope=\"col\" style=\"width: 10%\">Calories</th>\n                <th scope=\"col\" style=\"width: 20%;\"></th>\n\n            </tr>\n            </thead>\n            <tbody *ngIf=\"!editMode && selectedMeal.foods && selectedMeal.foods.length\">\n\n            <tr *ngFor=\"let food of selectedMeal.foods\">\n                <td class=\"align-middle\">{{food.food.name}}</td>\n                <td class=\"align-middle\">{{food.serving}} g.</td>\n                <td class=\"align-middle\">{{food.proteinPerServing}} g.</td>\n                <td class=\"align-middle\">{{food.carbohydratesPerServing}} g.</td>\n                <td class=\"align-middle\">{{food.fatsPerServing}} g.</td>\n                <td class=\"align-middle\">{{food.caloriesPerServing}}</td>\n                <td>\n                    <button type=\"button\" routerLink=\"/foods/details/{{food.food.id}}\"\n                            class=\"btn btn-primary mr-2\"><i class=\"far fa-eye\"></i></button>\n                </td>\n            </tr>\n\n            <tr>\n                <td colspan=\"2\" class=\"align-middle text-center\">Total:</td>\n                <td class=\"align-middle\">{{selectedMeal.totalProtein}} g.</td>\n                <td class=\"align-middle\">{{selectedMeal.totalCarbohydrates}} g.</td>\n                <td class=\"align-middle\">{{selectedMeal.totalFats}} g.</td>\n                <td class=\"align-middle\">{{selectedMeal.totalCalories}}</td>\n                <td class=\"align-middle\"></td>\n            </tr>\n            </tbody>\n            <tbody *ngIf=\"editMode\">\n\n            <tr *ngFor=\"let food of editMealBindingModel.foods\" [id]=\"food.id\">\n                <td class=\"align-middle\">{{food.food.name}}</td>\n                <td class=\"align-middle\">\n                    <input type=\"number\" value=\"{{food.serving}}\" class=\"form-control\" id=\"inputServing\"\n                           name=\"inputServing-{{food.id}}\"\n                           #inputServing=\"ngModel\" [(ngModel)]=\"food.serving\"\n                           required\n                           pattern=\"^[1-9][0-9]*\"\n                           min=\"1\"\n                           (change)=\"onEditMealFoodHandler(food)\"\n                           [ngClass]=\"{'is-invalid': inputServing.invalid && inputServing.touched}\"></td>\n\n                <td class=\"align-middle\">{{food.proteinPerServing}} g.</td>\n                <td class=\"align-middle\">{{food.carbohydratesPerServing}} g.</td>\n                <td class=\"align-middle\">{{food.fatsPerServing}} g.</td>\n                <td class=\"align-middle\">{{food.caloriesPerServing}}</td>\n                <td>\n                    <button type=\"button\" routerLink=\"/foods/details/{{food.food.id}}\"\n                            class=\"btn btn-primary mr-2\"><i class=\"far fa-eye\"></i></button>\n                    <button type=\"button\" (click)=\"onMealFoodDeleteHandler(selectedMeal.id, food.id)\"\n                            class=\"btn btn-danger\"><i class=\"far fa-trash-alt\"></i></button>\n                </td>\n\n            </tr>\n\n            <tr>\n                <td colspan=\"2\" class=\"align-middle text-center\">Total:</td>\n                <td class=\"align-middle\">{{editMealBindingModel.totalProtein}} g.</td>\n                <td class=\"align-middle\">{{editMealBindingModel.totalCarbohydrates}} g.</td>\n                <td class=\"align-middle\">{{editMealBindingModel.totalFats}} g.</td>\n                <td class=\"align-middle\">{{editMealBindingModel.totalCalories}}</td>\n                <td class=\"align-middle\"></td>\n            </tr>\n            </tbody>\n        </table>\n    </form>\n\n    <div class=\"workout-actions\" *ngIf=\"!editMode\">\n\n        <button *ngIf=\"selectedMeal.foods && selectedMeal.foods.length\" type=\"button\"\n                class=\"btn btn-secondary my-3 mx-2\" (click)=\"open(mealNutritionInfoModal)\">Show Nutrition Info\n        </button>\n\n        <button type=\"link\" class=\"btn btn-primary my-3 mx-2\" routerLink=\"/foods/all\">Add Food</button>\n\n        <button type=\"button\"\n                class=\"btn btn-success my-3 mx-2\" routerLink=\"./\" [queryParams]=\"{'edit': 1}\">Edit\n        </button>\n\n        <button type=\"button\" (click)=\"onMealDeleteHandler(selectedMeal.id)\" class=\"btn btn-danger my-3 mx-2\">\n            Delete\n        </button>\n    </div>\n\n\n    <div class=\"workout-actions-edit\" *ngIf=\"editMode\">\n        <button type=\"link\" [disabled]=\"editForm.invalid\" class=\"btn btn-success my-3 mx-2\" (click)=\"onSaveHandler()\">\n            Save\n        </button>\n        <button type=\"link\" class=\"btn btn-danger my-3 mx-2\" routerLink=\"./\">Cancel</button>\n    </div>\n\n\n</div>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/navbar/guest-navbar/guest-navbar.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/navbar/guest-navbar/guest-navbar.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\">\n  <a class=\"navbar-brand\" routerLink=\"/\">\n    <img src=\"assets/static/images/logo_icon.png\" height=\"50\" class=\"d-inline-block align-center\" alt=\"\">\n    FitBook\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\"\n          aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/signin\" >Sign in</a>\n      </li>\n\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/register\">Register</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/navbar/logged-navbar/logged-navbar.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/navbar/logged-navbar/logged-navbar.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\">\n  <a class=\"navbar-brand\" routerLink=\"/home\">\n    <img src=\"assets/static/images/logo_icon.png\" height=\"50\" class=\"d-inline-block align-center\" alt=\"\">\n    FitBook\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\"\n          aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item dropdown\" [ngClass]=\"{'active': isInDiets}\">\n        <a class=\"nav-link dropdown-toggle\" id=\"dietsDropdown\" data-toggle=\"dropdown\">\n          Diets\n        </a>\n        <div class=\"dropdown-menu\">\n          <a class=\"dropdown-item\" routerLink=\"/my-meals\" routerLinkActive=\"active\">My meals</a>\n          <a class=\"dropdown-item\" routerLink=\"/my-diet-plans\" routerLinkActive=\"active\">My diet plans</a>\n        </div>\n      </li>\n      <li class=\"nav-item dropdown\"  [ngClass]=\"{'active': isInWorkouts}\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"workoutDropdown\" data-toggle=\"dropdown\">\n          Workouts\n        </a>\n        <div class=\"dropdown-menu\">\n          <a class=\"dropdown-item\" routerLink=\"/my-workouts\" routerLinkActive=\"active\">My workouts</a>\n          <a class=\"dropdown-item\" routerLink=\"/my-workout-plans\" routerLinkActive=\"active\">My workout plans</a>\n        </div>\n      </li>\n\n      <li class=\"nav-item dropdown\"  [ngClass]=\"{'active': isExploring}\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"exploreDropdown\" data-toggle=\"dropdown\">\n          Explore\n        </a>\n        <div class=\"dropdown-menu\">\n          <h6 class=\"dropdown-header\">Diet related</h6>\n          <a class=\"dropdown-item\" routerLink=\"/foods/all\" routerLinkActive=\"active\">Foods</a>\n          <a class=\"dropdown-item\" routerLink=\"/meals/all\" routerLinkActive=\"active\">Meals</a>\n          <a class=\"dropdown-item\" routerLink=\"/diet-plans/all\" routerLinkActive=\"active\">Diet Plans</a>\n          <h6 class=\"dropdown-header\">Workout related</h6>\n          <a class=\"dropdown-item\" routerLink=\"/exercises/all\" routerLinkActive=\"active\"\n             [routerLinkActiveOptions]=\"{exact: true}\">Exercises</a>\n          <a class=\"dropdown-item\" routerLink=\"/workouts/all\" routerLinkActive=\"active\">Workouts</a>\n          <a class=\"dropdown-item\" routerLink=\"/workout-plans/all\" routerLinkActive=\"active\">Workout Plans</a>\n        </div>\n      </li>\n\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/foods/create\">Create Food</a>\n      </li>\n      <li class=\"nav-item d-lg-none\">\n        <a class=\"nav-link\" routerLink=\"/fitness-profile/edit\">Edit Fitness Profile</a>\n      </li>\n      <li class=\"nav-item d-lg-none\">\n        <a class=\"nav-link\" style=\"cursor: pointer\" (click)=\"onLogout()\">Log Out</a>\n      </li>\n    </ul>\n\n    <div class=\"collapse navbar-collapse \" id=\"navbar-list-4\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"userRole !== 'ROLE_USER'\">\n          <a class=\"nav-link\" routerLink=\"/exercises/create\">Create Exercise</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"userRole === 'ROLE_ADMIN' || userRole === 'ROLE_ROOT_ADMIN'\">\n          <a class=\"nav-link\" routerLink=\"/admin-panel\">Admin Panel</a>\n        </li>\n        <li class=\"nav-item dropdown dropleft\" dropdown>\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" role=\"button\"\n             data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <img\n              src=\"{{profilePictureUrl}}\"\n              width=\"60\" height=\"60\" class=\"rounded-circle\">\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" routerLink=\"/fitness-profile/edit\">Edit Fitness Profile</a>\n            <a class=\"dropdown-item\" (click)=\"onLogout()\">Log Out</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/navbar/navbar.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/navbar/navbar.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-logged-navbar *ngIf=\"isUserLoggedIn\"></app-logged-navbar>\n<app-guest-navbar *ngIf=\"!isUserLoggedIn\"></app-guest-navbar>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/not-found/not-found.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/not-found/not-found.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"jumbotron\">\n        <img src=\"assets/static/images/404.png\" class=\"d-inline-block align-center\" alt=\"\">\n\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/user/register/register.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/user/register/register.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n  <div *ngIf=\"loading\" class=\"loader-container\">\n    <img src=\"assets/static/images/global-loader.gif\" alt=\"Loader\">\n  </div>\n\n  <div class=\"jumbotron\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-10 col-xl-9 mx-auto\">\n          <div class=\"card card-signin flex-row my-5\">\n            <div class=\"card-img-left d-none d-md-flex\">\n            </div>\n            <div class=\"card-body\">\n              <h5 class=\"card-title text-center\">Register</h5>\n              <form class=\"form-signin\" #resisterForm=\"ngForm\">\n\n                <div class=\"form-label-group\">\n                  <label for=\"inputFirstName\">First name</label>\n                  <input type=\"text\" id=\"inputFirstName\" class=\"form-control\"\n                         placeholder=\"First name\" name=\"firstName\" #inputFirstName=\"ngModel\" required autofocus\n                         pattern=\"([A-Z][A-Za-z. -]+)\"\n                         [ngClass]=\"{'is-valid': inputFirstName.valid && inputFirstName.touched,\n                         'is-invalid': inputFirstName.invalid && inputFirstName.touched}\"\n                         [(ngModel)]=\"registerBindingModel.firstName\">\n                  <div class=\"valid-feedback\"></div>\n                  <div class=\"invalid-feedback\">\n                    First name is required and should start with capital letter.\n                  </div>\n                </div>\n\n                <div class=\"form-label-group\">\n                  <label for=\"inputLastName\">Last name</label>\n                  <input type=\"text\" id=\"inputLastName\" class=\"form-control\"\n                         placeholder=\"Last name\" name=\"lastName\" #inputLastName=\"ngModel\"\n                         required\n                         pattern=\"([A-Z][A-Za-z. -]+)\"\n                         [ngClass]=\"{'is-valid': inputLastName.valid && inputLastName.touched,\n                         'is-invalid': inputLastName.invalid && inputLastName.touched}\"\n                         [(ngModel)]=\"registerBindingModel.lastName\">\n                  <div class=\"valid-feedback\"></div>\n                  <div class=\"invalid-feedback\">\n                    Last name is required and should start with capital letter.\n                  </div>\n                </div>\n\n\n                <div class=\"form-label-group\">\n                  <label for=\"genderInput\">Gender</label>\n                  <select class=\"custom-select form-control\" id=\"genderInput\" name=\"gender\" #inputGender=\"ngModel\" required\n                          [ngClass]=\"{'is-valid': inputGender.valid && inputGender.touched,\n                         'is-invalid': inputGender.invalid && inputGender.touched}\"\n                          [(ngModel)]=\"registerBindingModel.gender\">\n                    <option selected value=\"\">Select gender</option>\n                    <option value=\"male\">Male</option>\n                    <option value=\"female\">Female</option>\n                  </select>\n                  <div class=\"valid-feedback\"></div>\n                  <div class=\"invalid-feedback\">\n                    Gender is required.\n                  </div>\n                </div>\n\n\n                <div class=\"form-label-group\">\n                  <label for=\"inputEmail\">Username</label>\n                  <input type=\"text\" id=\"inputUserame\" class=\"form-control\"\n                         placeholder=\"Username\" name=\"username\" #inputUsername=\"ngModel\" required\n                         [ngClass]=\"{'is-valid': inputUsername.valid && inputUsername.touched && !usernameTaken,\n                         'is-invalid': inputUsername.invalid && inputUsername.touched || usernameTaken}\"\n                         (focusout)=\"onUsernameFocusOut($event.target)\"\n                         [(ngModel)]=\"registerBindingModel.username\">\n                  <div class=\"valid-feedback\"></div>\n                  <div class=\"invalid-feedback\" *ngIf=\"usernameTaken\">\n                    Username is already taken.\n                  </div>\n                  <div class=\"invalid-feedback\" *ngIf=\"!usernameTaken\">\n                    Username is required.\n                  </div>\n                </div>\n\n                <div class=\"form-label-group\">\n                  <label for=\"inputEmail\">Email address</label>\n                  <input type=\"email\" id=\"inputEmail\" class=\"form-control\"\n                         placeholder=\"Email address\" name=\"email\" #inputEmail=\"ngModel\"\n                         required\n                         pattern=\"{{regexPattern}}\"\n                         [ngClass]=\"{'is-valid': inputEmail.valid && inputEmail.touched,\n                         'is-invalid': inputEmail.invalid && inputEmail.touched}\"\n                         [(ngModel)]=\"registerBindingModel.email\">\n                  <div class=\"valid-feedback\"></div>\n                  <div class=\"invalid-feedback\">\n                    Enter a valid email address.\n                  </div>\n                </div>\n\n                <div class=\"form-label-group\">\n                  <label for=\"customFile\" id=\"exercisePictureLabel\">Profile picture</label>\n                  <div class=\"custom-file\" id=\"customFileContainer\">\n                    <input type=\"file\" class=\"custom-file-input form-control\"\n                           id=\"customFile\" name=\"exercisePictureFile\"\n                           #inputProfilePicture=\"ngModel\"\n                           accept=\"image/*\"\n                           [(ngModel)]=\"file\"\n                           [ngClass]=\"{'is-valid': file && inputProfilePicture.touched,\n                         'is-invalid': !file && inputProfilePicture.touched}\"\n                           (change)=\"handleFileInput($event.target.files, chooseFileLabel)\">\n                    <label class=\"custom-file-label\" for=\"customFile\"\n                           id=\"çhooseFileLabel\" #chooseFileLabel>Choose\n                      file</label>\n                    <div class=\"valid-feedback\"></div>\n                    <div class=\"invalid-feedback\">\n                      Profile picture file should be an image.\n                    </div>\n                  </div>\n                </div>\n\n                <hr>\n\n                <div class=\"form-label-group\">\n                  <label for=\"inputPassword\">Password</label>\n                  <input type=\"password\" id=\"inputPassword\" class=\"form-control\"\n                         name=\"password\" placeholder=\"Password\" #inputPassword=\"ngModel\"\n                         pattern=\".{6,}\"\n                         required\n                         [ngClass]=\"{'is-valid': inputPassword.valid && inputPassword.touched,\n                         'is-invalid': inputPassword.invalid && inputPassword.touched}\"\n                         [(ngModel)]=\"registerBindingModel.password\"\n                  (change)=\"onPasswordChange()\">\n                  <div class=\"valid-feedback\"></div>\n                  <div class=\"invalid-feedback\">\n                    Please enter a password with at least 6 symbols.\n                  </div>\n                </div>\n\n                <div class=\"form-label-group\">\n                  <label for=\"inputConfirmPassword\">Confirm password</label>\n                  <input type=\"password\" id=\"inputConfirmPassword\" class=\"form-control\"\n                         name=\"confirmPassword\" placeholder=\"Confirm password\" #inputConfirmPassword=\"ngModel\"\n                         required\n                         [ngClass]=\"{'is-valid': inputConfirmPassword.valid && inputPassword.valid &&\n                         inputConfirmPassword.touched && passwordsMatch,\n                         'is-invalid': (inputConfirmPassword.invalid || !passwordsMatch || inputPassword.invalid) && inputConfirmPassword.touched}\"\n                         [(ngModel)]=\"registerBindingModel.confirmPassword\"\n                  (change)=\"onPasswordChange()\">\n                  <div class=\"valid-feedback\"></div>\n                  <div class=\"invalid-feedback\">\n                    Passwords must match.\n                  </div>\n                </div>\n\n                <button class=\"btn btn-lg btn-secondary btn-block text-uppercase\"\n                        type=\"submit\" [disabled]=\"resisterForm.invalid\" (click)=\"onSubmit()\">Register\n                </button>\n\n                <p>You already have a registration? Don't wait to get fit!</p>\n\n                <a routerLink=\"/signin\" role=\"button\">\n                  <button\n                    class=\"btn btn-lg btn-primary btn-block text-uppercase\"\n                    type=\"button\">Sign\n                    in\n                  </button>\n                </a>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/user/signin/signin.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/user/signin/signin.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div *ngIf=\"loading\" class=\"loader-container\">\n    <img src=\"assets/static/images/global-loader.gif\" alt=\"Loader\">\n  </div>\n  <div class=\"jumbotron\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n          <div class=\"card card-signin my-5\">\n            <div class=\"card-body\">\n              <ngb-alert *ngIf=\"errorOccurred\" (close)=\"errorOccurred = false\" type=\"danger\">Wrong username or password!</ngb-alert>\n              <h5 class=\"card-title text-center\">Sign In</h5>\n              <form class=\"form-signin\" #signinForm=\"ngForm\">\n                <div class=\"form-label-group\">\n                  <label for=\"username\">Username</label>\n                  <input type=\"text\" id=\"username\" class=\"form-control\"\n                         placeholder=\"Username\" required autofocus name=\"username\" [(ngModel)]=\"signInBindingModel.username\">\n                </div>\n\n                <div class=\"form-label-group\">\n                  <label for=\"inputPassword\">Password</label>\n                  <input type=\"password\" id=\"inputPassword\" class=\"form-control\"\n                         placeholder=\"Password\" required name=\"password\" [(ngModel)]=\"signInBindingModel.password\">\n                </div>\n\n                <div class=\"custom-control custom-checkbox mb-3\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"rememberMe\" name=\"rememberMe\" [(ngModel)]=\"rememberMe\">\n                  <label class=\"custom-control-label\" for=\"rememberMe\">Remember\n                    me</label>\n                </div>\n                <button class=\"btn btn-lg btn-secondary btn-block text-uppercase\"\n                        type=\"submit\" (click)=\"onSubmit()\">Sign\n                  in</button>\n\n                <p>You don't have a registration? Don't wait to get fit!</p>\n                <a routerLink=\"/register\" role=\"button\"><button\n                  class=\"btn btn-lg btn-primary btn-block text-uppercase\"\n                  type=\"button\">Register</button></a>\n<!--                <hr class=\"my-4\">-->\n<!--                <button class=\"btn btn-lg btn-facebook btn-block text-uppercase\"-->\n<!--                        type=\"submit\"><i class=\"fab fa-facebook-f mr-2\"></i> Sign in with-->\n<!--                  Facebook</button>-->\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/user/user-profile/user-profile.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/user/user-profile/user-profile.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron\">\n    <div class=\"container\">\n\n        <img src=\"assets/static/images/logo.png\" height=\"300px\" class=\"align-center\" alt=\"\">\n        <h1 class=\"display-4\">User Profile - {{user.username}}</h1>\n    </div>\n\n    <hr/>\n    <div class=\"container mt-5\">\n        <div class=\"row fitness-profile-wrapper col-10 text-center mx-auto\">\n            <div class=\"info col-lg-5 justify-content-center mx-auto\">\n                <div class=\"profile-photo col-12 my-3\">\n                    <img class=\"img-thumbnail\" src=\"{{user.profilePictureURL}}\" alt=\"Profile picture\">\n                </div>\n                <div class=\"col-12 mt-lg-5\">\n                    <h1 class=\"font-weight-light\">{{user.firstName}} {{user.lastName}}</h1>\n                    <h2 class=\"font-weight-light\">Age: {{user.fitnessProfile.age}}</h2>\n                </div>\n            </div>\n            <div class=\"card calories d-block col-lg-5 mt-5 mt-lg-0 mx-auto\">\n\n\n                <div class=\"card-body\">\n                    <h3 class=\"card-title text-white font-weight-light\">Daily Calories Goal</h3>\n                    <div class=\"d-block\">\n                        <h2 class=\"text-white font-weight-light\">{{userFitnessProfile.nutritionGoal.calories}}</h2>\n                    </div>\n                    <span class=\"display-5 opacity-5 text-white\"><i class=\"fas fa-fire-alt fa-lg\"></i></span>\n\n                </div>\n                <div class=\"chart-container row align-middle\">\n\n                    <ngx-charts-pie-chart\n                            [results]=\"macroNutrientsData\"\n                            [animations]=\"true\"\n                            [trimLabels]=\"false\"\n                            [doughnut]=\"true\"\n                    >\n\n                    </ngx-charts-pie-chart>\n\n                    <div class=\"macros text-center mx-auto\">\n                        <h5 class=\"font-weight-light text-white \">\n                            Protein: {{userFitnessProfile.nutritionGoal.gramsOfProtein}}g.</h5>\n                        <h5 class=\"font-weight-light text-white \">\n                            Carbohydrates: {{userFitnessProfile.nutritionGoal.gramsOfCarbohydrates}}g.</h5>\n                        <h5 class=\"font-weight-light text-white \">Fats: {{userFitnessProfile.nutritionGoal.gramsOfFats}}\n                            g.</h5>\n                        <span class=\"display-5 opacity-5 text-white\"><i\n                                class=\"fas fa-utensils fa-lg\"></i></span>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"row justify-content-around fitness-profile-attributes mt-5\">\n\n\n                <div class=\"card height col-lg-3 mt-3 mx-2 \">\n                    <div class=\"card-body\">\n                        <span class=\"display-5 opacity-5 text-white\"><i class=\"fas fa-ruler-vertical fa-lg\"></i></span>\n                        <h3 class=\"card-title text-white font-weight-light\">Height</h3>\n                        <div class=\"d-block\">\n                            <h2\n                                    class=\"text-white font-weight-light\">{{userFitnessProfile.height}} cm.</h2>\n                        </div>\n\n                    </div>\n                </div>\n\n                <div class=\"card weight col-lg-3 mt-3 mx-2 \">\n                    <div class=\"card-body\">\n                        <span class=\"display-5 opacity-5 text-white\"><i class=\"fas fa-weight fa-lg\"></i></span>\n                        <h3 class=\"card-title text-white font-weight-light\">Weight</h3>\n                        <div class=\"d-block\">\n                            <h2\n                                    class=\"text-white font-weight-light\">{{userFitnessProfile.weight}} kg.</h2>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"card activity col-lg-3 mt-3 mx-2 \">\n                    <div class=\"card-body\">\n                        <span class=\"display-5 opacity-5 text-white\"><i class=\"fas fa-running fa-lg\"></i></span>\n                        <h3 class=\"card-title text-white font-weight-light\">Activity Level</h3>\n                        <div class=\"d-block\">\n                            <h2\n                                    class=\"text-white font-weight-light\">{{userFitnessProfile.activityLevel | getConstantViewName}}</h2>\n                        </div>\n\n                    </div>\n                </div>\n\n                <div class=\"card sports-experience col-lg-3 mt-3 mx-2 \">\n\n                    <div class=\"card-body\">\n                        <span class=\"display-5 opacity-5 text-white\"><i class=\"fas fa-dumbbell fa-lg\"></i></span>\n                        <h3 class=\"card-title text-white font-weight-light\">Sports Experience</h3>\n                        <div class=\"d-block\">\n                            <h2\n                                    class=\"text-white font-weight-light\">{{userFitnessProfile.sportsExperience | getConstantViewName}}</h2>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"card weight-goal col-lg-3 mt-3 mx-2  \">\n                    <div class=\"card-body\">\n                        <span class=\"display-5 opacity-5 text-white\"><i\n                                class=\"fas fa-balance-scale-right fa-lg\"></i></span>\n                        <h3 class=\"card-title text-white font-weight-light\">Weight Goal</h3>\n                        <div class=\"d-block\">\n                            <h2\n                                    class=\"text-white font-weight-light\">{{userFitnessProfile.weightGoal | getConstantViewName}}</h2>\n                        </div>\n\n                    </div>\n                </div>\n\n\n                <div class=\"card weight-change-rate col-lg-3 mt-3 mx-2 \">\n                    <div class=\"card-body\">\n                        <span class=\"display-5 opacity-5 text-white\"><i class=\"fas fa-tachometer-alt fa-lg\"></i></span>\n                        <h3 class=\"card-title text-white font-weight-light\">Weight Change Rate</h3>\n                        <div class=\"d-block\">\n                            <h2\n                                    class=\"text-white font-weight-light\">{{userFitnessProfile.weightChangeRate | getConstantViewName}}</h2>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout-plan/all-workout-plans/all-workout-plans.component.html": 
        /*!***********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout-plan/all-workout-plans/all-workout-plans.component.html ***!
          \***********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n    <div *ngIf=\"loading\" class=\"loader-container\">\n        <img src=\"assets/static/images/global-loader.gif\" alt=\"Loader\">\n    </div>\n\n    <ng-template #copyWorkoutPlanToMyWorkoutPlansModal let-modal>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Copy Workout Plan To My Workout Plans</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <form #createWorkoutForm=\"ngForm\">\n                <h5 class=\"text-center\">{{selectedWorkoutPlanForModal.name}}</h5>\n                <table class=\"table table-striped table-hover mb-4 mx-auto\" *ngFor=\"let workout of selectedWorkoutPlanForModal.workouts\">\n                    <thead>\n                    <tr>\n                        <th colspan=\"5\" class=\"py-auto\"><h5>{{workout.orderIndex}}. {{workout.workout.name}}</h5></th>\n                    </tr>\n                    <tr *ngIf=\"workout.workout.exercises && !workout.workout.exercises.length\">\n                        <td colspan=\"5\" class=\"py-auto\"><h5>No added exercises in this workout.</h5></td>\n                    </tr>\n                    <tr *ngIf=\"workout.workout.exercises && workout.workout.exercises.length\">\n                        <th scope=\"col\" style=\"width: 10%\">Order</th>\n                        <th scope=\"col\" style=\"width: 30%\">Exercise name</th>\n                        <th scope=\"col\" style=\"width: 20%\">Reps</th>\n                        <th scope=\"col\" style=\"width: 20%\">Sets</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n\n                    <tr *ngFor=\"let exercise of workout.workout.exercises\">\n                        <td class=\"align-middle\">{{exercise.orderIndex}}</td>\n                        <td class=\"align-middle\">{{exercise.exercise.name}}</td>\n                        <td class=\"align-middle\">{{exercise.reps}}</td>\n                        <td class=\"align-middle\">{{exercise.sets}}</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </form>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Copy to My Workout Plans</button>\n        </div>\n    </ng-template>\n\n    <div class=\"jumbotron\">\n        <div class=\"container\">\n\n            <img src=\"assets/static/images/logo.png\" height=\"300px\" class=\"align-center\" alt=\"\">\n            <h1 class=\"display-4\">All Workout Plans</h1>\n        </div>\n\n\n        <hr class=\"my-4\">\n        <div class=\"container justify-content-center pb-0\">\n            <ng-template [ngIf]=\"filteredWorkoutPlans.length > 0\" [ngIfElse]=\"noSuchWorkoutPlans\">\n                <div class=\"row\">\n                    <app-workout-plan-card\n                            (modalOpen)=\"open(copyWorkoutPlanToMyWorkoutPlansModal, $event)\"\n                            [workoutPlan]=\"workoutPlan\"\n                            class=\"col-lg-4 col-sm-12 my-3 d-flex mx-auto align-items-stretch\"\n                            *ngFor=\"let workoutPlan of filteredWorkoutPlans | slice: (page-1) * pageSize : (page-1) * pageSize + pageSize\">\n                        >\n                    </app-workout-plan-card>\n                </div>\n                <ngb-pagination class=\"d-inline-block mt-5\" [(page)]=\"page\"\n                                [pageSize]=\"pageSize\"\n                                [collectionSize]=\"filteredWorkoutPlans.length\"></ngb-pagination>\n            </ng-template>\n\n            <ng-template #noSuchWorkoutPlans>\n                <h5>There are no workout plans.</h5>\n            </ng-template>\n\n        </div>\n\n\n    </div>\n\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout-plan/my-workout-plans/my-workout-plans.component.html": 
        /*!*********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout-plan/my-workout-plans/my-workout-plans.component.html ***!
          \*********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n    <ng-template #createWorkoutPlanModal let-modal>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Create Workout Plan</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <form #createWorkoutPlanForm=\"ngForm\">\n                <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"inputWorkoutName\">Workout Plan Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"inputWorkoutName\" name=\"name\" #inputWorkoutPlanName=\"ngModel\"\n                               required\n                               [ngClass]=\"{'is-valid': inputWorkoutPlanName.valid && inputWorkoutPlanName.touched,\n                               'is-invalid': inputWorkoutPlanName.invalid && inputWorkoutPlanName.touched}\"\n                               [(ngModel)]=\"workoutPlanBindingModel.name\">\n                        <div class=\"valid-feedback\"></div>\n                        <div class=\"invalid-feedback\">\n                            Workout Plan Name is required.\n                        </div>\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"inputStatus\">Status</label>\n                        <select id=\"inputStatus\" name=\"status\" class=\"form-control\" #inputWorkoutStatus\n                                [(ngModel)]=\"workoutPlanBindingModel.isPublic\">\n                            <option [ngValue]=\"true\" selected>Public</option>\n                            <option [ngValue]=\"false\">Private</option>\n                        </select>\n                    </div>\n                </div>\n            </form>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" [disabled]=\"createWorkoutPlanForm.invalid\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Save</button>\n        </div>\n    </ng-template>\n\n    <div class=\"jumbotron\">\n        <img src=\"assets/static/images/logo.png\" height=\"300px\" class=\"d-inline-block align-center\" alt=\"\">\n        <h1 class=\"display-4\">My Workout Plans</h1>\n        <div class=\"container pt-4\">\n            <div class=\"row\">\n                <div class=\"col-lg-4 mx-auto\">\n                    <h2>Workout Plans</h2>\n                    <hr/>\n                    <div class=\"list-group\" *ngIf=\"workoutPlans && workoutPlans.length\">\n                        <button type=\"button\" class=\"list-group-item list-group-item-action\"\n                                [ngClass]=\"{'active': selectedWorkoutPlanId === workoutPlan.id}\"\n                                (click)=\"onWorkoutPlanButtonClick(workoutPlan.id)\"\n                                *ngFor=\"let workoutPlan of workoutPlans\">\n                            {{workoutPlan.name}}\n                        </button>\n                    </div>\n\n                    <h5 *ngIf=\"!workoutPlans || !workoutPlans.length\">You don't have any created workout plans.</h5>\n\n\n                    <button type=\"button\" class=\"btn btn-success mt-3\" (click)=\"open(createWorkoutPlanModal)\">Create Workout Plan</button>\n                </div>\n                <div class=\"col-lg-8 mx-auto\">\n                    <h2>Selected Workout Plan</h2>\n                    <hr/>\n                    <router-outlet (deactivate)=\"onRouterOutletDeactivate()\" (activate)=\"onRouterOutletActivate()\"></router-outlet>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout-plan/my-workout-plans/no-selected-workout-plan/no-selected-workout-plan.component.html": 
        /*!******************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout-plan/my-workout-plans/no-selected-workout-plan/no-selected-workout-plan.component.html ***!
          \******************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h4>No selected workout plan.</h4>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout-plan/my-workout-plans/selected-workout-plan/selected-workout-plan.component.html": 
        /*!************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout-plan/my-workout-plans/selected-workout-plan/selected-workout-plan.component.html ***!
          \************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"selected-workout-plan\">\n\n    <ng-template #addWorkoutToWorkoutPlanModal let-modal>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title2\">Add Workout To Workout Plan</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <form *ngIf=\"selectedWorkoutForModal\" #addWorkoutToWorkoutPlanForm=\"ngForm\">\n\n                <div class=\"form-group col-6\">\n                    <label for=\"inputStatus\">Workout</label>\n                    <select id=\"inputWorkoutId\" name=\"workoutId\" class=\"form-control\" #inputWorkoutId\n                            (change)=\"setSelectedWorkoutForModal()\"\n                            [(ngModel)]=\"selectedWorkoutIdForModal\">\n                        <option [ngValue]=\"workout.id\"\n                                *ngFor=\"let workout of loggedUserWorkouts\">{{workout.name}}</option>\n                    </select>\n                </div>\n\n                <hr/>\n\n                <h5 class=\"text-center\">{{selectedWorkoutForModal.name}}</h5>\n\n                <table class=\"table table-striped table-hover\">\n                    <thead>\n                    <tr *ngIf=\"selectedWorkoutForModal.exercises && !selectedWorkoutForModal.exercises.length\">\n                        <td colspan=\"5\" class=\"py-auto text-center\"><h5>No added exercises in this workout.</h5></td>\n                    </tr>\n                    <tr *ngIf=\"selectedWorkoutForModal.exercises && selectedWorkoutForModal.exercises.length\">\n                        <th scope=\"col\" style=\"width: 10%\">Order</th>\n                        <th scope=\"col\" style=\"width: 30%\">Exercise</th>\n                        <th scope=\"col\" style=\"width: 20%\">Reps</th>\n                        <th scope=\"col\" style=\"width: 20%\">Sets</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n\n                    <tr *ngFor=\"let exercise of selectedWorkoutForModal.exercises\">\n                        <td class=\"align-middle\">{{exercise.orderIndex}}</td>\n                        <td class=\"align-middle\">{{exercise.exercise.name}}</td>\n                        <td class=\"align-middle\">{{exercise.reps}}</td>\n                        <td class=\"align-middle\">{{exercise.sets}}</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </form>\n\n            <div *ngIf=\"!selectedWorkoutForModal\"><h5 class=\"text-center\">You don't have any\n                workouts.</h5>\n                <button type=\"button\" class=\"btn btn-success d-block mt-3 mx-auto\"\n                        routerLink=\"/my-workouts\" (click)=\"modal.dismiss()\">Go to My Workouts\n                </button>\n            </div>\n\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" [disabled]=\"!selectedWorkoutForModal\" class=\"btn btn-outline-dark\"\n                    (click)=\"modal.close()\">Add to Workout Plan\n            </button>\n        </div>\n    </ng-template>\n\n    <ng-template #showWorkoutsSetsModal let-modal>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Sets per Muscle Group</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n\n        <div class=\"modal-body\">\n            <div class=\"row align-middle\">\n                <ngx-charts-bar-horizontal\n                        [view]=\"[800, muscleGroupSets.length < 8 ? 200 : 400]\"\n                        [animations]=\"true\"\n                        [xAxis]=\"true\"\n                        [yAxis]=\"true\"\n                        [results]=\"muscleGroupSets\"\n                        legendTitle=\"Muscle Groups\"\n                        [legend]=\"true\"\n                        [showDataLabel]=\"false\"\n                        [showXAxisLabel]=\"false\"\n                        [showGridLines]=\"true\"\n                        [showYAxisLabel]=\"false\"\n                        [gradient]=\"true\"\n                        [noBarWhenZero]=\"true\"\n                        [roundDomains]=\"true\"\n                        [roundEdges]=\"true\"\n                        [tooltipDisabled]=\"false\"\n                        [trimYAxisTicks]=\"false\"\n                        [customColors]=\"customColors\"\n                >\n\n                </ngx-charts-bar-horizontal>\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Close</button>\n        </div>\n    </ng-template>\n\n    <form #editForm=\"ngForm\">\n    <h2 *ngIf=\"!editMode\" class=\"pt-3 font-weight-light\">{{selectedWorkoutPlan.name}}</h2>\n    <div class=\"py-3 mx-auto col-5\" *ngIf=\"editMode\"><input type=\"text\" value=\"{{editWorkoutPlanBindingModel.name}}\"\n                                                            class=\"form-control form-control-lg text-center\"\n                                                            id=\"inputName\"\n                                                            name=\"inputName\" #inputName=\"ngModel\"\n                                                            required\n                                                            [ngClass]=\"{'is-valid': inputName.valid && inputName.touched,\n                         'is-invalid': inputName.invalid && inputName.touched}\"\n                                                            [(ngModel)]=\"editWorkoutPlanBindingModel.name\"></div></form>\n    <h4 class=\"pb-3 font-weight-light\" *ngIf=\"!editMode && !selectedWorkoutPlan.isCopied\">\n        ({{selectedWorkoutPlan.isPublic ? 'Public' : 'Private'}})</h4>\n    <h4 class=\"pb-3 font-weight-light\" *ngIf=\"selectedWorkoutPlan.isCopied\">(Copy)</h4>\n    <div *ngIf=\"editMode && !selectedWorkoutPlan.isCopied\" class=\"pb-3 col-3 mx-auto\">\n        <select id=\"inputStatus\" name=\"status\" class=\"form-control\" #inputWorkoutStatus\n                [(ngModel)]=\"editWorkoutPlanBindingModel.isPublic\">\n            <option [ngValue]=\"true\">Public</option>\n            <option [ngValue]=\"false\">Private</option>\n        </select>\n    </div>\n    <button *ngIf=\"!editMode\" type=\"button\" routerLink=\"/workout-plans/details/{{workoutPlanId}}\"\n            class=\"btn btn-dark mb-2\"><i class=\"fas fa-share-alt\"></i></button>\n\n\n    <h5 *ngIf=\"!selectedWorkoutPlan.workouts || !selectedWorkoutPlan.workouts.length\">No added workouts in this workout\n        plan.</h5>\n\n\n    <div class=\"workouts-container col-10 mx-auto\" *ngIf=\"!editMode\">\n        <table class=\"table table-striped table-hover mb-4\" *ngFor=\"let workout of selectedWorkoutPlan.workouts\">\n            <h4 class=\"order-index-workout font-weight-bold font-italic\">{{workout.orderIndex}}</h4>\n            <thead>\n            <tr>\n                <th colspan=\"5\" class=\"py-auto\"><h5><a\n                        routerLink=\"/my-workouts/{{workout.workout.id}}\">{{workout.workout.name}}</a></h5></th>\n            </tr>\n            <tr *ngIf=\"workout.workout.exercises && !workout.workout.exercises.length\">\n                <td colspan=\"5\" class=\"py-auto\"><h5>No added exercises in this workout.</h5></td>\n            </tr>\n            <tr *ngIf=\"workout.workout.exercises && workout.workout.exercises.length\">\n                <th scope=\"col\" style=\"width: 10%\">Order</th>\n                <th scope=\"col\" style=\"width: 30%\">Exercise name</th>\n                <th scope=\"col\" style=\"width: 20%\">Reps</th>\n                <th scope=\"col\" style=\"width: 20%\">Sets</th>\n                <th scope=\"col\" style=\"width: 20%;\"></th>\n\n            </tr>\n            </thead>\n            <tbody *ngIf=\"!editMode && workout.workout.exercises && workout.workout.exercises.length\">\n\n            <tr *ngFor=\"let exercise of workout.workout.exercises\">\n                <td class=\"align-middle\">{{exercise.orderIndex}}</td>\n                <td class=\"align-middle\">{{exercise.exercise.name}}</td>\n                <td class=\"align-middle\">{{exercise.reps}}</td>\n                <td class=\"align-middle\">{{exercise.sets}}</td>\n                <td>\n                    <button type=\"button\" routerLink=\"/exercises/details/{{exercise.exercise.id}}\"\n                            class=\"btn btn-primary mr-2\"><i class=\"far fa-eye\"></i></button>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class=\"workouts-container col-10 mx-auto\" cdkDropList (cdkDropListDropped)=\"onDrop($event)\" *ngIf=\"editMode\">\n        <table cdkDrag class=\"table table-striped table-hover mb-4\"\n               *ngFor=\"let workout of editWorkoutPlanBindingModel.workouts\">\n            <h4 class=\"order-index-workout font-weight-bold font-italic\">{{workout.orderIndex}}</h4>\n            <thead>\n            <tr>\n                <th colspan=\"5\" class=\"py-auto\"><h5 class=\"d-inline-block\">{{workout.workout.name}}</h5>\n                    <button type=\"button\" (click)=\"onWorkoutDeleteHandler(workout.id, workout.orderIndex)\"\n                            class=\"btn btn-danger delete-btn ml-3\"><i class=\"far fa-trash-alt\"></i></button>\n                </th>\n\n            </tr>\n            <tr *ngIf=\"workout.workout.exercises && !workout.workout.exercises.length\">\n                <td colspan=\"5\" class=\"py-auto\"><h5>No added exercises in this workout.</h5></td>\n            </tr>\n            <tr *ngIf=\"workout.workout.exercises && workout.workout.exercises.length\">\n                <th scope=\"col\" style=\"width: 10%\">Order</th>\n                <th scope=\"col\" style=\"width: 30%\">Exercise name</th>\n                <th scope=\"col\" style=\"width: 20%\">Reps</th>\n                <th scope=\"col\" style=\"width: 20%\">Sets</th>\n                <th scope=\"col\" style=\"width: 20%;\"></th>\n\n            </tr>\n            </thead>\n            <tbody *ngIf=\"workout.workout.exercises && workout.workout.exercises.length\">\n\n            <tr *ngFor=\"let exercise of workout.workout.exercises\">\n                <td class=\"align-middle\">{{exercise.orderIndex}}</td>\n                <td class=\"align-middle\">{{exercise.exercise.name}}</td>\n                <td class=\"align-middle\">{{exercise.reps}}</td>\n                <td class=\"align-middle\">{{exercise.sets}}</td>\n                <td>\n                    <button type=\"button\" routerLink=\"/exercises/details/{{exercise.exercise.id}}\"\n                            class=\"btn btn-primary mr-2\"><i class=\"far fa-eye\"></i></button>\n                </td>\n            </tr>\n            </tbody>\n            <tr *cdkDragPreview class=\"text-center\">\n            </tr>\n        </table>\n\n    </div>\n\n\n    <div class=\"workout-actions\" *ngIf=\"!editMode\">\n\n        <button *ngIf=\"selectedWorkoutPlan.workouts && selectedWorkoutPlan.workouts.length\" type=\"button\"\n                class=\"btn btn-info my-3 mx-2\" (click)=\"exportToExcelHandler()\">Export to Excel\n        </button>\n\n        <button *ngIf=\"selectedWorkoutPlan.workouts && selectedWorkoutPlan.workouts.length\" type=\"button\"\n                class=\"btn btn-secondary my-3 mx-2\" (click)=\"open(showWorkoutsSetsModal)\">Sets per Muscle Group\n        </button>\n\n\n        <button type=\"link\" class=\"btn btn-primary my-3 mx-2\"\n                (click)=\"openAddWorkoutModal(addWorkoutToWorkoutPlanModal)\">Add Workout\n        </button>\n\n        <button type=\"button\"\n                class=\"btn btn-success my-3 mx-2\" routerLink=\"./\" [queryParams]=\"{'edit': 1}\">Edit\n        </button>\n\n        <button type=\"button\" (click)=\"onWorkoutPlanDeleteHandler()\" class=\"btn btn-danger my-3 mx-2\">\n            Delete\n        </button>\n    </div>\n\n\n    <div class=\"workout-actions-edit\" *ngIf=\"editMode\">\n        <button type=\"link\" [disabled]=\"editForm.invalid\" class=\"btn btn-success my-3 mx-2\" (click)=\"onSaveHandler()\">\n            Save\n        </button>\n        <button type=\"link\" class=\"btn btn-danger my-3 mx-2\" routerLink=\"./\">Cancel</button>\n    </div>\n\n\n</div>\n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout-plan/workout-plan-card/workout-plan-card.component.html": 
        /*!***********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout-plan/workout-plan-card/workout-plan-card.component.html ***!
          \***********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card d-inline-flex col-12\">\n    <div class=\"card-body\">\n        <h3 class=\"card-title\">{{workoutPlan.name}}</h3>\n        <hr/>\n        <h4 class=\"font-weight-light pb-2\">Creator: <a class=\"card-link\"\n                                                       routerLink=\"/profile/{{workoutPlan.creator.username}}\">{{workoutPlan.creator.username}}</a>\n        </h4>\n        <hr/>\n        <div class=\"row\">\n            <h4 class=\"col-7 font-weight-light my-auto p-1\">{{workoutPlan.likesCount}} Likes</h4>\n            <button class=\"button button-like my-auto\" (click)=\"onLikeHandler()\" [ngClass]=\"{'liked': workoutPlan.isLiked}\" type=\"button\">\n                <i class=\"fa fa-heart\"></i>\n                <span>Like</span>\n            </button>\n        </div>\n\n        <hr/>\n\n        <div class=\"d-inline-block\">\n            <svg class=\"body-model mx-auto col-12\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\"\n                 xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" height=\"300\" preserveAspectRatio=\"xMidYMin\"\n                 viewBox=\"0 0 612 792\" xml:space=\"preserve\">\n\n                                        <image style=\"overflow:visible;\" xlink:href=\"assets/static/images/muscles.png\"\n                                               transform=\"matrix(0.7228 0 0 0.7228 -42.5334 69.2174)\"></image>\n                <path (mouseenter)=\"onMuscleMouseEnter('abs')\"\n                      (mouseout)=\"resetSelectedMuscleGroup()\"\n                      [ngClass]=\"{'is-focused': focusedMuscleGroup ==='abs',\n         'assisting-muscle-group': setCounter.abs > 0 && setCounter.abs <= 15, 'major-muscle-group': setCounter.abs > 15}\"\n                      class=\"abs muscle\" d=\"M137.3,267.09c0,0-53.61,7.17-50.74,35.87c2.87,28.7,4.57,25.83,1.7,45.39c-2.87,19.57,4.83,28.7,4.83,28.7\n\tl38.09,50.74c0,0,18.26,21.78,32.87-14.48c14.61-36.26,27-42.39,27-42.39l7.3-6.78c0,0-1.43-7.3-1.3-10.3\n\tc0.13-3-2.87-16.04-2.87-16.04s-2.35-10.83,0.13-19.3c2.48-8.48,0-25.04-0.65-26.22s-1.96-16.43-20.74-18s-22.88-5.43-22.88-5.43\n\tL137.3,267.09z\"><title>Abs -> {{setCounter.abs}} Sets per Muscle Group</title></path>\n                <path (mouseenter)=\"onMuscleMouseEnter('traps')\"\n                      (mouseout)=\"resetSelectedMuscleGroup()\"\n                      [ngClass]=\"{'is-focused': focusedMuscleGroup ==='traps',\n         'assisting-muscle-group': setCounter.traps > 0 && setCounter.traps <= 15, 'major-muscle-group': setCounter.traps > 15}\"\n                      class=\"traps muscle\" d=\"M83.7,184.85l10.76,6.46l8.22,3.91l10.17,2.93h6.65v-4.3v-10.57l-1.96-10.76\n                    C117.54,172.52,107.17,185.43,83.7,184.85z\"><title>Traps -> {{setCounter.traps}} Sets per Muscle\n                    Group</title></path>\n                <path (mouseenter)=\"onMuscleMouseEnter('traps')\"\n                      (mouseout)=\"resetSelectedMuscleGroup()\"\n                      [ngClass]=\"{'is-focused': focusedMuscleGroup ==='traps',\n         'assisting-muscle-group': setCounter.traps > 0 && setCounter.traps <= 15, 'major-muscle-group': setCounter.traps > 15}\"\n                      class=\"traps muscle\" d=\"M163.72,169.98l-1.96,15.36l-0.98,12.82l1.47,1.37l15.95-2.35l12.72-4.3l9-3.52l4.11-1.76\n                    C204.02,187.59,193.46,190.13,163.72,169.98z\"><title>Traps -> {{setCounter.traps}} Sets per Muscle\n                    Group</title></path>\n                <path (mouseenter)=\"onMuscleMouseEnter('chest')\"\n                      (mouseout)=\"resetSelectedMuscleGroup()\"\n                      [ngClass]=\"{'is-focused': focusedMuscleGroup ==='chest',\n         'assisting-muscle-group': setCounter.chest > 0 && setCounter.chest <= 15, 'major-muscle-group': setCounter.chest > 15}\"\n                      class=\"chest muscle\" d=\"M74.5,213.41l-1.37,11.93l0.68,2.15l2.64,2.74l1.96,11.74c0,0,3.91,20.93,11.15,25.43s5.48,4.11,5.48,4.11\n                    l6.55,2.74l9.77-0.32c0,0,15.18-1.05,18.7-7.5c3.52-6.46,3.33-5.48,3.52-10.37s0-13.11,0-13.11l0.09-11.54l-3.22-9l-0.2-11.54\n                    l-0.39-5.28l-10.37-3.52l-11.74-1.17C107.76,200.89,79.59,208.52,74.5,213.41z\"><title>Chest -> {{setCounter.chest}} Sets\n                    per Muscle Group</title></path>\n                <path (mouseenter)=\"onMuscleMouseEnter('chest')\"\n                      (mouseout)=\"resetSelectedMuscleGroup()\"\n                      [ngClass]=\"{'is-focused': focusedMuscleGroup ==='chest',\n         'assisting-muscle-group': setCounter.chest > 0 && setCounter.chest <= 15, 'major-muscle-group': setCounter.chest > 15}\"\n                      class=\"chest muscle\" d=\"M168.41,200.89l-14.28,2.15l-5.67,2.15v2.93v6.85l-1.96,9.2l-4.89,10.37l-0.98,15.26c0,0,1.19,16.46,8.41,18.71\n                    c7.23,2.25,10.37,4.18,17.22,4.77c6.85,0.59,13.3-1.17,13.3-1.17s8.41-1.57,13.89-10.37c5.48-8.8,7.24-14.48,7.24-14.48l2.35-10.11\n                    l3.33-10.82l1.57-9l-5.28-5.09C202.65,212.24,180.15,199.12,168.41,200.89z\"><title>Chest -> {{setCounter.chest}} Sets\n                    per Muscle Group</title></path>\n                <path (mouseenter)=\"onMuscleMouseEnter('biceps')\"\n                      (mouseout)=\"resetSelectedMuscleGroup()\"\n                      [ngClass]=\"{'is-focused': focusedMuscleGroup ==='biceps',\n         'assisting-muscle-group': setCounter.biceps > 0 && setCounter.biceps <= 15, 'major-muscle-group': setCounter.biceps > 15}\"\n                      class=\"biceps muscle\" d=\"M71.96,229.46c0,0-16.96,12.07-19.3,34.11c-2.35,22.04-2.22,25.7-2.22,25.7l1.17,12.91l1.3,6.78l2.35,5.35\n                    l2.09,6.39l15.26-17.35l8.61-37.3l-3.92-30.78l-2.82-7.08L71.96,229.46z\"><title>Biceps -> {{setCounter.biceps}} Sets\n                    per Muscle Group</title></path>\n                <path (mouseenter)=\"onMuscleMouseEnter('biceps')\"\n                      (mouseout)=\"resetSelectedMuscleGroup()\"\n                      [ngClass]=\"{'is-focused': focusedMuscleGroup ==='biceps',\n         'assisting-muscle-group': setCounter.biceps > 0 && setCounter.biceps <= 15, 'major-muscle-group': setCounter.biceps > 15}\"\n                      class=\"biceps muscle\" d=\"M208.91,228.87l17.22,21.91c0,0,12.33,19.57,11.35,38.93c-0.98,19.37-0.98,19.37-0.98,19.37l-3.52,12.33\n                    l-9.75-5.87l-10.59-18.59l-3.72-14.09V228.87z\"><title>Biceps -> {{setCounter.biceps}} Sets per Muscle\n                    Group</title></path>\n                <path (mouseenter)=\"onMuscleMouseEnter('quadriceps')\"\n                      (mouseout)=\"resetSelectedMuscleGroup()\"\n                      [ngClass]=\"{'is-focused': focusedMuscleGroup ==='quadriceps',\n         'assisting-muscle-group': setCounter.quadriceps > 0 && setCounter.quadriceps <= 15, 'major-muscle-group': setCounter.quadriceps > 15}\"\n                      class=\"quadriceps muscle\" d=\"M96,400.04l0.61,8.83L88,425.7l-7.24,17.41l-5.28,19.17c0,0,0,21.13,3.33,40.89\n                    c3.33,19.76,5.87,34.83,5.87,34.83l5.28,19.57l2.54,10.17l2.93,2.54l2.15-2.54L99.93,556v-10.37c0,0,3.21-5.28,6.21-4.7\n                    c2.99,0.59,7.49,0.39,7.88,6.85c0.39,6.46,1.96,15.26,1.96,15.26s-0.39,9.2,5.67,7.24c6.07-1.96,7.24-3.72,7.24-3.72l2.15-7.24\n                    l2.09-25.76l-4.96-30l-6-22.96l-14.87-40.17l-6.14-34.06L96,400.04z\"><title>Quadriceps -> {{setCounter.quadriceps}} Sets\n                    per Muscle Group</title></path>\n                <path (mouseenter)=\"onMuscleMouseEnter('quadriceps')\"\n                      (mouseout)=\"resetSelectedMuscleGroup()\"\n                      [ngClass]=\"{'is-focused': focusedMuscleGroup ==='quadriceps',\n         'assisting-muscle-group': setCounter.quadriceps > 0 && setCounter.quadriceps <= 15, 'major-muscle-group': setCounter.quadriceps > 15}\"\n                      class=\"quadriceps muscle\"\n                      d=\"M185.34,394.05l-7.86,36.56l-11.22,32.52l-4.7,11.74l-6.52,23.74l-2.61,18.52l-0.52,37.3l1.3,5.22l4.43,4.43\n                    c0,0,7.04,4.17,8.09-11.22c1.04-15.39,4.17-14.87,4.17-14.87l6.78-0.52c0,0,4.7-1.3,3.65,12.78c-1.04,14.09,12.78,5.48,12.78,5.48\n                    l3.65-12.78l6-23.48l4.96-20.87l4.17-27.39l-2.09-15.91c0,0-3.65-16.7-14.61-35.74S185.34,394.05,185.34,394.05z\"><title>Quadriceps -> {{setCounter.quadriceps}} Sets\n                    per Muscle Group</title></path>\n                <path (mouseenter)=\"onMuscleMouseEnter('calves')\"\n                      (mouseout)=\"resetSelectedMuscleGroup()\"\n                      [ngClass]=\"{'is-focused': focusedMuscleGroup ==='calves',\n         'assisting-muscle-group': setCounter.calves > 0 && setCounter.calves <= 15, 'major-muscle-group': setCounter.calves > 15}\"\n                      class=\"calves muscle\" d=\"M422.57,562.07l-4.11,16.24l-1.37,16.43l-1.76,29.15c0,0-0.39,23.67,3.62,28.37c4.01,4.7,7.92,7.43,7.92,7.43\n                    s9.39-1.76,9-8.02s0.01-10.57,0.01-10.57l3.51,8.02l6.26,9l6.46,4.89l7.63,1.57l1.17-24.85l-2.48-24l-3.39-15.13l-0.52-5.54\n                    l-11.35-18.59l-6.78-10.3l-2.09,6.39l-1.17,1.43l-5.22-10.3l-3.13-3.39h-1.7L422.57,562.07z\"><title>Calves -> {{setCounter.calves}} Sets\n                    per Muscle Group</title></path>\n                <path (mouseenter)=\"onMuscleMouseEnter('calves')\"\n                      (mouseout)=\"resetSelectedMuscleGroup()\"\n                      [ngClass]=\"{'is-focused': focusedMuscleGroup ==='calves',\n         'assisting-muscle-group': setCounter.calves > 0 && setCounter.calves <= 15, 'major-muscle-group': setCounter.calves > 15}\"\n                      class=\"calves muscle\" d=\"M499.52,572.7l-5.35,8.35l-4.43,9.91l-3.91,7.96l-0.78,4.17L483.09,637v13.3l2.74,12.39l0.91,7.7\n                    c0,0,9.26-6.13,9.52-6.65s6.39-11.35,6.39-11.35l2.35-7.7l0.65-0.65l1.3,6.13v4.96l3.52,4.43l7.83,1.96c0,0,9-4.17,8.61-10.57\n                    s1.57-21.65,1.57-21.65l-3.78-23.74l-2.61-12.39c0,0-0.78-9.13-2.61-13.57c-1.83-4.43-6.65-14.74-6.65-14.74l-8.35,9.13l-1.57,3.39\n                    L499.52,572.7z\"><title>Calves -> {{setCounter.calves}} Sets per Muscle Group</title></path>\n                <path (mouseenter)=\"onMuscleMouseEnter('calves')\"\n                      (mouseout)=\"resetSelectedMuscleGroup()\"\n                      [ngClass]=\"{'is-focused': focusedMuscleGroup ==='calves',\n         'assisting-muscle-group': setCounter.calves > 0 && setCounter.calves <= 15, 'major-muscle-group': setCounter.calves > 15}\"\n                      class=\"calves muscle\" d=\"M96.09,585.74l-7.3,15.39l-3.91,30.52l1.83,29.48c0,0,7.04,32.35,7.04,33.13s3.91,26.09,3.91,26.09l17.48-3.65\n                    l-6.26-42l-5.48-47.74l-1.3-16.43l-0.52-13.57L96.09,585.74z\"><title>Calves -> {{setCounter.calves}} Sets\n                    per Muscle Group</title></path>\n                <polygon (mouseenter)=\"onMuscleMouseEnter('calves')\"\n                         (mouseout)=\"resetSelectedMuscleGroup()\"\n                         [ngClass]=\"{'is-focused': focusedMuscleGroup ==='calves',\n         'assisting-muscle-group': setCounter.calves > 0 && setCounter.calves <= 15, 'major-muscle-group': setCounter.calves > 15}\"\n                         class=\"calves muscle\" points=\"128.11,605.5 127.49,606.57 119.7,619.98 115.98,630.35 115.13,648.35 117.35,675.54 119.5,700.59\n                    120.67,713.5 123.8,684.93 128.11,661.07 130.07,649.91 130.07,636.8 130.07,625.85 \"><title>Calves -> {{setCounter.calves}} Sets\n                    per Muscle Group</title></polygon>\n                <path (mouseenter)=\"onMuscleMouseEnter('calves')\"\n                      (mouseout)=\"resetSelectedMuscleGroup()\"\n                      [ngClass]=\"{'is-focused': focusedMuscleGroup ==='calves',\n         'assisting-muscle-group': setCounter.calves > 0 && setCounter.calves <= 15, 'major-muscle-group': setCounter.calves > 15}\"\n                      class=\"calves muscle\" d=\"M157.13,603.74l4.7,13.04l1.57,7.57l-1.83,32.61l-3.13,22.43l-3.65,23.48l-2.74-53.93v-20.02\n                    C152.04,628.91,157.78,604.33,157.13,603.74z\"><title>Calves -> {{setCounter.calves}} Sets per Muscle\n                    Group</title></path>\n                <polygon (mouseenter)=\"onMuscleMouseEnter('calves')\"\n                         (mouseout)=\"resetSelectedMuscleGroup()\"\n                         [ngClass]=\"{'is-focused': focusedMuscleGroup ==='calves',\n         'assisting-muscle-group': setCounter.calves > 0 && setCounter.calves <= 15, 'major-muscle-group': setCounter.calves > 15}\"\n                         class=\"calves muscle\" points=\"161.57,711.74 177.22,717.61 181.65,698.96 189.35,670.52 195.35,648.74 198.22,632.83 197.17,612.48\n                    194.83,595.52 190.13,595.52 187.13,587.04 182.7,586.26 179.89,599.96 175.39,623.96 167.96,664.13 \"><title>Calves -> {{setCounter.calves}} Sets\n                    per Muscle Group</title>\n  </polygon>\n                <path (mouseenter)=\"onMuscleMouseEnter('gluteus')\"\n                      (mouseout)=\"resetSelectedMuscleGroup()\"\n                      [ngClass]=\"{'is-focused': focusedMuscleGroup ==='gluteus',\n         'assisting-muscle-group': setCounter.gluteus > 0 && setCounter.gluteus <= 15, 'major-muscle-group': setCounter.gluteus > 15}\"\n                      class=\"gluteus muscle\"\n                      d=\"M417.22,365.57l-4.43,11.87l-1.96,10.43L409,403.65l-0.65,20.87c0,0,4.04,21.78,17.35,24.39\n                    c13.3,2.61,18.78,2.35,18.78,2.35s13.96-1.57,15.91-8.35c1.96-6.78,4.3-4.3,4.3-4.3l5.09,9.52c0,0,7.43,11.35,18.91,10.17\n                    s18.78-3.52,18.78-3.52s15.26-7.57,13.96-29.09c-1.3-21.52,0.08-37.43,0.08-37.43l-3.47-18.65c0,0-31.3,11.35-35.87,15.26\n                    s-16.75,20.22-17.24,24.52s-2.97,2.59-2.97,2.59s-0.26-13.54-13.57-26.33c-13.3-12.78-19.7-14.87-19.7-14.87\"><title>Gluteus -> {{setCounter.gluteus}} Sets\n                    per Muscle Group</title></path>\n                <path\n                        (mouseenter)=\"onMuscleMouseEnter('anteriorDeltoid')\"\n                        (mouseout)=\"resetSelectedMuscleGroup()\"\n                        [ngClass]=\"{'is-focused': focusedMuscleGroup ==='anteriorDeltoid',\n         'assisting-muscle-group': setCounter.anteriorDeltoid > 0 && setCounter.anteriorDeltoid <= 15, 'major-muscle-group': setCounter.anteriorDeltoid > 15}\"\n                        class=\"anteriorDeltoid muscle\" d=\"M109.39,200.89l-12.13-3.72l-6.65-3.65c0,0-17.61-0.65-21.13,2.22c-3.52,2.87-7.96,7.04-10.17,13.3\n                    c-2.22,6.26-2.61,6.65-3,13.04c-0.39,6.39-0.91,9.26,0,13.83s2.24,9.29,2.24,9.29l6.37-10.46l7.7-6.56l0.52-1.01l1.15-11.81\n                    l0.22-1.95C74.5,213.41,92.04,198.87,109.39,200.89z\"><title>Anterior Deltoid -> {{setCounter.anteriorDeltoid}} Sets\n                    per Muscle Group</title></path>\n                <path\n                        (mouseenter)=\"onMuscleMouseEnter('lateralDeltoid')\"\n                        (mouseout)=\"resetSelectedMuscleGroup()\"\n                        [ngClass]=\"{'is-focused': focusedMuscleGroup ==='lateralDeltoid',\n         'assisting-muscle-group': setCounter.lateralDeltoid > 0 && setCounter.lateralDeltoid <= 15, 'major-muscle-group': setCounter.lateralDeltoid > 15}\"\n                        class=\"lateralDeltoid muscle\"\n                        d=\"M89.96,192.97l-11.84-4.99c0,0-14.77,0.59-20.93,10.86c-6.16,10.27-8.51,17.8-8.51,17.8L47.6,231.8l1.27,9.88\n                    l0.39,10.47L52,264.97l4.4-16.73l1.99-3.6l-2.09-8.72c0,0-0.68-17.39,2.64-25.86C62.27,201.58,69.61,190.03,89.96,192.97z\"><title>Lateral Deltoid -> {{setCounter.lateralDeltoid}} Sets\n                    per Muscle Group</title>\n  </path>\n                <path\n                        (mouseenter)=\"onMuscleMouseEnter('anteriorDeltoid')\"\n                        (mouseout)=\"resetSelectedMuscleGroup()\"\n                        [ngClass]=\"{'is-focused': focusedMuscleGroup ==='anteriorDeltoid',\n         'assisting-muscle-group': setCounter.anteriorDeltoid > 0 && setCounter.anteriorDeltoid <= 15, 'major-muscle-group': setCounter.anteriorDeltoid > 15}\"\n                        class=\"anteriorDeltoid muscle\" d=\"M173.43,199.52l20.83,8.35l9.76,4.57l5.8,8.48v9.78l15.76,19.4l3.23,5.55l3.05-12.29c0,0,1.7-9.91,0.65-18.65\n                    c-1.04-8.74-2.48-12.39-5.74-16.3c-3.26-3.91-13.96-13.83-24.39-13.96c-10.43-0.13-12.65,1.43-12.65,1.43l-6.78,2.28L173.43,199.52z\n                    \"><title>Anterior Deltoid -> {{setCounter.anteriorDeltoid}} Sets per Muscle Group</title></path>\n                <path\n                        (mouseenter)=\"onMuscleMouseEnter('lateralDeltoid')\"\n                        (mouseout)=\"resetSelectedMuscleGroup()\"\n                        [ngClass]=\"{'is-focused': focusedMuscleGroup ==='lateralDeltoid',\n         'assisting-muscle-group': setCounter.lateralDeltoid > 0 && setCounter.lateralDeltoid <= 15, 'major-muscle-group': setCounter.lateralDeltoid > 15}\"\n                        class=\"lateralDeltoid muscle\" d=\"M193.65,194.43l9.5-2.34c0,0,12.03-0.98,16.33,1.66c4.3,2.64,13.01,8.9,15.95,19.27\n                    c2.93,10.37,4.21,17.02,4.21,17.61s-0.49,15.26-0.49,15.26l-3.52,20.74l-1.32,2.2l-4.95-12.13l2.63-14.06c0,0,3.89-26.66-6.66-35.87\n                    s-15-10.58-15-10.58S200.7,193.05,193.65,194.43z\"><title>Lateral Deltoid -> {{setCounter.lateralDeltoid}} Sets\n                    per Muscle Group</title></path>\n                <path (mouseenter)=\"onMuscleMouseEnter('traps')\"\n                      (mouseout)=\"resetSelectedMuscleGroup()\"\n                      [ngClass]=\"{'is-focused': focusedMuscleGroup ==='traps',\n         'assisting-muscle-group': setCounter.traps > 0 && setCounter.traps <= 15, 'major-muscle-group': setCounter.traps > 15}\"\n                      class=\"traps muscle\" d=\"M404.96,187.39L424,197.83l6.78,4.7l-4.17,2.09l4.17,25.3l2.87,28.43c0,0,27.65,43.04,28.43,54.52\n                    c0.78,11.48,11.48,2.09,11.48,2.09l3.39-14.87l12.52-22.7l8.87-17.74l2.61-10.96l3.13-28.96l4.17-17.74l22.96-11.48l7.3-5.22\n                    c0,0-44.09-1.83-56.09-29.48s-24.78,0-24.78,0S454.26,177.48,404.96,187.39z\"><title>Traps -> {{setCounter.traps}} Sets\n                    per Muscle Group</title></path>\n                <path\n                        (mouseenter)=\"onMuscleMouseEnter('posteriorDeltoid')\"\n                        (mouseout)=\"resetSelectedMuscleGroup()\"\n                        [ngClass]=\"{'is-focused': focusedMuscleGroup ==='posteriorDeltoid',\n         'assisting-muscle-group': setCounter.posteriorDeltoid > 0 && setCounter.posteriorDeltoid <= 15, 'major-muscle-group': setCounter.posteriorDeltoid > 15}\"\n                        class=\"posteriorDeltoid muscle\" d=\"M373.13,241.91l15.65-23.22l7.04-8.87c0,0,26.87-4.96,30.78-5.22c3.91-0.26,4.17-2.09,4.17-2.09l-15.4-9.42\n                    l-10.42-5.71c0,0-22.7,6.52-26.61,21.39c-3.91,14.87-5.22,34.43-5.22,34.43V241.91z\"><title>Posterior Deltoid -> {{setCounter.posteriorDeltoid}} Sets\n                    per Muscle Group</title></path>\n                <path\n                        (mouseenter)=\"onMuscleMouseEnter('posteriorDeltoid')\"\n                        (mouseout)=\"resetSelectedMuscleGroup()\"\n                        [ngClass]=\"{'is-focused': focusedMuscleGroup ==='posteriorDeltoid',\n         'assisting-muscle-group': setCounter.posteriorDeltoid > 0 && setCounter.posteriorDeltoid <= 15, 'major-muscle-group': setCounter.posteriorDeltoid > 15}\"\n                        class=\"posteriorDeltoid muscle\" d=\"M538.52,185.3c0,0,15.78,4.83,20.35,14.87c4.57,10.04,6.39,19.3,6.39,19.3l1.3,14.09l-1.96,8.61l-7.17-11.87\n                    l-7.3-11.22c0,0-6.65-14.22-13.17-13.17c-6.52,1.04-8.74,0.52-9.13,0.13c-0.39-0.39-8.87-1.7-8.87-1.7l-8.87-0.52l-2.06-0.82\n                    c0,0,18.06-8.82,23.19-12.49C536.35,186.86,538.52,185.3,538.52,185.3z\"><title>Posterior Deltoid -> {{setCounter.posteriorDeltoid}} Sets\n                    per Muscle Group</title></path>\n                <path (mouseenter)=\"onMuscleMouseEnter('hamstrings')\"\n                      (mouseout)=\"resetSelectedMuscleGroup()\"\n                      [ngClass]=\"{'is-focused': focusedMuscleGroup ==='hamstrings',\n         'assisting-muscle-group': setCounter.hamstrings > 0 && setCounter.hamstrings <= 15, 'major-muscle-group': setCounter.hamstrings > 15}\"\n                      class=\"hamstrings muscle\"\n                      d=\"M414.09,459.74l-4.43,24.52l2.22,33.13l1.17,16.17l3.65,23.22l1.48,24.84l4.91-21.32l3-9.78l1.04-2.61\n                    l10.1,19.53l17.29,27.62v-13.24l-6-61.04l-7.04-40.96l-4.17-21.44C437.3,458.39,425.83,446.17,414.09,459.74z\"><title>Hamstrings -> {{setCounter.hamstrings}} Sets\n                    per Muscle Group</title></path>\n                <path (mouseenter)=\"onMuscleMouseEnter('hamstrings')\"\n                      (mouseout)=\"resetSelectedMuscleGroup()\"\n                      [ngClass]=\"{'is-focused': focusedMuscleGroup ==='hamstrings',\n         'assisting-muscle-group': setCounter.hamstrings > 0 && setCounter.hamstrings <= 15, 'major-muscle-group': setCounter.hamstrings > 15}\"\n                      class=\"hamstrings muscle\"\n                      d=\"M488.7,499.39l-4.17,24.81v34.93l-1.43,26.09l2.74,13.7l13.7-26.22l8.74-18l8.25,18.16l6.88-21.82v-49.3\n                    c0,0-1.04-27.39-5.74-34.43c-2.46-3.69-15.28-13.81-22.17-4.43C489.2,471.41,488.7,499.39,488.7,499.39z\"><title>Hamstrings -> {{setCounter.hamstrings}} Sets\n                    per Muscle Group</title></path>\n                <path (mouseenter)=\"onMuscleMouseEnter('latisimus')\"\n                      (mouseout)=\"resetSelectedMuscleGroup()\"\n                      [ngClass]=\"{'is-focused': focusedMuscleGroup ==='latisimus',\n         'assisting-muscle-group': setCounter.latisimus > 0 && setCounter.latisimus <= 15, 'major-muscle-group': setCounter.latisimus > 15}\"\n                      class=\"latisimus muscle\" d=\"M433.39,255.71l-15.65,1.85h-11.22v14.87l-1.57,10.7l6.78,17.22l6,14.87l3.65,17.74l6.26,19.83\n                    c0,0,5.22,9.65,3.13,13.83c-2.09,4.17,6-8.61,6-8.61l2.61-13.3c0,0,4.99-17.52,13.57-26.12c8.58-8.6,8.96-6.99,8.96-6.99\n                    l-12.54-27.12L433.39,255.71z\"><title>Latisimus -> {{setCounter.latisimus}} Sets per Muscle Group</title></path>\n                <path (mouseenter)=\"onMuscleMouseEnter('latisimus')\"\n                      (mouseout)=\"resetSelectedMuscleGroup()\"\n                      [ngClass]=\"{'is-focused': focusedMuscleGroup ==='latisimus',\n         'assisting-muscle-group': setCounter.latisimus > 0 && setCounter.latisimus <= 15, 'major-muscle-group': setCounter.latisimus > 15}\"\n                      class=\"latisimus muscle\"\n                      d=\"M499.29,255.71l-12.95,27.38l-9.38,16.99l-2.62,11.49l16.71,15.38l8.24,15.65l1.15,24.84l3.65,4.12l6.26-17.48\n                    l9.65-19.3l3.65-16.21l3.13-18.49l5.48-15.91l2.09-30l-7.04,4.17C527.3,258.35,508.83,260.12,499.29,255.71z\"><title>Latisimus -> {{setCounter.latisimus}} Sets\n                    per Muscle Group</title></path>\n                <path (mouseenter)=\"onMuscleMouseEnter('triceps')\"\n                      (mouseout)=\"resetSelectedMuscleGroup()\"\n                      [ngClass]=\"{'is-focused': focusedMuscleGroup ==='triceps',\n         'assisting-muscle-group': setCounter.triceps > 0 && setCounter.triceps <= 15, 'major-muscle-group': setCounter.triceps > 15}\"\n                      class=\"triceps muscle\"\n                      d=\"M389.3,222.61l-4.56,2.08l-9.95,14.76L370,257.57l-1.83,25.83v19.57l3.39,7.04l14.35,12.52l10.43-13.3\n                    l5.61-10.96l1.17-15.91l3.39-13.3L403.65,238c0,0-1.57-17.22-12.26-15.39C380.7,224.43,389.3,222.61,389.3,222.61z\"><title>Triceps -> {{setCounter.triceps}} Sets\n                    per Muscle Group</title></path>\n                <path (mouseenter)=\"onMuscleMouseEnter('triceps')\"\n                      (mouseout)=\"resetSelectedMuscleGroup()\"\n                      [ngClass]=\"{'is-focused': focusedMuscleGroup ==='triceps',\n         'assisting-muscle-group': setCounter.triceps > 0 && setCounter.triceps <= 15, 'major-muscle-group': setCounter.triceps > 15}\"\n                      class=\"triceps muscle\" d=\"M534.35,224.43l1.04,21.65l-2.42,27.89l1.21,12.81l1.21,18.78l7.04,6.01l9.13,2.85l13.3-9.13l3.13-8.87v-22.17\n                    l-2.87-21.65l-1.57-9.39l-6.13-12.91l-8.22-13C549.22,217.3,535.13,217.65,534.35,224.43z\"><title>Triceps -> {{setCounter.triceps}} Sets\n                    per Muscle Group</title></path>\n                <path (mouseenter)=\"onMuscleMouseEnter('erectors')\"\n                      (mouseout)=\"resetSelectedMuscleGroup()\"\n                      [ngClass]=\"{'is-focused': focusedMuscleGroup ==='erectors',\n         'assisting-muscle-group': setCounter.erectors > 0 && setCounter.erectors <= 15, 'major-muscle-group': setCounter.erectors > 15}\"\n                      class=\"erectors muscle\" d=\"M469.12,317.83c0,0,26.61,7.3,27.4,23.48c0.78,16.17,0,33.13,0,33.13L478,385.39l-14.35,23.48l-13.57-25.83\n                    l-14.61-11.48l5.3-26.7C440.78,344.87,443.81,317.83,469.12,317.83z\"><title>Erectors -> {{setCounter.erectors}} Sets\n                    per Muscle Group</title></path>\n                <path (mouseenter)=\"onMuscleMouseEnter('forearm')\"\n                      (mouseout)=\"resetSelectedMuscleGroup()\"\n                      [ngClass]=\"{'is-focused': focusedMuscleGroup ==='forearm',\n         'assisting-muscle-group': setCounter.forearm > 0 && setCounter.forearm <= 15, 'major-muscle-group': setCounter.forearm > 15}\"\n                      class=\"forearm muscle\"\n                      d=\"M45,298s-6.53,18.52-6.53,43.83S34.78,396,34.78,396L58,398.7s3.65-17.74,7.83-26.87S77,343.91,77.57,337.91s1-16.5,1-16.5l-9.83-9.06-3.66-.49-6.34,8.84Z\"><title>Forearm -> {{setCounter.forearm}} Sets\n                    per Muscle Group</title>\n  </path>\n                <path (mouseenter)=\"onMuscleMouseEnter('forearm')\"\n                      (mouseout)=\"resetSelectedMuscleGroup()\"\n                      [ngClass]=\"{'is-focused': focusedMuscleGroup ==='forearm',\n         'assisting-muscle-group': setCounter.forearm > 0 && setCounter.forearm <= 15, 'major-muscle-group': setCounter.forearm > 15}\"\n                      class=\"forearm muscle\"\n                      d=\"M215.3,325.91l7.92-10.37,9.76,5.87,6.65-14.28,5.67-13s8.61,25.82,9.92,35.74,5.21,44.6,5.21,44.6l4.7,24.27L243.74,400s-13.57-29-17.48-37.87S216.61,341,215.3,325.91Z\"><title>Forearm -> {{setCounter.forearm}} Sets\n                    per Muscle Group</title>\n  </path>\n                <path (mouseenter)=\"onMuscleMouseEnter('forearm')\"\n                      (mouseout)=\"resetSelectedMuscleGroup()\"\n                      [ngClass]=\"{'is-focused': focusedMuscleGroup ==='forearm',\n         'assisting-muscle-group': setCounter.forearm > 0 && setCounter.forearm <= 15, 'major-muscle-group': setCounter.forearm > 15}\"\n                      class=\"forearm muscle\"\n                      d=\"M346.78,400l20.09,2.31,2.87-6.35s16.69-31.74,20.09-41.13,9.79-31.62,9.65-40.44l-.14-8.81-13.06,18.43s-12.1,7.08-13.15-1.53l-1-8.61L371,309.52l-5.14-9.17s-7.57,21.65-10.18,42.78S346.78,400,346.78,400Z\"><title>Forearm -> {{setCounter.forearm}} Sets\n                    per Muscle Group</title>\n  </path>\n                <path (mouseenter)=\"onMuscleMouseEnter('forearm')\"\n                      (mouseout)=\"resetSelectedMuscleGroup()\"\n                      [ngClass]=\"{'is-focused': focusedMuscleGroup ==='forearm',\n         'assisting-muscle-group': setCounter.forearm > 0 && setCounter.forearm <= 15, 'major-muscle-group': setCounter.forearm > 15}\"\n                      class=\"forearm muscle\"\n                      d=\"M534.35,306.15l1.89,32.09L540,352.33l12.32,30.32,5.09,20,21.91-2.94-2.93-19.56L576,333.54s-.2-14.47-2.74-24.06A99.07,99.07,0,0,0,568,294.22l-2.7,9.87-7.15,12s2.47,7.63-7.66,11.15-8.19-3.91-8.19-3.91l1.37-2.94Z\"><title>Forearm -> {{setCounter.forearm}} Sets\n                    per Muscle Group</title>\n  </path>\n                                    </svg>\n        </div>\n        <hr class=\"mb-5\"/>\n        <div class=\"buttons-wrapper left\">\n            <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"copyToMyWorkoutPlansHandler(workoutPlan.id)\">\n                Copy To My Plans\n            </button>\n        </div>\n        <div class=\"buttons-wrapper right\">\n            <a routerLink=\"/workout-plans/details/{{workoutPlan.id}}\" class=\"btn btn-sm btn-info\">Details</a>\n        </div>\n\n    </div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout-plan/workout-plan-details/workout-plan-details.component.html": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout-plan/workout-plan-details/workout-plan-details.component.html ***!
          \*****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n    <ng-template #copyWorkoutModal let-modal>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Copy Workout Plan To My Workout Plans</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <form #createWorkoutForm=\"ngForm\">\n                <h5 class=\"text-center\">{{workoutPlan.name}}</h5>\n                <table class=\"table table-striped table-hover mb-4 mx-auto\"\n                       *ngFor=\"let workout of workoutPlan.workouts\">\n                    <thead>\n                    <tr>\n                        <th colspan=\"5\" class=\"py-auto\"><h5>{{workout.orderIndex}}. {{workout.workout.name}}</h5></th>\n                    </tr>\n                    <tr *ngIf=\"workout.workout.exercises && !workout.workout.exercises.length\">\n                        <td colspan=\"5\" class=\"py-auto\"><h5>No added exercises in this workout.</h5></td>\n                    </tr>\n                    <tr *ngIf=\"workout.workout.exercises && workout.workout.exercises.length\">\n                        <th scope=\"col\" style=\"width: 10%\">Order</th>\n                        <th scope=\"col\" style=\"width: 30%\">Exercise name</th>\n                        <th scope=\"col\" style=\"width: 20%\">Reps</th>\n                        <th scope=\"col\" style=\"width: 20%\">Sets</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n\n                    <tr *ngFor=\"let exercise of workout.workout.exercises\">\n                        <td class=\"align-middle\">{{exercise.orderIndex}}</td>\n                        <td class=\"align-middle\">{{exercise.exercise.name}}</td>\n                        <td class=\"align-middle\">{{exercise.reps}}</td>\n                        <td class=\"align-middle\">{{exercise.sets}}</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </form>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Copy to My Workout Plans</button>\n        </div>\n    </ng-template>\n\n\n    <div class=\"jumbotron\">\n        <img src=\"assets/static/images/logo.png\" height=\"300px\" class=\"d-inline-block align-center\" alt=\"\">\n        <h1 class=\"display-4\">Workout Plan Details</h1>\n        <hr class=\"my-2\"/>\n        <div class=\"container pt-4\">\n            <div class=\"row\">\n                <div class=\"workout-plan-container col-lg-9 mx-auto\">\n                    <div class=\"exercise-intro mt-4\">\n                        <h2 class=\"display-4 d-block mx-auto font-weight-bolder\">{{workoutPlan.name}}</h2>\n                    </div>\n\n                    <hr class=\"my-4\"/>\n\n                    <h3 class=\"font-weight-light pb-3\">Creator: <a class=\"card-link\"\n                                                                   routerLink=\"/profile/{{workoutPlan.creator.username}}\">{{workoutPlan.creator.username}}</a>\n                    </h3>\n\n                    <hr/>\n                    <div class=\"row mb-3\">\n                        <h4 class=\"col-7 font-weight-light my-auto p-1\">{{workoutPlan.likesCount}} Likes</h4>\n                        <button class=\"button button-like my-auto\" (click)=\"onLikeHandler()\"\n                                [ngClass]=\"{'liked': workoutPlan.isLiked}\" type=\"button\">\n                            <i class=\"fa fa-heart\"></i>\n                            <span>Like</span>\n                        </button>\n                    </div>\n\n                    <table class=\"table table-striped table-hover mb-4\"\n                           *ngFor=\"let workout of workoutPlan.workouts\">\n                        <h4 class=\"order-index-workout font-weight-bold font-italic\">{{workout.orderIndex}}</h4>\n                        <thead>\n                        <tr>\n                            <th colspan=\"5\" class=\"py-auto\"><h5><a\n                                    routerLink=\"/workouts/details/{{workout.workout.id}}\">{{workout.workout.name}}</a>\n                            </h5></th>\n                        </tr>\n                        <tr *ngIf=\"workout.workout.exercises && !workout.workout.exercises.length\">\n                            <td colspan=\"5\" class=\"py-auto\"><h5>No added exercises in this workout.</h5></td>\n                        </tr>\n                        <tr *ngIf=\"workout.workout.exercises && workout.workout.exercises.length\">\n                            <th scope=\"col\" style=\"width: 10%\">Order</th>\n                            <th scope=\"col\" style=\"width: 30%\">Exercise name</th>\n                            <th scope=\"col\" style=\"width: 20%\">Reps</th>\n                            <th scope=\"col\" style=\"width: 20%\">Sets</th>\n                            <th scope=\"col\" style=\"width: 20%;\"></th>\n                        </tr>\n                        </thead>\n                        <tbody *ngIf=\"workout.workout.exercises && workout.workout.exercises.length\">\n\n                        <tr *ngFor=\"let exercise of workout.workout.exercises\">\n                            <td class=\"align-middle\">{{exercise.orderIndex}}</td>\n                            <td class=\"align-middle\">{{exercise.exercise.name}}</td>\n                            <td class=\"align-middle\">{{exercise.reps}}</td>\n                            <td class=\"align-middle\">{{exercise.sets}}</td>\n                            <td>\n                                <button type=\"button\" routerLink=\"/exercises/details/{{exercise.exercise.id}}\"\n                                        class=\"btn btn-primary mr-2\"><i class=\"far fa-eye\"></i></button>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n\n                    <ng-template [ngIf]=\"workoutPlan.workouts && workoutPlan.workouts.length\">\n\n                        <h3 class=\"mx-auto font-weight-light\">Sets per Muscle Group</h3>\n\n                        <div class=\"chart-container row align-middle my-4\">\n                            <ngx-charts-bar-horizontal\n                                    [view]=\"[800, exercisesSets.length < 8 ? 250 : 500]\"\n                                    [animations]=\"true\"\n                                    [xAxis]=\"true\"\n                                    [yAxis]=\"true\"\n                                    [results]=\"exercisesSets\"\n                                    legendTitle=\"Muscle Groups\"\n                                    [legend]=\"true\"\n                                    [showDataLabel]=\"false\"\n                                    [showXAxisLabel]=\"false\"\n                                    [showGridLines]=\"true\"\n                                    [showYAxisLabel]=\"false\"\n                                    [gradient]=\"true\"\n                                    [noBarWhenZero]=\"true\"\n                                    [roundDomains]=\"true\"\n                                    [roundEdges]=\"true\"\n                                    [tooltipDisabled]=\"false\"\n                                    [trimYAxisTicks]=\"false\"\n                                    [customColors]=\"customColors\"\n\n                            >\n\n                            </ngx-charts-bar-horizontal>\n\n                        </div>\n                    </ng-template>\n\n                    <h3 *ngIf=\"workoutPlan && !workoutPlan.workouts.length\">No added workouts.</h3>\n\n                    <div class=\"buttons col-12 mx-auto p-3\">\n                        <button type=\"button\" class=\"btn btn-success\" (click)=\"open(copyWorkoutModal)\">\n                            Copy to My Workout Plans\n                        </button>\n\n                        <button type=\"button\"\n                                class=\"btn btn-info my-3 mx-2\" (click)=\"exportToExcelHandler()\">Export to Excel\n                        </button>\n                    </div>\n\n                </div>\n\n\n            </div>\n\n            <div class=\"workout-plan-container col-lg-9 mx-auto row mt-5\">\n\n                <h2 class=\"d-block py-5 mx-auto font-weight-bolder\">Comments Section</h2>\n\n                <div class=\"col-12\">\n                    <div class=\"comment-wrapper\">\n                        <div class=\"panel panel-info\">\n                            <div class=\"panel-body\">\n                                <form #postForm=\"ngForm\">\n                                        <textarea class=\"form-control\" placeholder=\"Write a comment...\"\n                                                  #comment=\"ngModel\"\n                                                  name=\"comment\"\n                                                  rows=\"3\" [(ngModel)]=\"commentBindingModel.comment\"\n                                                  required></textarea>\n                                </form>\n                                <br>\n                                <button type=\"button\" class=\"btn btn-info\" [disabled]=\"comment.invalid\"\n                                        (click)=\"onPostHandler()\">Post\n                                </button>\n                                <div class=\"clearfix\"></div>\n                                <hr>\n                                <ul class=\"media-list\">\n                                    <li *ngIf=\"workoutPlanComments && !workoutPlanComments.length\">\n                                        <h4>\n                                            No comments.\n                                        </h4>\n                                    </li>\n                                    <li class=\"media\" *ngFor=\"let comment of workoutPlanComments\">\n                                        <div class=\"text-center row\">\n                                            <div class=\"col-12 text-center\">\n                                                <a routerLink=\"/profile/{{comment.username}}\" class=\"d-block\">\n                                                    <img src=\"{{comment.profilePictureURL}}\"\n                                                         alt=\"Profile Picture\">\n                                                </a>\n                                                <a routerLink=\"/profile/{{comment.username}}\" class=\"d-block\">\n                                                    <strong class=\"d-block text-success\">@{{comment.username}}</strong>\n                                                </a>\n\n                                            </div>\n\n                                        </div>\n\n                                        <div class=\"media-body\">\n                                <span class=\"text-muted float-right\">\n                                    <small class=\"text-muted\">{{comment.postedOn | commentDate}}</small>\n                                </span>\n\n                                            <button *ngIf=\"isLoggedInUserModerator || workoutPlan.creator.username === loggedInUserUsername || comment.username === loggedInUserUsername\"\n                                                    type=\"button\" (click)=\"onDeleteCommentHandler(comment.id)\"\n                                                    class=\"btn btn-danger delete-btn ml-3 comment-delete-btn\"><i\n                                                    class=\"far fa-trash-alt\"></i></button>\n                                            <h4 class=\"mt-3 comment mr-2 font font-weight-light\">\n                                                {{comment.comment}}\n                                            </h4>\n                                        </div>\n                                        <div class=\"clearfix\"></div>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n\n        </div>\n\n    </div>\n\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout/all-workouts/all-workouts.component.html": 
        /*!********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout/all-workouts/all-workouts.component.html ***!
          \********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n    <div *ngIf=\"loading\" class=\"loader-container\">\n        <img src=\"assets/static/images/global-loader.gif\" alt=\"Loader\">\n    </div>\n\n    <ng-template #createWorkoutExerciseModal let-modal>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Copy Workout To My Workouts</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <form #createWorkoutForm=\"ngForm\">\n                <h5 class=\"text-center\">{{selectedWorkoutForModal.name}}</h5>\n                <table class=\"table table-striped table-hover\">\n                    <thead>\n                    <tr *ngIf=\"selectedWorkoutForModal.exercises && !selectedWorkoutForModal.exercises.length\">\n                        <td colspan=\"5\" class=\"py-auto\"><h5>No added exercises in this workout.</h5></td>\n                    </tr>\n                    <tr *ngIf=\"selectedWorkoutForModal.exercises && selectedWorkoutForModal.exercises.length\">\n                        <th scope=\"col\" style=\"width: 10%\">Order</th>\n                        <th scope=\"col\" style=\"width: 30%\">Exercise</th>\n                        <th scope=\"col\" style=\"width: 20%\">Reps</th>\n                        <th scope=\"col\" style=\"width: 20%\">Sets</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n\n                    <tr *ngFor=\"let exercise of selectedWorkoutForModal.exercises\">\n                        <td class=\"align-middle\">{{exercise.orderIndex}}</td>\n                        <td class=\"align-middle\">{{exercise.exercise.name}}</td>\n                        <td class=\"align-middle\">{{exercise.reps}}</td>\n                        <td class=\"align-middle\">{{exercise.sets}}</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </form>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Copy to My Workouts</button>\n        </div>\n    </ng-template>\n\n    <div class=\"jumbotron\">\n        <div class=\"container\">\n\n            <img src=\"assets/static/images/logo.png\" height=\"300px\" class=\"align-center\" alt=\"\">\n            <h1 class=\"display-4\">All Workouts</h1>\n        </div>\n\n\n    <hr class=\"my-4\">\n    <div class=\"container justify-content-center pb-0\">\n        <ng-template [ngIf]=\"filteredWorkouts.length > 0\" [ngIfElse]=\"noSuchWorkouts\">\n            <div class=\"row\">\n                <app-workout-card\n                        (modalOpen)=\"open(createWorkoutExerciseModal, $event)\"\n                        [workout]=\"workout\"\n                        class=\"col-lg-4 col-sm-12 my-3 d-flex mx-auto align-items-stretch\"\n                        *ngFor=\"let workout of filteredWorkouts | slice: (page-1) * pageSize : (page-1) * pageSize + pageSize\">\n                    >\n                </app-workout-card>\n            </div>\n            <ngb-pagination class=\"d-inline-block mt-5\" [(page)]=\"page\"\n                            [pageSize]=\"pageSize\"\n                            [collectionSize]=\"filteredWorkouts.length\"></ngb-pagination>\n        </ng-template>\n\n        <ng-template #noSuchWorkouts>\n            <h5>There are no workouts.</h5>\n        </ng-template>\n\n    </div>\n\n\n</div>\n\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout/my-workouts/my-workouts.component.html": 
        /*!******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout/my-workouts/my-workouts.component.html ***!
          \******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n  <ng-template #createWorkoutModal let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Create Workout</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form #createWorkoutForm=\"ngForm\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"inputWorkoutName\">Workout Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputWorkoutName\" name=\"name\" #inputWorkoutName=\"ngModel\"\n                   required\n                   [ngClass]=\"{'is-valid': inputWorkoutName.valid && inputWorkoutName.touched,\n                               'is-invalid': inputWorkoutName.invalid && inputWorkoutName.touched}\"\n                   [(ngModel)]=\"workoutBindingModel.name\">\n\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"inputStatus\">Status</label>\n            <select id=\"inputStatus\" name=\"status\" class=\"form-control\" #inputWorkoutStatus\n                    [(ngModel)]=\"workoutBindingModel.isPublic\">\n              <option [ngValue]=\"true\" selected>Public</option>\n              <option [ngValue]=\"false\">Private</option>\n            </select>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" [disabled]=\"createWorkoutForm.invalid\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Save</button>\n    </div>\n  </ng-template>\n\n  <div class=\"jumbotron\">\n    <img src=\"assets/static/images/logo.png\" height=\"300px\" class=\"d-inline-block align-center\" alt=\"\">\n    <h1 class=\"display-4\">My Workouts</h1>\n    <div class=\"container pt-4\">\n      <div class=\"row\">\n        <div class=\"col-lg-4 mx-auto\">\n          <h2>Workouts</h2>\n          <hr/>\n          <div class=\"list-group\" *ngIf=\"workouts && workouts.length\">\n            <button type=\"button\" class=\"list-group-item list-group-item-action\"\n                    [ngClass]=\"{'active': selectedWorkoutId === workout.id}\"\n                    (click)=\"onWorkoutButtonClick(workout.id)\"\n                    *ngFor=\"let workout of workouts\">\n              {{workout.name}}\n            </button>\n          </div>\n\n          <h5 *ngIf=\"!workouts || !workouts.length\">You don't have any created workouts.</h5>\n\n\n          <button type=\"button\" class=\"btn btn-success mt-3\" (click)=\"open(createWorkoutModal)\">Create Workout</button>\n        </div>\n        <div class=\"col-lg-8 mx-auto\">\n          <h2>Selected Workout</h2>\n          <hr/>\n          <router-outlet (deactivate)=\"onRouterOutletDeactivate()\" (activate)=\"onRouterOutletActivate()\"></router-outlet>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout/my-workouts/no-selected-workout/no-selected-workout.component.html": 
        /*!**********************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout/my-workouts/no-selected-workout/no-selected-workout.component.html ***!
          \**********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h4>No selected workout.</h4>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout/my-workouts/selected-workout/selected-workout.component.html": 
        /*!****************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout/my-workouts/selected-workout/selected-workout.component.html ***!
          \****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"selected-workout\">\n\n    <ng-template #showWorkoutsSetsModal let-modal>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Sets per Muscle Group</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n\n        <div class=\"modal-body\">\n            <div class=\"row align-middle\">\n                <ngx-charts-bar-horizontal\n                        [view]=\"[800, exercisesSets.length < 8 ? 200 : 400]\"\n                        [animations]=\"true\"\n                        [xAxis]=\"true\"\n                        [yAxis]=\"true\"\n                        [results]=\"exercisesSets\"\n                        legendTitle=\"Muscle Groups\"\n                        [legend]=\"true\"\n                        [showDataLabel]=\"false\"\n                        [showXAxisLabel]=\"false\"\n                        [showGridLines]=\"true\"\n                        [showYAxisLabel]=\"false\"\n                        [gradient]=\"true\"\n                        [noBarWhenZero]=\"true\"\n                        [roundDomains]=\"true\"\n                        [roundEdges]=\"true\"\n                        [tooltipDisabled]=\"false\"\n                        [trimYAxisTicks]=\"false\"\n                        [customColors]=\"customColors\"\n                >\n\n                </ngx-charts-bar-horizontal>\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Close</button>\n        </div>\n    </ng-template>\n\n    <form #editForm=\"ngForm\">\n    <h2 class=\"pt-3 font-weight-light\"  *ngIf=\"!editMode\">{{selectedWorkout.name}}</h2>\n    <div class=\"py-3 mx-auto col-5\"  *ngIf=\"editMode\"><input type=\"text\" value=\"{{editWorkoutBindingModel.name}}\" class=\"form-control form-control-lg text-center\"\n                                                                id=\"inputName\"\n                                                                name=\"inputName\" #inputName=\"ngModel\"\n                                                                required\n                                                                [ngClass]=\"{'is-valid': inputName.valid && inputName.touched,\n                         'is-invalid': inputName.invalid && inputName.touched}\" [(ngModel)]=\"editWorkoutBindingModel.name\"></div>\n    <h4 class=\"pb-3 font-weight-light\" *ngIf=\"!editMode && !selectedWorkout.isCopied\">\n        ({{selectedWorkout.isPublic ? 'Public' : 'Private'}})</h4>\n    <h4 class=\"pb-3 font-weight-light\" *ngIf=\"selectedWorkout.isCopied\">(Copy)</h4>\n    <div *ngIf=\"editMode && !selectedWorkout.isCopied\" class=\"pb-3 col-3 mx-auto\">\n        <select id=\"inputStatus\" name=\"status\" class=\"form-control\" #inputWorkoutStatus\n                [(ngModel)]=\"editWorkoutBindingModel.isPublic\">\n            <option [ngValue]=\"true\">Public</option>\n            <option [ngValue]=\"false\">Private</option>\n        </select>\n    </div>\n    <button *ngIf=\"!editMode\" type=\"button\" routerLink=\"/workouts/details/{{workoutId}}\"\n            class=\"btn btn-dark mb-2\"><i class=\"fas fa-share-alt\"></i></button>\n\n\n        <table class=\"table table-striped table-hover\">\n            <thead>\n            <tr *ngIf=\"selectedWorkout.exercises && !selectedWorkout.exercises.length\">\n                <td colspan=\"5\" class=\"py-auto\"><h5>No added exercises in this workout.</h5></td>\n            </tr>\n            <tr *ngIf=\"selectedWorkout.exercises && selectedWorkout.exercises.length\">\n                <th scope=\"col\" style=\"width: 10%\">Order</th>\n                <th scope=\"col\" style=\"width: 30%\">Exercise name</th>\n                <th scope=\"col\" style=\"width: 20%\">Reps</th>\n                <th scope=\"col\" style=\"width: 20%\">Sets</th>\n                <th scope=\"col\" style=\"width: 20%;\"></th>\n\n            </tr>\n            </thead>\n            <tbody *ngIf=\"!editMode && selectedWorkout.exercises && selectedWorkout.exercises.length\">\n\n            <tr *ngFor=\"let exercise of selectedWorkout.exercises\">\n                <td class=\"align-middle\">{{exercise.orderIndex}}</td>\n                <td class=\"align-middle\">{{exercise.exercise.name}}</td>\n                <td class=\"align-middle\">{{exercise.reps}}</td>\n                <td class=\"align-middle\">{{exercise.sets}}</td>\n                <td>\n                    <button type=\"button\" routerLink=\"/exercises/details/{{exercise.exercise.id}}\"\n                            class=\"btn btn-primary mr-2\"><i class=\"far fa-eye\"></i></button>\n                </td>\n            </tr>\n            </tbody>\n            <tbody cdkDropList (cdkDropListDropped)=\"onDrop($event)\" *ngIf=\"editMode\">\n\n            <tr *ngFor=\"let exercise of editWorkoutBindingModel.exercises\" [id]=\"exercise.orderIndex\" cdkDrag>\n                <td class=\"align-middle\">{{exercise.orderIndex}}</td>\n                <td class=\"align-middle\">{{exercise.exercise.name}}</td>\n\n                <td class=\"align-middle\">\n                    <input type=\"number\" value=\"{{exercise.reps}}\" class=\"form-control\" id=\"inputReps\" name=\"inputReps-{{exercise.orderIndex}}\"\n                           #inputReps=\"ngModel\" [(ngModel)]=\"exercise.reps\"\n                           required\n                           pattern=\"^[1-9][0-9]*\"\n                           min=\"1\"\n                           [ngClass]=\"{'is-valid': inputReps.valid && inputReps.touched,\n                         'is-invalid': inputReps.invalid && inputReps.touched}\"></td>\n\n                <td class=\"align-middle\"><input type=\"number\" value=\"{{exercise.sets}}\" class=\"form-control\"\n                                                id=\"inputSets\"\n                                                name=\"inputSets-{{exercise.orderIndex}}\" #inputSets=\"ngModel\"\n                                                required\n                                                pattern=\"^[1-9][0-9]*\"\n                                                min=\"1\"\n                                                [ngClass]=\"{'is-valid': inputSets.valid && inputSets.touched,\n                         'is-invalid': inputSets.invalid && inputSets.touched}\" [(ngModel)]=\"exercise.sets\"></td>\n                <td>\n                    <button type=\"button\" routerLink=\"/exercises/details/{{exercise.exercise.id}}\"\n                            class=\"btn btn-primary mr-2\"><i class=\"far fa-eye\"></i></button>\n                    <button type=\"button\" (click)=\"onWorkoutExerciseDeleteHandler(selectedWorkout.id, exercise.id)\"\n                            class=\"btn btn-danger\"><i class=\"far fa-trash-alt\"></i></button>\n                </td>\n                <div *cdkDragPreview class=\"text-center\">\n                </div>\n\n            </tr>\n            </tbody>\n        </table>\n    </form>\n\n    <div class=\"workout-actions\" *ngIf=\"!editMode\">\n\n        <button *ngIf=\"selectedWorkout.exercises && selectedWorkout.exercises.length\" type=\"button\"\n                class=\"btn btn-secondary my-3 mx-2\" (click)=\"open(showWorkoutsSetsModal)\">Show Sets per Muscle Group\n        </button>\n\n        <button type=\"link\" class=\"btn btn-primary my-3 mx-2\" routerLink=\"/exercises/all\">Add Exercise</button>\n\n        <button type=\"button\"\n                class=\"btn btn-success my-3 mx-2\" routerLink=\"./\" [queryParams]=\"{'edit': 1}\">Edit\n        </button>\n\n        <button type=\"button\" (click)=\"onWorkoutDeleteHandler(selectedWorkout.id)\" class=\"btn btn-danger my-3 mx-2\">\n            Delete\n        </button>\n    </div>\n\n\n    <div class=\"workout-actions-edit\" *ngIf=\"editMode\">\n        <button type=\"link\" [disabled]=\"editForm.invalid\" class=\"btn btn-success my-3 mx-2\" (click)=\"onSaveHandler()\">Save</button>\n        <button type=\"link\" class=\"btn btn-danger my-3 mx-2\" routerLink=\"./\">Cancel</button>\n    </div>\n\n\n</div>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout/workout-card/workout-card.component.html": 
        /*!********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout/workout-card/workout-card.component.html ***!
          \********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card d-inline-flex\">\n    <div class=\"card-body\">\n        <h3 class=\"card-title\">{{workout.name}}</h3>\n        <hr/>\n        <h4 class=\"font-weight-light pb-2\">Creator: <a class=\"card-link\" routerLink=\"/profile/{{workout.creator.username}}\">{{workout.creator.username}}</a></h4>\n        <hr/>\n        <div class=\"row\">\n            <h4 class=\"col-7 font-weight-light my-auto p-1\">{{workout.likesCount}} Likes</h4>\n            <button class=\"button button-like my-auto\" (click)=\"onLikeHandler()\" [ngClass]=\"{'liked': workout.isLiked}\" type=\"button\">\n                <i class=\"fa fa-heart\"></i>\n                <span>Like</span>\n            </button>\n        </div>\n\n        <hr/>\n        <div class=\"table-wrapper pb-5 pr-3 pl-1\">\n            <table class=\"table table-striped table-hover\">\n                <thead>\n                <tr *ngIf=\"workout.exercises && !workout.exercises.length\">\n                    <td colspan=\"5\" class=\"py-auto\"><h5>No added exercises in this workout.</h5></td>\n                </tr>\n                <tr *ngIf=\"workout.exercises && workout.exercises.length\">\n                    <th scope=\"col\" style=\"width: 10%\">Order</th>\n                    <th scope=\"col\" style=\"width: 30%\">Exercise</th>\n                    <th scope=\"col\" style=\"width: 20%\">Reps</th>\n                    <th scope=\"col\" style=\"width: 20%\">Sets</th>\n                </tr>\n                </thead>\n                <tbody>\n\n                <tr *ngFor=\"let exercise of workout.exercises\">\n                    <td class=\"align-middle\">{{exercise.orderIndex}}</td>\n                    <td class=\"align-middle\">{{exercise.exercise.name}}</td>\n                    <td class=\"align-middle\">{{exercise.reps}}</td>\n                    <td class=\"align-middle\">{{exercise.sets}}</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n            <hr class=\"mb-5\"/>\n            <div class=\"buttons-wrapper left\">\n                <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"copyToMyWorkoutsHandler(workout.id)\">Copy to\n                    My Workouts\n                </button>\n            </div>\n            <div class=\"buttons-wrapper right\">\n                <a routerLink=\"/workouts/details/{{workout.id}}\" class=\"btn btn-sm btn-info\">Details</a>\n            </div>\n\n    </div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout/workout-details/workout-details.component.html": 
        /*!**************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout/workout-details/workout-details.component.html ***!
          \**************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n    <ng-template #copyWorkoutModal let-modal>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Copy Workout To My Workouts</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <form #copyWorkoutForm=\"ngForm\">\n                <h5 class=\"text-center\">{{workout.name}}</h5>\n                <table class=\"table table-striped table-hover\">\n                    <thead>\n                    <tr *ngIf=\"workout.exercises && !workout.exercises.length\">\n                        <td colspan=\"5\" class=\"py-auto\"><h5>No added exercises in this workout.</h5></td>\n                    </tr>\n                    <tr *ngIf=\"workout.exercises && workout.exercises.length\">\n                        <th scope=\"col\" style=\"width: 10%\">Order</th>\n                        <th scope=\"col\" style=\"width: 30%\">Exercise</th>\n                        <th scope=\"col\" style=\"width: 20%\">Reps</th>\n                        <th scope=\"col\" style=\"width: 20%\">Sets</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n\n                    <tr *ngFor=\"let exercise of workout.exercises\">\n                        <td class=\"align-middle\">{{exercise.orderIndex}}</td>\n                        <td class=\"align-middle\">{{exercise.exercise.name}}</td>\n                        <td class=\"align-middle\">{{exercise.reps}}</td>\n                        <td class=\"align-middle\">{{exercise.sets}}</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </form>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Copy to My Workouts</button>\n        </div>\n    </ng-template>\n\n\n    <div class=\"jumbotron\">\n        <img src=\"assets/static/images/logo.png\" height=\"300px\" class=\"d-inline-block align-center\" alt=\"\">\n        <h1 class=\"display-4\">Workout Details</h1>\n        <hr class=\"my-2\"/>\n        <div class=\"container pt-4\">\n            <div class=\"row\">\n                <div class=\"workout-details col-lg-9 mx-auto\">\n                    <div class=\"exercise-intro mt-4\">\n                        <h2 class=\"display-4 d-block mx-auto font-weight-bolder\">{{workout.name}}</h2>\n                    </div>\n\n                    <hr class=\"my-4\"/>\n\n                    <h3 class=\"font-weight-light pb-3\">Creator: <a class=\"card-link\"\n                                                                   routerLink=\"/profile/{{workout.creator.username}}\">{{workout.creator.username}}</a>\n                    </h3>\n\n                    <hr/>\n                    <div class=\"row mb-3\">\n                        <h4 class=\"col-7 font-weight-light my-auto p-1\">{{workout.likesCount}} Likes</h4>\n                        <button class=\"button button-like my-auto\" (click)=\"onLikeHandler()\"\n                                [ngClass]=\"{'liked': workout.isLiked}\" type=\"button\">\n                            <i class=\"fa fa-heart\"></i>\n                            <span>Like</span>\n                        </button>\n                    </div>\n\n                    <div *ngIf=\"workout.exercises && workout.exercises.length\">\n                        <table class=\"table table-striped table-hover\">\n                            <thead>\n                            <tr>\n                                <th scope=\"col\" style=\"width: 10%\">Order</th>\n                                <th scope=\"col\" style=\"width: 30%\">Exercise name</th>\n                                <th scope=\"col\" style=\"width: 20%\">Reps</th>\n                                <th scope=\"col\" style=\"width: 20%\">Sets</th>\n                                <th scope=\"col\" style=\"width: 20%;\"></th>\n\n                            </tr>\n                            </thead>\n                            <tbody *ngIf=\"workout.exercises && workout.exercises.length\">\n\n                            <tr *ngFor=\"let exercise of workout.exercises\">\n                                <td class=\"align-middle\">{{exercise.orderIndex}}</td>\n                                <td class=\"align-middle\">{{exercise.exercise.name}}</td>\n                                <td class=\"align-middle\">{{exercise.reps}}</td>\n                                <td class=\"align-middle\">{{exercise.sets}}</td>\n                                <td>\n                                    <button type=\"button\" routerLink=\"/exercises/details/{{exercise.exercise.id}}\"\n                                            class=\"btn btn-primary mr-2\"><i class=\"far fa-eye\"></i></button>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n\n                        <h3 class=\"mx-auto font-weight-light\">Sets per Muscle Group</h3>\n\n                        <div class=\"chart-container row align-middle my-4\">\n                            <ngx-charts-bar-horizontal\n                                    [view]=\"[800, exercisesSets.length < 8 ? 250 : 500]\"\n                                    [animations]=\"true\"\n                                    [xAxis]=\"true\"\n                                    [yAxis]=\"true\"\n                                    [results]=\"exercisesSets\"\n                                    legendTitle=\"Muscle Groups\"\n                                    [legend]=\"true\"\n                                    [showDataLabel]=\"false\"\n                                    [showXAxisLabel]=\"false\"\n                                    [showGridLines]=\"true\"\n                                    [showYAxisLabel]=\"false\"\n                                    [gradient]=\"true\"\n                                    [noBarWhenZero]=\"true\"\n                                    [roundDomains]=\"true\"\n                                    [roundEdges]=\"true\"\n                                    [tooltipDisabled]=\"false\"\n                                    [trimYAxisTicks]=\"false\"\n                                    [customColors]=\"customColors\"\n                            >\n\n                            </ngx-charts-bar-horizontal>\n                        </div>\n                    </div>\n\n                    <h3 *ngIf=\"workout.exercises && !workout.exercises.length\">No added exercises to this workout.</h3>\n\n                    <div class=\"buttons col-12 mx-auto p-3\">\n                        <button type=\"button\" class=\"btn btn-success\" (click)=\"open(copyWorkoutModal)\">\n                            Copy to My Workouts\n                        </button>\n                    </div>\n\n\n                </div>\n\n                <div class=\"workout-details col-lg-9 mx-auto row mt-5\">\n\n                    <h2 class=\"d-block py-5 mx-auto font-weight-bolder\">Comments Section</h2>\n\n                    <div class=\"col-12\">\n                        <div class=\"comment-wrapper\">\n                            <div class=\"panel panel-info\">\n                                <div class=\"panel-body\">\n                                    <form #postForm=\"ngForm\">\n                                        <textarea class=\"form-control\" placeholder=\"Write a comment...\" #comment=\"ngModel\"\n                                                  name=\"comment\"\n                                                  rows=\"3\" [(ngModel)]=\"commentBindingModel.comment\" required></textarea>\n                                    </form>\n                                    <br>\n                                    <button type=\"button\" class=\"btn btn-info\" [disabled]=\"comment.invalid\" (click)=\"onPostHandler()\">Post</button>\n                                    <div class=\"clearfix\"></div>\n                                    <hr>\n                                    <ul class=\"media-list\">\n                                        <li *ngIf=\"workoutComments && !workoutComments.length\">\n                                            <h4>\n                                                No comments.\n                                            </h4>\n                                        </li>\n                                        <li class=\"media\" *ngFor=\"let comment of workoutComments\">\n                                            <div class=\"text-center row\">\n                                                <div class=\"col-12 text-center\">\n                                                    <a routerLink=\"/profile/{{comment.username}}\" class=\"d-block\">\n                                                        <img src=\"{{comment.profilePictureURL}}\" alt=\"Profile Picture\">\n                                                    </a>\n                                                    <a routerLink=\"/profile/{{comment.username}}\" class=\"d-block\">\n                                                        <strong class=\"d-block text-success\">@{{comment.username}}</strong>\n                                                    </a>\n\n                                                </div>\n\n                                            </div>\n\n                                            <div class=\"media-body\">\n                                <span class=\"text-muted float-right\">\n                                    <small class=\"text-muted\">{{comment.postedOn | commentDate}}</small>\n                                </span>\n\n                                                <button *ngIf=\"isLoggedInUserModerator || workout.creator.username === loggedInUserUsername || comment.username === loggedInUserUsername\" type=\"button\" (click)=\"onDeleteCommentHandler(comment.id)\"\n                                                        class=\"btn btn-danger delete-btn ml-3 comment-delete-btn\"><i class=\"far fa-trash-alt\"></i></button>\n                                                <h4 class=\"mt-3 comment mr-2 font font-weight-light\">\n                                                   {{comment.comment}}\n                                                </h4>\n                                            </div>\n                                            <div class=\"clearfix\"></div>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n\n\n            </div>\n\n        </div>\n\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/main/webapp/app/admin-panel/admin-panel.component.css": 
        /*!*******************************************************************!*\
          !*** ./src/main/webapp/app/admin-panel/admin-panel.component.css ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".results-container {\r\n    background: rgba(255, 255, 255, 0.6);\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4tcGFuZWwvYWRtaW4tcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztJQUNwQyx1Q0FBdUM7QUFDM0MiLCJmaWxlIjoic3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi1wYW5lbC9hZG1pbi1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdHMtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/admin-panel/admin-panel.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/main/webapp/app/admin-panel/admin-panel.component.ts ***!
          \******************************************************************/
        /*! exports provided: AdminPanelComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelComponent", function () { return AdminPanelComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.service */ "./src/main/webapp/app/admin-panel/admin.service.ts");
            /* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/main/webapp/app/auth/auth.service.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var AdminPanelComponent = /** @class */ (function () {
                function AdminPanelComponent(adminService, authService, titleService) {
                    this.adminService = adminService;
                    this.authService = authService;
                    this.titleService = titleService;
                    this.page = 1;
                    this.pageSize = 6;
                    this.titleService.setTitle('FitBook' + '- Admin Panel');
                }
                AdminPanelComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.loading = true;
                    this.adminService.fetchAllUsers().subscribe(function (users) {
                        _this.users = users;
                        _this.loading = false;
                    });
                    this.authService.user.subscribe(function (user) {
                        _this.loggedUserRole = user.role;
                    });
                };
                AdminPanelComponent.prototype.onPromoteHandler = function (userId) {
                    var _this = this;
                    this.loading = true;
                    this.adminService.promoteUser(userId)
                        .subscribe(function (data) {
                        _this.adminService.fetchAllUsers().subscribe(function (users) {
                            _this.users = users;
                            _this.loading = false;
                        });
                    });
                };
                AdminPanelComponent.prototype.onDemoteHandler = function (userId) {
                    var _this = this;
                    this.loading = true;
                    this.adminService.demoteUser(userId)
                        .subscribe(function (data) {
                        _this.adminService.fetchAllUsers().subscribe(function (users) {
                            _this.users = users;
                            _this.loading = false;
                        });
                    });
                };
                return AdminPanelComponent;
            }());
            AdminPanelComponent.ctorParameters = function () { return [
                { type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
                { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
            ]; };
            AdminPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admin-panel',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/admin-panel/admin-panel.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-panel.component.css */ "./src/main/webapp/app/admin-panel/admin-panel.component.css")).default]
                })
            ], AdminPanelComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/admin-panel/admin.service.ts": 
        /*!**********************************************************!*\
          !*** ./src/main/webapp/app/admin-panel/admin.service.ts ***!
          \**********************************************************/
        /*! exports provided: AdminService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function () { return AdminService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-settings */ "./src/main/webapp/app/app-settings.ts");
            var AdminService = /** @class */ (function () {
                function AdminService(http) {
                    this.http = http;
                    this.applicationTypeHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'text/plain');
                }
                AdminService.prototype.fetchAllUsers = function () {
                    return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/users/all");
                };
                AdminService.prototype.promoteUser = function (userId) {
                    return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/users/promote", null, { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('id', userId) });
                };
                AdminService.prototype.demoteUser = function (userId) {
                    return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/users/demote", null, { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('id', userId) });
                };
                return AdminService;
            }());
            AdminService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root',
                })
            ], AdminService);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/app-routing.module.ts": 
        /*!***************************************************!*\
          !*** ./src/main/webapp/app/app-routing.module.ts ***!
          \***************************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "./src/main/webapp/app/index/index.component.ts");
            /* harmony import */ var _exercise_all_exercises_all_exercises_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exercise/all-exercises/all-exercises.component */ "./src/main/webapp/app/exercise/all-exercises/all-exercises.component.ts");
            /* harmony import */ var _exercise_create_exercise_create_exercise_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exercise/create-exercise/create-exercise.component */ "./src/main/webapp/app/exercise/create-exercise/create-exercise.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/main/webapp/app/home/home.component.ts");
            /* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/register/register.component */ "./src/main/webapp/app/user/register/register.component.ts");
            /* harmony import */ var _user_signin_signin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/signin/signin.component */ "./src/main/webapp/app/user/signin/signin.component.ts");
            /* harmony import */ var _home_edit_fitness_profile_edit_fitness_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/edit-fitness-profile/edit-fitness-profile.component */ "./src/main/webapp/app/home/edit-fitness-profile/edit-fitness-profile.component.ts");
            /* harmony import */ var _workout_my_workouts_my_workouts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./workout/my-workouts/my-workouts.component */ "./src/main/webapp/app/workout/my-workouts/my-workouts.component.ts");
            /* harmony import */ var _workout_my_workouts_no_selected_workout_no_selected_workout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./workout/my-workouts/no-selected-workout/no-selected-workout.component */ "./src/main/webapp/app/workout/my-workouts/no-selected-workout/no-selected-workout.component.ts");
            /* harmony import */ var _workout_my_workouts_selected_workout_selected_workout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./workout/my-workouts/selected-workout/selected-workout.component */ "./src/main/webapp/app/workout/my-workouts/selected-workout/selected-workout.component.ts");
            /* harmony import */ var _exercise_exercise_details_exercise_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./exercise/exercise-details/exercise-details.component */ "./src/main/webapp/app/exercise/exercise-details/exercise-details.component.ts");
            /* harmony import */ var _workout_all_workouts_all_workouts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./workout/all-workouts/all-workouts.component */ "./src/main/webapp/app/workout/all-workouts/all-workouts.component.ts");
            /* harmony import */ var _user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/user-profile/user-profile.component */ "./src/main/webapp/app/user/user-profile/user-profile.component.ts");
            /* harmony import */ var _workout_workout_details_workout_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./workout/workout-details/workout-details.component */ "./src/main/webapp/app/workout/workout-details/workout-details.component.ts");
            /* harmony import */ var _workout_plan_my_workout_plans_my_workout_plans_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./workout-plan/my-workout-plans/my-workout-plans.component */ "./src/main/webapp/app/workout-plan/my-workout-plans/my-workout-plans.component.ts");
            /* harmony import */ var _workout_plan_my_workout_plans_no_selected_workout_plan_no_selected_workout_plan_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./workout-plan/my-workout-plans/no-selected-workout-plan/no-selected-workout-plan.component */ "./src/main/webapp/app/workout-plan/my-workout-plans/no-selected-workout-plan/no-selected-workout-plan.component.ts");
            /* harmony import */ var _workout_plan_my_workout_plans_selected_workout_plan_selected_workout_plan_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./workout-plan/my-workout-plans/selected-workout-plan/selected-workout-plan.component */ "./src/main/webapp/app/workout-plan/my-workout-plans/selected-workout-plan/selected-workout-plan.component.ts");
            /* harmony import */ var _workout_plan_all_workout_plans_all_workout_plans_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./workout-plan/all-workout-plans/all-workout-plans.component */ "./src/main/webapp/app/workout-plan/all-workout-plans/all-workout-plans.component.ts");
            /* harmony import */ var _workout_plan_workout_plan_details_workout_plan_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./workout-plan/workout-plan-details/workout-plan-details.component */ "./src/main/webapp/app/workout-plan/workout-plan-details/workout-plan-details.component.ts");
            /* harmony import */ var _food_search_food_search_food_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./food/search-food/search-food.component */ "./src/main/webapp/app/food/search-food/search-food.component.ts");
            /* harmony import */ var _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin-panel/admin-panel.component */ "./src/main/webapp/app/admin-panel/admin-panel.component.ts");
            /* harmony import */ var _food_food_details_food_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./food/food-details/food-details.component */ "./src/main/webapp/app/food/food-details/food-details.component.ts");
            /* harmony import */ var _food_all_foods_all_foods_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./food/all-foods/all-foods.component */ "./src/main/webapp/app/food/all-foods/all-foods.component.ts");
            /* harmony import */ var _meal_my_meals_my_meals_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./meal/my-meals/my-meals.component */ "./src/main/webapp/app/meal/my-meals/my-meals.component.ts");
            /* harmony import */ var _meal_my_meals_no_selected_meal_no_selected_meal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./meal/my-meals/no-selected-meal/no-selected-meal.component */ "./src/main/webapp/app/meal/my-meals/no-selected-meal/no-selected-meal.component.ts");
            /* harmony import */ var _meal_my_meals_selected_meal_selected_meal_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./meal/my-meals/selected-meal/selected-meal.component */ "./src/main/webapp/app/meal/my-meals/selected-meal/selected-meal.component.ts");
            /* harmony import */ var _meal_all_meals_all_meals_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./meal/all-meals/all-meals.component */ "./src/main/webapp/app/meal/all-meals/all-meals.component.ts");
            /* harmony import */ var _meal_meal_details_meal_details_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./meal/meal-details/meal-details.component */ "./src/main/webapp/app/meal/meal-details/meal-details.component.ts");
            /* harmony import */ var _diet_plan_my_diet_plans_my_diet_plans_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./diet-plan/my-diet-plans/my-diet-plans.component */ "./src/main/webapp/app/diet-plan/my-diet-plans/my-diet-plans.component.ts");
            /* harmony import */ var _diet_plan_my_diet_plans_no_selected_diet_plan_no_selected_diet_plan_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./diet-plan/my-diet-plans/no-selected-diet-plan/no-selected-diet-plan.component */ "./src/main/webapp/app/diet-plan/my-diet-plans/no-selected-diet-plan/no-selected-diet-plan.component.ts");
            /* harmony import */ var _diet_plan_my_diet_plans_selected_diet_plan_selected_diet_plan_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./diet-plan/my-diet-plans/selected-diet-plan/selected-diet-plan.component */ "./src/main/webapp/app/diet-plan/my-diet-plans/selected-diet-plan/selected-diet-plan.component.ts");
            /* harmony import */ var _diet_plan_all_diet_plans_all_diet_plans_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./diet-plan/all-diet-plans/all-diet-plans.component */ "./src/main/webapp/app/diet-plan/all-diet-plans/all-diet-plans.component.ts");
            /* harmony import */ var _diet_plan_diet_plan_details_diet_plan_details_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./diet-plan/diet-plan-details/diet-plan-details.component */ "./src/main/webapp/app/diet-plan/diet-plan-details/diet-plan-details.component.ts");
            /* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/main/webapp/app/auth/auth.guard.ts");
            /* harmony import */ var _home_logged_guard__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./home/logged.guard */ "./src/main/webapp/app/home/logged.guard.ts");
            /* harmony import */ var _auth_moderator_guard__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./auth/moderator.guard */ "./src/main/webapp/app/auth/moderator.guard.ts");
            /* harmony import */ var _auth_admin_guard__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./auth/admin.guard */ "./src/main/webapp/app/auth/admin.guard.ts");
            /* harmony import */ var _home_fitness_profile_guard__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./home/fitness-profile.guard */ "./src/main/webapp/app/home/fitness-profile.guard.ts");
            /* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/main/webapp/app/not-found/not-found.component.ts");
            var appRoutes = [
                { path: '', pathMatch: 'full', component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"], canActivate: [_home_logged_guard__WEBPACK_IMPORTED_MODULE_37__["LoggedGuard"]] },
                { path: 'exercises/all', component: _exercise_all_exercises_all_exercises_component__WEBPACK_IMPORTED_MODULE_4__["AllExercisesComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"], _home_fitness_profile_guard__WEBPACK_IMPORTED_MODULE_40__["FitnessProfileGuard"]] },
                { path: 'exercises/create', component: _exercise_create_exercise_create_exercise_component__WEBPACK_IMPORTED_MODULE_5__["CreateExerciseComponent"], canActivate: [_auth_moderator_guard__WEBPACK_IMPORTED_MODULE_38__["ModeratorGuard"], _home_fitness_profile_guard__WEBPACK_IMPORTED_MODULE_40__["FitnessProfileGuard"]] },
                { path: 'exercises/details/:id', component: _exercise_exercise_details_exercise_details_component__WEBPACK_IMPORTED_MODULE_13__["ExerciseDetailsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"], _home_fitness_profile_guard__WEBPACK_IMPORTED_MODULE_40__["FitnessProfileGuard"]] },
                { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"]] },
                { path: 'register', component: _user_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], canActivate: [_home_logged_guard__WEBPACK_IMPORTED_MODULE_37__["LoggedGuard"]] },
                { path: 'signin', component: _user_signin_signin_component__WEBPACK_IMPORTED_MODULE_8__["SigninComponent"], canActivate: [_home_logged_guard__WEBPACK_IMPORTED_MODULE_37__["LoggedGuard"]] },
                { path: 'fitness-profile/edit', component: _home_edit_fitness_profile_edit_fitness_profile_component__WEBPACK_IMPORTED_MODULE_9__["EditFitnessProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"], _home_fitness_profile_guard__WEBPACK_IMPORTED_MODULE_40__["FitnessProfileGuard"]] },
                {
                    path: 'my-workouts', component: _workout_my_workouts_my_workouts_component__WEBPACK_IMPORTED_MODULE_10__["MyWorkoutsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"], _home_fitness_profile_guard__WEBPACK_IMPORTED_MODULE_40__["FitnessProfileGuard"]], children: [
                        { path: '', component: _workout_my_workouts_no_selected_workout_no_selected_workout_component__WEBPACK_IMPORTED_MODULE_11__["NoSelectedWorkoutComponent"] },
                        { path: ':id', component: _workout_my_workouts_selected_workout_selected_workout_component__WEBPACK_IMPORTED_MODULE_12__["SelectedWorkoutComponent"] },
                    ]
                }, {
                    path: 'my-workout-plans', component: _workout_plan_my_workout_plans_my_workout_plans_component__WEBPACK_IMPORTED_MODULE_17__["MyWorkoutPlansComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"], _home_fitness_profile_guard__WEBPACK_IMPORTED_MODULE_40__["FitnessProfileGuard"]], children: [
                        { path: '', component: _workout_plan_my_workout_plans_no_selected_workout_plan_no_selected_workout_plan_component__WEBPACK_IMPORTED_MODULE_18__["NoSelectedWorkoutPlanComponent"] },
                        { path: ':id', component: _workout_plan_my_workout_plans_selected_workout_plan_selected_workout_plan_component__WEBPACK_IMPORTED_MODULE_19__["SelectedWorkoutPlanComponent"] },
                    ]
                }, {
                    path: 'my-meals', component: _meal_my_meals_my_meals_component__WEBPACK_IMPORTED_MODULE_26__["MyMealsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"], _home_fitness_profile_guard__WEBPACK_IMPORTED_MODULE_40__["FitnessProfileGuard"]], children: [
                        { path: '', component: _meal_my_meals_no_selected_meal_no_selected_meal_component__WEBPACK_IMPORTED_MODULE_27__["NoSelectedMealComponent"] },
                        { path: ':id', component: _meal_my_meals_selected_meal_selected_meal_component__WEBPACK_IMPORTED_MODULE_28__["SelectedMealComponent"] },
                    ]
                }, {
                    path: 'my-diet-plans', component: _diet_plan_my_diet_plans_my_diet_plans_component__WEBPACK_IMPORTED_MODULE_31__["MyDietPlansComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"], _home_fitness_profile_guard__WEBPACK_IMPORTED_MODULE_40__["FitnessProfileGuard"]], children: [
                        { path: '', component: _diet_plan_my_diet_plans_no_selected_diet_plan_no_selected_diet_plan_component__WEBPACK_IMPORTED_MODULE_32__["NoSelectedDietPlanComponent"] },
                        { path: ':id', component: _diet_plan_my_diet_plans_selected_diet_plan_selected_diet_plan_component__WEBPACK_IMPORTED_MODULE_33__["SelectedDietPlanComponent"] },
                    ]
                },
                { path: 'workouts/all', component: _workout_all_workouts_all_workouts_component__WEBPACK_IMPORTED_MODULE_14__["AllWorkoutsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"], _home_fitness_profile_guard__WEBPACK_IMPORTED_MODULE_40__["FitnessProfileGuard"]] },
                { path: 'workouts/details/:id', component: _workout_workout_details_workout_details_component__WEBPACK_IMPORTED_MODULE_16__["WorkoutDetailsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"], _home_fitness_profile_guard__WEBPACK_IMPORTED_MODULE_40__["FitnessProfileGuard"]] },
                { path: 'workout-plans/all', component: _workout_plan_all_workout_plans_all_workout_plans_component__WEBPACK_IMPORTED_MODULE_20__["AllWorkoutPlansComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"], _home_fitness_profile_guard__WEBPACK_IMPORTED_MODULE_40__["FitnessProfileGuard"]] },
                { path: 'workout-plans/details/:id', component: _workout_plan_workout_plan_details_workout_plan_details_component__WEBPACK_IMPORTED_MODULE_21__["WorkoutPlanDetailsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"], _home_fitness_profile_guard__WEBPACK_IMPORTED_MODULE_40__["FitnessProfileGuard"]] },
                { path: 'meals/all', component: _meal_all_meals_all_meals_component__WEBPACK_IMPORTED_MODULE_29__["AllMealsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"], _home_fitness_profile_guard__WEBPACK_IMPORTED_MODULE_40__["FitnessProfileGuard"]] },
                { path: 'meals/details/:id', component: _meal_meal_details_meal_details_component__WEBPACK_IMPORTED_MODULE_30__["MealDetailsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"], _home_fitness_profile_guard__WEBPACK_IMPORTED_MODULE_40__["FitnessProfileGuard"]] },
                { path: 'diet-plans/all', component: _diet_plan_all_diet_plans_all_diet_plans_component__WEBPACK_IMPORTED_MODULE_34__["AllDietPlansComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"], _home_fitness_profile_guard__WEBPACK_IMPORTED_MODULE_40__["FitnessProfileGuard"]] },
                { path: 'diet-plans/details/:id', component: _diet_plan_diet_plan_details_diet_plan_details_component__WEBPACK_IMPORTED_MODULE_35__["DietPlanDetailsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"], _home_fitness_profile_guard__WEBPACK_IMPORTED_MODULE_40__["FitnessProfileGuard"]] },
                { path: 'foods/create', component: _food_search_food_search_food_component__WEBPACK_IMPORTED_MODULE_22__["SearchFoodComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"], _home_fitness_profile_guard__WEBPACK_IMPORTED_MODULE_40__["FitnessProfileGuard"]] },
                { path: 'foods/all', component: _food_all_foods_all_foods_component__WEBPACK_IMPORTED_MODULE_25__["AllFoodsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"], _home_fitness_profile_guard__WEBPACK_IMPORTED_MODULE_40__["FitnessProfileGuard"], _home_fitness_profile_guard__WEBPACK_IMPORTED_MODULE_40__["FitnessProfileGuard"]] },
                { path: 'foods/details/:id', component: _food_food_details_food_details_component__WEBPACK_IMPORTED_MODULE_24__["FoodDetailsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"], _home_fitness_profile_guard__WEBPACK_IMPORTED_MODULE_40__["FitnessProfileGuard"]] },
                { path: 'profile/:username', component: _user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_15__["UserProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"], _home_fitness_profile_guard__WEBPACK_IMPORTED_MODULE_40__["FitnessProfileGuard"]] },
                { path: 'admin-panel', component: _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_23__["AdminPanelComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_39__["AdminGuard"], _home_fitness_profile_guard__WEBPACK_IMPORTED_MODULE_40__["FitnessProfileGuard"]] },
                { path: '404', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_41__["NotFoundComponent"] },
                { path: '**', redirectTo: '/404' }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { scrollPositionRestoration: 'disabled' })],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/app-settings.ts": 
        /*!*********************************************!*\
          !*** ./src/main/webapp/app/app-settings.ts ***!
          \*********************************************/
        /*! exports provided: AppSettings */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function () { return AppSettings; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var AppSettings = /** @class */ (function () {
                function AppSettings() {
                }
                return AppSettings;
            }());
            AppSettings.API_ENDPOINT = 'http://localhost:8000';
            /***/ 
        }),
        /***/ "./src/main/webapp/app/app.component.css": 
        /*!***********************************************!*\
          !*** ./src/main/webapp/app/app.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/app.component.ts": 
        /*!**********************************************!*\
          !*** ./src/main/webapp/app/app.component.ts ***!
          \**********************************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/main/webapp/app/auth/auth.service.ts");
            /* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.service */ "./src/main/webapp/app/user/user.service.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(authService, userService) {
                    this.authService = authService;
                    this.userService = userService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.authService.autoLogin();
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/main/webapp/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/app.module.ts": 
        /*!*******************************************!*\
          !*** ./src/main/webapp/app/app.module.ts ***!
          \*******************************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/main/webapp/app/app.component.ts");
            /* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/main/webapp/app/navbar/navbar.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/main/webapp/app/home/home.component.ts");
            /* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index/index.component */ "./src/main/webapp/app/index/index.component.ts");
            /* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
            /* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/main/webapp/app/footer/footer.component.ts");
            /* harmony import */ var _exercise_create_exercise_create_exercise_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./exercise/create-exercise/create-exercise.component */ "./src/main/webapp/app/exercise/create-exercise/create-exercise.component.ts");
            /* harmony import */ var _navbar_guest_navbar_guest_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/guest-navbar/guest-navbar.component */ "./src/main/webapp/app/navbar/guest-navbar/guest-navbar.component.ts");
            /* harmony import */ var _navbar_logged_navbar_logged_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/logged-navbar/logged-navbar.component */ "./src/main/webapp/app/navbar/logged-navbar/logged-navbar.component.ts");
            /* harmony import */ var _food_food_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./food/food.component */ "./src/main/webapp/app/food/food.component.ts");
            /* harmony import */ var _exercise_all_exercises_all_exercises_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./exercise/all-exercises/all-exercises.component */ "./src/main/webapp/app/exercise/all-exercises/all-exercises.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _exercise_exercise_card_exercise_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./exercise/exercise-card/exercise-card.component */ "./src/main/webapp/app/exercise/exercise-card/exercise-card.component.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _get_constant_view_name_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./get-constant-view-name.pipe */ "./src/main/webapp/app/get-constant-view-name.pipe.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app-routing.module */ "./src/main/webapp/app/app-routing.module.ts");
            /* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/register/register.component */ "./src/main/webapp/app/user/register/register.component.ts");
            /* harmony import */ var _user_signin_signin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user/signin/signin.component */ "./src/main/webapp/app/user/signin/signin.component.ts");
            /* harmony import */ var _home_create_fitness_profile_create_fitness_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home/create-fitness-profile/create-fitness-profile.component */ "./src/main/webapp/app/home/create-fitness-profile/create-fitness-profile.component.ts");
            /* harmony import */ var _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth/auth-interceptor.service */ "./src/main/webapp/app/auth/auth-interceptor.service.ts");
            /* harmony import */ var _home_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./home/my-profile/my-profile.component */ "./src/main/webapp/app/home/my-profile/my-profile.component.ts");
            /* harmony import */ var _home_edit_fitness_profile_edit_fitness_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./home/edit-fitness-profile/edit-fitness-profile.component */ "./src/main/webapp/app/home/edit-fitness-profile/edit-fitness-profile.component.ts");
            /* harmony import */ var _workout_my_workouts_my_workouts_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./workout/my-workouts/my-workouts.component */ "./src/main/webapp/app/workout/my-workouts/my-workouts.component.ts");
            /* harmony import */ var _workout_my_workouts_no_selected_workout_no_selected_workout_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./workout/my-workouts/no-selected-workout/no-selected-workout.component */ "./src/main/webapp/app/workout/my-workouts/no-selected-workout/no-selected-workout.component.ts");
            /* harmony import */ var _workout_my_workouts_selected_workout_selected_workout_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./workout/my-workouts/selected-workout/selected-workout.component */ "./src/main/webapp/app/workout/my-workouts/selected-workout/selected-workout.component.ts");
            /* harmony import */ var _exercise_exercise_details_exercise_details_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./exercise/exercise-details/exercise-details.component */ "./src/main/webapp/app/exercise/exercise-details/exercise-details.component.ts");
            /* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./safe.pipe */ "./src/main/webapp/app/safe.pipe.ts");
            /* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/fesm2015/ngx-youtube-player.js");
            /* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
            /* harmony import */ var _workout_all_workouts_all_workouts_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./workout/all-workouts/all-workouts.component */ "./src/main/webapp/app/workout/all-workouts/all-workouts.component.ts");
            /* harmony import */ var _workout_workout_card_workout_card_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./workout/workout-card/workout-card.component */ "./src/main/webapp/app/workout/workout-card/workout-card.component.ts");
            /* harmony import */ var _user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./user/user-profile/user-profile.component */ "./src/main/webapp/app/user/user-profile/user-profile.component.ts");
            /* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _workout_workout_details_workout_details_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./workout/workout-details/workout-details.component */ "./src/main/webapp/app/workout/workout-details/workout-details.component.ts");
            /* harmony import */ var _workout_plan_my_workout_plans_my_workout_plans_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./workout-plan/my-workout-plans/my-workout-plans.component */ "./src/main/webapp/app/workout-plan/my-workout-plans/my-workout-plans.component.ts");
            /* harmony import */ var _workout_plan_my_workout_plans_no_selected_workout_plan_no_selected_workout_plan_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./workout-plan/my-workout-plans/no-selected-workout-plan/no-selected-workout-plan.component */ "./src/main/webapp/app/workout-plan/my-workout-plans/no-selected-workout-plan/no-selected-workout-plan.component.ts");
            /* harmony import */ var _workout_plan_my_workout_plans_selected_workout_plan_selected_workout_plan_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./workout-plan/my-workout-plans/selected-workout-plan/selected-workout-plan.component */ "./src/main/webapp/app/workout-plan/my-workout-plans/selected-workout-plan/selected-workout-plan.component.ts");
            /* harmony import */ var _workout_plan_all_workout_plans_all_workout_plans_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./workout-plan/all-workout-plans/all-workout-plans.component */ "./src/main/webapp/app/workout-plan/all-workout-plans/all-workout-plans.component.ts");
            /* harmony import */ var _workout_plan_workout_plan_details_workout_plan_details_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./workout-plan/workout-plan-details/workout-plan-details.component */ "./src/main/webapp/app/workout-plan/workout-plan-details/workout-plan-details.component.ts");
            /* harmony import */ var _workout_plan_workout_plan_card_workout_plan_card_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./workout-plan/workout-plan-card/workout-plan-card.component */ "./src/main/webapp/app/workout-plan/workout-plan-card/workout-plan-card.component.ts");
            /* harmony import */ var _food_search_food_search_food_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./food/search-food/search-food.component */ "./src/main/webapp/app/food/search-food/search-food.component.ts");
            /* harmony import */ var _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./admin-panel/admin-panel.component */ "./src/main/webapp/app/admin-panel/admin-panel.component.ts");
            /* harmony import */ var _food_food_details_food_details_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./food/food-details/food-details.component */ "./src/main/webapp/app/food/food-details/food-details.component.ts");
            /* harmony import */ var _meal_all_meals_all_meals_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./meal/all-meals/all-meals.component */ "./src/main/webapp/app/meal/all-meals/all-meals.component.ts");
            /* harmony import */ var _meal_my_meals_my_meals_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./meal/my-meals/my-meals.component */ "./src/main/webapp/app/meal/my-meals/my-meals.component.ts");
            /* harmony import */ var _meal_meal_card_meal_card_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./meal/meal-card/meal-card.component */ "./src/main/webapp/app/meal/meal-card/meal-card.component.ts");
            /* harmony import */ var _meal_meal_details_meal_details_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./meal/meal-details/meal-details.component */ "./src/main/webapp/app/meal/meal-details/meal-details.component.ts");
            /* harmony import */ var _food_all_foods_all_foods_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./food/all-foods/all-foods.component */ "./src/main/webapp/app/food/all-foods/all-foods.component.ts");
            /* harmony import */ var _food_food_card_food_card_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./food/food-card/food-card.component */ "./src/main/webapp/app/food/food-card/food-card.component.ts");
            /* harmony import */ var _meal_my_meals_selected_meal_selected_meal_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./meal/my-meals/selected-meal/selected-meal.component */ "./src/main/webapp/app/meal/my-meals/selected-meal/selected-meal.component.ts");
            /* harmony import */ var _meal_my_meals_no_selected_meal_no_selected_meal_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./meal/my-meals/no-selected-meal/no-selected-meal.component */ "./src/main/webapp/app/meal/my-meals/no-selected-meal/no-selected-meal.component.ts");
            /* harmony import */ var _diet_plan_all_diet_plans_all_diet_plans_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./diet-plan/all-diet-plans/all-diet-plans.component */ "./src/main/webapp/app/diet-plan/all-diet-plans/all-diet-plans.component.ts");
            /* harmony import */ var _diet_plan_my_diet_plans_my_diet_plans_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./diet-plan/my-diet-plans/my-diet-plans.component */ "./src/main/webapp/app/diet-plan/my-diet-plans/my-diet-plans.component.ts");
            /* harmony import */ var _diet_plan_diet_plan_details_diet_plan_details_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./diet-plan/diet-plan-details/diet-plan-details.component */ "./src/main/webapp/app/diet-plan/diet-plan-details/diet-plan-details.component.ts");
            /* harmony import */ var _diet_plan_diet_plan_card_diet_plan_card_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./diet-plan/diet-plan-card/diet-plan-card.component */ "./src/main/webapp/app/diet-plan/diet-plan-card/diet-plan-card.component.ts");
            /* harmony import */ var _diet_plan_my_diet_plans_no_selected_diet_plan_no_selected_diet_plan_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./diet-plan/my-diet-plans/no-selected-diet-plan/no-selected-diet-plan.component */ "./src/main/webapp/app/diet-plan/my-diet-plans/no-selected-diet-plan/no-selected-diet-plan.component.ts");
            /* harmony import */ var _diet_plan_my_diet_plans_selected_diet_plan_selected_diet_plan_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./diet-plan/my-diet-plans/selected-diet-plan/selected-diet-plan.component */ "./src/main/webapp/app/diet-plan/my-diet-plans/selected-diet-plan/selected-diet-plan.component.ts");
            /* harmony import */ var _comment_comment_date_pipe__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./comment/comment-date.pipe */ "./src/main/webapp/app/comment/comment-date.pipe.ts");
            /* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/main/webapp/app/not-found/not-found.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                        _index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"],
                        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                        _exercise_create_exercise_create_exercise_component__WEBPACK_IMPORTED_MODULE_9__["CreateExerciseComponent"],
                        _navbar_guest_navbar_guest_navbar_component__WEBPACK_IMPORTED_MODULE_10__["GuestNavbarComponent"],
                        _navbar_logged_navbar_logged_navbar_component__WEBPACK_IMPORTED_MODULE_11__["LoggedNavbarComponent"],
                        _food_food_component__WEBPACK_IMPORTED_MODULE_12__["FoodComponent"],
                        _exercise_all_exercises_all_exercises_component__WEBPACK_IMPORTED_MODULE_13__["AllExercisesComponent"],
                        _exercise_exercise_card_exercise_card_component__WEBPACK_IMPORTED_MODULE_15__["ExerciseCardComponent"],
                        _get_constant_view_name_pipe__WEBPACK_IMPORTED_MODULE_17__["GetConstantViewNamePipe"],
                        _user_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
                        _user_signin_signin_component__WEBPACK_IMPORTED_MODULE_21__["SigninComponent"],
                        _home_create_fitness_profile_create_fitness_profile_component__WEBPACK_IMPORTED_MODULE_22__["CreateFitnessProfileComponent"],
                        _home_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_24__["MyProfileComponent"],
                        _home_edit_fitness_profile_edit_fitness_profile_component__WEBPACK_IMPORTED_MODULE_25__["EditFitnessProfileComponent"],
                        _workout_my_workouts_my_workouts_component__WEBPACK_IMPORTED_MODULE_26__["MyWorkoutsComponent"],
                        _workout_my_workouts_no_selected_workout_no_selected_workout_component__WEBPACK_IMPORTED_MODULE_27__["NoSelectedWorkoutComponent"],
                        _workout_my_workouts_selected_workout_selected_workout_component__WEBPACK_IMPORTED_MODULE_28__["SelectedWorkoutComponent"],
                        _exercise_exercise_details_exercise_details_component__WEBPACK_IMPORTED_MODULE_29__["ExerciseDetailsComponent"],
                        _safe_pipe__WEBPACK_IMPORTED_MODULE_30__["SafePipe"],
                        _workout_all_workouts_all_workouts_component__WEBPACK_IMPORTED_MODULE_33__["AllWorkoutsComponent"],
                        _workout_workout_card_workout_card_component__WEBPACK_IMPORTED_MODULE_34__["WorkoutCardComponent"],
                        _user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_35__["UserProfileComponent"],
                        _workout_workout_details_workout_details_component__WEBPACK_IMPORTED_MODULE_38__["WorkoutDetailsComponent"],
                        _workout_plan_my_workout_plans_my_workout_plans_component__WEBPACK_IMPORTED_MODULE_39__["MyWorkoutPlansComponent"],
                        _workout_plan_my_workout_plans_no_selected_workout_plan_no_selected_workout_plan_component__WEBPACK_IMPORTED_MODULE_40__["NoSelectedWorkoutPlanComponent"],
                        _workout_plan_my_workout_plans_selected_workout_plan_selected_workout_plan_component__WEBPACK_IMPORTED_MODULE_41__["SelectedWorkoutPlanComponent"],
                        _workout_plan_all_workout_plans_all_workout_plans_component__WEBPACK_IMPORTED_MODULE_42__["AllWorkoutPlansComponent"],
                        _workout_plan_workout_plan_details_workout_plan_details_component__WEBPACK_IMPORTED_MODULE_43__["WorkoutPlanDetailsComponent"],
                        _workout_plan_workout_plan_card_workout_plan_card_component__WEBPACK_IMPORTED_MODULE_44__["WorkoutPlanCardComponent"],
                        _food_search_food_search_food_component__WEBPACK_IMPORTED_MODULE_45__["SearchFoodComponent"],
                        _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_46__["AdminPanelComponent"],
                        _food_food_details_food_details_component__WEBPACK_IMPORTED_MODULE_47__["FoodDetailsComponent"],
                        _meal_all_meals_all_meals_component__WEBPACK_IMPORTED_MODULE_48__["AllMealsComponent"],
                        _meal_my_meals_my_meals_component__WEBPACK_IMPORTED_MODULE_49__["MyMealsComponent"],
                        _meal_meal_card_meal_card_component__WEBPACK_IMPORTED_MODULE_50__["MealCardComponent"],
                        _meal_meal_details_meal_details_component__WEBPACK_IMPORTED_MODULE_51__["MealDetailsComponent"],
                        _food_all_foods_all_foods_component__WEBPACK_IMPORTED_MODULE_52__["AllFoodsComponent"],
                        _food_food_card_food_card_component__WEBPACK_IMPORTED_MODULE_53__["FoodCardComponent"],
                        _meal_my_meals_selected_meal_selected_meal_component__WEBPACK_IMPORTED_MODULE_54__["SelectedMealComponent"],
                        _meal_my_meals_no_selected_meal_no_selected_meal_component__WEBPACK_IMPORTED_MODULE_55__["NoSelectedMealComponent"],
                        _diet_plan_all_diet_plans_all_diet_plans_component__WEBPACK_IMPORTED_MODULE_56__["AllDietPlansComponent"],
                        _diet_plan_my_diet_plans_my_diet_plans_component__WEBPACK_IMPORTED_MODULE_57__["MyDietPlansComponent"],
                        _diet_plan_diet_plan_details_diet_plan_details_component__WEBPACK_IMPORTED_MODULE_58__["DietPlanDetailsComponent"],
                        _diet_plan_diet_plan_card_diet_plan_card_component__WEBPACK_IMPORTED_MODULE_59__["DietPlanCardComponent"],
                        _diet_plan_my_diet_plans_no_selected_diet_plan_no_selected_diet_plan_component__WEBPACK_IMPORTED_MODULE_60__["NoSelectedDietPlanComponent"],
                        _diet_plan_my_diet_plans_selected_diet_plan_selected_diet_plan_component__WEBPACK_IMPORTED_MODULE_61__["SelectedDietPlanComponent"],
                        _comment_comment_date_pipe__WEBPACK_IMPORTED_MODULE_62__["CommentDatePipe"],
                        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_63__["NotFoundComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"],
                        ngx_youtube_player__WEBPACK_IMPORTED_MODULE_31__["NgxYoutubePlayerModule"],
                        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_32__["DragDropModule"],
                        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_36__["PieChartModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_37__["BrowserAnimationsModule"],
                        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_36__["NgxChartsModule"]
                    ],
                    providers: [_safe_pipe__WEBPACK_IMPORTED_MODULE_30__["SafePipe"], _get_constant_view_name_pipe__WEBPACK_IMPORTED_MODULE_17__["GetConstantViewNamePipe"], _comment_comment_date_pipe__WEBPACK_IMPORTED_MODULE_62__["CommentDatePipe"], {
                            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"],
                            useClass: _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_23__["AuthInterceptorService"],
                            multi: true
                        }],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/auth/admin.guard.ts": 
        /*!*************************************************!*\
          !*** ./src/main/webapp/app/auth/admin.guard.ts ***!
          \*************************************************/
        /*! exports provided: AdminGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function () { return AdminGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/main/webapp/app/auth/auth.service.ts");
            var AdminGuard = /** @class */ (function () {
                function AdminGuard(authService, router) {
                    this.authService = authService;
                    this.router = router;
                }
                AdminGuard.prototype.canActivate = function (route, router) {
                    var _this = this;
                    return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
                        var isAuth = !!user;
                        if (!isAuth) {
                            return _this.router.createUrlTree(['/signin']);
                        }
                        var hasNeededRole = user.role === 'ROLE_ADMIN' || user.role === 'ROLE_ROOT_ADMIN';
                        if (hasNeededRole) {
                            return true;
                        }
                        return _this.router.createUrlTree(['/home']);
                    }));
                };
                return AdminGuard;
            }());
            AdminGuard.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
            ]; };
            AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
            ], AdminGuard);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/auth/auth-interceptor.service.ts": 
        /*!**************************************************************!*\
          !*** ./src/main/webapp/app/auth/auth-interceptor.service.ts ***!
          \**************************************************************/
        /*! exports provided: AuthInterceptorService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function () { return AuthInterceptorService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/main/webapp/app/auth/auth.service.ts");
            var AuthInterceptorService = /** @class */ (function () {
                function AuthInterceptorService(authService) {
                    this.authService = authService;
                }
                AuthInterceptorService.prototype.intercept = function (req, next) {
                    return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])(function (user) {
                        if (!user) {
                            return next.handle(req);
                        }
                        var modifiedReq = req.clone({
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append("Authorization", user.token)
                        });
                        return next.handle(modifiedReq);
                    }));
                };
                return AuthInterceptorService;
            }());
            AuthInterceptorService.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
            ]; };
            AuthInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], AuthInterceptorService);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/auth/auth.guard.ts": 
        /*!************************************************!*\
          !*** ./src/main/webapp/app/auth/auth.guard.ts ***!
          \************************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/main/webapp/app/auth/auth.service.ts");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(authService, router) {
                    this.authService = authService;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function (route, router) {
                    var _this = this;
                    return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
                        var isAuth = !!user;
                        if (isAuth) {
                            return true;
                        }
                        return _this.router.createUrlTree(['/signin']);
                    })
                    // tap(isAuth => {
                    //   if (!isAuth) {
                    //     this.router.navigate(['/auth']);
                    //   }
                    // })
                    );
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/auth/auth.service.ts": 
        /*!**************************************************!*\
          !*** ./src/main/webapp/app/auth/auth.service.ts ***!
          \**************************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _user_auth_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-auth.model */ "./src/main/webapp/app/auth/user-auth.model.ts");
            /* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-settings */ "./src/main/webapp/app/app-settings.ts");
            var AuthService = /** @class */ (function () {
                function AuthService(http, router) {
                    this.http = http;
                    this.router = router;
                    this.user = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
                }
                AuthService.prototype.register = function (formData) {
                    return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].API_ENDPOINT + "/api/users/register", formData);
                };
                AuthService.prototype.signin = function (signinBindingModel) {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                    });
                    return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].API_ENDPOINT + "/api/users/signin", signinBindingModel, {
                        headers: headers,
                        observe: "response"
                    });
                };
                AuthService.prototype.autoLogin = function () {
                    var userData = JSON.parse(localStorage.getItem('userData'));
                    if (!userData) {
                        return;
                    }
                    if (!userData.rememberMe) {
                        this.logout();
                        return;
                    }
                    var loadedUser = new _user_auth_model__WEBPACK_IMPORTED_MODULE_5__["UserAuthModel"](userData.userId, JSON.parse(atob((userData._token.replace('Bearer: ', '').split('.')[1]))).role, userData.rememberMe, userData._token, new Date(userData._tokenExpirationDate));
                    if (loadedUser.token) {
                        this.user.next(loadedUser);
                        var expirationDuration = 863940000;
                        if (new Date(userData._tokenExpirationDate) < new Date()) {
                            this.logout();
                            return;
                        }
                        this.autoLogout(expirationDuration);
                    }
                };
                AuthService.prototype.logout = function () {
                    this.user.next(null);
                    this.router.navigate(['/']);
                    localStorage.removeItem('userData');
                    localStorage.removeItem('fp');
                    if (this.tokenExpirationTimer) {
                        clearTimeout(this.tokenExpirationTimer);
                    }
                    this.tokenExpirationTimer = null;
                };
                AuthService.prototype.autoLogout = function (expirationDuration) {
                    var _this = this;
                    this.tokenExpirationTimer = setTimeout(function () {
                        _this.logout();
                    }, expirationDuration);
                };
                AuthService.prototype.handleAuthentication = function (token, rememberMe) {
                    var payload = JSON.parse(atob((token.replace('Bearer: ', '').split('.')[1])));
                    var firstName = payload.firstName;
                    var userId = payload.userId;
                    var userRole = payload.role;
                    var tokenExpiresInMS = payload.exp;
                    var expirationDate = new Date(new Date().getTime() + 863940000);
                    var user = new _user_auth_model__WEBPACK_IMPORTED_MODULE_5__["UserAuthModel"](userId, userRole, rememberMe, token, expirationDate);
                    this.user.next(user);
                    this.autoLogout(tokenExpiresInMS);
                    var localStorageUser = Object.assign({}, user);
                    delete localStorageUser.role;
                    localStorage.setItem('userData', JSON.stringify(localStorageUser));
                };
                AuthService.prototype.isUserModerator = function (userRole) {
                    return userRole === 'ROLE_ROOT_ADMIN' || userRole === 'ROLE_ADMIN' || userRole === 'ROLE_MODERATOR';
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/auth/moderator.guard.ts": 
        /*!*****************************************************!*\
          !*** ./src/main/webapp/app/auth/moderator.guard.ts ***!
          \*****************************************************/
        /*! exports provided: ModeratorGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeratorGuard", function () { return ModeratorGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/main/webapp/app/auth/auth.service.ts");
            /* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.guard */ "./src/main/webapp/app/auth/auth.guard.ts");
            var ModeratorGuard = /** @class */ (function () {
                function ModeratorGuard(authService, router, authGuard) {
                    this.authService = authService;
                    this.router = router;
                    this.authGuard = authGuard;
                }
                ModeratorGuard.prototype.canActivate = function (route, router) {
                    var _this = this;
                    return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
                        var isAuth = !!user;
                        if (!isAuth) {
                            return _this.router.createUrlTree(['/signin']);
                        }
                        var hasNeededRole = user.role === 'ROLE_MODERATOR' || user.role === 'ROLE_ADMIN' || user.role === 'ROLE_ROOT_ADMIN';
                        if (hasNeededRole) {
                            return true;
                        }
                        return _this.router.createUrlTree(['/home']);
                    }));
                };
                return ModeratorGuard;
            }());
            ModeratorGuard.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
                { type: _auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"] }
            ]; };
            ModeratorGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
            ], ModeratorGuard);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/auth/user-auth.model.ts": 
        /*!*****************************************************!*\
          !*** ./src/main/webapp/app/auth/user-auth.model.ts ***!
          \*****************************************************/
        /*! exports provided: UserAuthModel */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthModel", function () { return UserAuthModel; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var UserAuthModel = /** @class */ (function () {
                function UserAuthModel(userId, role, rememberMe, _token, _tokenExpirationDate) {
                    this.userId = userId;
                    this.role = role;
                    this.rememberMe = rememberMe;
                    this._token = _token;
                    this._tokenExpirationDate = _tokenExpirationDate;
                }
                Object.defineProperty(UserAuthModel.prototype, "token", {
                    get: function () {
                        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
                            return null;
                        }
                        return this._token;
                    },
                    enumerable: true,
                    configurable: true
                });
                return UserAuthModel;
            }());
            /***/ 
        }),
        /***/ "./src/main/webapp/app/comment/comment-binding.model.ts": 
        /*!**************************************************************!*\
          !*** ./src/main/webapp/app/comment/comment-binding.model.ts ***!
          \**************************************************************/
        /*! exports provided: CommentBindingModel */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentBindingModel", function () { return CommentBindingModel; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var CommentBindingModel = /** @class */ (function () {
                function CommentBindingModel() {
                    this.comment = '';
                }
                return CommentBindingModel;
            }());
            /***/ 
        }),
        /***/ "./src/main/webapp/app/comment/comment-date.pipe.ts": 
        /*!**********************************************************!*\
          !*** ./src/main/webapp/app/comment/comment-date.pipe.ts ***!
          \**********************************************************/
        /*! exports provided: CommentDatePipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentDatePipe", function () { return CommentDatePipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CommentDatePipe = /** @class */ (function () {
                function CommentDatePipe() {
                    this.MONTH_NAMES = [
                        'January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'
                    ];
                }
                CommentDatePipe.prototype.transform = function (date) {
                    return this.timeAgo(date);
                };
                CommentDatePipe.prototype.getFormattedDate = function (date, prefomattedDate, hideYear) {
                    if (hideYear === void 0) { hideYear = false; }
                    var day = date.getDate();
                    var month = this.MONTH_NAMES[date.getMonth()];
                    var year = date.getFullYear();
                    var hours = date.getHours();
                    var minutes = date.getMinutes();
                    if (minutes < 10) {
                        // Adding leading zero to minutes
                        minutes = "0" + minutes;
                    }
                    if (prefomattedDate) {
                        // Today at 10:20
                        // Yesterday at 10:20
                        return prefomattedDate + " at " + hours + ":" + minutes;
                    }
                    if (hideYear) {
                        // 10. January at 10:20
                        return day + ". " + month + " at " + hours + ":" + minutes;
                    }
                    // 10. January 2017. at 10:20
                    return day + ". " + month + " " + year + ". at " + hours + ":" + minutes;
                };
                // --- Main function
                CommentDatePipe.prototype.timeAgo = function (dateParam) {
                    if (!dateParam) {
                        return null;
                    }
                    var date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
                    var DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
                    var today = new Date();
                    // @ts-ignore
                    var yesterday = new Date(today - DAY_IN_MS);
                    // @ts-ignore
                    var seconds = Math.round((today - date) / 1000);
                    var minutes = Math.round(seconds / 60);
                    var isToday = today.toDateString() === date.toDateString();
                    var isYesterday = yesterday.toDateString() === date.toDateString();
                    var isThisYear = today.getFullYear() === date.getFullYear();
                    if (seconds < 5) {
                        return 'now';
                    }
                    else if (seconds < 60) {
                        return seconds + " seconds ago";
                    }
                    else if (seconds < 90) {
                        return 'about a minute ago';
                    }
                    else if (minutes < 60) {
                        return minutes + " minutes ago";
                    }
                    else if (isToday) {
                        return this.getFormattedDate(date, 'Today'); // Today at 10:20
                    }
                    else if (isYesterday) {
                        return this.getFormattedDate(date, 'Yesterday'); // Yesterday at 10:20
                    }
                    else if (isThisYear) {
                        return this.getFormattedDate(date, false, true); // 10. January at 10:20
                    }
                    return this.getFormattedDate(date, false); // 10. January 2017. at 10:20
                };
                return CommentDatePipe;
            }());
            CommentDatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'commentDate' })
            ], CommentDatePipe);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/comment/comment.service.ts": 
        /*!********************************************************!*\
          !*** ./src/main/webapp/app/comment/comment.service.ts ***!
          \********************************************************/
        /*! exports provided: CommentService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function () { return CommentService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-settings */ "./src/main/webapp/app/app-settings.ts");
            var CommentService = /** @class */ (function () {
                function CommentService(http) {
                    this.http = http;
                    this.contentTypeJsonHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                    });
                    this.MONTH_NAMES = [
                        'January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'
                    ];
                }
                CommentService.prototype.commentWorkout = function (workoutId, comment) {
                    return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/workouts/comment/" + workoutId, comment, { headers: this.contentTypeJsonHeaders });
                };
                CommentService.prototype.deleteWorkoutComment = function (commentId) {
                    return this.http.delete(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/workouts/comment/delete/" + commentId);
                };
                CommentService.prototype.commentMeal = function (mealId, comment) {
                    return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/meals/comment/" + mealId, comment, { headers: this.contentTypeJsonHeaders });
                };
                CommentService.prototype.deleteMealComment = function (commentId) {
                    return this.http.delete(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/meals/comment/delete/" + commentId);
                };
                CommentService.prototype.commentDietPlan = function (dietPlanId, comment) {
                    return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/diet-plans/comment/" + dietPlanId, comment, { headers: this.contentTypeJsonHeaders });
                };
                CommentService.prototype.deleteDietPlanComment = function (commentId) {
                    return this.http.delete(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/diet-plans/comment/delete/" + commentId);
                };
                CommentService.prototype.commentWorkoutPlan = function (workoutPlanId, comment) {
                    return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/workout-plans/comment/" + workoutPlanId, comment, { headers: this.contentTypeJsonHeaders });
                };
                CommentService.prototype.deleteWorkoutPlanComment = function (commentId) {
                    return this.http.delete(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/workout-plans/comment/delete/" + commentId);
                };
                return CommentService;
            }());
            CommentService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            CommentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root',
                })
            ], CommentService);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/diet-plan/all-diet-plans/all-diet-plans.component.css": 
        /*!***********************************************************************************!*\
          !*** ./src/main/webapp/app/diet-plan/all-diet-plans/all-diet-plans.component.css ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    position: relative;\r\n}\r\n\r\n.order-index-workout {\r\n    position: absolute;\r\n    top: 7px;\r\n    left: 0;\r\n\r\n    border-radius: 50%;\r\n    width: 36px;\r\n    line-height: 36px;\r\n    padding: 4px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n    text-align: center;\r\n}\r\n\r\n.modal-body {\r\n    max-height: 600px;\r\n    overflow-y: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvZGlldC1wbGFuL2FsbC1kaWV0LXBsYW5zL2FsbC1kaWV0LXBsYW5zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87O0lBRVAsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHVDQUF1QztJQUN2QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztBQUNyQyIsImZpbGUiOiJzcmMvbWFpbi93ZWJhcHAvYXBwL2RpZXQtcGxhbi9hbGwtZGlldC1wbGFucy9hbGwtZGlldC1wbGFucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ub3JkZXItaW5kZXgtd29ya291dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDdweDtcclxuICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gICAgbWF4LWhlaWdodDogNjAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/diet-plan/all-diet-plans/all-diet-plans.component.ts": 
        /*!**********************************************************************************!*\
          !*** ./src/main/webapp/app/diet-plan/all-diet-plans/all-diet-plans.component.ts ***!
          \**********************************************************************************/
        /*! exports provided: AllDietPlansComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllDietPlansComponent", function () { return AllDietPlansComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _diet_plan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../diet-plan.service */ "./src/main/webapp/app/diet-plan/diet-plan.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var AllDietPlansComponent = /** @class */ (function () {
                function AllDietPlansComponent(dietPlanService, modalService, router, titleService) {
                    this.dietPlanService = dietPlanService;
                    this.modalService = modalService;
                    this.router = router;
                    this.titleService = titleService;
                    this.page = 1;
                    this.pageSize = 6;
                }
                AllDietPlansComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.titleService.setTitle('FitBook' + '- All Diet Plans');
                    this.loading = true;
                    this.dietPlanService.getAllPublicDietPlans().subscribe(function (dietPlans) {
                        if (dietPlans) {
                            _this.dietPlans = dietPlans;
                            _this.filteredDietPlans = JSON.parse(JSON.stringify(dietPlans));
                        }
                        _this.loading = false;
                    });
                };
                AllDietPlansComponent.prototype.open = function (content, dietPlanId) {
                    var _this = this;
                    this.selectedDietPlanForModal = this.dietPlans.find(function (e) { return e.id === dietPlanId; });
                    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: "lg", scrollable: true }).result.then(function (result) {
                        _this.loading = true;
                        _this.dietPlanService.copyDietPlanToMyDietPlans(dietPlanId).subscribe(function (dietPlan) {
                            _this.loading = false;
                            _this.router.navigate(['my-diet-plans', dietPlan.id]);
                        });
                    }, function (reason) {
                    });
                };
                return AllDietPlansComponent;
            }());
            AllDietPlansComponent.ctorParameters = function () { return [
                { type: _diet_plan_service__WEBPACK_IMPORTED_MODULE_2__["DietPlanService"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }
            ]; };
            AllDietPlansComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-all-diet-plans',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-diet-plans.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/diet-plan/all-diet-plans/all-diet-plans.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-diet-plans.component.css */ "./src/main/webapp/app/diet-plan/all-diet-plans/all-diet-plans.component.css")).default]
                })
            ], AllDietPlansComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/diet-plan/diet-plan-binding-model.ts": 
        /*!******************************************************************!*\
          !*** ./src/main/webapp/app/diet-plan/diet-plan-binding-model.ts ***!
          \******************************************************************/
        /*! exports provided: DietPlanBindingModel */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietPlanBindingModel", function () { return DietPlanBindingModel; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var DietPlanBindingModel = /** @class */ (function () {
                function DietPlanBindingModel() {
                    this.isPublic = false;
                }
                return DietPlanBindingModel;
            }());
            /***/ 
        }),
        /***/ "./src/main/webapp/app/diet-plan/diet-plan-card/diet-plan-card.component.css": 
        /*!***********************************************************************************!*\
          !*** ./src/main/webapp/app/diet-plan/diet-plan-card/diet-plan-card.component.css ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    position: relative;\r\n}\r\n\r\n.order-index-meal {\r\n    position: absolute;\r\n    top: 7px;\r\n    left: 0;\r\n\r\n    border-radius: 50%;\r\n    width: 36px;\r\n    line-height: 36px;\r\n    padding: 4px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n    text-align: center;\r\n}\r\n\r\n.card {\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n    border-radius: 30px;\r\n    overflow: hidden;\r\n    position: relative;\r\n    background: rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n.btn {\r\n    border-radius: 10px;\r\n}\r\n\r\n.buttons-wrapper {\r\n    position: absolute;\r\n    bottom: 1em;\r\n}\r\n\r\n.buttons-wrapper.right {\r\n    right: 1em;\r\n}\r\n\r\n.buttons-wrapper.left {\r\n    left: 1em;\r\n}\r\n\r\n.accordion{\r\n    max-height: 100px;\r\n    width: 300px;\r\n    overflow-y: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n.chart-container {\r\n    height: 275px;\r\n    position: relative;\r\n}\r\n\r\n.macros {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvZGlldC1wbGFuL2RpZXQtcGxhbi1jYXJkL2RpZXQtcGxhbi1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87O0lBRVAsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHVDQUF1QztJQUN2QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL21haW4vd2ViYXBwL2FwcC9kaWV0LXBsYW4vZGlldC1wbGFuLWNhcmQvZGlldC1wbGFuLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm9yZGVyLWluZGV4LW1lYWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5idXR0b25zLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbi5idXR0b25zLXdyYXBwZXIucmlnaHQge1xyXG4gICAgcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuLmJ1dHRvbnMtd3JhcHBlci5sZWZ0IHtcclxuICAgIGxlZnQ6IDFlbTtcclxufVxyXG5cclxuLmFjY29yZGlvbntcclxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxufVxyXG5cclxuLmNoYXJ0LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDI3NXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWFjcm9zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcblxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/diet-plan/diet-plan-card/diet-plan-card.component.ts": 
        /*!**********************************************************************************!*\
          !*** ./src/main/webapp/app/diet-plan/diet-plan-card/diet-plan-card.component.ts ***!
          \**********************************************************************************/
        /*! exports provided: DietPlanCardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietPlanCardComponent", function () { return DietPlanCardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _diet_plan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../diet-plan.service */ "./src/main/webapp/app/diet-plan/diet-plan.service.ts");
            var DietPlanCardComponent = /** @class */ (function () {
                function DietPlanCardComponent(dietPlanService) {
                    this.dietPlanService = dietPlanService;
                    this.modalOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                DietPlanCardComponent.prototype.ngOnInit = function () {
                    this.makeChartDataForMacroNutrients();
                };
                DietPlanCardComponent.prototype.makeChartDataForMacroNutrients = function () {
                    this.macroNutrientsData = [
                        {
                            "name": "Protein",
                            "value": this.dietPlan.totalProtein
                        },
                        {
                            "name": "Carbohydrates",
                            "value": this.dietPlan.totalCarbohydrates
                        },
                        {
                            "name": "Fats",
                            "value": this.dietPlan.totalFats
                        },
                    ];
                };
                DietPlanCardComponent.prototype.copyToMyDietPlansHandler = function (id) {
                    this.modalOpen.emit(id);
                };
                DietPlanCardComponent.prototype.onLikeHandler = function () {
                    var _this = this;
                    this.dietPlanService.likeDietPlan(this.dietPlan.id).subscribe(function (dietPlan) {
                        _this.dietPlan = dietPlan;
                    });
                };
                return DietPlanCardComponent;
            }());
            DietPlanCardComponent.ctorParameters = function () { return [
                { type: _diet_plan_service__WEBPACK_IMPORTED_MODULE_2__["DietPlanService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DietPlanCardComponent.prototype, "dietPlan", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DietPlanCardComponent.prototype, "modalOpen", void 0);
            DietPlanCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-diet-plan-card',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./diet-plan-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/diet-plan/diet-plan-card/diet-plan-card.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./diet-plan-card.component.css */ "./src/main/webapp/app/diet-plan/diet-plan-card/diet-plan-card.component.css")).default]
                })
            ], DietPlanCardComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/diet-plan/diet-plan-details/diet-plan-details.component.css": 
        /*!*****************************************************************************************!*\
          !*** ./src/main/webapp/app/diet-plan/diet-plan-details/diet-plan-details.component.css ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".diet-plan-container {\r\n    background: rgba(255, 255, 255, 0.6);\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\ntable {\r\n    position: relative;\r\n}\r\n\r\n.order-index-meal {\r\n    position: absolute;\r\n    top: 7px;\r\n    left: 25px;\r\n\r\n    border-radius: 50%;\r\n    width: 36px;\r\n    line-height: 36px;\r\n    padding: 4px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n    text-align: center;\r\n}\r\n\r\n.modal-body {\r\n    max-height: 300px;\r\n    overflow-y: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvZGlldC1wbGFuL2RpZXQtcGxhbi1kZXRhaWxzL2RpZXQtcGxhbi1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVOztJQUVWLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix1Q0FBdUM7SUFDdkMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQ0FBaUM7QUFDckMiLCJmaWxlIjoic3JjL21haW4vd2ViYXBwL2FwcC9kaWV0LXBsYW4vZGlldC1wbGFuLWRldGFpbHMvZGlldC1wbGFuLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWV0LXBsYW4tY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ub3JkZXItaW5kZXgtbWVhbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDdweDtcclxuICAgIGxlZnQ6IDI1cHg7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG59XHJcblxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/diet-plan/diet-plan-details/diet-plan-details.component.ts": 
        /*!****************************************************************************************!*\
          !*** ./src/main/webapp/app/diet-plan/diet-plan-details/diet-plan-details.component.ts ***!
          \****************************************************************************************/
        /*! exports provided: DietPlanDetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietPlanDetailsComponent", function () { return DietPlanDetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _diet_plan_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../diet-plan.model */ "./src/main/webapp/app/diet-plan/diet-plan.model.ts");
            /* harmony import */ var _diet_plan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../diet-plan.service */ "./src/main/webapp/app/diet-plan/diet-plan.service.ts");
            /* harmony import */ var _comment_comment_binding_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../comment/comment-binding.model */ "./src/main/webapp/app/comment/comment-binding.model.ts");
            /* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/main/webapp/app/auth/auth.service.ts");
            /* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../user/user.service */ "./src/main/webapp/app/user/user.service.ts");
            /* harmony import */ var _comment_comment_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../comment/comment.service */ "./src/main/webapp/app/comment/comment.service.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var DietPlanDetailsComponent = /** @class */ (function () {
                function DietPlanDetailsComponent(dietPlanService, authService, userService, commentService, route, modalService, router, titleService) {
                    this.dietPlanService = dietPlanService;
                    this.authService = authService;
                    this.userService = userService;
                    this.commentService = commentService;
                    this.route = route;
                    this.modalService = modalService;
                    this.router = router;
                    this.titleService = titleService;
                }
                DietPlanDetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.titleService.setTitle('FitBook' + '- Diet Plan Details');
                    this.dietPlan = new _diet_plan_model__WEBPACK_IMPORTED_MODULE_4__["DietPlan"]();
                    this.commentBindingModel = new _comment_comment_binding_model__WEBPACK_IMPORTED_MODULE_6__["CommentBindingModel"]();
                    this.dietPlanComments = [];
                    this.authService.user.subscribe(function (user) {
                        _this.isLoggedInUserModerator = _this.authService.isUserModerator(user.role);
                    });
                    this.userService.getLoggedInUserObservable().subscribe(function (user) {
                        if (user) {
                            _this.loggedInUserUsername = user.username;
                        }
                    });
                    this.route.params.subscribe(function (params) {
                        _this.dietPlanId = params['id'];
                        _this.fetchDietPlanDetails();
                    });
                };
                DietPlanDetailsComponent.prototype.fetchDietPlanDetails = function () {
                    var _this = this;
                    this.loading = true;
                    this.dietPlanService.getDietPlanById(this.dietPlanId).subscribe(function (dietPlan) {
                        if (dietPlan) {
                            _this.dietPlan = dietPlan;
                            _this.dietPlanComments = dietPlan.comments;
                            _this.makeChartDataForMacroNutrients();
                            _this.loading = false;
                        }
                    });
                };
                DietPlanDetailsComponent.prototype.makeChartDataForMacroNutrients = function () {
                    var stats = [];
                    var counter = 1;
                    for (var _i = 0, _a = this.dietPlan.meals; _i < _a.length; _i++) {
                        var meal = _a[_i];
                        var mealFoodStats = {
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
                };
                DietPlanDetailsComponent.prototype.open = function (content) {
                    var _this = this;
                    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: "lg" }).result.then(function (result) {
                        _this.loading = true;
                        _this.dietPlanService.copyDietPlanToMyDietPlans(_this.dietPlanId).subscribe(function (dietPlan) {
                            _this.loading = false;
                            _this.router.navigate(['my-diet-plans/', dietPlan.id]);
                        });
                    }, function (reason) {
                    });
                };
                DietPlanDetailsComponent.prototype.exportToExcelHandler = function () {
                    var _this = this;
                    this.dietPlanService.exportDietPlanToExcel(this.dietPlanId).subscribe(function (blob) {
                        var url = window.URL.createObjectURL(blob);
                        var anchor = document.createElement("a");
                        anchor.download = _this.dietPlan.name.replace(/\s+/g, '-').toLowerCase() + '.xlsx';
                        anchor.href = url;
                        anchor.click();
                    });
                };
                DietPlanDetailsComponent.prototype.onLikeHandler = function () {
                    var _this = this;
                    this.dietPlanService.likeDietPlan(this.dietPlan.id).subscribe(function (dietPlan) {
                        _this.dietPlan = dietPlan;
                    });
                };
                DietPlanDetailsComponent.prototype.onPostHandler = function () {
                    var _this = this;
                    this.commentService.commentDietPlan(this.dietPlan.id, this.commentBindingModel).subscribe(function (comment) {
                        _this.commentBindingModel = new _comment_comment_binding_model__WEBPACK_IMPORTED_MODULE_6__["CommentBindingModel"]();
                        _this.dietPlanComments.push(comment);
                    });
                };
                DietPlanDetailsComponent.prototype.onDeleteCommentHandler = function (id) {
                    var _this = this;
                    this.commentService.deleteDietPlanComment(id).subscribe(function () {
                        _this.fetchDietPlanDetails();
                    });
                };
                return DietPlanDetailsComponent;
            }());
            DietPlanDetailsComponent.ctorParameters = function () { return [
                { type: _diet_plan_service__WEBPACK_IMPORTED_MODULE_5__["DietPlanService"] },
                { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
                { type: _user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
                { type: _comment_comment_service__WEBPACK_IMPORTED_MODULE_9__["CommentService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["Title"] }
            ]; };
            DietPlanDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
                    selector: 'app-diet-plan-details',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./diet-plan-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/diet-plan/diet-plan-details/diet-plan-details.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./diet-plan-details.component.css */ "./src/main/webapp/app/diet-plan/diet-plan-details/diet-plan-details.component.css")).default]
                })
            ], DietPlanDetailsComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/diet-plan/diet-plan.model.ts": 
        /*!**********************************************************!*\
          !*** ./src/main/webapp/app/diet-plan/diet-plan.model.ts ***!
          \**********************************************************/
        /*! exports provided: DietPlan */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietPlan", function () { return DietPlan; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var DietPlan = /** @class */ (function () {
                function DietPlan() {
                }
                return DietPlan;
            }());
            /***/ 
        }),
        /***/ "./src/main/webapp/app/diet-plan/diet-plan.service.ts": 
        /*!************************************************************!*\
          !*** ./src/main/webapp/app/diet-plan/diet-plan.service.ts ***!
          \************************************************************/
        /*! exports provided: DietPlanService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietPlanService", function () { return DietPlanService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-settings */ "./src/main/webapp/app/app-settings.ts");
            var DietPlanService = /** @class */ (function () {
                function DietPlanService(http) {
                    this.http = http;
                }
                DietPlanService.prototype.createDietPlan = function (dietPlanBindingModel) {
                    return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/diet-plans/create", dietPlanBindingModel);
                };
                DietPlanService.prototype.getLoggedInUserDietPlans = function () {
                    return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/diet-plans/my");
                };
                DietPlanService.prototype.deleteMyDietPlan = function (dietPlanId) {
                    return this.http.delete(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/diet-plans/delete/" + dietPlanId);
                };
                DietPlanService.prototype.editMyDietPlan = function (dietPlanId, dietPlanEditBindingModel) {
                    return this.http.put(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/diet-plans/edit/" + dietPlanId, dietPlanEditBindingModel);
                };
                DietPlanService.prototype.getAllPublicDietPlans = function () {
                    return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/diet-plans/public/all");
                };
                DietPlanService.prototype.getDietPlanById = function (dietPlanId) {
                    return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/diet-plans/" + dietPlanId);
                };
                DietPlanService.prototype.copyDietPlanToMyDietPlans = function (dietPlanId) {
                    return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/diet-plans/copy/" + dietPlanId, null);
                };
                DietPlanService.prototype.addMealFromMyMealsToMyDietPlan = function (dietPlanId, mealId) {
                    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('mealId', mealId);
                    return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/diet-plans/add-meal/" + dietPlanId, null, { params: params });
                };
                DietPlanService.prototype.exportDietPlanToExcel = function (dietPlanId) {
                    return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/diet-plans/export/excel/" + dietPlanId, { responseType: "blob" });
                };
                DietPlanService.prototype.likeDietPlan = function (dietPlanId) {
                    return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/diet-plans/like/" + dietPlanId, null);
                };
                return DietPlanService;
            }());
            DietPlanService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            DietPlanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root',
                })
            ], DietPlanService);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/diet-plan/my-diet-plans/my-diet-plans.component.css": 
        /*!*********************************************************************************!*\
          !*** ./src/main/webapp/app/diet-plan/my-diet-plans/my-diet-plans.component.css ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".list-group{\r\n    max-height: 300px;\r\n    overflow-y: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvZGlldC1wbGFuL215LWRpZXQtcGxhbnMvbXktZGlldC1wbGFucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQ0FBaUM7QUFDckMiLCJmaWxlIjoic3JjL21haW4vd2ViYXBwL2FwcC9kaWV0LXBsYW4vbXktZGlldC1wbGFucy9teS1kaWV0LXBsYW5zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1ncm91cHtcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/diet-plan/my-diet-plans/my-diet-plans.component.ts": 
        /*!********************************************************************************!*\
          !*** ./src/main/webapp/app/diet-plan/my-diet-plans/my-diet-plans.component.ts ***!
          \********************************************************************************/
        /*! exports provided: MyDietPlansComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDietPlansComponent", function () { return MyDietPlansComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _diet_plan_binding_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../diet-plan-binding-model */ "./src/main/webapp/app/diet-plan/diet-plan-binding-model.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/main/webapp/app/auth/auth.service.ts");
            /* harmony import */ var _diet_plan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../diet-plan.service */ "./src/main/webapp/app/diet-plan/diet-plan.service.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var MyDietPlansComponent = /** @class */ (function () {
                function MyDietPlansComponent(modalService, authService, router, route, dietPlanService, titleService) {
                    this.modalService = modalService;
                    this.authService = authService;
                    this.router = router;
                    this.route = route;
                    this.dietPlanService = dietPlanService;
                    this.titleService = titleService;
                }
                MyDietPlansComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.titleService.setTitle('FitBook' + '- My Diet Plans');
                    this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })).subscribe(function () {
                        _this.fetchDietPlans();
                    });
                    this.setSelectedDietPlanIdFromParams();
                    this.fetchDietPlans();
                    this.dietPlanBindingModel = new _diet_plan_binding_model__WEBPACK_IMPORTED_MODULE_1__["DietPlanBindingModel"]();
                };
                MyDietPlansComponent.prototype.setSelectedDietPlanIdFromParams = function () {
                    var _this = this;
                    this.route.firstChild.params.subscribe(function (params) {
                        _this.selectedDietPlanId = params['id'] ? params['id'] : undefined;
                    });
                };
                MyDietPlansComponent.prototype.fetchDietPlans = function () {
                    var _this = this;
                    this.loading = true;
                    this.dietPlanService.getLoggedInUserDietPlans().subscribe(function (dietPlans) {
                        _this.dietPlans = dietPlans;
                        _this.loading = false;
                    }, function (error) {
                        console.log(error);
                    });
                };
                MyDietPlansComponent.prototype.onDietPlanButtonClick = function (id) {
                    this.selectedDietPlanId = id;
                    this.router.navigate([id], { relativeTo: this.route });
                };
                MyDietPlansComponent.prototype.open = function (content) {
                    var _this = this;
                    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
                        _this.loading = true;
                        _this.dietPlanService.createDietPlan(_this.dietPlanBindingModel)
                            .subscribe(function (dietPlan) {
                            if (dietPlan) {
                                _this.fetchDietPlans();
                                _this.router.navigate(['my-diet-plans/' + dietPlan.id]);
                            }
                        });
                        _this.dietPlanBindingModel = new _diet_plan_binding_model__WEBPACK_IMPORTED_MODULE_1__["DietPlanBindingModel"]();
                    }, function (reason) {
                    });
                };
                MyDietPlansComponent.prototype.onRouterOutletDeactivate = function () {
                    this.fetchDietPlans();
                };
                MyDietPlansComponent.prototype.onRouterOutletActivate = function () {
                    this.setSelectedDietPlanIdFromParams();
                };
                return MyDietPlansComponent;
            }());
            MyDietPlansComponent.ctorParameters = function () { return [
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
                { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _diet_plan_service__WEBPACK_IMPORTED_MODULE_7__["DietPlanService"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"] }
            ]; };
            MyDietPlansComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
                    selector: 'app-my-diet-plans',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-diet-plans.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/diet-plan/my-diet-plans/my-diet-plans.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-diet-plans.component.css */ "./src/main/webapp/app/diet-plan/my-diet-plans/my-diet-plans.component.css")).default]
                })
            ], MyDietPlansComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/diet-plan/my-diet-plans/no-selected-diet-plan/no-selected-diet-plan.component.css": 
        /*!***************************************************************************************************************!*\
          !*** ./src/main/webapp/app/diet-plan/my-diet-plans/no-selected-diet-plan/no-selected-diet-plan.component.css ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbWFpbi93ZWJhcHAvYXBwL2RpZXQtcGxhbi9teS1kaWV0LXBsYW5zL25vLXNlbGVjdGVkLWRpZXQtcGxhbi9uby1zZWxlY3RlZC1kaWV0LXBsYW4uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/diet-plan/my-diet-plans/no-selected-diet-plan/no-selected-diet-plan.component.ts": 
        /*!**************************************************************************************************************!*\
          !*** ./src/main/webapp/app/diet-plan/my-diet-plans/no-selected-diet-plan/no-selected-diet-plan.component.ts ***!
          \**************************************************************************************************************/
        /*! exports provided: NoSelectedDietPlanComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoSelectedDietPlanComponent", function () { return NoSelectedDietPlanComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NoSelectedDietPlanComponent = /** @class */ (function () {
                function NoSelectedDietPlanComponent() {
                }
                NoSelectedDietPlanComponent.prototype.ngOnInit = function () {
                };
                return NoSelectedDietPlanComponent;
            }());
            NoSelectedDietPlanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-no-selected-diet-plan',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./no-selected-diet-plan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/diet-plan/my-diet-plans/no-selected-diet-plan/no-selected-diet-plan.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./no-selected-diet-plan.component.css */ "./src/main/webapp/app/diet-plan/my-diet-plans/no-selected-diet-plan/no-selected-diet-plan.component.css")).default]
                })
            ], NoSelectedDietPlanComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/diet-plan/my-diet-plans/selected-diet-plan/selected-diet-plan.component.css": 
        /*!*********************************************************************************************************!*\
          !*** ./src/main/webapp/app/diet-plan/my-diet-plans/selected-diet-plan/selected-diet-plan.component.css ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".selected-diet-plan {\r\n    background: rgba(255, 255, 255, 0.6);\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.cdk-drop-list-dragging .cdk-drag {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n.cdk-drag-animating {\r\n    transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n.cdk-drag:hover {\r\n    cursor: -webkit-grab;\r\n    cursor: grab;\r\n}\r\n\r\n.cdk-drop-list-dragging:hover .cdk-drag:hover {\r\n    cursor: -webkit-grabbing;\r\n    cursor: grabbing;\r\n}\r\n\r\ntable {\r\n    position: relative;\r\n}\r\n\r\n.order-index-meal {\r\n    position: absolute;\r\n    top: 7px;\r\n    left: 0;\r\n\r\n    border-radius: 50%;\r\n    width: 36px;\r\n    line-height: 36px;\r\n    padding: 4px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n    text-align: center;\r\n}\r\n\r\n.chart-container {\r\n    height: 400px;\r\n    position: relative;\r\n}\r\n\r\n.nutrition-goal {\r\n    background: rgba(255, 255, 255, 0.6);\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvZGlldC1wbGFuL215LWRpZXQtcGxhbnMvc2VsZWN0ZWQtZGlldC1wbGFuL3NlbGVjdGVkLWRpZXQtcGxhbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLG9CQUFZO0lBQVosWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdCQUFnQjtJQUFoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87O0lBRVAsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHVDQUF1QztJQUN2QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHVDQUF1QztBQUMzQyIsImZpbGUiOiJzcmMvbWFpbi93ZWJhcHAvYXBwL2RpZXQtcGxhbi9teS1kaWV0LXBsYW5zL3NlbGVjdGVkLWRpZXQtcGxhbi9zZWxlY3RlZC1kaWV0LXBsYW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3RlZC1kaWV0LXBsYW4ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuY2RrLWRyYWcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLmNkay1kcmFnOmhvdmVyIHtcclxuICAgIGN1cnNvcjogZ3JhYjtcclxufVxyXG5cclxuLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmc6aG92ZXIgLmNkay1kcmFnOmhvdmVyIHtcclxuICAgIGN1cnNvcjogZ3JhYmJpbmc7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm9yZGVyLWluZGV4LW1lYWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaGFydC1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm51dHJpdGlvbi1nb2FsIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/diet-plan/my-diet-plans/selected-diet-plan/selected-diet-plan.component.ts": 
        /*!********************************************************************************************************!*\
          !*** ./src/main/webapp/app/diet-plan/my-diet-plans/selected-diet-plan/selected-diet-plan.component.ts ***!
          \********************************************************************************************************/
        /*! exports provided: SelectedDietPlanComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedDietPlanComponent", function () { return SelectedDietPlanComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _meal_meal_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../meal/meal.model */ "./src/main/webapp/app/meal/meal.model.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _diet_plan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../diet-plan.service */ "./src/main/webapp/app/diet-plan/diet-plan.service.ts");
            /* harmony import */ var _diet_plan_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../diet-plan.model */ "./src/main/webapp/app/diet-plan/diet-plan.model.ts");
            /* harmony import */ var _get_constant_view_name_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../get-constant-view-name.pipe */ "./src/main/webapp/app/get-constant-view-name.pipe.ts");
            /* harmony import */ var _meal_meal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../meal/meal.service */ "./src/main/webapp/app/meal/meal.service.ts");
            /* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
            /* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../user/user.service */ "./src/main/webapp/app/user/user.service.ts");
            var SelectedDietPlanComponent = /** @class */ (function () {
                function SelectedDietPlanComponent(route, dietPlanService, mealService, router, constantViewPipe, modalService, userService) {
                    this.route = route;
                    this.dietPlanService = dietPlanService;
                    this.mealService = mealService;
                    this.router = router;
                    this.constantViewPipe = constantViewPipe;
                    this.modalService = modalService;
                    this.userService = userService;
                    this.mealDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
                    this.editMode = false;
                }
                SelectedDietPlanComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.loading = true;
                    this.selectedDietPlan = new _diet_plan_model__WEBPACK_IMPORTED_MODULE_6__["DietPlan"]();
                    this.selectedMealForModal = new _meal_meal_model__WEBPACK_IMPORTED_MODULE_1__["Meal"]();
                    this.userService.getLoggedInUserObservable()
                        .subscribe(function (user) {
                        if (user) {
                            _this.userNutritionGoal = user.fitnessProfile.nutritionGoal;
                        }
                    });
                    this.route.params.subscribe(function (params) {
                        _this.dietPlanId = params['id'];
                        _this.fetchDietPlanDetails();
                    });
                    this.mealService.getLoggedInUserMeals().subscribe(function (meals) {
                        if (meals) {
                            _this.loggedUserMeals = meals;
                            _this.selectedMealForModal = meals[0];
                            _this.selectedMealIdForModal = meals[0].id;
                        }
                    });
                    this.route.queryParams.subscribe(function (queryParams) {
                        if (queryParams['edit']) {
                            _this.editMode = queryParams['edit'] === '1';
                            if (_this.editMode) {
                                _this.editDietPlanBindingModel = JSON.parse(JSON.stringify(_this.selectedDietPlan));
                                _this.editDietPlanBindingModel.isPublic = _this.selectedDietPlan.isPublic;
                                _this.deletedMealsStack = [];
                            }
                        }
                        else {
                            _this.editMode = false;
                        }
                    });
                };
                SelectedDietPlanComponent.prototype.open = function (content) {
                    this.modalService.open(content, {
                        ariaLabelledBy: 'modal-basic-title',
                        size: 'xl',
                        scrollable: false
                    }).result.then(function (result) {
                    }, function (reason) {
                    });
                };
                SelectedDietPlanComponent.prototype.openAddMealModal = function (content) {
                    var _this = this;
                    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(function (result) {
                        _this.dietPlanService.addMealFromMyMealsToMyDietPlan(_this.dietPlanId, _this.selectedMealIdForModal)
                            .subscribe(function (dietPlan) {
                            if (dietPlan) {
                                _this.selectedDietPlan = dietPlan;
                                _this.makeChartDataForMacroNutrients();
                            }
                        });
                    }, function (reason) {
                    });
                };
                SelectedDietPlanComponent.prototype.fetchDietPlanDetails = function () {
                    var _this = this;
                    this.dietPlanService.getLoggedInUserDietPlans().subscribe(function (dietPlans) {
                        if (dietPlans) {
                            _this.selectedDietPlan = dietPlans.find(function (w) { return w.id === _this.dietPlanId; });
                            if (!_this.selectedDietPlan) {
                                _this.router.navigate(['/404']);
                            }
                            _this.makeChartDataForMacroNutrients();
                            _this.loading = false;
                        }
                    });
                };
                SelectedDietPlanComponent.prototype.onMealDeleteHandler = function (mealId, orderIndex) {
                    this.editDietPlanBindingModel.meals =
                        this.editDietPlanBindingModel.meals.filter(function (w) { return w.orderIndex !== orderIndex || w.id !== mealId; });
                    this.rearrangeOrderIndexes();
                    this.recalculateBindingModelTotalNutrition();
                };
                SelectedDietPlanComponent.prototype.onSaveHandler = function () {
                    var _this = this;
                    this.loading = true;
                    this.dietPlanService.editMyDietPlan(this.dietPlanId, this.editDietPlanBindingModel).subscribe(function (dietPlan) {
                        _this.selectedDietPlan = dietPlan;
                        _this.makeChartDataForMacroNutrients;
                        _this.loading = false;
                    });
                    this.router.navigate(['./'], { relativeTo: this.route });
                };
                SelectedDietPlanComponent.prototype.onDietPlanDeleteHandler = function () {
                    var _this = this;
                    this.dietPlanService.deleteMyDietPlan(this.dietPlanId).subscribe(function (result) {
                        if (result) {
                            _this.router.navigate(['/my-diet-plans']);
                        }
                    });
                };
                SelectedDietPlanComponent.prototype.recalculateBindingModelTotalNutrition = function () {
                    var totalProtein = 0;
                    var totalCarbohydrates = 0;
                    var totalFats = 0;
                    var totalCalories = 0;
                    this.editDietPlanBindingModel.meals.forEach(function (m) {
                        totalProtein += m.meal.totalProtein;
                        totalCarbohydrates += m.meal.totalCarbohydrates;
                        totalFats += m.meal.totalFats;
                        totalCalories += m.meal.totalCalories;
                    });
                    this.editDietPlanBindingModel.totalProtein = totalProtein;
                    this.editDietPlanBindingModel.totalCarbohydrates = totalCarbohydrates;
                    this.editDietPlanBindingModel.totalFats = totalFats;
                    this.editDietPlanBindingModel.totalCalories = totalCalories;
                };
                SelectedDietPlanComponent.prototype.onDrop = function (event) {
                    Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["moveItemInArray"])(this.editDietPlanBindingModel.meals, event.previousIndex, event.currentIndex);
                    this.rearrangeOrderIndexes();
                };
                SelectedDietPlanComponent.prototype.rearrangeOrderIndexes = function () {
                    var meals = this.editDietPlanBindingModel.meals;
                    for (var i = 0; i < meals.length; i++) {
                        meals[i].orderIndex = i + 1;
                    }
                };
                SelectedDietPlanComponent.prototype.setSelectedMealForModal = function () {
                    var _this = this;
                    this.selectedMealForModal = this.loggedUserMeals.filter(function (w) { return w.id === _this.selectedMealIdForModal; })[0];
                };
                SelectedDietPlanComponent.prototype.exportToExcelHandler = function () {
                    var _this = this;
                    this.dietPlanService.exportDietPlanToExcel(this.selectedDietPlan.id).subscribe(function (blob) {
                        var url = window.URL.createObjectURL(blob);
                        var anchor = document.createElement("a");
                        anchor.download = _this.selectedDietPlan.name.replace(/\s+/g, '-').toLowerCase() + '.xlsx';
                        anchor.href = url;
                        anchor.click();
                    });
                };
                SelectedDietPlanComponent.prototype.makeChartDataForMacroNutrients = function () {
                    var stats = [];
                    var counter = 1;
                    for (var _i = 0, _a = this.selectedDietPlan.meals; _i < _a.length; _i++) {
                        var meal = _a[_i];
                        var mealFoodStats = {
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
                };
                return SelectedDietPlanComponent;
            }());
            SelectedDietPlanComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _diet_plan_service__WEBPACK_IMPORTED_MODULE_5__["DietPlanService"] },
                { type: _meal_meal_service__WEBPACK_IMPORTED_MODULE_8__["MealService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _get_constant_view_name_pipe__WEBPACK_IMPORTED_MODULE_7__["GetConstantViewNamePipe"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
                { type: _user_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])()
            ], SelectedDietPlanComponent.prototype, "mealDelete", void 0);
            SelectedDietPlanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
                    selector: 'app-selected-diet-plan',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./selected-diet-plan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/diet-plan/my-diet-plans/selected-diet-plan/selected-diet-plan.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./selected-diet-plan.component.css */ "./src/main/webapp/app/diet-plan/my-diet-plans/selected-diet-plan/selected-diet-plan.component.css")).default]
                })
            ], SelectedDietPlanComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/exercise/all-exercises/all-exercises.component.css": 
        /*!********************************************************************************!*\
          !*** ./src/main/webapp/app/exercise/all-exercises/all-exercises.component.css ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".filter-block {\r\n\r\n}\r\n\r\n.form-label-group{\r\n  background: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvZXhlcmNpc2UvYWxsLWV4ZXJjaXNlcy9hbGwtZXhlcmNpc2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEMiLCJmaWxlIjoic3JjL21haW4vd2ViYXBwL2FwcC9leGVyY2lzZS9hbGwtZXhlcmNpc2VzL2FsbC1leGVyY2lzZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXItYmxvY2sge1xyXG5cclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/exercise/all-exercises/all-exercises.component.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/main/webapp/app/exercise/all-exercises/all-exercises.component.ts ***!
          \*******************************************************************************/
        /*! exports provided: AllExercisesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllExercisesComponent", function () { return AllExercisesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _exercise_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../exercise.model */ "./src/main/webapp/app/exercise/exercise.model.ts");
            /* harmony import */ var _exercise_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../exercise.service */ "./src/main/webapp/app/exercise/exercise.service.ts");
            /* harmony import */ var _selected_muscle_groups_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../selected-muscle-groups.model */ "./src/main/webapp/app/exercise/selected-muscle-groups.model.ts");
            /* harmony import */ var _workout_exercise_binding_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workout-exercise-binding.model */ "./src/main/webapp/app/exercise/all-exercises/workout-exercise-binding.model.ts");
            /* harmony import */ var _workout_workout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../workout/workout.service */ "./src/main/webapp/app/workout/workout.service.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var AllExercisesComponent = /** @class */ (function () {
                function AllExercisesComponent(titleService, exerciseService, workoutService, modalService, router) {
                    this.titleService = titleService;
                    this.exerciseService = exerciseService;
                    this.workoutService = workoutService;
                    this.modalService = modalService;
                    this.router = router;
                    this.filteredExercises = [];
                    this.allExercises = [];
                    this.page = 1;
                    this.pageSize = 6;
                }
                AllExercisesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.titleService.setTitle('FitBook' + '- All Exercises');
                    this.muscleGroupFilter = new _selected_muscle_groups_model__WEBPACK_IMPORTED_MODULE_4__["SelectedMuscleGroupsModel"]();
                    this.workoutExerciseBindingModel = new _workout_exercise_binding_model__WEBPACK_IMPORTED_MODULE_5__["WorkoutExerciseBindingModel"]();
                    this.selectedExerciseForModal = new _exercise_model__WEBPACK_IMPORTED_MODULE_2__["Exercise"]();
                    this.loading = true;
                    this.exerciseService.fetchAllExercises()
                        .subscribe(function (data) {
                        _this.allExercises = data;
                        _this.filteredExercises = _this.allExercises.slice();
                        _this.loading = false;
                    });
                    this.fetchUserWorkouts();
                };
                AllExercisesComponent.prototype.fetchUserWorkouts = function () {
                    var _this = this;
                    this.workoutService.getLoggedInUserWorkouts().subscribe(function (workouts) {
                        _this.userWorkouts = workouts;
                        _this.selectedWorkoutId = _this.userWorkouts[0].id;
                    });
                };
                AllExercisesComponent.prototype.open = function (content, exerciseId) {
                    var _this = this;
                    this.selectedExerciseForModal = this.allExercises.find(function (e) { return e.id === exerciseId; });
                    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
                        _this.workoutExerciseBindingModel.exerciseId = exerciseId;
                        _this.workoutService.addWorkoutExerciseToWorkout(_this.workoutExerciseBindingModel, _this.selectedWorkoutId).subscribe(function (workout) {
                            _this.router.navigate(['my-workouts', workout.id]);
                        });
                        _this.selectedWorkoutId = _this.userWorkouts[0].id;
                        _this.workoutExerciseBindingModel = new _workout_exercise_binding_model__WEBPACK_IMPORTED_MODULE_5__["WorkoutExerciseBindingModel"]();
                    }, function (reason) {
                    });
                };
                AllExercisesComponent.prototype.onMuscleMouseEnter = function (muscleType) {
                    this.focusedMuscleGroup = muscleType;
                };
                AllExercisesComponent.prototype.resetSelectedMuscleGroup = function () {
                    this.focusedMuscleGroup = undefined;
                };
                AllExercisesComponent.prototype.onMuscleClick = function (muscleType) {
                    this.muscleGroupFilter[muscleType] = !this.muscleGroupFilter[muscleType];
                    this.handleFilter();
                };
                AllExercisesComponent.prototype.handleFilter = function () {
                    var _this = this;
                    var filterModeOn = Object.values(this.muscleGroupFilter).slice().some(function (b) { return b === true; });
                    if (filterModeOn) {
                        var involvingMuscles_1 = Object.keys(this.muscleGroupFilter).filter(function (m) { return _this.muscleGroupFilter[m] === true; });
                        this.filteredExercises =
                            this.allExercises
                                .slice()
                                .filter(function (e) {
                                var exerciseInvolvingMuscles = e.assistingMuscleGroups.slice();
                                exerciseInvolvingMuscles.push(e.majorMuscleGroup);
                                return involvingMuscles_1.every(function (m) { return exerciseInvolvingMuscles.includes(m); });
                            });
                    }
                    else {
                        this.filteredExercises = this.allExercises.slice();
                    }
                };
                AllExercisesComponent.prototype.onClearFilter = function () {
                    this.muscleGroupFilter = new _selected_muscle_groups_model__WEBPACK_IMPORTED_MODULE_4__["SelectedMuscleGroupsModel"]();
                    this.handleFilter();
                };
                return AllExercisesComponent;
            }());
            AllExercisesComponent.ctorParameters = function () { return [
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"] },
                { type: _exercise_service__WEBPACK_IMPORTED_MODULE_3__["ExerciseService"] },
                { type: _workout_workout_service__WEBPACK_IMPORTED_MODULE_6__["WorkoutService"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
            ]; };
            AllExercisesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-all-exercises',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-exercises.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/exercise/all-exercises/all-exercises.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-exercises.component.css */ "./src/main/webapp/app/exercise/all-exercises/all-exercises.component.css")).default]
                })
            ], AllExercisesComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/exercise/all-exercises/workout-exercise-binding.model.ts": 
        /*!**************************************************************************************!*\
          !*** ./src/main/webapp/app/exercise/all-exercises/workout-exercise-binding.model.ts ***!
          \**************************************************************************************/
        /*! exports provided: WorkoutExerciseBindingModel */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutExerciseBindingModel", function () { return WorkoutExerciseBindingModel; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var WorkoutExerciseBindingModel = /** @class */ (function () {
                function WorkoutExerciseBindingModel() {
                    this.reps = 1;
                    this.sets = 1;
                    this.exerciseId = null;
                }
                return WorkoutExerciseBindingModel;
            }());
            /***/ 
        }),
        /***/ "./src/main/webapp/app/exercise/create-exercise/create-exercise.component.css": 
        /*!************************************************************************************!*\
          !*** ./src/main/webapp/app/exercise/create-exercise/create-exercise.component.css ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".card-signin .card-img-left {\r\n  min-width: 60%;\r\n}\r\n\r\nsvg {\r\n  display: inline-block;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvZXhlcmNpc2UvY3JlYXRlLWV4ZXJjaXNlL2NyZWF0ZS1leGVyY2lzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvbWFpbi93ZWJhcHAvYXBwL2V4ZXJjaXNlL2NyZWF0ZS1leGVyY2lzZS9jcmVhdGUtZXhlcmNpc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXNpZ25pbiAuY2FyZC1pbWctbGVmdCB7XHJcbiAgbWluLXdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbnN2ZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/exercise/create-exercise/create-exercise.component.ts": 
        /*!***********************************************************************************!*\
          !*** ./src/main/webapp/app/exercise/create-exercise/create-exercise.component.ts ***!
          \***********************************************************************************/
        /*! exports provided: CreateExerciseComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateExerciseComponent", function () { return CreateExerciseComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _exercise_binding_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../exercise-binding.model */ "./src/main/webapp/app/exercise/exercise-binding.model.ts");
            /* harmony import */ var _exercise_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../exercise.service */ "./src/main/webapp/app/exercise/exercise.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _selected_muscle_groups_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../selected-muscle-groups.model */ "./src/main/webapp/app/exercise/selected-muscle-groups.model.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var CreateExerciseComponent = /** @class */ (function () {
                function CreateExerciseComponent(exerciseService, router, titleService) {
                    this.exerciseService = exerciseService;
                    this.router = router;
                    this.titleService = titleService;
                    this.loading = false;
                }
                CreateExerciseComponent.prototype.ngOnInit = function () {
                    this.exerciseBindingModel = new _exercise_binding_model__WEBPACK_IMPORTED_MODULE_2__["ExerciseBindingModel"]();
                    this.assistingMuscleGroupsSelected = new _selected_muscle_groups_model__WEBPACK_IMPORTED_MODULE_5__["SelectedMuscleGroupsModel"]();
                    this.titleService.setTitle('FitBook' + '- Create Exercise');
                };
                CreateExerciseComponent.prototype.onMuscleClick = function (muscleType) {
                    if (!this.assistingMuscleGroupsSelected[muscleType] && this.exerciseBindingModel.majorMuscleGroup !== muscleType) {
                        this.assistingMuscleGroupsSelected[muscleType] = true;
                    }
                    else if (this.exerciseBindingModel.majorMuscleGroup !== muscleType) {
                        this.assistingMuscleGroupsSelected[muscleType] = false;
                        this.exerciseBindingModel.majorMuscleGroup = muscleType;
                    }
                    else {
                        this.exerciseBindingModel.majorMuscleGroup = undefined;
                    }
                };
                CreateExerciseComponent.prototype.onMuscleMouseEnter = function (muscleType) {
                    this.focusedMuscleGroup = muscleType;
                };
                CreateExerciseComponent.prototype.resetSelectedMuscleGroup = function () {
                    this.focusedMuscleGroup = undefined;
                };
                CreateExerciseComponent.prototype.setAssistingMuscleGroupsToBindingModel = function () {
                    this.exerciseBindingModel.assistingMuscleGroups = [];
                    for (var muscleType in this.assistingMuscleGroupsSelected) {
                        if (this.assistingMuscleGroupsSelected[muscleType]) {
                            this.exerciseBindingModel.assistingMuscleGroups.push(muscleType);
                        }
                    }
                };
                CreateExerciseComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.loading = true;
                    this.setAssistingMuscleGroupsToBindingModel();
                    var formData = new FormData();
                    var exerciseBlob = new Blob([JSON.stringify(this.exerciseBindingModel)], { type: 'application/json' });
                    formData.append('exerciseBindingModel', exerciseBlob);
                    formData.append('file', this.pictureFile);
                    this.exerciseService.createExercise(formData)
                        .subscribe(function (exercise) {
                        _this.loading = false;
                        _this.router.navigate(['/exercises/details/' + exercise.id]);
                    });
                };
                CreateExerciseComponent.prototype.handleFileInput = function (files, chooseFileLabel) {
                    var file = files[0];
                    var pattern = /image-*/;
                    if (file && file.type.match(pattern)) {
                        this.pictureFile = file;
                        chooseFileLabel.innerHTML = this.pictureFile.name;
                    }
                    else {
                        this.file = undefined;
                        this.pictureFile = undefined;
                        chooseFileLabel.innerHTML = 'Choose file';
                    }
                };
                CreateExerciseComponent.prototype.handleAssistingMuscleGroupsChange = function (event) {
                    var muscleType = event.target.value;
                    this.assistingMuscleGroupsSelected[muscleType] = !this.assistingMuscleGroupsSelected[muscleType];
                };
                CreateExerciseComponent.prototype.handleMajorMuscleGroupChange = function (event) {
                    var muscleType = event.target.value;
                    this.assistingMuscleGroupsSelected[muscleType] = false;
                };
                return CreateExerciseComponent;
            }());
            CreateExerciseComponent.ctorParameters = function () { return [
                { type: _exercise_service__WEBPACK_IMPORTED_MODULE_3__["ExerciseService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] }
            ]; };
            CreateExerciseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-create-exercise',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-exercise.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/exercise/create-exercise/create-exercise.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-exercise.component.css */ "./src/main/webapp/app/exercise/create-exercise/create-exercise.component.css")).default]
                })
            ], CreateExerciseComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/exercise/exercise-binding.model.ts": 
        /*!****************************************************************!*\
          !*** ./src/main/webapp/app/exercise/exercise-binding.model.ts ***!
          \****************************************************************/
        /*! exports provided: ExerciseBindingModel */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseBindingModel", function () { return ExerciseBindingModel; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var ExerciseBindingModel = /** @class */ (function () {
                function ExerciseBindingModel() {
                }
                return ExerciseBindingModel;
            }());
            /***/ 
        }),
        /***/ "./src/main/webapp/app/exercise/exercise-card/exercise-card.component.css": 
        /*!********************************************************************************!*\
          !*** ./src/main/webapp/app/exercise/exercise-card/exercise-card.component.css ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".card {\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n  border-radius: 30px;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.thumbnail {\r\n  position: relative;\r\n  width: 350px;\r\n  height: 250px;\r\n  overflow: hidden;\r\n}\r\n\r\n.thumbnail img {\r\n  min-height: 250px;\r\n  margin: auto\r\n}\r\n\r\n.btn {\r\n  border-radius: 10px;\r\n}\r\n\r\n.buttons-wrapper {\r\n  position: absolute;\r\n  bottom: 1em;\r\n}\r\n\r\n.buttons-wrapper.right {\r\n  right: 1em;\r\n}\r\n\r\n.buttons-wrapper.left {\r\n  left: 1em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvZXhlcmNpc2UvZXhlcmNpc2UtY2FyZC9leGVyY2lzZS1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBdUM7RUFDdkMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakI7QUFDRjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxTQUFTO0FBQ1giLCJmaWxlIjoic3JjL21haW4vd2ViYXBwL2FwcC9leGVyY2lzZS9leGVyY2lzZS1jYXJkL2V4ZXJjaXNlLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnRodW1ibmFpbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi50aHVtYm5haWwgaW1nIHtcclxuICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICBtYXJnaW46IGF1dG9cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmJ1dHRvbnMtd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMWVtO1xyXG59XHJcblxyXG4uYnV0dG9ucy13cmFwcGVyLnJpZ2h0IHtcclxuICByaWdodDogMWVtO1xyXG59XHJcblxyXG4uYnV0dG9ucy13cmFwcGVyLmxlZnQge1xyXG4gIGxlZnQ6IDFlbTtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/exercise/exercise-card/exercise-card.component.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/main/webapp/app/exercise/exercise-card/exercise-card.component.ts ***!
          \*******************************************************************************/
        /*! exports provided: ExerciseCardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseCardComponent", function () { return ExerciseCardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _get_constant_view_name_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../get-constant-view-name.pipe */ "./src/main/webapp/app/get-constant-view-name.pipe.ts");
            var ExerciseCardComponent = /** @class */ (function () {
                function ExerciseCardComponent(musclePipe) {
                    this.musclePipe = musclePipe;
                    this.modalOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                ExerciseCardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.assistingMuscleGroups = this.exercise.assistingMuscleGroups.map(function (a) { return _this.musclePipe.transform(a); });
                };
                ExerciseCardComponent.prototype.addToWorkoutHandler = function (id) {
                    this.modalOpen.emit(id);
                };
                return ExerciseCardComponent;
            }());
            ExerciseCardComponent.ctorParameters = function () { return [
                { type: _get_constant_view_name_pipe__WEBPACK_IMPORTED_MODULE_2__["GetConstantViewNamePipe"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ExerciseCardComponent.prototype, "exercise", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ExerciseCardComponent.prototype, "modalOpen", void 0);
            ExerciseCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-exercise-card',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./exercise-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/exercise/exercise-card/exercise-card.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./exercise-card.component.css */ "./src/main/webapp/app/exercise/exercise-card/exercise-card.component.css")).default]
                })
            ], ExerciseCardComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/exercise/exercise-details/exercise-details.component.css": 
        /*!**************************************************************************************!*\
          !*** ./src/main/webapp/app/exercise/exercise-details/exercise-details.component.css ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".exercise-container {\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n    background: rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n.exercise-container .exercise-intro img {\r\n    border-radius: 40px;\r\n}\r\n\r\n.exercise-intro img {\r\n    max-height: 300px;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvZXhlcmNpc2UvZXhlcmNpc2UtZGV0YWlscy9leGVyY2lzZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1Q0FBdUM7SUFDdkMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9tYWluL3dlYmFwcC9hcHAvZXhlcmNpc2UvZXhlcmNpc2UtZGV0YWlscy9leGVyY2lzZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhlcmNpc2UtY29udGFpbmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxufVxyXG5cclxuLmV4ZXJjaXNlLWNvbnRhaW5lciAuZXhlcmNpc2UtaW50cm8gaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbn1cclxuXHJcbi5leGVyY2lzZS1pbnRybyBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/exercise/exercise-details/exercise-details.component.ts": 
        /*!*************************************************************************************!*\
          !*** ./src/main/webapp/app/exercise/exercise-details/exercise-details.component.ts ***!
          \*************************************************************************************/
        /*! exports provided: ExerciseDetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseDetailsComponent", function () { return ExerciseDetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _exercise_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../exercise.service */ "./src/main/webapp/app/exercise/exercise.service.ts");
            /* harmony import */ var _exercise_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../exercise.model */ "./src/main/webapp/app/exercise/exercise.model.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _all_exercises_workout_exercise_binding_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../all-exercises/workout-exercise-binding.model */ "./src/main/webapp/app/exercise/all-exercises/workout-exercise-binding.model.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _workout_workout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../workout/workout.service */ "./src/main/webapp/app/workout/workout.service.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var ExerciseDetailsComponent = /** @class */ (function () {
                function ExerciseDetailsComponent(exerciseService, route, modalService, workoutService, router, titleService) {
                    this.exerciseService = exerciseService;
                    this.route = route;
                    this.modalService = modalService;
                    this.workoutService = workoutService;
                    this.router = router;
                    this.titleService = titleService;
                }
                ExerciseDetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.titleService.setTitle('FitBook' + '- Exercise Details');
                    this.selectedExercise = new _exercise_model__WEBPACK_IMPORTED_MODULE_3__["Exercise"]();
                    this.workoutExerciseBindingModel = new _all_exercises_workout_exercise_binding_model__WEBPACK_IMPORTED_MODULE_5__["WorkoutExerciseBindingModel"]();
                    this.route.params.subscribe(function (params) {
                        if (params['id']) {
                            _this.exerciseService.getExerciseById(params['id']).subscribe(function (exercise) {
                                _this.selectedExercise = exercise;
                                _this.youtubeVideoId = _this.getYoutubeIdFromUrl(exercise.youtubeURL);
                                _this.workoutExerciseBindingModel.exerciseId = exercise.id;
                            });
                        }
                    });
                    this.fetchUserWorkouts();
                };
                ExerciseDetailsComponent.prototype.fetchUserWorkouts = function () {
                    var _this = this;
                    this.workoutService.getLoggedInUserWorkouts().subscribe(function (workouts) {
                        _this.userWorkouts = workouts;
                        _this.selectedWorkoutId = _this.userWorkouts[0].id;
                    });
                };
                ExerciseDetailsComponent.prototype.getYoutubeIdFromUrl = function (url) {
                    var regexp = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?[\w\?‌​=]*)?/g;
                    return regexp.exec(url)[1];
                };
                ExerciseDetailsComponent.prototype.open = function (content) {
                    var _this = this;
                    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
                        _this.workoutService.addWorkoutExerciseToWorkout(_this.workoutExerciseBindingModel, _this.selectedWorkoutId).subscribe(function (workout) {
                            _this.router.navigate(['my-workouts', workout.id]);
                        });
                        _this.selectedWorkoutId = _this.userWorkouts[0].id;
                        _this.workoutExerciseBindingModel = new _all_exercises_workout_exercise_binding_model__WEBPACK_IMPORTED_MODULE_5__["WorkoutExerciseBindingModel"]();
                    }, function (reason) {
                    });
                };
                ExerciseDetailsComponent.prototype.onPlayerInit = function (player) {
                    player.getIframe().classList.add('embed-responsive-item');
                };
                return ExerciseDetailsComponent;
            }());
            ExerciseDetailsComponent.ctorParameters = function () { return [
                { type: _exercise_service__WEBPACK_IMPORTED_MODULE_2__["ExerciseService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
                { type: _workout_workout_service__WEBPACK_IMPORTED_MODULE_7__["WorkoutService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"] }
            ]; };
            ExerciseDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-exercise-details',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./exercise-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/exercise/exercise-details/exercise-details.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./exercise-details.component.css */ "./src/main/webapp/app/exercise/exercise-details/exercise-details.component.css")).default]
                })
            ], ExerciseDetailsComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/exercise/exercise.model.ts": 
        /*!********************************************************!*\
          !*** ./src/main/webapp/app/exercise/exercise.model.ts ***!
          \********************************************************/
        /*! exports provided: Exercise */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exercise", function () { return Exercise; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Exercise = /** @class */ (function () {
                function Exercise() {
                    this.name = '';
                    this.instructions = '';
                    this.pictureURL = '';
                    this.youtubeURL = '';
                    this.majorMuscleGroup = '';
                    this.assistingMuscleGroups = [];
                }
                return Exercise;
            }());
            /***/ 
        }),
        /***/ "./src/main/webapp/app/exercise/exercise.service.ts": 
        /*!**********************************************************!*\
          !*** ./src/main/webapp/app/exercise/exercise.service.ts ***!
          \**********************************************************/
        /*! exports provided: ExerciseService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseService", function () { return ExerciseService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-settings */ "./src/main/webapp/app/app-settings.ts");
            var ExerciseService = /** @class */ (function () {
                function ExerciseService(http) {
                    this.http = http;
                    this._exercises = [];
                    this.HttpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Content-Type': 'application/json',
                        })
                    };
                }
                ExerciseService.prototype.createExercise = function (formData) {
                    return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/exercises/create", formData);
                };
                ExerciseService.prototype.fetchAllExercises = function () {
                    return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/exercises/all");
                };
                ExerciseService.prototype.getExerciseById = function (exerciseId) {
                    return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/exercises/details/" + exerciseId);
                };
                ExerciseService.prototype.getExercises = function () {
                    return this._exercises;
                };
                return ExerciseService;
            }());
            ExerciseService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ExerciseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root',
                })
            ], ExerciseService);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/exercise/selected-muscle-groups.model.ts": 
        /*!**********************************************************************!*\
          !*** ./src/main/webapp/app/exercise/selected-muscle-groups.model.ts ***!
          \**********************************************************************/
        /*! exports provided: SelectedMuscleGroupsModel */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedMuscleGroupsModel", function () { return SelectedMuscleGroupsModel; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var SelectedMuscleGroupsModel = /** @class */ (function () {
                function SelectedMuscleGroupsModel() {
                }
                return SelectedMuscleGroupsModel;
            }());
            /***/ 
        }),
        /***/ "./src/main/webapp/app/food/all-foods/all-foods.component.css": 
        /*!********************************************************************!*\
          !*** ./src/main/webapp/app/food/all-foods/all-foods.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-label-group{\r\n    background: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.calories {\r\n    background: linear-gradient(348deg, rgba(255, 255, 255, 0.5) 0%, rgba(37, 206, 209, 1) 66%);\r\n    border-radius: 30px;\r\n}\r\n\r\n.chart-container {\r\n    height: 350px;\r\n    position: relative;\r\n}\r\n\r\n.macros {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvZm9vZC9hbGwtZm9vZHMvYWxsLWZvb2RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSwyRkFBMkY7SUFDM0YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztBQUNwQyIsImZpbGUiOiJzcmMvbWFpbi93ZWJhcHAvYXBwL2Zvb2QvYWxsLWZvb2RzL2FsbC1mb29kcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbGFiZWwtZ3JvdXB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbn1cclxuXHJcbi5jYWxvcmllcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzQ4ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMCUsIHJnYmEoMzcsIDIwNiwgMjA5LCAxKSA2NiUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxufVxyXG5cclxuLmNoYXJ0LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWFjcm9zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/food/all-foods/all-foods.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/main/webapp/app/food/all-foods/all-foods.component.ts ***!
          \*******************************************************************/
        /*! exports provided: AllFoodsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllFoodsComponent", function () { return AllFoodsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _meal_meal_food_binding_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../meal/meal-food-binding-model */ "./src/main/webapp/app/meal/meal-food-binding-model.ts");
            /* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../food.service */ "./src/main/webapp/app/food/food.service.ts");
            /* harmony import */ var _meal_meal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../meal/meal.service */ "./src/main/webapp/app/meal/meal.service.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var AllFoodsComponent = /** @class */ (function () {
                function AllFoodsComponent(foodService, mealService, modalService, router, titleService) {
                    this.foodService = foodService;
                    this.mealService = mealService;
                    this.modalService = modalService;
                    this.router = router;
                    this.titleService = titleService;
                    this.filteredFoods = [];
                    this.allFoods = [];
                    this.page = 1;
                    this.pageSize = 6;
                }
                AllFoodsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.titleService.setTitle('FitBook' + '- All Foods');
                    this.mealFoodBindingModel = new _meal_meal_food_binding_model__WEBPACK_IMPORTED_MODULE_2__["MealFoodBindingModel"]();
                    this.loading = true;
                    this.foodService.getAllFoods().subscribe(function (foods) {
                        _this.allFoods = foods;
                        _this.filteredFoods = foods.slice();
                        _this.loading = false;
                    });
                    this.fetchUserMeals();
                };
                AllFoodsComponent.prototype.fetchUserMeals = function () {
                    var _this = this;
                    this.mealService.getLoggedInUserMeals().subscribe(function (meals) {
                        if (meals) {
                            _this.userMeals = meals;
                            _this.selectedMealId = meals[0].id;
                        }
                    });
                };
                AllFoodsComponent.prototype.open = function (content, foodId) {
                    var _this = this;
                    this.selectedFoodForModal = this.allFoods.find(function (f) { return f.id === foodId; });
                    this.makeChartDataForMacroNutrients();
                    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
                        _this.mealFoodBindingModel.foodId = foodId;
                        _this.mealService.addMealFoodToMeal(_this.mealFoodBindingModel, _this.selectedMealId).subscribe(function (meal) {
                            _this.router.navigate(['my-meals', meal.id]);
                        });
                        _this.selectedMealId = _this.userMeals[0].id;
                        _this.mealFoodBindingModel = new _meal_meal_food_binding_model__WEBPACK_IMPORTED_MODULE_2__["MealFoodBindingModel"]();
                    }, function (reason) {
                    });
                };
                AllFoodsComponent.prototype.makeChartDataForMacroNutrients = function () {
                    this.mealFoodProteinPerServing = Math.floor(this.mealFoodBindingModel.serving * (this.selectedFoodForModal.proteinPerHundred / 100));
                    this.mealFoodCarbohydratesPerServing = Math.floor(this.mealFoodBindingModel.serving * (this.selectedFoodForModal.carbohydratesPerHundred / 100));
                    this.mealFoodFatsPerServing = Math.floor(this.mealFoodBindingModel.serving * (this.selectedFoodForModal.fatsPerHundred / 100));
                    this.mealFoodCaloriesPerServing = Math.floor(this.mealFoodBindingModel.serving * (this.selectedFoodForModal.caloriesPerHundred / 100));
                    this.macroNutrientsData = [
                        {
                            "name": "Protein",
                            "value": this.mealFoodProteinPerServing
                        },
                        {
                            "name": "Carbohydrates",
                            "value": this.mealFoodCarbohydratesPerServing
                        },
                        {
                            "name": "Fats",
                            "value": this.mealFoodFatsPerServing
                        },
                    ];
                };
                return AllFoodsComponent;
            }());
            AllFoodsComponent.ctorParameters = function () { return [
                { type: _food_service__WEBPACK_IMPORTED_MODULE_3__["FoodService"] },
                { type: _meal_meal_service__WEBPACK_IMPORTED_MODULE_4__["MealService"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"] }
            ]; };
            AllFoodsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-all-foods',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-foods.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/food/all-foods/all-foods.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-foods.component.css */ "./src/main/webapp/app/food/all-foods/all-foods.component.css")).default]
                })
            ], AllFoodsComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/food/food-binding.model.ts": 
        /*!********************************************************!*\
          !*** ./src/main/webapp/app/food/food-binding.model.ts ***!
          \********************************************************/
        /*! exports provided: FoodBindingModel */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodBindingModel", function () { return FoodBindingModel; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var FoodBindingModel = /** @class */ (function () {
                function FoodBindingModel() {
                    this.name = '';
                    this.description = '';
                }
                return FoodBindingModel;
            }());
            /***/ 
        }),
        /***/ "./src/main/webapp/app/food/food-card/food-card.component.css": 
        /*!********************************************************************!*\
          !*** ./src/main/webapp/app/food/food-card/food-card.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".card {\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n    border-radius: 30px;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.thumbnail {\r\n    position: relative;\r\n    width: 350px;\r\n    height: 250px;\r\n    overflow: hidden;\r\n}\r\n\r\n.thumbnail img {\r\n    min-height: 250px;\r\n    margin: auto\r\n}\r\n\r\n.btn {\r\n    border-radius: 10px;\r\n}\r\n\r\n.buttons-wrapper {\r\n    position: absolute;\r\n    bottom: 1em;\r\n}\r\n\r\n.buttons-wrapper.right {\r\n    right: 1em;\r\n}\r\n\r\n.buttons-wrapper.left {\r\n    left: 1em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvZm9vZC9mb29kLWNhcmQvZm9vZC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1Q0FBdUM7SUFDdkMsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL21haW4vd2ViYXBwL2FwcC9mb29kL2Zvb2QtY2FyZC9mb29kLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udGh1bWJuYWlsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udGh1bWJuYWlsIGltZyB7XHJcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICAgIG1hcmdpbjogYXV0b1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5idXR0b25zLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbi5idXR0b25zLXdyYXBwZXIucmlnaHQge1xyXG4gICAgcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuLmJ1dHRvbnMtd3JhcHBlci5sZWZ0IHtcclxuICAgIGxlZnQ6IDFlbTtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/food/food-card/food-card.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/main/webapp/app/food/food-card/food-card.component.ts ***!
          \*******************************************************************/
        /*! exports provided: FoodCardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodCardComponent", function () { return FoodCardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FoodCardComponent = /** @class */ (function () {
                function FoodCardComponent() {
                    this.modalOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                FoodCardComponent.prototype.ngOnInit = function () {
                };
                FoodCardComponent.prototype.addToMealHandler = function (id) {
                    this.modalOpen.emit(id);
                };
                return FoodCardComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], FoodCardComponent.prototype, "food", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], FoodCardComponent.prototype, "modalOpen", void 0);
            FoodCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-food-card',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./food-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/food/food-card/food-card.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./food-card.component.css */ "./src/main/webapp/app/food/food-card/food-card.component.css")).default]
                })
            ], FoodCardComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/food/food-details/food-details.component.css": 
        /*!**************************************************************************!*\
          !*** ./src/main/webapp/app/food/food-details/food-details.component.css ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".food-container {\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n    background: rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n.food-container .food-intro img {\r\n    border-radius: 40px;\r\n}\r\n\r\n.food-intro img {\r\n    max-height: 300px;\r\n}\r\n\r\n.calories {\r\n    background: linear-gradient(348deg, rgba(255, 255, 255, 0.5) 0%, rgba(37, 206, 209, 1) 66%);\r\n    border-radius: 30px;\r\n}\r\n\r\n.chart-container {\r\n    height: 350px;\r\n    position: relative;\r\n}\r\n\r\n.macros {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvZm9vZC9mb29kLWRldGFpbHMvZm9vZC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1Q0FBdUM7SUFDdkMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkZBQTJGO0lBQzNGLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL21haW4vd2ViYXBwL2FwcC9mb29kL2Zvb2QtZGV0YWlscy9mb29kLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb29kLWNvbnRhaW5lciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbn1cclxuXHJcbi5mb29kLWNvbnRhaW5lciAuZm9vZC1pbnRybyBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxufVxyXG5cclxuLmZvb2QtaW50cm8gaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4uY2Fsb3JpZXMge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM0OGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDAlLCByZ2JhKDM3LCAyMDYsIDIwOSwgMSkgNjYlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuLmNoYXJ0LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWFjcm9zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/food/food-details/food-details.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/main/webapp/app/food/food-details/food-details.component.ts ***!
          \*************************************************************************/
        /*! exports provided: FoodDetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodDetailsComponent", function () { return FoodDetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../food.service */ "./src/main/webapp/app/food/food.service.ts");
            /* harmony import */ var _food_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../food.model */ "./src/main/webapp/app/food/food.model.ts");
            /* harmony import */ var _meal_meal_food_binding_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../meal/meal-food-binding-model */ "./src/main/webapp/app/meal/meal-food-binding-model.ts");
            /* harmony import */ var _meal_meal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../meal/meal.service */ "./src/main/webapp/app/meal/meal.service.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var FoodDetailsComponent = /** @class */ (function () {
                function FoodDetailsComponent(foodService, route, modalService, mealService, router, titleService) {
                    this.foodService = foodService;
                    this.route = route;
                    this.modalService = modalService;
                    this.mealService = mealService;
                    this.router = router;
                    this.titleService = titleService;
                }
                FoodDetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.titleService.setTitle('FitBook' + '- Food Details');
                    this.router.events.subscribe(function (evt) {
                        if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                            return;
                        }
                        window.scrollTo(0, 0);
                    });
                    this.selectedFood = new _food_model__WEBPACK_IMPORTED_MODULE_5__["Food"]();
                    this.mealFoodBindingModel = new _meal_meal_food_binding_model__WEBPACK_IMPORTED_MODULE_6__["MealFoodBindingModel"]();
                    this.route.params.subscribe(function (params) {
                        if (params['id']) {
                            _this.foodService.getFoodById(params['id']).subscribe(function (food) {
                                _this.selectedFood = food;
                                _this.mealFoodBindingModel.foodId = food.id;
                                _this.makeChartDataForMacroNutrients();
                            });
                        }
                    });
                    this.fetchUserMeals();
                };
                FoodDetailsComponent.prototype.makeChartDataForMacroNutrients = function () {
                    this.mealFoodProteinPerServing = Math.floor(this.mealFoodBindingModel.serving * (this.selectedFood.proteinPerHundred / 100));
                    this.mealFoodCarbohydratesPerServing = Math.floor(this.mealFoodBindingModel.serving * (this.selectedFood.carbohydratesPerHundred / 100));
                    this.mealFoodFatsPerServing = Math.floor(this.mealFoodBindingModel.serving * (this.selectedFood.fatsPerHundred / 100));
                    this.mealFoodCaloriesPerServing = Math.floor(this.mealFoodBindingModel.serving * (this.selectedFood.caloriesPerHundred / 100));
                    this.macroNutrientsData = [
                        {
                            "name": "Protein",
                            "value": this.mealFoodProteinPerServing
                        },
                        {
                            "name": "Carbohydrates",
                            "value": this.mealFoodCarbohydratesPerServing
                        },
                        {
                            "name": "Fats",
                            "value": this.mealFoodFatsPerServing
                        },
                    ];
                };
                FoodDetailsComponent.prototype.fetchUserMeals = function () {
                    var _this = this;
                    this.mealService.getLoggedInUserMeals().subscribe(function (meals) {
                        _this.userMeals = meals;
                        _this.selectedMealId = _this.userMeals[0].id;
                    });
                };
                FoodDetailsComponent.prototype.open = function (content) {
                    var _this = this;
                    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', }).result.then(function (result) {
                        _this.mealService.addMealFoodToMeal(_this.mealFoodBindingModel, _this.selectedMealId).subscribe(function (meal) {
                            _this.router.navigate(['my-meals', meal.id]);
                        });
                        _this.selectedMealId = _this.userMeals[0].id;
                        _this.mealFoodBindingModel = new _meal_meal_food_binding_model__WEBPACK_IMPORTED_MODULE_6__["MealFoodBindingModel"]();
                    }, function (reason) {
                        _this.mealFoodBindingModel = new _meal_meal_food_binding_model__WEBPACK_IMPORTED_MODULE_6__["MealFoodBindingModel"]();
                    });
                };
                return FoodDetailsComponent;
            }());
            FoodDetailsComponent.ctorParameters = function () { return [
                { type: _food_service__WEBPACK_IMPORTED_MODULE_4__["FoodService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
                { type: _meal_meal_service__WEBPACK_IMPORTED_MODULE_7__["MealService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"] }
            ]; };
            FoodDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-food-details',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./food-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/food/food-details/food-details.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./food-details.component.css */ "./src/main/webapp/app/food/food-details/food-details.component.css")).default]
                })
            ], FoodDetailsComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/food/food.component.css": 
        /*!*****************************************************!*\
          !*** ./src/main/webapp/app/food/food.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbWFpbi93ZWJhcHAvYXBwL2Zvb2QvZm9vZC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/food/food.component.ts": 
        /*!****************************************************!*\
          !*** ./src/main/webapp/app/food/food.component.ts ***!
          \****************************************************/
        /*! exports provided: FoodComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodComponent", function () { return FoodComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FoodComponent = /** @class */ (function () {
                function FoodComponent() {
                }
                FoodComponent.prototype.ngOnInit = function () {
                };
                return FoodComponent;
            }());
            FoodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-food',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./food.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/food/food.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./food.component.css */ "./src/main/webapp/app/food/food.component.css")).default]
                })
            ], FoodComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/food/food.model.ts": 
        /*!************************************************!*\
          !*** ./src/main/webapp/app/food/food.model.ts ***!
          \************************************************/
        /*! exports provided: Food */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Food", function () { return Food; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Food = /** @class */ (function () {
                function Food() {
                    this.name = '';
                    this.description = '';
                    this.pictureURL = '';
                }
                return Food;
            }());
            /***/ 
        }),
        /***/ "./src/main/webapp/app/food/food.service.ts": 
        /*!**************************************************!*\
          !*** ./src/main/webapp/app/food/food.service.ts ***!
          \**************************************************/
        /*! exports provided: FoodService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodService", function () { return FoodService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-settings */ "./src/main/webapp/app/app-settings.ts");
            var FoodService = /** @class */ (function () {
                function FoodService(http) {
                    this.http = http;
                    this.applicationTypeHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'text/plain');
                }
                FoodService.prototype.fetchFoodsFromDataCentralByFoodName = function (foodName) {
                    return this.http.post('https://api.nal.usda.gov/fdc/v1/search?api_key=BkVA7N1vC11VKz7U8dRSEY2srId3cL4T986gpxbo', { "generalSearchInput": foodName });
                };
                FoodService.prototype.fetchFoodDetailsByFoodId = function (foodId) {
                    return this.http.get("https://api.nal.usda.gov/fdc/v1/" + foodId + "?api_key=BkVA7N1vC11VKz7U8dRSEY2srId3cL4T986gpxbo", { headers: this.applicationTypeHeader });
                };
                FoodService.prototype.createFood = function (formData) {
                    return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/foods/create", formData);
                };
                FoodService.prototype.getFoodById = function (foodId) {
                    return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/foods/details/" + foodId);
                };
                FoodService.prototype.getAllFoods = function () {
                    return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/foods/all/");
                };
                return FoodService;
            }());
            FoodService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            FoodService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root',
                })
            ], FoodService);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/food/search-food/search-food.component.css": 
        /*!************************************************************************!*\
          !*** ./src/main/webapp/app/food/search-food/search-food.component.css ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".card {\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n    border-radius: 30px;\r\n    background: rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n.results-container {\r\n    background: rgba(255, 255, 255, 0.6);\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.calories {\r\n    background: linear-gradient(348deg, rgba(255, 255, 255, 0.5) 0%, rgba(37, 206, 209, 1) 66%);\r\n    border-radius: 30px;\r\n}\r\n\r\n.chart-container {\r\n    height: 350px;\r\n    position: relative;\r\n}\r\n\r\n.macros {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.card-signin.create-food .card-img-left {\r\n    width: 60%;\r\n    background: scroll center url('createfoodgif.gif');\r\n    background-size: cover;\r\n}\r\n\r\n.card-body {\r\n    position: relative;\r\n}\r\n\r\n.close-btn {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 20px;\r\n}\r\n\r\n.macro-container label {\r\n    position: relative;\r\n}\r\n\r\n.macro-container label::after {\r\n    content: 'g';\r\n    display: block;\r\n    position: absolute;\r\n    right: -130px;\r\n    transition: all .05s ease-in-out;\r\n    z-index: 100;\r\n}\r\n\r\n.card-signin {\r\n    border-radius: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvZm9vZC9zZWFyY2gtZm9vZC9zZWFyY2gtZm9vZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUNBQXVDO0lBQ3ZDLG1CQUFtQjtJQUNuQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksMkZBQTJGO0lBQzNGLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0RBQXVGO0lBQ3ZGLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9tYWluL3dlYmFwcC9hcHAvZm9vZC9zZWFyY2gtZm9vZC9zZWFyY2gtZm9vZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxufVxyXG5cclxuLnJlc3VsdHMtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmNhbG9yaWVzIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNDhkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAwJSwgcmdiYSgzNywgMjA2LCAyMDksIDEpIDY2JSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcbi5jaGFydC1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1hY3JvcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uY2FyZC1zaWduaW4uY3JlYXRlLWZvb2QgLmNhcmQtaW1nLWxlZnQge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGJhY2tncm91bmQ6IHNjcm9sbCBjZW50ZXIgdXJsKCdzcmMvbWFpbi93ZWJhcHAvYXNzZXRzL3N0YXRpYy9pbWFnZXMvY3JlYXRlZm9vZGdpZi5naWYnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2xvc2UtYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ubWFjcm8tY29udGFpbmVyIGxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1hY3JvLWNvbnRhaW5lciBsYWJlbDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJ2cnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLTEzMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4wNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbi5jYXJkLXNpZ25pbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/food/search-food/search-food.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/main/webapp/app/food/search-food/search-food.component.ts ***!
          \***********************************************************************/
        /*! exports provided: SearchFoodComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFoodComponent", function () { return SearchFoodComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../food.service */ "./src/main/webapp/app/food/food.service.ts");
            /* harmony import */ var _food_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../food.model */ "./src/main/webapp/app/food/food.model.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _food_binding_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../food-binding.model */ "./src/main/webapp/app/food/food-binding.model.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var SearchFoodComponent = /** @class */ (function () {
                function SearchFoodComponent(foodService, modalService, router, titleService) {
                    this.foodService = foodService;
                    this.modalService = modalService;
                    this.router = router;
                    this.titleService = titleService;
                    this.foodSearchResults = [];
                    this.searchOccurred = false;
                    this.page = 1;
                    this.pageSize = 6;
                }
                SearchFoodComponent.prototype.ngOnInit = function () {
                    this.titleService.setTitle('FitBook' + '- Create Food');
                    this.foodBindingModel = new _food_binding_model__WEBPACK_IMPORTED_MODULE_5__["FoodBindingModel"]();
                };
                SearchFoodComponent.prototype.onSearchHandler = function () {
                    var _this = this;
                    this.loading = true;
                    this.foodService.fetchFoodsFromDataCentralByFoodName(this.searchFoodName).subscribe(function (resp) {
                        _this.foodSearchResults = [];
                        _this.page = 1;
                        resp.foods.forEach(function (food) {
                            var foodInfo = new _food_model__WEBPACK_IMPORTED_MODULE_3__["Food"]();
                            foodInfo.description = food.description;
                            foodInfo.id = food.fdcId;
                            _this.foodSearchResults.push(foodInfo);
                        });
                        _this.searchOccurred = true;
                        _this.loading = false;
                    });
                };
                SearchFoodComponent.prototype.open = function (content, foodId) {
                    var _this = this;
                    this.foodService.fetchFoodDetailsByFoodId(foodId).subscribe(function (resp) {
                        _this.selectedFoodForModal = new _food_model__WEBPACK_IMPORTED_MODULE_3__["Food"]();
                        _this.foodBindingModel = new _food_binding_model__WEBPACK_IMPORTED_MODULE_5__["FoodBindingModel"]();
                        _this.selectedFoodForModal.description = resp.description;
                        var foodNutrients = resp.foodNutrients;
                        for (var _i = 0, foodNutrients_1 = foodNutrients; _i < foodNutrients_1.length; _i++) {
                            var foodNutrient = foodNutrients_1[_i];
                            switch (foodNutrient.nutrient.id) {
                                case 1003:
                                    _this.selectedFoodForModal.proteinPerHundred = Math.round(foodNutrient.amount);
                                    break;
                                case 1005:
                                    _this.selectedFoodForModal.carbohydratesPerHundred = Math.round(foodNutrient.amount);
                                    break;
                                case 1004:
                                    _this.selectedFoodForModal.fatsPerHundred = Math.round(foodNutrient.amount);
                                    break;
                            }
                        }
                        _this.makeChartDataForMacroNutrients();
                        _this.selectedFoodForModal.caloriesPerHundred = Math.round((4 * _this.selectedFoodForModal.proteinPerHundred +
                            4 * _this.selectedFoodForModal.carbohydratesPerHundred + 9 * _this.selectedFoodForModal.fatsPerHundred) * 100) / 100;
                        _this.foodBindingModel = {
                            name: '',
                            description: _this.selectedFoodForModal.description,
                            proteinPerHundred: _this.selectedFoodForModal.proteinPerHundred,
                            carbohydratesPerHundred: _this.selectedFoodForModal.carbohydratesPerHundred,
                            fatsPerHundred: _this.selectedFoodForModal.fatsPerHundred
                        };
                    });
                    this.modalService.open(content, {
                        ariaLabelledBy: 'modal-basic-title',
                        size: 'lg',
                        windowClass: 'modal-edit'
                    }).result.then(function (result) {
                    }, function (reason) {
                    });
                };
                SearchFoodComponent.prototype.handleFileInput = function (files, chooseFileLabel) {
                    var file = files[0];
                    var pattern = /image-*/;
                    if (file && file.type.match(pattern)) {
                        this.pictureFile = file;
                        chooseFileLabel.innerHTML = this.pictureFile.name;
                    }
                    else {
                        this.file = undefined;
                        this.pictureFile = undefined;
                        chooseFileLabel.innerHTML = 'Choose file';
                    }
                };
                SearchFoodComponent.prototype.makeChartDataForMacroNutrients = function () {
                    this.macroNutrientsData = [
                        {
                            "name": "Protein",
                            "value": this.selectedFoodForModal.proteinPerHundred,
                        },
                        {
                            "name": "Carbohydrates",
                            "value": this.selectedFoodForModal.carbohydratesPerHundred,
                        },
                        {
                            "name": "Fats",
                            "value": this.selectedFoodForModal.fatsPerHundred,
                        },
                    ];
                };
                SearchFoodComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.modalService.dismissAll();
                    this.loading = true;
                    var formData = new FormData();
                    var foodBlob = new Blob([JSON.stringify(this.foodBindingModel)], { type: 'application/json' });
                    formData.append('foodBindingModel', foodBlob);
                    formData.append('file', this.pictureFile);
                    this.foodService.createFood(formData)
                        .subscribe(function (food) {
                        _this.loading = false;
                        _this.router.navigate(['/foods/details/' + food.id]);
                    });
                };
                return SearchFoodComponent;
            }());
            SearchFoodComponent.ctorParameters = function () { return [
                { type: _food_service__WEBPACK_IMPORTED_MODULE_2__["FoodService"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"] }
            ]; };
            SearchFoodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-search-food',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-food.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/food/search-food/search-food.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-food.component.css */ "./src/main/webapp/app/food/search-food/search-food.component.css")).default]
                })
            ], SearchFoodComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/footer/footer.component.css": 
        /*!*********************************************************!*\
          !*** ./src/main/webapp/app/footer/footer.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbWFpbi93ZWJhcHAvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/footer/footer.component.ts": 
        /*!********************************************************!*\
          !*** ./src/main/webapp/app/footer/footer.component.ts ***!
          \********************************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                }
                FooterComponent.prototype.ngOnInit = function () {
                };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/main/webapp/app/footer/footer.component.css")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/get-constant-view-name.pipe.ts": 
        /*!************************************************************!*\
          !*** ./src/main/webapp/app/get-constant-view-name.pipe.ts ***!
          \************************************************************/
        /*! exports provided: GetConstantViewNamePipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetConstantViewNamePipe", function () { return GetConstantViewNamePipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var GetConstantViewNamePipe = /** @class */ (function () {
                function GetConstantViewNamePipe() {
                }
                GetConstantViewNamePipe.prototype.transform = function (camelCaseString) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return camelCaseString
                        .replace(/([A-Z])/g, ' $1')
                        .replace(/^./, function (str) {
                        return str.toUpperCase();
                    });
                };
                return GetConstantViewNamePipe;
            }());
            GetConstantViewNamePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'getConstantViewName'
                })
            ], GetConstantViewNamePipe);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/home/create-fitness-profile/create-fitness-profile.component.css": 
        /*!**********************************************************************************************!*\
          !*** ./src/main/webapp/app/home/create-fitness-profile/create-fitness-profile.component.css ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".card-signin.male-fitness-profile .card-img-left {\r\n  width: 80%;\r\n  background: scroll center url('male-fitness-profile.gif');\r\n  background-size: cover;\r\n}\r\n\r\n.card-signin.female-fitness-profile .card-img-left {\r\n  width: 80%;\r\n  background: scroll center url('female-fitness-profile.gif');\r\n  background-size: cover;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9jcmVhdGUtZml0bmVzcy1wcm9maWxlL2NyZWF0ZS1maXRuZXNzLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVix5REFBOEY7RUFDOUYsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDJEQUFnRztFQUNoRyxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2NyZWF0ZS1maXRuZXNzLXByb2ZpbGUvY3JlYXRlLWZpdG5lc3MtcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtc2lnbmluLm1hbGUtZml0bmVzcy1wcm9maWxlIC5jYXJkLWltZy1sZWZ0IHtcclxuICB3aWR0aDogODAlO1xyXG4gIGJhY2tncm91bmQ6IHNjcm9sbCBjZW50ZXIgdXJsKCdzcmMvbWFpbi93ZWJhcHAvYXNzZXRzL3N0YXRpYy9pbWFnZXMvbWFsZS1maXRuZXNzLXByb2ZpbGUuZ2lmJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNhcmQtc2lnbmluLmZlbWFsZS1maXRuZXNzLXByb2ZpbGUgLmNhcmQtaW1nLWxlZnQge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgYmFja2dyb3VuZDogc2Nyb2xsIGNlbnRlciB1cmwoJ3NyYy9tYWluL3dlYmFwcC9hc3NldHMvc3RhdGljL2ltYWdlcy9mZW1hbGUtZml0bmVzcy1wcm9maWxlLmdpZicpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/home/create-fitness-profile/create-fitness-profile.component.ts": 
        /*!*********************************************************************************************!*\
          !*** ./src/main/webapp/app/home/create-fitness-profile/create-fitness-profile.component.ts ***!
          \*********************************************************************************************/
        /*! exports provided: CreateFitnessProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFitnessProfileComponent", function () { return CreateFitnessProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user/user.service */ "./src/main/webapp/app/user/user.service.ts");
            /* harmony import */ var _fitness_profile_binding_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fitness-profile-binding.model */ "./src/main/webapp/app/home/create-fitness-profile/fitness-profile-binding.model.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var CreateFitnessProfileComponent = /** @class */ (function () {
                function CreateFitnessProfileComponent(userService, titleService) {
                    this.userService = userService;
                    this.titleService = titleService;
                }
                CreateFitnessProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.titleService.setTitle('FitBook' + '- Create Fitness Profile');
                    this.fitnessProfileBindingModel = new _fitness_profile_binding_model__WEBPACK_IMPORTED_MODULE_3__["FitnessProfileBindingModel"]();
                    this.userService.getLoggedInUserObservable().subscribe(function (user) {
                        if (user) {
                            _this.userGender = user.gender;
                            _this.userFirstName = user.firstName;
                        }
                    });
                };
                CreateFitnessProfileComponent.prototype.onWeightGoalChange = function (eventTarget) {
                    if (eventTarget.value === 'maintainWeight' || eventTarget.value === '') {
                        this.fitnessProfileBindingModel.weightChangeRate = '';
                    }
                };
                CreateFitnessProfileComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.loading = true;
                    this.userService.setFitnessProfileToLoggedInUser(this.fitnessProfileBindingModel).subscribe(function (data) {
                        if (data) {
                            _this.userService.loadLoggedUser();
                            _this.loading = false;
                        }
                    });
                };
                return CreateFitnessProfileComponent;
            }());
            CreateFitnessProfileComponent.ctorParameters = function () { return [
                { type: _user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
            ]; };
            CreateFitnessProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-create-fitness-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-fitness-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/home/create-fitness-profile/create-fitness-profile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-fitness-profile.component.css */ "./src/main/webapp/app/home/create-fitness-profile/create-fitness-profile.component.css")).default]
                })
            ], CreateFitnessProfileComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/home/create-fitness-profile/fitness-profile-binding.model.ts": 
        /*!******************************************************************************************!*\
          !*** ./src/main/webapp/app/home/create-fitness-profile/fitness-profile-binding.model.ts ***!
          \******************************************************************************************/
        /*! exports provided: FitnessProfileBindingModel */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitnessProfileBindingModel", function () { return FitnessProfileBindingModel; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var FitnessProfileBindingModel = /** @class */ (function () {
                function FitnessProfileBindingModel() {
                    this.sportsExperience = '';
                    this.activityLevel = '';
                    this.weightGoal = '';
                    this.weightChangeRate = '';
                }
                return FitnessProfileBindingModel;
            }());
            /***/ 
        }),
        /***/ "./src/main/webapp/app/home/edit-fitness-profile/edit-fitness-profile.component.css": 
        /*!******************************************************************************************!*\
          !*** ./src/main/webapp/app/home/edit-fitness-profile/edit-fitness-profile.component.css ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".card-signin.male-fitness-profile .card-img-left {\r\n  width: 80%;\r\n  background: scroll center url('male-fitness-profile.gif');\r\n  background-size: cover;\r\n}\r\n\r\n.card-signin.female-fitness-profile .card-img-left {\r\n  width: 80%;\r\n  background: scroll center url('female-fitness-profile.gif');\r\n  background-size: cover;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9lZGl0LWZpdG5lc3MtcHJvZmlsZS9lZGl0LWZpdG5lc3MtcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLHlEQUE4RjtFQUM5RixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsMkRBQWdHO0VBQ2hHLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvZWRpdC1maXRuZXNzLXByb2ZpbGUvZWRpdC1maXRuZXNzLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXNpZ25pbi5tYWxlLWZpdG5lc3MtcHJvZmlsZSAuY2FyZC1pbWctbGVmdCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBiYWNrZ3JvdW5kOiBzY3JvbGwgY2VudGVyIHVybCgnc3JjL21haW4vd2ViYXBwL2Fzc2V0cy9zdGF0aWMvaW1hZ2VzL21hbGUtZml0bmVzcy1wcm9maWxlLmdpZicpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jYXJkLXNpZ25pbi5mZW1hbGUtZml0bmVzcy1wcm9maWxlIC5jYXJkLWltZy1sZWZ0IHtcclxuICB3aWR0aDogODAlO1xyXG4gIGJhY2tncm91bmQ6IHNjcm9sbCBjZW50ZXIgdXJsKCdzcmMvbWFpbi93ZWJhcHAvYXNzZXRzL3N0YXRpYy9pbWFnZXMvZmVtYWxlLWZpdG5lc3MtcHJvZmlsZS5naWYnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/home/edit-fitness-profile/edit-fitness-profile.component.ts": 
        /*!*****************************************************************************************!*\
          !*** ./src/main/webapp/app/home/edit-fitness-profile/edit-fitness-profile.component.ts ***!
          \*****************************************************************************************/
        /*! exports provided: EditFitnessProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFitnessProfileComponent", function () { return EditFitnessProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _create_fitness_profile_fitness_profile_binding_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create-fitness-profile/fitness-profile-binding.model */ "./src/main/webapp/app/home/create-fitness-profile/fitness-profile-binding.model.ts");
            /* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user/user.service */ "./src/main/webapp/app/user/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var EditFitnessProfileComponent = /** @class */ (function () {
                function EditFitnessProfileComponent(userService, router, titleService) {
                    this.userService = userService;
                    this.router = router;
                    this.titleService = titleService;
                    this.formChanged = false;
                }
                EditFitnessProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.titleService.setTitle('FitBook' + '- Edit Fitness Profile');
                    this.fitnessProfileBindingModel = new _create_fitness_profile_fitness_profile_binding_model__WEBPACK_IMPORTED_MODULE_2__["FitnessProfileBindingModel"]();
                    this.userService.getLoggedInUserObservable().subscribe(function (user) {
                        if (user) {
                            _this.userGender = user.gender;
                            _this.fitnessProfileBindingModel.weight = user.fitnessProfile.weight;
                            _this.fitnessProfileBindingModel.height = user.fitnessProfile.height;
                            _this.fitnessProfileBindingModel.age = user.fitnessProfile.age;
                            _this.fitnessProfileBindingModel.activityLevel = user.fitnessProfile.activityLevel;
                            _this.fitnessProfileBindingModel.weightGoal = user.fitnessProfile.weightGoal;
                            _this.fitnessProfileBindingModel.weightChangeRate = user.fitnessProfile.weightChangeRate;
                            _this.fitnessProfileBindingModel.sportsExperience = user.fitnessProfile.sportsExperience;
                        }
                    });
                };
                EditFitnessProfileComponent.prototype.onWeightGoalChange = function (eventTarget) {
                    if (eventTarget.value === 'maintainWeight' || eventTarget.value === '') {
                        this.fitnessProfileBindingModel.weightChangeRate = 'none';
                    }
                    else {
                        this.fitnessProfileBindingModel.weightChangeRate = 'slow';
                    }
                };
                EditFitnessProfileComponent.prototype.onSubmit = function () {
                    var _this = this;
                    if (!this.formChanged) {
                        this.router.navigate(['/home']);
                    }
                    this.loading = true;
                    this.userService.updateFitnessProfileOnLoggedInUser(this.fitnessProfileBindingModel).subscribe(function (data) {
                        if (data) {
                            _this.userService.loggedUser.next(null);
                            _this.userService.loadLoggedUser();
                            _this.router.navigate(['/home']);
                        }
                    });
                };
                EditFitnessProfileComponent.prototype.onFormChange = function () {
                    this.formChanged = true;
                };
                return EditFitnessProfileComponent;
            }());
            EditFitnessProfileComponent.ctorParameters = function () { return [
                { type: _user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }
            ]; };
            EditFitnessProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-edit-fitness-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-fitness-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/home/edit-fitness-profile/edit-fitness-profile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-fitness-profile.component.css */ "./src/main/webapp/app/home/edit-fitness-profile/edit-fitness-profile.component.css")).default]
                })
            ], EditFitnessProfileComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/home/fitness-profile.guard.ts": 
        /*!***********************************************************!*\
          !*** ./src/main/webapp/app/home/fitness-profile.guard.ts ***!
          \***********************************************************/
        /*! exports provided: FitnessProfileGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitnessProfileGuard", function () { return FitnessProfileGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user.service */ "./src/main/webapp/app/user/user.service.ts");
            var FitnessProfileGuard = /** @class */ (function () {
                function FitnessProfileGuard(userService, router) {
                    this.userService = userService;
                    this.router = router;
                }
                FitnessProfileGuard.prototype.canActivate = function (route, router) {
                    return this.userService.getLoggedUserFitnessProfileCondition() ? true : this.router.createUrlTree(['/home']);
                };
                return FitnessProfileGuard;
            }());
            FitnessProfileGuard.ctorParameters = function () { return [
                { type: _user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
            ]; };
            FitnessProfileGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
            ], FitnessProfileGuard);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/home/home.component.css": 
        /*!*****************************************************!*\
          !*** ./src/main/webapp/app/home/home.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/home/home.component.ts": 
        /*!****************************************************!*\
          !*** ./src/main/webapp/app/home/home.component.ts ***!
          \****************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/user.service */ "./src/main/webapp/app/user/user.service.ts");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(userService) {
                    this.userService = userService;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.loading = true;
                    this.userService.getLoggedInUserObservable().subscribe(function (user) {
                        if (user) {
                            _this.hasFitnessProfile = !!user.fitnessProfile;
                            _this.loading = false;
                        }
                    });
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/main/webapp/app/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/home/logged.guard.ts": 
        /*!**************************************************!*\
          !*** ./src/main/webapp/app/home/logged.guard.ts ***!
          \**************************************************/
        /*! exports provided: LoggedGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedGuard", function () { return LoggedGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/main/webapp/app/auth/auth.service.ts");
            var LoggedGuard = /** @class */ (function () {
                function LoggedGuard(authService, router) {
                    this.authService = authService;
                    this.router = router;
                }
                LoggedGuard.prototype.canActivate = function (route, router) {
                    var _this = this;
                    return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
                        var isAuth = !!user;
                        if (!isAuth) {
                            return true;
                        }
                        return _this.router.createUrlTree(['/home']);
                    }));
                };
                return LoggedGuard;
            }());
            LoggedGuard.ctorParameters = function () { return [
                { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
            ]; };
            LoggedGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
            ], LoggedGuard);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/home/my-profile/my-profile.component.css": 
        /*!**********************************************************************!*\
          !*** ./src/main/webapp/app/home/my-profile/my-profile.component.css ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".fitness-profile-wrapper {\r\n\r\n}\r\n\r\n.center-cropped {\r\n  -o-object-fit: none;\r\n     object-fit: none; /* Do not scale the image */\r\n  -o-object-position: center;\r\n     object-position: center; /* Center the image within the element */\r\n}\r\n\r\n.fitness-profile-wrapper img {\r\n  border-radius: 50%;\r\n  width: 300px;\r\n  height: 300px;\r\n}\r\n\r\n.fitness-profile-wrapper .info {\r\n  background: rgba(255, 255, 255, 0.5);\r\n  border-radius: 30px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.card {\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.calories {\r\n  background: linear-gradient(348deg, rgba(255, 255, 255, 0.5) 0%, rgba(37, 206, 209, 1) 66%);\r\n  border-radius: 30px;\r\n}\r\n\r\n.sports-experience {\r\n  background: linear-gradient(348deg, rgba(20, 72, 0, 1) 0%, rgba(84, 209, 37, 1) 70%);\r\n}\r\n\r\n.height {\r\n  background: linear-gradient(349deg, rgba(0, 34, 72, 1) 0%, rgba(37, 93, 209, 1) 70%);\r\n}\r\n\r\n.weight {\r\n  background: linear-gradient(349deg, rgba(184, 161, 0, 1) 0%, rgba(255, 222, 0, 1) 70%);\r\n}\r\n\r\n.activity {\r\n  background: linear-gradient(349deg, rgba(129, 20, 20, 1) 0%, rgba(255, 0, 0, 1) 70%);\r\n}\r\n\r\n.weight-goal {\r\n  background: linear-gradient(349deg, rgba(124,20,129,1) 0%, rgba(216,7,226,1) 70%);\r\n}\r\n\r\n.weight-change-rate {\r\n  background: linear-gradient(349deg, rgba(100,143,113,1) 0%, rgba(136,181,150,1) 70%);\r\n}\r\n\r\n.chart-container {\r\n  height: 350px;\r\n  position: relative;\r\n}\r\n\r\n.macros {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9teS1wcm9maWxlL215LXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTtFQUNFLG1CQUFnQjtLQUFoQixnQkFBZ0IsRUFBRSwyQkFBMkI7RUFDN0MsMEJBQXVCO0tBQXZCLHVCQUF1QixFQUFFLHdDQUF3QztBQUNuRTs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQix1Q0FBdUM7QUFDekM7O0FBR0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSwyRkFBMkY7RUFDM0YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0ZBQW9GO0FBQ3RGOztBQUVBO0VBQ0Usb0ZBQW9GO0FBQ3RGOztBQUVBO0VBQ0Usc0ZBQXNGO0FBQ3hGOztBQUVBO0VBQ0Usb0ZBQW9GO0FBQ3RGOztBQUVBO0VBQ0UsaUZBQWlGO0FBQ25GOztBQUVBO0VBQ0Usb0ZBQW9GO0FBQ3RGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQyIsImZpbGUiOiJzcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvbXktcHJvZmlsZS9teS1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZml0bmVzcy1wcm9maWxlLXdyYXBwZXIge1xyXG5cclxufVxyXG5cclxuLmNlbnRlci1jcm9wcGVkIHtcclxuICBvYmplY3QtZml0OiBub25lOyAvKiBEbyBub3Qgc2NhbGUgdGhlIGltYWdlICovXHJcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2Ugd2l0aGluIHRoZSBlbGVtZW50ICovXHJcbn1cclxuXHJcbi5maXRuZXNzLXByb2ZpbGUtd3JhcHBlciBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmZpdG5lc3MtcHJvZmlsZS13cmFwcGVyIC5pbmZvIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcblxyXG4uY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uY2Fsb3JpZXMge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNDhkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAwJSwgcmdiYSgzNywgMjA2LCAyMDksIDEpIDY2JSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxufVxyXG5cclxuLnNwb3J0cy1leHBlcmllbmNlIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzQ4ZGVnLCByZ2JhKDIwLCA3MiwgMCwgMSkgMCUsIHJnYmEoODQsIDIwOSwgMzcsIDEpIDcwJSk7XHJcbn1cclxuXHJcbi5oZWlnaHQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNDlkZWcsIHJnYmEoMCwgMzQsIDcyLCAxKSAwJSwgcmdiYSgzNywgOTMsIDIwOSwgMSkgNzAlKTtcclxufVxyXG5cclxuLndlaWdodCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM0OWRlZywgcmdiYSgxODQsIDE2MSwgMCwgMSkgMCUsIHJnYmEoMjU1LCAyMjIsIDAsIDEpIDcwJSk7XHJcbn1cclxuXHJcbi5hY3Rpdml0eSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM0OWRlZywgcmdiYSgxMjksIDIwLCAyMCwgMSkgMCUsIHJnYmEoMjU1LCAwLCAwLCAxKSA3MCUpO1xyXG59XHJcblxyXG4ud2VpZ2h0LWdvYWwge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNDlkZWcsIHJnYmEoMTI0LDIwLDEyOSwxKSAwJSwgcmdiYSgyMTYsNywyMjYsMSkgNzAlKTtcclxufVxyXG5cclxuLndlaWdodC1jaGFuZ2UtcmF0ZSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM0OWRlZywgcmdiYSgxMDAsMTQzLDExMywxKSAwJSwgcmdiYSgxMzYsMTgxLDE1MCwxKSA3MCUpO1xyXG59XHJcblxyXG4uY2hhcnQtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1hY3JvcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/home/my-profile/my-profile.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/main/webapp/app/home/my-profile/my-profile.component.ts ***!
          \*********************************************************************/
        /*! exports provided: MyProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function () { return MyProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user/user.service */ "./src/main/webapp/app/user/user.service.ts");
            /* harmony import */ var _user_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user/user.model */ "./src/main/webapp/app/user/user.model.ts");
            /* harmony import */ var _user_fitness_profile_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user/fitness-profile.model */ "./src/main/webapp/app/user/fitness-profile.model.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var MyProfileComponent = /** @class */ (function () {
                function MyProfileComponent(userService, titleService) {
                    this.userService = userService;
                    this.titleService = titleService;
                    this.loading = true;
                }
                MyProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.titleService.setTitle('FitBook' + '- Home');
                    this.loading = true;
                    this.loggedUser = new _user_user_model__WEBPACK_IMPORTED_MODULE_3__["UserModel"]();
                    this.loggedUserFitnessProfile = new _user_fitness_profile_model__WEBPACK_IMPORTED_MODULE_4__["FitnessProfileModel"]();
                    this.userService.getLoggedInUserObservable().subscribe(function (user) {
                        if (user) {
                            _this.loggedUser = user;
                            _this.loggedUserFirstName = user.firstName;
                            _this.loggedUserFitnessProfile = user.fitnessProfile;
                            _this.makeChartDataForMacroNutrients();
                            _this.loading = false;
                        }
                    });
                };
                MyProfileComponent.prototype.makeChartDataForMacroNutrients = function () {
                    this.macroNutrientsData = [
                        {
                            "name": "Protein",
                            "value": this.loggedUserFitnessProfile.nutritionGoal.gramsOfProtein
                        },
                        {
                            "name": "Carbohydrates",
                            "value": this.loggedUserFitnessProfile.nutritionGoal.gramsOfCarbohydrates
                        },
                        {
                            "name": "Fats",
                            "value": this.loggedUserFitnessProfile.nutritionGoal.gramsOfFats
                        },
                    ];
                };
                MyProfileComponent.prototype.onSelectHandler = function (event) {
                    this.activeEntries.push(event);
                };
                return MyProfileComponent;
            }());
            MyProfileComponent.ctorParameters = function () { return [
                { type: _user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }
            ]; };
            MyProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-my-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/home/my-profile/my-profile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-profile.component.css */ "./src/main/webapp/app/home/my-profile/my-profile.component.css")).default]
                })
            ], MyProfileComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/index/index.component.css": 
        /*!*******************************************************!*\
          !*** ./src/main/webapp/app/index/index.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbWFpbi93ZWJhcHAvYXBwL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/index/index.component.ts": 
        /*!******************************************************!*\
          !*** ./src/main/webapp/app/index/index.component.ts ***!
          \******************************************************/
        /*! exports provided: IndexComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function () { return IndexComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var IndexComponent = /** @class */ (function () {
                function IndexComponent(titleService) {
                    this.titleService = titleService;
                }
                IndexComponent.prototype.ngOnInit = function () {
                    this.titleService.setTitle('FitBook');
                };
                return IndexComponent;
            }());
            IndexComponent.ctorParameters = function () { return [
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
            ]; };
            IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-index',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/index/index.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./index.component.css */ "./src/main/webapp/app/index/index.component.css")).default]
                })
            ], IndexComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/meal/all-meals/all-meals.component.css": 
        /*!********************************************************************!*\
          !*** ./src/main/webapp/app/meal/all-meals/all-meals.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbWFpbi93ZWJhcHAvYXBwL21lYWwvYWxsLW1lYWxzL2FsbC1tZWFscy5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/meal/all-meals/all-meals.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/main/webapp/app/meal/all-meals/all-meals.component.ts ***!
          \*******************************************************************/
        /*! exports provided: AllMealsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllMealsComponent", function () { return AllMealsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _meal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../meal.service */ "./src/main/webapp/app/meal/meal.service.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var AllMealsComponent = /** @class */ (function () {
                function AllMealsComponent(mealService, modalService, router, titleService) {
                    this.mealService = mealService;
                    this.modalService = modalService;
                    this.router = router;
                    this.titleService = titleService;
                    this.page = 1;
                    this.pageSize = 6;
                }
                AllMealsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.titleService.setTitle('FitBook' + '- All Meals');
                    this.loading = true;
                    this.mealService.fetchAllPublicMeals().subscribe(function (meals) {
                        if (meals) {
                            _this.meals = meals;
                            _this.filteredMeals = meals.slice();
                            _this.loading = false;
                        }
                    });
                };
                AllMealsComponent.prototype.open = function (content, mealId) {
                    var _this = this;
                    this.selectedMealForModal = this.meals.find(function (e) { return e.id === mealId; });
                    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(function (result) {
                        _this.mealService.copyMealToLoggedUserMeals(mealId).subscribe(function (meal) {
                            _this.router.navigate(['my-meals', meal.id]);
                        });
                    }, function (reason) {
                    });
                };
                return AllMealsComponent;
            }());
            AllMealsComponent.ctorParameters = function () { return [
                { type: _meal_service__WEBPACK_IMPORTED_MODULE_4__["MealService"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }
            ]; };
            AllMealsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-all-meals',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-meals.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/meal/all-meals/all-meals.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-meals.component.css */ "./src/main/webapp/app/meal/all-meals/all-meals.component.css")).default]
                })
            ], AllMealsComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/meal/meal-binding-model.ts": 
        /*!********************************************************!*\
          !*** ./src/main/webapp/app/meal/meal-binding-model.ts ***!
          \********************************************************/
        /*! exports provided: MealBindingModel */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealBindingModel", function () { return MealBindingModel; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var MealBindingModel = /** @class */ (function () {
                function MealBindingModel() {
                    this.isPublic = false;
                }
                return MealBindingModel;
            }());
            /***/ 
        }),
        /***/ "./src/main/webapp/app/meal/meal-card/meal-card.component.css": 
        /*!********************************************************************!*\
          !*** ./src/main/webapp/app/meal/meal-card/meal-card.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".card {\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n    border-radius: 30px;\r\n    overflow: hidden;\r\n    position: relative;\r\n    background: rgba(255, 255, 255, 0.6);\r\n\r\n}\r\n\r\n.btn {\r\n    border-radius: 10px;\r\n}\r\n\r\n.buttons-wrapper {\r\n    position: absolute;\r\n    bottom: 1em;\r\n}\r\n\r\n.buttons-wrapper.right {\r\n    right: 1em;\r\n}\r\n\r\n.buttons-wrapper.left {\r\n    left: 1em;\r\n}\r\n\r\n.table-wrapper{\r\n    max-height: 100px;\r\n    width: 300px;\r\n    overflow-y: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n.chart-container {\r\n    height: 275px;\r\n    position: relative;\r\n}\r\n\r\n.macros {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvbWVhbC9tZWFsLWNhcmQvbWVhbC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1Q0FBdUM7SUFDdkMsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0NBQW9DOztBQUV4Qzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0FBQ3BDIiwiZmlsZSI6InNyYy9tYWluL3dlYmFwcC9hcHAvbWVhbC9tZWFsLWNhcmQvbWVhbC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuXHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmJ1dHRvbnMtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDFlbTtcclxufVxyXG5cclxuLmJ1dHRvbnMtd3JhcHBlci5yaWdodCB7XHJcbiAgICByaWdodDogMWVtO1xyXG59XHJcblxyXG4uYnV0dG9ucy13cmFwcGVyLmxlZnQge1xyXG4gICAgbGVmdDogMWVtO1xyXG59XHJcblxyXG4udGFibGUtd3JhcHBlcntcclxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxufVxyXG5cclxuLmNoYXJ0LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDI3NXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWFjcm9zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/meal/meal-card/meal-card.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/main/webapp/app/meal/meal-card/meal-card.component.ts ***!
          \*******************************************************************/
        /*! exports provided: MealCardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealCardComponent", function () { return MealCardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _meal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../meal.service */ "./src/main/webapp/app/meal/meal.service.ts");
            var MealCardComponent = /** @class */ (function () {
                function MealCardComponent(mealService) {
                    this.mealService = mealService;
                    this.modalOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                MealCardComponent.prototype.ngOnInit = function () {
                    this.makeChartDataForMacroNutrients();
                };
                MealCardComponent.prototype.makeChartDataForMacroNutrients = function () {
                    this.macroNutrientsData = [
                        {
                            "name": "Protein",
                            "value": this.meal.totalProtein
                        },
                        {
                            "name": "Carbohydrates",
                            "value": this.meal.totalCarbohydrates
                        },
                        {
                            "name": "Fats",
                            "value": this.meal.totalFats
                        },
                    ];
                };
                MealCardComponent.prototype.copyToMyMealsHandler = function (id) {
                    this.modalOpen.emit(id);
                };
                MealCardComponent.prototype.onLikeHandler = function () {
                    var _this = this;
                    this.mealService.likeMeal(this.meal.id).subscribe(function (meal) {
                        _this.meal = meal;
                    });
                };
                return MealCardComponent;
            }());
            MealCardComponent.ctorParameters = function () { return [
                { type: _meal_service__WEBPACK_IMPORTED_MODULE_2__["MealService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], MealCardComponent.prototype, "meal", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], MealCardComponent.prototype, "modalOpen", void 0);
            MealCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-meal-card',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./meal-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/meal/meal-card/meal-card.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./meal-card.component.css */ "./src/main/webapp/app/meal/meal-card/meal-card.component.css")).default]
                })
            ], MealCardComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/meal/meal-details/meal-details.component.css": 
        /*!**************************************************************************!*\
          !*** ./src/main/webapp/app/meal/meal-details/meal-details.component.css ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".meal-details {\r\n    background: rgba(255, 255, 255, 0.6);\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n\r\n.chart-container {\r\n    height: 600px;\r\n    position: relative;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvbWVhbC9tZWFsLWRldGFpbHMvbWVhbC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsdUNBQXVDO0FBQzNDOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL21haW4vd2ViYXBwL2FwcC9tZWFsL21lYWwtZGV0YWlscy9tZWFsLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZWFsLWRldGFpbHMge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG5cclxuLmNoYXJ0LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/meal/meal-details/meal-details.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/main/webapp/app/meal/meal-details/meal-details.component.ts ***!
          \*************************************************************************/
        /*! exports provided: MealDetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealDetailsComponent", function () { return MealDetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _meal_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../meal.model */ "./src/main/webapp/app/meal/meal.model.ts");
            /* harmony import */ var _meal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../meal.service */ "./src/main/webapp/app/meal/meal.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _comment_comment_binding_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../comment/comment-binding.model */ "./src/main/webapp/app/comment/comment-binding.model.ts");
            /* harmony import */ var _comment_comment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../comment/comment.service */ "./src/main/webapp/app/comment/comment.service.ts");
            /* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/main/webapp/app/auth/auth.service.ts");
            /* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../user/user.service */ "./src/main/webapp/app/user/user.service.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var MealDetailsComponent = /** @class */ (function () {
                function MealDetailsComponent(mealService, authService, userService, commentService, route, modalService, router, titleService) {
                    this.mealService = mealService;
                    this.authService = authService;
                    this.userService = userService;
                    this.commentService = commentService;
                    this.route = route;
                    this.modalService = modalService;
                    this.router = router;
                    this.titleService = titleService;
                }
                MealDetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.titleService.setTitle('FitBook' + '- Meal Details');
                    this.meal = new _meal_model__WEBPACK_IMPORTED_MODULE_2__["Meal"]();
                    this.commentBindingModel = new _comment_comment_binding_model__WEBPACK_IMPORTED_MODULE_6__["CommentBindingModel"]();
                    this.mealComments = [];
                    this.authService.user.subscribe(function (user) {
                        _this.isLoggedInUserModerator = _this.authService.isUserModerator(user.role);
                    });
                    this.userService.getLoggedInUserObservable().subscribe(function (user) {
                        if (user) {
                            _this.loggedInUserUsername = user.username;
                        }
                    });
                    this.route.params.subscribe(function (params) {
                        _this.mealId = params['id'];
                        _this.fetchMealDetails();
                    });
                };
                MealDetailsComponent.prototype.fetchMealDetails = function () {
                    var _this = this;
                    this.mealService.fetchMealById(this.mealId).subscribe(function (meal) {
                        if (meal) {
                            _this.meal = meal;
                            _this.mealComments = meal.comments;
                            _this.makeChartDataForMacroNutrients();
                        }
                    });
                };
                MealDetailsComponent.prototype.makeChartDataForMacroNutrients = function () {
                    var stats = [];
                    var counter = 1;
                    for (var _i = 0, _a = this.meal.foods; _i < _a.length; _i++) {
                        var mealFood = _a[_i];
                        var mealFoodStats = {
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
                };
                MealDetailsComponent.prototype.open = function (content) {
                    var _this = this;
                    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(function (result) {
                        _this.mealService.copyMealToLoggedUserMeals(_this.mealId).subscribe(function (meal) {
                            _this.router.navigate(['my-meals', meal.id]);
                        });
                    }, function (reason) {
                    });
                };
                MealDetailsComponent.prototype.onLikeHandler = function () {
                    var _this = this;
                    this.mealService.likeMeal(this.meal.id).subscribe(function (meal) {
                        _this.meal = meal;
                    });
                };
                MealDetailsComponent.prototype.onPostHandler = function () {
                    var _this = this;
                    this.commentService.commentMeal(this.meal.id, this.commentBindingModel).subscribe(function (comment) {
                        _this.commentBindingModel = new _comment_comment_binding_model__WEBPACK_IMPORTED_MODULE_6__["CommentBindingModel"]();
                        _this.mealComments.push(comment);
                    });
                };
                MealDetailsComponent.prototype.onDeleteCommentHandler = function (id) {
                    var _this = this;
                    this.commentService.deleteMealComment(id).subscribe(function () {
                        _this.fetchMealDetails();
                    });
                };
                return MealDetailsComponent;
            }());
            MealDetailsComponent.ctorParameters = function () { return [
                { type: _meal_service__WEBPACK_IMPORTED_MODULE_3__["MealService"] },
                { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: _user_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
                { type: _comment_comment_service__WEBPACK_IMPORTED_MODULE_7__["CommentService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["Title"] }
            ]; };
            MealDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-meal-details',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./meal-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/meal/meal-details/meal-details.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./meal-details.component.css */ "./src/main/webapp/app/meal/meal-details/meal-details.component.css")).default]
                })
            ], MealDetailsComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/meal/meal-food-binding-model.ts": 
        /*!*************************************************************!*\
          !*** ./src/main/webapp/app/meal/meal-food-binding-model.ts ***!
          \*************************************************************/
        /*! exports provided: MealFoodBindingModel */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealFoodBindingModel", function () { return MealFoodBindingModel; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var MealFoodBindingModel = /** @class */ (function () {
                function MealFoodBindingModel() {
                    this.serving = 100;
                }
                return MealFoodBindingModel;
            }());
            /***/ 
        }),
        /***/ "./src/main/webapp/app/meal/meal.model.ts": 
        /*!************************************************!*\
          !*** ./src/main/webapp/app/meal/meal.model.ts ***!
          \************************************************/
        /*! exports provided: Meal */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meal", function () { return Meal; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Meal = /** @class */ (function () {
                function Meal() {
                }
                return Meal;
            }());
            /***/ 
        }),
        /***/ "./src/main/webapp/app/meal/meal.service.ts": 
        /*!**************************************************!*\
          !*** ./src/main/webapp/app/meal/meal.service.ts ***!
          \**************************************************/
        /*! exports provided: MealService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealService", function () { return MealService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-settings */ "./src/main/webapp/app/app-settings.ts");
            var MealService = /** @class */ (function () {
                function MealService(http) {
                    this.http = http;
                }
                MealService.prototype.createMeal = function (mealCreateModel) {
                    return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/meals/create", mealCreateModel);
                };
                MealService.prototype.addMealFoodToMeal = function (mealFoodBindingModel, mealId) {
                    return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/meals/add-exercise/" + mealId, mealFoodBindingModel);
                };
                MealService.prototype.fetchAllPublicMeals = function () {
                    return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/meals/public/all");
                };
                MealService.prototype.fetchMealById = function (id) {
                    return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/meals/" + id);
                };
                MealService.prototype.getLoggedInUserMeals = function () {
                    return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/meals/my/");
                };
                MealService.prototype.deleteMealFoodFromMeal = function (mealId, foodId) {
                    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('foodId', foodId);
                    return this.http.delete(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/meals/delete-exercise/" + mealId, { params: params });
                };
                MealService.prototype.deleteMealById = function (mealId) {
                    return this.http.delete(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/meals/delete/" + mealId);
                };
                MealService.prototype.editMealById = function (mealId, mealBindingModel) {
                    return this.http.put(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/meals/edit/" + mealId, mealBindingModel);
                };
                MealService.prototype.copyMealToLoggedUserMeals = function (mealId) {
                    return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/meals/copy/" + mealId, null);
                };
                MealService.prototype.likeMeal = function (mealId) {
                    return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/meals/like/" + mealId, null);
                };
                return MealService;
            }());
            MealService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
            ]; };
            MealService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
                    providedIn: 'root',
                })
            ], MealService);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/meal/my-meals/my-meals.component.css": 
        /*!******************************************************************!*\
          !*** ./src/main/webapp/app/meal/my-meals/my-meals.component.css ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".list-group{\r\n    max-height: 300px;\r\n    overflow-y: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvbWVhbC9teS1tZWFscy9teS1tZWFscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQ0FBaUM7QUFDckMiLCJmaWxlIjoic3JjL21haW4vd2ViYXBwL2FwcC9tZWFsL215LW1lYWxzL215LW1lYWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1ncm91cHtcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxufVxyXG5cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/meal/my-meals/my-meals.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/main/webapp/app/meal/my-meals/my-meals.component.ts ***!
          \*****************************************************************/
        /*! exports provided: MyMealsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMealsComponent", function () { return MyMealsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/main/webapp/app/auth/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _meal_binding_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../meal-binding-model */ "./src/main/webapp/app/meal/meal-binding-model.ts");
            /* harmony import */ var _meal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../meal.service */ "./src/main/webapp/app/meal/meal.service.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var MyMealsComponent = /** @class */ (function () {
                function MyMealsComponent(modalService, mealService, authService, router, route, titleService) {
                    this.modalService = modalService;
                    this.mealService = mealService;
                    this.authService = authService;
                    this.router = router;
                    this.route = route;
                    this.titleService = titleService;
                }
                MyMealsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.titleService.setTitle('FitBook' + '- My Meals');
                    this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]; })).subscribe(function () {
                        _this.fetchMeals();
                    });
                    this.setSelectedMealIdFromParams();
                    this.fetchMeals();
                    this.mealBindingModel = new _meal_binding_model__WEBPACK_IMPORTED_MODULE_6__["MealBindingModel"]();
                };
                MyMealsComponent.prototype.fetchMeals = function () {
                    var _this = this;
                    this.mealService.getLoggedInUserMeals().subscribe(function (meals) {
                        meals.sort(function (w1, w2) { return w1.name.localeCompare(w2.name); });
                        _this.meals = meals;
                    });
                };
                MyMealsComponent.prototype.open = function (content) {
                    var _this = this;
                    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
                        _this.mealService.createMeal(_this.mealBindingModel)
                            .subscribe(function (meal) {
                            _this.fetchMeals();
                            _this.router.navigate(['my-meals/' + meal.id]);
                        });
                        _this.mealBindingModel = new _meal_binding_model__WEBPACK_IMPORTED_MODULE_6__["MealBindingModel"]();
                    }, function (reason) {
                    });
                };
                MyMealsComponent.prototype.setSelectedMealIdFromParams = function () {
                    var _this = this;
                    this.route.firstChild.params.subscribe(function (params) {
                        _this.selectedMealId = params['id'] ? params['id'] : undefined;
                    });
                };
                MyMealsComponent.prototype.onMealButtonClick = function (mealId) {
                    this.selectedMealId = mealId;
                    this.router.navigate([mealId], { relativeTo: this.route });
                };
                MyMealsComponent.prototype.onRouterOutletDeactivate = function () {
                    this.fetchMeals();
                };
                MyMealsComponent.prototype.onRouterOutletActivate = function () {
                    this.setSelectedMealIdFromParams();
                    this.fetchMeals();
                };
                return MyMealsComponent;
            }());
            MyMealsComponent.ctorParameters = function () { return [
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
                { type: _meal_service__WEBPACK_IMPORTED_MODULE_7__["MealService"] },
                { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"] }
            ]; };
            MyMealsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-my-meals',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-meals.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/meal/my-meals/my-meals.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-meals.component.css */ "./src/main/webapp/app/meal/my-meals/my-meals.component.css")).default]
                })
            ], MyMealsComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/meal/my-meals/no-selected-meal/no-selected-meal.component.css": 
        /*!*******************************************************************************************!*\
          !*** ./src/main/webapp/app/meal/my-meals/no-selected-meal/no-selected-meal.component.css ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbWFpbi93ZWJhcHAvYXBwL21lYWwvbXktbWVhbHMvbm8tc2VsZWN0ZWQtbWVhbC9uby1zZWxlY3RlZC1tZWFsLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/meal/my-meals/no-selected-meal/no-selected-meal.component.ts": 
        /*!******************************************************************************************!*\
          !*** ./src/main/webapp/app/meal/my-meals/no-selected-meal/no-selected-meal.component.ts ***!
          \******************************************************************************************/
        /*! exports provided: NoSelectedMealComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoSelectedMealComponent", function () { return NoSelectedMealComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NoSelectedMealComponent = /** @class */ (function () {
                function NoSelectedMealComponent() {
                }
                NoSelectedMealComponent.prototype.ngOnInit = function () {
                };
                return NoSelectedMealComponent;
            }());
            NoSelectedMealComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-no-selected-meal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./no-selected-meal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/meal/my-meals/no-selected-meal/no-selected-meal.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./no-selected-meal.component.css */ "./src/main/webapp/app/meal/my-meals/no-selected-meal/no-selected-meal.component.css")).default]
                })
            ], NoSelectedMealComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/meal/my-meals/selected-meal/selected-meal.component.css": 
        /*!*************************************************************************************!*\
          !*** ./src/main/webapp/app/meal/my-meals/selected-meal/selected-meal.component.css ***!
          \*************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".selected-meal {\r\n    background: rgba(255, 255, 255, 0.6);\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.chart-container {\r\n    height: 400px;\r\n    position: relative;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvbWVhbC9teS1tZWFscy9zZWxlY3RlZC1tZWFsL3NlbGVjdGVkLW1lYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztJQUNwQyx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9tYWluL3dlYmFwcC9hcHAvbWVhbC9teS1tZWFscy9zZWxlY3RlZC1tZWFsL3NlbGVjdGVkLW1lYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3RlZC1tZWFsIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmNoYXJ0LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/meal/my-meals/selected-meal/selected-meal.component.ts": 
        /*!************************************************************************************!*\
          !*** ./src/main/webapp/app/meal/my-meals/selected-meal/selected-meal.component.ts ***!
          \************************************************************************************/
        /*! exports provided: SelectedMealComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedMealComponent", function () { return SelectedMealComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _meal_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../meal.model */ "./src/main/webapp/app/meal/meal.model.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _meal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../meal.service */ "./src/main/webapp/app/meal/meal.service.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            var SelectedMealComponent = /** @class */ (function () {
                function SelectedMealComponent(route, mealService, router, modalService) {
                    this.route = route;
                    this.mealService = mealService;
                    this.router = router;
                    this.modalService = modalService;
                    this.editMode = false;
                }
                SelectedMealComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.selectedMeal = new _meal_model__WEBPACK_IMPORTED_MODULE_2__["Meal"]();
                    this.route.params.subscribe(function (params) {
                        _this.mealId = params['id'];
                        _this.fetchMealDetails();
                    });
                    this.route.queryParams.subscribe(function (queryParams) {
                        if (queryParams['edit']) {
                            _this.editMode = queryParams['edit'] === '1';
                            if (_this.editMode) {
                                _this.editMealBindingModel = JSON.parse(JSON.stringify(_this.selectedMeal));
                                _this.editMealBindingModel.isPublic = _this.selectedMeal.isPublic;
                                _this.deletedMealFoodsStack = [];
                            }
                        }
                        else {
                            _this.editMode = false;
                        }
                    });
                };
                SelectedMealComponent.prototype.open = function (content) {
                    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl', scrollable: false }).result.then(function (result) {
                    }, function (reason) {
                    });
                };
                SelectedMealComponent.prototype.fetchMealDetails = function () {
                    var _this = this;
                    this.mealService.getLoggedInUserMeals().subscribe(function (meals) {
                        if (meals) {
                            _this.selectedMeal = meals.find(function (w) { return w.id === _this.mealId; });
                            _this.makeChartDataForMacroNutrients();
                        }
                    });
                };
                SelectedMealComponent.prototype.makeChartDataForMacroNutrients = function () {
                    var stats = [];
                    var counter = 1;
                    for (var _i = 0, _a = this.selectedMeal.foods; _i < _a.length; _i++) {
                        var mealFood = _a[_i];
                        var mealFoodStats = {
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
                };
                SelectedMealComponent.prototype.onMealFoodDeleteHandler = function (mealId, foodId) {
                    this.deletedMealFoodsStack.push(foodId);
                    this.editMealBindingModel.foods = this.editMealBindingModel.foods.filter(function (f) { return f.id !== foodId; });
                    this.recalculateBindingModelTotalNutrition();
                };
                SelectedMealComponent.prototype.deleteMealExercise = function (mealId, foodId) {
                    var _this = this;
                    this.mealService.deleteMealFoodFromMeal(mealId, foodId).subscribe(function (meal) {
                        _this.selectedMeal = meal;
                    });
                };
                SelectedMealComponent.prototype.onEditMealFoodHandler = function (food) {
                    food.proteinPerServing = Math.floor(food.serving * (food.food.proteinPerHundred / 100));
                    food.carbohydratesPerServing = Math.floor(food.serving * (food.food.carbohydratesPerHundred / 100));
                    food.fatsPerServing = Math.floor(food.serving * (food.food.fatsPerHundred / 100));
                    food.caloriesPerServing = Math.floor(food.serving * (food.food.caloriesPerHundred / 100));
                    this.recalculateBindingModelTotalNutrition();
                };
                SelectedMealComponent.prototype.recalculateBindingModelTotalNutrition = function () {
                    var totalProtein = 0;
                    var totalCarbohydrates = 0;
                    var totalFats = 0;
                    var totalCalories = 0;
                    this.editMealBindingModel.foods.forEach(function (f) {
                        totalProtein += f.proteinPerServing;
                        totalCarbohydrates += f.carbohydratesPerServing;
                        totalFats += f.fatsPerServing;
                        totalCalories += f.caloriesPerServing;
                    });
                    this.editMealBindingModel.totalProtein = totalProtein;
                    this.editMealBindingModel.totalCarbohydrates = totalCarbohydrates;
                    this.editMealBindingModel.totalFats = totalFats;
                    this.editMealBindingModel.totalCalories = totalCalories;
                };
                SelectedMealComponent.prototype.onSaveHandler = function () {
                    var _this = this;
                    this.mealService.editMealById(this.mealId, this.editMealBindingModel).subscribe(function (meal) {
                        console.log(meal.isPublic, 1);
                        _this.selectedMeal = meal;
                        _this.makeChartDataForMacroNutrients();
                    });
                    this.router.navigate(['./'], { relativeTo: this.route });
                };
                SelectedMealComponent.prototype.onMealDeleteHandler = function (mealId) {
                    var _this = this;
                    this.mealService.deleteMealById(mealId).subscribe(function (result) {
                        if (result) {
                            _this.router.navigate(['/my-meals']);
                        }
                    });
                };
                return SelectedMealComponent;
            }());
            SelectedMealComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _meal_service__WEBPACK_IMPORTED_MODULE_4__["MealService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }
            ]; };
            SelectedMealComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-selected-meal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./selected-meal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/meal/my-meals/selected-meal/selected-meal.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./selected-meal.component.css */ "./src/main/webapp/app/meal/my-meals/selected-meal/selected-meal.component.css")).default]
                })
            ], SelectedMealComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/navbar/guest-navbar/guest-navbar.component.css": 
        /*!****************************************************************************!*\
          !*** ./src/main/webapp/app/navbar/guest-navbar/guest-navbar.component.css ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbWFpbi93ZWJhcHAvYXBwL25hdmJhci9ndWVzdC1uYXZiYXIvZ3Vlc3QtbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/navbar/guest-navbar/guest-navbar.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/main/webapp/app/navbar/guest-navbar/guest-navbar.component.ts ***!
          \***************************************************************************/
        /*! exports provided: GuestNavbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestNavbarComponent", function () { return GuestNavbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var GuestNavbarComponent = /** @class */ (function () {
                function GuestNavbarComponent() {
                }
                GuestNavbarComponent.prototype.ngOnInit = function () {
                };
                return GuestNavbarComponent;
            }());
            GuestNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-guest-navbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./guest-navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/navbar/guest-navbar/guest-navbar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./guest-navbar.component.css */ "./src/main/webapp/app/navbar/guest-navbar/guest-navbar.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../navbar.component.css */ "./src/main/webapp/app/navbar/navbar.component.css")).default]
                })
            ], GuestNavbarComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/navbar/logged-navbar/logged-navbar.component.css": 
        /*!******************************************************************************!*\
          !*** ./src/main/webapp/app/navbar/logged-navbar/logged-navbar.component.css ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#navbarDropdownMenuLink {\r\n  padding: 0.5em 1em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvbmF2YmFyL2xvZ2dlZC1uYXZiYXIvbG9nZ2VkLW5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9tYWluL3dlYmFwcC9hcHAvbmF2YmFyL2xvZ2dlZC1uYXZiYXIvbG9nZ2VkLW5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdmJhckRyb3Bkb3duTWVudUxpbmsge1xyXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/navbar/logged-navbar/logged-navbar.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/main/webapp/app/navbar/logged-navbar/logged-navbar.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: LoggedNavbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedNavbarComponent", function () { return LoggedNavbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/main/webapp/app/auth/auth.service.ts");
            /* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user/user.service */ "./src/main/webapp/app/user/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var LoggedNavbarComponent = /** @class */ (function () {
                function LoggedNavbarComponent(authService, userService, router) {
                    this.authService = authService;
                    this.userService = userService;
                    this.router = router;
                    this.profilePictureUrl = '';
                }
                LoggedNavbarComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]; })).subscribe(function (event) {
                        var url = event.url;
                        if (url.startsWith('/my-diet-plans') || url.startsWith('/my-meals')) {
                            _this.isInDiets = true;
                            _this.isInWorkouts = false;
                            _this.isExploring = false;
                        }
                        else if (url.startsWith('/my-workout-plans') || url.startsWith('/my-workouts')) {
                            _this.isInDiets = false;
                            _this.isInWorkouts = true;
                            _this.isExploring = false;
                        }
                        else if (url.startsWith('/foods/all') || url.startsWith('/meals') ||
                            url.startsWith('/diet-plans') || url.startsWith('/exercises/all') ||
                            url.startsWith('/workouts') || url.startsWith('/workout-plans')) {
                            _this.isInDiets = false;
                            _this.isInWorkouts = false;
                            _this.isExploring = true;
                        }
                        else {
                            _this.isInDiets = false;
                            _this.isInWorkouts = false;
                            _this.isExploring = false;
                        }
                    });
                    this.authService.user.asObservable().subscribe(function (user) {
                        if (user) {
                            _this.userRole = user.role;
                        }
                    });
                    this.userService.getLoggedInUserObservable().subscribe(function (user) {
                        if (user) {
                            _this.profilePictureUrl = user.profilePictureURL;
                        }
                        else {
                            _this.profilePictureUrl = '';
                        }
                    });
                };
                LoggedNavbarComponent.prototype.onLogout = function () {
                    this.authService.logout();
                    this.userService.loggedUser.next(null);
                };
                return LoggedNavbarComponent;
            }());
            LoggedNavbarComponent.ctorParameters = function () { return [
                { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            LoggedNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-logged-navbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logged-navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/navbar/logged-navbar/logged-navbar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logged-navbar.component.css */ "./src/main/webapp/app/navbar/logged-navbar/logged-navbar.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../navbar.component.css */ "./src/main/webapp/app/navbar/navbar.component.css")).default]
                })
            ], LoggedNavbarComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/navbar/navbar.component.css": 
        /*!*********************************************************!*\
          !*** ./src/main/webapp/app/navbar/navbar.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".navbar .nav-item {\r\n  margin-left: 0.5em;\r\n  border-radius: 10px;\r\n}\r\n\r\n.navbar .nav-item .nav-link {\r\n  padding: 1.5em;\r\n}\r\n\r\n.navbar a {\r\n  cursor: pointer;\r\n}\r\n\r\n.navbar .navbar-brand {\r\n  padding: 0.5em;\r\n  border-radius: 10px;\r\n}\r\n\r\n.navbar .navbar-brand:hover,\r\n.navbar .nav-item:hover,\r\n.navbar .nav-item.active {\r\n  transition: 0.5s ease;\r\n  background-color: #6c757d;\r\n}\r\n\r\n.navbar .navbar-brand:hover,\r\n.navbar .nav-item.active .nav-link,\r\n.navbar .nav-item:hover .nav-link {\r\n  transition: 0.5s ease;\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFJQTs7O0VBR0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvbWFpbi93ZWJhcHAvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIgLm5hdi1pdGVtIHtcclxuICBtYXJnaW4tbGVmdDogMC41ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLm5hdmJhciAubmF2LWl0ZW0gLm5hdi1saW5rIHtcclxuICBwYWRkaW5nOiAxLjVlbTtcclxufVxyXG5cclxuLm5hdmJhciBhIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXZiYXIgLm5hdmJhci1icmFuZCB7XHJcbiAgcGFkZGluZzogMC41ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLm5hdmJhciAubmF2YmFyLWJyYW5kOmhvdmVyLFxyXG4ubmF2YmFyIC5uYXYtaXRlbTpob3ZlcixcclxuLm5hdmJhciAubmF2LWl0ZW0uYWN0aXZlIHtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZDtcclxufVxyXG5cclxuXHJcblxyXG4ubmF2YmFyIC5uYXZiYXItYnJhbmQ6aG92ZXIsXHJcbi5uYXZiYXIgLm5hdi1pdGVtLmFjdGl2ZSAubmF2LWxpbmssXHJcbi5uYXZiYXIgLm5hdi1pdGVtOmhvdmVyIC5uYXYtbGluayB7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/navbar/navbar.component.ts": 
        /*!********************************************************!*\
          !*** ./src/main/webapp/app/navbar/navbar.component.ts ***!
          \********************************************************/
        /*! exports provided: NavbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () { return NavbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/main/webapp/app/auth/auth.service.ts");
            var NavbarComponent = /** @class */ (function () {
                function NavbarComponent(authService) {
                    this.authService = authService;
                    this.isUserLoggedIn = false;
                }
                NavbarComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.authService.user.subscribe(function (user) {
                        _this.isUserLoggedIn = !!user;
                        _this.userRole = user ? user.role : undefined;
                    });
                };
                return NavbarComponent;
            }());
            NavbarComponent.ctorParameters = function () { return [
                { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/navbar/navbar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/main/webapp/app/navbar/navbar.component.css")).default]
                })
            ], NavbarComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/not-found/not-found.component.css": 
        /*!***************************************************************!*\
          !*** ./src/main/webapp/app/not-found/not-found.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbWFpbi93ZWJhcHAvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/not-found/not-found.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/main/webapp/app/not-found/not-found.component.ts ***!
          \**************************************************************/
        /*! exports provided: NotFoundComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () { return NotFoundComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var NotFoundComponent = /** @class */ (function () {
                function NotFoundComponent(titleService) {
                    this.titleService = titleService;
                }
                NotFoundComponent.prototype.ngOnInit = function () {
                    this.titleService.setTitle('FitBook' + '- 404');
                };
                return NotFoundComponent;
            }());
            NotFoundComponent.ctorParameters = function () { return [
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
            ]; };
            NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-not-found',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/not-found/not-found.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.css */ "./src/main/webapp/app/not-found/not-found.component.css")).default]
                })
            ], NotFoundComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/safe.pipe.ts": 
        /*!******************************************!*\
          !*** ./src/main/webapp/app/safe.pipe.ts ***!
          \******************************************/
        /*! exports provided: SafePipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function () { return SafePipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var SafePipe = /** @class */ (function () {
                function SafePipe(sanitizer) {
                    this.sanitizer = sanitizer;
                }
                SafePipe.prototype.transform = function (url) {
                    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
                };
                return SafePipe;
            }());
            SafePipe.ctorParameters = function () { return [
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
            ]; };
            SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safe' })
            ], SafePipe);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/user/fitness-profile.model.ts": 
        /*!***********************************************************!*\
          !*** ./src/main/webapp/app/user/fitness-profile.model.ts ***!
          \***********************************************************/
        /*! exports provided: FitnessProfileModel */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitnessProfileModel", function () { return FitnessProfileModel; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _nutrition_goal_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nutrition-goal.model */ "./src/main/webapp/app/user/nutrition-goal.model.ts");
            var FitnessProfileModel = /** @class */ (function () {
                function FitnessProfileModel() {
                    this.nutritionGoal = new _nutrition_goal_model__WEBPACK_IMPORTED_MODULE_1__["NutritionGoal"]();
                }
                return FitnessProfileModel;
            }());
            /***/ 
        }),
        /***/ "./src/main/webapp/app/user/nutrition-goal.model.ts": 
        /*!**********************************************************!*\
          !*** ./src/main/webapp/app/user/nutrition-goal.model.ts ***!
          \**********************************************************/
        /*! exports provided: NutritionGoal */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionGoal", function () { return NutritionGoal; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var NutritionGoal = /** @class */ (function () {
                function NutritionGoal() {
                }
                return NutritionGoal;
            }());
            /***/ 
        }),
        /***/ "./src/main/webapp/app/user/register/register-binding.model.ts": 
        /*!*********************************************************************!*\
          !*** ./src/main/webapp/app/user/register/register-binding.model.ts ***!
          \*********************************************************************/
        /*! exports provided: RegisterBindingModel */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterBindingModel", function () { return RegisterBindingModel; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var RegisterBindingModel = /** @class */ (function () {
                function RegisterBindingModel() {
                }
                return RegisterBindingModel;
            }());
            /***/ 
        }),
        /***/ "./src/main/webapp/app/user/register/register.component.css": 
        /*!******************************************************************!*\
          !*** ./src/main/webapp/app/user/register/register.component.css ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".card-signin .card-img-left {\r\n  width: 60%;\r\n  background: scroll center url('register-animation.gif');\r\n  background-size: cover;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLHVEQUE0RjtFQUM1RixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL21haW4vd2ViYXBwL2FwcC91c2VyL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1zaWduaW4gLmNhcmQtaW1nLWxlZnQge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgYmFja2dyb3VuZDogc2Nyb2xsIGNlbnRlciB1cmwoJ3NyYy9tYWluL3dlYmFwcC9hc3NldHMvc3RhdGljL2ltYWdlcy9yZWdpc3Rlci1hbmltYXRpb24uZ2lmJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/user/register/register.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/main/webapp/app/user/register/register.component.ts ***!
          \*****************************************************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return RegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/main/webapp/app/user/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _register_binding_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register-binding.model */ "./src/main/webapp/app/user/register/register-binding.model.ts");
            /* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/main/webapp/app/auth/auth.service.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var RegisterComponent = /** @class */ (function () {
                function RegisterComponent(authService, router, userService, titleService) {
                    this.authService = authService;
                    this.router = router;
                    this.userService = userService;
                    this.titleService = titleService;
                    this.usernameTaken = false;
                    this.emailTaken = false;
                    this.passwordsMatch = false;
                    this.regexPattern = "(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])";
                }
                RegisterComponent.prototype.ngOnInit = function () {
                    this.titleService.setTitle('FitBook' + '- Register');
                    this.registerBindingModel = new _register_binding_model__WEBPACK_IMPORTED_MODULE_4__["RegisterBindingModel"]();
                    this.registerBindingModel.gender = "";
                };
                RegisterComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.loading = true;
                    var formData = new FormData();
                    var userBlob = new Blob([JSON.stringify(this.registerBindingModel)], { type: 'application/json' });
                    formData.append("user", userBlob);
                    formData.append("pictureFile", this.userProfilePictureFile);
                    this.authService.register(formData).subscribe(function (data) {
                        if (data) {
                            _this.loading = false;
                            _this.router.navigate(['/signin']);
                        }
                    });
                };
                RegisterComponent.prototype.handleFileInput = function (files, chooseFileLabel) {
                    var file = files[0];
                    var pattern = /image-*/;
                    if (file && file.type.match(pattern)) {
                        this.userProfilePictureFile = file;
                        chooseFileLabel.innerHTML = this.userProfilePictureFile.name;
                    }
                    else {
                        this.file = undefined;
                        this.userProfilePictureFile = undefined;
                        chooseFileLabel.innerHTML = 'Choose file';
                    }
                };
                RegisterComponent.prototype.onUsernameFocusOut = function (eventTarget) {
                    var _this = this;
                    if (eventTarget.value) {
                        this.userService.checkIfUserExistsByUsername(eventTarget.value)
                            .subscribe(function () { return _this.usernameTaken = true; }, function (error) { return _this.usernameTaken = false; });
                    }
                };
                RegisterComponent.prototype.onPasswordChange = function () {
                    this.passwordsMatch = this.registerBindingModel.password === this.registerBindingModel.confirmPassword;
                };
                return RegisterComponent;
            }());
            RegisterComponent.ctorParameters = function () { return [
                { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chooseFileLabel', { static: false })
            ], RegisterComponent.prototype, "chooseFileLabelRef", void 0);
            RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-register',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/user/register/register.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/main/webapp/app/user/register/register.component.css")).default]
                })
            ], RegisterComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/user/signin/signin-binding.model.ts": 
        /*!*****************************************************************!*\
          !*** ./src/main/webapp/app/user/signin/signin-binding.model.ts ***!
          \*****************************************************************/
        /*! exports provided: SigninBindingModel */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninBindingModel", function () { return SigninBindingModel; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var SigninBindingModel = /** @class */ (function () {
                function SigninBindingModel() {
                }
                return SigninBindingModel;
            }());
            /***/ 
        }),
        /***/ "./src/main/webapp/app/user/signin/signin.component.css": 
        /*!**************************************************************!*\
          !*** ./src/main/webapp/app/user/signin/signin.component.css ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbWFpbi93ZWJhcHAvYXBwL3VzZXIvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/user/signin/signin.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/main/webapp/app/user/signin/signin.component.ts ***!
          \*************************************************************/
        /*! exports provided: SigninComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function () { return SigninComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _signin_binding_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin-binding.model */ "./src/main/webapp/app/user/signin/signin-binding.model.ts");
            /* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/main/webapp/app/auth/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var SigninComponent = /** @class */ (function () {
                function SigninComponent(authService, router, titleService) {
                    this.authService = authService;
                    this.router = router;
                    this.titleService = titleService;
                    this.rememberMe = false;
                    this.errorOccurred = false;
                }
                SigninComponent.prototype.ngOnInit = function () {
                    this.titleService.setTitle('FitBook' + '- Sign In');
                    this.signInBindingModel = new _signin_binding_model__WEBPACK_IMPORTED_MODULE_2__["SigninBindingModel"]();
                };
                SigninComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.loading = true;
                    this.authService.signin(this.signInBindingModel).subscribe(function (data) {
                        _this.authService.handleAuthentication(data.headers.get('Authorization'), _this.rememberMe);
                        _this.loading = false;
                        _this.router.navigate(['/home']);
                    }, function (error) {
                        _this.errorOccurred = true;
                        _this.loading = false;
                    });
                };
                return SigninComponent;
            }());
            SigninComponent.ctorParameters = function () { return [
                { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }
            ]; };
            SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-signin',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/user/signin/signin.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signin.component.css */ "./src/main/webapp/app/user/signin/signin.component.css")).default]
                })
            ], SigninComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/user/user-profile/user-profile.component.css": 
        /*!**************************************************************************!*\
          !*** ./src/main/webapp/app/user/user-profile/user-profile.component.css ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".fitness-profile-wrapper {\r\n\r\n}\r\n\r\n.center-cropped {\r\n    -o-object-fit: none;\r\n       object-fit: none; /* Do not scale the image */\r\n    -o-object-position: center;\r\n       object-position: center; /* Center the image within the element */\r\n}\r\n\r\n.fitness-profile-wrapper img {\r\n    border-radius: 50%;\r\n    width: 300px;\r\n    height: 300px;\r\n}\r\n\r\n.fitness-profile-wrapper .info {\r\n    background: rgba(255, 255, 255, 0.5);\r\n    border-radius: 30px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.card {\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.calories {\r\n    background: linear-gradient(348deg, rgba(255, 255, 255, 0.5) 0%, rgba(37, 206, 209, 1) 66%);\r\n    border-radius: 30px;\r\n}\r\n\r\n.chart-container {\r\n    height: 350px;\r\n    position: relative;\r\n}\r\n\r\n.macros {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.sports-experience {\r\n    background: linear-gradient(348deg, rgba(20, 72, 0, 1) 0%, rgba(84, 209, 37, 1) 70%);\r\n}\r\n\r\n.height {\r\n    background: linear-gradient(349deg, rgba(0, 34, 72, 1) 0%, rgba(37, 93, 209, 1) 70%);\r\n}\r\n\r\n.weight {\r\n    background: linear-gradient(349deg, rgba(184, 161, 0, 1) 0%, rgba(255, 222, 0, 1) 70%);\r\n}\r\n\r\n.activity {\r\n    background: linear-gradient(349deg, rgba(129, 20, 20, 1) 0%, rgba(255, 0, 0, 1) 70%);\r\n}\r\n\r\n.weight-goal {\r\n    background: linear-gradient(349deg, rgba(124,20,129,1) 0%, rgba(216,7,226,1) 70%);\r\n}\r\n\r\n.weight-change-rate {\r\n    background: linear-gradient(349deg, rgba(100,143,113,1) 0%, rgba(136,181,150,1) 70%);\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvdXNlci91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7SUFDSSxtQkFBZ0I7T0FBaEIsZ0JBQWdCLEVBQUUsMkJBQTJCO0lBQzdDLDBCQUF1QjtPQUF2Qix1QkFBdUIsRUFBRSx3Q0FBd0M7QUFDckU7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLHVDQUF1QztBQUMzQzs7QUFHQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLDJGQUEyRjtJQUMzRixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksb0ZBQW9GO0FBQ3hGOztBQUVBO0lBQ0ksb0ZBQW9GO0FBQ3hGOztBQUVBO0lBQ0ksc0ZBQXNGO0FBQzFGOztBQUVBO0lBQ0ksb0ZBQW9GO0FBQ3hGOztBQUVBO0lBQ0ksaUZBQWlGO0FBQ3JGOztBQUVBO0lBQ0ksb0ZBQW9GO0FBQ3hGIiwiZmlsZSI6InNyYy9tYWluL3dlYmFwcC9hcHAvdXNlci91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZml0bmVzcy1wcm9maWxlLXdyYXBwZXIge1xyXG5cclxufVxyXG5cclxuLmNlbnRlci1jcm9wcGVkIHtcclxuICAgIG9iamVjdC1maXQ6IG5vbmU7IC8qIERvIG5vdCBzY2FsZSB0aGUgaW1hZ2UgKi9cclxuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlIHdpdGhpbiB0aGUgZWxlbWVudCAqL1xyXG59XHJcblxyXG4uZml0bmVzcy1wcm9maWxlLXdyYXBwZXIgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5maXRuZXNzLXByb2ZpbGUtd3JhcHBlciAuaW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG5cclxuLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uY2Fsb3JpZXMge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM0OGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDAlLCByZ2JhKDM3LCAyMDYsIDIwOSwgMSkgNjYlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuLmNoYXJ0LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWFjcm9zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5zcG9ydHMtZXhwZXJpZW5jZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzQ4ZGVnLCByZ2JhKDIwLCA3MiwgMCwgMSkgMCUsIHJnYmEoODQsIDIwOSwgMzcsIDEpIDcwJSk7XHJcbn1cclxuXHJcbi5oZWlnaHQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM0OWRlZywgcmdiYSgwLCAzNCwgNzIsIDEpIDAlLCByZ2JhKDM3LCA5MywgMjA5LCAxKSA3MCUpO1xyXG59XHJcblxyXG4ud2VpZ2h0IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNDlkZWcsIHJnYmEoMTg0LCAxNjEsIDAsIDEpIDAlLCByZ2JhKDI1NSwgMjIyLCAwLCAxKSA3MCUpO1xyXG59XHJcblxyXG4uYWN0aXZpdHkge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM0OWRlZywgcmdiYSgxMjksIDIwLCAyMCwgMSkgMCUsIHJnYmEoMjU1LCAwLCAwLCAxKSA3MCUpO1xyXG59XHJcblxyXG4ud2VpZ2h0LWdvYWwge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM0OWRlZywgcmdiYSgxMjQsMjAsMTI5LDEpIDAlLCByZ2JhKDIxNiw3LDIyNiwxKSA3MCUpO1xyXG59XHJcblxyXG4ud2VpZ2h0LWNoYW5nZS1yYXRlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNDlkZWcsIHJnYmEoMTAwLDE0MywxMTMsMSkgMCUsIHJnYmEoMTM2LDE4MSwxNTAsMSkgNzAlKTtcclxufVxyXG5cclxuXHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/user/user-profile/user-profile.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/main/webapp/app/user/user-profile/user-profile.component.ts ***!
          \*************************************************************************/
        /*! exports provided: UserProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () { return UserProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/main/webapp/app/user/user.service.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var UserProfileComponent = /** @class */ (function () {
                function UserProfileComponent(route, userService, titleService) {
                    this.route = route;
                    this.userService = userService;
                    this.titleService = titleService;
                }
                UserProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.titleService.setTitle('FitBook' + '- User Profile');
                    this.route.params.subscribe(function (params) {
                        if (params['username']) {
                            _this.username = params['username'];
                            _this.userService.getUserByUsername(_this.username).subscribe(function (user) {
                                _this.user = user;
                                _this.userFitnessProfile = user.fitnessProfile;
                                console.log(user.fitnessProfile);
                                _this.makeChartDataForMacroNutrients();
                            });
                        }
                    });
                };
                UserProfileComponent.prototype.makeChartDataForMacroNutrients = function () {
                    this.macroNutrientsData = [
                        {
                            "name": "Protein",
                            "value": this.userFitnessProfile.nutritionGoal.gramsOfProtein
                        },
                        {
                            "name": "Carbohydrates",
                            "value": this.userFitnessProfile.nutritionGoal.gramsOfCarbohydrates
                        },
                        {
                            "name": "Fats",
                            "value": this.userFitnessProfile.nutritionGoal.gramsOfFats
                        },
                    ];
                };
                return UserProfileComponent;
            }());
            UserProfileComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
            ]; };
            UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/user/user-profile/user-profile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-profile.component.css */ "./src/main/webapp/app/user/user-profile/user-profile.component.css")).default]
                })
            ], UserProfileComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/user/user.model.ts": 
        /*!************************************************!*\
          !*** ./src/main/webapp/app/user/user.model.ts ***!
          \************************************************/
        /*! exports provided: UserModel */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function () { return UserModel; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _fitness_profile_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fitness-profile.model */ "./src/main/webapp/app/user/fitness-profile.model.ts");
            var UserModel = /** @class */ (function () {
                function UserModel() {
                    this.fitnessProfile = new _fitness_profile_model__WEBPACK_IMPORTED_MODULE_1__["FitnessProfileModel"]();
                }
                return UserModel;
            }());
            /***/ 
        }),
        /***/ "./src/main/webapp/app/user/user.service.ts": 
        /*!**************************************************!*\
          !*** ./src/main/webapp/app/user/user.service.ts ***!
          \**************************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/main/webapp/app/auth/auth.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-settings */ "./src/main/webapp/app/app-settings.ts");
            var UserService = /** @class */ (function () {
                function UserService(http, authService) {
                    this.http = http;
                    this.authService = authService;
                    this.loggedUser = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
                    this.loadLoggedUser();
                }
                UserService.prototype.ngOnInit = function () {
                };
                UserService.prototype.clearUser = function () {
                };
                UserService.prototype.getLoggedInUserObservable = function () {
                    return this.loggedUser;
                };
                UserService.prototype.getUserById = function (id) {
                    return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].API_ENDPOINT + "/api/users/id/" + id);
                };
                UserService.prototype.getUserByUsername = function (username) {
                    return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].API_ENDPOINT + "/api/users/username/" + username);
                };
                UserService.prototype.checkIfUserExistsByUsername = function (username) {
                    return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].API_ENDPOINT + "/api/users/exists/" + username);
                };
                UserService.prototype.setFitnessProfileToLoggedInUser = function (fitnessProfileBindingModel) {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                    });
                    return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].API_ENDPOINT + "/api/users/fitness-profile/set/" + this.loggedUserId, fitnessProfileBindingModel, { headers: headers, observe: 'response' });
                };
                UserService.prototype.updateFitnessProfileOnLoggedInUser = function (fitnessProfileBindingModel) {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                    });
                    return this.http.put(_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].API_ENDPOINT + "/api/users/fitness-profile/edit/" + this.loggedUserId, fitnessProfileBindingModel, { headers: headers, observe: 'response' });
                };
                UserService.prototype.loadLoggedUser = function () {
                    var _this = this;
                    this.authService.user.subscribe(function (user) {
                        if (user) {
                            _this.loggedUserId = user.userId;
                            _this.getUserById(user.userId).subscribe(function (data) {
                                _this.loggedUser.next(data);
                                _this.setFitnessProfileInLocalStorage(!!data.fitnessProfile);
                            });
                        }
                    });
                };
                UserService.prototype.setFitnessProfileInLocalStorage = function (boolean) {
                    localStorage.setItem('fp', String(boolean));
                };
                UserService.prototype.getLoggedUserFitnessProfileCondition = function () {
                    return localStorage.getItem('fp') == 'true';
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root',
                })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout-plan/all-workout-plans/all-workout-plans.component.css": 
        /*!********************************************************************************************!*\
          !*** ./src/main/webapp/app/workout-plan/all-workout-plans/all-workout-plans.component.css ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    position: relative;\r\n}\r\n\r\n.order-index-workout {\r\n    position: absolute;\r\n    top: 7px;\r\n    left: 0;\r\n\r\n    border-radius: 50%;\r\n    width: 36px;\r\n    line-height: 36px;\r\n    padding: 4px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n    text-align: center;\r\n}\r\n\r\n.modal-body {\r\n    max-height: 300px;\r\n    overflow-y: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvd29ya291dC1wbGFuL2FsbC13b3Jrb3V0LXBsYW5zL2FsbC13b3Jrb3V0LXBsYW5zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87O0lBRVAsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHVDQUF1QztJQUN2QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztBQUNyQyIsImZpbGUiOiJzcmMvbWFpbi93ZWJhcHAvYXBwL3dvcmtvdXQtcGxhbi9hbGwtd29ya291dC1wbGFucy9hbGwtd29ya291dC1wbGFucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ub3JkZXItaW5kZXgtd29ya291dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDdweDtcclxuICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout-plan/all-workout-plans/all-workout-plans.component.ts": 
        /*!*******************************************************************************************!*\
          !*** ./src/main/webapp/app/workout-plan/all-workout-plans/all-workout-plans.component.ts ***!
          \*******************************************************************************************/
        /*! exports provided: AllWorkoutPlansComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllWorkoutPlansComponent", function () { return AllWorkoutPlansComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _workout_plan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../workout-plan.service */ "./src/main/webapp/app/workout-plan/workout-plan.service.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var AllWorkoutPlansComponent = /** @class */ (function () {
                function AllWorkoutPlansComponent(workoutPlanService, modalService, router, titleService) {
                    this.workoutPlanService = workoutPlanService;
                    this.modalService = modalService;
                    this.router = router;
                    this.titleService = titleService;
                    this.page = 1;
                    this.pageSize = 6;
                }
                AllWorkoutPlansComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.loading = true;
                    this.titleService.setTitle('FitBook' + '- All Workout Plans');
                    this.workoutPlanService.getAllPublicWorkoutPlans().subscribe(function (workoutPlans) {
                        if (workoutPlans) {
                            _this.workoutPlans = workoutPlans;
                            _this.filteredWorkoutPlans = workoutPlans.slice();
                            _this.loading = false;
                        }
                    });
                };
                AllWorkoutPlansComponent.prototype.open = function (content, workoutPlanId) {
                    var _this = this;
                    this.selectedWorkoutPlanForModal = this.workoutPlans.find(function (e) { return e.id === workoutPlanId; });
                    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
                        _this.workoutPlanService.copyWorkoutPlanToMyWorkoutPlans(workoutPlanId).subscribe(function (workoutPlan) {
                            _this.router.navigate(['my-workout-plans', workoutPlan.id]);
                        });
                    }, function (reason) {
                    });
                };
                return AllWorkoutPlansComponent;
            }());
            AllWorkoutPlansComponent.ctorParameters = function () { return [
                { type: _workout_plan_service__WEBPACK_IMPORTED_MODULE_4__["WorkoutPlanService"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }
            ]; };
            AllWorkoutPlansComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-all-workout-plans',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-workout-plans.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout-plan/all-workout-plans/all-workout-plans.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-workout-plans.component.css */ "./src/main/webapp/app/workout-plan/all-workout-plans/all-workout-plans.component.css")).default]
                })
            ], AllWorkoutPlansComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout-plan/my-workout-plans/my-workout-plans.component.css": 
        /*!******************************************************************************************!*\
          !*** ./src/main/webapp/app/workout-plan/my-workout-plans/my-workout-plans.component.css ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".list-group{\r\n    max-height: 300px;\r\n    overflow-y: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvd29ya291dC1wbGFuL215LXdvcmtvdXQtcGxhbnMvbXktd29ya291dC1wbGFucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQ0FBaUM7QUFDckMiLCJmaWxlIjoic3JjL21haW4vd2ViYXBwL2FwcC93b3Jrb3V0LXBsYW4vbXktd29ya291dC1wbGFucy9teS13b3Jrb3V0LXBsYW5zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1ncm91cHtcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout-plan/my-workout-plans/my-workout-plans.component.ts": 
        /*!*****************************************************************************************!*\
          !*** ./src/main/webapp/app/workout-plan/my-workout-plans/my-workout-plans.component.ts ***!
          \*****************************************************************************************/
        /*! exports provided: MyWorkoutPlansComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWorkoutPlansComponent", function () { return MyWorkoutPlansComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _workout_plan_binding_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../workout-plan-binding-model */ "./src/main/webapp/app/workout-plan/workout-plan-binding-model.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/main/webapp/app/auth/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _workout_plan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../workout-plan.service */ "./src/main/webapp/app/workout-plan/workout-plan.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var MyWorkoutPlansComponent = /** @class */ (function () {
                function MyWorkoutPlansComponent(modalService, authService, router, route, workoutPlanService, titleService) {
                    this.modalService = modalService;
                    this.authService = authService;
                    this.router = router;
                    this.route = route;
                    this.workoutPlanService = workoutPlanService;
                    this.titleService = titleService;
                }
                MyWorkoutPlansComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.titleService.setTitle('FitBook' + '- My Workout Plans');
                    this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]; })).subscribe(function () {
                        _this.fetchWorkoutsPlans();
                    });
                    this.setSelectedWorkoutPlanIdFromParams();
                    this.fetchWorkoutsPlans();
                    this.workoutPlanBindingModel = new _workout_plan_binding_model__WEBPACK_IMPORTED_MODULE_2__["WorkoutPlanBindingModel"]();
                };
                MyWorkoutPlansComponent.prototype.setSelectedWorkoutPlanIdFromParams = function () {
                    var _this = this;
                    this.route.firstChild.params.subscribe(function (params) {
                        _this.selectedWorkoutPlanId = params['id'] ? params['id'] : undefined;
                    });
                };
                MyWorkoutPlansComponent.prototype.fetchWorkoutsPlans = function () {
                    var _this = this;
                    this.workoutPlanService.getLoggedInUserWorkoutPlans().subscribe(function (workoutPlans) {
                        _this.workoutPlans = workoutPlans;
                    });
                };
                MyWorkoutPlansComponent.prototype.onWorkoutPlanButtonClick = function (id) {
                    this.selectedWorkoutPlanId = id;
                    this.router.navigate([id], { relativeTo: this.route });
                };
                MyWorkoutPlansComponent.prototype.open = function (content) {
                    var _this = this;
                    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
                        _this.workoutPlanService.createWorkoutPlan(_this.workoutPlanBindingModel)
                            .subscribe(function (workoutPlan) {
                            if (workoutPlan) {
                                _this.fetchWorkoutsPlans();
                                _this.router.navigate(['my-workout-plans/' + workoutPlan.id]);
                            }
                        });
                        _this.workoutPlanBindingModel = new _workout_plan_binding_model__WEBPACK_IMPORTED_MODULE_2__["WorkoutPlanBindingModel"]();
                    }, function (reason) {
                    });
                };
                MyWorkoutPlansComponent.prototype.onRouterOutletDeactivate = function () {
                    this.fetchWorkoutsPlans();
                };
                MyWorkoutPlansComponent.prototype.onRouterOutletActivate = function () {
                    this.setSelectedWorkoutPlanIdFromParams();
                };
                return MyWorkoutPlansComponent;
            }());
            MyWorkoutPlansComponent.ctorParameters = function () { return [
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
                { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
                { type: _workout_plan_service__WEBPACK_IMPORTED_MODULE_6__["WorkoutPlanService"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"] }
            ]; };
            MyWorkoutPlansComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-my-workout-plans',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-workout-plans.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout-plan/my-workout-plans/my-workout-plans.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-workout-plans.component.css */ "./src/main/webapp/app/workout-plan/my-workout-plans/my-workout-plans.component.css")).default]
                })
            ], MyWorkoutPlansComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout-plan/my-workout-plans/no-selected-workout-plan/no-selected-workout-plan.component.css": 
        /*!***************************************************************************************************************************!*\
          !*** ./src/main/webapp/app/workout-plan/my-workout-plans/no-selected-workout-plan/no-selected-workout-plan.component.css ***!
          \***************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbWFpbi93ZWJhcHAvYXBwL3dvcmtvdXQtcGxhbi9teS13b3Jrb3V0LXBsYW5zL25vLXNlbGVjdGVkLXdvcmtvdXQtcGxhbi9uby1zZWxlY3RlZC13b3Jrb3V0LXBsYW4uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout-plan/my-workout-plans/no-selected-workout-plan/no-selected-workout-plan.component.ts": 
        /*!**************************************************************************************************************************!*\
          !*** ./src/main/webapp/app/workout-plan/my-workout-plans/no-selected-workout-plan/no-selected-workout-plan.component.ts ***!
          \**************************************************************************************************************************/
        /*! exports provided: NoSelectedWorkoutPlanComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoSelectedWorkoutPlanComponent", function () { return NoSelectedWorkoutPlanComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NoSelectedWorkoutPlanComponent = /** @class */ (function () {
                function NoSelectedWorkoutPlanComponent() {
                }
                NoSelectedWorkoutPlanComponent.prototype.ngOnInit = function () {
                };
                return NoSelectedWorkoutPlanComponent;
            }());
            NoSelectedWorkoutPlanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-no-selected-workout-plan',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./no-selected-workout-plan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout-plan/my-workout-plans/no-selected-workout-plan/no-selected-workout-plan.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./no-selected-workout-plan.component.css */ "./src/main/webapp/app/workout-plan/my-workout-plans/no-selected-workout-plan/no-selected-workout-plan.component.css")).default]
                })
            ], NoSelectedWorkoutPlanComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout-plan/my-workout-plans/selected-workout-plan/selected-workout-plan.component.css": 
        /*!*********************************************************************************************************************!*\
          !*** ./src/main/webapp/app/workout-plan/my-workout-plans/selected-workout-plan/selected-workout-plan.component.css ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".selected-workout-plan {\r\n    background: rgba(255, 255, 255, 0.6);\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.cdk-drop-list-dragging .cdk-drag {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n.cdk-drag-animating {\r\n    transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n.cdk-drag:hover {\r\n    cursor: -webkit-grab;\r\n    cursor: grab;\r\n}\r\n\r\n.cdk-drop-list-dragging:hover .cdk-drag:hover {\r\n    cursor: -webkit-grabbing;\r\n    cursor: grabbing;\r\n}\r\n\r\ntable {\r\n    position: relative;\r\n}\r\n\r\n.order-index-workout {\r\n    position: absolute;\r\n    top: 7px;\r\n    left: 0;\r\n\r\n    border-radius: 50%;\r\n    width: 36px;\r\n    line-height: 36px;\r\n    padding: 4px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n    text-align: center;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvd29ya291dC1wbGFuL215LXdvcmtvdXQtcGxhbnMvc2VsZWN0ZWQtd29ya291dC1wbGFuL3NlbGVjdGVkLXdvcmtvdXQtcGxhbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLG9CQUFZO0lBQVosWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdCQUFnQjtJQUFoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87O0lBRVAsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHVDQUF1QztJQUN2QyxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL21haW4vd2ViYXBwL2FwcC93b3Jrb3V0LXBsYW4vbXktd29ya291dC1wbGFucy9zZWxlY3RlZC13b3Jrb3V0LXBsYW4vc2VsZWN0ZWQtd29ya291dC1wbGFuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0ZWQtd29ya291dC1wbGFuIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmNkay1kcmFnIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5jZGstZHJhZzpob3ZlciB7XHJcbiAgICBjdXJzb3I6IGdyYWI7XHJcbn1cclxuXHJcbi5jZGstZHJvcC1saXN0LWRyYWdnaW5nOmhvdmVyIC5jZGstZHJhZzpob3ZlciB7XHJcbiAgICBjdXJzb3I6IGdyYWJiaW5nO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5vcmRlci1pbmRleC13b3Jrb3V0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogN3B4O1xyXG4gICAgbGVmdDogMDtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout-plan/my-workout-plans/selected-workout-plan/selected-workout-plan.component.ts": 
        /*!********************************************************************************************************************!*\
          !*** ./src/main/webapp/app/workout-plan/my-workout-plans/selected-workout-plan/selected-workout-plan.component.ts ***!
          \********************************************************************************************************************/
        /*! exports provided: SelectedWorkoutPlanComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedWorkoutPlanComponent", function () { return SelectedWorkoutPlanComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _workout_workout_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../workout/workout.model */ "./src/main/webapp/app/workout/workout.model.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _workout_workout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../workout/workout.service */ "./src/main/webapp/app/workout/workout.service.ts");
            /* harmony import */ var _get_constant_view_name_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../get-constant-view-name.pipe */ "./src/main/webapp/app/get-constant-view-name.pipe.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
            /* harmony import */ var _workout_plan_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../workout-plan.model */ "./src/main/webapp/app/workout-plan/workout-plan.model.ts");
            /* harmony import */ var _workout_plan_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../workout-plan.service */ "./src/main/webapp/app/workout-plan/workout-plan.service.ts");
            var SelectedWorkoutPlanComponent = /** @class */ (function () {
                function SelectedWorkoutPlanComponent(route, workoutPlanService, workoutService, router, constantViewPipe, modalService) {
                    this.route = route;
                    this.workoutPlanService = workoutPlanService;
                    this.workoutService = workoutService;
                    this.router = router;
                    this.constantViewPipe = constantViewPipe;
                    this.modalService = modalService;
                    this.workoutDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.editMode = false;
                }
                SelectedWorkoutPlanComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.selectedWorkoutPlan = new _workout_plan_model__WEBPACK_IMPORTED_MODULE_8__["WorkoutPlan"]();
                    this.selectedWorkoutForModal = new _workout_workout_model__WEBPACK_IMPORTED_MODULE_2__["Workout"]();
                    this.route.params.subscribe(function (params) {
                        _this.workoutPlanId = params['id'];
                        _this.fetchWorkoutPlanDetails();
                    });
                    this.workoutService.getLoggedInUserWorkouts().subscribe(function (workouts) {
                        if (workouts) {
                            _this.loggedUserWorkouts = workouts;
                            _this.selectedWorkoutForModal = workouts[0];
                            _this.selectedWorkoutIdForModal = workouts[0].id;
                        }
                    });
                    this.route.queryParams.subscribe(function (queryParams) {
                        if (queryParams['edit']) {
                            _this.editMode = queryParams['edit'] === '1';
                            if (_this.editMode) {
                                _this.editWorkoutPlanBindingModel = JSON.parse(JSON.stringify(_this.selectedWorkoutPlan));
                                _this.editWorkoutPlanBindingModel.isPublic = _this.selectedWorkoutPlan.isPublic;
                                _this.deletedWorkoutsStack = [];
                            }
                        }
                        else {
                            _this.editMode = false;
                        }
                    });
                };
                SelectedWorkoutPlanComponent.prototype.open = function (content) {
                    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(function (result) {
                    }, function (reason) {
                    });
                };
                SelectedWorkoutPlanComponent.prototype.openAddWorkoutModal = function (content) {
                    var _this = this;
                    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(function (result) {
                        _this.workoutPlanService.addWorkoutFromMyWorkoutsToMyWorkoutPlan(_this.workoutPlanId, _this.selectedWorkoutIdForModal)
                            .subscribe(function (workoutPlan) {
                            if (workoutPlan) {
                                _this.selectedWorkoutPlan = workoutPlan;
                                _this.calculateExercisesSets();
                            }
                        });
                    }, function (reason) {
                    });
                };
                SelectedWorkoutPlanComponent.prototype.fetchWorkoutPlanDetails = function () {
                    var _this = this;
                    this.workoutPlanService.getLoggedInUserWorkoutPlans().subscribe(function (workoutPlans) {
                        if (workoutPlans) {
                            _this.selectedWorkoutPlan = workoutPlans.find(function (w) { return w.id === _this.workoutPlanId; });
                            _this.calculateExercisesSets();
                        }
                    });
                };
                SelectedWorkoutPlanComponent.prototype.calculateExercisesSets = function () {
                    var exerciseSetsArray = [];
                    var muscleGroupColorsArray = [];
                    var colors = ['#f68d5c',
                        '#0dc8f3',
                        '#6f2ac2',
                        '#84e26b',
                        '#86974b',
                        '#fa1483',
                        '#c2118b',
                        '#d79aaf',
                        '#f2f0c1',
                        '#0ccbb7',
                        '#e88ef8',
                        '#ccf3f1',
                        '#d1fc9e',
                        '#dbb005',
                        '#2b352b',
                        '#781037',
                        '#636e8d'];
                    var exercisesSets = {};
                    for (var _i = 0, _a = this.selectedWorkoutPlan.workouts; _i < _a.length; _i++) {
                        var workout = _a[_i];
                        var workoutExercises = workout.workout.exercises;
                        workoutExercises.forEach(function (e) {
                            if (!exercisesSets.hasOwnProperty(e.exercise.majorMuscleGroup)) {
                                exercisesSets[e.exercise.majorMuscleGroup] = 0;
                            }
                            exercisesSets[e.exercise.majorMuscleGroup] += e.sets;
                            e.exercise.assistingMuscleGroups.forEach(function (a) {
                                if (!exercisesSets.hasOwnProperty(a)) {
                                    exercisesSets[a] = 0;
                                }
                                exercisesSets[a] += e.sets * 0.5;
                            });
                        });
                    }
                    for (var exercisesSetsKey in exercisesSets) {
                        var exercise = {
                            name: this.constantViewPipe.transform(exercisesSetsKey).toUpperCase(),
                            value: exercisesSets[exercisesSetsKey]
                        };
                        var muscleGroupColor = {
                            name: this.constantViewPipe.transform(exercisesSetsKey).toUpperCase(),
                            value: colors.pop()
                        };
                        exerciseSetsArray.push(exercise);
                        muscleGroupColorsArray.push(muscleGroupColor);
                        exerciseSetsArray.push(exercise);
                    }
                    this.muscleGroupSets = exerciseSetsArray;
                    this.customColors = muscleGroupColorsArray;
                };
                SelectedWorkoutPlanComponent.prototype.onWorkoutDeleteHandler = function (workoutId, orderIndex) {
                    this.editWorkoutPlanBindingModel.workouts =
                        this.editWorkoutPlanBindingModel.workouts.filter(function (w) { return w.orderIndex !== orderIndex || w.id !== workoutId; });
                    this.rearrangeOrderIndexes();
                };
                SelectedWorkoutPlanComponent.prototype.onSaveHandler = function () {
                    var _this = this;
                    this.workoutPlanService.editMyWorkoutPlan(this.workoutPlanId, this.editWorkoutPlanBindingModel).subscribe(function (workoutPlan) {
                        _this.selectedWorkoutPlan = workoutPlan;
                        _this.calculateExercisesSets();
                    });
                    this.router.navigate(['./'], { relativeTo: this.route });
                };
                SelectedWorkoutPlanComponent.prototype.onWorkoutPlanDeleteHandler = function () {
                    var _this = this;
                    this.workoutPlanService.deleteMyWorkoutPlan(this.workoutPlanId).subscribe(function (result) {
                        if (result) {
                            _this.router.navigate(['/my-workout-plans']);
                        }
                    });
                };
                SelectedWorkoutPlanComponent.prototype.onDrop = function (event) {
                    Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["moveItemInArray"])(this.editWorkoutPlanBindingModel.workouts, event.previousIndex, event.currentIndex);
                    this.rearrangeOrderIndexes();
                };
                SelectedWorkoutPlanComponent.prototype.rearrangeOrderIndexes = function () {
                    var workouts = this.editWorkoutPlanBindingModel.workouts;
                    for (var i = 0; i < workouts.length; i++) {
                        workouts[i].orderIndex = i + 1;
                    }
                };
                SelectedWorkoutPlanComponent.prototype.setSelectedWorkoutForModal = function () {
                    var _this = this;
                    this.selectedWorkoutForModal = this.loggedUserWorkouts.filter(function (w) { return w.id === _this.selectedWorkoutIdForModal; })[0];
                };
                SelectedWorkoutPlanComponent.prototype.exportToExcelHandler = function () {
                    var _this = this;
                    this.workoutPlanService.exportWorkoutPlanToExcel(this.selectedWorkoutPlan.id).subscribe(function (blob) {
                        var url = window.URL.createObjectURL(blob);
                        var anchor = document.createElement("a");
                        anchor.download = _this.selectedWorkoutPlan.name.replace(/\s+/g, '-').toLowerCase() + '.xlsx';
                        anchor.href = url;
                        anchor.click();
                    });
                };
                return SelectedWorkoutPlanComponent;
            }());
            SelectedWorkoutPlanComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _workout_plan_service__WEBPACK_IMPORTED_MODULE_9__["WorkoutPlanService"] },
                { type: _workout_workout_service__WEBPACK_IMPORTED_MODULE_4__["WorkoutService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _get_constant_view_name_pipe__WEBPACK_IMPORTED_MODULE_5__["GetConstantViewNamePipe"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], SelectedWorkoutPlanComponent.prototype, "workoutDelete", void 0);
            SelectedWorkoutPlanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-selected-workout-plan',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./selected-workout-plan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout-plan/my-workout-plans/selected-workout-plan/selected-workout-plan.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./selected-workout-plan.component.css */ "./src/main/webapp/app/workout-plan/my-workout-plans/selected-workout-plan/selected-workout-plan.component.css")).default]
                })
            ], SelectedWorkoutPlanComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout-plan/workout-plan-binding-model.ts": 
        /*!************************************************************************!*\
          !*** ./src/main/webapp/app/workout-plan/workout-plan-binding-model.ts ***!
          \************************************************************************/
        /*! exports provided: WorkoutPlanBindingModel */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutPlanBindingModel", function () { return WorkoutPlanBindingModel; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var WorkoutPlanBindingModel = /** @class */ (function () {
                function WorkoutPlanBindingModel() {
                    this.isPublic = false;
                }
                return WorkoutPlanBindingModel;
            }());
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout-plan/workout-plan-card/workout-plan-card.component.css": 
        /*!********************************************************************************************!*\
          !*** ./src/main/webapp/app/workout-plan/workout-plan-card/workout-plan-card.component.css ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    position: relative;\r\n}\r\n\r\n.order-index-workout {\r\n    position: absolute;\r\n    top: 7px;\r\n    left: 0;\r\n\r\n    border-radius: 50%;\r\n    width: 36px;\r\n    line-height: 36px;\r\n    padding: 4px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n    text-align: center;\r\n}\r\n\r\n.card {\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n    border-radius: 30px;\r\n    overflow: hidden;\r\n    position: relative;\r\n    background: rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n.btn {\r\n    border-radius: 10px;\r\n}\r\n\r\n.buttons-wrapper {\r\n    position: absolute;\r\n    bottom: 1em;\r\n}\r\n\r\n.buttons-wrapper.right {\r\n    right: 1em;\r\n}\r\n\r\n.buttons-wrapper.left {\r\n    left: 1em;\r\n}\r\n\r\n.accordion{\r\n    max-height: 300px;\r\n    overflow-y: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n\r\nsvg.body-model .is-focused {\r\n    fill: greenyellow !important;\r\n    fill-opacity: 0.4;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvd29ya291dC1wbGFuL3dvcmtvdXQtcGxhbi1jYXJkL3dvcmtvdXQtcGxhbi1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87O0lBRVAsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHVDQUF1QztJQUN2QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvbWFpbi93ZWJhcHAvYXBwL3dvcmtvdXQtcGxhbi93b3Jrb3V0LXBsYW4tY2FyZC93b3Jrb3V0LXBsYW4tY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ub3JkZXItaW5kZXgtd29ya291dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDdweDtcclxuICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmJ1dHRvbnMtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDFlbTtcclxufVxyXG5cclxuLmJ1dHRvbnMtd3JhcHBlci5yaWdodCB7XHJcbiAgICByaWdodDogMWVtO1xyXG59XHJcblxyXG4uYnV0dG9ucy13cmFwcGVyLmxlZnQge1xyXG4gICAgbGVmdDogMWVtO1xyXG59XHJcblxyXG4uYWNjb3JkaW9ue1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG59XHJcblxyXG5zdmcuYm9keS1tb2RlbCAuaXMtZm9jdXNlZCB7XHJcbiAgICBmaWxsOiBncmVlbnllbGxvdyAhaW1wb3J0YW50O1xyXG4gICAgZmlsbC1vcGFjaXR5OiAwLjQ7XHJcbn1cclxuXHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout-plan/workout-plan-card/workout-plan-card.component.ts": 
        /*!*******************************************************************************************!*\
          !*** ./src/main/webapp/app/workout-plan/workout-plan-card/workout-plan-card.component.ts ***!
          \*******************************************************************************************/
        /*! exports provided: WorkoutPlanCardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutPlanCardComponent", function () { return WorkoutPlanCardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _workout_plan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../workout-plan.service */ "./src/main/webapp/app/workout-plan/workout-plan.service.ts");
            var WorkoutPlanCardComponent = /** @class */ (function () {
                function WorkoutPlanCardComponent(workoutPlanService) {
                    this.workoutPlanService = workoutPlanService;
                    this.modalOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.setCounter = {
                        biceps: 0,
                        triceps: 0,
                        forearm: 0,
                        latisimus: 0,
                        erectors: 0,
                        traps: 0,
                        chest: 0,
                        anteriorDeltoid: 0,
                        lateralDeltoid: 0,
                        posteriorDeltoid: 0,
                        hamstrings: 0,
                        gluteus: 0,
                        calves: 0,
                        quadriceps: 0,
                        abs: 0,
                    };
                }
                WorkoutPlanCardComponent.prototype.ngOnInit = function () {
                    this.calculateSetsPerMuscleGroup();
                };
                WorkoutPlanCardComponent.prototype.onMuscleMouseEnter = function (muscleType) {
                    this.focusedMuscleGroup = muscleType;
                };
                WorkoutPlanCardComponent.prototype.resetSelectedMuscleGroup = function () {
                    this.focusedMuscleGroup = undefined;
                };
                WorkoutPlanCardComponent.prototype.copyToMyWorkoutPlansHandler = function (id) {
                    this.modalOpen.emit(id);
                };
                WorkoutPlanCardComponent.prototype.calculateSetsPerMuscleGroup = function () {
                    var _this = this;
                    for (var _i = 0, _a = this.workoutPlan.workouts; _i < _a.length; _i++) {
                        var workout = _a[_i];
                        var workoutExercises = workout.workout.exercises;
                        workoutExercises.forEach(function (e) {
                            _this.setCounter[e.exercise.majorMuscleGroup] += e.sets;
                            e.exercise.assistingMuscleGroups.forEach(function (a) {
                                _this.setCounter[a] += e.sets * 0.5;
                            });
                        });
                    }
                };
                WorkoutPlanCardComponent.prototype.onLikeHandler = function () {
                    var _this = this;
                    this.workoutPlanService.likeWorkoutPlan(this.workoutPlan.id).subscribe(function (workoutPlan) {
                        _this.workoutPlan = workoutPlan;
                    });
                };
                return WorkoutPlanCardComponent;
            }());
            WorkoutPlanCardComponent.ctorParameters = function () { return [
                { type: _workout_plan_service__WEBPACK_IMPORTED_MODULE_2__["WorkoutPlanService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], WorkoutPlanCardComponent.prototype, "workoutPlan", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], WorkoutPlanCardComponent.prototype, "modalOpen", void 0);
            WorkoutPlanCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-workout-plan-card',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./workout-plan-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout-plan/workout-plan-card/workout-plan-card.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./workout-plan-card.component.css */ "./src/main/webapp/app/workout-plan/workout-plan-card/workout-plan-card.component.css")).default]
                })
            ], WorkoutPlanCardComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout-plan/workout-plan-details/workout-plan-details.component.css": 
        /*!**************************************************************************************************!*\
          !*** ./src/main/webapp/app/workout-plan/workout-plan-details/workout-plan-details.component.css ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".workout-plan-container {\r\n    background: rgba(255, 255, 255, 0.6);\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\ntable {\r\n    position: relative;\r\n}\r\n\r\n.order-index-workout {\r\n    position: absolute;\r\n    top: 7px;\r\n    left: 25px;\r\n\r\n    border-radius: 50%;\r\n    width: 36px;\r\n    line-height: 36px;\r\n    padding: 4px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n    text-align: center;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvd29ya291dC1wbGFuL3dvcmtvdXQtcGxhbi1kZXRhaWxzL3dvcmtvdXQtcGxhbi1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVOztJQUVWLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix1Q0FBdUM7SUFDdkMsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9tYWluL3dlYmFwcC9hcHAvd29ya291dC1wbGFuL3dvcmtvdXQtcGxhbi1kZXRhaWxzL3dvcmtvdXQtcGxhbi1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud29ya291dC1wbGFuLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm9yZGVyLWluZGV4LXdvcmtvdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3cHg7XHJcbiAgICBsZWZ0OiAyNXB4O1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout-plan/workout-plan-details/workout-plan-details.component.ts": 
        /*!*************************************************************************************************!*\
          !*** ./src/main/webapp/app/workout-plan/workout-plan-details/workout-plan-details.component.ts ***!
          \*************************************************************************************************/
        /*! exports provided: WorkoutPlanDetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutPlanDetailsComponent", function () { return WorkoutPlanDetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _get_constant_view_name_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../get-constant-view-name.pipe */ "./src/main/webapp/app/get-constant-view-name.pipe.ts");
            /* harmony import */ var _workout_plan_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../workout-plan.model */ "./src/main/webapp/app/workout-plan/workout-plan.model.ts");
            /* harmony import */ var _workout_plan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../workout-plan.service */ "./src/main/webapp/app/workout-plan/workout-plan.service.ts");
            /* harmony import */ var _comment_comment_binding_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../comment/comment-binding.model */ "./src/main/webapp/app/comment/comment-binding.model.ts");
            /* harmony import */ var _comment_comment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../comment/comment.service */ "./src/main/webapp/app/comment/comment.service.ts");
            /* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/main/webapp/app/auth/auth.service.ts");
            /* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../user/user.service */ "./src/main/webapp/app/user/user.service.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var WorkoutPlanDetailsComponent = /** @class */ (function () {
                function WorkoutPlanDetailsComponent(workoutPlanService, authService, userService, commentService, route, modalService, router, constantViewPipe, titleService) {
                    this.workoutPlanService = workoutPlanService;
                    this.authService = authService;
                    this.userService = userService;
                    this.commentService = commentService;
                    this.route = route;
                    this.modalService = modalService;
                    this.router = router;
                    this.constantViewPipe = constantViewPipe;
                    this.titleService = titleService;
                }
                WorkoutPlanDetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.titleService.setTitle('FitBook' + '- Workout Plan Details');
                    this.workoutPlan = new _workout_plan_model__WEBPACK_IMPORTED_MODULE_5__["WorkoutPlan"]();
                    this.commentBindingModel = new _comment_comment_binding_model__WEBPACK_IMPORTED_MODULE_7__["CommentBindingModel"]();
                    this.workoutPlanComments = [];
                    this.authService.user.subscribe(function (user) {
                        _this.isLoggedInUserModerator = _this.authService.isUserModerator(user.role);
                    });
                    this.userService.getLoggedInUserObservable().subscribe(function (user) {
                        if (user) {
                            _this.loggedInUserUsername = user.username;
                        }
                    });
                    this.route.params.subscribe(function (params) {
                        _this.workoutPlanId = params['id'];
                        _this.fetchWorkoutPlanDetails();
                    });
                };
                WorkoutPlanDetailsComponent.prototype.fetchWorkoutPlanDetails = function () {
                    var _this = this;
                    this.workoutPlanService.getWorkoutPlanById(this.workoutPlanId).subscribe(function (workoutPlan) {
                        if (workoutPlan) {
                            _this.workoutPlan = workoutPlan;
                            _this.workoutPlanComments = workoutPlan.comments;
                            _this.calculateExercisesSets();
                        }
                    });
                };
                WorkoutPlanDetailsComponent.prototype.calculateExercisesSets = function () {
                    var exerciseSetsArray = [];
                    var muscleGroupColorsArray = [];
                    var colors = ['#f68d5c',
                        '#0dc8f3',
                        '#6f2ac2',
                        '#84e26b',
                        '#86974b',
                        '#fa1483',
                        '#c2118b',
                        '#d79aaf',
                        '#f2f0c1',
                        '#0ccbb7',
                        '#e88ef8',
                        '#ccf3f1',
                        '#d1fc9e',
                        '#dbb005',
                        '#2b352b',
                        '#781037',
                        '#636e8d'];
                    var exercisesSets = {};
                    for (var _i = 0, _a = this.workoutPlan.workouts; _i < _a.length; _i++) {
                        var workout = _a[_i];
                        var workoutExercises = workout.workout.exercises;
                        workoutExercises.forEach(function (e) {
                            if (!exercisesSets.hasOwnProperty(e.exercise.majorMuscleGroup)) {
                                exercisesSets[e.exercise.majorMuscleGroup] = 0;
                            }
                            exercisesSets[e.exercise.majorMuscleGroup] += e.sets;
                            e.exercise.assistingMuscleGroups.forEach(function (a) {
                                if (!exercisesSets.hasOwnProperty(a)) {
                                    exercisesSets[a] = 0;
                                }
                                exercisesSets[a] += e.sets * 0.5;
                            });
                        });
                    }
                    for (var exercisesSetsKey in exercisesSets) {
                        var exercise = {
                            name: this.constantViewPipe.transform(exercisesSetsKey).toUpperCase(),
                            value: exercisesSets[exercisesSetsKey]
                        };
                        var muscleGroupColor = {
                            name: this.constantViewPipe.transform(exercisesSetsKey).toUpperCase(),
                            value: colors.pop()
                        };
                        exerciseSetsArray.push(exercise);
                        muscleGroupColorsArray.push(muscleGroupColor);
                        exerciseSetsArray.push(exercise);
                    }
                    this.exercisesSets = exerciseSetsArray;
                    this.customColors = muscleGroupColorsArray;
                };
                WorkoutPlanDetailsComponent.prototype.open = function (content) {
                    var _this = this;
                    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
                        _this.workoutPlanService.copyWorkoutPlanToMyWorkoutPlans(_this.workoutPlanId).subscribe(function (workoutPlan) {
                            _this.router.navigate(['my-workout-plans/', workoutPlan.id]);
                        });
                    }, function (reason) {
                    });
                };
                WorkoutPlanDetailsComponent.prototype.exportToExcelHandler = function () {
                    var _this = this;
                    this.workoutPlanService.exportWorkoutPlanToExcel(this.workoutPlanId).subscribe(function (blob) {
                        var url = window.URL.createObjectURL(blob);
                        var anchor = document.createElement("a");
                        anchor.download = _this.workoutPlan.name.replace(/\s+/g, '-').toLowerCase() + '.xlsx';
                        anchor.href = url;
                        anchor.click();
                    });
                };
                WorkoutPlanDetailsComponent.prototype.onLikeHandler = function () {
                    var _this = this;
                    this.workoutPlanService.likeWorkoutPlan(this.workoutPlan.id).subscribe(function (workoutPlan) {
                        _this.workoutPlan = workoutPlan;
                    });
                };
                WorkoutPlanDetailsComponent.prototype.onPostHandler = function () {
                    var _this = this;
                    this.commentService.commentWorkoutPlan(this.workoutPlan.id, this.commentBindingModel).subscribe(function (comment) {
                        _this.commentBindingModel = new _comment_comment_binding_model__WEBPACK_IMPORTED_MODULE_7__["CommentBindingModel"]();
                        _this.workoutPlanComments.push(comment);
                    });
                };
                WorkoutPlanDetailsComponent.prototype.onDeleteCommentHandler = function (id) {
                    var _this = this;
                    this.commentService.deleteWorkoutPlanComment(id).subscribe(function () {
                        _this.fetchWorkoutPlanDetails();
                    });
                };
                return WorkoutPlanDetailsComponent;
            }());
            WorkoutPlanDetailsComponent.ctorParameters = function () { return [
                { type: _workout_plan_service__WEBPACK_IMPORTED_MODULE_6__["WorkoutPlanService"] },
                { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
                { type: _user_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
                { type: _comment_comment_service__WEBPACK_IMPORTED_MODULE_8__["CommentService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _get_constant_view_name_pipe__WEBPACK_IMPORTED_MODULE_4__["GetConstantViewNamePipe"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Title"] }
            ]; };
            WorkoutPlanDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-workout-plan-details',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./workout-plan-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout-plan/workout-plan-details/workout-plan-details.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./workout-plan-details.component.css */ "./src/main/webapp/app/workout-plan/workout-plan-details/workout-plan-details.component.css")).default]
                })
            ], WorkoutPlanDetailsComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout-plan/workout-plan.model.ts": 
        /*!****************************************************************!*\
          !*** ./src/main/webapp/app/workout-plan/workout-plan.model.ts ***!
          \****************************************************************/
        /*! exports provided: WorkoutPlan */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutPlan", function () { return WorkoutPlan; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var WorkoutPlan = /** @class */ (function () {
                function WorkoutPlan() {
                }
                return WorkoutPlan;
            }());
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout-plan/workout-plan.service.ts": 
        /*!******************************************************************!*\
          !*** ./src/main/webapp/app/workout-plan/workout-plan.service.ts ***!
          \******************************************************************/
        /*! exports provided: WorkoutPlanService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutPlanService", function () { return WorkoutPlanService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-settings */ "./src/main/webapp/app/app-settings.ts");
            var WorkoutPlanService = /** @class */ (function () {
                function WorkoutPlanService(http) {
                    this.http = http;
                }
                WorkoutPlanService.prototype.createWorkoutPlan = function (workoutPlanBindingModel) {
                    return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/workout-plans/create", workoutPlanBindingModel);
                };
                WorkoutPlanService.prototype.getLoggedInUserWorkoutPlans = function () {
                    return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/workout-plans/my");
                };
                WorkoutPlanService.prototype.deleteMyWorkoutPlan = function (workoutPlanId) {
                    return this.http.delete(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/workout-plans/delete/" + workoutPlanId);
                };
                WorkoutPlanService.prototype.editMyWorkoutPlan = function (workoutPlanId, workoutPlanEditBindingModel) {
                    return this.http.put(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/workout-plans/edit/" + workoutPlanId, workoutPlanEditBindingModel);
                };
                WorkoutPlanService.prototype.getAllPublicWorkoutPlans = function () {
                    return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/workout-plans/public/all");
                };
                WorkoutPlanService.prototype.getWorkoutPlanById = function (workoutPlanId) {
                    return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/workout-plans/" + workoutPlanId);
                };
                WorkoutPlanService.prototype.copyWorkoutPlanToMyWorkoutPlans = function (workoutPlanId) {
                    return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/workout-plans/copy/" + workoutPlanId, null);
                };
                WorkoutPlanService.prototype.addWorkoutFromMyWorkoutsToMyWorkoutPlan = function (workoutPlanId, workoutId) {
                    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('workoutId', workoutId);
                    return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/workout-plans/add-workout/" + workoutPlanId, null, { params: params });
                };
                WorkoutPlanService.prototype.exportWorkoutPlanToExcel = function (workoutPlanId) {
                    return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/workout-plans/export/excel/" + workoutPlanId, { responseType: "blob" });
                };
                WorkoutPlanService.prototype.likeWorkoutPlan = function (workoutPlanId) {
                    return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/workout-plans/like/" + workoutPlanId, null);
                };
                return WorkoutPlanService;
            }());
            WorkoutPlanService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            WorkoutPlanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root',
                })
            ], WorkoutPlanService);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout/all-workouts/all-workouts.component.css": 
        /*!*****************************************************************************!*\
          !*** ./src/main/webapp/app/workout/all-workouts/all-workouts.component.css ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbWFpbi93ZWJhcHAvYXBwL3dvcmtvdXQvYWxsLXdvcmtvdXRzL2FsbC13b3Jrb3V0cy5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout/all-workouts/all-workouts.component.ts": 
        /*!****************************************************************************!*\
          !*** ./src/main/webapp/app/workout/all-workouts/all-workouts.component.ts ***!
          \****************************************************************************/
        /*! exports provided: AllWorkoutsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllWorkoutsComponent", function () { return AllWorkoutsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _workout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../workout.service */ "./src/main/webapp/app/workout/workout.service.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var AllWorkoutsComponent = /** @class */ (function () {
                function AllWorkoutsComponent(workoutService, modalService, router, titleService) {
                    this.workoutService = workoutService;
                    this.modalService = modalService;
                    this.router = router;
                    this.titleService = titleService;
                    this.page = 1;
                    this.pageSize = 6;
                }
                AllWorkoutsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.titleService.setTitle('FitBook' + '- All Workouts');
                    this.loading = true;
                    this.workoutService.fetchAllPublicWorkouts().subscribe(function (workouts) {
                        if (workouts) {
                            _this.workouts = workouts;
                            _this.filteredWorkouts = workouts.slice();
                            _this.loading = false;
                        }
                    });
                };
                AllWorkoutsComponent.prototype.open = function (content, workoutId) {
                    var _this = this;
                    this.selectedWorkoutForModal = this.workouts.find(function (e) { return e.id === workoutId; });
                    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
                        _this.loading = true;
                        _this.workoutService.copyWorkoutToLoggedUserWorkouts(workoutId).subscribe(function (workout) {
                            _this.loading = false;
                            _this.router.navigate(['my-workouts', workout.id]);
                        });
                    }, function (reason) {
                    });
                };
                return AllWorkoutsComponent;
            }());
            AllWorkoutsComponent.ctorParameters = function () { return [
                { type: _workout_service__WEBPACK_IMPORTED_MODULE_2__["WorkoutService"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }
            ]; };
            AllWorkoutsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-all-workouts',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-workouts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout/all-workouts/all-workouts.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-workouts.component.css */ "./src/main/webapp/app/workout/all-workouts/all-workouts.component.css")).default]
                })
            ], AllWorkoutsComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout/my-workouts/my-workouts.component.css": 
        /*!***************************************************************************!*\
          !*** ./src/main/webapp/app/workout/my-workouts/my-workouts.component.css ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".list-group{\r\n  max-height: 300px;\r\n  overflow-y: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvd29ya291dC9teS13b3Jrb3V0cy9teS13b3Jrb3V0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL21haW4vd2ViYXBwL2FwcC93b3Jrb3V0L215LXdvcmtvdXRzL215LXdvcmtvdXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1ncm91cHtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout/my-workouts/my-workouts.component.ts": 
        /*!**************************************************************************!*\
          !*** ./src/main/webapp/app/workout/my-workouts/my-workouts.component.ts ***!
          \**************************************************************************/
        /*! exports provided: MyWorkoutsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWorkoutsComponent", function () { return MyWorkoutsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _workout_binding_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workout-binding-model */ "./src/main/webapp/app/workout/workout-binding-model.ts");
            /* harmony import */ var _workout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../workout.service */ "./src/main/webapp/app/workout/workout.service.ts");
            /* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/main/webapp/app/auth/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var MyWorkoutsComponent = /** @class */ (function () {
                function MyWorkoutsComponent(modalService, workoutService, authService, router, route, titleService) {
                    this.modalService = modalService;
                    this.workoutService = workoutService;
                    this.authService = authService;
                    this.router = router;
                    this.route = route;
                    this.titleService = titleService;
                }
                MyWorkoutsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.titleService.setTitle('FitBook' + '- My Workouts');
                    this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]; })).subscribe(function () {
                        _this.fetchWorkouts();
                    });
                    this.setSelectedWorkoutIdFromParams();
                    this.fetchWorkouts();
                    this.workoutBindingModel = new _workout_binding_model__WEBPACK_IMPORTED_MODULE_3__["WorkoutBindingModel"]();
                };
                MyWorkoutsComponent.prototype.fetchWorkouts = function () {
                    var _this = this;
                    this.workoutService.getLoggedInUserWorkouts().subscribe(function (workouts) {
                        workouts.sort(function (w1, w2) { return w1.name.localeCompare(w2.name); });
                        _this.workouts = workouts;
                    });
                };
                MyWorkoutsComponent.prototype.open = function (content) {
                    var _this = this;
                    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
                        _this.workoutService.createWorkout(_this.workoutBindingModel)
                            .subscribe(function (workout) {
                            _this.fetchWorkouts();
                            _this.router.navigate(['my-workouts/' + workout.id]);
                        });
                        _this.workoutBindingModel = new _workout_binding_model__WEBPACK_IMPORTED_MODULE_3__["WorkoutBindingModel"]();
                    }, function (reason) {
                    });
                };
                MyWorkoutsComponent.prototype.setSelectedWorkoutIdFromParams = function () {
                    var _this = this;
                    this.route.firstChild.params.subscribe(function (params) {
                        _this.selectedWorkoutId = params['id'] ? params['id'] : undefined;
                    });
                };
                MyWorkoutsComponent.prototype.onWorkoutButtonClick = function (workoutId) {
                    this.selectedWorkoutId = workoutId;
                    this.router.navigate([workoutId], { relativeTo: this.route });
                };
                MyWorkoutsComponent.prototype.onRouterOutletDeactivate = function () {
                    this.fetchWorkouts();
                };
                MyWorkoutsComponent.prototype.onRouterOutletActivate = function () {
                    this.setSelectedWorkoutIdFromParams();
                    this.fetchWorkouts();
                };
                return MyWorkoutsComponent;
            }());
            MyWorkoutsComponent.ctorParameters = function () { return [
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
                { type: _workout_service__WEBPACK_IMPORTED_MODULE_4__["WorkoutService"] },
                { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"] }
            ]; };
            MyWorkoutsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-my-workouts',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-workouts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout/my-workouts/my-workouts.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-workouts.component.css */ "./src/main/webapp/app/workout/my-workouts/my-workouts.component.css")).default]
                })
            ], MyWorkoutsComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout/my-workouts/no-selected-workout/no-selected-workout.component.css": 
        /*!*******************************************************************************************************!*\
          !*** ./src/main/webapp/app/workout/my-workouts/no-selected-workout/no-selected-workout.component.css ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbWFpbi93ZWJhcHAvYXBwL3dvcmtvdXQvbXktd29ya291dHMvbm8tc2VsZWN0ZWQtd29ya291dC9uby1zZWxlY3RlZC13b3Jrb3V0LmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout/my-workouts/no-selected-workout/no-selected-workout.component.ts": 
        /*!******************************************************************************************************!*\
          !*** ./src/main/webapp/app/workout/my-workouts/no-selected-workout/no-selected-workout.component.ts ***!
          \******************************************************************************************************/
        /*! exports provided: NoSelectedWorkoutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoSelectedWorkoutComponent", function () { return NoSelectedWorkoutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NoSelectedWorkoutComponent = /** @class */ (function () {
                function NoSelectedWorkoutComponent() {
                }
                NoSelectedWorkoutComponent.prototype.ngOnInit = function () {
                };
                return NoSelectedWorkoutComponent;
            }());
            NoSelectedWorkoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-no-selected-workout',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./no-selected-workout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout/my-workouts/no-selected-workout/no-selected-workout.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./no-selected-workout.component.css */ "./src/main/webapp/app/workout/my-workouts/no-selected-workout/no-selected-workout.component.css")).default]
                })
            ], NoSelectedWorkoutComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout/my-workouts/selected-workout/selected-workout.component.css": 
        /*!*************************************************************************************************!*\
          !*** ./src/main/webapp/app/workout/my-workouts/selected-workout/selected-workout.component.css ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".selected-workout {\r\n    background: rgba(255, 255, 255, 0.6);\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.cdk-drop-list-dragging .cdk-drag {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n.cdk-drag-animating {\r\n    transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n.cdk-drag:hover {\r\n    cursor: -webkit-grab;\r\n    cursor: grab;\r\n}\r\n\r\n.cdk-drop-list-dragging:hover .cdk-drag:hover {\r\n    cursor: -webkit-grabbing;\r\n    cursor: grabbing;\r\n}\r\n\r\n.chart {\r\n    background: white;\r\n    border: 2px solid black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvd29ya291dC9teS13b3Jrb3V0cy9zZWxlY3RlZC13b3Jrb3V0L3NlbGVjdGVkLXdvcmtvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztJQUNwQyx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxvQkFBWTtJQUFaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvbWFpbi93ZWJhcHAvYXBwL3dvcmtvdXQvbXktd29ya291dHMvc2VsZWN0ZWQtd29ya291dC9zZWxlY3RlZC13b3Jrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0ZWQtd29ya291dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5jZGstZHJhZyB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4uY2RrLWRyYWc6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBncmFiO1xyXG59XHJcblxyXG4uY2RrLWRyb3AtbGlzdC1kcmFnZ2luZzpob3ZlciAuY2RrLWRyYWc6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBncmFiYmluZztcclxufVxyXG5cclxuLmNoYXJ0IHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout/my-workouts/selected-workout/selected-workout.component.ts": 
        /*!************************************************************************************************!*\
          !*** ./src/main/webapp/app/workout/my-workouts/selected-workout/selected-workout.component.ts ***!
          \************************************************************************************************/
        /*! exports provided: SelectedWorkoutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedWorkoutComponent", function () { return SelectedWorkoutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _workout_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../workout.model */ "./src/main/webapp/app/workout/workout.model.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
            /* harmony import */ var _workout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../workout.service */ "./src/main/webapp/app/workout/workout.service.ts");
            /* harmony import */ var _get_constant_view_name_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../get-constant-view-name.pipe */ "./src/main/webapp/app/get-constant-view-name.pipe.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            var SelectedWorkoutComponent = /** @class */ (function () {
                function SelectedWorkoutComponent(route, workoutService, router, constantViewPipe, modalService) {
                    this.route = route;
                    this.workoutService = workoutService;
                    this.router = router;
                    this.constantViewPipe = constantViewPipe;
                    this.modalService = modalService;
                    this.workoutDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.editMode = false;
                }
                SelectedWorkoutComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.selectedWorkout = new _workout_model__WEBPACK_IMPORTED_MODULE_2__["Workout"]();
                    this.route.params.subscribe(function (params) {
                        _this.workoutId = params['id'];
                        _this.fetchWorkoutDetails();
                    });
                    this.route.queryParams.subscribe(function (queryParams) {
                        if (queryParams['edit']) {
                            _this.editMode = queryParams['edit'] === '1';
                            if (_this.editMode) {
                                _this.editWorkoutBindingModel = JSON.parse(JSON.stringify(_this.selectedWorkout));
                                _this.editWorkoutBindingModel.isPublic = _this.selectedWorkout.isPublic;
                                _this.deletedWorkoutExercisesStack = [];
                            }
                        }
                        else {
                            _this.editMode = false;
                        }
                    });
                };
                SelectedWorkoutComponent.prototype.open = function (content) {
                    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(function (result) {
                    }, function (reason) {
                    });
                };
                SelectedWorkoutComponent.prototype.fetchWorkoutDetails = function () {
                    var _this = this;
                    this.workoutService.getLoggedInUserWorkouts().subscribe(function (workouts) {
                        if (workouts) {
                            _this.selectedWorkout = workouts.find(function (w) { return w.id === _this.workoutId; });
                            _this.selectedWorkout
                                .exercises
                                .sort(function (e1, e2) { return e1.orderIndex - e2.orderIndex; });
                            _this.calculateExercisesSets();
                        }
                    });
                };
                SelectedWorkoutComponent.prototype.calculateExercisesSets = function () {
                    var workoutExercises = this.selectedWorkout.exercises;
                    var exercisesSets = {};
                    workoutExercises.forEach(function (e) {
                        if (!exercisesSets.hasOwnProperty(e.exercise.majorMuscleGroup)) {
                            exercisesSets[e.exercise.majorMuscleGroup] = 0;
                        }
                        exercisesSets[e.exercise.majorMuscleGroup] += e.sets;
                        e.exercise.assistingMuscleGroups.forEach(function (a) {
                            if (!exercisesSets.hasOwnProperty(a)) {
                                exercisesSets[a] = 0;
                            }
                            exercisesSets[a] += e.sets * 0.5;
                        });
                    });
                    var colors = ['#f68d5c',
                        '#0dc8f3',
                        '#6f2ac2',
                        '#84e26b',
                        '#86974b',
                        '#fa1483',
                        '#c2118b',
                        '#d79aaf',
                        '#f2f0c1',
                        '#0ccbb7',
                        '#e88ef8',
                        '#ccf3f1',
                        '#d1fc9e',
                        '#dbb005',
                        '#2b352b',
                        '#781037',
                        '#636e8d'];
                    var exerciseSetsArray = [];
                    var muscleGroupColorsArray = [];
                    for (var exercisesSetsKey in exercisesSets) {
                        var exercise = {
                            name: this.constantViewPipe.transform(exercisesSetsKey).toUpperCase(),
                            value: exercisesSets[exercisesSetsKey]
                        };
                        var muscleGroupColor = {
                            name: this.constantViewPipe.transform(exercisesSetsKey).toUpperCase(),
                            value: colors.pop()
                        };
                        exerciseSetsArray.push(exercise);
                        muscleGroupColorsArray.push(muscleGroupColor);
                        exerciseSetsArray.push(exercise);
                    }
                    this.exercisesSets = exerciseSetsArray;
                    this.customColors = muscleGroupColorsArray;
                };
                SelectedWorkoutComponent.prototype.onWorkoutExerciseDeleteHandler = function (workoutId, exerciseId) {
                    this.deletedWorkoutExercisesStack.push(exerciseId);
                    this.editWorkoutBindingModel.exercises = this.editWorkoutBindingModel.exercises.filter(function (e) { return e.id !== exerciseId; });
                    this.rearrangeOrderIndexes();
                };
                SelectedWorkoutComponent.prototype.deleteWorkoutExercise = function (workoutId, exerciseId) {
                    var _this = this;
                    this.workoutService.deleteWorkoutExerciseFromWorkout(workoutId, exerciseId).subscribe(function (workout) {
                        _this.selectedWorkout = workout;
                    });
                };
                SelectedWorkoutComponent.prototype.onSaveHandler = function () {
                    var _this = this;
                    this.workoutService.editWorkoutById(this.workoutId, this.editWorkoutBindingModel).subscribe(function (workout) {
                        console.log(workout.isPublic, 1);
                        _this.selectedWorkout = workout;
                        _this.calculateExercisesSets();
                    });
                    this.router.navigate(['./'], { relativeTo: this.route });
                };
                SelectedWorkoutComponent.prototype.onWorkoutDeleteHandler = function (workoutId) {
                    var _this = this;
                    this.workoutService.deleteWorkoutById(workoutId).subscribe(function (result) {
                        if (result) {
                            _this.workoutDelete.emit();
                            _this.router.navigate(['/my-workouts']);
                        }
                    });
                };
                SelectedWorkoutComponent.prototype.onDrop = function (event) {
                    Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["moveItemInArray"])(this.editWorkoutBindingModel.exercises, event.previousIndex, event.currentIndex);
                    this.rearrangeOrderIndexes();
                };
                SelectedWorkoutComponent.prototype.rearrangeOrderIndexes = function () {
                    var exercises = this.editWorkoutBindingModel.exercises;
                    for (var i = 0; i < exercises.length; i++) {
                        exercises[i].orderIndex = i + 1;
                    }
                };
                return SelectedWorkoutComponent;
            }());
            SelectedWorkoutComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _workout_service__WEBPACK_IMPORTED_MODULE_5__["WorkoutService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _get_constant_view_name_pipe__WEBPACK_IMPORTED_MODULE_6__["GetConstantViewNamePipe"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], SelectedWorkoutComponent.prototype, "workoutDelete", void 0);
            SelectedWorkoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-selected-workout',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./selected-workout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout/my-workouts/selected-workout/selected-workout.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./selected-workout.component.css */ "./src/main/webapp/app/workout/my-workouts/selected-workout/selected-workout.component.css")).default]
                })
            ], SelectedWorkoutComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout/workout-binding-model.ts": 
        /*!**************************************************************!*\
          !*** ./src/main/webapp/app/workout/workout-binding-model.ts ***!
          \**************************************************************/
        /*! exports provided: WorkoutBindingModel */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutBindingModel", function () { return WorkoutBindingModel; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var WorkoutBindingModel = /** @class */ (function () {
                function WorkoutBindingModel() {
                    this.isPublic = false;
                }
                return WorkoutBindingModel;
            }());
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout/workout-card/workout-card.component.css": 
        /*!*****************************************************************************!*\
          !*** ./src/main/webapp/app/workout/workout-card/workout-card.component.css ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".card {\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n    border-radius: 30px;\r\n    overflow: hidden;\r\n    position: relative;\r\n    background: rgba(255, 255, 255, 0.6);\r\n\r\n}\r\n\r\n.btn {\r\n    border-radius: 10px;\r\n}\r\n\r\n.buttons-wrapper {\r\n    position: absolute;\r\n    bottom: 1em;\r\n}\r\n\r\n.buttons-wrapper.right {\r\n    right: 1em;\r\n}\r\n\r\n.buttons-wrapper.left {\r\n    left: 1em;\r\n}\r\n\r\n.table-wrapper{\r\n    max-height: 300px;\r\n    overflow-y: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvd29ya291dC93b3Jrb3V0LWNhcmQvd29ya291dC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1Q0FBdUM7SUFDdkMsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0NBQW9DOztBQUV4Qzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztBQUNyQyIsImZpbGUiOiJzcmMvbWFpbi93ZWJhcHAvYXBwL3dvcmtvdXQvd29ya291dC1jYXJkL3dvcmtvdXQtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcblxyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5idXR0b25zLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbi5idXR0b25zLXdyYXBwZXIucmlnaHQge1xyXG4gICAgcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuLmJ1dHRvbnMtd3JhcHBlci5sZWZ0IHtcclxuICAgIGxlZnQ6IDFlbTtcclxufVxyXG5cclxuLnRhYmxlLXdyYXBwZXJ7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbn1cclxuXHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout/workout-card/workout-card.component.ts": 
        /*!****************************************************************************!*\
          !*** ./src/main/webapp/app/workout/workout-card/workout-card.component.ts ***!
          \****************************************************************************/
        /*! exports provided: WorkoutCardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutCardComponent", function () { return WorkoutCardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _workout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../workout.service */ "./src/main/webapp/app/workout/workout.service.ts");
            var WorkoutCardComponent = /** @class */ (function () {
                function WorkoutCardComponent(workoutService) {
                    this.workoutService = workoutService;
                    this.modalOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                WorkoutCardComponent.prototype.ngOnInit = function () {
                };
                WorkoutCardComponent.prototype.copyToMyWorkoutsHandler = function (id) {
                    this.modalOpen.emit(id);
                };
                WorkoutCardComponent.prototype.onLikeHandler = function () {
                    var _this = this;
                    this.workoutService.likeWorkout(this.workout.id).subscribe(function (workout) {
                        _this.workout = workout;
                    });
                };
                return WorkoutCardComponent;
            }());
            WorkoutCardComponent.ctorParameters = function () { return [
                { type: _workout_service__WEBPACK_IMPORTED_MODULE_2__["WorkoutService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], WorkoutCardComponent.prototype, "workout", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], WorkoutCardComponent.prototype, "modalOpen", void 0);
            WorkoutCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-workout-card',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./workout-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout/workout-card/workout-card.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./workout-card.component.css */ "./src/main/webapp/app/workout/workout-card/workout-card.component.css")).default]
                })
            ], WorkoutCardComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout/workout-details/workout-details.component.css": 
        /*!***********************************************************************************!*\
          !*** ./src/main/webapp/app/workout/workout-details/workout-details.component.css ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".workout-details {\r\n    background: rgba(255, 255, 255, 0.6);\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL3dlYmFwcC9hcHAvd29ya291dC93b3Jrb3V0LWRldGFpbHMvd29ya291dC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsdUNBQXVDO0FBQzNDIiwiZmlsZSI6InNyYy9tYWluL3dlYmFwcC9hcHAvd29ya291dC93b3Jrb3V0LWRldGFpbHMvd29ya291dC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud29ya291dC1kZXRhaWxzIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout/workout-details/workout-details.component.ts": 
        /*!**********************************************************************************!*\
          !*** ./src/main/webapp/app/workout/workout-details/workout-details.component.ts ***!
          \**********************************************************************************/
        /*! exports provided: WorkoutDetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutDetailsComponent", function () { return WorkoutDetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _workout_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../workout.model */ "./src/main/webapp/app/workout/workout.model.ts");
            /* harmony import */ var _workout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workout.service */ "./src/main/webapp/app/workout/workout.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _get_constant_view_name_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../get-constant-view-name.pipe */ "./src/main/webapp/app/get-constant-view-name.pipe.ts");
            /* harmony import */ var _comment_comment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../comment/comment.service */ "./src/main/webapp/app/comment/comment.service.ts");
            /* harmony import */ var _comment_comment_binding_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../comment/comment-binding.model */ "./src/main/webapp/app/comment/comment-binding.model.ts");
            /* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/main/webapp/app/auth/auth.service.ts");
            /* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../user/user.service */ "./src/main/webapp/app/user/user.service.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var WorkoutDetailsComponent = /** @class */ (function () {
                function WorkoutDetailsComponent(workoutService, commentService, userService, authService, route, modalService, router, constantViewPipe, titleService) {
                    this.workoutService = workoutService;
                    this.commentService = commentService;
                    this.userService = userService;
                    this.authService = authService;
                    this.route = route;
                    this.modalService = modalService;
                    this.router = router;
                    this.constantViewPipe = constantViewPipe;
                    this.titleService = titleService;
                }
                WorkoutDetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.titleService.setTitle('FitBook' + '- Workout Details');
                    this.workout = new _workout_model__WEBPACK_IMPORTED_MODULE_2__["Workout"]();
                    this.commentBindingModel = new _comment_comment_binding_model__WEBPACK_IMPORTED_MODULE_8__["CommentBindingModel"]();
                    this.workoutComments = [];
                    this.authService.user.subscribe(function (user) {
                        _this.isLoggedInUserModerator = _this.authService.isUserModerator(user.role);
                    });
                    this.userService.getLoggedInUserObservable().subscribe(function (user) {
                        if (user) {
                            _this.loggedInUserUsername = user.username;
                        }
                    });
                    this.route.params.subscribe(function (params) {
                        _this.workoutId = params['id'];
                        _this.fetchWorkoutDetails();
                    });
                };
                WorkoutDetailsComponent.prototype.fetchWorkoutDetails = function () {
                    var _this = this;
                    this.workoutService.fetchWorkoutById(this.workoutId).subscribe(function (workout) {
                        if (workout) {
                            _this.workout = workout;
                            console.log(workout);
                            _this.workout
                                .exercises
                                .sort(function (e1, e2) { return e1.orderIndex - e2.orderIndex; });
                            _this.workoutComments = workout.comments;
                            _this.calculateExercisesSets();
                        }
                    });
                };
                WorkoutDetailsComponent.prototype.calculateExercisesSets = function () {
                    var workoutExercises = this.workout.exercises;
                    var exercisesSets = {};
                    workoutExercises.forEach(function (e) {
                        if (!exercisesSets.hasOwnProperty(e.exercise.majorMuscleGroup)) {
                            exercisesSets[e.exercise.majorMuscleGroup] = 0;
                        }
                        exercisesSets[e.exercise.majorMuscleGroup] += e.sets;
                        e.exercise.assistingMuscleGroups.forEach(function (a) {
                            if (!exercisesSets.hasOwnProperty(a)) {
                                exercisesSets[a] = 0;
                            }
                            exercisesSets[a] += e.sets * 0.5;
                        });
                    });
                    var colors = ['#f68d5c',
                        '#0dc8f3',
                        '#6f2ac2',
                        '#84e26b',
                        '#86974b',
                        '#fa1483',
                        '#c2118b',
                        '#d79aaf',
                        '#f2f0c1',
                        '#0ccbb7',
                        '#e88ef8',
                        '#ccf3f1',
                        '#d1fc9e',
                        '#dbb005',
                        '#2b352b',
                        '#781037',
                        '#636e8d'];
                    var exerciseSetsArray = [];
                    var muscleGroupColorsArray = [];
                    for (var exercisesSetsKey in exercisesSets) {
                        var exercise = {
                            name: this.constantViewPipe.transform(exercisesSetsKey).toUpperCase(),
                            value: exercisesSets[exercisesSetsKey]
                        };
                        var muscleGroupColor = {
                            name: this.constantViewPipe.transform(exercisesSetsKey).toUpperCase(),
                            value: colors.pop()
                        };
                        exerciseSetsArray.push(exercise);
                        muscleGroupColorsArray.push(muscleGroupColor);
                    }
                    this.exercisesSets = exerciseSetsArray;
                    this.customColors = muscleGroupColorsArray;
                };
                WorkoutDetailsComponent.prototype.open = function (content) {
                    var _this = this;
                    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
                        _this.workoutService.copyWorkoutToLoggedUserWorkouts(_this.workoutId).subscribe(function (workout) {
                            _this.router.navigate(['my-workouts', workout.id]);
                        });
                    }, function (reason) {
                    });
                };
                WorkoutDetailsComponent.prototype.onLikeHandler = function () {
                    var _this = this;
                    this.workoutService.likeWorkout(this.workout.id).subscribe(function (workout) {
                        _this.workout = workout;
                    });
                };
                WorkoutDetailsComponent.prototype.onPostHandler = function () {
                    var _this = this;
                    this.commentService.commentWorkout(this.workout.id, this.commentBindingModel).subscribe(function (comment) {
                        _this.commentBindingModel = new _comment_comment_binding_model__WEBPACK_IMPORTED_MODULE_8__["CommentBindingModel"]();
                        _this.workoutComments.push(comment);
                    });
                };
                WorkoutDetailsComponent.prototype.onDeleteCommentHandler = function (id) {
                    var _this = this;
                    this.commentService.deleteWorkoutComment(id).subscribe(function () {
                        _this.fetchWorkoutDetails();
                    });
                };
                return WorkoutDetailsComponent;
            }());
            WorkoutDetailsComponent.ctorParameters = function () { return [
                { type: _workout_service__WEBPACK_IMPORTED_MODULE_3__["WorkoutService"] },
                { type: _comment_comment_service__WEBPACK_IMPORTED_MODULE_7__["CommentService"] },
                { type: _user_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
                { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _get_constant_view_name_pipe__WEBPACK_IMPORTED_MODULE_6__["GetConstantViewNamePipe"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Title"] }
            ]; };
            WorkoutDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-workout-details',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./workout-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/main/webapp/app/workout/workout-details/workout-details.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./workout-details.component.css */ "./src/main/webapp/app/workout/workout-details/workout-details.component.css")).default]
                })
            ], WorkoutDetailsComponent);
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout/workout.model.ts": 
        /*!******************************************************!*\
          !*** ./src/main/webapp/app/workout/workout.model.ts ***!
          \******************************************************/
        /*! exports provided: Workout */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Workout", function () { return Workout; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Workout = /** @class */ (function () {
                function Workout() {
                }
                return Workout;
            }());
            /***/ 
        }),
        /***/ "./src/main/webapp/app/workout/workout.service.ts": 
        /*!********************************************************!*\
          !*** ./src/main/webapp/app/workout/workout.service.ts ***!
          \********************************************************/
        /*! exports provided: WorkoutService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutService", function () { return WorkoutService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-settings */ "./src/main/webapp/app/app-settings.ts");
            var WorkoutService = /** @class */ (function () {
                function WorkoutService(http) {
                    this.http = http;
                }
                WorkoutService.prototype.createWorkout = function (workoutCreateModel) {
                    return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/workouts/create", workoutCreateModel);
                };
                WorkoutService.prototype.addWorkoutExerciseToWorkout = function (workoutExerciseBindingModel, workoutId) {
                    return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/workouts/add-exercise/" + workoutId, workoutExerciseBindingModel);
                };
                WorkoutService.prototype.fetchAllPublicWorkouts = function () {
                    return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/workouts/public/all");
                };
                WorkoutService.prototype.fetchWorkoutById = function (id) {
                    return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/workouts/" + id);
                };
                WorkoutService.prototype.getLoggedInUserWorkouts = function () {
                    return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/workouts/my/");
                };
                WorkoutService.prototype.deleteWorkoutExerciseFromWorkout = function (workoutId, exerciseId) {
                    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('exerciseId', exerciseId);
                    return this.http.delete(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/workouts/delete-exercise/" + workoutId, { params: params });
                };
                WorkoutService.prototype.deleteWorkoutById = function (workoutId) {
                    return this.http.delete(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/workouts/delete/" + workoutId);
                };
                WorkoutService.prototype.editWorkoutById = function (workoutId, workoutBindingModel) {
                    return this.http.put(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/workouts/edit/" + workoutId, workoutBindingModel);
                };
                WorkoutService.prototype.copyWorkoutToLoggedUserWorkouts = function (workoutId) {
                    return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/workouts/copy/" + workoutId, null);
                };
                WorkoutService.prototype.likeWorkout = function (workoutId) {
                    return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/api/workouts/like/" + workoutId, null);
                };
                return WorkoutService;
            }());
            WorkoutService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            WorkoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root',
                })
            ], WorkoutService);
            /***/ 
        }),
        /***/ "./src/main/webapp/environments/environment.ts": 
        /*!*****************************************************!*\
          !*** ./src/main/webapp/environments/environment.ts ***!
          \*****************************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main/webapp/main.ts": 
        /*!*********************************!*\
          !*** ./src/main/webapp/main.ts ***!
          \*********************************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/main/webapp/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/main/webapp/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************************!*\
          !*** multi ./src/main/webapp/main.ts ***!
          \***************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\Petrov\IdeaProjects\fitbook\src\main\webapp\main.ts */ "./src/main/webapp/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map