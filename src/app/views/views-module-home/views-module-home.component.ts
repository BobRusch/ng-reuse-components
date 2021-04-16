import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-module-home',
  templateUrl: './views-module-home.component.html',
  styleUrls: ['./views-module-home.component.css'],
})
export class ViewsModuleHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# of Users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Reviews' },
    { value: 3000, label: 'Hits' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
