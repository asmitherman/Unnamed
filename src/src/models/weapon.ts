export class Weapon{
  magic: number;
  physical: number;
  cost: number;
  type: string;
  name: string;
  icon: string;
  equiped: boolean;

  constructor (name: string, type: string, cost: number,
    magic: number, physical: number, icon: string, equiped: boolean) {
    this.name = name;
    this.magic = magic;
    this.physical = physical;
    this.type = type;
    this.cost = cost;
    this.icon = icon;
    this.equiped = equiped;
  }
}
