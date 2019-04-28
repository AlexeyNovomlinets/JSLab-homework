import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  items: any;
  id: string;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('itemID');
    this.items = this.itemService.getItem(this.id);
  }

  getURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.id}`);
  }

}
