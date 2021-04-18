import { Component, OnInit , Input} from '@angular/core';
import { SharedService } from '../../../shared.service';

@Component({
  selector: 'app-add-edit-men-s',
  templateUrl: './add-edit-men-s.component.html',
  styleUrls: ['./add-edit-men-s.component.css']
})
export class AddEditMenSComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() mensh: any;
  MenShoesID: string;
  MenShoesName: string;
  MenShoesPrice: string;
  MenShoesQuantity: string;
  MenShoesPhoto: string;
  MenFilePhoto: string;

  ngOnInit(): void {
    this.MenShoesID = this.mensh.MenShoesID;
    this.MenShoesName = this.mensh.MenShoesName;
    this.MenShoesPrice = this.mensh.MenShoesPrice;
    this.MenShoesQuantity = this.mensh.MenShoesQuantity;
    this.MenShoesPhoto = this.mensh.MenShoesPhoto;
    this.MenFilePhoto = this.service.PhotoUrl + this.MenFilePhoto;
  }

  addMenShoes(){
    var val = {MenShoesID: this.MenShoesID,
      MenShoesName: this.MenShoesName,
      MenShoesPrice: this.MenShoesPrice,
      MenShoesQuantity: this.MenShoesQuantity,
      MenShoesPhoto: this.MenShoesPhoto
    };
    this.service.addMenShoes(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateMenShoes(){
    var val = {MenShoesID: this.MenShoesID,
      MenShoesName: this.MenShoesName,
      MenShoesPrice: this.MenShoesPrice,
      MenShoesQuantity: this.MenShoesQuantity,
      MenShoesPhoto: this.MenShoesPhoto
    };
    this.service.updateMenShoes(val).subscribe(res => {
      alert(res.toString());
    });
  }

  uploadMenPhoto(event){
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.UploadMenShoesPhoto(formData).subscribe((data: any) => {
      this.MenShoesPhoto = data.toString();
      this.MenFilePhoto = this.service.PhotoUrl + this.MenShoesPhoto;
    });
  }

}
