import { Component, Inject, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PrmotionService } from '../services/prmotion.service';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/Leader';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader:Leader;

  constructor(private dishservice: DishService,
    private promotionservice: PrmotionService,
    private leaderservice:LeaderService,
    @Inject('BaseURL') private baseURL) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish);
    this.promotionservice.getFeaturedPromotion().subscribe((promotion)=>this.promotion=promotion);
    this.leaderservice.getFeaturedLeader().subscribe((leader)=>this.leader=leader);
  }

}
