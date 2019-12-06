package softuni.fitbook.web.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import softuni.fitbook.domain.models.binding.FitnessProfileBindingModel;
import softuni.fitbook.domain.models.binding.UserRegisterBindingModel;
import softuni.fitbook.domain.models.service.user.FitnessProfileServiceModel;
import softuni.fitbook.domain.models.service.user.UserServiceModel;
import softuni.fitbook.domain.models.response.user.AllUsersUserResponseModel;
import softuni.fitbook.domain.models.response.user.UserResponseModel;
import softuni.fitbook.repository.RoleRepository;
import softuni.fitbook.service.UserService;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/users")
public class UserController {
    private final UserService userService;

    private final ModelMapper modelMapper;

    @Autowired
    public UserController(RoleRepository roleRepository, UserService userService, ModelMapper modelMapper) {
        this.userService = userService;
        this.modelMapper = modelMapper;
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestPart("user") UserRegisterBindingModel model, @RequestPart(value = "pictureFile", required = false) MultipartFile file) throws URISyntaxException {
        if (!model.getPassword().equals(model.getConfirmPassword())) {
            return ResponseEntity.badRequest().body("Error: Passwords do not match!");
        }

        boolean result = userService
                .createUser(modelMapper
                        .map(model, UserServiceModel.class), file);

        return ResponseEntity.created(new URI("/users/register")).body(result);
    }

    @GetMapping(value = "/all")
    public List<AllUsersUserResponseModel> all() {
        return userService.getAll()
                .stream()
                .map(u -> modelMapper.map(u, AllUsersUserResponseModel.class))
                .collect(Collectors.toList());
    }

    @PostMapping("/promote")
    public AllUsersUserResponseModel promoteUser(@RequestParam(name = "id") String id) {

        return modelMapper.map(userService.promoteUser(id), AllUsersUserResponseModel.class);
    }

    @PostMapping("/demote")
    public AllUsersUserResponseModel demoteUser(@RequestParam(name = "id") String id) {

        return modelMapper.map(userService.demoteUser(id), AllUsersUserResponseModel.class);
    }

    @GetMapping(value = "/id/{id}")
    public UserResponseModel getUserById(@PathVariable(value = "id") String id) {
        return modelMapper
                .map(userService.getById(id), UserResponseModel.class);


    }

    @GetMapping(value = "/username/{username}")
    public UserResponseModel getUserByUsername(@PathVariable(value = "username") String username) {
        UserResponseModel map = modelMapper
                .map(userService.getByUsername(username), UserResponseModel.class);
        return map;


    }

    @PostMapping(value = "/fitness-profile/set/{userId}")
    public ResponseEntity setFitnessProfileToUserById(@PathVariable(value = "userId") String userId, @RequestBody FitnessProfileBindingModel model) {

        boolean result = userService.setFitnessProfileToUser(userId, modelMapper.map(model, FitnessProfileServiceModel.class));

        return ResponseEntity.ok(result);
    }

    @PutMapping(value = "/fitness-profile/edit/{userId}")
    public ResponseEntity editFitnessProfileByUserId(@PathVariable(value = "userId") String userId, @RequestBody FitnessProfileBindingModel model) {

        boolean result = userService.editFitnessProfileByUserId(userId, modelMapper.map(model, FitnessProfileServiceModel.class));

        return ResponseEntity.ok(result);
    }
}
