import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import type { Message, MessagesResponse } from '../models/interfaces';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private readonly api = `${environment.apiUrl}/api`;

  constructor(private readonly http: HttpClient) {}

  getByThread(
    threadId: string,
    cursor?: string,
    take = 50
  ): Observable<MessagesResponse> {
    let params = new HttpParams().set('take', String(take));
    if (cursor) params = params.set('cursor', cursor);
    return this.http.get<MessagesResponse>(
      `${this.api}/threads/${threadId}/messages`,
      { params }
    );
  }
}
