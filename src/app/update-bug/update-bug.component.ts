import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';
import {DatePipe} from "@angular/common";
@Component({
  selector: 'app-update',
  templateUrl: './update-bug.component.html',
  styleUrls: ['./update-bug.component.css']
})
export class UpdateBugComponent implements OnInit {
  temp:any;
  title:String="Update Bug";
  bug: Bug = new Bug();
  bugList: any;
  oldStatus: any;
  updatedBody:any;
  constructor(private bugService: BugService) { }
  validatestatus(){
    if( this.oldStatus== 'NEW' && this.temp.status!='ASSIGNED'){
      alert('Status not allowed, NEW bug can only be assigned.');
      return;
    }
    else if (this.oldStatus== 'ASSIGNED' && this.temp.status=='NEW'){
      alert('Assigned bug cannot be updated to status NEW.');
      return;
    }
    else if (this.oldStatus=='OPEN' && (this.temp.status=='NEW'||this.temp.status=='ASSIGNED')){
      alert('An OPEN bug cannot have updated status as NEW or ASSIGNED,');
      return;
    }
    else if(this.oldStatus=='FIXED' && (this.temp.status=='OPEN'||this.temp.status=='NEW'||this.temp.status=='ASSIGNED')){
      alert('FIXED bug cannot have updated status as NEW or OPEN or ASSIGNED, please try REOPENING It.  ');
      return;
    }
    else if(this.oldStatus=='PENDING_RETEST' && (this.temp.status=='FIXED'||this.temp.status=='OPEN'||this.temp.status=='NEW'||this.temp.status=='ASSIGNED')){
      alert('A bug in PENDING RETEST status cannot be FIXED or NEW or OPEN or ASSIGNED ');
      return;
    }
    else if(this.oldStatus=='RETEST' && (this.temp.status=='PENDING_RETEST'||this.temp.status=='FIXED'||this.temp.status=='OPEN'||this.temp.status=='NEW'||this.temp.status=='ASSIGNED')){
       alert('A bug in RETEST cannot be PEDNING RETEST or FIXED or OPEN or NEW or ASSIGNED');
       return;
    }
    else if(this.oldStatus=='REOPEN' && (this.temp.status=='CLOSED'||this.temp.status=='VERIFIED'||this.temp.status=='OPEN'||this.temp.status=='NEW'||this.temp.status=='ASSIGNED')){
      alert('A bug thats REOPEN cannot be CLOSED or VERFIED or OPEN or NEW or ASSIGNED');
      return;
    }
    else if(this.oldStatus=='VERIFIED' && (this.temp.status=='REOPEN'||  this.temp.status=='RETEST'||this.temp.status=='PENDING_RETEST'||this.temp.status=='FIXED'||this.temp.status=='OPEN'||this.temp.status=='NEW'||this.temp.status=='ASSIGNED')){
      alert('A bug thats VERIFIED cannot have its status updates as REOPEN OR RETETST OR PENDING_RETEST OR FIXED or OPEN or NEW or ASSIGNED');
      return;
    }
    else if(this.oldStatus=='CLOSED' && (this.temp.status=="VERIFIED"||this.temp.status=='REOPEN'||  this.temp.status=='RETEST'||this.temp.status=='PENDING_RETEST'||this.temp.status=='FIXED'||this.temp.status=='OPEN'||this.temp.status=='NEW'||this.temp.status=='ASSIGNED')){
      alert('A CLOSED bug cannot cannot be updated to status of VERIFIED or REOPEN or RETEST or PENDING RETEST, FIXED or OPEN or NEW or ASSIGNED');
      return;
    }
  }
  getBugName() {
    let endpointURL = 'http://localhost:8080/bug/';
    let bugName = (<HTMLInputElement>document.getElementById('bugName')).value;

    if (bugName) {
      endpointURL = endpointURL + 'name/' + bugName;

      const promise = this.bugService.getBug(endpointURL);
      promise.subscribe(response => {
        this.bugList = response;
        console.log(this.bugList);
        if (this.bugList) {
          this.oldStatus=this.bug.status;
          this.bug = this.bugList;
          let reseta=this.bug.eta;


        }
        else {
          alert("Given Bug with title " + bugName + " does not exist");
        }
      },
        error => {
          console.log(error);
          alert("Error Happened");
        }
      )
    }
    else{alert('Enter a valid name')}

  }

  updateBug() {
  let updateBug = (<HTMLInputElement>document.getElementById('updateBug'))

    let bugId = (<HTMLInputElement>document.getElementById('bugId')).value
    const updatedBody = {
      bugId: (<HTMLInputElement>document.getElementById('bugId')).value,
      name: (<HTMLInputElement>document.getElementById('bugName')).value,
      description: (<HTMLInputElement>document.getElementById('desc')).value,
      priority: (<HTMLInputElement>document.getElementById('Priority')).value,
      status: (<HTMLInputElement>document.getElementById('Status')).value,
      type: (<HTMLInputElement>document.getElementById('Type')).value,
      projectId: (<HTMLInputElement>document.getElementById('project')).value,
      module: (<HTMLInputElement>document.getElementById('module')).value,
      eta: (<HTMLInputElement>document.getElementById('etadate')).value,
    }
this.temp=updatedBody;
this.validatestatus();
    this.bugService.updateBug(bugId, this.updatedBody).subscribe(
      response => {
        console.log(response);
        alert("Bug updated....");
      },
      error => {

        console.log(error);
        alert("Error Happened");

      }
    )


  }

  ngOnInit(): void {
  }

}
