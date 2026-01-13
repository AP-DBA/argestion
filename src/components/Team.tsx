import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Handshake } from "lucide-react";

const teamMembers = [
  {
    name: "Magdalena Araya",
    role: "Estrategia, Finanzas y Auditoría",
    description:
      "Trayectoria de más de 20 años como Gerente de Finanzas en multinacionales. Aporta la visión de Gerencia General y asegura la máxima eficiencia presupuestaria, el cumplimiento legal (compliance) y una gestión de personal orientada a resultados y clima laboral.",
    keyValue: "Control y Eficiencia: Garantiza que cada peso gastado esté justificado.",
    icon: TrendingUp,
    initial: "M",
  },
  {
    name: "Antonella Ribotta",
    role: "Operaciones, Mediación y Negociación",
    description:
      "Trayectoria 8+ años de experiencia en terreno administrando condominios. Experta en estabilización de operaciones y resolución ágil de incidentes, y una gestión de personal orientada a resultados y clima laboral.",
    keyValue: "Negociación Estratégica: Maximiza la calidad y reduce costos con proveedores.",
    icon: Handshake,
    initial: "A",
  },
];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="equipo" ref={ref} className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            Nuestro Equipo
          </span>
          <h2 className="heading-section text-foreground mb-6">
            La Fusión <span className="text-primary">Perfecta</span>
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Estrategia Corporativa y Liderazgo Operacional trabajando juntas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="card-bento relative overflow-hidden group"
            >
              {/* Decorative background */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-growth-green-light rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative z-10">
                {/* Avatar placeholder */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground text-3xl font-bold shadow-lg">
                    {member.initial}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold">{member.role}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {member.description}
                </p>

                <div className="flex items-start gap-3 p-4 bg-growth-green-light rounded-2xl">
                  <member.icon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground font-medium">{member.keyValue}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
