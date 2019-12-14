package softuni.fitbook.data.models;


import org.springframework.security.core.userdetails.UserDetails;
import softuni.fitbook.data.models.base.BaseEntity;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "users")
public class User extends BaseEntity implements UserDetails {


  private String username;

  private String email;

  private String password;

  private UserProfile userProfile;

  private boolean isAccountNonExpired;

  private boolean isAccountNonLocked;

  private boolean isCredentialsNonExpired;

  private boolean isEnabled;

  private Set<UserRole> authorities;

  public User() {
  }

  @Override
  @Column(name = "username", nullable = false, unique = true)
  public String getUsername() {
    return this.username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  @Column(name = "email", nullable = false)
  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }


  @Override
  @Column(name = "password", nullable = false)
  public String getPassword() {
    return this.password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
  @JoinColumn(name = "user_profile_id", referencedColumnName = "id")
  public UserProfile getUserProfile() {
    return userProfile;
  }

  public void setUserProfile(UserProfile userProfile) {
    this.userProfile = userProfile;
  }

  @Override
  @ManyToMany(cascade = CascadeType.ALL
    , targetEntity = UserRole.class
    , fetch = FetchType.EAGER)
  @JoinTable(
    name = "users_user_roles",
    joinColumns = @JoinColumn(name = "user_id"),
    inverseJoinColumns = @JoinColumn(name = "user_role_id")
  )
  public Set<UserRole> getAuthorities() {
    return this.authorities;
  }

  public void setAuthorities(Set<UserRole> authorities) {
    this.authorities = authorities;
  }

  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  @Override
  public boolean isEnabled() {
    return true;
  }

  public void setAccountNonExpired(boolean accountNonExpired) {
    isAccountNonExpired = accountNonExpired;
  }

  public void setAccountNonLocked(boolean accountNonLocked) {
    isAccountNonLocked = accountNonLocked;
  }

  public void setCredentialsNonExpired(boolean credentialsNonExpired) {
    isCredentialsNonExpired = credentialsNonExpired;
  }

  public void setEnabled(boolean enabled) {
    isEnabled = enabled;
  }
}
