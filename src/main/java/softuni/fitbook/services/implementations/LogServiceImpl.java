package softuni.fitbook.services.implementations;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import softuni.fitbook.data.models.Log;
import softuni.fitbook.data.repositories.LogRepository;
import softuni.fitbook.services.LogService;
import softuni.fitbook.services.models.LogServiceModel;

@Service
public class LogServiceImpl implements LogService {

    private final LogRepository logRepository;
    private final ModelMapper modelMapper;

    public LogServiceImpl(LogRepository logRepository, ModelMapper modelMapper) {
        this.logRepository = logRepository;
        this.modelMapper = modelMapper;
    }



    @Override
    public LogServiceModel createLog(LogServiceModel model) {

        Log log = modelMapper.map(model, Log.class);
        log = logRepository.save(log);

        return modelMapper.map(log, LogServiceModel.class);
    }

    @Override
    public void eraseAllLogs() {
        logRepository.deleteAll();
    }
}
