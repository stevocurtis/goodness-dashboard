import { Component } from "@angular/core";
import { DataAccessService } from "./data-access.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  dataAccessService: DataAccessService = undefined;

  serviceSourcedData: string = undefined;

  constructor(dataAccessService: DataAccessService) {
    dataAccessService: DataAccessService;
    this.serviceSourcedData = dataAccessService.getData();
  }
  // title = "goodness-dashboard";
  selectedValue: string = undefined;

  // event handler for the select element's change event
  selectChangeHandler(event: any) {
    // update the ui
    this.selectedValue = event.target.value;
  }
}
