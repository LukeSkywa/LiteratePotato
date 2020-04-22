import { Component, OnInit } from '@angular/core';
import { ProdottoItemModule } from 'src/app/model/prodotto-item/prodotto-item.module';
import { MyHttpService } from 'src/app/services/my-http.service';
import { ProdottiListService } from 'src/app/services/prodotti-list.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  prodotti: ProdottoItemModule[];
  mostra=false;

  constructor(private myHttp: MyHttpService,private ProdottiList:ProdottiListService) { 
    
  }

  ngOnInit(): void {
    this.myHttp.getList().subscribe(reponse => {
      this.prodotti = reponse;
      //console.log(this.serie);
    }, err => {
      console.log('error');
    });
    //console.log(this.serie);
  }



}
