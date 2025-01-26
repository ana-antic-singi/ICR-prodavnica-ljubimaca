import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RasaModel {
  recipient_id: string;
  image: string | null;
  text: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class WebService {
  private rasaUrl = 'http://localhost:5005/webhooks/rest/webhook';

  constructor(private client: HttpClient) {}

  sendRasaMessage(message: string): Observable<RasaModel[]> {
    return this.client.post<RasaModel[]>(this.rasaUrl, {
      sender: 'icr',
      message: message
    });
  }
}
