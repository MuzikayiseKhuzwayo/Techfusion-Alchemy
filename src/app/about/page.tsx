"use client";

import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-[#F2C72C]">About Us</h1>
      <div className="section-title-divider"></div>
      <section className="mb-6 mt-10">
        <h2 className="text-2xl font-semibold mb-2 text-center">Our Story</h2>
        <div className="section-title-divider"></div>
        <p className="text-center mt-10">
          TechFusion Alchemy was founded with a vision to transform businesses through the power of automation.
          We saw the potential for AI and automation to revolutionise productivity and efficiency, and we set out
          to make these technologies accessible to businesses of all sizes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-center">Our Vision</h2>
        <div className="section-title-divider"></div>
        <p className="text-center mt-10">
          Our vision is to be the leading automation agency, empowering businesses to achieve their full potential
          through innovative AI solutions. We strive to be at the forefront of technological advancements,
          continuously pushing the boundaries of what's possible with automation.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-center">Our Values</h2>
        <div className="section-title-divider"></div>
        <ul className="text-center mt-10">
          <li>Innovation: We embrace new ideas and technologies.</li>
          <li>Reliability: We deliver consistent, high-quality solutions.</li>
          <li>Customer Focus: We prioritise our clients' needs and goals.</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
