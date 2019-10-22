import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'app-api',
    templateUrl: './api.component.html',
    providers: [ApiService],
    styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
    response: any;
    headers: any;
    statusCode: any;
    body: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  clear() {
      this.response = undefined;
      this.headers = undefined;
      this.statusCode = undefined;
      this.body = undefined;
  }

  // Getリクエスト
  getRequest() {
      this.apiService.getRequest()
          .subscribe(
              resp => this.callBack(resp)
          );
    }

    // Putリクエスト
    putRequest() {
        this.apiService.putRequest()
            .subscribe(
                resp => this.callBack(resp)
            );
    }

    // Postリクエスト
    postRequest() {
        this.apiService.postRequest()
            .subscribe(
                resp => this.callBack(resp)
            );
    }

    // Deleteリクエスト
    deleteRequest() {
        this.apiService.deleteRequest()
            .subscribe(
                    resp => this.callBack(resp)
           );
    }

    callBack(resp): void{
      this.response = resp;
      this.statusCode = resp.status;
      const keys = resp.headers.keys();
      this.headers = keys.map(key =>
         `${key}: ${resp.headers.get(key)}`);
      this.body = {...resp.body};
      // this.body = resp.body;
    }
}
