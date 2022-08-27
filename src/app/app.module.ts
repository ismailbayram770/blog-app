import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogComponent } from './blog/blog.component';
import { CategoryComponent } from './category/category.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BlogcreateComponent } from './blogcreate/blogcreate.component';
import { FormsModule } from '@angular/forms';
import { BlogupdateComponent } from './blogupdate/blogupdate.component';
import { BloglastpostComponent } from './bloglastpost/bloglastpost.component';
import { BlogfilterComponent } from './blogfilter/blogfilter.component';
import { BlogveryreadComponent } from './blogveryread/blogveryread.component';
import {DialogModule} from '@angular/cdk/dialog';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogComponent,
    CategoryComponent,
    BlogDetailComponent,
    BlogcreateComponent,
    BlogupdateComponent,
    BloglastpostComponent,
    BlogfilterComponent,
    BlogveryreadComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
