import { Component, OnInit } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/Leader';
import { LEADERS } from '../shared/LEADERS';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  
  Leaders: Leader[] ;

  selectedLeader: Leader;

  
  constructor(private leaderService: LeaderService) { }

  ngOnInit() {   this.leaderService.getLeaders().subscribe(Leaders=>this.Leaders=Leaders);
  }

  onSelect(leader: Leader) {
    this.selectedLeader = leader;
  }

}
