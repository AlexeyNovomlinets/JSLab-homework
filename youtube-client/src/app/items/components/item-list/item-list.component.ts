import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemService } from './../../services/item.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit, OnDestroy {
  sub: Subscription;
  items: Observable<any>;

  qName = '';
  apply: boolean;

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.sub = this.itemService.getItems()
      .subscribe(
        data => this.items = data.items
      );

    this.apply = false;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  applyFilter() {
    this.apply = true;
  }

  resetFilter() {
    this.apply = false;
  }
}
