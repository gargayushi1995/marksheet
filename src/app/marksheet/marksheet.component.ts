import { Component, OnInit,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.css']
})
export class MarksheetComponent implements OnInit {
  constructor() { }
  data : any;
  total : number;
  avg : number;
  a : string;
  public pieChartLabels:string[] = ['Correct Answers', 'Incorrect Answers'];
  public pieChartData:number[] = [];
  public pieChartType:string = 'pie';
  

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('userdata'));
    console.log(this.data);
     this.total=0;
   this.avg = 0;
    for(let i=0; i< this.data.length; i++){
      this.total= this.total + this.data[i].score;
    }
    this.avg=this.total/10;
    console.log(this.total)
    console.log(this.avg);
    this.pieChartData.push(this.avg);
    this.pieChartData.push(10-this.avg);
    // > 80 - Grade A
    // > 60 - Grade B
    // > 40 - Grade C
    // < 40 - Not Qualified
    if(this.total > 80){
      console.log(this.a = "Grade A")
    }else
    if(this.total > 60){
      console.log(this.a = "Grade B")
    }else
    if(this.total > 40){
      console.log(this.a = "Grade C")
    }else
    if(this.total < 40){
      console.log(this.a = "Not Qualified")
    }

   
  }
  
}



