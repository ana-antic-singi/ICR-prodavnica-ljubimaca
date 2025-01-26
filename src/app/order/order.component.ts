import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet/pet.model';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  
  orders: { cartItems: { pet: Pet, count: number }[], totalPrice: number } [] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.orders$.subscribe(data => {
      this.orders = data;
    });
  }
}
