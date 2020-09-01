import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactspageComponent } from './contactspage/contactspage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'aboutpage', component: AboutpageComponent },
  { path: 'contactspage', component: ContactspageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
