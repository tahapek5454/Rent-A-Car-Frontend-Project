import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color/color';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors : Color[] = []
  currentColor : Color
  statusAllColoButton = false

  constructor(private colorService:ColorService){}

  ngOnInit(): void {
    this.getColors()
  }



  changeStatusAllColorButton(){
    this.statusAllColoButton = !this.statusAllColoButton
    this.currentColor={
      id:0,
      name:""
    }
  }

  setCurrentColor(color:Color){
    this.currentColor = color
  }

  getCurrentColor(color?: Color){
    
    if(this.currentColor == color) {
      this.statusAllColoButton = false
      return "list-group-item list-group-item-action active"}

    else return "list-group-item list-group-item-action"
  }




  getColors(){
    this.colorService.getColors().subscribe(response =>{
      this.colors = response.data
    })
  }

}
