"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border";

export function CTAButton() {
  const scrollToQuotation = () => {
    const quotationSection = document.getElementById('quotation');
    quotationSection?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div>
      <Button
        borderRadius="0.5rem"
        className="bg-[#ec8305] text-white border-neutral-200 dark:border-slate-800"
        onClick={scrollToQuotation}
      >
        Get A Quote Now!
      </Button>
    </div>
  );
}
