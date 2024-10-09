import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MyLib2Component } from '@angular-monorepo/my-lib2';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MyLib2Component],
  selector: 'app-root',
  template: `<div><lib-my-lib2></lib-my-lib2></div>`,
})
export class AppComponent {
  title = 'tanstack_table_test';
}
