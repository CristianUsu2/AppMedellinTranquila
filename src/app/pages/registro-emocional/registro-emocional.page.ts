import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  NavController 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-registro-emocional',
  templateUrl: './registro-emocional.page.html',
  styleUrls: ['./registro-emocional.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar
  ]
})
export class RegistroEmocionalPage implements OnInit {
  daysRegistered: number = 9;
  positiveState: number = 40;

  constructor(private navCtrl: NavController) { } 

  ngOnInit() {
  }

  registerEmotionalState() {
    console.log('Registrar estado emocional v');
      this.navCtrl.navigateForward('/formulario-emocionales');
  }

  goToMeditation() {
    console.log('Navegar a meditación');
  }

  goToHelp() {
    console.log('Navegar a ayuda');
  }
}