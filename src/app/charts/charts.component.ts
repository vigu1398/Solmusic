import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../Chart 2.3.2 GA - Stable/canvasjs.min';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit
{

  constructor()
  {

  }

  ngOnInit(): void
  {
    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      // title:
      // {
      //   text: "Yearly Tours"
      // },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 450, name: "India" },
          { y: 120, name: "USA" },
          { y: 300, name: "London" },
          { y: 800, name: "Paris" },
          { y: 150, name: "Singapore" },
          { y: 150, name: "Sydney"},
          { y: 250, name: "Others" }
        ]
      }]
    });

    chart.render();
  }

}
