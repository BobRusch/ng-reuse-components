import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-module-home',
  templateUrl: './collections-module-home.component.html',
  styleUrls: ['./collections-module-home.component.css'],
})
export class CollectionsModuleHomeComponent implements OnInit {
  constructor() {}

  data = [
    {
      name: 'James',
      age: 24,
      job: 'Designer',
      employed: true,
      loc: 'Morristown',
    },
    { name: 'Jill', age: 26, job: 'Engineer', employed: false, loc: 'REMOTE' },
    {
      name: 'Elyse',
      age: 25,
      job: 'Engineer',
      employed: true,
      loc: 'Morristown',
    },
  ];

  headers = [
    { key: 'employed', label: 'Has a job' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'loc', label: 'Work Location' },
  ];

  ngOnInit(): void {}
}
