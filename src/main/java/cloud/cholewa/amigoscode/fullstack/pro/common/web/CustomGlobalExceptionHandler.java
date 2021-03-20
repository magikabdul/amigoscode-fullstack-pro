package cloud.cholewa.amigoscode.fullstack.pro.common.web;

import cloud.cholewa.amigoscode.fullstack.pro.common.ObjectNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.*;
import java.util.stream.Collectors;

@ControllerAdvice
public class CustomGlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Object> handleMethodArgumentException(MethodArgumentNotValidException e) {
        List<String> errors = e.getBindingResult()
                .getFieldErrors()
                .stream()
                .map(x -> x.getField() + " - " + x.getDefaultMessage())
                .collect(Collectors.toList());

        return handleError(HttpStatus.BAD_REQUEST, errors);
    }

    @ExceptionHandler(ObjectNotFoundException.class)
    public ResponseEntity<Object> handleObjectNotFoundException(ObjectNotFoundException e) {
        List<String> errors = Collections.singletonList(e.getMessage());

        return handleError(HttpStatus.NOT_FOUND, errors);
    }

    private ResponseEntity<Object> handleError(HttpStatus status, List<String> errors) {
        Map<String, Object> body = new HashMap<>();

        body.put("timestamp", new Date());
        body.put("status", status.value());
        body.put("errors", errors);

        return new ResponseEntity<>(body, status);
    }
}
