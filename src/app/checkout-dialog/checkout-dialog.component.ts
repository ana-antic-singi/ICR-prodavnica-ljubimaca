import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Pet } from '../pet/pet.model';
import { OrderService } from '../order/order.service';

@Component({
  selector: 'app-checkout-dialog',
  standalone:false,
  templateUrl: './checkout-dialog.component.html', 
  styleUrls: ['./checkout-dialog.component.css']
})
export class CheckoutDialogComponent {

  @Output() confirmEvent = new EventEmitter<void>();



  constructor(
    public dialogRef: MatDialogRef<CheckoutDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { cartItems: { pet: Pet, count: number }[], totalPrice: number},
    private orderService: OrderService
  ) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.confirmEvent.emit();
    this.orderService.addOrder(this.data);
    this.dialogRef.close();
    
  }
}
