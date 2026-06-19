import { useState, useEffect, useRef } from 'react';

interface StatisticCounterProps {
  target: number;
  suffix: string;
  duration?: number; // duration in ms
}

export default function StatisticCounter({ target, suffix, duration = 1200 }: StatisticCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    let observer: IntersectionObserver;

    const startCount = () => {
      let start = 0;
      const stepTime = Math.max(Math.floor(duration / target), 12);
      
      const timer = setInterval(() => {
        start += Math.ceil(target / 40); // larger step for faster count
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);
    };

    if (elementRef.current) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            startCount();
          }
        });
      }, { threshold: 0.1 });

      observer.observe(elementRef.current);
    }

    return () => {
      if (observer && elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [target, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}
