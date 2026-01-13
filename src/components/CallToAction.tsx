import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Diagnóstico financiero completo",
  "Identificación de áreas de mejora",
  "Plan de acción personalizado",
  "Sin costo ni compromiso",
];

const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contacto"
      ref={ref}
      className="section-padding bg-dark-surface text-dark-surface-foreground relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-8"
          >
            Oferta Exclusiva
          </motion.span>

          <h2 className="heading-section mb-6">
            ¿Listo para <span className="text-primary">transformar</span> su comunidad?
          </h2>

          <p className="text-xl md:text-2xl text-dark-surface-foreground/80 mb-4 max-w-3xl mx-auto">
            Le ofrecemos, sin costo ni compromiso, nuestro exclusivo{" "}
            <span className="font-bold text-primary">AVIB</span> - Análisis de Valorización 
            Inmobiliaria y Bienestar Comunitario.
          </p>

          <p className="text-lg text-dark-surface-foreground/60 mb-6 max-w-2xl mx-auto">
            Una consultoría estratégica gratuita para identificar áreas de mejora 
            financiera y operativa.
          </p>

          <p className="text-lg text-dark-surface-foreground/80 mb-12 max-w-2xl mx-auto font-medium">
            Al contratar nuestros servicios, incluimos sin costo adicional una{" "}
            <span className="text-primary font-bold">Auditoría de Gestión detallada por tres meses.</span>
          </p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-dark-surface-foreground/10 px-4 py-2 rounded-full"
              >
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button
              size="lg"
              className="btn-pill bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-7 shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all hover:scale-105"
            >
              Agendar Evaluación AVIB Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
