import { Link } from "react-router-dom";
import publications from "../data/publications.json";

function PubPreviewEntry({ pub }) {
  return (
    <Link to="/publications" className="pub-preview-entry">
      <p className="pub-preview-title">{pub.title}</p>
      <p className="pub-preview-authors">{pub.authors}</p>
      <p className="pub-preview-venue">
        {pub.venue}
        {pub.doi && <> &middot; doi: {pub.doi}</>}
      </p>
    </Link>
  );
}

export default function PublicationsPreview() {
  // Show the most recent entries across all publication types, journals first.
  const recent = [
    ...publications.journals,
    ...publications.conferences,
    ...publications.books,
  ].slice(0, 3);

  return (
    <aside className="pub-preview">
      <Link to="/publications" className="pub-preview-heading-link">
        <h2 className="pub-preview-heading">Publications</h2>
      </Link>
      <div className="pub-preview-list">
        {recent.length === 0 ? (
          <p className="pub-empty">No entries yet.</p>
        ) : (
          recent.map((pub) => <PubPreviewEntry key={pub.id} pub={pub} />)
        )}
      </div>
    </aside>
  );
}
