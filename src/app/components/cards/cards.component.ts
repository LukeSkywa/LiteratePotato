import { Component, OnInit } from '@angular/core';
import { ProdottoItemModule } from 'src/app/model/prodotto-item/prodotto-item.module';
import { MyHttpService } from 'src/app/services/my-http.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  prodottoList: ProdottoItemModule[];
  prodottoListAll: ProdottoItemModule[];
  startPage: number;
  limitPage: number;

  constructor(private myHttp: MyHttpService ) {
    this.startPage = 0;
    this.limitPage = 4;
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

    showMoreItems() {
      this.limitPage = Number(this.limitPage) + 5;
    }
    showLessItems() {
      this.limitPage = Number(this.limitPage) - 5;
    }
    showAll() {
      this.prodottoList = this.prodottoListAll.filter(prodotto =>{
        return !prodotto.nascosto;
      });
    }
    showFavorite() {
      this.prodottoList = this.prodottoListAll.filter(prodotto =>{
        return prodotto.preferito;
      });
    }
    showHidden() {
      this.prodottoList = this.prodottoListAll.filter(prodotto => {
        return prodotto.nascosto;
      });
    }
 }

