import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule]
})
export class RegisterPage {

  constructor(private router: Router ) { }

  // Iniciar sesión → Ir al Dashboard correcto dentro de tabs
  goTologin() {
    this.router.navigate(['/login']);
  }


}
