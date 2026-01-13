import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Lightbulb, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Empatía",
    description: "Entendemos las necesidades únicas de cada comunidad y sus residentes.",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Aplicamos tecnología y métodos vanguardistas para mejorar la gestión.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Shield,
    title: "Integridad",
    description: "Actuamos con transparencia y honestidad en cada decisión.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Fortalecemos los lazos entre vecinos y construimos sentido de pertenencia.",
    color: "bg-growth-green-light text-primary",
  },
];

const Values = () => {
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
    <section id="valores" ref={ref} className="section-padding bg-secondary">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            Lo que nos define
          </span>
          <h2 className="heading-section text-foreground">
            Nuestros <span className="text-primary">Valores</span>
          </h2>
          <p className="text-body-large text-muted-foreground mt-6 max-w-2xl mx-auto">
            Los principios que guían nuestro trabajo y definen nuestra misión.
          </p>
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

export default Values;
