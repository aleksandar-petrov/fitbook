package softuni.fitbook.service;


import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.multipart.MultipartFile;
import softuni.fitbook.domain.models.service.user.AllUsersUserServiceModel;
import softuni.fitbook.domain.models.service.user.FitnessProfileServiceModel;
import softuni.fitbook.domain.models.service.user.UserServiceModel;

import java.util.List;

public interface UserService extends UserDetailsService {
  boolean createUser(UserServiceModel userServiceModel, MultipartFile file);

  List<AllUsersUserServiceModel> getAll();

  AllUsersUserServiceModel promoteUser(String id);

  AllUsersUserServiceModel demoteUser(String id);

  UserServiceModel getById(String id);

  boolean setFitnessProfileToUser(String userId, FitnessProfileServiceModel model);

  UserServiceModel getByUsername(String username);

  boolean editFitnessProfileByUserId(String userId, FitnessProfileServiceModel model);
}
