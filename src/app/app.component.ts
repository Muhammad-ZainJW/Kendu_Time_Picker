import { Component, ViewEncapsulation } from '@angular/core';
import { imageIcon, SVGIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'my-app',
  styleUrls: ['./skeleton-app.component.css'],
  styles: [
    `
            my-app {
                padding-bottom: 0;
            }
        `,
  ],

  template: `
       <div class="col-xs-12 col-md-6 example-col">
      <p>Full-length format description:</p>
      <kendo-timepicker formatPlaceholder="wide"></kendo-timepicker>
    </div>

    <div class="col-xs-12 col-md-6 example-col">
      <p>Narrow-length format description:</p>
      <kendo-timepicker formatPlaceholder="narrow"></kendo-timepicker>
    </div>

    <div class="col-xs-12 col-md-6 example-col">
      <p>Short-length format description:</p>
      <kendo-timepicker formatPlaceholder="short"></kendo-timepicker>
    </div>

    <div class="col-xs-12 col-md-6 example-col">
      <p>Display defined format:</p>
      <kendo-timepicker
        format="HH:mm:ss"
        formatPlaceholder="formatPattern"
      ></kendo-timepicker>
    </div>

   
    `,
  encapsulation: ViewEncapsulation.None, // Encapsulation is disabled for demo purposes only.
})
export class AppComponent {
  public value: Date;
  public imageSVG: SVGIcon = imageIcon;
}
