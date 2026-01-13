import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Inicio", href: "#" },
    { label: "Filosofía", href: "#filosofia" },
    { label: "Servicios", href: "#servicios" },
    { label: "Equipo", href: "#equipo" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container-wide px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <span className="text-3xl font-black tracking-tight">
                A&R<span className="text-primary">.</span>
              </span>
            </a>
            <p className="text-background/60 text-lg max-w-sm">
              Transformamos la experiencia de vivir en comunidad. Gestión moderna, 
              transparente y humana.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navegación</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-background/60">
              <li>contacto@argestion.cl</li>
              <li>+56 9 XXXX XXXX</li>
              <li>Santiago, Chile</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/40 text-sm">
              © {currentYear} A&R Gestión de Condominios. Todos los derechos reservados.
            </p>
            <p className="text-background/40 text-sm text-center md:text-right">
              Inscritas en el registro nacional de administradores de condominios - MINVU
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
