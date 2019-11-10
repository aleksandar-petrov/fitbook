package softuni.fitbook.web.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import softuni.fitbook.domain.entities.User;
import softuni.fitbook.domain.models.binding.FitnessProfileBindingModel;
import softuni.fitbook.domain.models.binding.UserRegisterBindingModel;
import softuni.fitbook.domain.models.service.FitnessProfileServiceModel;
import softuni.fitbook.domain.models.service.UserServiceModel;
import softuni.fitbook.domain.models.view.AllUsersUserViewModel;
import softuni.fitbook.domain.models.view.user.UserViewModel;
import softuni.fitbook.repository.RoleRepository;
import softuni.fitbook.service.UserService;

import java.net.URI;
import java.net.URISyntaxException;
import java.security.Principal;
import java.util.Collection;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/users")
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

        boolean result = this.userService
                .createUser(this.modelMapper
                        .map(model, UserServiceModel.class), file);

        return ResponseEntity.created(new URI("/users/register")).body(result);
    }

    @GetMapping(value = "/all")
    public Set<AllUsersUserViewModel> all() {
        Set<AllUsersUserViewModel> allUsers =
                this.userService.getAll()
                        .stream()
                        .map(x -> {
                            AllUsersUserViewModel currentUserViewModel = this.modelMapper
                                    .map(x, AllUsersUserViewModel.class);

                            currentUserViewModel.setRole(x.extractAuthority());

                            return currentUserViewModel;
                        })
                        .collect(Collectors.toCollection(LinkedHashSet::new));

        return allUsers;
    }

    @PostMapping("/promote")
    public ResponseEntity promoteUser(@RequestParam(name = "id") String id) {
        boolean resultOfPromoting = this.userService.promoteUser(id);

        if (resultOfPromoting) {
            return ResponseEntity.ok().body("User promoted successfully!");
        } else {
            return ResponseEntity.badRequest().body("Failure promoting user!");
        }
    }

    @PostMapping("/demote")
    public ResponseEntity demoteUser(@RequestParam(name = "id") String id) {
        boolean resultOfDemoting = this.userService.demoteUser(id);

        if (resultOfDemoting) {
            return ResponseEntity.ok("User demoted successfully!");
        } else {
            return ResponseEntity.badRequest().body("Failure demoting user!");
        }
    }

    @GetMapping(value = "/get/{id}")
    public UserViewModel getUserById(@PathVariable(value = "id") String id) {
        UserViewModel asd = this.modelMapper
                .map(this.userService.getById(id), UserViewModel.class);

        return asd;

    }

    @PostMapping(value = "/fitness-profile/set/{userId}")
    public ResponseEntity setFitnessProfileToUserById(@PathVariable(value = "userId") String userId, @RequestBody FitnessProfileBindingModel model) {

        boolean result = this.userService.setFitnessProfileToUser(userId, this.modelMapper.map(model, FitnessProfileServiceModel.class));

        return ResponseEntity.ok(result);
    }
}
