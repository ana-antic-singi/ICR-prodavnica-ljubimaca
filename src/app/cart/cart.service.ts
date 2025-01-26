import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pet } from '../pet/pet.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsMap = new Map<Pet, number>();
  private cartItemsSubject = new BehaviorSubject<{ pet: Pet, count: number }[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  // logika da moze vise puta da se doda
  // addToCart(pet: Pet) {
  //   if (this.cartItemsMap.has(pet)) {
  //     this.cartItemsMap.set(pet, this.cartItemsMap.get(pet)! + 1);
  //   } else {
  //     this.cartItemsMap.set(pet, 1);
  //   }
  //   this.updateCartItems();
  // }

  // removeFromCart(pet: Pet) {
  //   if (this.cartItemsMap.has(pet)) {
  //     const count = this.cartItemsMap.get(pet)!;
  //     if (count > 1) {
  //       this.cartItemsMap.set(pet, count - 1);
  //     } else {
  //       this.cartItemsMap.delete(pet);
  //     }
  //     this.updateCartItems();
  //   }
  // }

  addToCart(pet: Pet) {
    if (!this.cartItemsMap.has(pet)) {
      this.cartItemsMap.set(pet, 1);
      this.updateCartItems();
    }
  }
  removeFromCart(pet: Pet) {
    if (this.cartItemsMap.has(pet)) {
      this.cartItemsMap.delete(pet);
      this.updateCartItems();
    }
  }
 




  private updateCartItems() {
    const items = Array.from(this.cartItemsMap.entries()).map(([pet, count]) => ({pet, count }));
    this.cartItemsSubject.next(items);
  }

}
