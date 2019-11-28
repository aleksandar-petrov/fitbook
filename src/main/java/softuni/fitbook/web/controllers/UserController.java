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
import softuni.fitbook.domain.models.view.user.AllUsersUserViewModel;
import softuni.fitbook.domain.models.view.user.UserViewModel;
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
    public List<AllUsersUserViewModel> all() {
        return userService.getAll()
                .stream()
                .map(u -> modelMapper.map(u, AllUsersUserViewModel.class))
                .collect(Collectors.toList());
    }

    @PostMapping("/promote")
    public AllUsersUserViewModel promoteUser(@RequestParam(name = "id") String id) {

        return modelMapper.map(userService.promoteUser(id), AllUsersUserViewModel.class);
    }

    @PostMapping("/demote")
    public AllUsersUserViewModel demoteUser(@RequestParam(name = "id") String id) {

        return modelMapper.map(userService.demoteUser(id), AllUsersUserViewModel.class);
    }

    @GetMapping(value = "/id/{id}")
    public UserViewModel getUserById(@PathVariable(value = "id") String id) {
        return modelMapper
                .map(userService.getById(id), UserViewModel.class);


    }

    @GetMapping(value = "/username/{username}")
    public UserViewModel getUserByUsername(@PathVariable(value = "username") String username) {
        UserViewModel map = modelMapper
                .map(userService.getByUsername(username), UserViewModel.class);
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
