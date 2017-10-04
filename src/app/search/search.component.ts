import { Observable } from 'rxjs/Rx';
import { MatInputModule } from '@angular/material';
import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import{Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results = [];
  resultssug:Observable<object>;
  queryField: FormControl = new FormControl();
  constructor( private router:Router,
    private searchService:SearchService ) {
      
     }
    onSubmitSearch(){

    
      console.log(this.queryField.value);
      this.router.navigate(['/results',this.queryField.value]);
    }
  

  ngOnInit() {
    this.queryField.valueChanges
    .debounceTime(1000)
    .distinctUntilChanged()
    .switchMap((query) =>  this.searchService.showsug(query)).
    subscribe(response => {this.resultssug=response.json();
      console.log(this.resultssug);
    if(this.resultssug["status"]==="OVER_QUERY_LIMIT")
    alert("limit exceeded")},error =>{alert("enable cross orgin resource sharing"+error)});
    
  }

}
