package softuni.fitbook.web.errors.exceptions;

public class BaseCustomException extends RuntimeException {

    private Integer statusCode;

    public BaseCustomException(String message, Integer statusCode) {
        super(message);
    }

    public Integer getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
    }
}
