package softuni.fitbook.service.implementation;

import com.google.common.base.CaseFormat;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import softuni.fitbook.domain.entities.Exercise;
import softuni.fitbook.domain.entities.Muscle;
import softuni.fitbook.domain.models.service.exercise.ExerciseCreateServiceModel;
import softuni.fitbook.domain.models.service.exercise.ExerciseServiceModel;
import softuni.fitbook.repository.ExerciseRepository;
import softuni.fitbook.service.ExerciseService;
import softuni.fitbook.utils.EnumParser;
import softuni.fitbook.utils.FileUploader;
import softuni.fitbook.utils.implementation.FileUploaderImpl;

import java.io.IOException;
import java.util.LinkedHashSet;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ExerciseServiceImpl implements ExerciseService {

    private final ExerciseRepository exerciseRepository;
    private final ModelMapper modelMapper;
    private final FileUploader fileUploader;

    @Autowired
    public ExerciseServiceImpl(ExerciseRepository exerciseRepository, ModelMapper modelMapper, FileUploader fileUploader) {
        this.exerciseRepository = exerciseRepository;
        this.modelMapper = modelMapper;
        this.fileUploader = fileUploader;
    }

    public ExerciseServiceModel getExerciseById(String id) {

        Exercise exercise = this.exerciseRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("No such exercise found with given ID."));

        return this.getExerciseServiceModelFromExercise(exercise);
    }

    @Override
    public Set<ExerciseServiceModel> getAllExercises() {
        return this.exerciseRepository.findAll()
                .stream()
                .map(this::getExerciseServiceModelFromExercise)
                .collect(Collectors.toCollection(LinkedHashSet::new));
    }

    @Override
    public ExerciseServiceModel createExercise(ExerciseCreateServiceModel model, MultipartFile pictureFile) {

        Exercise exercise = this.modelMapper.map(model, Exercise.class);

        exercise.setMajorMuscleGroup(
                this.getMuscleGroupEnum(model.getMajorMuscleGroup()));
        exercise.setAssistingMuscleGroups(
                this.getAssistingMuscleGroups(model.getAssistingMuscleGroups()));

        exercise = this.exerciseRepository.saveAndFlush(exercise);

        exercise.setPictureURL(
                this.fileUploader.getUploadedFileUrl("exercise", exercise.getId(), pictureFile));

        this.exerciseRepository.save(exercise);


        return this.modelMapper.map(exercise, ExerciseServiceModel.class);
    }

    private Muscle getMuscleGroupEnum(String camelCaseString) {

        return EnumParser.parseStringToEnum(Muscle.class, camelCaseString);

    }

    private Set<Muscle> getAssistingMuscleGroups(Set<String> assistingMuscleGroups) {
        return assistingMuscleGroups
                .stream()
                .map(this::getMuscleGroupEnum)
                .collect(Collectors.toCollection(LinkedHashSet::new));
    }

    private ExerciseServiceModel getExerciseServiceModelFromExercise(Exercise exercise) {
        ExerciseServiceModel model = this.modelMapper.map(exercise, ExerciseServiceModel.class);
        String majorMuscleGroup =
                EnumParser.parseEnumToString(exercise.getMajorMuscleGroup());
        model.setMajorMuscleGroup(majorMuscleGroup);

        Set<String> assistingMuscleGroups = exercise.getAssistingMuscleGroups()
                .stream()
                .map(EnumParser::parseEnumToString)
                .collect(Collectors.toCollection(LinkedHashSet::new));
        model.setAssistingMuscleGroups(assistingMuscleGroups);

        return model;
    }
}
