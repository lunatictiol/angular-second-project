import { Component, ElementRef, EventEmitter, output, Output, ViewChild } from '@angular/core';
import { InputComponent } from "../../../shared/control/input.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-new-ticket',
    standalone: true,
    templateUrl: './new-ticket.component.html',
    styleUrl: './new-ticket.component.css',
    imports: [InputComponent,
  ButtonComponent ,FormsModule
    ]
})
export class NewTicketComponent {

@ViewChild('form') form?:ElementRef<HTMLFormElement>
title=''
request=''
//private form = viewChild.required<ElementRef<HTMLFormElement>>()
//@Output() add = new EventEmitter()

add = output<{title:string,request:string}>()
onSubmit() {
this.add.emit({
  title:this.title,
  request:this.request
})
this.form?.nativeElement.reset()
}

}
