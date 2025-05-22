import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-600 text-white px-8 py-6 text-center">
      <p>Kontak: sedap@example.com | +62 812 3456 7890</p>
      <p>Sosial Media: @sedap.id</p>
      <div className="mt-2">
        <img src="/images/partner.png" alt="Partner" className="mx-auto w-32" />
      </div>
    </footer>
  );
}
