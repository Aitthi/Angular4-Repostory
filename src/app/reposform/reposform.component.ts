import { Component, OnInit } from '@angular/core';
import { ReposList } from '../class/repos.list';
import { GitService } from '../service/git.service';

@Component({
  selector: 'app-reposform',
  templateUrl: './reposform.component.html',
  styleUrls: ['./reposform.component.css']
})
export class ReposformComponent implements OnInit {

  repos:string;

  constructor(private _ReposList:ReposList, private _git:GitService) { }
   search:any;
  ngOnInit() {
  }

  AddRepos(name){
    this._ReposList.reponame.push({name:name})
    this.repos = '';
    this.search = '';
  }

  Search(){
    if(this.repos !== ''){
    this._git.searchRepos(this.repos).subscribe(
      data =>{ 
        this.search = data.items;
      }
    )
  }
  }

}
