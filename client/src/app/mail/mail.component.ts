import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { MailService } from '../services/mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  mailInfo = {
    name : '',
    email: ''
  };
  haveFlight: boolean = false;
  find: any;

  constructor(public mailService: MailService) { }

  ngOnInit() {
  }

  sendReq() {
    console.log(this.mailInfo);
    this.mailService.getMails(
      this.mailInfo.name,
      this.mailInfo.email
    )
      .subscribe(result => {
        console.log(result);
        this.find = result;
        this.haveFlight = false;
      });
  }
}

