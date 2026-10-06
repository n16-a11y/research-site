import ExpandableSection from "../components/ExpandableSection";
import research from "../data/research.json";

export default function Research() {
  return (
    <div className="page">
      <h1 className="page-title">Research</h1>
      <div className="expandable-list">
        {research.map((item) => (
          <ExpandableSection key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
