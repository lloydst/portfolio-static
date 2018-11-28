import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class GithubService {

	constructor(private http: HttpClient) { }
	repo() {
		return this.http.get('https://api.github.com/users/lloydst/repos')
	}
	readme(repo) {
		return this.http.get('https://api.github.com/repos/lloydst/'+repo+'/contents/Readme.Md')
	}
}
