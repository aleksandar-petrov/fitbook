package softuni.fitbook.services;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import softuni.fitbook.base.BaseTest;
import softuni.fitbook.services.models.food.FoodCreateServiceModel;

import javax.validation.ConstraintViolationException;

import static org.junit.jupiter.api.Assertions.*;

class ValidationServiceTest extends BaseTest {

    @Autowired
    ValidationService validationService;

    @Test
    void validate_whenValid_shouldNotThrowException() {

        FoodCreateServiceModel model = new FoodCreateServiceModel();

        model.setName("Valid");
        model.setDescription("Valid");
        model.setProteinPerHundred(1);
        model.setCarbohydratesPerHundred(1);
        model.setFatsPerHundred(1);


        assertDoesNotThrow(() -> {
            validationService.validate(model);
        });

    }

    @Test
    void validate_whenInvalid_shouldThrowException() {

        FoodCreateServiceModel model = new FoodCreateServiceModel();

        model.setName(null); // invalid
        model.setDescription("Valid");
        model.setProteinPerHundred(1);
        model.setCarbohydratesPerHundred(1);
        model.setFatsPerHundred(1);


        assertThrows(ConstraintViolationException.class, () -> {
            validationService.validate(model);
        });

    }
}