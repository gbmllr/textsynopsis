import { Component, OnInit } from '@angular/core';

import { JsonToHtmlService } from '../json-to-html.service';
import * as json from '../../assets/data/natur';

@Component({
  selector: 'app-text-overview',
  templateUrl: './text-overview.component.html',
  styleUrls: ['./text-overview.component.css']
})
export class TextOverviewComponent implements OnInit {
  //data from the json file gets an alias
  json = json.data.ausgaben;

  //the finished html goes here
  html = [ ];

  constructor(private jsonToHtmlService: JsonToHtmlService) { }

  ngOnInit() {
  	  	for (let i = 0; i < 8; i++) {
  	  		let row = [];
  	  		for (let j = 0; j < 3; j++) {
  				row[j] = this.jsonToHtmlService.parse(this.json[j][i]);
  			}
  			this.html.push(row);
  	}
  }



}
