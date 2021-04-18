/* tslint:disable:typedef */
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-men-clothes',
  templateUrl: './men-clothes.component.html',
  styleUrls: ['./men-clothes.component.css']
})
export class MenClothesComponent implements OnInit {

  constructor(private service: SharedService) { }

  MenClothesList: any[];
  Modaltitle: string;
  ActivateAddEditMenClComp = false;
  mencl: any;

  ngOnInit(): void {
    this.refreshMenClList();
  }
  addClick(){
    this.mencl = {
      MenClothesID: 0,
      MenClothesName: '',
      MenClothesPrice: '',
      MenClothesQuantity: 0,
      MenClothesPhoto: 'anonymous.png'
    };
    this.Modaltitle = 'Add New Clothes';
    this.ActivateAddEditMenClComp = true;
  }

  closeClick(){
    this.ActivateAddEditMenClComp = false;
    this.refreshMenClList();
  }

  editClick(item){
    this.mencl = item;
    this.Modaltitle = 'Edit Clothes Information';
    this.ActivateAddEditMenClComp = true;
  }
  deleteClick(item){
    if (confirm('Are you sure??')){
      this.service.deleteMenClothes(item.MenClothesID).subscribe(data => {
        alert(data.toString());
        this.refreshMenClList();
      });
    }
  }
  refreshMenClList(){
    this.service.getMenClothesList().subscribe(data => {
      this.MenClothesList = data;
    });
  }

}
