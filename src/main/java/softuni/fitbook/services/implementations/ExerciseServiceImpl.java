package softuni.fitbook.services.implementations;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import softuni.fitbook.data.models.Exercise;
import softuni.fitbook.data.models.Workout;
import softuni.fitbook.data.models.enumerations.Muscle;
import softuni.fitbook.data.repositories.WorkoutRepository;
import softuni.fitbook.services.models.exercise.ExerciseCreateServiceModel;
import softuni.fitbook.services.models.exercise.ExerciseServiceModel;
import softuni.fitbook.data.repositories.ExerciseRepository;
import softuni.fitbook.services.ExerciseService;
import softuni.fitbook.services.EnumParserService;
import softuni.fitbook.services.FileUploaderService;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ExerciseServiceImpl implements ExerciseService {

    private final ExerciseRepository exerciseRepository;
    private final WorkoutRepository workoutRepository;
    private final ModelMapper modelMapper;
    private final FileUploaderService fileUploaderService;

    @Autowired
    public ExerciseServiceImpl(ExerciseRepository exerciseRepository, WorkoutRepository workoutRepository, ModelMapper modelMapper, FileUploaderService fileUploaderService) {
        this.exerciseRepository = exerciseRepository;
        this.workoutRepository = workoutRepository;
        this.modelMapper = modelMapper;
        this.fileUploaderService = fileUploaderService;
    }

    public ExerciseServiceModel getExerciseById(String id) {

        List<Workout> allWorkouts = workoutRepository.findAll();

        Exercise exercise = this.exerciseRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("No such exercise found with given ID."));

        ExerciseServiceModel model = getExerciseServiceModelFromExercise(exercise);
        model.setWorkoutsCounter(getExerciseUsage(allWorkouts, id));

        return model;
    }

    private long getExerciseUsage(List<Workout> allWorkouts, String id) {

        return allWorkouts
                .stream()
                .filter(w -> w.getExercises()
                        .stream()
                        .anyMatch(e -> e.getExercise().getId().equals(id)))
                .count();

    }

    @Override
    public List<ExerciseServiceModel> getAllExercises() {

        List<Workout> allWorkouts = workoutRepository.findAll();

        return exerciseRepository.findAllByOrderByName()
                .stream()
                .map(e -> {
                    ExerciseServiceModel model = getExerciseServiceModelFromExercise(e);
                    model.setWorkoutsCounter(getExerciseUsage(allWorkouts, e.getId()));

                    return model;
                })
                .sorted((e1, e2) -> e2.getWorkoutsCounter().compareTo(e1.getWorkoutsCounter()))
                .collect(Collectors.toList());
    }

    @Override
    public ExerciseServiceModel createExercise(ExerciseCreateServiceModel model, MultipartFile pictureFile) {

        Exercise exercise = modelMapper.map(model, Exercise.class);

        exercise.setMajorMuscleGroup(
                getMuscleGroupEnum(model.getMajorMuscleGroup()));
        exercise.setAssistingMuscleGroups(
                getAssistingMuscleGroups(model.getAssistingMuscleGroups()));

        exercise = exerciseRepository.saveAndFlush(exercise);

        exercise.setPictureURL(
                fileUploaderService.getUploadedFileUrl("exercise", exercise.getId(), pictureFile));

        exerciseRepository.save(exercise);


        List<Workout> allWorkouts = workoutRepository.findAll();
        ExerciseServiceModel exerciseServiceModel = getExerciseServiceModelFromExercise(exercise);
        exerciseServiceModel.setWorkoutsCounter(0L);

        return exerciseServiceModel;
    }

    private Muscle getMuscleGroupEnum(String camelCaseString) {

        return EnumParserService.parseStringToEnum(Muscle.class, camelCaseString);

    }

    private Set<Muscle> getAssistingMuscleGroups(Set<String> assistingMuscleGroups) {
        return assistingMuscleGroups
                .stream()
                .map(this::getMuscleGroupEnum)
                .collect(Collectors.toCollection(LinkedHashSet::new));
    }

    public ExerciseServiceModel getExerciseServiceModelFromExercise(Exercise exercise) {
        ExerciseServiceModel model = modelMapper.map(exercise, ExerciseServiceModel.class);
        String majorMuscleGroup =
                EnumParserService.parseEnumToString(exercise.getMajorMuscleGroup());
        model.setMajorMuscleGroup(majorMuscleGroup);

        Set<String> assistingMuscleGroups = exercise.getAssistingMuscleGroups()
                .stream()
                .map(EnumParserService::parseEnumToString)
                .collect(Collectors.toCollection(LinkedHashSet::new));
        model.setAssistingMuscleGroups(assistingMuscleGroups);

        return model;
    }
}
