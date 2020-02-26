package avenga.random.service;

import com.google.api.client.googleapis.auth.oauth2.GoogleCredential;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.services.sheets.v4.Sheets;
import com.google.api.services.sheets.v4.SheetsScopes;
import com.google.api.services.sheets.v4.model.ValueRange;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Collections;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Service
public class SheetsService {
    public static final String SERVICE_CREDENTIALS = "/service-keys.json";

    private final String applicationName;

    private NetHttpTransport netHttpTransport;
    private JacksonFactory jacksonFactory;
    private GoogleCredential googleCredential;

    public SheetsService(@Value("${google.app-name}") String applicationName) {
        this.applicationName = applicationName;
    }

    @PostConstruct
    public void init() throws GeneralSecurityException, IOException {
        jacksonFactory = JacksonFactory.getDefaultInstance();
        netHttpTransport = GoogleNetHttpTransport.newTrustedTransport();
        googleCredential = buildServiceCredential();
    }

    public List<String> readColumn(String sheetId, String sheetName, int startRow, char column) throws IOException {
        Sheets sheets = new Sheets.Builder(netHttpTransport, jacksonFactory, googleCredential)
                .setApplicationName(applicationName).build();
        ValueRange execute = sheets.spreadsheets().values().get(sheetId, sheetName).execute();

        var values = execute.getValues();
        int columnIndex = alphabetPositionOf(column);

        return values.stream()
                .skip(startRow - 1)
                .filter(row -> row.size() >= columnIndex)
                .map(row -> row.get(columnIndex - 1).toString())
                .filter(Predicate.not(String::isEmpty))
                .collect(Collectors.toList());
    }

    private GoogleCredential buildServiceCredential() throws IOException {
        return GoogleCredential.fromStream(this.getClass().getResourceAsStream(SERVICE_CREDENTIALS))
                .createScoped(Collections.singletonList(SheetsScopes.SPREADSHEETS_READONLY));
    }

    private int alphabetPositionOf(char c) {
        return Character.toLowerCase(c) - 'a' + 1;
    }
}
