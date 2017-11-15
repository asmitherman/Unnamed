import { Armor } from '../models/armor';
import { Weapon } from '../models/weapon';
import { Food } from '../models/food';

export class HeroModel {
    health: number;
    magicka: number;
    full: number;
    drunk: boolean;
    coins: number;
    head: Armor;
    body: Armor;
    legs: Armor;
    feet: Armor;
    hands: Armor;
    weapon: Weapon;
    armor: Array<Armor> = [];
    weapons: Array<Weapon> = [];
    food: Array<Food> = [];

    // food: Array<Food>;
    // weapons: Array<Weapon>;

    constructor() {
      //inistialize starting gear
      this.health = 100;
      this.magicka = 100;
      this.full = 100;
      this.drunk = false;
      this.coins = 100;
      let startercap = new Armor('Linnen Cap','head',5,5,5,'ra ra-hood',true);
      let startershirt = new Armor('Ragged Shirt','body',10,10,10,'ra ra-vest',true);
      let starterpants = new Armor('Torn Pants','legs',5,5,5,'ra ra-player',true);
      let startershoes = new Armor('Ripped Sandals','feet',2,2,2,'ra ra-boot-stomp',true);
      let startergloves = new Armor('Linnen Gloves','hands',2,2,2,'ra ra-hand',true);
      let startingsword = new Weapon('Dull Sword','1hand',10,10,10,'ra ra-sword',true);
      let startingaxe = new Weapon('Woodcutting Axe','1hand',10,10,10,'ra ra-battered-axe',false);
      //equip gear
      this.weapon = startingsword;
      this.head = startercap;
      this.body = startershirt;
      this.legs = starterpants;
      this.feet = startershoes;
      this.hands = startergloves;
      //send gear to inventory
      this.armor.push(startercap);
      this.armor.push(startershirt);
      this.armor.push(starterpants);
      this.armor.push(startershoes);
      this.armor.push(startergloves);
      this.weapons.push(startingsword);
      this.weapons.push(startingaxe);
    }
}
