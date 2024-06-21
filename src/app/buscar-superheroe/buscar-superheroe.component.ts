// src/app/buscar-superheroe/buscar-superheroe.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuperheroeService } from '../service/superheroe.service';

@Component({
  selector: 'app-buscar-superheroe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './buscar-superheroe.component.html',
  styleUrls: ['./buscar-superheroe.component.css']
})
export class BuscarSuperheroeComponent {
  nombreBusqueda: string = '';
  superheroes: any[] = [];
  cargando: boolean = false;

  constructor(private superheroeService: SuperheroeService) {}

  buscarSuperheroe() {
    if (this.nombreBusqueda.trim()) {
      this.cargando = true;
      this.superheroeService.buscarSuperheroe(this.nombreBusqueda).subscribe({
        next: (data) => {
          this.superheroes = data;
          this.cargando = false;
        },
        error: (error) => {
          console.error('Error al buscar superhéroe:', error);
          this.cargando = false;
        }
      });
    }
  }
}