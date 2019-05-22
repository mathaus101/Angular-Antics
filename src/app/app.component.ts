import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `<div>
                  <h1>Angular</h1>
                  <p>{{title}}</p>   <!-- Interpolation. title in DOM will be updated when it changes in the component
                </div>
                <div>
                <button (click)="changeTitle()">Change Title in Component</button> `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular-Antics';

  changeTitle()
  {
    this.title = "New Title";
  }

}
