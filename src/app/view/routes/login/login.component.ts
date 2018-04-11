import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonApiService } from '@api/common-api.service';
import { IHttpResponse } from '@core/net/interface/HttpResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'com-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  requesting = false; // 是否登录中
  constructor(private fb: FormBuilder, private commonApiService: CommonApiService, private router: Router) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required, Validators.pattern(/[^\d]/g), Validators.maxLength(10) ] ],
      password: [ null, [ Validators.required ] ]
    });
  }
  submitForm(): void {
    if (this.requesting) {
      return;
    }
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      this.requesting = true;
      this.commonApiService.login().subscribe((res: IHttpResponse<null>) => {
        this.requesting = false;
        this.router.navigate(['']);
      }, err => {
        this.requesting = false;
      });
    }
  }
}
