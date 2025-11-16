import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-registro-emocional',
  templateUrl: './registro-emocional.page.html',
  styleUrls: ['./registro-emocional.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegistroEmocionalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
