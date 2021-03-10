import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://www.linkedin.com/in/jaideepvaidya22/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://www.facebook.com/jaideepvaidya22/',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'https://www.instagram.com/jaideepvaidya22/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://twitter.com/jaideepvaidya22/',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'mailto:jvaidya@clemson.edu',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
