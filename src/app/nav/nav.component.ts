import { Component, TemplateRef, OnInit, NgModule } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DataService } from '../../assets/services/data.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
	public modalRef: BsModalRef;
	//message: string;

  constructor(private data: DataService) { 
  	//this.data.changeMessage("bla");
  	//this.changeMessage("blu");

  }



  ngOnInit() {
  	//this.data.currentMessage.subscribe(message => this.message = message)
  	//subscribe to the data service observable
  }

changeMessage() {
  this.data.changeMessage("bla");
}

logMessage() {
	console.log(this.data.currentMessage)
}



}
