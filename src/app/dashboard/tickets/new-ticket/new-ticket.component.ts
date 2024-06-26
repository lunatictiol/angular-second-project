import { Component } from '@angular/core';
import { InputComponent } from "../../../shared/control/input.component";

@Component({
    selector: 'app-new-ticket',
    standalone: true,
    templateUrl: './new-ticket.component.html',
    styleUrl: './new-ticket.component.css',
    imports: [InputComponent]
})
export class NewTicketComponent {

}
