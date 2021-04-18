import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-women-clothes',
  templateUrl: './women-clothes.component.html',
  styleUrls: ['./women-clothes.component.css']
})
export class WomenClothesComponent implements OnInit {

  constructor(private service: SharedService) { }

  WomenClothesList: any[];
  Modaltitle: string;
  ActivateAddEditWomenClComp = false;
  womencl: any;

  ngOnInit(): void {
    this.refreshMenClList();
  }
  addClick(){
    this.womencl = {
      WomenClothesID: 0,
      WomenClothesName: '',
      WomenClothesPrice: '',
      WomenClothesQuantity: 0,
      WomenClothesPhoto: 'anonymous.png'
    };
    this.Modaltitle = 'Add New Clothes';
    this.ActivateAddEditWomenClComp = true;
  }

  closeClick(){
    this.ActivateAddEditWomenClComp = false;
    this.refreshMenClList();
  }

  editClick(item){
    this.womencl = item;
    this.Modaltitle = 'Edit Clothes Information';
    this.ActivateAddEditWomenClComp = true;
  }
  deleteClick(item){
    if (confirm('Are you sure??')){
      this.service.deleteWomenClothes(item.WomenClothesID).subscribe(data => {
        alert(data.toString());
        this.refreshMenClList();
      });
    }
  }
  refreshMenClList(){
    this.service.getWomenClothesList().subscribe(data => {
      this.WomenClothesList = data;
    });
  }

}
