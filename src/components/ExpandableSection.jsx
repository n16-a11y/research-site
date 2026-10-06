import { useState } from "react";
import RichBody from "./RichBody";

// Accepts EITHER:
//   image: "/tiles/foo.jpg"                     (single image, old format)
//   images: ["/tiles/foo.jpg", "/tiles/bar.jpg"] (gallery, new format)
// If both are given, images (plural) wins.
export default function ExpandableSection({ title, image, images, summary, body }) {
  const [open, setOpen] = useState(false);
  const gallery = images && images.length > 0 ? images : image ? [image] : [];

  return (
    <article className="expandable">
      <button
        className="expandable-header"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="expandable-header-text">
          <h3 className="expandable-title">{title}</h3>
          <p className="expandable-summary">{summary}</p>
        </div>
        <span className="expandable-toggle">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (
        <div className="expandable-body">
          {gallery.length === 1 && (
            <img src={gallery[0]} alt={title} className="expandable-image" />
          )}
          {gallery.length > 1 && (
            <div className="expandable-gallery">
              {gallery.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${title} ${i + 1}`}
                  className="expandable-gallery-image"
                />
              ))}
            </div>
          )}
          <RichBody content={body} />
        </div>
      )}
    </article>
  );
}
