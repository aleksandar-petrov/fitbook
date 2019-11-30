package softuni.fitbook.web.errors.exceptions;

public class NoSuchEnumException extends BaseCustomException {

    public NoSuchEnumException(String message) {
        super(message, 400);
    }
}
