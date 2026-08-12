"use client";

import { motion } from "motion/react";
import { METRICS } from "@/lib/data";

export default function Metrics() {
  return (
    <div className="shell">
      <div className="metrics">
        {METRICS.map((m, i) => (
          <motion.div
            key={m.label}
            className="metric"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 0.7,
              delay: i * 0.08,
              ease: [0.22, 0.61, 0.36, 1],
            }}
          >
            <div className="metric-value">{m.value}</div>
            <div className="metric-label">{m.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
