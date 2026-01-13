import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, TrendingDown, Lightbulb, Shield } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Enfoque Humano",
    description: "Bienestar integral y resolución de conflictos.",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: TrendingDown,
    title: "Eficiencia en Gastos",
    description: "Reducción de costos de mantenimiento y operación de al menos un 15%.",
    color: "bg-growth-green-light text-primary",
  },
  {
    icon: Lightbulb,
    title: "Innovación Tecnológica",
    description: "Procesos auditables y cuentas claras.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Shield,
    title: "Tranquilidad",
    description: "Garantizamos tranquilidad para el Comité y resolución para el residente.",
    color: "bg-blue-100 text-blue-600",
  },
];

const ValueProposition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="propuesta-valor" ref={ref} className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            Por qué elegirnos
          </span>
          <h2 className="heading-section text-foreground">
            Nuestra <span className="text-primary">Propuesta de Valor</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-bento text-center group"
              >
                <div className={`inline-flex p-4 rounded-2xl ${value.color} mb-6 transition-spring group-hover:scale-110`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
