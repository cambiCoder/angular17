import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BuscarSuperheroeComponent } from './buscar-superheroe/buscar-superheroe.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaTareasComponent } from "./lista-tareas/lista-tareas.component";


@Component({
    selector: 'app-root',
    standalone: true,
    template: '<router-outlet></router-outlet>',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, HttpClientModule]
})
export class AppComponent {
  title = 'superheroe-app';
}