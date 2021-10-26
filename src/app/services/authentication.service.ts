import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { Storage } from '@capacitor/storage';
import { HttpClient } from '@angular/common/http';
import { map, tap, switchMap } from 'rxjs/operators';
import { INTRO_KEY } from '../guards/profile-details.guard';
const TOKEN_KEY = 'my-token';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
// Init with null to filter out the first value in a guard!
isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
token = '';
  obj: {};
  constructor(private http: HttpClient) { 

    this.loadToken();
  }

  async loadToken() {
    const token = await Storage.get({ key: TOKEN_KEY });    
    if (token && token.value) {
      console.log('set token: ', token.value);
      this.token = token.value;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }
  login(credentials: {phone, otp}): Observable<any> {
    console.log(credentials),
     this.obj = {email:'eve.holt@reqres.in',password:'cityslicka'}
    
    return this.http.post(`https://reqres.in/api/login`,  this.obj ).pipe(
      map((data: any) => data.token),
      switchMap(token => {
        console.log(token)
        return from(Storage.set({key: TOKEN_KEY, value: token}));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }
  logout(): Promise<void> {
    this.isAuthenticated.next(false);
    Storage.remove({key: INTRO_KEY});
    return Storage.remove({key: TOKEN_KEY});
  }
}
