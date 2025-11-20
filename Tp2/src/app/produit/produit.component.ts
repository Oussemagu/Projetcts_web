 import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-produit',
  imports: [CommonModule],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent {

   @Input() nomProduit: string = "Produit par défaut";
  @Output() ajouterAuPanier = new EventEmitter<string>();

imageUrl: string = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=180&q=80";
  prix: number = 1200;

  enStock: boolean = true;

  toggleStock(): void {
    this.enStock = !this.enStock;
  }

  ajouterProduit(): void {
    this.ajouterAuPanier.emit(this.nomProduit);
  }

}
