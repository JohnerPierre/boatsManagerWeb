import { Component } from '@angular/core';
import { ListsComponent } from './lists/lists.component';

import { UserService } from './services/user.service';

 interface user {name: string, password: string, userName: string};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ifLogin:boolean=false;
  ifRegister:boolean=false;

  registerName:string="";
  registerUserName:string="";
  registerPw:string="";
  registerPw2:string="";
  registerError:string="";

  loginUser:string="";
  passwordUser:string="";
  loginError:string="";

  name:string="";

  constructor(private userService:UserService) {
  }

  ngOnInit(): void {
  }

  private register():void{
   this.ifRegister = true;
  }

  private onKeyName(event){
      this.registerName = event.target.value;
  }

  private onKeyPw(event){
      this.registerPw = event.target.value;
  }

  private onKeyPw2(event){
      this.registerPw2 = event.target.value;
  }

  private onKeyUserName(event){
      this.registerUserName = event.target.value;
  }

  private onKeyLogin(event){
      this.loginUser = event.target.value;
  }

  private onKeyPwLog(event){
      this.passwordUser = event.target.value;
  }

  private addUser(){
      let user:user = {name: this.registerName, password:this.registerPw, userName: this.registerUserName};

      this.userService.checkUser(user.userName).subscribe(result => {
        console.log(result);
        if(typeof result.data[0] === 'undefined') {
          if(this.registerPw == this.registerPw2){
              this.userService.addUser(user).subscribe(info => {
                    this.registerError = "";
                    this.registerName="";
                    this.registerUserName="";
                    this.registerPw="";
                    this.registerPw2=""
                    this.ifRegister = false;           
          });
          } else{
              this.registerError = "Not Same password";
          }  
        } else {
          this.registerError = "User Name Already Taken";
        }
  	});
  }

  private login(){
     let user:user = {name: "", password:this.passwordUser, userName: this.loginUser};

     this.userService.checkUser(user.userName).subscribe(result => {
        if(typeof result.data[0] === 'undefined') {
            this.loginError="User don't exist";
        }else{
          console.log(result);
            this.ifLogin=true;
            this.name = result.data[0].name;
        }
     });
  }

  private logout(){
    this.ifLogin=false;
    this.name="";
  }

 
}
