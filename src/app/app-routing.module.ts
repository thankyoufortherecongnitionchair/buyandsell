import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { DetailsComponent } from './details/details.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EditlistingComponent } from './editlisting/editlisting.component';
import { MystuffComponent } from './mystuff/mystuff.component';
import { NewListingComponent } from './new-listing/new-listing.component';

const routes: Routes = [
  { path: '', redirectTo: '/listings', pathMatch: 'full' },
  { path: 'listings', component: ListingsPageComponent, pathMatch: 'full' },
  { path: 'listings/:id', component: DetailsComponent },
  { path: 'contact/:id', component: ContactsComponent },
  { path: 'edit-listings/:id', component: EditlistingComponent },
  { path: 'mystuff', component: MystuffComponent },
  { path: 'newlisting', component: NewListingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
