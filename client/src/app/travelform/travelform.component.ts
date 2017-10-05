import { Component, OnInit } from '@angular/core';
import { TravelService } from '../services/travel.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-travelform',
  templateUrl: './travelform.component.html',
  styleUrls: ['./travelform.component.css']
})
export class TravelformComponent implements OnInit {
formInfo ={ 
  origin:"",
  passengers:"",
  startDate: "",
  duration: ""
}
  constructor(public travelService: TravelService) { }

  ngOnInit() {
    
  }

  sendRequest () {
    console.log(this.formInfo)
    this.travelService.getTravels( this.formInfo.origin, this.formInfo.passengers, this.formInfo.startDate, this.formInfo.duration)
    .subscribe(result => console.log(result))
  
  }
}
