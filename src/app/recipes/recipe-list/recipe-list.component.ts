import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes : Recipe[] = [
    new Recipe('Recipe for morning','This dinner recipe collection has everything you need to inspire your weekly meal plan, but also plan for dinner party entertaining on the weekends.','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'),
    new Recipe('A test Recipe','This is a simply recipe','https://hips.hearstapps.com/hmg-prod/images/easy-dinner-recipes-1676057761.jpeg'),
    new Recipe('A test Recipe','This is a simply recipe','https://www.theseasonedmom.com/wp-content/uploads/2021/06/Beef-Noodle-Casserole-4.jpg'),
    new Recipe('Recipe by: Australian Eggs','Preheat oven to 200°C/180°C fan forced. Place a 10-cup capacity shallow baking dish (about 35cm x 28cm) on an oven tray to catch any spills','https://myfoodbook.com.au/sites/default/files/styles/sr_wd/public/recipe_photo/Easy-fish-pie_0171_.jpg')
  ];
  constructor(){}

}
