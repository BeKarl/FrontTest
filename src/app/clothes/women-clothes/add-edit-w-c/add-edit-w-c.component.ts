/* tslint:disable:typedef */
import { Component, OnInit , Input} from '@angular/core';
import { SharedService } from '../../../shared.service';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-add-edit-w-c',
  templateUrl: './add-edit-w-c.component.html',
  styleUrls: ['./add-edit-w-c.component.css']
})
export class AddEditWCComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() womencl: any;
  WomenClothesID: string;
  WomenClothesName: string;
  WomenClothesPrice: string;
  WomenClothesQuantity: string;
  WomenClothesPhoto: string;
  WomenFilePhoto: string;

  ngOnInit(): void {
    this.WomenClothesID = this.womencl.WomenClothesID;
    this.WomenClothesName = this.womencl.WomenClothesName;
    this.WomenClothesPrice = this.womencl.WomenClothesPrice;
    this.WomenClothesQuantity = this.womencl.WomenClothesQuantity;
    this.WomenClothesPhoto = this.womencl.WomenClothesPhoto;
    this.WomenFilePhoto = this.service.PhotoUrl + this.WomenFilePhoto;
  }

  addWomenClothes(){
    var val = {WomenClothesID: this.WomenClothesID,
      WomenClothesName: this.WomenClothesName,
      WomenClothesPrice: this.WomenClothesPrice,
      WomenClothesQuantity: this.WomenClothesQuantity,
      WomenClothesPhoto: this.WomenClothesPhoto
    };
    this.service.addWomenClothes(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateWomenClothes(){
    var val = {WomenClothesID: this.WomenClothesID,
      WomenClothesName: this.WomenClothesName,
      WomenClothesPrice: this.WomenClothesPrice,
      WomenClothesQuantity: this.WomenClothesQuantity,
      WomenClothesPhoto: this.WomenClothesPhoto
    };
    this.service.updateWomenClothes(val).subscribe(res => {
      alert(res.toString());
    });
  }

  // tslint:disable-next-line:typedef
  uploadWomenPhoto(event){
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'multipart/form-data');
    headers = headers.append('enctype', 'multipart/form-data');

    this.service.UploadWomenClothesPhoto(formData, {headers}).subscribe((data: any) => {
      this.WomenClothesPhoto = data.toString();
      this.WomenFilePhoto = this.service.PhotoUrl + this.WomenClothesPhoto;
    });
  }

}
