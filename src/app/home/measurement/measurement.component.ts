import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserProfile} from '../../model/user-profile';
import {Router} from '@angular/router';
import {Measurement} from '../../model/measurement';
import {UserProfileServiceService} from '../../service/user-profile-service.service';

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.css']
})
export class MeasurementComponent implements OnInit {

  users: UserProfile[];
  selectedUser: UserProfile;
  insertMode = false;
  newMeasurement = new Measurement();

  @ViewChild('input1') input1: ElementRef;




  constructor(private router: Router, private userProfileService: UserProfileServiceService) {
  }

  ngOnInit() {
    this.router.navigate(['/home/measurement',{ outlets: { extra: [ 'screening' ] }}]);
    this.userProfileService.getUsers().subscribe(users => {
        this.users = users;
        this.selectedUser = this.users[0];
        console.log('got users');
      }
    )
    ;

  }

  startInsertMode() {
    this.newMeasurement = Object.assign({}, this.selectedUser.measurements[0]);

    this.insertMode = true;
    setTimeout(() => {
      this.input1.nativeElement.focus();
    }, 100);
  }

}
