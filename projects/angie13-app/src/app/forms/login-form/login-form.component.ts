import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'angie13-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm!: FormGroup;
  isLoading = false;
  errorMessage = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
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

    setTimeout(() => {
      this.isLoading = false;
      // Handle response logic here (e.g., redirect to dashboard or set error)
      if (loginData.email === 'admin@example.com' && loginData.password === 'password123') {
        alert('Login successful!');
      } else {
        this.errorMessage = 'Invalid email or password.';
      }
    }, 1500);
  }

}
