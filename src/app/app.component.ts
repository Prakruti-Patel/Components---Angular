import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The templates Examples';

  today = new Date();
  
  imageUrl = 'https://images.ctfassets.net/s600jj41gsex/1LXmifcjJCDfpxF9LDdwnI/849dce013c1618601b0333fdc7a093f5/An_Angular_5_tutorial__step-by-step_guide_to_your_first_Angular_5_app.png?w=768&q=50&fit=scale';
  imagewidth = 100;
  price = 2145;

  sellingPrice = 15.50;

  attributeValue = "movies-app-test-value"

  multipleClasses = 'sample-bgcolor sample-color'

  multipleStyles = 'background-color: rgb(153, 94, 17); color: rgb(26, 7, 59);'

  timeNow = new Date();
  setTimeToNow(){
    console.log(new Date());
    this.timeNow = new Date();
  }
}
