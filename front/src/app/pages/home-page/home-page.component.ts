import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ServiceService} from "../../services/service.service";
import {ResponseModel} from "../model/ResponseModel";
import {CurrentDTO} from "../model/CurrentDTO";
import {animate, state, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ],

})
export class HomePageComponent implements OnInit {

  contentList: string[] = [
    'News : For Currency and Currency Rate',

  ];

  public title = "HOME PAGE"
  currentIndex: number = 0;
  currentContent: string = '';
  data: ResponseModel | null = null;


  public currencyDTOS: CurrentDTO[] | null = [];
  pageLoaded: any;


  constructor(private sercice: ServiceService) {


    this.getHomePage()


  }

  ngOnInit(): void {

    setInterval(() => this.pageLoaded = true, 2000);
    this.updateTickerContent();
    setInterval(() => this.updateTickerContent(), 5000);
  }

  updateTickerContent() {

    this.currentContent = this.contentList[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.contentList.length;
  }


  public getHomePage() {
    console.log("getHomePage")
    this.sercice.getHomePage().subscribe(
      (response: ResponseModel) => {
        console.log("this.currencyDTOS=response.currencyDTOs;")
        this.currencyDTOS = response.currencyDTOs;
        this.currencyDTOS?.forEach((item) => {
          this.contentList.push(
            `${item.oznaka} , Exchange Rate: ${item.exchangeRate}`);
        });


      }, (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )

  }

  getRateColor(rateDay: number | null): string {

    const rate = rateDay !== null ? rateDay : 0;

    if (rate < 0) {
      return 'red';
    } else if (rate > 0) {
      return 'green';
    } else {
      return '#F9D401';
    }
  }


}
