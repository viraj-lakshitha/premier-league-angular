import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-create',
  templateUrl: './match-create.component.html',
  styleUrls: ['./match-create.component.css']
})
export class MatchCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public alertMatch() {
    alert("Match Added Succesfully !")
  }

}
