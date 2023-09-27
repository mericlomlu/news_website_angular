import {Component, OnInit} from '@angular/core';
import {ThemeService} from 'src/app/theme.service';
import {MenuItem} from "primeng/api";
import {CATEGORIES, themes} from "../../constants";

interface Language {
  label: string,
  value: string;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(private themeService: ThemeService,) {
  }

  menubarItems: MenuItem[] | undefined;
  languages: { label: string, value: string }[] = [{label: 'TR', value: 'TR'}, {label: 'ENG', value: 'US'}]
  selectedLanguageValue: string = 'US';
  constants: typeof CATEGORIES.TR = CATEGORIES.US;
  checked: boolean = true;

  ngOnInit() {
    this.setSelectedLanguage(this.selectedLanguageValue);
  }


  setSelectedLanguage(selection: string) {
    this.selectedLanguageValue = selection;
    this.constants = selection === 'TR' ? CATEGORIES.TR : CATEGORIES.US;
    this.menubarItems = [
      {
        label: this.constants.TOP_HEADLINES,
        icon: 'pi pi-home',
        routerLink: ['/'],
      },
      {
        label: this.constants.BUSINESS,
        icon: 'pi pi-chart-line',
        routerLink: ['/business']
      },
      {
        label: this.constants.ENTERTAINMENT,
        icon: 'pi pi-at',
        routerLink: ['/entertainment']
      },
      {
        label: this.constants.GENERAL,
        icon: 'pi pi-globe',
        routerLink: ['/general']
      },
      {
        label: this.constants.HEALTH,
        icon: 'pi pi-heart',
        routerLink: ['/health']
      },
      {
        label: this.constants.SCIENCE,
        icon: 'pi pi-calculator',
        routerLink: ['/science']
      },
      {
        label: this.constants.SPORTS,
        icon: 'pi pi-stopwatch',
        routerLink: ['/sports']
      },
      {
        label: this.constants.TECHNOLOGY,
        icon: 'pi pi-mobile',
        routerLink: ['/technology']
      }
    ]
  }

  changeTheme() {
    this.checked = !this.checked
    this.checked ? this.themeService.switchTheme(themes.DARK_BLUE) : this.themeService.switchTheme(themes.LIGHT_BLUE);

  }

}
