import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  random = Math.random()
  ngOnInit(){
   setInterval(()=>{
    if(this.random <0.5){
      this.currentStatus = 'offline'
    }
    else if (this.random <0.9){
      this.currentStatus = 'online'
    }
    else{
      this.currentStatus = 'unknown'
    }
    
   },5000)
  }
}
