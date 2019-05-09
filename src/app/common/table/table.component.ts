import { Component, OnInit, Input } from '@angular/core';
export interface PeriodicElement {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: number;
  website: string;
}
@Component({
  selector: 'table-comp',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() dataSource: PeriodicElement;
  @Input() displayedColumns: string[];
  @Input() isOpen: boolean;
  constructor() { }
  ngOnInit() { }

}
