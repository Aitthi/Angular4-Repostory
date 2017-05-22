import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RepositemComponent } from './repositem/repositem.component';
import { ReposlistitemComponent } from './reposlistitem/reposlistitem.component';
import { ReposformComponent } from './reposform/reposform.component';

import { ReposList } from './class/repos.list';
import { GitService } from './service/git.service';


const router:Routes = [
  { path: '', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RepositemComponent,
    ReposlistitemComponent,
    ReposformComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'Angular4-Repostory'}),
    FormsModule,
    HttpModule,
    RouterModule.forRoot(router)
  ],
  providers: [GitService, ReposList],
  bootstrap: [AppComponent]
})
export class AppModule { }
