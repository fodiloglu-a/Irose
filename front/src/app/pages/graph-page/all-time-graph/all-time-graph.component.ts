import { Component } from '@angular/core';
import {ResponseModel} from "../../model/ResponseModel";
import {ServiceService} from "../../../services/service.service";
import {Chart} from "chart.js/auto";


@Component({
  selector: 'app-all-time',
  templateUrl: './all-time-graph.component.html',
  styleUrls: ['../weakGraph/grapgs.component.css']
})
export class AllTimeGraphComponent  {


  data: ResponseModel | null = null;
  public chartBar: any;
  public chartLine: any;
  public chartBubble: any;

  public allTime: { [p: number]: string } = {}; // Hafta grafiği verisi

  oznaka:any;
   title: string;

  constructor(private service:ServiceService) {

    this.oznaka='';
    this.title="COMPARE TO ALL TIME"


  }






  fetchData() {
    const oznaka = this.oznaka; // Replace with the oznaka value you want to fetch
    this.service.getModelByOznaka(oznaka).subscribe((response) => {
      this.data = response;
      console.log("Reuquestte")
      this.allTime=response.allTimeGraph;
      this.createBarCart();
      this.createBubbleChart();
      this.createLineChart();

      //console.log(response.weekGraph[1])
      console.log(this.allTime[1])
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
    this.chartBar = new Chart('allBar', {
      type: 'bar',
      data: {
        labels:Object.keys(this.allTime),// Hafta sayıları
        datasets: [
          {
            label: '# of Votes',
            data: Object.values(this.allTime), // Haftalık veriler
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
    this.chartLine = new Chart('allLine', {
      type: 'line',
      data: {
        labels:Object.keys(this.allTime),// Hafta sayıları
        datasets: [
          {
            label: '# of Votes',
            data: Object.values(this.allTime), // Haftalık veriler
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
    this.chartBubble = new Chart('allBubble', {
      type: 'bubble',
      data: {
        labels:Object.keys(this.allTime),// Hafta sayıları
        datasets: [
          {
            label: '# of Votes',
            data: Object.values(this.allTime), // Haftalık veriler
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

