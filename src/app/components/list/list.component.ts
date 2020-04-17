import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProdottoItemModule } from 'src/app/model/prodotto-item/prodotto-item.module';
import { ProdottiListService } from 'src/app/services/prodotti-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  gameList:ProdottoItemModule[];
  constructor( private gameListService: ProdottiListService) { 
    this.gameList = this.gameListService.getGameList();
  }

  ngOnInit(): void {
  }

  showAll(){
    this.gameList=[...this.gameList]
  }
  showFavorite(){
    this.gameList=this.gameList.filter(film=>film.preferito);
  }
  showHidden(){
    this.gameList=this.gameList.filter(film=>film.nascosto);
  }


}
