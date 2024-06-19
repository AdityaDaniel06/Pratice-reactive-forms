import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Reactive Forms';
  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'),
      'hobbies':new FormArray([

      ])

      
    });
  }
  onSubmit() {
    console.log(this.signupForm.value);
  }

  //  getControls(){
  //   return (<FormArray>this.signupForm.get('hobbies')).controls
  //  }

  //*ngFor="let hobbyControl of getControls(); let i = index"
  // OR
  get controls() { 
    // *ngFor="let hobbyControl of controls; let i = index"
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }
  onAddHobby(){
    const control= new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }
}
