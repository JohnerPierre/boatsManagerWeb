import { Component } from '@angular/core';
import { BoatService } from './services/boat.service';
 

 interface boat {name: string, description: string, weight: string, date: string, owner: string, _id: string};

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

  inputNameUpdate:string = "";
  inputDescriUpdate:string = "";
  inputWeightUpdate:string = "";
  inputCreationDateUpdate:string = "";

  currentIdUpdate:string = "";
  ifUpdate:boolean = false;

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
  	  });
  }

  private updateBoat(boat){
    this.currentIdUpdate = boat._id;
    this.ifUpdate = true;
    this.inputNameUpdate = boat.name;
    this.inputDescriUpdate = boat.description;
    this.inputWeightUpdate = boat.weight;
    this.inputCreationDateUpdate = boat.date;
  }

  private modifiyBoat(id){
    let boat : boat = {name:this.inputNameUpdate,description:this.inputDescriUpdate,weight:this.inputWeightUpdate,date:this.inputCreationDateUpdate,owner:this.userName,_id:this.currentIdUpdate};
      console.log(boat);

      this.boatService.updatedBoat(boat).subscribe(info => {
            console.log(info);
            //Update List
            this.getAllBoats();
            //Flush Old Data
            this.ifUpdate = false;
  	  });
  }

  private deleteBoat(id){
    this.boatService.deletedBoatById(id).subscribe(result => {
  		if(result.success) {
        console.log(result)
        this.getAllBoats();      
      } else {
        alert("Book not successfully deleted");
      }
  	});
  }

  private onKeyName(event){
    if(!this.ifUpdate)
      this.inputName = event.target.value;
    else
      this.inputNameUpdate = event.target.value;
  }

  private onKeyDescri(event){
    if(!this.ifUpdate)
      this.inputDescri = event.target.value;
    else
      this.inputDescriUpdate = event.target.value;
  }

  private onKeyWeight(event){
    if(!this.ifUpdate)
      this.inputWeight = event.target.value;
    else
      this.inputWeightUpdate = event.target.value;
  }

  private onKeyDate(event){ 
    if(!this.ifUpdate)
      this.inputCreationDate = event.target.value;
    else
      this.inputCreationDateUpdate = event.target.value;
  }

  private addBoat(event){
      
      let boat : boat = {name:this.inputName,description:this.inputDescri,weight:this.inputWeight.toString(),date:this.inputCreationDate,owner:this.userName,_id:""};
      //Delete this entry for the database
      delete boat._id;

      this.boatService.addBoats(boat).subscribe(info => {
  		      console.log(info);
            //Update List
            this.getAllBoats();
            //Flush Old Data
            this.inputName= "";
            this.inputDescri= "";
            this.inputWeight = "";
            this.inputCreationDate= "";
  	  });

  }
  

}
