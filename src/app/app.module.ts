import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageNetComponent } from './homepage-net/homepage-net.component';
import { WorkwithusPageComponent } from './workwithus-page/workwithus-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { AboutusPageComponent } from './aboutus-page/aboutus-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { ChisiamoPreviewComponent } from './chisiamo-preview/chisiamo-preview.component';
import { QuoteComponent } from './quote/quote.component';
import { ArticlesPreviewComponent } from './articles-preview/articles-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    HomepageNetComponent,
    WorkwithusPageComponent,
    ContactPageComponent,
    ProjectsPageComponent,
    ArticlesPageComponent,
    AboutusPageComponent,
    NewsPageComponent,
    ChisiamoPreviewComponent,
    QuoteComponent,
    ArticlesPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
