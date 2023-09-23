import { Component } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(private themeService: ThemeService) {}

  LARA_DARK: string = 'lara-dark-blue';
  LARA_LIGHT: string = 'lara-light-blue';
  LARA_PURPLE: string = 'lara-light-purple';

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
  }
}
