import { Component, OnInit } from '@angular/core';
import { Nifty50Service } from '../../services/nifty-50.service';

@Component({
  selector: 'app-nifty',
  templateUrl: './nifty.component.html',
  styleUrls: ['./nifty.component.css']
})
export class NiftyComponent implements OnInit {

  private niftyData: any;
  constructor(private niftySer: Nifty50Service) { }

  ngOnInit() {
    console.log(this.niftySer);
    this.getNiftyData();
  }

  getNiftyData() {
    this.niftySer.getNifty50().subscribe(
      (data: any) => this.niftyData = {
        data: data
      });

      console.log(this.niftyData);
  }

}
