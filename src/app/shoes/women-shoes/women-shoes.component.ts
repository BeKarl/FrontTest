import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-women-shoes',
  templateUrl: './women-shoes.component.html',
  styleUrls: ['./women-shoes.component.css']
})
export class WomenShoesComponent implements OnInit {

  constructor(private service: SharedService) { }

  WomenShoesList: any[];
  Modaltitle: string;
  ActivateAddEditWomenShComp = false;
  womensh: any;

  ngOnInit(): void {
    this.refreshWomenShList();
  }
  addClick(){
    this.womensh = {
      WomenShoesID: 0,
      WomenShoesName: '',
      WomenShoesPrice: '',
      WomenShoesQuantity: 0,
      WomenShoesPhoto: 'anonymous.png'
    };
    this.Modaltitle = 'Add New Clothes';
    this.ActivateAddEditWomenShComp = true;
  }

  closeClick(){
    this.ActivateAddEditWomenShComp = false;
    this.refreshWomenShList();
  }

  editClick(item){
    this.womensh = item;
    this.Modaltitle = 'Edit Clothes Information';
    this.ActivateAddEditWomenShComp = true;
  }
  deleteClick(item){
    if (confirm('Are you sure??')){
      this.service.deleteWomenShoes(item.WomenShoesID).subscribe(data => {
        alert(data.toString());
        this.refreshWomenShList();
      });
    }
  }
  refreshWomenShList(){
    this.service.getWomenShoesList().subscribe(data => {
      this.WomenShoesList = data;
    });
  }

}
