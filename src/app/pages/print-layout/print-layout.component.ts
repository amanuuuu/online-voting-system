import { Component, OnInit } from '@angular/core';
import { VotingService } from 'src/app/service/voting/voting.service';

@Component({
  selector: 'app-print-layout',
  templateUrl: './print-layout.component.html',
  styleUrls: ['./print-layout.component.css']
})
export class PrintLayoutComponent implements OnInit {
  printdata:any
  constructor(private voteService:VotingService) { }

  ngOnInit(): void {
    this.printdata = this.voteService.data
    console.log(this.printdata)
    this.voteService.print()
  }

}
