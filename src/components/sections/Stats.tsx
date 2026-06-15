import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Business Clients" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Technical Support" },
  { value: 5, suffix: "+", label: "Years Experience" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.8, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, count]);

  return (
    <span className="font-display font-bold text-4xl md:text-5xl text-gradient">
      <motion.span ref={ref}>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wider text-primary uppercase">Trusted Technology Partner</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-navy">
            For Growing Businesses Worldwide
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl glass border border-border p-6 text-center shadow-soft hover:shadow-elegant transition-shadow"
            >
              <Counter to={s.value} suffix={s.suffix} />
              <div className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
