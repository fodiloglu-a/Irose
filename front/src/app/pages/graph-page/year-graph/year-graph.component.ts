import { Component } from '@angular/core';
import {ResponseModel} from "../../model/ResponseModel";
import {ServiceService} from "../../../services/service.service";
import {Chart} from "chart.js/auto";

@Component({
  selector: 'app-year-graph',
  templateUrl: './year-graph.component.html',
  styleUrls: ['../weakGraph/grapgs.component.css']
})
export class YearGraphComponent  {
  title:any


  data: ResponseModel | null = null;
  public chartBar: any;
  public chartLine: any;
  public chartBubble: any;

  public yearGraph: { [p: number]: string } = {}; // Hafta grafiği verisi
  showChart: any;
  oznaka:any;

  constructor(private service:ServiceService) {

    this.title="COMPARE TO YEAR "
    this.oznaka='';


  }






  fetchData() {
    const oznaka = this.oznaka; // Replace with the oznaka value you want to fetch
    this.service.getModelByOznaka(oznaka).subscribe((response) => {
      this.data = response;
      console.log("Reuquestte")
      this.yearGraph=response.yearGraph;
      this.createBarCart();
      this.createBubbleChart();
      this.createLineChart();

      //console.log(response.weekGraph[1])
      console.log(this.yearGraph[1])
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
    this.chartBar = new Chart('year-bar', {
      type: 'bar',
      data: {
        labels:Object.keys(this.yearGraph),// Hafta sayıları
        datasets: [
          {
            label: '# of Votes',
            data: Object.values(this.yearGraph), // Haftalık veriler
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
    this.chartLine = new Chart('yearLine', {
      type: 'line',
      data: {
        labels:Object.keys(this.yearGraph),// Hafta sayıları
        datasets: [
          {
            label: '# of Votes',
            data: Object.values(this.yearGraph), // Haftalık veriler
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
    this.chartBubble = new Chart('yearBubble', {
      type: 'bubble',
      data: {
        labels:Object.keys(this.yearGraph),// Hafta sayıları
        datasets: [
          {
            label: '# of Votes',
            data: Object.values(this.yearGraph), // Haftalık veriler
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
