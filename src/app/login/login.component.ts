import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [FormsModule] // Only include FormsModule
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  handleLogin() {
    this.http.post('/login', {
      username: this.username,
      password: this.password
    }).subscribe({
      next: (response: any) => {
        console.log(response);
        alert('Logged in successfully');
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error(error);
        alert('Invalid credentials');
      }
    });
  }

  handleSignup() {
    this.router.navigate(['/signup']);
  }
}
