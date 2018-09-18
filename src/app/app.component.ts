import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // title = "goodness-dashboard";
  selectedValue: string = undefined;

  // event handler for the select element's change event
  selectChangeHandler(event: any) {
    // update the ui
    this.selectedValue = event.target.value;
  }
}
