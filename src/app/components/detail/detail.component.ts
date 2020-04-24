import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdottoItemModule } from 'src/app/model/prodotto-item/prodotto-item.module';
import { MyHttpService } from 'src/app/services/my-http.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id:number;
  sub: any;
  prodotto:ProdottoItemModule;
  constructor(private route: ActivatedRoute,private myHttpService: MyHttpService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
   });
   this.myHttpService.getOneProdotto(this.id).subscribe(reponse => {
    this.prodotto = reponse;
  });
  }

}
