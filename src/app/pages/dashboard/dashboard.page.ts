import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class DashboardPage {

  constructor(private router: Router) {}

  goForo() {
    this.router.navigate(['/tabs/foro']);
  }

  goMeditaciones() {
    this.router.navigate(['/tabs/meditaciones']);
  }

  goContacto() {
    this.router.navigate(['/tabs/contacto']);
  }

  goNotificaciones() {
    this.router.navigate(['/tabs/notificaciones']);
  }

  goFormularioEmocionales() {
    this.router.navigate(['/tabs/formulario-emocionales']);
  }

}
