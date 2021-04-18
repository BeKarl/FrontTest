/* tslint:disable:typedef */
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-men-shoes',
  templateUrl: './men-shoes.component.html',
  styleUrls: ['./men-shoes.component.css']
})
export class MenShoesComponent implements OnInit {

  constructor(private service: SharedService) { }

  MenShoesList: any[];
  Modaltitle: string;
  ActivateAddEditMenShComp = false;
  mensh: any;

  ngOnInit(): void {
    this.refreshMenShList();
  }
  addClick(){
    this.mensh = {
      MenShoesID: 0,
      MenShoesName: '',
      MenShoesPrice: '',
      MenShoesQuantity: 0,
      MenShoesPhoto: 'anonymous.png'
    };
    this.Modaltitle = 'Add New Clothes';
    this.ActivateAddEditMenShComp = true;
  }

  closeClick(){
    this.ActivateAddEditMenShComp = false;
    this.refreshMenShList();
  }

  editClick(item){
    this.mensh = item;
    this.Modaltitle = 'Edit Clothes Information';
    this.ActivateAddEditMenShComp = true;
  }
  deleteClick(item){
    if (confirm('Are you sure??')){
      this.service.deleteMenShoes(item.MenShoesID).subscribe(data => {
        alert(data.toString());
        this.refreshMenShList();
      });
    }
  }
  refreshMenShList(){
    this.service.getMenShoesList().subscribe(data => {
      this.MenShoesList = data;
    });
  }

}
