import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  ImgPath:string= "./assets/img/bug1.jpeg";
  constructor() { }

  ngOnInit(): void {
  }

}
