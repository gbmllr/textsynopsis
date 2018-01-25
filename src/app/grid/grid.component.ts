
import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { GetJsonService } from '../../assets/services/get-json.service';
import { DataService } from '../../assets/services/data.service';
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
export class GridComponent implements OnInit {


//initializations
//json with the raw text; 0 = 1817-Ausgabe, 1= 1827, 2=1830

    versions = textJson.data.ausgaben;
    message: string;

    constructor(private data: DataService) { //make DataService available in this component
  //on component generation, prepare all versions
  this.parseVersions();

}

ngOnInit() {
  this.data.currentMessage.subscribe(message => this.message = message);
  console.log(this.message)
}



//the finished html strings go here
    parsed0 = [];
    parsed1 = [];
    parsed2 = [];

    //array with html strings of the comparison between version 0 and 1
    parsed0_1 = {
       left: [],
       right: []
      };
      //..and 0 and 2
    parsed0_2 = {
      left: [],
      right: []
      };   
      //.. and 1 and 2
    parsed1_2 = {
       left: [],
       right: []
    };

    public comparison = this.parsed0_2;




    public parseJsonParaToHtmlPara(jsonPara: JsonPara) {
      //takes a structured json paragraph and transforms it into a html string with appropriate markup
      return  "<h2>" + jsonPara.title + "</h2>\n <h3>" + jsonPara.subtitle +"</h3>\n <p>" + (((jsonPara.paranumber === "" ) || ( jsonPara.paranumber === "<b></b>" )) ? "" : ("§ " + jsonPara.paranumber + ": " + jsonPara.content)) + "</p>\n<p>" + (jsonPara.anmerkung === "" ? "" : "Anmerkung: " + jsonPara.anmerkung) + "</p>";
	}


   markUpParaDiff(leftIn,rightIn) {
     //uses wordDiff to compare two structured single fields. produces an array with the left and the 
     //right field-result, with the additions relative to the other one marked
    const diff = wordDiff.diffString(leftIn, rightIn);
    var leftOut = "";
    var rightOut = "";
    for (let part of diff) {
    if (part.hasOwnProperty('add')) {
    leftOut = leftOut + '<b>' + part.remove + '</b>';
    rightOut = rightOut + '<b>' + part.add + '</b>'; //<ins>
      } else {
        leftOut = leftOut + part.text;
        rightOut= rightOut + part.text; 
      }
    }
    return [leftOut, rightOut]
    }

    compareParas(a:number,b:number) {
// uses markUpParaDiff to compare two entire paragraphs. result is an array with two JsonParas
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

    parseVersions() {
      //compile all 9 versions to be viewed, as arrays of html strings
         const comp0_1 = this.compareParas(0,1);
         const comp0_2 = this.compareParas(0,2);
         const comp1_2 = this.compareParas(1,2);

          for (let i in this.versions[0]) {
            this.parsed0[i] = this.parseJsonParaToHtmlPara(this.versions[0][i]);
            this.parsed1[i] = this.parseJsonParaToHtmlPara(this.versions[1][i]);
            this.parsed2[i] = this.parseJsonParaToHtmlPara(this.versions[2][i]);
           this.parsed0_1.left[i] = this.parseJsonParaToHtmlPara(comp0_1.left[i]);
            this.parsed0_1.right[i] = this.parseJsonParaToHtmlPara(comp0_1.right[i]);
           this.parsed0_2.left[i] = this.parseJsonParaToHtmlPara(comp0_2.left[i]);
            this.parsed0_2.right[i] = this.parseJsonParaToHtmlPara(comp0_2.right[i]);
           this.parsed1_2.left[i] = this.parseJsonParaToHtmlPara(comp1_2.left[i]);
            this.parsed1_2.right[i] = this.parseJsonParaToHtmlPara(comp1_2.right[i]);

}
    }



}



 


