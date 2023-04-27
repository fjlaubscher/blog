import { FaHeart } from 'react-icons/fa';
import { Container } from '@fjlaubscher/matter';

// assets
import LightAvatarUrl from './me-light.svg';
import DarkAvatarUrl from './me-dark.svg';

// components
import { Paragraphs } from './about.tsx';

import styles from './home.module.scss';

const Hero = () => (
  <Container className={styles.hero}>
    <div className={styles.text}>
      <h1>Hi! I&apos;m Francois.</h1>
      <h3>
        I <FaHeart /> the wargaming hobby.
      </h3>
      <div className={styles.about}>
        <Paragraphs />
      </div>
    </div>
    <div className={styles.me}>
      <img src={LightAvatarUrl} alt="avatar" />
      <img src={DarkAvatarUrl} alt="avatar" />
    </div>
  </Container>
);

export default Hero;
