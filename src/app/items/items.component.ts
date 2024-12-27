import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../../models/item.model';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) { }
  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => {
      
      this.items = items;
  })};


}
