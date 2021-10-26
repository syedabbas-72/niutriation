import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-logi',
  templateUrl: './logi.page.html',
  styleUrls: ['./logi.page.scss'],
})
export class LogiPage implements OnInit {
  credentials: FormGroup;
  
  constructor(  private fb: FormBuilder,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController) { }

  ngOnInit() {
    this.credentials = this.fb.group({
      phone: ['7989209030', [Validators.required,]],
      otp: ['1234', [Validators.required, Validators.minLength(4)]],
    });
  }
  async login() {
    const loading = await this.loadingController.create();
    await loading.present();
    
    this.authService.login(this.credentials.value).subscribe(
      async (res) => {
        await loading.dismiss();        
        this.router.navigateByUrl('/tabs', { replaceUrl: true });
      },
      async (res) => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Login failed',
          message: res.error.error,
          buttons: ['OK'],
        });
 
        await alert.present();
      }
    );
  }
 
  // Easy access for form fields
  get email() {
    return this.credentials.get('email');
  }
  
  get password() {
    return this.credentials.get('password');
  }
}
