import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { Storage } from '@capacitor/storage';

export const INTRO_KEY = 'details-seen';
@Injectable({
  providedIn: 'root'
})
export class ProfileDetailsGuard implements CanLoad {
  constructor(private router: Router) { }
  async canLoad(): Promise<boolean> {
    const hasSeenIntro = await Storage.get({key: INTRO_KEY});
    console.log(hasSeenIntro)      
    if (hasSeenIntro && (hasSeenIntro.value === 'true')) {
      return true;
    } else {
      this.router.navigateByUrl('/profile-details', { replaceUrl:true });
      return false;
    }
}
}
