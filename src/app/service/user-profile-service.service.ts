import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {UserProfile} from '../model/user-profile';
import {Measurement} from '../model/measurement';

@Injectable({
  providedIn: 'root'
})
export class UserProfileServiceService {
  let;
  userProfiles: UserProfile[];

  constructor() {
    this.userProfiles = new Array(10);

    for (let i = 0; i < 10; i++) {
      this.userProfiles[i] = new UserProfile();
      this.userProfiles[i].name = this.firstNames[i] + ' ' + this.lastNames[i];
      this.userProfiles[i].profileImage = this.images[i]; // UserProfileServiceService.randomEl(this.images);
      this.userProfiles[i].age = this.randomIntFromInterval(23, 30);
      this.userProfiles[i].height = 177;
      this.userProfiles[i].gender = 'Male';


      const measurement = new Measurement();
      measurement.date = new Date();
      measurement.bodyFatPercentage = 16;
      measurement.muscularMassPercentage = 42;

      measurement.chest = 88;
      measurement.leftArm = 30;
      measurement.rightArm = 30;
      measurement.waist = 74;
      measurement.hips = 89;
      measurement.rightThigh = 43;
      measurement.leftThigh = 43;
      measurement.leftCalf = 35;
      measurement.rightCalf = 36;
      measurement.weight = 63;

      this.userProfiles[i].measurements = new Array(2);
      this.userProfiles[i].measurements[0] = measurement;

      let measurement2 = new Measurement();
      measurement2.date = new Date();
      measurement2.bodyFatPercentage = 16;
      measurement.muscularMassPercentage = 43;
      measurement2.chest = 88;
      measurement2.leftArm = 30;
      measurement2.rightArm = 30;
      measurement2.waist = 74;
      measurement.hips = 90;
      measurement2.rightThigh = 43;
      measurement2.leftThigh = 43;
      measurement2.leftCalf = 35;
      measurement2.rightCalf = 36;
      measurement2.weight = 65;
      this.userProfiles[i].measurements[1] = measurement2;


    }
  }

  firstNames = ['Gabriel', 'David', 'Silvia', 'Georgeta', 'Matei', 'Andreea', 'Demo', 'Albert', 'Teodor', 'Liana'];
  lastNames = ['Stelian', 'Adam', 'Vasilescu', 'Negrescu', 'Grigorescu', 'Dumitru', 'Employee', 'Adam', 'Vasile', 'Dalca'];
  images = ['http://www.avatarsdb.com/avatars/hi.gif',
    'http://www.avatarsdb.com/avatars/cardiogram_line.gif',
    'http://www.avatarsdb.com/avatars/fire_01.gif',
    'https://avatarfiles.alphacoders.com/154/thumb-154205.gif',
    'https://avatarfiles.alphacoders.com/154/thumb-154654.png',
    'https://avatarfiles.alphacoders.com/153/thumb-153729.jpg',
    'https://avatarfiles.alphacoders.com/154/thumb-154369.png',
    'https://avatarfiles.alphacoders.com/118/thumb-118334.jpg',
    'https://avatarfiles.alphacoders.com/842/thumb-84267.jpg',
    'https://avatarfiles.alphacoders.com/998/thumb-99803.gif',
    'https://avatarfiles.alphacoders.com/717/thumb-717.gif',
    'https://avatarfiles.alphacoders.com/104/thumb-104026.jpg'];

  static randomEl(list) {
    const i = Math.floor(Math.random() * list.length);
    return list[i];
  }

  getUsers(): Observable<UserProfile[]> {

    return of(this.userProfiles);
  }


  randomIntFromInterval(min, max): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
