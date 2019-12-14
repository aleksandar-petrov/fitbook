package softuni.fitbook.web.errors.exceptions;

import softuni.fitbook.web.errors.exceptions.base.BaseCustomException;

public class NotFoundException extends BaseCustomException {

    public NotFoundException(String message) {
        super(message, 404);
    }
}
