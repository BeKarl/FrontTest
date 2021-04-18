/* tslint:disable:typedef */
import { Component, OnInit , Input} from '@angular/core';
import { SharedService } from '../../../shared.service';

@Component({
  selector: 'app-add-edit-w-t',
  templateUrl: './add-edit-w-t.component.html',
  styleUrls: ['./add-edit-w-t.component.css']
})
export class AddEditWTComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() womentr: any;
  WomenTrousersID: string;
  WomenTrousersName: string;
  WomenTrousersPrice: string;
  WomenTrousersQuantity: string;
  WomenTrousersPhoto: string;
  WomenFilePhoto: string;

  ngOnInit(): void {
    this.WomenTrousersID = this.womentr.WomenTrousersID;
    this.WomenTrousersName = this.womentr.WomenTrousersName;
    this.WomenTrousersPrice = this.womentr.WomenTrousersPrice;
    this.WomenTrousersQuantity = this.womentr.WomenTrousersQuantity;
    this.WomenTrousersPhoto = this.womentr.WomenTrousersPhoto;
    this.WomenFilePhoto = this.service.PhotoUrl + this.WomenFilePhoto;
  }

  // tslint:disable-next-line:typedef
  addWomenTrousers(){
    var val = {WomenTrousersID: this.WomenTrousersID,
      WomenTrousersName: this.WomenTrousersName,
      WomenTrousersPrice: this.WomenTrousersPrice,
      WomenTrousersQuantity: this.WomenTrousersQuantity,
      WomenTrousersPhoto: this.WomenTrousersPhoto
    };
    this.service.addWomenTrousers(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateWomenTrousers(){
    var val = {WomenTrousersID: this.WomenTrousersID,
      WomenTrousersName: this.WomenTrousersName,
      WomenTrousersPrice: this.WomenTrousersPrice,
      WomenTrousersQuantity: this.WomenTrousersQuantity,
      WomenTrousersPhoto: this.WomenTrousersPhoto
    };
    this.service.updateWomenTrousers(val).subscribe(res => {
      alert(res.toString());
    });
  }

  uploadWomenPhoto(event){
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.UploadWomenTrousersPhoto(formData).subscribe((data: any) => {
      this.WomenTrousersPhoto = data.toString();
      this.WomenFilePhoto = this.service.PhotoUrl + this.WomenTrousersPhoto;
    });
  }

}
