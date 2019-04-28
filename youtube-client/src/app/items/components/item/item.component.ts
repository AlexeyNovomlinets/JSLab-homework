import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  checkDate() {
    const condDate = new Date();
    const itemDate = new Date(this.item.snippet.publishedAt || '1980-01-01T00:00:00.000Z');
    return ((condDate.getTime() - 17280000000) > itemDate.getTime());
  }

  showMore() {
    const link = ['/item', this.item.id.videoId];
    this.router.navigate(link, {relativeTo: this.route});
  }
}
