import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './login/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.apiURLBase + "/api/usuarios"
  tokenURL: string = environment.apiURLBase + environment.obterTokenUrl
  clientID: string = environment.clienteId;
  clientSecret: string = environment.clientSecret;

  constructor (private http: HttpClient) { }

  salvar(usuario : Usuario) : Observable<any>{
    return this.http.post<any>(this.apiUrl, usuario);
  }

  tentarLogar(username:string, password:string): Observable<any>{
      
    const params = new HttpParams()
                        .set('username' , username)
                        .set('password', password)
                        .set('grant_type', 'password')

    const headers = {
      //btoa = codifica
      'Authorization' : 'Basic ' + btoa(`${this.clientID}:${this.clientSecret}`),
      'Content-Type' : 'application/x-www-form-urlencoded'
    }

    return this.http.post(this.tokenURL, params, { headers}  )
  }

}



