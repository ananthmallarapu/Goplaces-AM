import { DispaycontainerComponent } from './dispaycontainer/dispaycontainer.component';
import { SearchService } from './search.service';
import { ButtonComponent } from './button/button.component';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http'
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { RouterModule }   from '@angular/router';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { DisplayResultsComponent } from './display-results/display-results.component';
import { FavouritesComponent } from './favourites/favourites.component';
import {MatCardModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NavbarComponent,
    SearchComponent,
    DispaycontainerComponent,
    MoreDetailsComponent,
    DisplayResultsComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
     MdCheckboxModule,
     MatToolbarModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '',
      component: DispaycontainerComponent 
  },
      {path: 'results/:id/moredetails',
      component: MoreDetailsComponent },
      {path: 'results/:id/moredetails/:id',
      component: MoreDetailsComponent },
      {path: 'moredetails',
      component: MoreDetailsComponent },
      {path: 'moredetails/:id',
      component: MoreDetailsComponent },
      {path: 'results',
      component: DisplayResultsComponent },
      {path: 'results/:id',
      component: DisplayResultsComponent },
      {path: 'favourites',
      component: FavouritesComponent }
      

      
    ])
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
