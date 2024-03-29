package softuni.fitbook.data.models;

import softuni.fitbook.data.models.base.BaseEntity;
import softuni.fitbook.data.models.enumerations.ActivityLevel;
import softuni.fitbook.data.models.enumerations.SportsExperience;
import softuni.fitbook.data.models.enumerations.WeightChangeRate;
import softuni.fitbook.data.models.enumerations.WeightGoal;

import javax.persistence.*;

@Entity
@Table(name = "fitness_profiles")
public class FitnessProfile extends BaseEntity {

    private Integer weight;
    private Integer height;
    private Integer age;
    private SportsExperience sportsExperience;
    private ActivityLevel activityLevel;
    private WeightGoal weightGoal;
    private WeightChangeRate weightChangeRate;
    private NutritionGoal nutritionGoal;

    public FitnessProfile() {
    }

    @Column(name = "weight", nullable = false)
    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    @Column(name = "height", nullable = false)
    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    @Column(name = "age", nullable = false)
    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    @Enumerated(EnumType.STRING)
    @Column(name = "sports_experience", nullable = false)
    public SportsExperience getSportsExperience() {
        return sportsExperience;
    }

    public void setSportsExperience(SportsExperience sportsExperience) {
        this.sportsExperience = sportsExperience;
    }

    @Enumerated(EnumType.STRING)
    @Column(name = "activity_level", nullable = false)
    public ActivityLevel getActivityLevel() {
        return activityLevel;
    }

    public void setActivityLevel(ActivityLevel activityLevel) {
        this.activityLevel = activityLevel;
    }

    @Enumerated(EnumType.STRING)
    @Column(name = "weight_goal", nullable = false)
    public WeightGoal getWeightGoal() {
        return weightGoal;
    }

    public void setWeightGoal(WeightGoal weightGoal) {
        this.weightGoal = weightGoal;
    }

    @Enumerated(EnumType.STRING)
    @Column(name = "weight_change_rate", nullable = false)
    public WeightChangeRate getWeightChangeRate() {
        return weightChangeRate;
    }

    public void setWeightChangeRate(WeightChangeRate weightChangeRate) {
        this.weightChangeRate = weightChangeRate;
    }

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "nutrition_goal_id", referencedColumnName = "id")
    public NutritionGoal getNutritionGoal() {
        return nutritionGoal;
    }

    public void setNutritionGoal(NutritionGoal nutritionGoal) {
        this.nutritionGoal = nutritionGoal;
    }
}
