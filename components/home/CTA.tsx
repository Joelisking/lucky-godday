'use client';
import React, { useRef } from 'react';
import Container from '../shared/container';
import SectionHeader from '../shared/section-header';
import { Button } from '../ui/button';
import { Icon } from '../ui/icon';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

function CTA() {
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <Container className=" my-8 sm:my-12 md:my-24 lg:my-32 relative">
      <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 mb-8 rounded-2xl overflow-hidden bg-gradient-to-r from-primary/80 to-primary/60 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <SectionHeader
            highlightedWord="Procurement"
            size="md"
            className="text-white mb-2">
            Need help procuring something?
          </SectionHeader>
          <p className="text-white text-lg mb-4">
            Let us handle the hassle. See how easy it is to get
            started with our simple procurement process.
          </p>
          <Button asChild size="lg" variant="secondary">
            <a href="/procurement#process">See Procurement Process</a>
          </Button>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="py-12 sm:py-20 md:py-28 px-4 sm:px-8 md:px-12 relative rounded-2xl overflow-hidden"
        style={{
          backgroundImage: 'url(/port.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="absolute inset-0 bg-black opacity-70" />
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 20 }}
          animate={
            isContentInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 w-full sm:w-[90%] md:w-4/5">
          <div className="hidden md:block text-white">
            <SectionHeader>ready to ship?</SectionHeader>
          </div>
          <div className="md:hidden text-white">
            <SectionHeader size="sm">ready to ship?</SectionHeader>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={
              isContentInView ? { opacity: 1 } : { opacity: 0 }
            }
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-primary text-lg sm:text-xl italic mt-2 sm:mt-3">
            Let&apos;s get your goods moving—quickly, safely, and
            affordably.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={
              isContentInView ? { opacity: 1 } : { opacity: 0 }
            }
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-white">
            Whether you&apos;re a first-time importer or a seasoned
            business owner, we&apos;re here to make the process easy.
            From sourcing products to making supplier payments and
            handling weekly shipments, we&apos;ll walk you through it
            all. Schedule a quick call with our team and take the
            first step toward hassle-free shipping from China to
            Ghana.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              isContentInView ? { opacity: 1 } : { opacity: 0 }
            }
            transition={{ duration: 0.6, delay: 0.3 }}>
            <Button>
              <Link
                href="/schedule"
                className="flex items-center gap-2">
                Schedule a Call <Icon name="ArrowRight" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </Container>
  );
}

export default CTA;
