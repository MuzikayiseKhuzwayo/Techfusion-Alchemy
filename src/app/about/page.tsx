"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-[#F2C72C]">About Us</h1>
      <div className="section-title-divider"></div>
      <section className="mb-6 mt-10">
        <h2 className="text-2xl font-semibold mb-2 text-center text-[#F2C72C]">Our Story</h2>
        <div className="section-title-divider"></div>
        <p className="text-center mt-10">
          TechFusion Alchemy was founded with a vision to transform businesses through the power of automation.
          We saw the potential for AI and automation to revolutionise productivity and efficiency, and we set out
          to make these technologies accessible to businesses of all sizes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-center text-[#F2C72C]">Our Vision</h2>
        <div className="section-title-divider"></div>
        <p className="text-center mt-10">
          Our vision is to be the leading automation agency, empowering businesses to achieve their full potential
          through innovative AI solutions. We strive to be at the forefront of technological advancements,
          continuously pushing the boundaries of what's possible with automation.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-center text-[#F2C72C]">Our Values</h2>
        <div className="section-title-divider"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-center text-[#8A0000]">Innovation</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between">
              <Image
                src="https://picsum.photos/300/200?random=3"
                alt="Innovation"
                width={300}
                height={200}
                className="rounded-md shadow-md mb-4"
              />
              <CardDescription className="text-center">
                We embrace new ideas and technologies.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-center text-[#8A0000]">Reliability</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between">
              <Image
                src="https://picsum.photos/300/200?random=4"
                alt="Reliability"
                width={300}
                height={200}
                className="rounded-md shadow-md mb-4"
              />
              <CardDescription className="text-center">
                We deliver consistent, high-quality solutions.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-center text-[#8A0000]">Customer Focus</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between">
              <Image
                src="https://picsum.photos/300/200?random=5"
                alt="Customer Focus"
                width={300}
                height={200}
                className="rounded-md shadow-md mb-4"
              />
              <CardDescription className="text-center">
                We prioritise our clients' needs and goals.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

