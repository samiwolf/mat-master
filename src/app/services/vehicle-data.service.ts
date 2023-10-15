import { Injectable } from '@angular/core';
const { v4: uuidv4 } = require('uuid');

class Vehicle {
  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
  get licenseNumber(): string {
    return this._licenseNumber;
  }

  set licenseNumber(value: string) {
    this._licenseNumber = value;
  }

  get vehicleType(): string {
    return this._vehicleType;
  }

  set vehicleType(value: string) {
    this._vehicleType = value;
  }

  get ownerName(): string {
    return this._ownerName;
  }

  set ownerName(value: string) {
    this._ownerName = value;
  }

  get ownerPhone(): string {
    return this._ownerPhone;
  }

  set ownerPhone(value: string) {
    this._ownerPhone = value;
  }

  get entryStatus(): string {
    return this._entryStatus;
  }

  set entryStatus(value: string) {
    this._entryStatus = value;
  }

  get entryDate(): string {
    return this._entryDate;
  }

  set entryDate(value: string) {
    this._entryDate = value;
  }

  get exitDate(): string {
    return this._exitDate;
  }

  set exitDate(value: string) {
    this._exitDate = value;
  }
  _licenseNumber = '';
  _vehicleType = '';
  _ownerName = '';
  _ownerPhone = '';
  _entryStatus = '';
  _entryDate = '';
  _exitDate = '';
  _id = '';

  constructor() {
  }


}



@Injectable({
  providedIn: 'root'
})
export class VehicleDataService {

  vehicles: any[] = [];

  constructor() { }

  add(data: any){
    this.vehicles.push(this.generateVehicleFromData(data));
    localStorage.setItem('vehicles', JSON.stringify(this.vehicles));
  }

  update(data: any){
    let idx = this.vehicles.findIndex(value => value._id === data._id);
    if(idx !== -1)
    {
      this.vehicles[idx] = this.generateVehicleFromData(data);
    }
    else {
      this.vehicles.push( this.generateVehicleFromData(data));
    }
  }

   generateVehicleFromData(data: any) {
    let v = new Vehicle();
    v.licenseNumber = data.licenseNumber;
    v.vehicleType = data.vehicleType;
    v.ownerName = data.ownerName;
    v.ownerPhone = data.ownerPhone;
    v.entryStatus = data.entryStatus;
    v.entryDate = data.entryDate;
    v.exitDate = data.exitDate;
    v.id = uuidv4();
    return v;
  }

  listAll() {
    console.log(this.vehicles);
    let lsValue = localStorage.getItem('vehicles');
    if(lsValue){
      this.vehicles = JSON.parse(lsValue) ;
    }
    return [...this.vehicles];
  }
}
