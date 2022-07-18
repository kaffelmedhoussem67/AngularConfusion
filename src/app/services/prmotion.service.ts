import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class PrmotionService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(baseURL + 'promotions')
    .pipe(catchError(this.processHTTPMsgService.handleError)); }

  getPromotion(id: string): Observable<Promotion> {
    return this.http.get<Promotion>(baseURL + 'promotions/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));}

      getFeaturedPromotion(): Observable<Promotion> {
        return this.http.get<Promotion[]>(baseURL + 'promotions?featured=true').pipe(map(promotions => promotions[0]))
          .pipe(catchError(this.processHTTPMsgService.handleError));
      }

      getDishIds(): Observable<number[] | any> {
        return this.getPromotions().pipe(map(promotions => promotions.map(promotion => promotion.id)))
          .pipe(catchError(error => error));
      }
      
      putDish(promotion: Promotion): Observable<Promotion> {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
          })
        };
        return this.http.put<Promotion>(baseURL + 'promotions/' + promotion.id, promotion, httpOptions)
          .pipe(catchError(this.processHTTPMsgService.handleError));
    
      }
}