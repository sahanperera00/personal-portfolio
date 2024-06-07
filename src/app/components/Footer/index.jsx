import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div class="container mx-auto my-5 text-center">
      <p>&copy;{currentYear} Sahan Perera. All rights reserved.</p>
    </div>
  );
}
