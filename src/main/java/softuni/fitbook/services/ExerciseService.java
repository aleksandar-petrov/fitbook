package softuni.fitbook.services;

import org.springframework.web.multipart.MultipartFile;
import softuni.fitbook.data.models.Exercise;
import softuni.fitbook.services.models.exercise.ExerciseCreateServiceModel;
import softuni.fitbook.services.models.exercise.ExerciseServiceModel;

import java.util.List;

public interface ExerciseService {

    List<ExerciseServiceModel> getAllExercises();

    ExerciseServiceModel createExercise(ExerciseCreateServiceModel model, MultipartFile pictureFile);

    ExerciseServiceModel getExerciseById(String id);

    ExerciseServiceModel getExerciseServiceModelFromExercise(Exercise exercise);

}
