import { Component, DestroyRef, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit
//,OnDestroy 
{
  //currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private destroyRef=inject(DestroyRef)
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online')
  random = Math.random()

  private interval?:ReturnType<typeof setInterval>
  ngOnInit(){
   this.interval = setInterval(()=>{
    if(this.random <0.5){
      this.currentStatus.set( 'offline')
    }
    else if (this.random <0.9){
      this.currentStatus.set('online')
    }
    else{
      this.currentStatus.set('unknown')
    }
    
   },5000)
   this.destroyRef.onDestroy(()=>{
    clearInterval(this.interval)
   })
  }
  // ngOnDestroy(){
  //   clearTimeout(this.interval)

  // }
}
