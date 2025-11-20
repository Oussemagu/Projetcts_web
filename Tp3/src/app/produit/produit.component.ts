import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {

  @Input() nomProduit: string = 'Produit Par Défaut';

  @Output() ajouterAuPanier = new EventEmitter<string>();

  enStock: boolean = true;

  toggleStock(): void {
    this.enStock = !this.enStock;
  }

  ajouterProduit(): void {
    this.ajouterAuPanier.emit(this.nomProduit);
  }
}
