import { Component, OnInit , Input} from '@angular/core';
import { SharedService } from '../../../shared.service';

@Component({
  selector: 'app-add-edit-m-t',
  templateUrl: './add-edit-m-t.component.html',
  styleUrls: ['./add-edit-m-t.component.css']
})
export class AddEditMTComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() mentr: any;
  MenTrousersID: string;
  MenTrousersName: string;
  MenTrousersPrice: string;
  MenTrousersQuantity: string;
  MenTrousersPhoto: string;
  MenFilePhoto: string;

  ngOnInit(): void {
    this.MenTrousersID = this.mentr.MenTrousersID;
    this.MenTrousersName = this.mentr.MenTrousersName;
    this.MenTrousersPrice = this.mentr.MenTrousersPrice;
    this.MenTrousersQuantity = this.mentr.MenTrousersQuantity;
    this.MenTrousersPhoto = this.mentr.MenTrousersPhoto;
    this.MenFilePhoto = this.service.PhotoUrl + this.MenFilePhoto;
  }

  addMenTrousers(){
    var val = {MenTrousersID: this.MenTrousersID,
      MenTrousersName: this.MenTrousersName,
      MenTrousersPrice: this.MenTrousersPrice,
      MenTrousersQuantity: this.MenTrousersQuantity,
      MenTrousersPhoto: this.MenTrousersPhoto
    };
    this.service.addMenTrousers(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateMenTrousers(){
    var val = {MenTrousersID: this.MenTrousersID,
      MenTrousersName: this.MenTrousersName,
      MenTrousersPrice: this.MenTrousersPrice,
      MenTrousersQuantity: this.MenTrousersQuantity,
      MenTrousersPhoto: this.MenTrousersPhoto
    };
    this.service.updateMenTrousers(val).subscribe(res => {
      alert(res.toString());
    });
  }

  uploadMenPhoto(event){
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.UploadMenTrousersPhoto(formData).subscribe((data: any) => {
      this.MenTrousersPhoto = data.toString();
      this.MenFilePhoto = this.service.PhotoUrl + this.MenTrousersPhoto;
    });
  }

}
