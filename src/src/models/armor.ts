export class Armor {
  magicResist: any;
  physicalResist: any;
  cost: any;
  type: any;
  name: string;
  icon: string;
  equiped: boolean;

  constructor (name: string, type: string, cost: number,
    mageResist: number, physicalResist: number, icon: string,equiped: boolean) {
    this.name = name;
    this.magicResist = mageResist;
    this.physicalResist = physicalResist;
    this.type = type;
    this.cost = cost;
    this.icon = icon;
    this.equiped = equiped;
    return;
  }
}
