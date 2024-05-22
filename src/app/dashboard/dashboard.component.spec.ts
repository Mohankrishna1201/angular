import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  employees: any[] = [];
  name: string = '';
  position: string = '';
  department: string = '';
  employeeForm: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.employeeForm = this.formBuilder.group({
      name: '',
      position: '',
      department: ''
    });
  }

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.http.get<any[]>('/employees').subscribe(
      response => {
        this.employees = response;
      },
      error => {
        if (error.status === 403) {
          this.router.navigate(['/']);
        } else {
          console.error('Error fetching employees:', error);
        }
      }
    );
  }

  handleLogout() {
    this.http.post('/logout', {}).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      error => {
        console.error('Error logging out:', error);
      }
    );
  }

  handleAddEmployee() {
    this.http.post('/employees', this.employeeForm.value).subscribe(
      () => {
        this.fetchEmployees();
        this.employeeForm.reset();
      },
      error => {
        console.error('Error adding employee:', error);
      }
    );
  }

  handleUpdateEmployee(id: string) {
    this.http.put(`/employees/${id}`, this.employeeForm.value).subscribe(
      () => {
        this.fetchEmployees();
        this.employeeForm.reset();
      },
      error => {
        console.error('Error updating employee:', error);
      }
    );
  }

  handleDeleteEmployee(id: string) {
    this.http.delete(`/employees/${id}`).subscribe(
      () => {
        this.fetchEmployees();
      },
      error => {
        console.error('Error deleting employee:', error);
      }
    );
  }

  handleLogin() {
    this.router.navigate(['/']);
  }
}
