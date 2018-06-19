import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
 allUser:user[];
  constructor(private apiservice :ApiService) { }

  ngOnInit() {
    this.getrecentUser()
  }
  getrecentUser(){
this.apiservice.all_users().subscribe(data=>{
  this.allUser = data.data;
   console.log(this.allUser);
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
