package softuni.fitbook.services.models;

public class CommentInfoServiceModel {

    private String ownerEmail;
    private String ownerFirstName;
    private String ownerUsername;
    private String entityType;
    private String entityName;
    private String commentatorUsername;

    public CommentInfoServiceModel() {
    }

    public String getOwnerEmail() {
        return ownerEmail;
    }

    public void setOwnerEmail(String ownerEmail) {
        this.ownerEmail = ownerEmail;
    }

    public String getOwnerFirstName() {
        return ownerFirstName;
    }

    public void setOwnerFirstName(String ownerFirstName) {
        this.ownerFirstName = ownerFirstName;
    }

    public String getOwnerUsername() {
        return ownerUsername;
    }

    public void setOwnerUsername(String ownerUsername) {
        this.ownerUsername = ownerUsername;
    }

    public String getEntityType() {
        return entityType;
    }

    public void setEntityType(String entityType) {
        this.entityType = entityType;
    }

    public String getEntityName() {
        return entityName;
    }

    public void setEntityName(String entityName) {
        this.entityName = entityName;
    }

    public String getCommentatorUsername() {
        return commentatorUsername;
    }

    public void setCommentatorUsername(String commentatorUsername) {
        this.commentatorUsername = commentatorUsername;
    }
}
