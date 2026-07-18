import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  className = '',
  threshold = 0.15,
  delay = 0,
  once = true,
}) {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsRevealed(false);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.unobserve(node);
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={`reveal ${isRevealed ? 'revealed' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
