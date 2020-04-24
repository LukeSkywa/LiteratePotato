import { Injectable } from '@angular/core';
import { ProdottoItemModule } from '../model/prodotto-item/prodotto-item.module';
import { MyHttpService } from './my-http.service';

@Injectable({
  providedIn: 'root'
})
export class ProdottiListService {
  prodotti: ProdottoItemModule[];

  constructor(private myHttpService: MyHttpService) { 
    
  }
}
