import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { TravelService } from '../services/travel.service';


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
  endDate: "",
  maxPrice: ""
}
search:any

  constructor(public travelService: TravelService) { }

  ngOnInit() {  
  }

  sendRequest () {
    console.log(this.formInfo)
    this.travelService.getTravels( 
    this.formInfo.origin, 
    this.formInfo.passengers,
    this.formInfo.startDate,
    this.formInfo.endDate,
    this.formInfo.maxPrice)
    .subscribe(result => {
      console.log(result);
      this.search = result} )
  
  }
}
