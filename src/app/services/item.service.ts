import { Injectable } from '@angular/core';
import { Item } from '../../models/item.model';
import { Observable } from 'rxjs';

const mockItems: Item[] = [
  {
    id: 1,
    name: 'Item 1',
    price: 100,
    category: 'Category 1',
    description: 'Description for Item 1',
    image: 'man1.jpg'
  },
  {
    id: 2,
    name: 'Item 2',
    price: 200,
    category: 'Category 2',
    description: 'Description for Item 2',
    image: 'man2.jpg'
  },
  {
    id: 3,
    name: 'Item 3',
    price: 300,
    category: 'Category 3',
    description: 'Description for Item 3',
    image: 'woman1.jpg'
  },
  {
    id: 4,
    name: 'Item 4',
    price: 400,
    category: 'Category 4',
    description: 'Description for Item 4',
    image: 'woman2.jpg'
  }
]

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(): Observable<Item[]> {
    return new Observable((observer) => {
      observer.next(mockItems);
      observer.complete();
    });
  }

  getItem(id: number): Observable<Item> {
    return new Observable((observer) => {
      const item = mockItems.find(item => item.id == id);
      observer.next(item);
      observer.complete();
    });
  }
}
