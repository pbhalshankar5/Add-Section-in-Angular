import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  number_value:any;
  array_values:any=[];
  constructor(){}
  ngOnInit(): void {
    
  }
  title = 'Assign3';
  Sec_Header='';
  Sec_Details='';
  displayVal='';
  displayVal1='';
  
getValue(val:string, val1:string)
{
	console.warn(val, val1)
	this.displayVal=val
  this.displayVal1=val1
}
add(){
  console.log(this.number_value)
  this.array_values.push(this.number_value)
}
}
