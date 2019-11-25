package softuni.fitbook.service.implementation;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import softuni.fitbook.config.Constants;
import softuni.fitbook.domain.entities.*;
import softuni.fitbook.domain.models.service.FitnessProfileServiceModel;
import softuni.fitbook.domain.models.service.UserServiceModel;
import softuni.fitbook.repository.*;
import softuni.fitbook.service.UserService;
import softuni.fitbook.utils.EnumParser;
import softuni.fitbook.utils.FileUploader;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    private final RoleRepository roleRepository;

    private final UserProfileRepository userProfileRepository;

    private final NutritionGoalRepository nutritionGoalRepository;

    private final FitnessProfileRepository fitnessProfileRepository;

    private final ModelMapper modelMapper;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    private final FileUploader fileUploader;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, RoleRepository roleRepository, UserProfileRepository userProfileRepository, NutritionGoalRepository nutritionGoalRepository, FitnessProfileRepository fitnessProfileRepository, ModelMapper modelMapper, BCryptPasswordEncoder bCryptPasswordEncoder, FileUploader fileUploader) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.userProfileRepository = userProfileRepository;
        this.nutritionGoalRepository = nutritionGoalRepository;
        this.fitnessProfileRepository = fitnessProfileRepository;
        this.modelMapper = modelMapper;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.fileUploader = fileUploader;
    }

    private Set<UserRole> getAuthorities(String authority) {
        Set<UserRole> userAuthorities = new HashSet<>();

        userAuthorities.add(this.roleRepository.getByAuthority(authority));

        return userAuthorities;
    }

    private String getUserAuthority(String userId) {
        return this
                .userRepository
                .findById(userId)
                .get()
                .getAuthorities()
                .stream()
                .findFirst()
                .get()
                .getAuthority();
    }

    @Override
    public boolean createUser(UserServiceModel userServiceModel, MultipartFile file) {
        User userEntity = modelMapper.map(userServiceModel, User.class);
        UserProfile userProfileEntity = modelMapper.map(userServiceModel, UserProfile.class);

        userEntity.setUserProfile(userProfileEntity);

        userEntity.getUserProfile().setGender(Gender.valueOf(userServiceModel.getGender().toUpperCase()));

        userEntity.setPassword(bCryptPasswordEncoder.encode(userEntity.getPassword()));

        if (userRepository.findAll().isEmpty()) {
            userEntity.setAuthorities(getAuthorities(Constants.AUTHORITY_ADMIN));
        } else {
            userEntity.setAuthorities(getAuthorities(Constants.AUTHORITY_USER));
        }
        System.out.println();
        try {
            userEntity = this.userRepository.saveAndFlush(userEntity);
            String uploadedFileUrl = this.fileUploader.getUploadedFileUrl("users", userEntity.getId(), file);
            userEntity.getUserProfile().setProfilePictureURL(uploadedFileUrl);
            this.userRepository.saveAndFlush(userEntity);
        } catch (Exception ignored) {

            return false;
        }

        return true;
    }

    @Override
    public Set<UserServiceModel> getAll() {
        return this.userRepository
                .findAll()
                .stream()
                .map(x -> this.modelMapper.map(x, UserServiceModel.class))
                .collect(Collectors.toUnmodifiableSet());
    }

    @Override
    public boolean promoteUser(String id) {
        User user = this.userRepository
                .findById(id)
                .orElse(null);

        if (user == null) return false;

        String userAuthority = this.getUserAuthority(user.getId());

        switch (userAuthority) {
            case "USER":
                user.setAuthorities(this.getAuthorities("ROLE_MODERATOR"));
                break;
            case "MODERATOR":
                user.setAuthorities(this.getAuthorities("ROLE_ADMIN"));
                break;
            default:
                throw new IllegalArgumentException("There is no role, higher than ADMIN");
        }

        this.userRepository.save(user);
        return true;
    }

    @Override
    public boolean demoteUser(String id) {
        User user = this.userRepository
                .findById(id)
                .orElse(null);

        if (user == null) return false;

        String userAuthority = this.getUserAuthority(user.getId());

        switch (userAuthority) {
            case "ADMIN":
                user.setAuthorities(this.getAuthorities("MODERATOR"));
                break;
            case "MODERATOR":
                user.setAuthorities(this.getAuthorities("USER"));
                break;
            default:
                throw new IllegalArgumentException("There is no role, lower than USER");
        }

        this.userRepository.save(user);
        return true;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = this.userRepository
                .findByUsername(username)
                .orElse(null);

        if (user == null) throw new UsernameNotFoundException("No such user.");

        return user;
    }

    @Override
    public UserServiceModel getById(String id) {

        User user = this.userRepository.findById(id).orElseThrow();

        return getUserServiceModelFromUser(user);
    }

    @Override
    public boolean setFitnessProfileToUser(String userId, FitnessProfileServiceModel model) {

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


            User user = this.userRepository.findById(userId).orElseThrow();

            FitnessProfile fitnessProfile = user.getUserProfile().getFitnessProfile();

            FitnessProfile updated = this.modelMapper.map(model, FitnessProfile.class);

            updated = getFitnessProfileFromFitnessProfileServiceModelAndUserGender(updated, model, user.getUserProfile().getGender());

            updated.setId(fitnessProfile.getId());

            NutritionGoal nutritionGoal = getNutritionGoalBasedOnFitnessProfileAndGender
                    (updated, user.getUserProfile().getGender());

            nutritionGoal.setId(fitnessProfile.getNutritionGoal().getId());

            updated.setNutritionGoal(nutritionGoal);

            this.fitnessProfileRepository.save(updated);

        } catch (Exception ex) {
            return false;
        }

        return true;
    }

    @Override
    public UserServiceModel getByUsername(String username) {
        User user = this.userRepository.findByUsername(username).orElseThrow();
        return getUserServiceModelFromUser(user);
    }

    private FitnessProfile getFitnessProfileFromFitnessProfileServiceModelAndUserGender(FitnessProfile fitnessProfile, FitnessProfileServiceModel model, Gender gender) {
        fitnessProfile.setActivityLevel(EnumParser.
                parseStringToEnum(ActivityLevel.class, model.getActivityLevel()));

        fitnessProfile.setSportsExperience(
                EnumParser.parseStringToEnum(SportsExperience.class, model.getSportsExperience()));

        fitnessProfile.setWeightGoal(EnumParser.
                parseStringToEnum(WeightGoal.class, model.getWeightGoal()));

        if (fitnessProfile.getWeightGoal() == WeightGoal.MAINTAIN_WEIGHT) {
            fitnessProfile.setWeightChangeRate(WeightChangeRate.NONE);
        } else {
            fitnessProfile.setWeightChangeRate(
                    EnumParser.parseStringToEnum(
                            WeightChangeRate.class, model.getWeightChangeRate()));
        }

        return fitnessProfile;

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

        model.setGender(EnumParser.parseEnumToString(user.getUserProfile().getGender()));

        if (userFitnessProfile != null) {
            FitnessProfileServiceModel modelFitnessProfile =
                    model.getFitnessProfile();
            modelFitnessProfile
                    .setActivityLevel(
                            EnumParser.parseEnumToString(
                                    userFitnessProfile.getActivityLevel()));
            modelFitnessProfile
                    .setSportsExperience(
                            EnumParser.parseEnumToString(
                                    userFitnessProfile.getSportsExperience()));
            modelFitnessProfile
                    .setWeightGoal(
                            EnumParser.parseEnumToString(
                                    userFitnessProfile.getWeightGoal()));

            modelFitnessProfile
                    .setWeightChangeRate(
                            EnumParser.parseEnumToString(
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
}
