import { Component, AfterViewInit } from '@angular/core';
import {Chart} from "chart.js/auto";
import {ResponseModel} from "../../model/ResponseModel";
import {ServiceService} from "../../../services/service.service";
import {TmplAstHoverDeferredTrigger} from "@angular/compiler";



@Component({
  selector: 'app-five-year',
  templateUrl: './five-year-graph.component.html',
  styleUrls: ['../weakGraph/grapgs.component.css']
})
export class FiveYearGraphComponent  {


  data: ResponseModel | null = null;
  public chartBar: any;
  public chartLine: any;
  public chartBubble: any;
  title:any

  public fiveYear: { [p: number]: string } = {}; // Hafta grafiği verisi
  showChart: any;
  oznaka:any;

  constructor(private service:ServiceService) {

    this.oznaka='';
    this.title="COMPARE TO FİVE YEAR"


  }






  fetchData() {
    const oznaka = this.oznaka; // Replace with the oznaka value you want to fetch
    this.service.getModelByOznaka(oznaka).subscribe((response) => {
      this.data = response;
      console.log("Reuquestte")
      this.fiveYear=response.fiveYearGraph;
      this.createBarCart();
      this.createBubbleChart();
      this.createLineChart();

      //console.log(response.weekGraph[1])
      console.log(this.fiveYear[1])
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
    this.chartBar = new Chart('fiveBar', {
      type: 'bar',
      data: {
        labels:Object.keys(this.fiveYear),// Hafta sayıları
        datasets: [
          {
            label: '# of Votes',
            data: Object.values(this.fiveYear), // Haftalık veriler
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
    this.chartLine = new Chart('fiveLine', {
      type: 'line',
      data: {
        labels:Object.keys(this.fiveYear),// Hafta sayıları
        datasets: [
          {
            label: '# of Votes',
            data: Object.values(this.fiveYear), // Haftalık veriler
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
    this.chartBubble = new Chart('fiveBubble', {
      type: 'bubble',
      data: {
        labels:Object.keys(this.fiveYear),// Hafta sayıları
        datasets: [
          {
            label: '# of Votes',
            data: Object.values(this.fiveYear), // Haftalık veriler
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

