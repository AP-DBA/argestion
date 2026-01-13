import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="filosofia" ref={ref} className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-6 block">
            Nuestro ADN
          </span>
          
          <h2 className="heading-section text-foreground mb-10">
            Somos la <span className="text-primary">evolución</span> de la administración.
          </h2>

          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-body-large text-muted-foreground"
            >
              Ponemos a las personas en el centro, fomentando que se sientan 
              <span className="text-foreground font-semibold"> valoradas y orgullosas </span>
              de su hogar.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-body-large text-muted-foreground"
            >
              Administramos con cercanía y empatía, escuchando y entendiendo a cada residente, 
              porque sabemos que detrás de cada propiedad hay 
              <span className="text-foreground font-semibold"> historias y sueños.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-body-large text-muted-foreground"
            >
              Nuestro equipo es la convergencia de una sólida formación en finanzas, auditoría y gestión estratégica, 
              con la experiencia operativa y resolución de conflictos, ambas enfocadas en el 
              <span className="text-foreground font-semibold"> liderazgo efectivo de equipos.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-body-large text-muted-foreground"
            >
              Esta combinación nos permite ofrecer una gestión que no solo ordena las cuentas, sino que genera 
              <span className="text-foreground font-semibold"> ahorros significativos</span>, transforma la convivencia 
              y <span className="text-foreground font-semibold">aumenta la plusvalía</span> de su propiedad.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 flex justify-center gap-4"
          >
            <div className="w-3 h-3 rounded-full bg-primary" />
            <div className="w-3 h-3 rounded-full bg-primary/60" />
            <div className="w-3 h-3 rounded-full bg-primary/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
