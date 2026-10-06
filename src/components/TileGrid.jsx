import { Link } from "react-router-dom";

export default function TileGrid({ heading, tiles, seeMoreTo, seeMoreLabel }) {
  return (
    <section className="tile-section">
      <h2 className="tile-section-heading">{heading}</h2>
      <div className="tile-grid">
        {tiles.map((tile) => (
          <Link key={tile.id} to={tile.linkTo} className="tile">
            <img src={tile.image} alt={tile.title} className="tile-image" />
            <div className="tile-overlay">
              <span className="tile-title">{tile.title}</span>
            </div>
          </Link>
        ))}
      </div>
      {seeMoreTo && (
        <Link to={seeMoreTo} className="see-more-link">
          {seeMoreLabel || `See all ${heading.toLowerCase()} \u2192`}
        </Link>
      )}
    </section>
  );
}
