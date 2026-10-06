import ExpandableSection from "../components/ExpandableSection";
import projects from "../data/projects.json";

export default function Projects() {
  return (
    <div className="page">
      <h1 className="page-title">Projects</h1>
      <div className="expandable-list">
        {projects.map((item) => (
          <ExpandableSection key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
