package softuni.fitbook.web.errors.exceptions;

public class NoPrivilegesException extends BaseCustomException {

    public NoPrivilegesException(String message) {
        super(message, 403);
    }
}
