import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello World';
  imgUrl="../assets/BL_logo_square_jpg.jpg";
  url="https://www.bridgelabz.com";

  ngOnInit(): void{
    this.title="Hello from BridgeLab.";
  }


  onClick($event:Event){
      console.log("Save Button is clicked!", $event);
      window.open(this.url,"_blank");
    }
  }

