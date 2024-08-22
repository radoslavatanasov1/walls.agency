import React from 'react';

// Example logo URLs; in a real scenario, you'd use the actual logo files
const partners = [
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  },
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
 
];

const Partners = () => {
  return (
    <section id="partners" className="py-10 bg-transparent">
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex items-center animate-marquee space-x-8">
          {partners.concat(partners).map((partner, index) => (
            <div key={index} className="flex-shrink-0 flex items-center space-x-4 p-4">
              <img src={partner.logo} alt={`${partner.name} Logo`} className="h-12 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
