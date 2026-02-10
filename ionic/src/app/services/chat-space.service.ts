import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import type { ChatSpace } from '../models/interfaces';

@Injectable({ providedIn: 'root' })
export class ChatSpaceService {
  private readonly api = `${environment.apiUrl}/api`;

  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<ChatSpace[]> {
    return this.http.get<ChatSpace[]>(`${this.api}/chat-spaces`);
  }

  getOne(id: string): Observable<ChatSpace> {
    return this.http.get<ChatSpace>(`${this.api}/chat-spaces/${id}`);
  }
}
