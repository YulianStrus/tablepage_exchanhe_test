import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable()
export class CustomerService {

    constructor(private http: HttpClient) { }

    getCustomersLarge() {
        return this.http.get<any>('http://api.nbp.pl/api/exchangerates/tables/A/?format=json')
            .toPromise()
            .then(res => <Customer[]>res.rates)
            .then(data => { return data; });
    }
}