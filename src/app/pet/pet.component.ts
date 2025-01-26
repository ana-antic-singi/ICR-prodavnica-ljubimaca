import { Component } from '@angular/core';
import { Pet } from './pet.model';
import { PetService } from './pet.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from '../cart/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { PetDetailsComponent } from '../pet-details/pet-details.component'

@Component({
  selector: 'app-pet',
  standalone: false,
  
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent {

  allPets: Pet[]=[]
  petSource = new MatTableDataSource<Pet>();

  activeSort: string | null = null;
  activeSortText: string = '';

  uniqueTypes: string[] = [];
  activeTypeFilter: string | null = null;


  constructor(
    private petService: PetService,
    private cartService: CartService, 
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.allPets = this.petService.getPets()

    this.petSource.data = this.allPets;

    this.uniqueTypes = [...new Set(this.allPets.map(pet => pet.type))];
  }


  openDetails(pet: Pet) {
    this.dialog.open(PetDetailsComponent, {
      data: { pet },
      width: '400px'
    });
  }
  
  search(filterValue: string) {
    const lowerCaseFilter = filterValue.trim().toLowerCase(); 
    this.petSource.data = this.allPets.filter(pet => 
      pet.name.toLowerCase().includes(lowerCaseFilter) ||
      pet.type.toLowerCase().includes(lowerCaseFilter) ||
      pet.price.toString().includes(lowerCaseFilter)
      
    );
    this.applySort();
    console.log(this.petSource.data);
  }

  sortData(direction: string) {
    this.activeSort = direction;
    this.activeSortText = direction === 'asc' ? 'Price: Low to High' : 'Price: High to Low';
    this.applySort();
  }

  filterByType(type: string) {
    this.activeTypeFilter = type;
    this.petSource.data = this.allPets.filter(pet => pet.type === type);
    this.applySort();
  }

  clearSort(sortSelect: any) {
    sortSelect.value = null;
    this.activeSort = null;
    this.activeSortText = '';
    this.applyFilters();
  }

  clearTypeFilter(typeSelect: any) {
    typeSelect.value = null;
    this.activeTypeFilter = null;
    this.applyFilters();
  }

  applyFilters() {
    if (this.activeTypeFilter) {
      this.filterByType(this.activeTypeFilter);
    } else {
      this.petSource.data = [...this.allPets];
    }
    this.applySort();
  }

  applySort() {
    if (this.activeSort) {
      const sortedData = [...this.petSource.data].sort((a, b) => {
        if (this.activeSort === 'asc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
      this.petSource.data = sortedData;
    }
}

  addToCart(pet: Pet){
    console.log(pet);
    //window.alert("Dodato u korpu!")
    this.snackBar.open('Dodato u korpu!', 'Close', {
      duration: 2000,
    });
    this.cartService.addToCart(pet)
  }

}
