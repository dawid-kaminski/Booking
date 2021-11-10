import React from 'react';
import './SocialMedia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faPinterestP,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

function SocialMedia() {
  return (
    <div className="social-media">
      <a
        href="https://www.facebook.com/dawid.kaminski1/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="social-media__item-styling facebook">
          <FontAwesomeIcon icon={faFacebookF} color="white" size="2x" />
        </div>
      </a>
      <a
        href="http://www.twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="social-media__item-styling twitter">
          <FontAwesomeIcon icon={faTwitter} color="white" size="2x" />
        </div>
      </a>
      <a
        href="http://www.pinterest.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="social-media__item-styling pinterest">
          <FontAwesomeIcon icon={faPinterestP} color="white" size="2x" />
        </div>
      </a>
      <a
        href="http://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="social-media__item-styling instagram">
          <FontAwesomeIcon icon={faInstagram} color="white" size="2x" />
        </div>
      </a>
      <a
        href="https://www.youtube.com/channel/UCL-0oMbpsE931-xv3i-6xfg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="social-media__item-styling youtube">
          <FontAwesomeIcon icon={faYoutube} color="white" size="2x" />
        </div>
      </a>
    </div>
  );
}

export default SocialMedia;
