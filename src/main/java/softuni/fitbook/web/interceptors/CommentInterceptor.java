package softuni.fitbook.web.interceptors;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import softuni.fitbook.common.constants.EmailTemplateConstants;
import softuni.fitbook.common.constants.ErrorConstants;
import softuni.fitbook.services.*;
import softuni.fitbook.services.models.CommentInfoServiceModel;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class CommentInterceptor extends HandlerInterceptorAdapter {

    private final EmailService emailService;
    private final WorkoutService workoutService;
    private final WorkoutPlanService workoutPlanService;
    private final MealService mealService;
    private final DietPlanService dietPlanService;

    public CommentInterceptor(EmailService emailService, WorkoutService workoutService, WorkoutPlanService workoutPlanService, MealService mealService, DietPlanService dietPlanService) {
        this.emailService = emailService;
        this.workoutService = workoutService;
        this.workoutPlanService = workoutPlanService;
        this.mealService = mealService;
        this.dietPlanService = dietPlanService;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) {

        String[] uriParts = request.getRequestURI()
                .split("/");

        String commentedEntity = uriParts[2];
        String commentedEntityId = uriParts[4];

        String loggedInUserUsername = request.getRemoteUser();


        CommentInfoServiceModel commentInfoServiceModel;

        switch (commentedEntity) {
            case "workouts":
                commentInfoServiceModel = workoutService.getCommentInfoByWorkoutId(commentedEntityId, loggedInUserUsername);
                break;
            case "workout-plans":
                commentInfoServiceModel = workoutPlanService.getCommentInfoByWorkoutPlanId(commentedEntityId, loggedInUserUsername);
                break;
            case "meals":
                commentInfoServiceModel = mealService.getCommentInfoByMealId(commentedEntityId, loggedInUserUsername);
                break;
            case "diet-plans":
                commentInfoServiceModel = dietPlanService.getCommentInfoByDietPlanId(commentedEntityId, loggedInUserUsername);
                break;
            default:
                throw new IllegalArgumentException(ErrorConstants.NO_SUCH_COMMENT_ENTITY_TYPE);
        }

        if (commentInfoServiceModel.getOwnerUsername().equals(loggedInUserUsername)) {
            return;
        }

        emailService.sendMessage(
                commentInfoServiceModel.getOwnerEmail(),
                String.format(EmailTemplateConstants.COMMENT_SUBJECT, commentInfoServiceModel.getEntityType()),
                String.format(EmailTemplateConstants.COMMENT_TEMPLATE,
                        commentInfoServiceModel.getOwnerFirstName(),
                        commentInfoServiceModel.getEntityType(),
                        commentInfoServiceModel.getEntityName(),
                        commentInfoServiceModel.getCommentatorUsername())
                );

    }
}
