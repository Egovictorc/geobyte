package com.vicego.geobyte.exceptions;

import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class LocationAlreadyExistException extends RuntimeException {
    public LocationAlreadyExistException() {
        super();
    }

    public LocationAlreadyExistException(String message) {
        super(message);
    }

    public LocationAlreadyExistException(String message, Throwable cause) {
        super(message, cause);
    }

    public LocationAlreadyExistException(Throwable cause) {
        super(cause);
    }

    protected LocationAlreadyExistException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
