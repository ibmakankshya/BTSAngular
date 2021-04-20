import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchBugComponent } from './search-bug/search-bug.component';
import {Routes, RouterModule} from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UpdateBugComponent } from './update-bug/update-bug.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
const routes:Routes=[
  {
    path:'CreateBug', component: FormComponent
  },
  {
    path: 'SearchBug', component: SearchBugComponent
  },
  {
    path: 'Homepage',component:HomepageComponent
  },
  {
    path:'UpdateBug', component:UpdateBugComponent
  },
  {
    path:'ContactUs', component:ContactUsComponent
  }
]
@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    FooterComponent,
    SearchBugComponent,
    HomepageComponent,
    UpdateBugComponent,
    ContactUsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,FormsModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
