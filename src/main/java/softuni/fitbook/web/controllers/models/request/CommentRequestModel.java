package softuni.fitbook.web.controllers.models.request;

import javax.validation.constraints.NotBlank;

public class CommentRequestModel {

    @NotBlank
    private String comment;

    public CommentRequestModel() {
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
