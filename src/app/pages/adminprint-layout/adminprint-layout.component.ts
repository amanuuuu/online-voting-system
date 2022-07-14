import { Component, OnInit } from '@angular/core';
import { VotingService } from 'src/app/service/voting/voting.service';

@Component({
  selector: 'app-adminprint-layout',
  templateUrl: './adminprint-layout.component.html',
  styleUrls: ['./adminprint-layout.component.css']
})
export class AdminprintLayoutComponent implements OnInit {

  printdata:any
  constructor(private voteService:VotingService) { }

  ngOnInit(): void {
    this.printdata = this.voteService.data
    console.log(this.printdata)
    this.voteService.print2()
  }

}
