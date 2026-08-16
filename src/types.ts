export type PieceType = "UNICA" | "VARIANTE";

export interface Piece {
  id: string;
  title: string;
  material: string;
  description: string;
  type: PieceType;
  variantLabel?: string;
  priceLabel: string;
  weightGrams: number;
  heightCm: number;
  widthCm: number;
  depthCm: number;
  sold?: boolean;
  tone: "tone-1" | "tone-2" | "tone-3" | "tone-4";
}

export interface Collection {
  id: string;
  name: string;
  pieces: Piece[];
}
