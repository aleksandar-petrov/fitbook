package softuni.fitbook.services.implementations;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import softuni.fitbook.data.models.Food;
import softuni.fitbook.data.models.Meal;
import softuni.fitbook.data.repositories.FoodRepository;
import softuni.fitbook.data.repositories.MealRepository;
import softuni.fitbook.services.FileUploaderService;
import softuni.fitbook.services.FoodService;
import softuni.fitbook.services.models.food.FoodCreateServiceModel;
import softuni.fitbook.services.models.food.FoodServiceModel;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FoodServiceImpl implements FoodService {

    private final FoodRepository foodRepository;
    private final ModelMapper modelMapper;
    private final FileUploaderService fileUploaderService;
    private final MealRepository mealRepository;

    @Autowired
    public FoodServiceImpl(FoodRepository foodRepository, ModelMapper modelMapper, FileUploaderService fileUploaderService, MealRepository mealRepository) {
        this.foodRepository = foodRepository;
        this.modelMapper = modelMapper;
        this.fileUploaderService = fileUploaderService;
        this.mealRepository = mealRepository;
    }

    @Override
    public List<FoodServiceModel> getAllFoods() {

        List<Meal> allMeals = mealRepository.findAll();

        return foodRepository.findAll()
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
    public FoodServiceModel createFood(@Valid FoodCreateServiceModel model, MultipartFile pictureFile) {

        Food food = modelMapper.map(model, Food.class);
        food.setCaloriesPerHundred(calculateCalories(food.getProteinPerHundred(),
                food.getCarbohydratesPerHundred(),
                food.getFatsPerHundred()));

        foodRepository.saveAndFlush(food);

        food.setPictureURL(fileUploaderService.getUploadedFileUrl("food", food.getId(), pictureFile));

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
                        .orElseThrow(() -> new IllegalArgumentException("No such food with given ID.")),
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
