import publications from "../data/publications.json";

function PubEntry({ pub }) {
  return (
    <div className="pub-entry pub-entry-with-cover">
      {pub.cover && (
        <img src={pub.cover} alt={pub.title} className="pub-cover" />
      )}
      <div className="pub-entry-text">
        <p className="pub-title">{pub.title}</p>
        <p className="pub-authors">{pub.authors}</p>
        <p className="pub-venue">
          {pub.venue}
          {pub.doi && <> &middot; doi: {pub.doi}</>}
        </p>
      </div>
    </div>
  );
}

function PubSection({ heading, items }) {
  return (
    <section className="pub-section">
      <h2 className="pub-section-heading">{heading}</h2>
      {items.length === 0 ? (
        <p className="pub-empty">No entries yet.</p>
      ) : (
        items.map((pub) => <PubEntry key={pub.id} pub={pub} />)
      )}
    </section>
  );
}

export default function Publications() {
  return (
    <div className="page">
      <h1 className="page-title">Publications</h1>
      <PubSection heading="Journals" items={publications.journals} />
      <PubSection heading="Conferences" items={publications.conferences} />
      <PubSection heading="Books" items={publications.books} />
    </div>
  );
}
