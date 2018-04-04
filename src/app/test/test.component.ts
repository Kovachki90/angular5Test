import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <input type="text" [(ngModel)]="name">
    {{name}}

    <br><br>
    <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
    <ng-template #thenBlock>
      <h2>Codevolution</h2>
    </ng-template>
    <ng-template #elseBlock>
      <h2>Hidden</h2>
    </ng-template>

    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You picked red color</div>
      <div *ngSwitchCase="'blue'">You picked blue color</div>
      <div *ngSwitchCase="'green'">You picked green color</div>
      <div *ngSwitchDefault>Pick again</div>
    </div>

    <div *ngFor="let color of colors; first as f; last as l; odd as o; even as e">
      <h2 [style.color]="color">{{color}} first: {{f}} last: {{l}} odd: {{o}} even: {{e}}</h2>
    </div>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = '';
  public displayName = false;
  public color = 'black';
  public colors = ['red', 'blue', 'green', 'yellow', 'black'];

  constructor() { }

  ngOnInit() {
  }

}
