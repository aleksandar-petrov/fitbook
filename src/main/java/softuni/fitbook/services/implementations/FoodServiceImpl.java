package softuni.fitbook.services.implementations;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import softuni.fitbook.common.constants.ErrorConstants;
import softuni.fitbook.common.constants.FileUploaderConstants;
import softuni.fitbook.data.models.Food;
import softuni.fitbook.data.models.Meal;
import softuni.fitbook.data.repositories.FoodRepository;
import softuni.fitbook.data.repositories.MealRepository;
import softuni.fitbook.services.FileUploaderService;
import softuni.fitbook.services.FoodService;
import softuni.fitbook.services.ValidationService;
import softuni.fitbook.services.models.food.FoodCreateServiceModel;
import softuni.fitbook.services.models.food.FoodServiceModel;
import softuni.fitbook.web.errors.exceptions.NotFoundException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FoodServiceImpl implements FoodService {

    private final FoodRepository foodRepository;
    private final ModelMapper modelMapper;
    private final FileUploaderService fileUploaderService;
    private final MealRepository mealRepository;
    private final ValidationService validationService;

    @Autowired
    public FoodServiceImpl(FoodRepository foodRepository, ModelMapper modelMapper, FileUploaderService fileUploaderService, MealRepository mealRepository, ValidationService validationService) {
        this.foodRepository = foodRepository;
        this.modelMapper = modelMapper;
        this.fileUploaderService = fileUploaderService;
        this.mealRepository = mealRepository;
        this.validationService = validationService;
    }

    @Override
    public List<FoodServiceModel> getAllFoods() {

        List<Meal> allMeals = mealRepository.findAll();

        return foodRepository.findAllByOrderByName()
                .stream()
                .map(f -> {
                    FoodServiceModel model = modelMapper.map(f, FoodServiceModel.class);
                    model.setMealsCounter(getFoodUsage(allMeals, f.getId()));

                    return model;
                })
                .sorted((f1, f2) -> f2.getMealsCounter().compareTo(f1.getMealsCounter()))
                .collect(Collectors.toList());
    }

    @Override
    public FoodServiceModel createFood(FoodCreateServiceModel model, MultipartFile pictureFile) {

        validationService.validate(model);

        Food food = modelMapper.map(model, Food.class);
        food.setCaloriesPerHundred(calculateCalories(food.getProteinPerHundred(),
                food.getCarbohydratesPerHundred(),
                food.getFatsPerHundred()));

        foodRepository.saveAndFlush(food);

        food.setPictureURL(fileUploaderService.getUploadedFileUrl(FileUploaderConstants.FOODS_FOLDER_NAME, food.getId(), pictureFile));

        food = foodRepository.save(food);

        return modelMapper.map(food, FoodServiceModel.class);
    }

    private Integer calculateCalories(Integer proteinPerHundred, Integer carbohydratesPerHundred, Integer fatsPerHundred) {

        return 4 * proteinPerHundred + 4 * carbohydratesPerHundred + 9 * fatsPerHundred;

    }

    @Override
    public FoodServiceModel getFoodById(String id) {

        List<Meal> allMeals = mealRepository.findAll();

        FoodServiceModel model = modelMapper.map(foodRepository.findById(id)
                        .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_FOOD_WITH_GIVEN_ID)),
                FoodServiceModel.class);
        model.setMealsCounter(getFoodUsage(allMeals, id));

        return model;
    }

    private long getFoodUsage(List<Meal> allMeals, String id) {

        return allMeals
                .stream()
                .filter(m -> m.getFoods()
                        .stream()
                        .anyMatch(e -> e.getFood().getId().equals(id)))
                .count();

    }

}
