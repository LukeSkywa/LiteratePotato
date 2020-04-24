import { Injectable } from '@angular/core';
import { ProdottoItemModule } from '../model/prodotto-item/prodotto-item.module';

@Injectable({
  providedIn: 'root'
})
export class ProdottiListService {
  private filmListStored:ProdottoItemModule[]=[     
    { id: 1, Nome: "polo", produttore: "ralph lauren", img: "polo.jpg", taglia: 32, prezzo: 40, preferito: true, nascosto: false},
    {
      id: 2, Nome: "maglietta",
      produttore: "fila",
      img: "maglietta.jpg",
      taglia: 35,
      prezzo: 40,
      preferito: true,
      nascosto: false
    },
  ];

  tem:ProdottoItemModule;
  getFilmList(): ProdottoItemModule[]{ //restituire tutti tranne i nascosti
    return this.filmListStored.filter(film => film.nascosto ==true);
  }
  getFavouriteList():ProdottoItemModule[]{
    //restituisce preferiti
    return this.filmListStored.filter(film => film.preferito ==true);
  }
  getHiddenList():ProdottoItemModule[]{
    //restituisce nascosti
    return this.filmListStored.filter(film => film.nascosto ==false);
  }
  setFavourite(id:number){
    //aggiunge ad una lista quelli preferiti id
      this.filmListStored.find(item =>item.id==id).preferito=true;
  }
  removeFavourite(id:number){
    //toglie da una lista quelli preferiti id
      this.filmListStored.find(item =>item.id==id).preferito=false;
  }
  setShowStatus(id:number){
    //mostra item id
      this.filmListStored.find(item =>item.id==id).nascosto=true;
  }
  removeShowStatus(id:number){
    //nasconde item id
      this.filmListStored.find(item =>item.id==id).nascosto=false;
  }
  setFilmList(filmList:ProdottoItemModule[]):void{
    this.filmListStored=filmList;
  }

  getGameItem(id:number):ProdottoItemModule{
    return this.filmListStored.find(item => {
      return item.id===id;
    }
    );
  }
  constructor() { }
}
