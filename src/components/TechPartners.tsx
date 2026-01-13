import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import logoComunidadFeliz from "@/assets/logo-comunidadfeliz.svg";
import logoEdifito from "@/assets/logo-edifito.png";
import logoEdipro from "@/assets/logo-edipro.png";
import logoKastor from "@/assets/logo-kastor.png";
import logoSwappi from "@/assets/logo-swappi.svg";

const partners = [
  { name: "ComunidadFeliz", logo: logoComunidadFeliz },
  { name: "Edifito", logo: logoEdifito },
  { name: "Edipro", logo: logoEdipro },
  { name: "Kastor", logo: logoKastor },
  { name: "Swappi", logo: logoSwappi },
];

const TechPartners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-secondary overflow-hidden">
      <div className="container-wide px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            Tecnología y Partners
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Trabajamos con las mejores herramientas
          </h2>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="flex overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flex animate-marquee"
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 px-8 py-6 bg-background rounded-2xl border border-border shadow-sm hover:shadow-md transition-all cursor-pointer group flex items-center justify-center min-w-[200px] h-24"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-12 max-w-[160px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flex animate-marquee"
            aria-hidden
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 px-8 py-6 bg-background rounded-2xl border border-border shadow-sm hover:shadow-md transition-all cursor-pointer group flex items-center justify-center min-w-[200px] h-24"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-12 max-w-[160px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechPartners;
