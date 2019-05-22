import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
                <div>
                  <h1>Angular</h1>
                  <p>{{title}}</p>   <!-- Interpolation. title in DOM will be updated when it changes in the component -->
                </div>
                <div>
                <button (click)="changeTitle()">Changing 'title' in the Component...</button> 
                </div>
                `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular-Antics';

  changeTitle()
  {
    this.title = ".. will also update the value where used in the DOM";
  }

}
