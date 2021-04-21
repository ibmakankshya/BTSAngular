import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-update-bug',
  templateUrl: './update-bug.component.html',
  styleUrls: ['./update-bug.component.css']
})

export class UpdateBugComponent implements OnInit {
  bug:Bug = new Bug();
  bugArray: any;
  constructor(private bugService:BugService) { }

updateBug(){
  const observable=this.bugService.update(this.bug, this.bug.id);
  observable.subscribe(response=> {
    console.log(response);
    alert("Bug updated succesfully..")
  },
  error=> {
    console.log(error);
    alert("error happened")
  })

}

  ngOnInit(): void {
  }

}
