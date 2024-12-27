import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent implements OnInit {
  item: Item = {id:0, name:'', price:0, category:'', description:''};
  constructor(private route: ActivatedRoute, private itemService: ItemService) { }
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.itemService.getItem(id).subscribe(item => {
      this.item = item;
      console.log("Item: ", this.item); 
    });
  }

  addToCart(): void {
    console.log('Item added to cart');
  }
}
