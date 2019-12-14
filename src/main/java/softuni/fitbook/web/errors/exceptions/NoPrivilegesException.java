package softuni.fitbook.web.errors.exceptions;

import softuni.fitbook.web.errors.exceptions.base.BaseCustomException;

public class NoPrivilegesException extends BaseCustomException {

    public NoPrivilegesException(String message) {
        super(message, 403);
    }
}
