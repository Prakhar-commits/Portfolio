"use client";

import { motion, type HTMLMotionProps } from "motion/react";

/**
 * One reveal, used everywhere: a short rise with no scale and no blur.
 * The restraint is what keeps it from reading as a template.
 *
 * `once` means it never replays on scroll-up, which is the difference
 * between a page that feels considered and one that feels twitchy.
 */
export default function Reveal({
  delay = 0,
  y = 14,
  children,
  ...rest
}: { delay?: number; y?: number } & HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -8% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Section header: mono index, serif title, and a rule that draws out. */
export function SectionHead({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="section-head">
      <span className="mono">{index}</span>
      <h2 className="display h-md">{title}</h2>
      <motion.span
        className="rule"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
      />
    </div>
  );
}
