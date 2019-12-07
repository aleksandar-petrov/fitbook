package softuni.fitbook.web.errors;

import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import softuni.fitbook.web.errors.exceptions.BaseCustomException;

import java.util.List;
import java.util.stream.Collectors;

@ControllerAdvice
public class GlobalExceptionHandler {


    @ExceptionHandler(value = Exception.class)
    public ResponseEntity<CustomError> handleException(Exception exception) {

        CustomError customError;

        if (exception instanceof BaseCustomException) {
            customError = new CustomError(((BaseCustomException) exception).getStatusCode(), List.of(exception.getMessage()));
        } else if (exception instanceof MethodArgumentNotValidException) {

            List<String> errors = ((MethodArgumentNotValidException) exception).getBindingResult()
                    .getFieldErrors()
                    .stream()
                    .map(DefaultMessageSourceResolvable::getDefaultMessage)
                    .collect(Collectors.toList());

            customError = new CustomError(400, errors);

        } else {
            customError = new CustomError(500, List.of(exception.getMessage()));
        }

        return ResponseEntity.status(customError.getStatus()).body(customError);
    }

}
