import { Dish } from "../types/types";
import { fetchService, FetchService } from "./fetchService";

class FormAPI {
  constructor(private readonly fetchService: FetchService) {}

  postDish(newDish: Dish) {
    return this.fetchService.post<Dish, Dish>("/dishes", newDish);
  }
}

export const formApi = new FormAPI(fetchService);
