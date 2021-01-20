import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeadingComponent } from './components/heading/heading.component';
import { NavigationmenuComponent } from './components/navigationmenu/navigationmenu.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './pages/about/about.component';
import { TabsectionComponent } from './components/tabsection/tabsection.component';
import { ProductsectionComponent } from './components/productsection/productsection.component';
import { BlogsectionComponent } from './components/blogsection/blogsection.component';
import { InstagramsectionComponent } from './components/instagramsection/instagramsection.component';
import { PriceformatPipe } from './pipes/priceformat.pipe';
import { CartComponent } from './pages/cart/cart.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductcardComponent } from './components/productcard/productcard.component';
import { BlogComponent } from './pages/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeadingComponent,
    NavigationmenuComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotpasswordComponent,
    BannerComponent,
    HomeComponent,
    AboutComponent,
    TabsectionComponent,
    ProductsectionComponent,
    BlogsectionComponent,
    InstagramsectionComponent,
    PriceformatPipe,
    CartComponent,
    CategoryComponent,
    ProductComponent,
    ProductcardComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
