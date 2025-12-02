import { Component } from '@angular/core';
import { IonNav } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,IonNav],
})
export class LoginPage {

  constructor(private router: Router) {}

  // Iniciar sesión → Ir al Dashboard correcto dentro de tabs
  goToDashboard() {
    this.router.navigate(['/tabs/dashboard']);
  }

  // Crear cuenta → Página de registro normal
  goToRegister() {
    this.router.navigate(['/register']);
  }

  // Ingresar como invitado → También va al dashboard de tabs
  goToGuest() {
    this.router.navigate(['/tabs/dashboard']);
  }
}
