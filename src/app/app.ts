import { Component } from '@angular/core';
import { WorkflowComponent } from './component/workflow/workflow';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WorkflowComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}