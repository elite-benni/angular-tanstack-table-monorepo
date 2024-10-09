import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  createAngularTable,
  createColumnHelper,
  FlexRenderDirective,
  getCoreRowModel,
} from '@tanstack/angular-table';

export interface Person {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
}
const defaultData: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
];

const colHelper = createColumnHelper<Person>();
const keys = Object.keys(defaultData[0]);

const colDefs = keys.map((key) => {
  return colHelper.accessor(key as keyof Person, {
    header: 'tabletranslatekey.' + key,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  });
});

@Component({
  selector: 'lib-ui',
  standalone: true,
  imports: [CommonModule, FlexRenderDirective],
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.css',
})
export class UiComponent {
  table = createAngularTable<Person>(() => ({
    data: defaultData,
    columns: colDefs,
    rowSelection: {
      enabled: true,
    },
    getCoreRowModel: getCoreRowModel(),
  }));
}
