package softuni.fitbook.services.models.user;

import softuni.fitbook.common.constants.ValidationConstants;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class FitnessProfileServiceModel {

    @NotNull(message = ValidationConstants.WEIGHT_REQUIRED)
    @Min(value = 1, message = ValidationConstants.WEIGHT_POSITIVE_NUMBER)
    private Integer weight;

    @NotNull(message = ValidationConstants.HEIGHT_REQUIRED)
    @Min(value = 1, message = ValidationConstants.HEIGHT_POSITIVE_NUMBER)
    private Integer height;

    @NotNull(message = ValidationConstants.AGE_REQUIRED)
    @Min(value = 1, message = ValidationConstants.AGE_POSITIVE_NUMBER)
    private Integer age;

    @NotBlank(message = ValidationConstants.SPORT_EXPERIENCE_REQUIRED)
    private String sportsExperience;

    @NotBlank(message = ValidationConstants.ACTIVITY_LEVEL_REQUIRED)
    private String activityLevel;

    @NotBlank(message = ValidationConstants.WEIGHT_GOAL_REQUIRED)
    private String weightGoal;

    @NotBlank(message = ValidationConstants.WEIGHT_CHANGE_RATE_REQUIRED)
    private String weightChangeRate;
    private NutritionGoalServiceModel nutritionGoal;

    public FitnessProfileServiceModel() {
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getSportsExperience() {
        return sportsExperience;
    }

    public void setSportsExperience(String sportsExperience) {
        this.sportsExperience = sportsExperience;
    }

    public String getActivityLevel() {
        return activityLevel;
    }

    public void setActivityLevel(String activityLevel) {
        this.activityLevel = activityLevel;
    }

    public String getWeightGoal() {
        return weightGoal;
    }

    public void setWeightGoal(String weightGoal) {
        this.weightGoal = weightGoal;
    }

    public String getWeightChangeRate() {
        return weightChangeRate;
    }

    public void setWeightChangeRate(String weightChangeRate) {
        this.weightChangeRate = weightChangeRate;
    }

    public NutritionGoalServiceModel getNutritionGoal() {
        return nutritionGoal;
    }

    public void setNutritionGoal(NutritionGoalServiceModel nutritionGoal) {
        this.nutritionGoal = nutritionGoal;
    }
}
