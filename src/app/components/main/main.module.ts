import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, NavBarModule, AppRoutingModule],
  exports: [MainComponent],
})
export class MainModule {}
