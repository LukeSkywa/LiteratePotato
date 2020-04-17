import { Injectable } from '@angular/core';
import { ProdottoItemModule } from '../model/prodotto-item/prodotto-item.module';

@Injectable({
  providedIn: 'root'
})
export class ProdottiListService {

  private gameListStored:ProdottoItemModule[]=[     
    { id:1, Nome:"gta", produttore:"gioco azione", Genere:1, taglia: 2, prezzo:50, preferito: true, nascosto:false},
    { id:2, Nome:"fifa", produttore:"gioco sport", Genere:2, taglia: 2, prezzo:32, preferito: true, nascosto:false},
    { id:3, Nome:"pes", produttore:"gioco sport", Genere:1, taglia: 2, prezzo:44, preferito: true, nascosto:false},
    { id:4, Nome:"forza", produttore:"gioco corsa", Genere:1, taglia: 2, prezzo:99, preferito: true, nascosto:false},
    { id:5, Nome:"far cry", produttore:"gioco sparatutto", Genere:2, taglia: 2, prezzo:12, preferito: true, nascosto:false},
  ];

  getGameList(): ProdottoItemModule[]{
    return this.gameListStored;
  }

  setGameList(gameList:ProdottoItemModule[]):void{
    this.gameListStored=gameList;
  }

  getGameItem(id:number):ProdottoItemModule{
    return this.gameListStored.find(item => {
      return item.id===id;
    }
    );
  }

  constructor() { }
}
