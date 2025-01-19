'use client'

import React from 'react';
import { MissionAims } from '../../_components/mission';
import AboutUs from '@/app/_components/aboutUs';

export default function About() {
  return (
    <div className="bg-white">
      <div  className='pb-20'/>
        <AboutUs/>
        <MissionAims/>
    </div>
  );
}