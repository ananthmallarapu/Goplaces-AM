import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Http } from '@angular/http';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-display-results',
  templateUrl: './display-results.component.html',
  styleUrls: ['./display-results.component.css']
})
export class DisplayResultsComponent implements OnInit {
  displayResultsArray:object[];
  constructor(private route:ActivatedRoute
    ,private http:Http,
  private searchService:SearchService) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.searchService.search(params.get('id')))
    .subscribe(response => {this.displayResultsArray = response.json()
    console.log(this.displayResultsArray['results'])},
    error =>{alert("enable cross orgin resource sharing"+error)});
    
  }

}
