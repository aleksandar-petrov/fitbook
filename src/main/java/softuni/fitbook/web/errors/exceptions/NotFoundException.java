package softuni.fitbook.web.errors.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

public class NotFoundException extends BaseCustomException {

    public NotFoundException(String message) {
        super(message, 404);
    }
}
