import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1650479866%2FGettyImages-961102928.jpg%3Fitok%3DRCj8CyLN&w=1200&h=595&c=sc&poi=face&q=60'),
    new Recipe('A test Recipe', 'This is simply a test', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1650479866%2FGettyImages-961102928.jpg%3Fitok%3DRCj8CyLN&w=1200&h=595&c=sc&poi=face&q=60')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
