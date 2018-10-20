import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserProfile} from '../../model/user-profile';
import {Router} from '@angular/router';
import {Measurement} from '../../model/measurement';
import {UserProfileServiceService} from '../../service/user-profile-service.service';
import {jqxChartComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {SchedulerComponent} from '../scheduler/scheduler.component';
import {AnamnesisComponent} from '../profile/extra/anamnesis/anamnesis.component';
import {PricingComponent} from '../pricing/pricing.component';


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
  bsModalRef: BsModalRef;


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

  constructor(private router: Router, private userProfileService: UserProfileServiceService, private modalService: BsModalService) {
    this.today = new Date();
    this.today.setHours(0);
  }

  ngOnInit() {
    this.isTrainer = localStorage.getItem('isTrainer') === 'true';


    this.router.navigate(['/home/measurement', {outlets: {extra: ['anamnesis']}}]);

    this.userProfileService.getUsers().subscribe(users => {
        this.users = users;
        if (this.isTrainer) {
          this.selectedUser = this.users[0];
        } else {
          this.selectedUser = this.users[6];

        }
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

  deleteByIndex(i) {
    this.selectedUser.measurements.splice(i, 1);
    this.chartMeasurements = this.selectedUser.measurements.slice().reverse();

    this.myChart.update();

  }


  onSelect(user: UserProfile) {
    if (this.isTrainer == false) {
      return;
    }
    this.selectedUser = user;
    this.chartMeasurements = this.selectedUser.measurements.slice().reverse();

  }

  getBMI(): number {
    const bmi = 0;

    try {
      // @ts-ignore
      bmi = parseFloat(this.selectedUser.measurements[0].weight / ((this.selectedUser.height / 100) * (this.selectedUser.height / 100))).toFixed(2);
    } catch (e) {
      console.log(e);
    }

    return bmi;

  }

  getBMR(): number {
    // For men:	BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(y) + 5
    // For women:	BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(y) - 16
    try {
      if (this.selectedUser.gender === 'Male') {
        return Math.floor(10 * this.selectedUser.measurements[0].weight + 6.25 * this.selectedUser.height - 5 * this.selectedUser.age + 5);
      }
      else {
        return Math.floor(10 * this.selectedUser.measurements[0].weight + 6.25 * this.selectedUser.height - 5 * this.selectedUser.age + 5);

      }
    } catch (e) {
      console.log(e);
    }

    return 0;
  }


  openModalWithComponent() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.modalService.show(PricingComponent, {class: 'modal-lg'});


    //this.bsModalRef = this.modalService.show(PricingComponent, {initialState});

    this.bsModalRef.content.closeBtnName = 'Close';
  }


}
