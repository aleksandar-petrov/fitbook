package softuni.fitbook.services;

import org.springframework.web.multipart.MultipartFile;
import softuni.fitbook.services.models.food.FoodCreateServiceModel;
import softuni.fitbook.services.models.food.FoodServiceModel;

import java.util.List;

public interface FoodService {

    List<FoodServiceModel> getAllFoods();

    FoodServiceModel createFood(FoodCreateServiceModel model, MultipartFile pictureFile);

    FoodServiceModel getFoodById(String id);

}
