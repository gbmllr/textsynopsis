import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { data } from '../../assets/data/natur';

@Injectable()
export class GetJsonService {

  constructor() {}

 list() {
    return Observable.of(data)


  }



}
  // [ 
  // {name: 'Lyon'},
  // {name: 'Los Angeles'},
  // {name: 'Sydney'},
  // {name: 'Tokyo'},
  // {name: 'Casablanca'}
  // ]
  