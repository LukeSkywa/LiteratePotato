import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProdottoItemModule } from 'src/app/model/prodotto-item/prodotto-item.module';
import { MyHttpService } from 'src/app/services/my-http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  prodottoList: ProdottoItemModule[];
  prodottoListAll: ProdottoItemModule[];
  startPage: number;
  limitPage: number;
  showDetail: EventEmitter<number>= new EventEmitter();

  constructor(private myHttp: MyHttpService) {
    this.startPage = 0;
    this.limitPage = 5;
  }

recoverList() {
  this.myHttp.getList().subscribe(value => {
    this.prodottoListAll = value.body;
    this.showAll();
  });
}

  ngOnInit(): void {
    this.recoverList();
  }
  dettaglio(id: number){
    this.showDetail.emit(id);
  }
  showMoreItems()
  {
     this.limitPage = Number(this.limitPage) + 5;        
  }
  showLessItems() {
    this.limitPage = Number(this.limitPage) - 5;
  }
  showAll() {
    this.prodottoList = [...this.prodottoListAll];
  }
  showFavorite() {
    this.prodottoList = this.prodottoListAll.filter(prodotto => prodotto.preferito);
  }
  showHidden() {
    this.prodottoList = this.prodottoListAll.filter(prodotto => prodotto.nascosto);
  }
}
