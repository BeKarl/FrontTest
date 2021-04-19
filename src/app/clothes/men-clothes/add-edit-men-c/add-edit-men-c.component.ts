/* tslint:disable:typedef */
import { Component, OnInit , Input} from '@angular/core';
import { SharedService } from '../../../shared.service';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-add-edit-men-c',
  templateUrl: './add-edit-men-c.component.html',
  styleUrls: ['./add-edit-men-c.component.css']
})
export class AddEditMenCComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() mencl: any;
  MenClothesID: string;
  MenClothesName: string;
  MenClothesPrice: string;
  MenClothesQuantity: string;
  MenClothesPhoto: string;
  MenFilePhoto: string;

  ngOnInit(): void {
    this.MenClothesID = this.mencl.MenClothesID;
    this.MenClothesName = this.mencl.MenClothesName;
    this.MenClothesPrice = this.mencl.MenClothesPrice;
    this.MenClothesQuantity = this.mencl.MenClothesQuantity;
    this.MenClothesPhoto = this.mencl.MenClothesPhoto;
    this.MenFilePhoto = this.service.PhotoUrl + this.MenFilePhoto;
  }

  addMenClothes(){
    var val = {MenClothesID: this.MenClothesID,
      MenClothesName: this.MenClothesName,
      MenClothesPrice: this.MenClothesPrice,
      MenClothesQuantity: this.MenClothesQuantity,
      MenClothesPhoto: this.MenClothesPhoto
    };
    this.service.addMenClothes(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateMenClothes(){
    var val = {MenClothesID: this.MenClothesID,
      MenClothesName: this.MenClothesName,
      MenClothesPrice: this.MenClothesPrice,
      MenClothesQuantity: this.MenClothesQuantity,
      MenClothesPhoto: this.MenClothesPhoto
    };
    this.service.updateMenClothes(val).subscribe(res => {
      alert(res.toString());
    });
  }

  // tslint:disable-next-line:typedef
  uploadMenPhoto(event){
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'multipart/form-data');

    this.service.UploadMenClothesPhoto(formData, {headers}).subscribe((data: any) => {
      this.MenClothesPhoto = data.toString();
      this.MenFilePhoto = this.service.PhotoUrl + this.MenClothesPhoto;
    });
  }

}
