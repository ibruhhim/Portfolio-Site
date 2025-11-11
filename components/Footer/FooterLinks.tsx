import React from 'react';

const FooterLinks: React.FC = () => {
  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Awards', href: '#awards' },
  ];

  return (
    <div>
      <h3 className="text-lg font-bold mb-4 text-black">Quick Links</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <a 
              href={link.href} 
              className="text-gray-600 hover:text-pink-600 transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;

