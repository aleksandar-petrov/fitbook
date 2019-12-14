package softuni.fitbook.services.models.user;

import softuni.fitbook.common.constants.ValidationConstants;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class UserRegisterServiceModel {

    @NotBlank(message = ValidationConstants.FIRST_NAME_REQUIRED)
    @Pattern(regexp = ValidationConstants.FIRST_NAME_PATTERN, message = ValidationConstants.FIRST_NAME_VALID)
    private String firstName;

    @NotBlank(message = ValidationConstants.LAST_NAME_REQUIRED)
    @Pattern(regexp = ValidationConstants.LAST_NAME_PATTERN, message = ValidationConstants.LAST_NAME_VALID)
    private String lastName;

    @NotBlank(message = ValidationConstants.GENDER_REQUIRED)
    private String gender;

    @NotBlank(message = ValidationConstants.USERNAME_REQUIRED)
    private String username;

    @NotBlank(message = ValidationConstants.EMAIL_REQUIRED)
    @Pattern(regexp = ValidationConstants.EMAIL_PATTERN, message = ValidationConstants.EMAIL_VALID)
    private String email;

    @NotBlank(message = ValidationConstants.PASSWORD_REQUIRED)
    @Size(min = 6, message = ValidationConstants.PASSWORD_MIN_LENGTH)
    private String password;

    private String confirmPassword;

    public UserRegisterServiceModel() {
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }
}
