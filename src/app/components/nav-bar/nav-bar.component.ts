import {Component} from '@angular/core';
import {ThemeService} from 'src/app/theme.service';
import {themes} from "../../constants";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(private themeService: ThemeService) {
  }

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
  }

  protected readonly themes = themes;
}
