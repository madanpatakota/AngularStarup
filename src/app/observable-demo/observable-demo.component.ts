import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css'],
})
export class ObservableDemoComponent implements OnInit {
  constructor() {}

  netflex = ['Major', 'Jana', 'VirataParvam', 'Godse'];

  airtelSimProvider = ['10₹', '20₹', '30₹', '40₹'];

  DataSource: any;
  SimDataSource: any;

  myMoviesList: any = [];
  mySimOffersList: any = [];

  myAnularUpdates: any;
  studentUpdates: any = [];

  ngOnInit(): void {
    //from is a observable which contains the data...
    this.DataSource = from(this.netflex);

    this.SimDataSource = from(this.airtelSimProvider);

    //NewOTTPlatfrom =
    //                 ["Major","Jana","VirataParvam","Godse"]

    //NewOTTPlafrom.subscribe()

    this.DataSource.subscribe((value: any) => {
      // i am reeving the updates
      console.log('i am receving the ', value);
      this.myMoviesList.push(value);
    });

    this.SimDataSource.subscribe((value: any) => {
      // i am reeving the updates
      console.log('i am receving the ', value);
      this.mySimOffersList.push(value);
    });

    //airtelSimProvider = ["10₹","20₹","30₹","40₹"]
    let somedata = [
      'AngularBasics',
      'AngularObservables',
      'Angular Forms',
    ];
    
    // this.myAnularUpdates = new Observable<any>((observer) => {
    //   somedata.forEach((x) => {
    //     if (x != null) {
    //       observer.next(x);
    //     } else if (x == null) {
    //       observer.error('Their is some error in the datasource');
    //     }
    //   });
    // });


    this.myAnularUpdates = new Observable<any>((observer) => {
      somedata.forEach((x) => {
         observer.next(x);
      });
    });



    this.myAnularUpdates.subscribe(
      (value: any) => {
        //value i.e. array
        // you are pushing the array in studentsUpdates array.
        let data: Array<string> = value;
        data.forEach((x: any) => {
          this.studentUpdates.push(x);
        });
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  //Netflex

  //let me convert into the observable....
}
