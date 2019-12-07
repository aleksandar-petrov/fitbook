package softuni.fitbook.services;

import softuni.fitbook.services.models.dietPlan.DietPlanServiceModel;
import softuni.fitbook.services.models.workoutPlan.WorkoutPlanServiceModel;

public interface FileExporterService {

    byte[] exportWorkoutPlanToExcel(WorkoutPlanServiceModel model);

    byte[] exportDietPlanToExcel(DietPlanServiceModel model);
}
