package softuni.fitbook.scheduled;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import softuni.fitbook.services.LogService;

@Component
@EnableAsync
public class EraseLogsFromDatabaseScheduleTask {

    private final LogService logService;

    @Autowired
    public EraseLogsFromDatabaseScheduleTask(LogService logService) {
        this.logService = logService;
    }

    @Async
    @Scheduled(cron = "0 0 0 * * SAT") // EVERY SATURDAY AT MIDNIGHT
    void eraseLogsFromDatabase() {
        logService.eraseAllLogs();
    }


}
