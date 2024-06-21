import { Routes } from '@angular/router';
import { BuscarSuperheroeComponent } from './buscar-superheroe/buscar-superheroe.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'heroes', pathMatch: 'full' },
    { path: 'heroes', component: BuscarSuperheroeComponent },
    { path: 'tareas', component: ListaTareasComponent },
    { path: '**', component: PageNotFoundComponent }
];
