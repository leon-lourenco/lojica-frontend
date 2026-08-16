import { useState } from "react";
import "./App.css";
import { collections } from "./data";
import type { Piece } from "./types";

function PieceCard({ piece, onSelect }: { piece: Piece; onSelect: (piece: Piece) => void }) {
  return (
    <button className="piece-card" onClick={() => onSelect(piece)}>
      <div className={`piece-frame ${piece.tone} ${piece.sold ? "piece-sold" : ""}`} />
      {piece.sold ? (
        <span className="badge badge-sold">Vendida</span>
      ) : piece.type === "VARIANTE" ? (
        <span className="badge badge-variant">{piece.variantLabel}</span>
      ) : (
        <span className="badge badge-unique">Peça única</span>
      )}
      <div>
        <div className="piece-title">{piece.title}</div>
        <div className="piece-meta">{piece.material}</div>
      </div>
      <div className="piece-price mono">{piece.priceLabel}</div>
    </button>
  );
}

function PieceModal({ piece, onClose }: { piece: Piece; onClose: () => void }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className={`modal-frame ${piece.tone} ${piece.sold ? "piece-sold" : ""}`} />
        <div className="modal-info">
          <button className="modal-close" onClick={onClose}>
            Fechar
          </button>
          {piece.sold ? (
            <span className="badge badge-sold">Vendida</span>
          ) : piece.type === "VARIANTE" ? (
            <span className="badge badge-variant">{piece.variantLabel}</span>
          ) : (
            <span className="badge badge-unique">Peça única — não haverá outra igual</span>
          )}
          <h3 className="modal-title">{piece.title}</h3>
          <p className="modal-price mono">{piece.priceLabel}</p>
          <p className="modal-desc">{piece.description}</p>
          <dl className="spec-table">
            <div className="spec-row">
              <dt>Material</dt>
              <dd>{piece.material}</dd>
            </div>
            <div className="spec-row">
              <dt>Dimensões</dt>
              <dd>
                {piece.heightCm} × {piece.widthCm} × {piece.depthCm} cm
              </dd>
            </div>
            <div className="spec-row">
              <dt>Peso</dt>
              <dd>{(piece.weightGrams / 1000).toLocaleString("pt-BR", { minimumFractionDigits: piece.weightGrams % 1000 === 0 ? 0 : 1 })} kg</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [selected, setSelected] = useState<Piece | null>(null);

  return (
    <div>
      <nav className="topnav">
        <div className="topnav-brand">Lojica</div>
        <div className="topnav-links">
          <span className="current">Catálogo</span>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <h1>Oi, eu faço cada peça com minhas próprias mãos.</h1>
          <p>
            Cerâmica, pintura e artesanato — tudo torneado, pintado ou queimado aqui no meu
            ateliê, uma peça de cada vez. Nada é produzido em série.
          </p>
          <p className="hero-signoff">— a artista</p>
        </div>
        <div className="hero-portrait">
          <span>foto da artista no ateliê</span>
        </div>
      </section>

      <main>
        {collections.map((collection) => (
          <div className="collection" key={collection.id}>
            <div className="collection-head">
              <h2>{collection.name}</h2>
              <span>
                {collection.pieces.length}{" "}
                {collection.pieces.length === 1 ? "peça" : "peças"}
              </span>
            </div>
            <div className="strip">
              {collection.pieces.map((piece) => (
                <PieceCard key={piece.id} piece={piece} onSelect={setSelected} />
              ))}
            </div>
          </div>
        ))}
      </main>

      <footer className="site-footer">
        <span>LOJICA — CATÁLOGO (POC) — SEM CARRINHO, LOGIN OU PAGAMENTO NESTA FASE</span>
        <span>FOTOS SÃO PLACEHOLDER</span>
      </footer>

      {selected && <PieceModal piece={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

export default App;
