package softuni.fitbook.web.errors;

import java.util.List;

public class ErrorResponseModel {

    private int status;

    private List<String> errors;

    public ErrorResponseModel(int status, List<String> errors) {
        this.status = status;
        this.errors = errors;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public List<String> getErrors() {
        return errors;
    }

    public void setErrors(List<String> errors) {
        this.errors = errors;
    }
}
