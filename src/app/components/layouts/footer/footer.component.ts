import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  myFlagForButtonToggle = true;
  constructor(public translate: TranslateService) { }
  onToggleGroupChange($event) {
    this.translate.use($event.value)
    console.log($event)
  }

  ngOnInit(): void {
  }

}
