import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function AnimatedCount({ children }) {
  const spanRef = useRef(null);
  const [count, setCount] = useState(0);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // Combine both refs (ref to DOM + ref for inView)
  const setRefs = (node) => {
    spanRef.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    if (!inView || !spanRef.current) return;

    // Read the final number from the span
    const target = parseInt(children.toString().replace(/,/g, ''));
    if (isNaN(target)) return;

    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + 1; // simple count up
      });
    }, 20); // speed of counting

    return () => clearInterval(interval);
  }, [inView, children]);

  useEffect(() => {
    if (spanRef.current) {
      spanRef.current.textContent = count.toLocaleString(); // adds commas (e.g. 1,000)
    }
  }, [count]);

  return (
    <span
      ref={setRefs}
      className="text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-700 block"
    >
      {children}
    </span>
  );
}

export default AnimatedCount;
