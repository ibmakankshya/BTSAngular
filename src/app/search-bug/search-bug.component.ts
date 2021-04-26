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
  bugList:any;
  bug: Bug = new Bug(); //model -stores all form data, Change detection works on mode
bugArray: any;
  constructor(private bugService: BugService ) {}
  getBugbyNameStatus() {
    let status = (<HTMLInputElement>document.getElementById('Status')).value;
      let name = (<HTMLInputElement>document.getElementById('bugName')).value;
    const promise = this.bugService.getBugbyStatusAndName(name, status);
        promise.subscribe(response => {
        console.log(response);
          this.bugList = response;
          if (this.bugList!=0) {
            this.bugArray = this.bugList;
          }
          else {
            alert("No Bug with Name : " + name + " and Status : " + status + " found");
            this.bugArray = [];
          }
        },
          error => {
            alert('error happened..')
          })
      }

getABug(name:string){
  const observable = this.bugService.getBugByPartialName(name);
  observable.subscribe(response => {

    this.bugArray = response;
    if(this.bugArray[0]==null){
     return alert("No Bug Found")
    }
    else
    return alert("Bug found!")



  });
}
showDescription(description:string){
  if(description){
    alert(description);
  }
}
deleteBug(id:string,index:number){
 if(confirm("Are u sure u want to delete?")){
  const observable = this.bugService.delete(id);

  observable.subscribe(response=>{this.bugArray.splice(index,1); alert("Bug Deleted")})
 }
 else
 alert("Deletion cancelled");


}
getStatus(status:STATUS){
  const observable = this.bugService.getStatus(status);
  observable.subscribe(response => {
    console.log(response);
    this.bugArray = response;
    if(this.bugArray[0]==null){
      return alert("No Bug Found")
     }
     else
     return alert("Bug found!")
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
