import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import type { Thread } from '../models/interfaces';

@Injectable({ providedIn: 'root' })
export class ThreadService {
  private readonly api = `${environment.apiUrl}/api`;

  constructor(private readonly http: HttpClient) {}

  getByChatSpace(
    chatSpaceId: string,
    status?: string
  ): Observable<Thread[]> {
    let params = new HttpParams();
    if (status) params = params.set('status', status);
    return this.http.get<Thread[]>(
      `${this.api}/chat-spaces/${chatSpaceId}/threads`,
      { params }
    );
  }

  getOne(threadId: string): Observable<Thread> {
    return this.http.get<Thread>(`${this.api}/threads/${threadId}`);
  }

  claim(threadId: string): Observable<Thread> {
    return this.http.patch<Thread>(`${this.api}/threads/${threadId}/claim`, {});
  }

  close(threadId: string): Observable<Thread> {
    return this.http.patch<Thread>(`${this.api}/threads/${threadId}/close`, {});
  }
}
