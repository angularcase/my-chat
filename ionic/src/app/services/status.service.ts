import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class StatusService {
  private readonly api = `${environment.apiUrl}/api`;

  constructor(private readonly http: HttpClient) {}

  setOnline(isOnline: boolean): Observable<{ isOnline: boolean }> {
    return this.http.patch<{ isOnline: boolean }>(
      `${this.api}/agents/me/status`,
      { isOnline }
    );
  }
}
