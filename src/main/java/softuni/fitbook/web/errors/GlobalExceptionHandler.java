package softuni.fitbook.web.errors;

import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import softuni.fitbook.web.errors.exceptions.base.BaseCustomException;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.List;
import java.util.stream.Collectors;

@ControllerAdvice
public class GlobalExceptionHandler {


    @ExceptionHandler(value = Exception.class)
    public ResponseEntity<ErrorResponseModel> handleException(Exception exception) {

        ErrorResponseModel errorResponseModel;

        if (BaseCustomException.class.isAssignableFrom(exception.getClass())) {
            errorResponseModel = new ErrorResponseModel(((BaseCustomException) exception).getStatusCode(), List.of(exception.getMessage()));
        } else if (exception instanceof ConstraintViolationException) {

            List<String> errors = ((ConstraintViolationException) exception).getConstraintViolations()
                    .stream()
                    .map(ConstraintViolation::getMessage)
                    .collect(Collectors.toList());

            errorResponseModel = new ErrorResponseModel(400, errors);

        } else {
            errorResponseModel = new ErrorResponseModel(500, List.of(exception.getMessage()));
        }

        return ResponseEntity.status(errorResponseModel.getStatus()).body(errorResponseModel);
    }

}
