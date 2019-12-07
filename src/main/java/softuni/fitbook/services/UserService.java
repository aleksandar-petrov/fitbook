package softuni.fitbook.services;


import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.multipart.MultipartFile;
import softuni.fitbook.services.models.user.AllUsersUserServiceModel;
import softuni.fitbook.services.models.user.FitnessProfileServiceModel;
import softuni.fitbook.services.models.user.UserServiceModel;

import java.util.List;

public interface UserService extends UserDetailsService {
  boolean createUser(UserServiceModel userServiceModel, MultipartFile file);

  List<AllUsersUserServiceModel> getAll();

  AllUsersUserServiceModel promoteUser(String id);

  AllUsersUserServiceModel demoteUser(String id, String adminUserName);

  UserServiceModel getById(String id);

  boolean setFitnessProfileToUser(String userId, FitnessProfileServiceModel model);

  UserServiceModel getByUsername(String username);

  boolean editFitnessProfileByUserId(String userId, FitnessProfileServiceModel model);
}
