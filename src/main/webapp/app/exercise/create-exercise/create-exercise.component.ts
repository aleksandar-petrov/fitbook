import {Component, OnInit} from '@angular/core';
import {ExerciseBindingModel} from '../exercise-binding.model';
import {ExerciseService} from '../exercise.service';
import {Router} from '@angular/router';
import {SelectedMuscleGroupsModel} from '../selected-muscle-groups.model';
import {Title} from '@angular/platform-browser';
import {Exercise} from "../exercise.model";

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.css']
})
export class CreateExerciseComponent implements OnInit {

  exerciseBindingModel: ExerciseBindingModel;

  assistingMuscleGroupsSelected: SelectedMuscleGroupsModel;
  pictureFile: File;
  focusedMuscleGroup: string;
  loading = false;
  file: any;


  constructor(private exerciseService: ExerciseService, private router: Router, private titleService: Title) {
  }

  ngOnInit() {
    this.exerciseBindingModel = new ExerciseBindingModel();
    this.assistingMuscleGroupsSelected = new SelectedMuscleGroupsModel();
    this.titleService.setTitle( 'FitBook' + '- Create Exercise' );
  }

  onMuscleClick(muscleType: string): void {
    if (!this.assistingMuscleGroupsSelected[muscleType] && this.exerciseBindingModel.majorMuscleGroup !== muscleType) {
      this.assistingMuscleGroupsSelected[muscleType] = true;
    } else if (this.exerciseBindingModel.majorMuscleGroup !== muscleType) {
      this.assistingMuscleGroupsSelected[muscleType] = false;
      this.exerciseBindingModel.majorMuscleGroup = muscleType;
    } else {
      this.exerciseBindingModel.majorMuscleGroup = undefined;
    }
  }

  onMuscleMouseEnter(muscleType: string): void {
    this.focusedMuscleGroup = muscleType;
  }

  resetSelectedMuscleGroup(): void {
    this.focusedMuscleGroup = undefined;
  }

  setAssistingMuscleGroupsToBindingModel(): void {
    this.exerciseBindingModel.assistingMuscleGroups = [];

    for (const muscleType in this.assistingMuscleGroupsSelected) {
      if (this.assistingMuscleGroupsSelected[muscleType]) {
        this.exerciseBindingModel.assistingMuscleGroups.push(muscleType);
      }
    }
  }

  onSubmit() {

    this.loading = true;

    this.setAssistingMuscleGroupsToBindingModel();

    const formData = new FormData();
    const exerciseBlob = new Blob([JSON.stringify(this.exerciseBindingModel)], {type: 'application/json'});

    formData.append('exerciseBindingModel', exerciseBlob);
    formData.append('file', this.pictureFile);

    this.exerciseService.createExercise(formData)
      .subscribe((exercise: Exercise) => {
        this.loading = false;
        this.router.navigate(['/exercises/details/' + exercise.id])});


  }

  handleFileInput(files: FileList, chooseFileLabel: HTMLLabelElement) {

    const file = files[0];
    const pattern = /image-*/;
    if (file && file.type.match(pattern)) {
      this.pictureFile = file;
      chooseFileLabel.innerHTML = this.pictureFile.name;
    } else {
      this.file = undefined;
      this.pictureFile = undefined;
      chooseFileLabel.innerHTML = 'Choose file';
    }
  }


  handleAssistingMuscleGroupsChange(event: any) {
    const muscleType = event.target.value;
    this.assistingMuscleGroupsSelected[muscleType] = !this.assistingMuscleGroupsSelected[muscleType];
  }

  handleMajorMuscleGroupChange(event: any) {
    const muscleType = event.target.value;
    this.assistingMuscleGroupsSelected[muscleType] = false;
  }
}
