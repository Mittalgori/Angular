import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-style-div',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './style-div.component.html',
  styleUrl: './style-div.component.css'
})
export class StyleDivComponent {
  styleForError = {
    'color' : 'red',
    'font-weight' : 'gold'
  }
  styleForSuccess = {
    'color' : 'lightblue',
    'font-weight' : 'italic'
  }
  isError: boolean = true;

}
