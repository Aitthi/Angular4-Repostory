import { Component, OnInit } from '@angular/core';
import { ReposList } from '../class/repos.list';

@Component({
  selector: 'app-reposlistitem',
  templateUrl: './reposlistitem.component.html',
  styleUrls: ['./reposlistitem.component.css']
})
export class ReposlistitemComponent implements OnInit { 

  reposName:any;

  constructor(private _ReposList:ReposList) {
    this.reposName = _ReposList.reponame; 
   }

  ngOnInit() {
  }

}
