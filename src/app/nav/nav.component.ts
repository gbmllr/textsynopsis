import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
	public modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

public openModal(template: TemplateRef<any>) {
	this.modalRef = this.modalService.show(template);
}

  ngOnInit() {
  }

}
