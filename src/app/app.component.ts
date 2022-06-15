import { Component } from '@angular/core';
import { CustomerService } from './customerservice';
import { Customer } from './customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  customers: Customer[];

  first = 0;
  rows = 10;
  toggle = true;
  status = 'Enable';

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService
      .getCustomersLarge()
      .then((customers) => (this.customers = customers));
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.customers
      ? this.first === this.customers.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.customers ? this.first === 0 : true;
  }

  colorBack(job) {
    if (job == 'Bl') this.toggle = this.toggle;
    else this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }
}
