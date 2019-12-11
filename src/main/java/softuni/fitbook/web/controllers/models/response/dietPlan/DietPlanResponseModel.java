package softuni.fitbook.web.controllers.models.response.dietPlan;

import softuni.fitbook.services.models.CreatorServiceModel;
import softuni.fitbook.web.controllers.models.response.CommentResponseModel;

import java.util.List;

public class DietPlanResponseModel {

    private String id;
    private String name;
    private Boolean isPublic;
    private List<DietPlanMealResponseModel> meals;
    private CreatorServiceModel creator;
    private Boolean isCopied;
    private Integer totalProtein;
    private Integer totalCarbohydrates;
    private Integer totalFats;
    private Integer totalCalories;
    private Long likesCount;
    private Boolean isLiked;
    private List<CommentResponseModel> comments;

    public DietPlanResponseModel() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getIsPublic() {
        return isPublic;
    }

    public void setIsPublic(Boolean isPublic) {
        this.isPublic = isPublic;
    }

    public List<DietPlanMealResponseModel> getMeals() {
        return meals;
    }

    public void setMeals(List<DietPlanMealResponseModel> meals) {
        this.meals = meals;
    }

    public CreatorServiceModel getCreator() {
        return creator;
    }

    public void setCreator(CreatorServiceModel creator) {
        this.creator = creator;
    }

    public Boolean getIsCopied() {
        return isCopied;
    }

    public void setIsCopied(Boolean isCopied) {
        this.isCopied = isCopied;
    }

    public Integer getTotalProtein() {
        return totalProtein;
    }

    public void setTotalProtein(Integer totalProtein) {
        this.totalProtein = totalProtein;
    }

    public Integer getTotalCarbohydrates() {
        return totalCarbohydrates;
    }

    public void setTotalCarbohydrates(Integer totalCarbohydrates) {
        this.totalCarbohydrates = totalCarbohydrates;
    }

    public Integer getTotalFats() {
        return totalFats;
    }

    public void setTotalFats(Integer totalFats) {
        this.totalFats = totalFats;
    }

    public Integer getTotalCalories() {
        return totalCalories;
    }

    public void setTotalCalories(Integer totalCalories) {
        this.totalCalories = totalCalories;
    }

    public Long getLikesCount() {
        return likesCount;
    }

    public void setLikesCount(Long likesCount) {
        this.likesCount = likesCount;
    }

    public Boolean getIsLiked() {
        return isLiked;
    }

    public void setIsLiked(Boolean liked) {
        isLiked = liked;
    }

    public List<CommentResponseModel> getComments() {
        return comments;
    }

    public void setComments(List<CommentResponseModel> comments) {
        this.comments = comments;
    }
}
