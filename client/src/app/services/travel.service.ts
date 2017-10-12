import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs';
import { environment } from '../../environments/environment';

const BASEURL = environment.BASEURL ;

@Injectable()
export class TravelService {
  private travel: object;
  private options = { withCredentials: true };

  constructor(private http: Http) {
  }




  private handleError(e) {
    console.log('AUTH ERROR');
    return Observable.throw(e.json().message);
  }

  getTravels(origin, passengers, startDate, endDate, maxPrice) {
    console.log('service');
    return this.http
      .post(`${BASEURL}/travels/search`, {origin, passengers, startDate, endDate, maxPrice })
      .map(res => res.json())
      .catch(this.handleError);
  }

  getSurprise(form) {
    console.log('service2' + form);
    return this.http.post(`${BASEURL}/travels/newtravel`, form, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

}
