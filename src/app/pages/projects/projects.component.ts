import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/github.service';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
	repo;
	initialreadmearray =[]
	constructor(private gitservice: GithubService) { }

	ngOnInit() {
		this.gitservice.repo().subscribe(
			data => {
				this.repo = data;
				for (let index = 0; index < this.repo.length; index++) {
					const element = this.repo[index].name;
					this.geteachreadme(element)
				}
			}
		)
	
			
		
	}
	geteachreadme(name) {
		this.gitservice.readme(name).subscribe(succes=>{
			this.initialreadmearray = this.initialreadmearray.concat(succes);
			console.log(this.initialreadmearray)
	})
	}
}
