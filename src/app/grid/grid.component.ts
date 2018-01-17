
import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { GetJsonService } from '../../assets/services/get-json.service';
import * as textJson from '../../assets/data/natur';

import * as wordDiff from 'word-diff';

class JsonPara {
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
    results0_1 = this.compareParas(0,1);
    results0_2 = this.compareParas(0,2);
    results1_2 = this.compareParas(1,2);


    public parseJsonParaToHtmlPara(jsonPara: JsonPara) {
      return  "<h2>" + jsonPara.title + "</h2>\n <h3>" + jsonPara.subtitle +"</h3>\n <p>" + ((jsonPara.paranumber === '') ? '' : ('§ ' + jsonPara.paranumber + ': ' + jsonPara.content)) + "</p>\n<p>" + (jsonPara.anmerkung === "" ? "" : "Anmerkung: " + jsonPara.anmerkung) + "</p>";
	}


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
    return [leftOut, rightOut]
    }

    compareParas(a:number,b:number) {

        const results = {
          left : [],
          right : []
        };

      const aVersion = textJson.data.ausgaben[a];
      const bVersion = textJson.data.ausgaben[b];
      for (let i in aVersion) {

        results.left[i] = new JsonPara();
        results.right[i] = new JsonPara();
        [results.left[i].title, results.right[i].title] = this.markUpParaDiff(aVersion[i]['title'], bVersion[i]['title']) ;
        [results.left[i].subtitle, results.right[i].subtitle] = this.markUpParaDiff(aVersion[i]['subtitle'], bVersion[i]['subtitle']) ;
        [results.left[i].paranumber, results.right[i].paranumber] = this.markUpParaDiff(aVersion[i]['paranumber'], bVersion[i]['paranumber']) ;
        [results.left[i].content, results.right[i].content] = this.markUpParaDiff(aVersion[i]['content'], bVersion[i]['content']) ;
        [results.left[i].anmerkung, results.right[i].anmerkung] = this.markUpParaDiff(aVersion[i]['title'], bVersion[i]['title']) ;
        
      }
    return results
    }
}
const grid = new GridComponent();
console.log(grid.results0_1);
console.log(grid.data.ausgaben[0])
  





//   ngOnInit() {
//   }

//     // this.getJsonService.list().subscribe(data => this.data = data);
//     //this is a working way to subscribe to an external service that sends the
//     // Text-as-json in per Observable. It is not necessary because a json can be imported directly
//     // the import statement
 


