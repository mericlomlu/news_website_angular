import {Component, OnInit} from '@angular/core';
import {ThemeService} from 'src/app/theme.service';
import {MenuItem} from "primeng/api";
import {CATEGORIES, themes} from "../../constants";

type LanguageOptions = {
  label: string;
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

  menubarItemsUS: MenuItem[] | undefined;
  menubarItemsTR: MenuItem[] | undefined;
  languageOptions: LanguageOptions[] | undefined;
  public selectedLanguage: LanguageOptions | undefined;
  public tempSelectedLanguage: LanguageOptions | undefined;
  checked: boolean = true;

  ngOnInit() {
    this.languageOptions = [{label: 'ENG', value: 'US'}, {label: 'TR', value: 'TR'}];
    this.selectedLanguage = this.languageOptions[0];
    this.tempSelectedLanguage = this.selectedLanguage;
    this.menubarItemsUS = [
      {
        label: CATEGORIES.US.TOP_HEADLINES,
        icon: 'pi pi-home',
        routerLink: ['/'],
      },
      {
        label: CATEGORIES.US.BUSINESS,
        icon: 'pi pi-chart-line',
        routerLink: ['/business']
      },
      {
        label: CATEGORIES.US.ENTERTAINMENT,
        icon: 'pi pi-at',
        routerLink: ['/entertainment']
      },
      {
        label: CATEGORIES.US.GENERAL,
        icon: 'pi pi-globe',
        routerLink: ['/general']
      },
      {
        label: CATEGORIES.US.HEALTH,
        icon: 'pi pi-heart',
        routerLink: ['/health']
      },
      {
        label: CATEGORIES.US.SCIENCE,
        icon: 'pi pi-calculator',
        routerLink: ['/science']
      },
      {
        label: CATEGORIES.US.SPORTS,
        icon: 'pi pi-stopwatch',
        routerLink: ['/sports']
      },
      {
        label: CATEGORIES.US.TECHNOLOGY,
        icon: 'pi pi-mobile',
        routerLink: ['/technology']
      }
    ]
    this.menubarItemsTR = [
      {
        label: CATEGORIES.TR.TOP_HEADLINES,
        icon: 'pi pi-home',
        routerLink: ['/'],
      },
      {
        label: CATEGORIES.TR.BUSINESS,
        icon: 'pi pi-chart-line',
        routerLink: ['/business']
      },
      {
        label: CATEGORIES.TR.ENTERTAINMENT,
        icon: 'pi pi-at',
        routerLink: ['/entertainment']
      },
      {
        label: CATEGORIES.TR.GENERAL,
        icon: 'pi pi-globe',
        routerLink: ['/general']
      },
      {
        label: CATEGORIES.TR.HEALTH,
        icon: 'pi pi-heart',
        routerLink: ['/health']
      },
      {
        label: CATEGORIES.TR.SCIENCE,
        icon: 'pi pi-calculator',
        routerLink: ['/science']
      },
      {
        label: CATEGORIES.TR.SPORTS,
        icon: 'pi pi-stopwatch',
        routerLink: ['/sports']
      },
      {
        label: CATEGORIES.TR.TECHNOLOGY,
        icon: 'pi pi-mobile',
        routerLink: ['/technology']
      }]
  }

  changeTheme() {
    this.checked = !this.checked
    this.checked ? this.themeService.switchTheme(themes.DARK_BLUE) : this.themeService.switchTheme(themes.LIGHT_BLUE);

  }

}
