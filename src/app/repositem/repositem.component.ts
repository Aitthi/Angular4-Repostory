import { Component, OnInit, Input } from '@angular/core';
import { Repos } from '../models/repos.model';
import { GitService } from '../service/git.service';

@Component({
  selector: 'app-repositem',
  templateUrl: './repositem.component.html',
  styleUrls: ['./repositem.component.css']
})

export class RepositemComponent implements OnInit {
  @Input() Repo: string;
  repos: any;
  constructor(private _git: GitService) {    
      this.repos = {
      full_name:"Loading....",
      description:"",
      stargazers_count:0,
      open_issues_count:0,
      forks_count:0,
      watchers_count:0,
      owner:{}
    }
  }  
  ngOnInit() {
    this._git.getRepos(this.Repo).subscribe(
      repos => this.repos = repos      
      )
  }

}
