import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, from, switchMap } from 'rxjs';
import { Preferences } from '@capacitor/preferences';
import { environment } from '../../environments/environment';
import type { AuthTokens } from '../models/interfaces';

const KEY_ACCESS = 'mychat_access_token';
const KEY_REFRESH = 'mychat_refresh_token';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly api = `${environment.apiUrl}/api`;

  constructor(private readonly http: HttpClient) {}

  login(email: string, password: string): Observable<AuthTokens> {
    return this.http
      .post<AuthTokens>(`${this.api}/auth/login`, { email, password })
      .pipe(
        tap(async (tokens) => {
          await Preferences.set({ key: KEY_ACCESS, value: tokens.accessToken });
          await Preferences.set({ key: KEY_REFRESH, value: tokens.refreshToken });
        })
      );
  }

  logout(): Observable<unknown> {
    return from(this.clearTokens());
  }

  async clearTokens(): Promise<void> {
    await Preferences.remove({ key: KEY_ACCESS });
    await Preferences.remove({ key: KEY_REFRESH });
  }

  async getAccessToken(): Promise<string | null> {
    const { value } = await Preferences.get({ key: KEY_ACCESS });
    return value;
  }

  async getRefreshToken(): Promise<string | null> {
    const { value } = await Preferences.get({ key: KEY_REFRESH });
    return value;
  }

  refreshTokens(): Observable<AuthTokens> {
    return from(this.getRefreshToken()).pipe(
      switchMap((refreshToken) => {
        if (!refreshToken) throw new Error('No refresh token');
        return this.http.post<AuthTokens>(`${this.api}/auth/refresh`, {
          refreshToken,
        });
      }),
      tap(async (tokens) => {
        await Preferences.set({ key: KEY_ACCESS, value: tokens.accessToken });
        await Preferences.set({ key: KEY_REFRESH, value: tokens.refreshToken });
      })
    );
  }

  async isLoggedIn(): Promise<boolean> {
    const t = await this.getAccessToken();
    return !!t;
  }
}
