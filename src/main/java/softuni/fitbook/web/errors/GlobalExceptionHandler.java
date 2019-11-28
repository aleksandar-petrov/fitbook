package softuni.fitbook.web.errors;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import softuni.fitbook.web.errors.exceptions.BaseCustomException;

@ControllerAdvice
public class GlobalExceptionHandler {


    @ExceptionHandler(value = Exception.class)
    public ResponseEntity<CustomError> handleException(Exception exception) {

        CustomError customError = null;

        if (exception instanceof BaseCustomException) {
            customError = new CustomError(((BaseCustomException) exception).getStatusCode(), exception.getMessage());
        } else {
            customError = new CustomError(400, exception.getMessage());
        }

        return ResponseEntity.status(customError.getCode()).body(customError);
    }

}
