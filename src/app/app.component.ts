import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
isLoggedIn :boolean =false;
userInfo :any ={};

constructor(){
  const userData =localStorage.getItem("jobLoginUser");

  if(userData == null){
    this.isLoggedIn = false;
  }
  else{
    this.isLoggedIn = true;
    this.userInfo =JSON.parse(userData)

  }
}
}
