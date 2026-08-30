import Link from "next/link";
import siteContent from "@content/site.json";

export function Footer() {
  const { org, contact, social } = siteContent;

  return (
    <footer className="bg-brand-blue text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <h2 className="font-bold text-lg mb-2">{org.shortName}</h2>
          <p className="text-sm text-white/85">{org.name}</p>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-2">Contato</h2>
          <address className="not-italic text-sm text-white/85 flex flex-col gap-1">
            <span>{contact.address}</span>
            <a href={contact.phoneHref} className="underline hover:no-underline">
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="underline hover:no-underline">
              {contact.email}
            </a>
            <span>CNPJ {contact.cnpj}</span>
          </address>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-2">Redes e transparência</h2>
          <ul className="text-sm flex flex-col gap-1">
            <li>
              <a href={social.facebook} className="underline hover:no-underline">Facebook</a>
            </li>
            <li>
              <a href={social.instagram} className="underline hover:no-underline">Instagram</a>
            </li>
            <li>
              <Link href="/doe#transparencia" className="underline hover:no-underline">
                Transparência / prestação de contas
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
