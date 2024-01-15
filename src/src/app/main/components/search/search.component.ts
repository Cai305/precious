import { Component } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
 // Initialize the product list with all products
 productList = products;

 // Create a variable to store the search term
 searchTerm: string | any = '';

 // Function to filter products based on the search term
 filterProducts(): void {
   if (this.searchTerm.trim() !== '') {
     this.productList = products.filter(product =>
       product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
     );
   } else {
     // If the search term is empty, show all products
     this.productList = products;
   }
 }
}
