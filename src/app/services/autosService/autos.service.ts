import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Automovil } from 'src/models';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'
import { MessagesService } from '../messages/messages.service';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  private autosURL = 'https://catalogo-autos.herokuapp.com/api/autos';

  constructor( private http: HttpClient, private messageService: MessagesService ) { }

  getAutos(): Observable<any> {
    return this.http.get<any>(this.autosURL).pipe(
      catchError(this.handleError<any>('getAutos')),
      tap(() => {
        let time = new Date;
        this.messageService.add(`${time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false })} : Datos obtenidos de API`)
      })
    )
  }

  postAutos(auto: Automovil): Observable<any> {
    return this.http.post<any>(`${this.autosURL}/`, auto).pipe(
      catchError(this.handleError<any>('postAutos')), 
      tap(() => {
        let time = new Date;
        this.messageService.add(`${time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false })} : Los datos se añadieron correctamente.`)
      })
    )
  }

  deleteAutos(auto: Automovil): Observable<any> {
    return this.http.delete<any>(`${this.autosURL}/${auto._id}`).pipe(
      catchError(this.handleError<any>('deleteAutos')),
      tap(() => {
        let time = new Date;
        this.messageService.add(`${time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false })} : Los datos asociados al id ${auto._id} se eliminaron correctamente.`)
      })
    )
  }

  putAutos(auto: Automovil): Observable<any> {
    return this.http.put<any>(`${this.autosURL}/${auto._id}`, auto).pipe(
      catchError(this.handleError<any>('putAutos')), 
      tap(() => {
        let time = new Date;
        this.messageService.add(`${time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false })} : Los datos asociados al id ${auto._id} se actualizaron correctamente.`)
      })
    )
  }

  private handleError<T>(operation = 'operacion', result?: T) {
    return(error: any): Observable<T> => {
      this.messageService.add(`${operation} error: ${error.message}`);
      return of(result as T);
    }

  }
}
