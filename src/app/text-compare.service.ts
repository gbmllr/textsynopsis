import { Injectable } from '@angular/core';

import * as wordDiff from 'word-diff';
import { JsonPara } from './JsonPara';

@Injectable()
export class TextCompareService {

  constructor() { }

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



    public compareParas(aVersion: JsonPara[], bVersion: JsonPara[]) {
	// takes two arrays of JsonParas, outputs two arrays of JsonParas
	//
    let leftVsRight = [];
    let rightVsLeft = [];

  for (let i in aVersion) {

  	let leftVsRightPara = new JsonPara();
  	let rightVsLeftPara = new JsonPara();

    [leftVsRightPara.title, rightVsLeftPara.title] = this.markUpParaDiff(aVersion[i]['title'], bVersion[i]['title']) ;
    [leftVsRightPara.subtitle, rightVsLeftPara.subtitle] = this.markUpParaDiff(aVersion[i]['subtitle'], bVersion[i]['subtitle']) ;
    [leftVsRightPara.paranumber, rightVsLeftPara.paranumber] = this.markUpParaDiff(aVersion[i]['paranumber'], bVersion[i]['paranumber']) ;
    [leftVsRightPara.content, rightVsLeftPara.content] = this.markUpParaDiff(aVersion[i]['content'], bVersion[i]['content']) ;
    [leftVsRightPara.anmerkung, rightVsLeftPara.anmerkung] = this.markUpParaDiff(aVersion[i]['title'], bVersion[i]['title']) ;
    
    leftVsRight.push(leftVsRightPara);
    rightVsLeft.push(rightVsLeftPara);
  }
    return [leftVsRight, rightVsLeft]
    }


}
