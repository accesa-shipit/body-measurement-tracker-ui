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

      if (i === 2 || i === 3 || i === 5 || i === 9) {
        this.userProfiles[i].gender = 'Female';

      }


      let measurement = new Measurement();
      measurement = new Measurement();
      measurement.date = new Date();
      measurement.date.setMonth(7);
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
      if (i == 0 || i == 6) {
        this.userProfiles[i].measurements = new Array(3);
      }
      else {
        this.userProfiles[i].measurements = new Array(2);

      }

      this.userProfiles[i].measurements[0] = measurement;

      let measurement2 = new Measurement();


      measurement2.date = new Date();
      measurement2.date.setMonth(4);
      measurement2.bodyFatPercentage = 16;
      measurement2.muscularMassPercentage = 43;
      measurement2.chest = 88;
      measurement2.leftArm = 30;
      measurement2.rightArm = 30;
      measurement2.waist = 74;
      measurement2.hips = 90;
      measurement2.rightThigh = 43;
      measurement2.leftThigh = 43;
      measurement2.leftCalf = 35;
      measurement2.rightCalf = 36;
      measurement2.weight = 65;


      this.userProfiles[i].measurements[1] = measurement2;

      if (i === 0 || i === 6) {


        measurement.date = new Date();
        measurement.date.setMonth(7);
        measurement.bodyFatPercentage = 14;
        measurement.muscularMassPercentage = 43;

        measurement.chest = 92;
        measurement.leftArm = 34;
        measurement.rightArm = 33;
        measurement.waist = 84;
        measurement.hips = 93;
        measurement.rightThigh = 49;
        measurement.leftThigh = 48;
        measurement.leftCalf = 34;
        measurement.rightCalf = 35;
        measurement.weight = 71;

        this.userProfiles[i].measurements[0] = measurement;


        measurement2.date = new Date();
        measurement2.date.setMonth(4);
        measurement2.bodyFatPercentage = 17;
        measurement2.muscularMassPercentage = 41;
        measurement2.chest = 89;
        measurement2.leftArm = 31;
        measurement2.rightArm = 31;
        measurement2.waist = 80;
        measurement2.hips = 94;
        measurement2.rightThigh = 47;
        measurement2.leftThigh = 47;
        measurement2.leftCalf = 34;
        measurement2.rightCalf = 35;
        measurement2.weight = 68;
        this.userProfiles[i].measurements[1] = measurement2;

        let measurement3 = new Measurement();


        measurement3.date = new Date();
        measurement3.date.setMonth(2);
        measurement3.bodyFatPercentage = 16;
        measurement3.muscularMassPercentage = 41;
        measurement3.chest = 89;
        measurement3.leftArm = 30;
        measurement3.rightArm = 30;
        measurement3.waist = 75;
        measurement3.hips = 92;
        measurement3.rightThigh = 46;
        measurement3.leftThigh = 47;
        measurement3.leftCalf = 34;
        measurement3.rightCalf = 35;
        measurement3.weight = 66;
        this.userProfiles[i].measurements[2] = measurement3;
      }

    }
  }

  firstNames = ['Gabriel', 'David', 'Silvia', 'Georgeta', 'Matei', 'Andreea', 'Demo', 'Albert', 'Teodor', 'Liana'];
  lastNames = ['Stelian', 'Adam', 'Vasilescu', 'Negrescu', 'Grigorescu', 'Dumitru', 'Employee', 'Adam', 'Vasile', 'Dalca'];
  images = [
    'http://www.avatarsdb.com/avatars/cardiogram_line.gif',
    'https://avatarfiles.alphacoders.com/153/thumb-153729.jpg',
    'https://avatarfiles.alphacoders.com/998/thumb-99803.gif',
    'https://avatarfiles.alphacoders.com/154/thumb-154654.png',
    'http://www.avatarsdb.com/avatars/fire_01.gif',
    'https://avatarfiles.alphacoders.com/154/thumb-154369.png',
    'http://www.avatarsdb.com/avatars/hi.gif',
    'https://avatarfiles.alphacoders.com/118/thumb-118334.jpg',
    'https://avatarfiles.alphacoders.com/842/thumb-84267.jpg',
    'https://avatarfiles.alphacoders.com/717/thumb-717.gif',
    'https://avatarfiles.alphacoders.com/154/thumb-154205.gif',
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
