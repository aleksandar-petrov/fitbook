package softuni.fitbook.services.implementations;

import com.google.common.base.CaseFormat;
import org.modelmapper.ModelMapper;
import org.modelmapper.ValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.multipart.MultipartFile;
import softuni.fitbook.common.constants.AuthorityConstants;
import softuni.fitbook.common.constants.EmailTemplateConstants;
import softuni.fitbook.common.constants.ErrorConstants;
import softuni.fitbook.common.constants.FileUploaderConstants;
import softuni.fitbook.data.models.*;
import softuni.fitbook.data.models.enumerations.*;
import softuni.fitbook.services.*;
import softuni.fitbook.services.models.user.AllUsersUserServiceModel;
import softuni.fitbook.services.models.user.FitnessProfileServiceModel;
import softuni.fitbook.services.models.user.UserRegisterServiceModel;
import softuni.fitbook.services.models.user.UserServiceModel;
import softuni.fitbook.data.repositories.*;
import softuni.fitbook.web.errors.exceptions.NotFoundException;
import softuni.fitbook.web.errors.exceptions.PasswordsDoNotMatchException;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    private final RoleRepository roleRepository;

    private final UserProfileRepository userProfileRepository;

    private final EmailService emailService;

    private final FitnessProfileRepository fitnessProfileRepository;

    private final ModelMapper modelMapper;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    private final FileUploaderService fileUploaderService;

    private final ValidationService validationService;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, RoleRepository roleRepository, UserProfileRepository userProfileRepository, EmailService emailService, FitnessProfileRepository fitnessProfileRepository, ModelMapper modelMapper, BCryptPasswordEncoder bCryptPasswordEncoder, FileUploaderService fileUploaderService, ValidationService validationService) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.userProfileRepository = userProfileRepository;
        this.emailService = emailService;
        this.fitnessProfileRepository = fitnessProfileRepository;
        this.modelMapper = modelMapper;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.fileUploaderService = fileUploaderService;
        this.validationService = validationService;
    }

    private Set<UserRole> getAllRolesForAuthority(String authority) {

        UserRole user = roleRepository.getByAuthority(AuthorityConstants.AUTHORITY_USER);
        UserRole moderator = roleRepository.getByAuthority(AuthorityConstants.AUTHORITY_MODERATOR);
        UserRole admin = roleRepository.getByAuthority(AuthorityConstants.AUTHORITY_ADMIN);
        UserRole rootAdmin = roleRepository.getByAuthority(AuthorityConstants.AUTHORITY_ROOT_ADMIN);

        switch (authority) {
            case AuthorityConstants.AUTHORITY_USER:
                return new HashSet<>(Set.of(user));
            case AuthorityConstants.AUTHORITY_MODERATOR:
                return new HashSet<>(Set.of(user, moderator));
            case AuthorityConstants.AUTHORITY_ADMIN:
                return new HashSet<>(Set.of(user, moderator, admin));
            case AuthorityConstants.AUTHORITY_ROOT_ADMIN:
                return new HashSet<>(Set.of(user, moderator, admin, rootAdmin));
            default:
                throw new IllegalArgumentException(ErrorConstants.NO_SUCH_ROLE_WITH_GIVEN_AUTHORITY);
        }
    }

    private String getUserAuthority(String userId) {

        UserRole user = roleRepository.getByAuthority(AuthorityConstants.AUTHORITY_USER);
        UserRole moderator = roleRepository.getByAuthority(AuthorityConstants.AUTHORITY_MODERATOR);
        UserRole admin = roleRepository.getByAuthority(AuthorityConstants.AUTHORITY_ADMIN);
        UserRole rootAdmin = roleRepository.getByAuthority(AuthorityConstants.AUTHORITY_ROOT_ADMIN);

        Set<UserRole> authorities = userRepository
                .findById(userId)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_ID))
                .getAuthorities();

        if (authorities.contains(rootAdmin)) {
            return rootAdmin.getAuthority();
        } else if (authorities.contains(admin)) {
            return admin.getAuthority();
        } else if (authorities.contains(moderator)) {
            return moderator.getAuthority();
        } else if (authorities.contains(user)) {
            return user.getAuthority();
        } else {
            throw new IllegalArgumentException(ErrorConstants.NO_SUCH_ROLE);
        }
    }

    @Override
    public boolean createUser(UserRegisterServiceModel userServiceModel, MultipartFile file) {

        if (!userServiceModel.getPassword().equals(userServiceModel.getConfirmPassword())) {
            throw new PasswordsDoNotMatchException(ErrorConstants.PASSWORDS_MUST_MATCH);
        }

        validationService.validate(userServiceModel);

        User userEntity = modelMapper.map(userServiceModel, User.class);
        UserProfile userProfileEntity = modelMapper.map(userServiceModel, UserProfile.class);

        userEntity.setUserProfile(userProfileEntity);

        userEntity.getUserProfile().setGender(Gender.valueOf(userServiceModel.getGender().toUpperCase()));

        userEntity.setPassword(bCryptPasswordEncoder.encode(userEntity.getPassword()));

        if (userRepository.findAll().isEmpty()) {

            userEntity.setAuthorities(getAllRolesForAuthority(AuthorityConstants.AUTHORITY_ROOT_ADMIN));
        } else {
            userEntity.setAuthorities(getAllRolesForAuthority(AuthorityConstants.AUTHORITY_USER));
        }
        try {
            userEntity = this.userRepository.saveAndFlush(userEntity);
            String uploadedFileUrl = this.fileUploaderService.getUploadedFileUrl(FileUploaderConstants.USERS_FOLDER_NAME, userEntity.getId(), file);
            userEntity.getUserProfile().setProfilePictureURL(uploadedFileUrl);
            this.userRepository.saveAndFlush(userEntity);
        } catch (Exception ignored) {
            return false;
        }

        emailService.sendMessage(userEntity.getEmail(), EmailTemplateConstants.WELCOME_SUBJECT, String.format(EmailTemplateConstants.WELCOME_TEMPLATE, userEntity.getUserProfile().getFirstName()));

        return true;
    }

    @Override
    public List<AllUsersUserServiceModel> getAll() {
        return this.userRepository
                .findAllByOrderByUsername()
                .stream()
                .map(this::mapUserToAllUsersUserServiceModel)
                .collect(Collectors.toList());
    }

    private AllUsersUserServiceModel mapUserToAllUsersUserServiceModel(User user) {

        AllUsersUserServiceModel model = modelMapper.map(user, AllUsersUserServiceModel.class);
        model.setRole(extractAuthority(user.getId()));
        return model;

    }

    @Override
    public AllUsersUserServiceModel promoteUser(String id) {
        User user = userRepository
                .findById(id)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_ID));


        String userAuthority = getUserAuthority(user.getId());

        switch (userAuthority) {
            case AuthorityConstants.AUTHORITY_USER:
                user.setAuthorities(getAllRolesForAuthority(AuthorityConstants.AUTHORITY_MODERATOR));
                break;
            case AuthorityConstants.AUTHORITY_MODERATOR:
                user.setAuthorities(getAllRolesForAuthority(AuthorityConstants.AUTHORITY_ADMIN));
                break;
            default:
                throw new IllegalArgumentException(ErrorConstants.NO_HIGHER_PROMOTABLE_ROLE);
        }

        user = userRepository.save(user);

        return mapUserToAllUsersUserServiceModel(user);

    }

    @Override
    public AllUsersUserServiceModel demoteUser(String id, String adminUserName) {
        User user = userRepository
                .findById(id)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_ID));

        String adminAuthority = getUserAuthority(userRepository
                .findByUsername(adminUserName)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME))
                .getId());

        String userAuthority = getUserAuthority(user.getId());

        switch (userAuthority) {
            case AuthorityConstants.AUTHORITY_ROOT_ADMIN:
                throw new IllegalArgumentException(ErrorConstants.ROOT_ADMIN_CANNOT_BE_DEMOTED);
            case AuthorityConstants.AUTHORITY_ADMIN:
                if (adminAuthority.equals(AuthorityConstants.AUTHORITY_ADMIN)) {
                    throw new IllegalArgumentException(ErrorConstants.ADMIN_DEMOTE_CONFLICT);
                }
                user.setAuthorities(getAllRolesForAuthority(AuthorityConstants.AUTHORITY_MODERATOR));
                break;
            case AuthorityConstants.AUTHORITY_MODERATOR:
                user.setAuthorities(getAllRolesForAuthority(AuthorityConstants.AUTHORITY_USER));
                break;
            default:
                throw new IllegalArgumentException(ErrorConstants.USER_DEMOTE);
        }

        user = userRepository.save(user);

        return mapUserToAllUsersUserServiceModel(user);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME));
    }

    @Override
    public UserServiceModel getById(String id) {

        User user = userRepository
                .findById(id)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_ID));

        return getUserServiceModelFromUser(user);
    }

    @Override
    public boolean setFitnessProfileToUser(String userId, FitnessProfileServiceModel model) {

        validationService.validate(model);

        try {


            User user = userRepository.findById(userId).orElseThrow();

            FitnessProfile fitnessProfile = modelMapper.map(model, FitnessProfile.class);

            fitnessProfile = getFitnessProfileFromFitnessProfileServiceModelAndUserGender(fitnessProfile, model, user.getUserProfile().getGender());

            NutritionGoal nutritionGoal = getNutritionGoalBasedOnFitnessProfileAndGender(fitnessProfile, user.getUserProfile().getGender());

            fitnessProfile.setNutritionGoal(nutritionGoal);


            fitnessProfile = fitnessProfileRepository.save(fitnessProfile);

            user.getUserProfile().setFitnessProfile(fitnessProfile);

            userProfileRepository.save(user.getUserProfile());


        } catch (Exception ex) {
            return false;
        }

        return true;
    }

    @Override
    public boolean editFitnessProfileByUserId(String userId, FitnessProfileServiceModel model) {
        try {


            User user = userRepository.findById(userId).orElseThrow();

            FitnessProfile fitnessProfile = user.getUserProfile().getFitnessProfile();

            FitnessProfile updated = modelMapper.map(model, FitnessProfile.class);

            updated = getFitnessProfileFromFitnessProfileServiceModelAndUserGender(updated, model, user.getUserProfile().getGender());

            updated.setId(fitnessProfile.getId());

            NutritionGoal nutritionGoal = getNutritionGoalBasedOnFitnessProfileAndGender
                    (updated, user.getUserProfile().getGender());

            nutritionGoal.setId(fitnessProfile.getNutritionGoal().getId());

            updated.setNutritionGoal(nutritionGoal);

            fitnessProfileRepository.save(updated);

        } catch (Exception ex) {
            return false;
        }

        return true;
    }

    @Override
    public UserServiceModel getByUsername(String username) {
        User user = userRepository.findByUsername(username).orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME));
        return getUserServiceModelFromUser(user);
    }

    private FitnessProfile getFitnessProfileFromFitnessProfileServiceModelAndUserGender(FitnessProfile fitnessProfile, FitnessProfileServiceModel model, Gender gender) {
        fitnessProfile.setActivityLevel(EnumParserService.
                parseStringToEnum(ActivityLevel.class, model.getActivityLevel()));

        fitnessProfile.setSportsExperience(
                EnumParserService.parseStringToEnum(SportsExperience.class, model.getSportsExperience()));

        fitnessProfile.setWeightGoal(EnumParserService.
                parseStringToEnum(WeightGoal.class, model.getWeightGoal()));

        if (fitnessProfile.getWeightGoal() == WeightGoal.MAINTAIN_WEIGHT) {
            fitnessProfile.setWeightChangeRate(WeightChangeRate.NONE);
        } else {
            fitnessProfile.setWeightChangeRate(
                    EnumParserService.parseStringToEnum(
                            WeightChangeRate.class, model.getWeightChangeRate()));
        }

        return fitnessProfile;

    }

    @Override
    public boolean userWithGivenUsernameExists(String username) {

        return userRepository.findByUsername(username).isPresent();

    }

    private NutritionGoal getNutritionGoalBasedOnFitnessProfileAndGender(FitnessProfile fitnessProfile, Gender gender) {

        Integer calories = calculateCaloriesBasedOnFitnessProfileAndGender(fitnessProfile, gender);

        NutritionGoal nutritionGoal = new NutritionGoal();

        Integer protein = (int) (fitnessProfile.getWeight() * 1.8);
        Double fatsPercentage;
        if (gender == Gender.MALE) {
            fatsPercentage = 0.2;
        } else {
            fatsPercentage = 0.3;
        }

        Integer fats = (int) (fatsPercentage * calories / 9);

        Integer carbohydrates = (calories - (protein * 4 + fats * 9)) / 4;

        nutritionGoal.setCalories(calories);
        nutritionGoal.setGramsOfProtein(protein);
        nutritionGoal.setGramsOfCarbohydrates(carbohydrates);
        nutritionGoal.setGramsOfFats(fats);


        return nutritionGoal;
    }

    private UserServiceModel getUserServiceModelFromUser(User user) {
        FitnessProfile userFitnessProfile = user.getUserProfile().getFitnessProfile();

        UserServiceModel model = modelMapper.map(user.getUserProfile(), UserServiceModel.class);

        model.setEmail(user.getEmail());
        model.setId(user.getId());
        model.setUsername(user.getUsername());

        model.setGender(EnumParserService.parseEnumToString(user.getUserProfile().getGender()));

        if (userFitnessProfile != null) {
            FitnessProfileServiceModel modelFitnessProfile =
                    model.getFitnessProfile();
            modelFitnessProfile
                    .setActivityLevel(
                            EnumParserService.parseEnumToString(
                                    userFitnessProfile.getActivityLevel()));
            modelFitnessProfile
                    .setSportsExperience(
                            EnumParserService.parseEnumToString(
                                    userFitnessProfile.getSportsExperience()));
            modelFitnessProfile
                    .setWeightGoal(
                            EnumParserService.parseEnumToString(
                                    userFitnessProfile.getWeightGoal()));

            modelFitnessProfile
                    .setWeightChangeRate(
                            EnumParserService.parseEnumToString(
                                    userFitnessProfile.getWeightChangeRate()));

            model.setFitnessProfile(modelFitnessProfile);
        }

        return model;
    }

    private Integer calculateCaloriesBasedOnFitnessProfileAndGender(FitnessProfile fitnessProfile, Gender gender) {

        Double bmi;

        if (gender == Gender.MALE) {
            bmi = 88.362 + (13.397 * fitnessProfile.getWeight()) +
                    (4.799 * fitnessProfile.getHeight()) - (5.677 * fitnessProfile.getAge());
        } else {
            bmi = 447.593 + (9.247 * fitnessProfile.getWeight()) +
                    (3.098 * fitnessProfile.getHeight()) - (4.330 * fitnessProfile.getAge());
        }

        int calories = (int) (bmi * fitnessProfile.getActivityLevel().getActivityLevelIndex());

        if (fitnessProfile.getWeightGoal() == WeightGoal.LOSE_WEIGHT) {
            calories -= (int) (fitnessProfile.getWeightChangeRate().getRateInKg() * 1100);
        } else if (fitnessProfile.getWeightGoal() == WeightGoal.GAIN_WEIGHT) {
            calories += (int) (fitnessProfile.getWeightChangeRate().getRateInKg() * 1100);
        }


        return calories;
    }

    private String extractAuthority(String userId) {

        String authority = getUserAuthority(userId);

        return CaseFormat.UPPER_UNDERSCORE.to(
                CaseFormat.LOWER_CAMEL, authority);
    }
}
