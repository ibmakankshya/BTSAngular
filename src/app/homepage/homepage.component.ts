import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  ImgPath: "./assets/img/bug1.jpeg" | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
