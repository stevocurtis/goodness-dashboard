import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataAccessService {
  constructor() {}

  getData(): string {
    return "TestData";
  }
}
