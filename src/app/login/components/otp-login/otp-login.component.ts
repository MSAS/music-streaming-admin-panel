import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { RoleService } from '../../../open-age/directory/services';
import { UxService } from '../../../core/services';
import { Router } from '@angular/router';
import { User, Tenant } from '../../../open-age/directory/models';

@Component({
  selector: 'app-otp-login',
  templateUrl: './otp-login.component.html',
  styleUrls: ['./otp-login.component.css']
})
export class OtpLoginComponent implements OnInit {

  @Input()
  tenant: Tenant;

  @Output()
  success: EventEmitter<User> = new EventEmitter();

  key: string;
  otp = {
    char_1: '',
    char_2: '',
    char_3: '',
    char_4: '',
    char_5: '',
    char_6: ''
  };
  user: User;


  constructor(
    private roleService: RoleService,
    private uxService: UxService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }
  next() {
    this.roleService.signup(this.key).subscribe(
      user => this.user = new User({ id: user.id }),
      err => this.uxService.errorOccurred(err));
  }

  back() {
    this.user = null;
  }

  confirm() {
    const otp = `${this.otp.char_1}${this.otp.char_2}${this.otp.char_3}${this.otp.char_4}${this.otp.char_5}${this.otp.char_6}`;

    this.roleService.verify(this.user.id, otp).subscribe(
      user => this.success.next(user),
      err => this.uxService.errorOccurred(err));
  }
  focusToNext(e: HTMLInputElement, nextEle?: HTMLInputElement) {
    if (e.value && nextEle && e.maxLength === e.value.length) {
      nextEle.select();
      nextEle.focus();
    }
  }
}
