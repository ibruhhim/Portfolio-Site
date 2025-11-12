import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterContact: React.FC = () => {
  const contacts = [
    {
      icon: <FaGithub className="mr-3" size={18} />,
      label: 'GitHub',
      href: 'https://github.com/ibruhhim',
    },
    {
      icon: <FaLinkedin className="mr-3" size={18} />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ibrahim-ellahi',
    },
    {
      icon: <FaEnvelope className="mr-3" size={18} />,
      label: 'Email',
      href: 'mailto:ibrahim.ellahi@mail.utoronto.ca',
    },
  ];

  return (
    <div>
      <h3 className="text-lg font-bold mb-4 text-black">Connect</h3>
      <div className="flex flex-col gap-3">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith('mailto:') ? undefined : "_blank"}
            rel={contact.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
            className="flex items-center text-gray-600 hover:text-purple-600 transition-colors text-base md:text-sm font-medium"
          >
            {contact.icon}
            {contact.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterContact;

