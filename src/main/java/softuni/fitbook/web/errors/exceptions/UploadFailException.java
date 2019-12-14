package softuni.fitbook.web.errors.exceptions;

import softuni.fitbook.web.errors.exceptions.base.BaseCustomException;

public class UploadFailException extends BaseCustomException {

    public UploadFailException(String message) {
        super(message, 503);
    }
}
