import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from './nav-bar.component';
import {MenubarModule} from 'primeng/menubar';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from "@angular/forms";
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, ButtonModule, MenubarModule, InputSwitchModule, FormsModule, DropdownModule],
  exports: [NavBarComponent],
})
export class NavBarModule {
}
