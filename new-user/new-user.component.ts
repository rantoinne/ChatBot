import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
 newUser:user[];
  constructor(private apiservice :ApiService) { }
  ngOnInit() {

    this.getnewUser()
  }
  getnewUser(){
this.apiservice.new_users().subscribe(data=>{
  this.newUser = data.data;
   console.log(this.newUser);
});
}
}
interface user {
   id:String;
   name:String;
   mobile_number:String;
   created_datetime:String;
   email_id:String;
}
