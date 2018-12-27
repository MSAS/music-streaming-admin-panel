import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { FilterControl } from '../../models/filter-control.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input()
  filters: FilterControl[];

  @Output()
  change: EventEmitter<{ [key: string]: any }> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  apply() {
    const values: { [key: string]: any } = {};

    this.filters.forEach(filter => {
      values[filter.key] = filter.value;
    });

    this.change.next(values);
  }

  autocompleteSelected($event: MatAutocompleteSelectedEvent, filter: FilterControl) {
    filter.value = $event.option.value;
  }
  toDisplay(option: any) {
    return option.name;
  }

}
