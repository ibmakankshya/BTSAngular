import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bug } from './Bug';
import { STATUS } from './STATUS';
const URL ='http://localhost:8080/bug';
@Injectable({
  providedIn: 'root'
})
export class BugService {

  constructor(private http: HttpClient) { }
  save(bug: Bug) {
    return this.http.post('http://localhost:8080/bug/', bug ,
      {
      headers: { "content-type": 'application/json' }
     });

  }
  update(bug: Bug, id:string){
    return this.http.put('http://localhost:8080/bug/', bug ,
    {
      headers: { "content-type": 'application/json' }
    }

    );
  }
  delete(bugId:String){
    return this.http.delete('http://localhost:8080/bug/'+bugId);
  }
  getAllBugs(){
    return this.http.get(URL);
  }
  getBugByPartialName(name:String){
    return this.http.get(URL+'/'+name);

  }

  getABug(name:string){
    return this.http.get('http://localhost:8080/bug/'+name);
  }
  getStatus(status:STATUS){
    return this.http.get('http://localhost:8080/bug/status/'+status);

  }
  getBug(URL:any) {

    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.http.get(URL, { headers: httpHeaders });

  }
  updateBug(bugId:String, updatedBody:any) {
    const endpointURL = 'http://localhost:8080/bug/' + bugId;
    return this.http.put(endpointURL, updatedBody);
  }
}
