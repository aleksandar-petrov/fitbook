package softuni.fitbook.services.models.user;



import org.springframework.validation.annotation.Validated;
import softuni.fitbook.common.constants.ValidationConstants;
import softuni.fitbook.data.models.UserRole;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.Set;

public class UserServiceModel {

    private String id;

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

    private String profilePictureURL;

    @NotBlank(message = ValidationConstants.PASSWORD_REQUIRED)
    @Size(min = 6, message = ValidationConstants.PASSWORD_MIN_LENGTH)
    private String password;

    private FitnessProfileServiceModel fitnessProfile;

    private boolean isAccountNonExpired;

    private boolean isAccountNonLocked;

    private boolean isCredentialsNonExpired;

    private boolean isEnabled;

    private Set<UserRole> authorities;

    public UserServiceModel() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public String getProfilePictureURL() {
        return profilePictureURL;
    }

    public void setProfilePictureURL(String profilePictureURL) {
        this.profilePictureURL = profilePictureURL;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public FitnessProfileServiceModel getFitnessProfile() {
        return fitnessProfile;
    }

    public void setFitnessProfile(FitnessProfileServiceModel fitnessProfile) {
        this.fitnessProfile = fitnessProfile;
    }

    public boolean isAccountNonExpired() {
        return isAccountNonExpired;
    }

    public void setAccountNonExpired(boolean accountNonExpired) {
        isAccountNonExpired = accountNonExpired;
    }

    public boolean isAccountNonLocked() {
        return isAccountNonLocked;
    }

    public void setAccountNonLocked(boolean accountNonLocked) {
        isAccountNonLocked = accountNonLocked;
    }

    public boolean isCredentialsNonExpired() {
        return isCredentialsNonExpired;
    }

    public void setCredentialsNonExpired(boolean credentialsNonExpired) {
        isCredentialsNonExpired = credentialsNonExpired;
    }

    public boolean isEnabled() {
        return isEnabled;
    }

    public void setEnabled(boolean enabled) {
        isEnabled = enabled;
    }

    public Set<UserRole> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Set<UserRole> authorities) {
        this.authorities = authorities;
    }

}
