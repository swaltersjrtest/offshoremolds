"use client";

import { useEffect, useRef, useState } from "react";
import type { ProofPoint } from "../site-data";

type AnimatedMetricsProps = {
  points: ProofPoint[];
};

function easeOutCubic(value: number) {
  return 1 - Math.pow(1 - value, 3);
}

function formatMetric(point: ProofPoint, value: number) {
  const rounded = Math.round(value);
  const number = point.useGrouping === false ? String(rounded) : rounded.toLocaleString("en-US");

  return `${point.prefix ?? ""}${number}${point.suffix ?? ""}`;
}

export function AnimatedMetrics({ points }: AnimatedMetricsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [values, setValues] = useState(() => points.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.25,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    let frameId = 0;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      frameId = window.requestAnimationFrame(() => {
        setValues(points.map((point) => point.countTo));
      });

      return () => window.cancelAnimationFrame(frameId);
    }

    const startedAt = window.performance.now();

    const animate = (timestamp: number) => {
      let shouldContinue = false;

      const nextValues = points.map((point) => {
        const duration = point.durationMs ?? 1200;
        const progress = Math.min((timestamp - startedAt) / duration, 1);

        if (progress < 1) {
          shouldContinue = true;
        }

        return point.countTo * easeOutCubic(progress);
      });

      setValues(nextValues);

      if (shouldContinue) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameId);
  }, [isVisible, points]);

  return (
    <div
      ref={sectionRef}
      className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-[#d8dedb] px-0 sm:grid-cols-4"
    >
      {points.map((point, index) => (
        <div
          key={point.value}
          className="bg-white px-4 py-8 sm:px-6"
          aria-label={`${point.value} ${point.label}`}
        >
          <p
            className="whitespace-nowrap text-4xl font-black tracking-tight text-[#18201f]"
            aria-hidden="true"
          >
            {formatMetric(point, values[index] ?? 0)}
          </p>
          <p className="mt-2 max-w-44 text-sm font-semibold leading-5 text-[#58635f]">
            {point.label}
          </p>
        </div>
      ))}
    </div>
  );
}
