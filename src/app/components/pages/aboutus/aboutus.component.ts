import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { }
  mobile: boolean;

  ngOnInit(): void {
    console.log(window.screen.width )
    if (window.screen.width < 768) { //  portrait
      this.mobile = true;
    } else (
    this.mobile = false
  )
  }
  
}
