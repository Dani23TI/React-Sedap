import React from "react";
import testimonials from "../components/testimonis.json";

export default function Testimoni() {
  return (
    <section id="testimoni" className="px-8 py-16 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Apa Kata Mereka</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow text-center">
            <img src={item.avatar} alt={item.name} className="w-16 h-16 rounded-full mx-auto mb-2" />
            <h4 className="font-semibold">{item.name}</h4>
            <p className="text-gray-600 text-sm italic">"{item.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
