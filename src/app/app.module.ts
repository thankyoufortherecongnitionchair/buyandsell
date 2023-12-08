import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { DetailsComponent } from './details/details.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MystuffComponent } from './mystuff/mystuff.component';
import { NewListingComponent } from './new-listing/new-listing.component';
import { EditlistingComponent } from './editlisting/editlisting.component';
import { ListingdataformComponent } from './listingdataform/listingdataform.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingsPageComponent,
    DetailsComponent,
    ContactsComponent,
    MystuffComponent,
    NewListingComponent,
    EditlistingComponent,
    ListingdataformComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
