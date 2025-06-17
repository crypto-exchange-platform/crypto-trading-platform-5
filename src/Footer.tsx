const Footer = () => {
  const footerLinks = [
    {
      title: 'Products',
      links: ['Exchange', 'Wallet', 'Crypto Cards', 'Institutional', 'API'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Blog', 'Press', 'Legal'],
    },
    {
      title: 'Support',
      links: ['Help Center', 'Contact Us', 'System Status', 'Fees', 'Security'],
    },
  ];

  const socialIcons = [
    'fab fa-twitter',
    'fab fa-facebook',
    'fab fa-instagram',
    'fab fa-linkedin',
    'fab fa-youtube',
  ];

  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              CryptoVerse
            </h3>
            <p className="text-gray-400 mb-6">
              The most trusted cryptocurrency platform for trading, investing, and securing your digital assets.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((icon, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-white">
                  <i className={`${icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group, i) => (
            <div key={i}>
              <h4 className="text-white font-semibold mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-gray-400 hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2023 CryptoVerse. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 