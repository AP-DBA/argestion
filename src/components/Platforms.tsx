import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Users, CreditCard, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const platforms = [
  {
    name: "Plataforma de Comunidad",
    subtitle: "App digital para la vida comunitaria",
    description: "Reservas de espacios, votaciones, comunicación directa, encuestas y reportes.",
    icon: Users,
    badge: "Comunidad",
    badgeColor: "bg-rose-100 text-rose-600",
  },
  {
    name: "Plataforma de Gestión Operativa",
    subtitle: "Operación eficiente",
    description: "Supervisa tareas, proveedores, inventarios y mantenimientos con trazabilidad.",
    icon: Monitor,
    badge: "Eficiencia",
    badgeColor: "bg-blue-100 text-blue-600",
  },
  {
    name: "Bienestar comunitario",
    subtitle: "Convivencia y hábitos saludables",
    description: "Talleres y actividades para una comunidad activa y saludable.",
    icon: Heart,
    badge: "Bienestar",
    badgeColor: "bg-growth-green-light text-primary",
  },
  {
    name: "Asesoría Estratégica",
    subtitle: "Decisiones con impacto",
    description: "Acompañamiento en valorización, presupuestos y decisiones clave.",
    icon: CreditCard,
    badge: "Estrategia",
    badgeColor: "bg-amber-100 text-amber-600",
  },
];

const Platforms = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="valor-agregado" ref={ref} className="section-padding bg-secondary">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            Más allá de lo básico
          </span>
          <h2 className="heading-section text-foreground">
            Servicios de <span className="text-primary">Valor Agregado</span>
          </h2>
          <p className="text-body-large text-muted-foreground mt-6 max-w-2xl mx-auto">
            Soluciones tecnológicas y humanas que potencian la gestión.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-bento group text-center"
              >
                <div className="mb-4">
                  <Badge className={`${platform.badgeColor} border-0 font-medium`}>
                    {platform.badge}
                  </Badge>
                </div>
                <div className="inline-flex p-4 rounded-2xl bg-background mb-4 transition-spring group-hover:scale-110 shadow-soft">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {platform.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {platform.subtitle}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {platform.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Platforms;
