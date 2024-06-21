import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Tarea {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {
  tareas: Tarea[] = [];
  nuevaTarea: string = '';
  
  agregarTarea() {
    if (this.nuevaTarea.trim()) {
      const nuevaId = this.tareas.length + 1;
      this.tareas.push({ id: nuevaId, nombre: this.nuevaTarea.trim() });
      this.nuevaTarea = '';
    }
  }
}