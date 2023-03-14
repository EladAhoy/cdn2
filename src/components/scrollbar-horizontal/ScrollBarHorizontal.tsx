import React, { useState, useEffect, useRef, useCallback } from "react";
import { FixMeLater } from "../../types/general";
import "./ScrollBarHorizontal.css";
//@ts-ignore
const ScrollbarHorizontal = ({
  children,
  className,
  cards,
  ...props
}: React.ComponentPropsWithoutRef<any>) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const scrollThumbRef = useRef<HTMLDivElement>(null);
  const observer = useRef<ResizeObserver | null>(null);
  const [thumbWidth, setThumbWidth] = useState(20);
  const [scrollStartPosition, setScrollStartPosition] = useState<number | null>(
    null
  );
  const [initialScrollLeft, setinitialScrollLeft] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);

  function handleResize(ref: HTMLDivElement, trackSize: number) {
    const { clientWidth, scrollWidth } = ref;
    setThumbWidth(Math.max((clientWidth / scrollWidth) * trackSize, 20));
  }

  function handleScrollButton(direction: "left" | "right") {
    const { current } = contentRef;
    if (current) {
      const scrollAmount = direction === "right" ? 200 : -200;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }

  const handleTrackClick = useCallback(
    (e: FixMeLater) => {
      e.preventDefault();
      e.stopPropagation();
      const { current: trackCurrent } = scrollTrackRef;
      const { current: contentCurrent } = contentRef;
      if (trackCurrent && contentCurrent) {
        const { clientX } = e;
        const target = e.target as HTMLDivElement;
        const rect = target.getBoundingClientRect();
        const trackLeft = rect.left;
        const thumbOffset = -(thumbWidth / 2);
        const clickRatio =
          (clientX - trackLeft + thumbOffset) / trackCurrent.clientWidth;
        const scrollAmount = Math.floor(
          clickRatio * contentCurrent.scrollWidth
        );
        contentCurrent.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    },
    [thumbWidth]
  );

  const handleThumbPosition = useCallback(() => {
    if (
      !contentRef.current ||
      !scrollTrackRef.current ||
      !scrollThumbRef.current
    ) {
      return;
    }
    const { scrollLeft: contentLeft, scrollWidth: contentWidth } =
      contentRef.current;
    const { clientWidth: trackHeight } = scrollTrackRef.current;
    let newLeft = (+contentLeft / +contentWidth) * trackHeight;
    newLeft = Math.min(newLeft - 7, trackHeight - thumbWidth); //FixMeLater 7
    const thumb = scrollThumbRef.current;
    thumb.style.left = `${newLeft}px`;
  }, [thumbWidth]);

  const handleThumbMousedown = useCallback((e: FixMeLater) => {
    e.preventDefault();
    e.stopPropagation();
    setScrollStartPosition(e.clientX);
    if (contentRef.current) setinitialScrollLeft(contentRef.current.scrollLeft);
    setIsDragging(true);
  }, []);

  const handleThumbMouseup = useCallback(
    (e: FixMeLater) => {
      e.preventDefault();
      e.stopPropagation();
      if (isDragging) {
        setIsDragging(false);
      }
    },
    [isDragging]
  );

  const handleThumbMousemove = useCallback(
    (e: FixMeLater) => {
      e.preventDefault();
      e.stopPropagation();
      if (isDragging) {
        const {
          scrollWidth: contentScrollWidth,
          offsetWidth: contentOffsetWidth,
        }: FixMeLater = contentRef.current;

        const deltaX =
          //@ts-ignore
          (e.clientX - scrollStartPosition) * (contentOffsetWidth / thumbWidth);
        const newScrollWidth = Math.min(
          initialScrollLeft + deltaX,
          contentScrollWidth - contentOffsetWidth
        );

        //@ts-ignore
        contentRef.current.scrollLeft = newScrollWidth;
      }
    },
    [initialScrollLeft, isDragging, scrollStartPosition, thumbWidth]
  );

  // If the content and the scrollbar track exist, use a ResizeObserver to adjust width of thumb and listen for scroll event to move the thumb
  useEffect(() => {
    if (contentRef.current && scrollTrackRef.current) {
      const ref = contentRef.current;
      const { clientWidth: trackSize } = scrollTrackRef.current;
      observer.current = new ResizeObserver(() => {
        handleResize(ref, trackSize);
      });
      observer.current.observe(ref);
      ref.addEventListener("scroll", handleThumbPosition);
      return () => {
        observer.current?.unobserve(ref);
        ref.removeEventListener("scroll", handleThumbPosition);
      };
    }
  }, [handleThumbPosition]);

  // Listen for mouse events to handle scrolling by dragging the thumb
  useEffect(() => {
    document.addEventListener("mousemove", handleThumbMousemove);
    document.addEventListener("mouseup", handleThumbMouseup);
    document.addEventListener("mouseleave", handleThumbMouseup);
    return () => {
      document.removeEventListener("mousemove", handleThumbMousemove);
      document.removeEventListener("mouseup", handleThumbMouseup);
      document.removeEventListener("mouseleave", handleThumbMouseup);
    };
  }, [handleThumbMousemove, handleThumbMouseup]);

  return (
    <div className="custom-scrollbars__container">
      <div
        className="custom-scrollbars__content horizontal"
        ref={contentRef}
        {...props}
      >
        {cards}
      </div>
      <div className="custom-scrollbars__scrollbar horizontal">
        <button
          className="custom-scrollbars__button"
          onClick={() => handleScrollButton("left")}
        >
          ⇑
        </button>
        <div className="custom-scrollbars__track-and-thumb">
          <div
            className="custom-scrollbars__track"
            ref={scrollTrackRef}
            onClick={handleTrackClick}
            //@ts-ignore
            style={{ cursor: isDragging && "grabbing" }}
          ></div>
          <div
            className="custom-scrollbars__thumb"
            ref={scrollThumbRef}
            onMouseDown={handleThumbMousedown}
            style={{
              height: `${thumbWidth}px`,
              cursor: isDragging ? "grabbing" : "grab",
            }}
          ></div>
        </div>
        <button
          className="custom-scrollbars__button"
          onClick={() => handleScrollButton("right")}
        >
          ⇓
        </button>
      </div>
    </div>
  );
};

export default ScrollbarHorizontal;
