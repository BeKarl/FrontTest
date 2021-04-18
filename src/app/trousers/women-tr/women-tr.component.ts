/* tslint:disable:quotemark */
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-women-tr',
  templateUrl: './women-tr.component.html',
  styleUrls: ['./women-tr.component.css']
})
export class WomenTrComponent implements OnInit {

  constructor(private service: SharedService) { }

  WomenTrousersList: any[];
  Modaltitle: string;
  ActivateAddEditWomenTrComp: boolean = false;
  womentr: any;

  ngOnInit(): void {
    this.refreshWomenTrList();
  }
  addClick(){
    this.womentr = {
      WomenTrousersID: 0,
      WomenTrousersName: '',
      WomenTrousersPrice: '',
      WomenTrousersQuantity: 0,
      WomenTrousersPhoto: 'anonymous.png'
    };
    this.Modaltitle = "Add New Trousers";
    this.ActivateAddEditWomenTrComp = true;
  }

  closeClick(){
    this.ActivateAddEditWomenTrComp = false;
    this.refreshWomenTrList();
  }

  editClick(item){
    this.womentr = item;
    this.Modaltitle = "Edit Clothes Information";
    this.ActivateAddEditWomenTrComp = true;
  }
  // tslint:disable-next-line:typedef
  deleteClick(item){
    if (confirm('Are you sure??')){
      this.service.deleteWomenTrousers(item.WomenTrousersID).subscribe(data => {
        alert(data.toString());
        this.refreshWomenTrList();
      });
    }
  }
  refreshWomenTrList(){
    this.service.getWomenTrousersList().subscribe(data => {
      this.WomenTrousersList = data;
    });
  }

}
