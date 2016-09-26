import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { TextBanner }           from './multi-class';
import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TextBannerService {
  constructor (private http: Http) {}
  private headers = new Headers({'Content-Type': 'application/json'})
  private textBannerUrl = 'app/textBanner.json';  // URL to web API

  getTextBanner(): Promise<TextBanner[]> {
        return this.http.get(this.textBannerUrl)
                    .toPromise()
                    .then(response => response.json().data as TextBanner[])
                    .catch(this.handleError);
    }
//   getTextBanner(): Observable<TextBanner[]> {
//     return this.http.get(this.TextBannerUrl)
//                     .map(this.extractData)
//                     .catch(this.handleError);
//   }

    private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }

}
