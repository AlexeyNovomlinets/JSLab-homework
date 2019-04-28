import { Component, OnInit } from '@angular/core';
import { ItemService } from './../../services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Promise<any>;

  qName = '';
  apply: boolean;

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.items = this.itemService.getItems();
    this.apply = false;
  }

  applyFilter() {
    this.apply = true;
  }

  resetFilter() {
    this.apply = false;
  }
}
