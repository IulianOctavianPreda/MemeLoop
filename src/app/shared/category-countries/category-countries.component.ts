import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-category-countries',
    templateUrl: './category-countries.component.html',
    styleUrls: ['./category-countries.component.scss']
})
export class CategoryCountriesComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}

    goTo(location: string) {
        this.router.navigate(['/posts'], { queryParams: { location } });
    }
}
