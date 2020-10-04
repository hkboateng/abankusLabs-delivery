import { Component, OnInit, Output, EventEmitter, SimpleChanges , OnChanges} from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import {SignupRequest, SignupResponse} from './signup';
import { SignupService } from './signupService.service';
import {HeaderService} from '../header/headerService.service';
import {AuthenticateService} from '../auth/authenticate.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnChanges {

  isChecked: boolean = false;
  businessSignup: boolean = this.isChecked;
  individualSignup:boolean =  !this.isChecked;
  @Output() redirect: EventEmitter<string> = new EventEmitter();
  
  pageName = 'Sign Up';
  signupError = false;
  errorMessage = undefined;
  register: SignupRequest = null;
  signupGrp = new FormGroup({
    businessName: new FormControl(null, Validators.required),
    firstname: new FormControl(null, Validators.required),
    lastname: new FormControl(null, Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    emailAddress: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', Validators.required),
    cf_password: new FormControl('', Validators.required)
  });
  constructor(private signService: SignupService,private router: Router, private headerService: HeaderService,
    public authService: AuthenticateService,) {
    this.headerService.setCurrentPage(this.pageName);
   }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
    this.isChecked = changes.isChecked.currentValue;
    console.log(this.isChecked)
  }
  onSubmit(signup): void{
    if(this.signupGrp.valid){
      this.register = new SignupRequest(signup);
      this.register.requestType = 'register';
      console.log(this.signupGrp.valid)
      const t = this.signService.register(this.register).subscribe(
        response => this.processResponse(response),
        error => console.log(error),
        () => console.log('test')
      );
    }else{
      this.signupError = true;
      this.errorMessage = "There are errors on the form."
      this.validateAllFormFields(this.signupGrp);
    }

  }

  processResponse(response: SignupResponse) {
    if (response.status) {
      this.router.navigateByUrl('/login');
    } else {
      this.signupError = true;
      this.errorMessage = response.responseMessage;
      return;
    }
  }

  validateAllFormFields(formGroup: FormGroup) {         //{1}
  Object.keys(formGroup.controls).forEach(field => {  //{2}
    const control = formGroup.get(field);  
    if (control instanceof FormControl) {             //{4}
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {        //{5}
      this.validateAllFormFields(control);            //{6}
    }
  });
}
  onReset() {
    this.signupGrp.reset();
  }

}
