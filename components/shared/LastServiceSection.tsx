'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import SectionHeader from '../shared/section-header';
import { ServiceItem } from './ServiceItem';
import { motion, useInView } from 'framer-motion';
import { StaticImageData } from 'next/image';

interface ServiceSectionProps {
  title: string;
  subtitle: string;
  highlightedWord: string;
  items: string[];
  imgUrl: string | StaticImageData;
}

export function LastServiceSection({
  title,
  subtitle,
  highlightedWord,
  items,
  imgUrl,
}: ServiceSectionProps) {
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const [imageHeight, setImageHeight] = useState<string>('auto');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: '-100px',
  });

  // Match heights on resize and content changes
  useEffect(() => {
    const matchHeights = () => {
      if (!leftColumnRef.current || !rightColumnRef.current) return;

      const leftHeight =
        leftColumnRef.current.getBoundingClientRect().height;
      const rightHeight =
        rightColumnRef.current.getBoundingClientRect().height;

      // Calculate needed image height to make left column match right column
      // Account for title and subtitle height
      const contentHeight =
        leftColumnRef.current
          .querySelector('.content-wrapper')
          ?.getBoundingClientRect().height || 0;

      // If right column is taller, expand image to fill gap
      if (rightHeight > leftHeight) {
        const neededImageHeight = rightHeight - contentHeight;
        setImageHeight(`${Math.max(neededImageHeight, 180)}px`); // Minimum height of 180px
      } else {
        // If left column is taller or equal, use proportional height
        setImageHeight('auto');
      }
    };

    // Run on mount and when content changes
    matchHeights();

    // Add resize listener
    window.addEventListener('resize', matchHeights);

    // Cleanup
    return () => window.removeEventListener('resize', matchHeights);
  }, [items, title, subtitle]);

  return (
    <div
      ref={containerRef}
      className="mt-20 flex flex-col lg:flex-row items-stretch lg:gap-8">
      <motion.div
        ref={leftColumnRef}
        initial={{ opacity: 0, x: -100 }}
        animate={
          isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
        }
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full lg:w-1/2 flex flex-col">
        <div className="content-wrapper">
          <div className="hidden lg:block">
            <SectionHeader
              size="md"
              highlightedWord={highlightedWord}>
              {title}
            </SectionHeader>
          </div>
          <div className="block lg:hidden">
            <SectionHeader
              size="sm"
              highlightedWord={highlightedWord}>
              {title}
            </SectionHeader>
          </div>
          <p className="text-base sm:text-lg text-gray-500 mt-2 lg:mb-6 italic">
            {subtitle}
          </p>
        </div>

        <div
          className="relative flex-grow mt-4"
          style={{ height: imageHeight }}>
          <Image
            src={imgUrl}
            alt="Why choose our services"
            className="rounded-2xl object-cover object-top"
            fill
            // sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </motion.div>

      <motion.div
        ref={rightColumnRef}
        initial={{ opacity: 0, x: 100 }}
        animate={
          isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
        }
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-gradient-to-r from-[#00254F] to-[#00365D] rounded-2xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 mt-4 space-y-2 sm:space-y-3 w-full lg:w-1/2">
        {items.map((item, index) => (
          <ServiceItem key={index} text={item} />
        ))}
      </motion.div>
    </div>
  );
}
