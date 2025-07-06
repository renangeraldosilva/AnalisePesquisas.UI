import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pesquisa {
  id?: number;
  nome?: string;
  message?: string;
  success?: boolean;
  dataProcessed?: number;
  timestamp?: string;
  summary?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {
  private apiUrl = 'https://localhost:7230/api/pesquisas';

  constructor(private http: HttpClient) { }

  getPesquisa(): Observable<Pesquisa[]> {
    return this.http.get<Pesquisa[]>(this.apiUrl);
  }

  uploadCsv(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    
    return this.http.post(this.apiUrl, formData, { responseType: 'text' });
  }

  uploadCsvWithData(file: File, dadosAdicionais?: any): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    
    if (dadosAdicionais) {
      Object.keys(dadosAdicionais).forEach(key => {
        formData.append(key, dadosAdicionais[key]);
      });
    }
    
    return this.http.post(this.apiUrl, formData);
  }
}