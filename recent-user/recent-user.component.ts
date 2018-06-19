import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service'
@Component({
  selector: 'app-recent-user',
  templateUrl: './recent-user.component.html',
  styleUrls: ['./recent-user.component.css']
})
export class RecentUserComponent implements OnInit {
 recentUser:user[];
  constructor(private apiservice :ApiService) { }

  ngOnInit() {
  }

}
interface user {
   id:String;
   name:String;
   mobile_number:String;
   created_datetime:String;
   email_id:String;
}
