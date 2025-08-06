'use client';

import React from 'react';

const BOOKING_URL = 'https://calendly.com/provostlucas/30min';

export default function BookingButton() {
  const handleClick = () => {
    window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      type="button"
      className="bg-primary h-[41px] w-[216px] cursor-pointer rounded-[5px] text-[14px] text-white"
      onClick={handleClick}
    >
      Prendre RDV
    </button>
  );
}
