package softuni.fitbook.service.implementation;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import softuni.fitbook.domain.entities.Food;
import softuni.fitbook.domain.models.service.food.FoodCreateServiceModel;
import softuni.fitbook.domain.models.service.food.FoodServiceModel;
import softuni.fitbook.repository.FoodRepository;
import softuni.fitbook.service.FoodService;
import softuni.fitbook.service.FileUploaderService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FoodServiceImpl implements FoodService {

    private final FoodRepository foodRepository;
    private final ModelMapper modelMapper;
    private final FileUploaderService fileUploaderService;

    @Autowired
    public FoodServiceImpl(FoodRepository foodRepository, ModelMapper modelMapper, FileUploaderService fileUploaderService) {
        this.foodRepository = foodRepository;
        this.modelMapper = modelMapper;
        this.fileUploaderService = fileUploaderService;
    }

    @Override
    public List<FoodServiceModel> getAllFoods() {

        return foodRepository.findAll()
                .stream()
                .map(f -> modelMapper.map(f, FoodServiceModel.class))
                .collect(Collectors.toList());
    }

    @Override
    public FoodServiceModel createFood(FoodCreateServiceModel model, MultipartFile pictureFile) {

        Food food = modelMapper.map(model, Food.class);
        food.setCaloriesPerHundred(calculateCalories(food.getProteinPerHundred(),
                food.getCarbohydratesPerHundred(),
                food.getFatsPerHundred()));

        foodRepository.saveAndFlush(food);

        food.setPictureUrl(fileUploaderService.getUploadedFileUrl("food", food.getId(), pictureFile));

        food = foodRepository.save(food);

        return modelMapper.map(food, FoodServiceModel.class);
    }

    private Integer calculateCalories(Integer proteinPerHundred, Integer carbohydratesPerHundred, Integer fatsPerHundred) {

        return 4 * proteinPerHundred + 4 * carbohydratesPerHundred + 9 * fatsPerHundred;

    }

    @Override
    public FoodServiceModel getFoodById(String id) {
        return modelMapper.map(foodRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("No such food with given ID.")),
                FoodServiceModel.class);
    }

}
