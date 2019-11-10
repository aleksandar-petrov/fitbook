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
  @ViewChild('chooseFileLabel', {static: false}) chooseFileLabelRef: ElementRef;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

    this.registerBindingModel = new RegisterBindingModel();
    this.registerBindingModel.gender="";
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

}
