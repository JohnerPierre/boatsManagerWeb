import { Component } from '@angular/core';
import { BoatService } from './services/boat.service';
 

 interface boats {name: string, description: string, wight: number, date: string, owner: string};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  boat:BoatService;
  var: string = "blo";

  boats:Array<boats> = [];

  constructor(private boatService:BoatService) {
  	
  }

  ngOnInit(): void {
    this.test();
  }

  private test(){
    let bookData = {
        name: "String",
		    description: "String",
		    weight: 5,
		    date: "String",
		    owner: "String"
      }
      /*
      this.boatService.addBoats(bookData).subscribe(bookList => {
  		      console.log(this.boats);
  	  });*/
      
      this.boatService.getAllBoats().subscribe(boatsList => {
            
            boatsList.map(item => this.boats.push(item));

  		      console.log(boatsList);
  	  });
  }
  

}
