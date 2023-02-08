import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  yr: any

  ngOnInit(){
    
  }
  
  getYear(){
    this.yr = new Date()

    console.log(this.yr)
  }
}
