import React from 'react';

const DetailedOfferingsPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Detailed Offerings</h1>
      {/* Add detailed descriptions of each service */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">AI System Development</h2>
        <p>
          Our AI system development service focuses on creating customised automation workflows to optimise your business processes.
          We analyse your existing workflows, identify bottlenecks, and design AI-driven solutions tailored to your specific needs.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Workflow Optimisation</h2>
        <p>
          We streamline tasks for maximum productivity. Our experts use cutting-edge AI technologies to automate repetitive tasks,
          improve data accuracy, and enhance overall efficiency.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">AR and Digital Integration</h2>
        <p>
          Offering Augmented Reality solutions for enhanced customer engagement. We integrate AR seamlessly with your digital presence,
          creating immersive experiences that captivate your customers and drive sales.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Consulting</h2>
        <p>
          Providing expert advice on AI implementation tailored to your business needs. Our consulting services provide you with the insights
          and strategies needed to successfully implement AI in your business.
        </p>
      </section>
    </div>
  );
};

export default DetailedOfferingsPage;
