package softuni.fitbook.services;

import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import softuni.fitbook.base.BaseTest;
import softuni.fitbook.data.models.Exercise;
import softuni.fitbook.data.models.enumerations.Muscle;
import softuni.fitbook.data.repositories.ExerciseRepository;

import softuni.fitbook.services.models.exercise.ExerciseCreateServiceModel;
import softuni.fitbook.services.models.exercise.ExerciseServiceModel;
import softuni.fitbook.web.errors.exceptions.NotFoundException;

import java.math.BigDecimal;
import java.util.*;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

class ExerciseServiceTest extends BaseTest {

    @Autowired
    ExerciseService exerciseService;

    @Autowired
    ExerciseRepository exerciseRepository;

    @MockBean
    FileUploaderService fileUploaderService;

    @Autowired
    ModelMapper modelMapper;


    @Override
    protected void beforeEach() {
        super.beforeEach();
        exerciseRepository.deleteAll();
    }

    @Test
    void getAllExercises_whenPresentExercises_shouldReturnExactCountExercises() {

        List<Exercise> exercises = generateExercises(5);

        exerciseRepository.saveAll(exercises);

        assertEquals(5, exerciseService.getAllExercises().size());

    }

    @Test
    void getAllExercises_whenPresentExercises_shouldReturnSameValues() {

        List<Exercise> exercises = generateExercises(5);

        exerciseRepository.saveAll(exercises);

        List<ExerciseServiceModel> allExercises = exerciseService.getAllExercises()
                .stream()
                .sorted(Comparator.comparing(ExerciseServiceModel::getName))
                .collect(Collectors.toList());

        for (int i = 0; i < 5; i++) {
            ExerciseServiceModel exerciseServiceModel = allExercises.get(i);
            Exercise exercise = exercises.get(i);

            assertAll(
                    () -> assertNotNull(exerciseServiceModel.getId()),
                    () -> assertEquals(exercise.getName(), exerciseServiceModel.getName()),
                    () -> assertEquals(exercise.getPictureURL(), exerciseServiceModel.getPictureURL()),
                    () -> assertEquals(exercise.getInstructions(), exerciseServiceModel.getInstructions()),
                    () -> assertEquals(exercise.getYoutubeURL(), exerciseServiceModel.getYoutubeURL()),
                    () -> assertTrue(exerciseServiceModel.getAssistingMuscleGroups().contains("biceps")),
                    () -> assertTrue(exerciseServiceModel.getAssistingMuscleGroups().contains("anteriorDeltoid")), () -> assertEquals(2, exerciseServiceModel.getAssistingMuscleGroups().size()),
                    () -> assertEquals("latisimus", exerciseServiceModel.getMajorMuscleGroup()));
        }


    }

    @Test
    void createExercise_whenValidModel_shouldReturnNewModel() {

        Exercise exercise = generateExercises(1).get(0);

        ExerciseCreateServiceModel model = modelMapper.map(exercise, ExerciseCreateServiceModel.class);
        model.setMajorMuscleGroup("latisimus");
        model.setAssistingMuscleGroups(Set.of("biceps", "anteriorDeltoid"));

        when(fileUploaderService.getUploadedFileUrl(any(), any(), any()))
                .thenReturn("Exercise picture URL");

        ExerciseServiceModel modelResult = exerciseService.createExercise(model, null);

        assertAll(
                () -> assertNotNull(modelResult.getId()),
                () -> assertEquals(exercise.getName(), modelResult.getName()),
                () -> assertEquals(exercise.getPictureURL(), modelResult.getPictureURL()),
                () -> assertEquals(exercise.getInstructions(), modelResult.getInstructions()),
                () -> assertEquals(exercise.getYoutubeURL(), modelResult.getYoutubeURL()),
                () -> assertTrue(modelResult.getAssistingMuscleGroups().contains("biceps")),
                () -> assertTrue(modelResult.getAssistingMuscleGroups().contains("anteriorDeltoid")), () -> assertEquals(2, modelResult.getAssistingMuscleGroups().size()),
                () -> assertEquals("latisimus", modelResult.getMajorMuscleGroup()));

    }


    @Test
    void createExercise_whenValidModel_shouldSeedDatabase() {

        Exercise exercise = generateExercises(1).get(0);

        ExerciseCreateServiceModel model = modelMapper.map(exercise, ExerciseCreateServiceModel.class);

        when(fileUploaderService.getUploadedFileUrl(any(), any(), any()))
                .thenReturn("Exercise picture URL");

        model.setMajorMuscleGroup("biceps");
        model.setAssistingMuscleGroups(Set.of("biceps", "anteriorDeltoid"));

        ExerciseServiceModel modelResult = exerciseService.createExercise(model, null);

        assertEquals(1, exerciseRepository.count());

    }

    @Test
    void getExerciseById_whenValidId_shouldReturnExercise() {

        Exercise exercise = generateExercises(1).get(0);

        exercise = exerciseRepository.save(exercise);

        ExerciseServiceModel modelResult = exerciseService.getExerciseById(exercise.getId());

        Exercise finalExercise = exercise;
        assertAll(
                () -> assertNotNull(modelResult.getId()),
                () -> assertEquals(finalExercise.getName(), modelResult.getName()),
                () -> assertEquals(finalExercise.getPictureURL(), modelResult.getPictureURL()),
                () -> assertEquals(finalExercise.getInstructions(), modelResult.getInstructions()),
                () -> assertEquals(finalExercise.getYoutubeURL(), modelResult.getYoutubeURL()),
                () -> assertTrue(modelResult.getAssistingMuscleGroups().contains("biceps")),
                () -> assertTrue(modelResult.getAssistingMuscleGroups().contains("anteriorDeltoid")), () -> assertEquals(2, modelResult.getAssistingMuscleGroups().size()),
                () -> assertEquals("latisimus", modelResult.getMajorMuscleGroup()));

    }

    @Test
    void getExerciseById_whenInvalidId_shouldThrowException() {


        assertThrows(NotFoundException.class,
                () -> exerciseService.getExerciseById("Invalid"));

    }


    private List<Exercise> generateExercises(int number) {

        List<Exercise> exercises = new ArrayList<>();


        for (int i = 0; i < number; i++) {
            Exercise exercise = new Exercise();
            exercise.setName("Exercise " + number);
            exercise.setPictureURL("Exercise picture URL");
            exercise.setInstructions("Exercise" + number);
            exercise.setAssistingMuscleGroups(Set.of(Muscle.BICEPS, Muscle.ANTERIOR_DELTOID));
            exercise.setMajorMuscleGroup(Muscle.LATISIMUS);
            exercise.setYoutubeURL("https://www.youtube.com/watch?v=rT7DgCr-3pg");

            exercises.add(exercise);
        }

        return exercises;

    }
}