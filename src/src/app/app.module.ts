import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { HeroComponent } from './main/hero/hero.component';
import { Panel2imgComponent } from './main/components/panel2img/panel2img.component';
import { PanelComponent } from './main/components/panel/panel.component';
import { ExclusiveCollectionComponent } from './main/components/exclusive-collection/exclusive-collection.component';
import { CollectionsComponent } from './main/components/collections/collections.component';
import { BestDealsComponent } from './main/components/best-deals/best-deals.component';
import { NewArrivalsComponent } from './main/components/new-arrivals/new-arrivals.component';
import { CategoryComponent } from './main/components/category/category.component';
import { UrbanCollectionsComponent } from './main/components/urban-collections/urban-collections.component';
import { BestSellersComponent } from './main/components/best-sellers/best-sellers.component';
import { SummerCollectionComponent } from './main/components/summer-collection/summer-collection.component';
import { ExploreCollectionComponent } from './main/components/explore-collection/explore-collection.component';
import { FooterComponent } from './main/footer/footer.component';
import { NewsLetterComponent } from './main/components/news-letter/news-letter.component';
import { Hero2Component } from './main/hero2/hero2.component';
import { CartComponent } from './main/cart/cart.component';
import { SearchComponent } from './main/components/search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    Panel2imgComponent,
    PanelComponent,
    ExclusiveCollectionComponent,
    CollectionsComponent,
    BestDealsComponent,
    NewArrivalsComponent,
    CategoryComponent,
    UrbanCollectionsComponent,
    BestSellersComponent,
    SummerCollectionComponent,
    ExploreCollectionComponent,
    FooterComponent,
    NewsLetterComponent,
    Hero2Component,
    CartComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
