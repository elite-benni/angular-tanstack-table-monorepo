import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiComponent } from '@angular-monorepo/ui';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, UiComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tanstack_table_test';
}
