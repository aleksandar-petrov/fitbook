package softuni.fitbook.web.errors.exceptions;

import softuni.fitbook.web.errors.exceptions.base.BaseCustomException;

public class NoSuchEnumException extends BaseCustomException {

    public NoSuchEnumException(String message) {
        super(message, 400);
    }
}
