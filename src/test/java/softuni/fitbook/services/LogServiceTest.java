package softuni.fitbook.services;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Profile;
import softuni.fitbook.base.BaseTest;
import softuni.fitbook.data.models.Log;
import softuni.fitbook.data.repositories.LogRepository;
import softuni.fitbook.services.models.LogServiceModel;

import java.time.LocalDateTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class LogServiceTest extends BaseTest {

    @Autowired
    LogService logService;

    @Autowired
    private LogRepository logRepository;

    @Override
    protected void beforeEach() {
        super.beforeEach();
        logRepository.deleteAll();
    }

    @Test
    void createLog_whenValidData_shouldCreateLog() {


        LogServiceModel log = new LogServiceModel();
        log.setDateTime(LocalDateTime.now());
        log.setMethod("POST");
        log.setRequestURI("/api/users/signin");
        log.setUsername("root");


        LogServiceModel logResult = logService.createLog(log);

        assertAll(
                () -> assertEquals(log.getRequestURI(), logResult.getRequestURI()),
                () -> assertEquals(log.getMethod(), logResult.getMethod()),
                () -> assertEquals(log.getDateTime(), logResult.getDateTime()),
                () -> assertEquals(log.getUsername(), logResult.getUsername())
        );

        assertNotNull(logResult.getId());

        assertEquals(1, logRepository.count());


    }

    @Test
    void eraseAllLogs_whenNotEmpty_shouldEraseDatabase() {

        Log log = new Log();
        log.setDateTime(LocalDateTime.now());
        log.setMethod("POST");
        log.setRequestURI("/api/users/signin");
        log.setUsername("root");

        logRepository.save(log);

        logService.eraseAllLogs();

        assertEquals(0, logRepository.count());




    }
}