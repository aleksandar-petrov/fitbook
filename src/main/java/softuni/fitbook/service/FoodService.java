package softuni.fitbook.service;

import org.springframework.web.multipart.MultipartFile;
import softuni.fitbook.domain.entities.Food;
import softuni.fitbook.domain.models.service.food.FoodCreateServiceModel;
import softuni.fitbook.domain.models.service.food.FoodServiceModel;

import java.util.List;

public interface FoodService {

    List<FoodServiceModel> getAllFoods();

    FoodServiceModel createFood(FoodCreateServiceModel model, MultipartFile pictureFile);

    FoodServiceModel getFoodById(String id);

}
