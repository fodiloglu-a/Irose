import { Component } from '@angular/core';
import {ResponseModel} from "../../model/ResponseModel";
import {ServiceService} from "../../../services/service.service";
import {Chart} from "chart.js/auto";

@Component({
  selector: 'app-month-graph',
  templateUrl: './month-graph.component.html',
  styleUrls: ['../weakGraph/grapgs.component.css']
})
export class MonthGraphComponent   {


  data: ResponseModel | null = null;
  public chartBar: any;
  public chartLine: any;
  public chartBubble: any;
  title:any
  public monthGrap: { [p: number]: string } = {}; // Hafta grafiği verisi
  showChart: any;
  oznaka:any;

  constructor(private service:ServiceService) {

    this.oznaka='';
    this.title="COMPARE TO MONTH"


  }






  fetchData() {
    const oznaka = this.oznaka; // Replace with the oznaka value you want to fetch
    this.service.getModelByOznaka(oznaka).subscribe((response) => {
      this.data = response;
      console.log("Reuquestte")
      this.monthGrap=response.monthGraph;
      this.createBarCart();
      this.createBubbleChart();
      this.createLineChart();

      //console.log(response.weekGraph[1])
      console.log(this.monthGrap[1])
    });
  }


  listenClick(oznaka: string) {


    if (this.chartBar ) {
      this.chartBar.destroy();
    }
    if (this.chartLine ) {
      this.chartLine.destroy();
    }
    if (this.chartBubble ) {
      this.chartBubble.destroy();
    }
    this.oznaka=oznaka;
    this.fetchData();
    console.log('Oznaka:', oznaka);
  }



  createBarCart(){
    this.chartBar = new Chart('monthBar', {
      type: 'bar',
      data: {
        labels:Object.keys(this.monthGrap),// Hafta sayıları
        datasets: [
          {
            label: '# of Votes',
            data: Object.values(this.monthGrap), // Haftalık veriler
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
  createLineChart(){
    this.chartLine = new Chart('monthLine', {
      type: 'line',
      data: {
        labels:Object.keys(this.monthGrap),// Hafta sayıları
        datasets: [
          {
            label: '# of Votes',
            data: Object.values(this.monthGrap), // Haftalık veriler
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
  createBubbleChart(){
    this.chartBubble = new Chart('monthBubble', {
      type: 'bubble',
      data: {
        labels:Object.keys(this.monthGrap),// Hafta sayıları
        datasets: [
          {
            label: '# of Votes',
            data: Object.values(this.monthGrap), // Haftalık veriler
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
}
