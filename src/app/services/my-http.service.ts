import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdottoItemModule } from '../model/prodotto-item/prodotto-item.module';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  constructor(private myHttp:HttpClient) { }

  getList():Observable<HttpResponse<ProdottoItemModule[]>>{
    return this.myHttp.get<ProdottoItemModule[]>('http://localhost:3000/prodotti',{observe:'response'});
      }
    
      putFilm(prodotto:ProdottoItemModule){
        return this.myHttp.put('http://localhost:3000/prodotti'+prodotto.id,prodotto,{observe:'response'});
      }
}
