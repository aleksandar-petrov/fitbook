package softuni.fitbook.services.models.workoutPlan;

import softuni.fitbook.common.constants.ValidationConstants;
import softuni.fitbook.services.models.CommentServiceModel;
import softuni.fitbook.services.models.workout.WorkoutServiceModel;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

public class WorkoutPlanWorkoutServiceModel {

    @NotBlank(message = ValidationConstants.ID_REQUIRED)
    private String id;

    @NotNull(message = ValidationConstants.ORDER_INDEX_REQUIRED)
    private Integer orderIndex;

    @NotNull(message = ValidationConstants.WORKOUT_REQUIRED)
    private WorkoutServiceModel workout;
    private Integer likesCount;
    private Boolean isLiked;
    private List<CommentServiceModel> comments;

    public WorkoutPlanWorkoutServiceModel() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getOrderIndex() {
        return orderIndex;
    }

    public void setOrderIndex(Integer orderIndex) {
        this.orderIndex = orderIndex;
    }

    public WorkoutServiceModel getWorkout() {
        return workout;
    }

    public void setWorkout(WorkoutServiceModel workout) {
        this.workout = workout;
    }

    public Integer getLikesCount() {
        return likesCount;
    }

    public void setLikesCount(Integer likesCount) {
        this.likesCount = likesCount;
    }

    public Boolean getIsLiked() {
        return isLiked;
    }

    public void setIsLiked(Boolean liked) {
        isLiked = liked;
    }

    public List<CommentServiceModel> getComments() {
        return comments;
    }

    public void setComments(List<CommentServiceModel> comments) {
        this.comments = comments;
    }
}
