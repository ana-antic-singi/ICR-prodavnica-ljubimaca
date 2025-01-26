import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Pet } from '../pet/pet.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { CheckoutDialogComponent } from '../checkout-dialog/checkout-dialog.component';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: { pet: Pet, count: number }[] = [];
  isLoggedIn: boolean = false;
  showOrder: boolean = false;


  constructor (
      private cartService: CartService,
      private router: Router,
      private authService: AuthService,
      private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });

    this.authService.loggedInStatus.subscribe(status => {
      this.isLoggedIn = status;
  });
  }

  removeFromCart(pet: Pet) {
    this.cartService.removeFromCart(pet);
  }

  getTotalPrice(cartItems: { pet: Pet, count: number }[]): number {
    return cartItems.reduce((total, item) => total + item.pet.price * item.count, 0);
  }

  openCheckoutDialog(){
    if (!this.isLoggedIn) { 
      this.router.navigate(['/login']);
    } else {
      const totalPrice = this.getTotalPrice(this.cartItems);
      const dialogRef = this.dialog.open(CheckoutDialogComponent, {
        data: { cartItems: this.cartItems, totalPrice: totalPrice }
      });
      
      dialogRef.componentInstance.confirmEvent.subscribe(() => {
        this.showOrder = true;
      });
    }
    
}


  

}
