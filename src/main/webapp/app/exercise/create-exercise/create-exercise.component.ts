import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ExerciseBindingModel} from '../exercise-binding.model';
import {ExerciseService} from '../exercise.service';
import {Router} from '@angular/router';
import {SelectedMuscleGroupsModel} from '../selected-muscle-groups.model';
import {Title} from '@angular/platform-browser';

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
  @ViewChild('chooseFileLabel', {static: false}) chooseFileLabelRef: ElementRef;
  loading = false;


  constructor(private exerciseService: ExerciseService, private router: Router, private titleService: Title) {
  }

  ngOnInit() {
    this.exerciseBindingModel = new ExerciseBindingModel();
    this.assistingMuscleGroupsSelected = new SelectedMuscleGroupsModel();
    this.titleService.setTitle( this.titleService.getTitle() + '- Create Exercise' );
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
      .subscribe(data => {
        this.loading = false;
        this.router.navigate(['/exercises/all'])});


  }

  handleFileInput(files: FileList) {

    this.pictureFile = files[0];
    this.chooseFileLabelRef.nativeElement.innerHTML = this.pictureFile.name;

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
