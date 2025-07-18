import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import { useTheme } from './ThemeContext';

const Footer: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`footer ${isDark ? 'dark' : ''}`}>
      <div className="footer-container">
        <div className="footer-section">
          <h3>DayKart</h3>
          <p>New Collection of Hostel needs 2025</p>
        </div>

        <div className="footer-section">
          <h3>EXPLORE</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Featured</a></li>
            <li><a href="#">Fancy</a></li>
            <li><a href="#">New</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>SUPPORT</h3>
          <ul className="footer-links">
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="WhatsApp">
              <MessageCircle size={20} />
            </a>
            <a href="#" aria-label="Google">
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>G</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 DayKart. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;