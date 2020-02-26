package avenga.random.controller;

import avenga.random.service.SheetsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
public class DefaultController {
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
}
