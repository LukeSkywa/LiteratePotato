import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdottoItemModule } from '../model/prodotto-item/prodotto-item.module';
import { UsersProfile } from 'src/app/model/users-profile';
@Injectable({
  providedIn: 'root'
})
export class MyHttpService {
  private _productUrl = 'http://localhost:3000/prodotti';

  constructor(private myHttp:HttpClient) { }

  getUsers(): Observable<any>{
    return this.myHttp.get('http://localhost:3000/users');
  }
  getList():Observable<HttpResponse<ProdottoItemModule[]>>{
    return this.myHttp.get<ProdottoItemModule[]>('http://localhost:3000/prodotti',{observe:'response'});
      }
      // putProdotto(prodotto:ProdottoItemModule){
      //   return this.myHttp.put('http://localhost:3000/prodotti'+prodotto.id,prodotto,{observe:'response'});
      // }
  getOneProdotto(id:number):Observable<any>{
        return this.myHttp.get('http://localhost:3000/prodotti/'+id);
      }
    
     postUser(user:UsersProfile){
        console.log(user);
        return this.myHttp.post('http://localhost:3000/users', user);
      }

      modifyUser(username:string){
        return this.myHttp.put('http://localhost:3000/users/'+sessionStorage.getItem('username'), username);
      }
      getOneUsers(id:number):Observable<any>{
        return this.myHttp.get('http://localhost:3000/users/'+id);
      }
}
