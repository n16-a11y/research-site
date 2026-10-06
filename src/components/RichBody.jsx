// Renders a project/research/core "body" field.
// Accepts either:
//   - a plain string -> rendered as a single paragraph
//   - an array of blocks, each one of:
//       { "type": "p", "text": "..." }
//       { "type": "bullets", "items": ["...", "..."] }
//       { "type": "heading", "text": "..." }
export default function RichBody({ content }) {
  if (!content) return null;

  if (typeof content === "string") {
    return <p>{content}</p>;
  }

  return (
    <>
      {content.map((block, i) => {
        if (block.type === "bullets") {
          return (
            <ul className="body-bullets" key={i}>
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "heading") {
          return (
            <h4 className="body-subheading" key={i}>
              {block.text}
            </h4>
          );
        }
        // default: paragraph
        return <p key={i}>{block.text}</p>;
      })}
    </>
  );
}
