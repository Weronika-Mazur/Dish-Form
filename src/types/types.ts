export enum DishType {
  pizza = "pizza",
  soup = "soup",
  sandwich = "sandwich",
}

interface BaseDish {
  name: string;
  preparation_time: string;
  type: DishType;
  id?: number;
}

interface PizzaDish extends BaseDish {
  type: DishType.pizza;
  no_of_slices: number;
  diameter: number;
}

interface SoupDish extends BaseDish {
  type: DishType.soup;
  spiciness_scale: number;
}

interface SandwichDish extends BaseDish {
  type: DishType.sandwich;
  slices_of_bread: number;
}

export type Dish = PizzaDish | SoupDish | SandwichDish;
