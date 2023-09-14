import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';

import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, ButtonModule],
  exports: [NavBarComponent],
})
export class NavBarModule {}
