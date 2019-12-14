package softuni.fitbook.web.errors.exceptions;

import softuni.fitbook.web.errors.exceptions.base.BaseCustomException;

public class PasswordsDoNotMatchException extends BaseCustomException {

    public PasswordsDoNotMatchException(String message) {
        super(message, 400);
    }
}
