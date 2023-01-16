import './footer.css'
import { logo } from "../../assets";
import { footerLinks, socialMedia } from "../../constants";

const Footer = () => (
  <section className='fsection' >
    <div className="footer">
      <div className='f1'>
        <div className='f1i'><img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        /><span>Artifloric </span></div>
        <p >
Next Generation Software Solutions
        </p>
      </div>

      <div className='footerContent'>
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} >
            <h4 >
              {footerlink.title}
            </h4>
            <ul >
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                 
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className='lastFooter' >
      <p >
        Copyright Ⓒ 2023 Artifloric. All Rights Reserved.
      </p>

      <div className='socialmedia' >
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            onClick={() => window.open(social.link)} className="sm"
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;