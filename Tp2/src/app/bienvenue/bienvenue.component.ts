import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bienvenue',
  imports: [CommonModule],
  templateUrl: './bienvenue.component.html',
  styleUrl: './bienvenue.component.css'
})
export class BienvenueComponent {

    message: string = "Bienvenue sur notre site !";


}
