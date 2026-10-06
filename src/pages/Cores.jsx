import ExpandableSection from "../components/ExpandableSection";
import cores from "../data/cores.json";

export default function Cores() {
  return (
    <div className="page">
      <h1 className="page-title">Cores</h1>
      <div className="expandable-list">
        {cores.map((item) => (
          <ExpandableSection key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
