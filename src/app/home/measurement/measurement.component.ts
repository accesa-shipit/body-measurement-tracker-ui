import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserProfile} from '../../model/user-profile';
import {Router} from '@angular/router';
import {Measurement} from '../../model/measurement';
import {UserProfileServiceService} from '../../service/user-profile-service.service';
import {jqxChartComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';


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
  chartMeasurements: Measurement[];
  searchVisible = true;
  today: Date;
  isTrainer = false;

  @ViewChild('input1') input1: ElementRef;
  @ViewChild('myChart') myChart: jqxChartComponent;

  // CHART
  sampleData: any[] = [{
    'date': '2018-10-14T09:34:10.842Z',
    'weight': 63
  }, {
    'date': '2018-10-14T09:34:10.842Z',
    'weight': 65
  },
    {
      'date': '2018-10-14T09:34:10.842Z',
      'weight': 65
    }];
  padding: any = {left: 10, top: 10, right: 15, bottom: 10};
  titlePadding: any = {left: 90, top: 0, right: 0, bottom: 10};

  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return '90%';
    }

    return 850;
  }

  xAxis: any =
    {
      dataField: 'test',
      unitInterval: 1,
      tickMarks: {visible: true, interval: 1},
      gridLinesInterval: {visible: true, interval: 1},
      valuesOnTicks: false,
      padding: {bottom: 10}
    };
  valueAxis: any =
    {
      unitInterval: 5,
      minValue: 60,
      maxValue: 68,
      title: {text: 'Weight in kg<br><br>'},
      labels: {horizontalAlignment: 'right'}
    };
  seriesGroups: any[] =
    [
      {
        type: 'line',
        series:
          [
            {
              dataField: 'weight',
              symbolType: 'square',
              labels:
                {
                  visible: true,
                  backgroundColor: '#FEFEFE',
                  backgroundOpacity: 0.2,
                  borderColor: '#7FC4EF',
                  borderOpacity: 0.7,
                  padding: {left: 5, right: 5, top: 0, bottom: 0}
                }
            }

          ]
      }
    ];


  // /CHART

  constructor(private router: Router, private userProfileService: UserProfileServiceService) {
    this.today = new Date();
    this.today.setHours(0);
  }

  ngOnInit() {
    this.router.navigate(['/home/measurement', {outlets: {extra: ['anamnesis']}}]);

    this.userProfileService.getUsers().subscribe(users => {
        this.users = users;
        this.selectedUser = this.users[0];
        console.log('got users');
        this.chartMeasurements = this.selectedUser.measurements.slice().reverse();
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

  insertMeasurement(measurement: Measurement) {
    console.log('inserting measurement');
    this.selectedUser.measurements.unshift(measurement);
    this.selectedUser.updateDate = new Date();
    this.insertMode = false;
    this.chartMeasurements = this.selectedUser.measurements.slice().reverse();
    if (measurement.weight > this.valueAxis.maxValue) {
      this.valueAxis.maxValue = measurement.weight + 2;
    }

    if (measurement.weight < this.valueAxis.minValue) {
      this.valueAxis.minValue = measurement.weight;
    }
    //let data = this.myChart.source();
    //data = this.selectedUser.measurements.reverse();
    this.myChart.update();

  }

  onSelect(user: UserProfile) {
    this.selectedUser = user;
  }

  getBMI(): number {
    return Math.round(this.selectedUser.measurements[0].weight / ((this.selectedUser.height / 100) * (this.selectedUser.height / 100)));


  }

}
