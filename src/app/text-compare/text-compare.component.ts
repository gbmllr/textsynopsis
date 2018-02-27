import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JsonToHtmlService } from '../json-to-html.service';
import { TextCompareService } from '../text-compare.service';


import * as json from '../../assets/data/natur';
import { JsonPara } from '../JsonPara';

@Component({
  selector: 'app-text-compare',
  templateUrl: './text-compare.component.html',
  styleUrls: ['./text-compare.component.css']
})
export class TextCompareComponent implements OnInit {
	//data from the json file gets an alias
  	json = json.data.ausgaben;

	//the finished html goes here
	html = [ ];

  	//prepare three possible comparisons of the three editions 
      comparisons = {
  	'1817-1827': this.compareService.compareParas(this.json[0], this.json[1]),
  	'1817-1830': this.compareService.compareParas(this.json[0], this.json[2]),
  	'1827-1830': this.compareService.compareParas(this.json[1], this.json[2])
  }

      comparison = [];

  	//get the comparison to be actually made in the view from the route
	getComparison() {
    const comparisonKey = this.route.snapshot.paramMap.get('comparisonKey');
    const comparison = this.comparisons[comparisonKey];
    return comparison
  }




  constructor(
    private route: ActivatedRoute,
    private jsonToHtmlService: JsonToHtmlService, 
    private compareService: TextCompareService) {

     }

  ngOnInit() {
    this.comparison = this.getComparison();
  	for (let i = 0; i < 8; i++) {
		let row = [];
		for (let j = 0; j < 2; j++) {
		row[j] = this.jsonToHtmlService.parse(this.comparison[j][i]);
	}
	this.html.push(row);
  }
}
