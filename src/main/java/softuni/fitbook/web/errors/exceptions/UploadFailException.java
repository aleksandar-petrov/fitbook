package softuni.fitbook.web.errors.exceptions;

public class UploadFailException extends BaseCustomException {

    public UploadFailException(String message) {
        super(message, 503);
    }
}
