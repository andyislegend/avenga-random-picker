package avenga.random.controller;

import avenga.random.service.SheetsService;
import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
public class DefaultController {
    private static final Logger log = LoggerFactory.getLogger(DefaultController.class);

    private final SheetsService sheetsService;

    public DefaultController(SheetsService sheetsService) {
        this.sheetsService = sheetsService;
    }

    @GetMapping(value = "/sheet")
    public List<String> getColumnValues(@RequestParam("id") String sheetId,
                                        @RequestParam("name") String sheetName,
                                        @RequestParam("column") Character column,
                                        @RequestParam("row") Integer row) throws IOException {
        return sheetsService.readColumn(sheetId, sheetName, row, column);
    }

    @ExceptionHandler(GoogleJsonResponseException.class)
    public ResponseEntity handleGoogleException(GoogleJsonResponseException e) {
        log.error(e.getCause().getClass().getCanonicalName().concat(": " + e.getContent()));
        return new ResponseEntity<>(String.format("Error with google sheet api occurs. Status code: %s. Error message: %s",
                e.getDetails().getCode(), e.getDetails().getMessage()), HttpStatus.valueOf(e.getDetails().getCode()));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity handleException(Exception e) {
        log.error(e.getCause().getClass().getCanonicalName().concat(": " + e.getMessage()));
        return new ResponseEntity<>(String.format("Internal server error. Error message: %s",
                e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
