package softuni.fitbook.service.implementation;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import softuni.fitbook.domain.entities.Exercise;
import softuni.fitbook.domain.entities.Muscle;
import softuni.fitbook.domain.models.service.exercise.ExerciseCreateServiceModel;
import softuni.fitbook.domain.models.service.exercise.ExerciseServiceModel;
import softuni.fitbook.repository.ExerciseRepository;
import softuni.fitbook.service.ExerciseService;
import softuni.fitbook.service.EnumParserService;
import softuni.fitbook.service.FileUploaderService;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ExerciseServiceImpl implements ExerciseService {

    private final ExerciseRepository exerciseRepository;
    private final ModelMapper modelMapper;
    private final FileUploaderService fileUploaderService;

    @Autowired
    public ExerciseServiceImpl(ExerciseRepository exerciseRepository, ModelMapper modelMapper, FileUploaderService fileUploaderService) {
        this.exerciseRepository = exerciseRepository;
        this.modelMapper = modelMapper;
        this.fileUploaderService = fileUploaderService;
    }

    public ExerciseServiceModel getExerciseById(String id) {

        Exercise exercise = this.exerciseRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("No such exercise found with given ID."));

        return getExerciseServiceModelFromExercise(exercise);
    }

    @Override
    public List<ExerciseServiceModel> getAllExercises() {
        return exerciseRepository.findAll()
                .stream()
                .map(this::getExerciseServiceModelFromExercise)
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


        return modelMapper.map(exercise, ExerciseServiceModel.class);
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
