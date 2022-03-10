import { Component, OnInit } from '@angular/core';
import { parks } from '../parks';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent implements OnInit {

  parks = parks;




  constructor() { }

  ngOnInit(): void {
  }

}
