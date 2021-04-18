import { Component, OnInit , Input} from '@angular/core';
import { SharedService } from '../../../shared.service';

@Component({
  selector: 'app-add-edit-w-s',
  templateUrl: './add-edit-w-s.component.html',
  styleUrls: ['./add-edit-w-s.component.css']
})
export class AddEditWSComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() womensh: any;
  WomenShoesID: string;
  WomenShoesName: string;
  WomenShoesPrice: string;
  WomenShoesQuantity: string;
  WomenShoesPhoto: string;
  WomenFilePhoto: string;

  ngOnInit(): void {
    this.WomenShoesID = this.womensh.WomenShoesID;
    this.WomenShoesName = this.womensh.WomenShoesName;
    this.WomenShoesPrice = this.womensh.WomenShoesPrice;
    this.WomenShoesQuantity = this.womensh.WomenShoesQuantity;
    this.WomenShoesPhoto = this.womensh.WomenShoesPhoto;
    this.WomenFilePhoto = this.service.PhotoUrl + this.WomenFilePhoto;
  }

  addWomenShoes(){
    var val = {WomenShoesID: this.WomenShoesID,
      WomenShoesName: this.WomenShoesName,
      WomenShoesPrice: this.WomenShoesPrice,
      WomenShoesQuantity: this.WomenShoesQuantity,
      WomenShoesPhoto: this.WomenShoesPhoto
    };
    this.service.addWomenShoes(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateWomenShoes(){
    var val = {WomenShoesID: this.WomenShoesID,
      WomenShoesName: this.WomenShoesName,
      WomenShoesPrice: this.WomenShoesPrice,
      WomenShoesQuantity: this.WomenShoesQuantity,
      WomenShoesPhoto: this.WomenShoesPhoto
    };
    this.service.updateWomenShoes(val).subscribe(res => {
      alert(res.toString());
    });
  }

  uploadWomenPhoto(event){
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.UploadWomenShoesPhoto(formData).subscribe((data: any) => {
      this.WomenShoesPhoto = data.toString();
      this.WomenFilePhoto = this.service.PhotoUrl + this.WomenShoesPhoto;
    });
  }

}
