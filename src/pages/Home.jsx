import TileGrid from "../components/TileGrid";
import PublicationsPreview from "../components/PublicationsPreview";
import homeTiles from "../data/homeTiles.json";
import site from "../data/site.json";

export default function Home() {
  return (
    <div className="page page-home">
      {(site.piPhoto || site.introText) && (
        <div className="intro-row">
          {site.piPhoto && (
            <img src={site.piPhoto} alt={site.contact.name} className="pi-photo" />
          )}
          {site.introText && <p className="intro-text">{site.introText}</p>}
        </div>
      )}
      <div className="home-layout">
        <div className="home-main">
          <TileGrid
            heading="Projects"
            tiles={homeTiles.projectsPreview}
            seeMoreTo="/projects"
            seeMoreLabel="Visit the Projects page to see all our projects \u2192"
          />
          <TileGrid
            heading="Cores"
            tiles={homeTiles.cores}
            seeMoreTo="/cores"
            seeMoreLabel="Visit the Cores page to see all our cores \u2192"
          />
        </div>
        <PublicationsPreview />
      </div>
    </div>
  );
}
