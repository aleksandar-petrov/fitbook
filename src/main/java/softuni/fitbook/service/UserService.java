package softuni.fitbook.service;


import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.multipart.MultipartFile;
import softuni.fitbook.domain.models.service.FitnessProfileServiceModel;
import softuni.fitbook.domain.models.service.UserServiceModel;

import java.util.Set;

public interface UserService extends UserDetailsService {
  boolean createUser(UserServiceModel userServiceModel, MultipartFile file);

  Set<UserServiceModel> getAll();

  boolean promoteUser(String id);

  boolean demoteUser(String id);

  UserServiceModel getById(String id);

  boolean setFitnessProfileToUser(String userId, FitnessProfileServiceModel model);

  UserServiceModel getByUsername(String username);

  boolean editFitnessProfileByUserId(String userId, FitnessProfileServiceModel model);
}
