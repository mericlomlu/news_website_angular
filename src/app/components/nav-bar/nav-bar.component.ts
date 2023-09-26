import {Component, OnInit} from '@angular/core';
import {ThemeService} from 'src/app/theme.service';
import {MenuItem} from "primeng/api";
import {CATEGORIES, themes} from "../../constants";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(private themeService: ThemeService,) {
  }

  menubarItems: MenuItem[] | undefined;
  selectedLanguage: string = 'US';
  constants: typeof CATEGORIES.TR = CATEGORIES.US;
  themes: typeof themes = themes
  ngOnInit() {
    this.setSelectedLanguage(this.selectedLanguage);
    this.menubarItems = [
      {
        label: this.constants.TOP_HEADLINES,
        icon: 'pi pi-home'
      },
      {
        label: this.constants.BUSINESS,
        icon: 'pi-chart-line'
      },
      {
        label: this.constants.ENTERTAINMENT,
        icon: 'pi pi-at'
      },
      {
        label: this.constants.GENERAL,
        icon: 'pi pi-globe'
      },
      {
        label: this.constants.HEALTH,
        icon: 'pi pi-heart'
      },
      {
        label: this.constants.SCIENCE,
        icon: 'pi pi-calculator'
      },
      {
        label: this.constants.SPORTS,
        icon: 'pi pi-stopwatch'
      },
      {
        label: this.constants.TECHNOLOGY,
        icon: 'pi pi-mobile'
      }
    ]

  }

  setSelectedLanguage(selection: string) {
    this.selectedLanguage = selection;
    this.constants = selection === 'TR' ? CATEGORIES.TR : CATEGORIES.US;
  }

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
  }

}
