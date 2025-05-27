export interface IStats {
  atk: number;
  def: number;
  speed: number;
  hp: number;
}

export interface ICard extends IStats {
  name: string;
  types: titles[];
  temp_atk?: number;
  temp_def?: number;
  temp_speed?: number;
  temp_hp?: number;
}

export type titles = 'warrior' | 'mage';
