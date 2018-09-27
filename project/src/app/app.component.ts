import { Component ,Input } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
//import {} from '@types/googlemaps';
import { ViewChild, ElementRef, NgZone, } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public latitude: number;
  public longitude: number;
  public fillInAddress: '';
  public searchControl: FormControl;
  public zoom: number;
  public f_addr: string;
  public city: string; 
  public country: string;
  public scountry: string; 
  public postCode: string; 
  public estab: string; 
  public state: string; 
  @ViewChild('search' ) public searchElement: ElementRef;
  
  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {  }
  
  }






