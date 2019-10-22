import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http'
import {Observable} from "rxjs";

@Injectable()
export class ApiService {
  // リクエスト先のURLを設定する
  url = 'https://d073qm4qc1.execute-api.us-east-2.amazonaws.com/dev/hoge';

  constructor(private http: HttpClient) { }

  getRequest(): Observable<HttpResponse<{}>> {
    return this.http.get(this.url, {observe: 'response'});
  }

  putRequest(): Observable<HttpResponse<{}>> {
    return this.http.put(this.url,{}, {observe: 'response'});
  }

  postRequest(): Observable<HttpResponse<{}>> {
    return this.http.post(this.url,{},{observe: 'response'});
  }

  deleteRequest(): Observable<HttpResponse<{}>> {
    return this.http.delete(this.url, {observe: 'response'});
  }
}
