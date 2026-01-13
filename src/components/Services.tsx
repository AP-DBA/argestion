import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calculator, Wrench, Users, CreditCard, Scale, Shield, Check } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Administración financiera y tributaria",
    description: "Gestión integral de las finanzas comunitarias con control presupuestario y cumplimiento tributario.",
    features: ["Control presupuestario", "Contabilidad especializada", "Declaraciones tributarias", "Reportes financieros"],
    hoverColor: "group-hover:bg-blue-100 group-hover:text-blue-600",
    baseColor: "bg-secondary text-primary",
  },
  {
    icon: Wrench,
    title: "Mantenimiento y supervisión técnica",
    description: "Supervisión técnica especializada y programas de mantenimiento preventivo.",
    features: ["Mantenimiento preventivo", "Supervisión técnica", "Control de calidad", "Gestión de emergencias"],
    hoverColor: "group-hover:bg-growth-green-light group-hover:text-primary",
    baseColor: "bg-secondary text-primary",
  },
  {
    icon: Users,
    title: "Gestión del personal",
    description: "Administración integral del recurso humano con programas de capacitación continua.",
    features: ["Selección de personal", "Capacitación continua", "Evaluación de desempeño", "Desarrollo profesional"],
    hoverColor: "group-hover:bg-purple-100 group-hover:text-purple-600",
    baseColor: "bg-secondary text-primary",
  },
  {
    icon: CreditCard,
    title: "Gestión de compras y cobranza",
    description: "Optimización de compras y proveedores con cobranza eficiente.",
    features: ["Evaluación de proveedores", "Proceso de licitaciones", "Múltiples canales de pago", "Control de inventarios"],
    hoverColor: "group-hover:bg-orange-100 group-hover:text-orange-600",
    baseColor: "bg-secondary text-primary",
  },
  {
    icon: Scale,
    title: "Acompañamiento legal",
    description: "Asesoría jurídica especializada con actualización normativa constante.",
    features: ["Asesoría jurídica", "Actualización normativa", "Resolución de conflictos", "Cumplimiento legal"],
    hoverColor: "group-hover:bg-red-100 group-hover:text-red-600",
    baseColor: "bg-secondary text-primary",
  },
  {
    icon: Shield,
    title: "Auditoría preventiva",
    description: "Sistemas de control interno y auditoría continua para asegurar transparencia.",
    features: ["Auditoría interna", "Control de procesos", "Identificación de riesgos", "Planes de mejora"],
    hoverColor: "group-hover:bg-indigo-100 group-hover:text-indigo-600",
    baseColor: "bg-secondary text-primary",
  },
];

const Services = () => {
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
    <section id="servicios-integrales" ref={ref} className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            Qué hacemos
          </span>
          <h2 className="heading-section text-foreground">
            Servicios <span className="text-primary">Integrales</span>
          </h2>
          <p className="text-body-large text-muted-foreground mt-6 max-w-3xl mx-auto">
            Ofrecemos una gama completa de servicios diseñados para transformar la gestión y la vida en comunidades residenciales.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-bento group"
              >
                <div className={`inline-flex p-4 rounded-2xl ${service.baseColor} ${service.hoverColor} mb-6 transition-spring`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
