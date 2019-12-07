package softuni.fitbook.web.controllers.models.response.user;

public class UserFitnessProfileResponseModel {
    private Integer weight;
    private Integer height;
    private Integer age;
    private String sportsExperience;
    private String activityLevel;
    private String weightGoal;
    private String weightChangeRate;
    private NutritionGoalResponseModel nutritionGoal;

    public UserFitnessProfileResponseModel() {
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

    public NutritionGoalResponseModel getNutritionGoal() {
        return nutritionGoal;
    }

    public void setNutritionGoal(NutritionGoalResponseModel nutritionGoal) {
        this.nutritionGoal = nutritionGoal;
    }

}
