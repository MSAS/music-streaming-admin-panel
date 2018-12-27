import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { Router, NavigationEnd } from '@angular/router';
import { UxService } from './core/services/ux.service';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { RoleService } from './open-age/directory/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isFullScreen = true;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  envName: string;
  constructor(
    private router: Router,
    private uxService: UxService,
    private roleService: RoleService,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig,
    media: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);


    this.toastyConfig.theme = 'material';
    this.toastyConfig.timeout = 5000;
    this.toastyConfig.showClose = true;
    this.toastyConfig.position = 'top-right';
    if (environment.name && environment.name !== 'prod') {
      this.envName = environment.name;
    }
    // this.isFullScreen = this.uxService.getFullScreen();

    // router.events.filter(event => event instanceof NavigationEnd)
    //   .subscribe((value: NavigationEnd) => window.scrollTo(0, 0));

    iconRegistry.addSvgIconInNamespace('status', 'done', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/icons/checkmark-circle-black.svg'));
    iconRegistry.addSvgIconInNamespace('status', 'new', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/icons/circle-grey.svg'));
    iconRegistry.addSvgIconInNamespace('status', 'wip', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/icons/circle-filled-grey.svg'));

    iconRegistry.addSvgIconInNamespace('action', 'add', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/icons/plus-circle.svg'));
    iconRegistry.addSvgIconInNamespace('action', 'accept', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/icons/accept.svg'));
    iconRegistry.addSvgIconInNamespace('action', 'reject', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/icons/cancel.svg'));
    iconRegistry.addSvgIconInNamespace('action', 'archive', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/icons/archive.svg'));

    this.uxService.errors.subscribe(err => {
      this.toastyService.error(err);
    });


  }

  ngOnInit() {
    this.roleService.refreshUser();

    this.uxService.fullScreen.subscribe(value => {
      this.isFullScreen = value;
      // if (value) {
      //   const requestFullscreen = document.documentElement['requestFullscreen'] ||
      //     document.documentElement['mozRequestFullScreen'] ||
      //     document.documentElement['webkitRequestFullscreen'];
      //   if (requestFullscreen) {
      //     requestFullscreen()
      //   }

      // } else {
      //   const cancelFullScreen = document['cancelFullScreen'] ||
      //     document['mozCancelFullScreen'] ||
      //     document['webkitCancelFullScreen']
      //   if (cancelFullScreen) {
      //     cancelFullScreen();
      //   }
      // }

    });
  }
  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
