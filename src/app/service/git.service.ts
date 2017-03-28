import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Repos } from '../models/repos.model';

@Injectable()
export class GitService {
  constructor(private _http:Http) { }

  private API_PATH = 'https://api.github.com';

  getRepos(repos): Observable<any>{
    return this._http.get(`${this.API_PATH}/repos/${repos}`)
    .map((res: Response) => <Repos[]> res.json())
  }

  searchRepos(q):Observable<any>{
    return this._http.get(`${this.API_PATH}/search/repositories?q=${q}&sort=name`)
    .map(res => res.json());
  }

}
