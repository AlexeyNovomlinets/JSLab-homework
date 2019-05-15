import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit, OnDestroy {
  id: string;

  sub: Subscription;
  item: Observable<any>;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('itemID');
    this.sub = this.itemService.getItem(this.id)
      .subscribe(
        data => this.item = data.items[0]
      );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.id}`);
  }

}
