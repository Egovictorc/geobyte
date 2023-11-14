package com.vicego.geobyte.exceptions;

import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class StaffAlreadyExistException extends RuntimeException {
    public StaffAlreadyExistException() {
        super();
    }

    public StaffAlreadyExistException(String message) {
        super(message);
    }

    public StaffAlreadyExistException(String message, Throwable cause) {
        super(message, cause);
    }

    public StaffAlreadyExistException(Throwable cause) {
        super(cause);
    }

    protected StaffAlreadyExistException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
