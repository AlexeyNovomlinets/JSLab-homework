import { Component, OnInit, Input } from '@angular/core';
import { Homework } from '../homework';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Homework;

  constructor() { }

  ngOnInit() {
  }

}
