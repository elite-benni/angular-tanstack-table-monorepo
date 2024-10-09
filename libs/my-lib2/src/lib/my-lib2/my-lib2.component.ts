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
const data: Person[] = [
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
const columns = Object.keys(data[0]).map((key) => {
  return colHelper.accessor(key as keyof Person, {
    header: key,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  });
});

@Component({
  selector: 'lib-my-lib2',
  standalone: true,
  imports: [CommonModule, FlexRenderDirective],
  templateUrl: './my-lib2.component.html',
})
export class MyLib2Component {
  table = createAngularTable<Person>(() => ({
    data,
    columns,
    rowSelection: {
      enabled: true,
    },
    getCoreRowModel: getCoreRowModel(),
  }));
}
