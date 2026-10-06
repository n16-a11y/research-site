import site from "../data/site.json";

export default function Footer() {
  const { contact } = site;
  return (
    <footer className="contact-band">
      <div className="contact-band-inner">
        <p className="contact-name">{contact.name}</p>
        <p>{contact.title}</p>
        <p>{contact.department}</p>
        <p>{contact.institution}</p>
        <a className="contact-email" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
      </div>
    </footer>
  );
}
