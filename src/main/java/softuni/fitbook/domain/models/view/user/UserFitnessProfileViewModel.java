package softuni.fitbook.domain.models.view.user;

public class UserFitnessProfileViewModel {
    private Integer weight;
    private Integer height;
    private Integer age;
    private String sportsExperience;
    private String activityLevel;
    private String weightGoal;
    private String weightChangeRate;
    private NutritionGoalViewModel nutritionGoal;

    public UserFitnessProfileViewModel() {
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

    public NutritionGoalViewModel getNutritionGoal() {
        return nutritionGoal;
    }

    public void setNutritionGoal(NutritionGoalViewModel nutritionGoal) {
        this.nutritionGoal = nutritionGoal;
    }

}
