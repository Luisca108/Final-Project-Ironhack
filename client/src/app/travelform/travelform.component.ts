import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { TravelService } from '../services/travel.service';
import * as $ from 'jquery';  
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
const BASEURL = environment.BASEURL;

@Component({
  selector: 'app-travelform',
  templateUrl: './travelform.component.html',
  styleUrls: ['./travelform.component.css']
})

export class TravelformComponent implements OnInit {
formInfo = {
  origin: '',
  passengers: '',
  startDate: '',
  endDate: '',
  maxPrice: '',
  finalPrice: '',
  destination:''
};
haveFlight: boolean = false;
search: any;

constructor(public travelService: TravelService, private http: Http) { }

  ngOnInit() {
    const prices = $('.prices').html();
    function getPrice () {
      $('.prices').each(function(index) {
        const classes = $(this).attr('class').split(/\s+/);
      });
    }
  }

  sendRequest () {
    console.log(this.formInfo);
    this.haveFlight = true;
    this.travelService.getTravels ( 
    this.formInfo.origin, 
    this.formInfo.passengers,
    this.formInfo.startDate,
    this.formInfo.endDate,
    this.formInfo.maxPrice)
    .subscribe(result => {
      console.log(result);
      this.search = result;
      this.haveFlight = false; });
  }

  saveSurprise(destination, price) {
    this.formInfo.finalPrice= price;
    this.formInfo.destination= destination;
    console.log(this.formInfo);
    this.travelService.getSurprise (this.formInfo).subscribe(result => console.log(result));
  }
}
