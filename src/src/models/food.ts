export class Food {
  cost: any;
  type: any;
  name: string;
  icon: any;
  healfor: any;
  full: any;

  constructor (name: string, type: string, cost: number,
  healfor: number, full: number, icon: string) {
    this.cost = cost;
    this.type = type;
    this.name = name;
    this.icon = icon;
    this.healfor = healfor;
    this.full = full;
  }
}
