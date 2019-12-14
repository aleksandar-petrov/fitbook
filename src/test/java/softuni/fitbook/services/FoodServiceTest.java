package softuni.fitbook.services;

import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Profile;
import softuni.fitbook.base.BaseTest;
import softuni.fitbook.data.models.Food;
import softuni.fitbook.data.repositories.FoodRepository;
import softuni.fitbook.services.models.food.FoodCreateServiceModel;
import softuni.fitbook.services.models.food.FoodServiceModel;
import softuni.fitbook.web.errors.exceptions.NotFoundException;

import javax.validation.ConstraintViolationException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

class FoodServiceTest extends BaseTest {

    @Autowired
    FoodService foodService;

    @Autowired
    FoodRepository foodRepository;

    @MockBean
    FileUploaderService fileUploaderService;

    @Autowired
    ModelMapper modelMapper;


    @Override
    protected void beforeEach() {
        super.beforeEach();
        foodRepository.deleteAll();
    }

    @Test
    void getAllFoods_whenPresentFoods_shouldReturnExactCountFoods() {

        List<Food> foods = generateFoods(5);

        foodRepository.saveAll(foods);

        assertEquals(5, foodService.getAllFoods().size());

    }

    @Test
    void getAllFoods_whenPresentFoods_shouldReturnSameValues() {

        List<Food> foods = generateFoods(5);

        foodRepository.saveAll(foods);

        List<FoodServiceModel> allFoods = foodService.getAllFoods()
                .stream()
                .sorted(Comparator.comparing(FoodServiceModel::getName))
                .collect(Collectors.toList());

        for (int i = 0; i < 5; i++) {
            FoodServiceModel foodServiceModel = allFoods.get(i);
            Food food = foods.get(i);

            assertAll(
                    () -> assertNotNull(foodServiceModel.getId()),
                    () -> assertEquals(food.getName(), foodServiceModel.getName()),
                    () -> assertEquals(food.getPictureURL(), foodServiceModel.getPictureURL()),
                    () -> assertEquals(food.getDescription(), foodServiceModel.getDescription()),
                    () -> assertEquals(food.getProteinPerHundred(), foodServiceModel.getProteinPerHundred()),
                    () -> assertEquals(food.getCarbohydratesPerHundred(), foodServiceModel.getCarbohydratesPerHundred()),
                    () -> assertEquals(food.getFatsPerHundred(), foodServiceModel.getFatsPerHundred()),
                    () -> assertEquals(food.getCaloriesPerHundred(), foodServiceModel.getCaloriesPerHundred())
            );
        }


    }

    @Test
    void createFood_whenValidModel_shouldReturnNewModel() {

        Food food = generateFoods(1).get(0);

        FoodCreateServiceModel model = modelMapper.map(food, FoodCreateServiceModel.class);

        when(fileUploaderService.getUploadedFileUrl(any(), any(), any()))
                .thenReturn("Food picture URL");

        FoodServiceModel modelResult = foodService.createFood(model, null);

        assertAll(
                () -> assertNotNull(modelResult.getId()),
                () -> assertEquals(food.getName(), modelResult.getName()),
                () -> assertEquals(food.getPictureURL(), modelResult.getPictureURL()),
                () -> assertEquals(food.getDescription(), modelResult.getDescription()),
                () -> assertEquals(food.getProteinPerHundred(), modelResult.getProteinPerHundred()),
                () -> assertEquals(food.getCarbohydratesPerHundred(), modelResult.getCarbohydratesPerHundred()),
                () -> assertEquals(food.getFatsPerHundred(), modelResult.getFatsPerHundred()),
                () -> assertEquals(food.getCaloriesPerHundred(), modelResult.getCaloriesPerHundred())
        );

    }


    @Test
    void createFood_whenValidModel_shouldSeedDatabase() {

        Food food = generateFoods(1).get(0);

        FoodCreateServiceModel model = modelMapper.map(food, FoodCreateServiceModel.class);

        when(fileUploaderService.getUploadedFileUrl(any(), any(), any()))
                .thenReturn("Food picture URL");

        FoodServiceModel modelResult = foodService.createFood(model, null);

        assertEquals(1, foodRepository.count());

    }

    @Test
    void createFood_whenInvalidModel_shouldThrowException() {

        Food food = generateFoods(1).get(0);
        food.setProteinPerHundred(-1);
        food.setCarbohydratesPerHundred(-1);
        food.setFatsPerHundred(-1);

        FoodCreateServiceModel model = modelMapper.map(food, FoodCreateServiceModel.class);


        assertThrows(ConstraintViolationException.class,
                () -> foodService.createFood(model, null));


    }

    @Test
    void getFoodById_whenValidId_shouldReturnFood() {

        Food food = generateFoods(1).get(0);

        food = foodRepository.save(food);

        FoodServiceModel modelResult = foodService.getFoodById(food.getId());

        Food finalFood = food;
        assertAll(
                () -> assertEquals(finalFood.getId(), modelResult.getId()),
                () -> assertEquals(finalFood.getName(), modelResult.getName()),
                () -> assertEquals(finalFood.getPictureURL(), modelResult.getPictureURL()),
                () -> assertEquals(finalFood.getDescription(), modelResult.getDescription()),
                () -> assertEquals(finalFood.getProteinPerHundred(), modelResult.getProteinPerHundred()),
                () -> assertEquals(finalFood.getCarbohydratesPerHundred(), modelResult.getCarbohydratesPerHundred()),
                () -> assertEquals(finalFood.getFatsPerHundred(), modelResult.getFatsPerHundred()),
                () -> assertEquals(finalFood.getCaloriesPerHundred(), modelResult.getCaloriesPerHundred())
        );

    }

    @Test
    void getFoodById_whenInvalidId_shouldThrowException() {




       assertThrows(NotFoundException.class,
               () -> foodService.getFoodById("Invalid"));

    }


    private List<Food> generateFoods(int number) {

        List<Food> foods = new ArrayList<>();

        for (int i = 0; i < number; i++) {
            Food food = new Food();
            food.setName("Food " + number);
            food.setPictureURL("Food picture URL");
            food.setDescription("Food" + number);
            food.setProteinPerHundred(1);
            food.setCarbohydratesPerHundred(1);
            food.setFatsPerHundred(1);
            food.setCaloriesPerHundred(17);

            foods.add(food);
        }

        return foods;

    }
}