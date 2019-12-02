package softuni.fitbook.service;

import softuni.fitbook.domain.models.service.dietPlan.DietPlanServiceModel;
import softuni.fitbook.domain.models.service.workoutPlan.WorkoutPlanServiceModel;

public interface FileExporterService {

    byte[] exportWorkoutPlanToExcel(WorkoutPlanServiceModel model);

    byte[] exportDietPlanToExcel(DietPlanServiceModel model);
}
