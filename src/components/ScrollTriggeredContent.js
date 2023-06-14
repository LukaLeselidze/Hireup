import React, { useRef, useEffect, useState } from "react";

function ScrollTriggeredContent({ children }) {
  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={contentRef}
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 2s" }}
    >
      {children}
    </div>
  );
}

export default ScrollTriggeredContent;
