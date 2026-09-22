import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'angie13-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm!: FormGroup;
  isLoading = false;
  errorMessage = '';

  constructor(private fb: FormBuilder
    , private router: Router
    , private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Convenience getters for easy access to form fields in the HTML template
  get f() { return this.loginForm.controls; }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    // Mock API login call
    const loginData = this.loginForm.value;
    console.log('Submitting login payload:', loginData);

    var model = { 
      username: loginData.username
      , password: loginData.password
    };
    // errorMessage = '';

    this.authenticationService.login(model).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']); // Navigate to restricted area on success
      },
      error: (err) => {
        this.errorMessage = 'Invalid email or password';
      }
    });

    // setTimeout(() => {
    //   this.isLoading = false;

      
    //   // Handle response logic here (e.g., redirect to dashboard or set error)
    //   if (loginData.username === 'admin' && loginData.password === 'Pass1234') {
    //     alert('Login successful!');
    //   } else {
    //     this.errorMessage = 'Invalid username or password.';
    //   }
    // }, 1500);
  }

}
