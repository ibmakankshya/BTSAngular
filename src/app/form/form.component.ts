import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
todayDate: Date= new Date();
  title:String="CREATE BUG";
  bug:Bug = new Bug();
  constructor(private bugService:BugService) { }
  etaCheck(){
    if(this.bug.eta<=this.todayDate){
      alert('ETA Should not be past date');
    }
  }
  saveBug(){


      const observable=this.bugService.save(this.bug);

    observable.subscribe(response=> {
      console.log(response);
      alert("Bug added succesfully..")
    },
    error=> {
      this.etaCheck();
      console.log(error);
      alert("Error occured")
    })



  }

  ngOnInit(): void {
  }


}
