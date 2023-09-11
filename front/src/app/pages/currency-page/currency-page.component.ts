import {Component} from '@angular/core';
import {ServiceService} from '../../services/service.service';
import {ResponseModel} from '../model/ResponseModel';
import {HttpErrorResponse} from '@angular/common/http';
import {CurrentDTO} from '../model/CurrentDTO';
import {Chart} from "chart.js/auto";


@Component({
  selector: 'app-currency-page',
  templateUrl: './currency-page.component.html',
  styleUrls: ['./currency-page.component.css'],
})
export class CurrencyPageComponent {
  response: any;

  public currencyDTOS: CurrentDTO[] | null = [];
  public sendList: CurrentDTO[] |any= [];
  public check: CurrentDTO[] = [];
  startDate: Date | any;
  endDate: Date | any;
  localDate = new Date('2023-9-07')
  profitLose: { [key: string]: number } = {};
  public firstChart: any;
  public combinedCanvas: any;
  public secondChart: any;
  public firstName: any;
  public secondName: any;
  public ww: any;


  constructor(private service: ServiceService) {

    console.log(this.localDate)
    this.getPage();


  }


  public getPage(): void {
    console.log('getHomePage');
    this.service.getCurrencyPage().subscribe(
      (response: ResponseModel) => {
        this.response = response;


        if (response.currencyDTOs) {
          this.currencyDTOS = response.currencyDTOs.map((item) => ({
            ...item,
            isSelected: false,
            // isSelected'i varsayılan olarak false ayarla
          }));


        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getComparePage(): void {
    console.log('getHomePage');
    if (this.response) {
      this.service.getComparePageValue(this.response).subscribe(
        (response: ResponseModel) => {
          this.response = response;
          this.profitLose = response.profitAndLose;
          this.createFirsChart();
          this.createSecondChart();
          this.createCombine()
          this.ww = "/";


        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

  }

  getCompare() {
    if (this.sendList.length <= 1) {
      alert('SELECT NOT BE NULL OR EMPTY PLEASE SELECT YOUR EXCHANGE RATE ')
    } else {
      console.log(this.localDate)
      if (
        this.startDate !== null &&
        this.endDate !== null &&
        this.startDate <= this.endDate
        // this.endDate < this.localDate


      ) {
        if (this.response !== undefined && this.response !== null) {

          const lent = this.sendList.length;


          if (lent > 0) {
            this.response.endDate = new Date(this.startDate); // Tarihleri ayarlamak için yeni bir tarih oluşturuyoruz.
            this.response.startDate = new Date(this.endDate);
            this.response.oznakaFirs = this.sendList[lent - 2].oznaka;
            this.firstName = this.sendList[lent - 2].oznaka;
            this.response.oznakaSecont = this.sendList[lent - 1].oznaka;
            this.secondName = this.sendList[lent - 1].oznaka

            this.sendList[lent - 2].isSelected = false;
            this.sendList[lent - 1].isSelected = false;


            this.getComparePage();

            this.sendList[lent - 2].isSelected = false;

            this.sendList = this.check;

          } else {
            alert('Date Exceptions')

          }
        } else {
          alert('Date Exceptions')
        }
      } else {
        alert('Date Exceptions')

      }
    }


  }


  addSelected(item: CurrentDTO) {
    const lent = this.sendList.length;
    let poppedItem: CurrentDTO | undefined; // poppedItem değişkenini tanımlayın ve başlangıçta undefined olarak ayarlayın

    if (lent >= 2) {
      poppedItem = this.sendList.pop();
      if (poppedItem) {
        poppedItem.isSelected = false;
        this.sendList.push(item)
        console.log(this.sendList);
      }
    } else {
      this.sendList.push(item);
      this.sendList[lent].isSelected = false;
      console.log(this.sendList);
    }

  }


  protected readonly Object = Object;

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

  createFirsChart() {
    this.firstChart = new Chart('first', {
      type: 'line',
      data: {
        labels: Object.keys(this.response.firstGraph),
        datasets: [
          {
            label: '# of Votes',
            data: Object.values(this.response.firstGraph),
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  createSecondChart() {
    this.secondChart = new Chart('second', {
      type: 'line',
      data: {
        labels: Object.keys(this.response.secondGraph),
        datasets: [
          {
            label: '# of Votes',
            data: Object.values(this.response.secondGraph),
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  createCombine() {
    this.combinedCanvas = new Chart("combinedChart", {
      type: 'bar',
      data: {
        labels: Object.keys(this.response.firstGraph),
        datasets: [
          {
            label: 'First Graph',
            data: Object.values(this.response.firstGraph),
            borderWidth: 1,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
          },
          {
            label: 'Second Graph',
            data: Object.values(this.response.secondGraph),
            borderWidth: 1,
            borderColor: 'rgba(255, 99, 132, 1)',
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });


  }


}
