import {
  Component,
  OnInit,
  Output,
  EventEmitter,} from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Item } from '../models/Items';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  item: Item = {
    name: '',
    brand:''
  }


  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService : FirebaseService, private itemService: ItemService) {
  }

  ngOnInit(): void {
  }


  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }

  onSubmit(){
    if(this.item.name != '' && this.item.brand != '' && this.item.rate != '' && this.item.image != ''){
      this.itemService.addItem(this.item);
      this.item.name = '';
      this.item.brand = '';
    }
  }
}

