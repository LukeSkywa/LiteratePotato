import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer/footer.component';
import { MenuComponent} from '../components/menu/menu.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';



@NgModule({
  declarations: [FooterComponent],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatInputModule,
    MatTabsModule,
    MatGridListModule,
    MatAutocompleteModule,
    FormsModule,
  ],
  exports:[
    CommonModule,
    FooterComponent,
    ReactiveFormsModule,
    MatMenuModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatInputModule,
    MatTabsModule,
    MatGridListModule,
    MatAutocompleteModule,
    FormsModule
  ]
})
export class SharedModule { }