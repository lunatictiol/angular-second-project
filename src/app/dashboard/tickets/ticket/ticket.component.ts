import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
data = input.required<Ticket>()
markComplete = output()
 detailsVisibility = signal<boolean>(false)
ontoggleDetails(){
  this.detailsVisibility.update((isvisible)=>!isvisible)
}
onMarkComplete(){
 this.markComplete.emit() 
}


}