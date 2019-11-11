import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {RegisterBindingModel} from './register-binding.model';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerBindingModel: RegisterBindingModel;
  userProfilePictureFile: File;
  usernameTaken = false;
  emailTaken = false;
  passwordsMatch = false;
  regexPattern = "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])";
  @ViewChild('chooseFileLabel', {static: false}) chooseFileLabelRef: ElementRef;

  constructor(private authService: AuthService, private router: Router, private userService: UserService) {
  }

  ngOnInit() {

    this.registerBindingModel = new RegisterBindingModel();
    this.registerBindingModel.gender = "";
  }

  onSubmit() {

    const formData = new FormData();
    const userBlob = new Blob([JSON.stringify(this.registerBindingModel)], {type: 'application/json'});
    formData.append("user", userBlob);
    formData.append("pictureFile", this.userProfilePictureFile);


    this.authService.register(formData).subscribe(data => {
      if (data) {
        this.router.navigate(['/signin']);
      }
    })
  }

  handleFileInput(files: FileList) {

    this.userProfilePictureFile = files[0];
    this.chooseFileLabelRef.nativeElement.innerHTML = this.userProfilePictureFile.name;

  }

  onUsernameFocusOut(eventTarget: any) {

    if (eventTarget.value) {
      this.userService.getUserByUsername(eventTarget.value)
        .subscribe(user => this.usernameTaken = true, error => this.usernameTaken = false)
    }
  }

  onPasswordChange(): void {
    this.passwordsMatch = this.registerBindingModel.password === this.registerBindingModel.confirmPassword;
  }
}
