import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

interface Tarea {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, DialogModule, InputTextModule],
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {
  tareas: Tarea[] = [];
  nuevaTarea: string = '';
  dialogVisible: boolean = false;
  tareaEditando: Tarea = { id: 0, nombre: '' };
  
  agregarTarea() {
    if (this.nuevaTarea.trim()) {
      const nuevaId = this.tareas.length + 1;
      this.tareas.push({ id: nuevaId, nombre: this.nuevaTarea.trim() });
      this.nuevaTarea = '';
    }
  }

  editarTarea(tarea: Tarea) {
    this.tareaEditando = { ...tarea };
    this.dialogVisible = true;
  }

  guardarEdicion() {
    const index = this.tareas.findIndex(t => t.id === this.tareaEditando.id);
    if (index !== -1) {
      this.tareas[index] = { ...this.tareaEditando };
    }
    this.dialogVisible = false;
  }

  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }
}