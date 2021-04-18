import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-men-tr',
  templateUrl: './men-tr.component.html',
  styleUrls: ['./men-tr.component.css']
})
export class MenTrComponent implements OnInit {

  constructor(private service: SharedService) { }

  MenTrousersList: any[];
  Modaltitle: string;
  ActivateAddEditMenTrComp = false;
  mentr: any;

  ngOnInit(): void {
    this.refreshMenTrList();
  }
  addClick(){
    this.mentr = {
      MenTrousersID: 0,
      MenTrousersName: '',
      MenTrousersPrice: '',
      MenTrousersQuantity: 0,
      MenTrousersPhoto: 'anonymous.png'
    };
    this.Modaltitle = 'Add New Trousers';
    this.ActivateAddEditMenTrComp = true;
  }

  closeClick(){
    this.ActivateAddEditMenTrComp = false;
    this.refreshMenTrList();
  }

  editClick(item){
    this.mentr = item;
    this.Modaltitle = 'Edit Clothes Information';
    this.ActivateAddEditMenTrComp = true;
  }
  deleteClick(item){
    if (confirm('Are you sure??')){
      this.service.deleteMenShoes(item.MenTrousersID).subscribe(data => {
        alert(data.toString());
        this.refreshMenTrList();
      });
    }
  }
  refreshMenTrList(){
    this.service.getMenTrousersList().subscribe(data => {
      this.MenTrousersList = data;
    });
  }

}
