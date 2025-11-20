import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- IMPORT ici
import { PanierComponent } from './panier/panier.component';
import { ProduitComponent } from './produit/produit.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { CommonModule } from '@angular/common'; // <-- pour ngFor, ngClass, ngStyle, currency

@Component({
  selector: 'app-root',
  standalone: true, // <-- obligatoire pour utiliser imports
  imports: [
    RouterOutlet,
    PanierComponent,
    ProduitComponent,
    UtilisateurComponent,
    BienvenueComponent,
    FormsModule,   // <-- nécessaire pour [(ngModel)]
    CommonModule   // <-- nécessaire pour *ngFor, ngClass, ngStyle, currency
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // <-- attention au pluriel "styleUrls"
})
export class AppComponent {
  title = 'Tp2AvantDernier';

  panierItems: string[] = [];

  gererAjoutAuPanier(nomProduit: string): void {
    this.panierItems.push(nomProduit);
  }
}
