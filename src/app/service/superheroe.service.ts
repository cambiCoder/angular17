// src/app/superheroe.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SuperheroeService {
  private heroesData: any;

  constructor(private http: HttpClient) {
    this.http.get('/assets/superheroes.json').subscribe(data => {
      this.heroesData = data;
    });
  }

  buscarSuperheroe(nombre: string): Observable<any> {
    return of(this.heroesData).pipe(
      map((data: any) => {
        return data.results.filter((hero: any) => 
          hero.name.toLowerCase().includes(nombre.toLowerCase())
        );
      })
    );
  }
}

