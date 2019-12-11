package softuni.fitbook.services;

import softuni.fitbook.services.models.LogServiceModel;

public interface LogService {

    LogServiceModel createLog(LogServiceModel model);

    void eraseAllLogs();
}
