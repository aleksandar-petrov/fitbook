package softuni.fitbook.web.controllers.models.request.user;

public class UserLoginRequestModel {
    private String username;

    private String password;

    public UserLoginRequestModel() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
