import { Component } from '@angular/core';
import { BoatService } from './services/boat.service';
 

 interface boat {name: string, description: string, weight: string, date: string, owner: string};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName:string="Pierre";

  inputName:string = "";
  inputDescri:string = "";
  inputWeight:string = "";
  inputCreationDate:string = "";

  boats:Array<boat> = [];

  constructor(private boatService:BoatService) {
  	
  }

  ngOnInit(): void {
    this.getAllBoats();
  }

  private getAllBoats(){
      this.boats = [];
      this.boatService.getAllBoats().subscribe(boatsList => {
            
            boatsList.map(item => this.boats.push(item));
  		      //console.log(boatsList);
  	  });
  }

  private deleteBoat(event){
  }

  private onKeyName(event){
    this.inputName = event.target.value;
    //console.log(this.inputName);
  }

  private onKeyDescri(event){
    this.inputDescri = event.target.value;
    //console.log(this.inputDescri);
  }

  private onKeyWeight(event){
    this.inputWeight = event.target.value;
    //console.log(this.inputWeight);
  }

  private onKeyDate(event){
    this.inputCreationDate = event.target.value;
    //console.log(this.inputCreationDate);
  }


  private addBoat(event){
      
      let boat : boat = {name:this.inputName,description:this.inputDescri,weight:this.inputWeight.toString(),date:this.inputCreationDate,owner:this.userName};
      console.log(boat);

      this.boatService.addBoats(boat).subscribe(info => {
  		      //console.log(info);
            //Update List
            this.getAllBoats();
  	  });

  }
  

}
