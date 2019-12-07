package softuni.fitbook.data.models;

import softuni.fitbook.data.models.base.BaseEntity;
import softuni.fitbook.data.models.enumerations.Gender;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "user_profiles")
public class UserProfile extends BaseEntity {

    private String firstName;

    private String lastName;

    private Gender gender;

    private String profilePictureURL;

    private FitnessProfile fitnessProfile;

    private List<Workout> workouts;

    private List<WorkoutPlan> workoutPlans;

    private List<Meal> meals;

    private List<DietPlan> dietPlans;

    private List<WorkoutLike> workoutLikes;

    @Column(name = "first_name")
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Column(name = "last_name")
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Enumerated(EnumType.STRING)
    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    @Column(name = "profile_picture_url")
    public String getProfilePictureURL() {
        return profilePictureURL;
    }

    public void setProfilePictureURL(String profilePictureURL) {
        this.profilePictureURL = profilePictureURL;
    }

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fitness_profile_id")
    public FitnessProfile getFitnessProfile() {
        return fitnessProfile;
    }

    public void setFitnessProfile(FitnessProfile fitnessProfile) {
        this.fitnessProfile = fitnessProfile;
    }

    @OneToMany(
            mappedBy = "userProfile",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    public List<Workout> getWorkouts() {
        return workouts;
    }

    public void setWorkouts(List<Workout> workouts) {
        this.workouts = workouts;
    }

    @OneToMany(
            mappedBy = "userProfile",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    public List<WorkoutPlan> getWorkoutPlans() {
        return workoutPlans;
    }

    public void setWorkoutPlans(List<WorkoutPlan> workoutPlans) {
        this.workoutPlans = workoutPlans;
    }

    @OneToMany(
            mappedBy = "userProfile",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    public List<Meal> getMeals() {
        return meals;
    }

    public void setMeals(List<Meal> meals) {
        this.meals = meals;
    }

    @OneToMany(
            mappedBy = "userProfile",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    public List<DietPlan> getDietPlans() {
        return dietPlans;
    }

    public void setDietPlans(List<DietPlan> dietPlans) {
        this.dietPlans = dietPlans;
    }

    @OneToMany(
            mappedBy = "userProfile",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    public List<WorkoutLike> getWorkoutLikes() {
        return workoutLikes;
    }

    public void setWorkoutLikes(List<WorkoutLike> workoutLikes) {
        this.workoutLikes = workoutLikes;
    }
}
