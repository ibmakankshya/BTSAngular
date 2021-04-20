import { Component, OnInit } from '@angular/core';
import {Bug} from '../Bug';
import { BugService} from '../bug.service';
import { STATUS } from '../STATUS';
@Component({
  selector: 'app-search-bug',
  templateUrl: './search-bug.component.html',
  styleUrls: ['./search-bug.component.css']
})
export class SearchBugComponent implements OnInit {
  title: string = 'SearchForm';
  bug: Bug = new Bug(); //model -stores all form data, Change detection works on mode
bugArray: any;
  constructor(private bugService: BugService ) {}
getABug(name:string){
  const observable = this.bugService.getABug(name);
  observable.subscribe(response => {
    console.log(response);
    this.bugArray = response;
   });
}
getStatus(status:STATUS){
  const observable = this.bugService.getStatus(status);
  observable.subscribe(response => {
    console.log(response);
    this.bugArray = response;
   });
}
  ngOnInit(): void {
    const observable = this.bugService.getAllBugs();
    observable.subscribe(response => {
      console.log(response);
      this.bugArray = response;
     });

  }

}
