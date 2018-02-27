import { Component, TemplateRef, OnInit, NgModule } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';




@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
	public modalRef: BsModalRef;


  constructor() { 


  }



  ngOnInit() {

  }

changeMessage() {

}

logMessage() {

}



}
