/* tslint:disable:typedef */
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = 'http://localhost:5000/api';
  readonly PhotoUrl = 'http://localhost:5000/Photos';

  constructor(private http: HttpClient) { }

  // Clothes
  getMenClothesList(): Observable<any>{
    return this.http.get<any>(this.APIUrl + '/menclothes');
  }
  addMenClothes(val: any){
    return this.http.post(this.APIUrl + '/menclothes', val);
  }
  updateMenClothes(val: any){
    return this.http.put(this.APIUrl + '/menclothes', val);
  }
  deleteMenClothes(val: any){
    return this.http.delete(this.APIUrl + '/menclothes/' + val);
  }

  UploadMenClothesPhoto(val: any, p: { headers: HttpHeaders }){
    // @ts-ignore
    return this.http.post(this.APIUrl + '/menclothes/SaveFile' + val);
  }

  getWomenClothesList(): Observable<any>{
    return this.http.get<any>(this.APIUrl + '/womenclothes');
  }
  addWomenClothes(val: any){
    return this.http.post(this.APIUrl + '/womenclothes', val);
  }
  updateWomenClothes(val: any){
    return this.http.put(this.APIUrl + '/womenclothes', val);
  }
  deleteWomenClothes(val: any){
    return this.http.delete(this.APIUrl + '/womenclothes/' + val);
  }
  UploadWomenClothesPhoto(val: any, p: { headers: HttpHeaders }){
    // @ts-ignore
    return this.http.post(this.APIUrl + '/womenclothes/SaveFile' + val + headers);
  }

  // Shoes
  getMenShoesList(): Observable<any>{
    return this.http.get<any>(this.APIUrl + '/menshoes');
  }
  addMenShoes(val: any){
    return this.http.post(this.APIUrl + '/menshoes', val);
  }
  updateMenShoes(val: any){
    return this.http.put(this.APIUrl + '/menshoes', val);
  }
  deleteMenShoes(val: any){
    return this.http.delete(this.APIUrl + '/menshoes/' + val);
  }
  UploadMenShoesPhoto(val: any){
    // @ts-ignore
    return this.http.post(this.APIUrl + '/menshoes/SaveFile' + val);
  }

  getWomenShoesList(): Observable<any>{
    return this.http.get<any>(this.APIUrl + '/womenshoes');
  }
  addWomenShoes(val: any){
    return this.http.post(this.APIUrl + '/womenshoes', val);
  }
  updateWomenShoes(val: any){
    return this.http.put(this.APIUrl + '/womenshoes', val);
  }
  deleteWomenShoes(val: any){
    return this.http.delete(this.APIUrl + '/womenshoes/' + val);
  }
  UploadWomenShoesPhoto(val: any){
    // @ts-ignore
    return this.http.post(this.APIUrl + '/womenshoes/SaveFile' + val);
  }

  // trousers
  getMenTrousersList(): Observable<any>{
    return this.http.get<any>(this.APIUrl + '/mentrousers');
  }
  addMenTrousers(val: any){
    return this.http.post(this.APIUrl + '/mentrousers', val);
  }
  updateMenTrousers(val: any){
    return this.http.put(this.APIUrl + '/mentrousers', val);
  }
  deleteMenTrousers(val: any){
    return this.http.delete(this.APIUrl + '/mentrousers/' + val);
  }
  UploadMenTrousersPhoto(val: any){
    // @ts-ignore
    return this.http.post(this.APIUrl + '/mentrousers/SaveFile' + val);
  }

  getWomenTrousersList(): Observable<any>{
    return this.http.get<any>(this.APIUrl + '/womentrousers');
  }
  addWomenTrousers(val: any){
    return this.http.post(this.APIUrl + '/womentrousers', val);
  }
  updateWomenTrousers(val: any){
    return this.http.put(this.APIUrl + '/womentrousers', val);
  }
  deleteWomenTrousers(val: any){
    return this.http.delete(this.APIUrl + '/womentrousers/' + val);
  }
  UploadWomenTrousersPhoto(val: any){
    // @ts-ignore
    return this.http.post(this.APIUrl + '/womentrousers/SaveFile' + val);
  }
}
