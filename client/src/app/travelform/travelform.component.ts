import { Component, OnInit } from '@angular/core';
import { TravelService } from '../services/travel.service';

@Component({
  selector: 'app-travelform',
  templateUrl: './travelform.component.html',
  styleUrls: ['./travelform.component.css']
})
export class TravelformComponent implements OnInit {

  constructor(public travelService: TravelService) { }

  ngOnInit() {
  }

  sendRequest () {
    this.travelService.getTravels('origin', 'passengers', 'startDate', 'duration').subscribe(result => console.log(result))
  }
}
