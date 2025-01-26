import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pet } from '../pet/pet.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ordersSubject = new BehaviorSubject<{ cartItems: { pet: Pet, count: number }[], totalPrice: number }[]>([]);
  orders$ = this.ordersSubject.asObservable();

  addOrder(order: { cartItems: { pet: Pet, count: number }[], totalPrice: number }): void {
    const currentOrders = this.ordersSubject.value;
    this.ordersSubject.next([...currentOrders, order]);
  }
}
