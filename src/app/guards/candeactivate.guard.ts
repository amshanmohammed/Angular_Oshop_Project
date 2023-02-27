import { ProfileComponent } from './../profile/Components/profile/profile.component';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CandeactivateGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: ProfileComponent
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (component.isUserTouched()) {
      return confirm(' please save chages');
    } else {
      return true;
    }
  }
}
