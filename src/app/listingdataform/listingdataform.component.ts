import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Listing } from '../types';
@Component({
  selector: 'app-listingdataform',
  templateUrl: './listingdataform.component.html',
  styleUrls: ['./listingdataform.component.css'],
})
export class ListingdataformComponent {
  @Input() buttonText: any;
  @Input() currentName = '';
  @Input() currentDescription = '';
  @Input() currentPrice = '';

  name: string = '';
  description: string = '';
  price: string = '';

  @Output() onSubmit = new EventEmitter<Listing>();

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }
  onButtonClicked(): void {
    this.onSubmit.emit({
      id: null,
      name: this.name,
      description: this.description,
      price: Number(this.price),
      views: 0,
    });
  }
}
