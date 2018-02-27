import { Injectable } from '@angular/core';


import { JsonPara } from './JsonPara';


@Injectable()
export class JsonToHtmlService {

  constructor() { }
  
  ngOnInit() {


  }


    public parse(jsonPara: JsonPara) {
      //takes a structured json paragraph and transforms it into a html string with appropriate markup
      return  "<h2>" + jsonPara.title + "</h2>\n <h3>" + jsonPara.subtitle +"</h3>\n <p>" + (((jsonPara.paranumber === "" ) || ( jsonPara.paranumber === "<b></b>" )) ? "" : ("§ " + jsonPara.paranumber + ": " + jsonPara.content)) + "</p>\n<p>" + (jsonPara.anmerkung === "" ? "" : "Anmerkung: " + jsonPara.anmerkung) + "</p>";
	}

}
