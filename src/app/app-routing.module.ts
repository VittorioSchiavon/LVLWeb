import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusPageComponent } from './aboutus-page/aboutus-page.component';
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NetPageComponent } from './net-page/net-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { WorkwithusPageComponent } from './workwithus-page/workwithus-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'publications', component: ArticlesPageComponent },
  { path: 'aboutUs', component: AboutusPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'workWithUs', component: WorkwithusPageComponent },
  { path: 'news', component: NewsPageComponent },
  { path: 'projects/netCenter', component: NetPageComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
