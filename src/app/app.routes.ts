import { Routes } from '@angular/router';

// Importar páginas standalone
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';

import { MeditacionesPage } from './pages/meditaciones/meditaciones.page';
import { ForoPage } from './pages/foro/foro.page';
import { ConfiguracionPage } from './pages/configuracion/configuracion.page';
import { HistorialPage } from './pages/historial/historial.page';
import { RespiracionPage } from './pages/respiracion/respiracion.page';
import { ContactoPage } from './pages/contacto/contacto.page';
import { PrivacidadPage } from './pages/privacidad/privacidad.page';
import { NotificacionesPage } from './pages/notificaciones/notificaciones.page';
import { FormularioEmocionalPage } from './pages/formulario-emociones/formulario-emociones.page';
import { TabsPage } from './tabs/tabs.page';


export const routes: Routes = [

  // Ruta inicial
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // Login / Registro
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
   
    { path: 'formulario-emocionales', component: FormularioEmocionalPage },
    

  // ⭐ TABS (5 pestañas principales)
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'dashboard', component: DashboardPage },
      
      { path: 'meditaciones', component: MeditacionesPage },
      { path: 'foro', component: ForoPage },
      { path: 'contacto', component: ContactoPage },
      { path: 'configuracion', component: ConfiguracionPage },

      // ruta por defecto dentro de tabs
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'notificaciones', component: NotificacionesPage },
    ]
  },

  // ⭐ Rutas fuera de tabs
  { path: 'historial', component: HistorialPage },
  { path: 'respiracion', component: RespiracionPage },
  { path: 'contacto', component: ContactoPage },
  { path: 'privacidad', component: PrivacidadPage },
  { path: 'notificaciones', component: NotificacionesPage },
  
];
