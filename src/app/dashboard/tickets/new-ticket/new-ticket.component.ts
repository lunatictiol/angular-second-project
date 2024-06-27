import { Component } from '@angular/core';
import { InputComponent } from "../../../shared/control/input.component";
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
    selector: 'app-new-ticket',
    standalone: true,
    templateUrl: './new-ticket.component.html',
    styleUrl: './new-ticket.component.css',
    imports: [InputComponent,
  ButtonComponent 
    ]
})
export class NewTicketComponent {

}
