
import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { GetJsonService } from '../../assets/services/get-json.service';
import * as textJson from '../../assets/data/natur';

import * as wordDiff from 'word-diff';

export class JsonPara {
    title: string;
    subtitle: string;
    paranumber: string;
    content: string; 
    anmerkung: string;

    }




  
@Component({  
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  	data = textJson.data;

    markUpParaDiff(leftIn,rightIn) {
      const diff = wordDiff.diffString(leftIn, rightIn);
      var leftOut = "";
      var rightOut = "";
    for (let part of diff) {
      if (part.hasOwnProperty('add')) {
      leftOut = leftOut + '<mark>' + part.remove + '</mark>';
      rightOut = rightOut + '<mark>' + part.add + '</mark>'; //<ins>
        } else {
          leftOut = leftOut + part.text;
          rightOut= rightOut + part.text; 
        }
      }
      console.log([leftOut,rightOut]);
      return [leftOut, rightOut]
    }

    parseJsonParaToHtmlPara(jsonPara: JsonPara) {
      return  "<h2>" + jsonPara.title + "</h2>\n <h3>" + jsonPara.subtitle +"</h3>\n <p>" + ((jsonPara.paranumber === '') ? '' : ('§ ' + jsonPara.paranumber + ': ' + jsonPara.content)) + "</p>\n<p>" + (jsonPara.anmerkung === "" ? "" : "Anmerkung: " + jsonPara.anmerkung) + "</p>";
	}


    
    htmlParas = [];

// for (let ausgabe in this.data.ausgaben) {
//   htmlParas.push(ausgabe);//this.parseJsonParaToHtmlPara(this.data.ausgaben[ausgabe][0]));
// }
//this for loop produces an error
//todo: implement a function that takes an index i and outputs an array with the 
//three parsed html paragraphs in row i (one string for each column)





//   ngOnInit() {
//   }

//     // this.getJsonService.list().subscribe(data => this.data = data);
//     //this is a working way to subscribe to an external service that sends the
//     // Text-as-json in per Observable. It is not necessary because a json can be imported directly
//     // the import statement
 
 }

