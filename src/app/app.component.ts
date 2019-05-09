import { PeriodicElement } from './common/table/table.component';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { WebAPIService } from './service/web-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        margin: '1% auto',

      })),
      state('closed', style({
        margin: '10% auto'
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ]),
  ]
})

export class AppComponent {
  isOpen = false; counter = 0;
  searchCtrl = new FormControl();
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website' ];
  dataSource: any;
  constructor(private webApi: WebAPIService) { }

  enterSearch() {
    if (this.searchCtrl.value.length > 2) {
      this.isOpen = true;
      this.getRecords();
    } else {
      this.isOpen = false;
    }
  }

  getRecords() {
    this.webApi.getCommentsData().subscribe((resp) => {
      this.dataSource = resp;
    }, error => {
        console.log(error);
    });
  }
}
