package softuni.fitbook.service;

import org.springframework.web.multipart.MultipartFile;
import softuni.fitbook.domain.models.service.exercise.ExerciseCreateServiceModel;
import softuni.fitbook.domain.models.service.exercise.ExerciseServiceModel;

import java.util.Set;

public interface ExerciseService {

    Set<ExerciseServiceModel> getAllExercises();

    ExerciseServiceModel createExercise(ExerciseCreateServiceModel model, MultipartFile pictureFile);

}
