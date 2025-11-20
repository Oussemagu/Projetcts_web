export class Book {
  id!: number;
  title!: string;
  author!: string;
  publisherEmail!: string;
  publisherPhone!: string;
  releaseDate!: string;
  category!: string;
  isAvailable!: boolean;
  stock?: number; // facultatif
}
