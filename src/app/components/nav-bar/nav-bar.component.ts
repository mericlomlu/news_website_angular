import { Component } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(private themeService: ThemeService) {}

  LARA_DARK: string = 'lara-dark';
  LARA_LIGHT: string = 'lara-light';

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
  }
}
