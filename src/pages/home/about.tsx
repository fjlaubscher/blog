import classnames from 'classnames';
import { Container } from '@fjlaubscher/matter';

import styles from './home.module.scss';

export const Paragraphs = () => (
  <>
    <p>
      I've played Warhammer 40,000 (on-and-off) since 4th edition, starting with a Catachan Battle
      Force and an old 3rd edition Codex Supplement.
    </p>
    <p>
      I'm much more of a hobbyist than a <i>competitive wargamer</i> (yes, it's a thing).
      <br />
      The entire process of building, painting and then playing with your models is what gets me.
    </p>
    <p>
      Recently, I've shifted my entire hobby focus to Bolt Action as I've gotten stuck in the world
      of historical WWII gaming.
      <br />
      <i>I think I'm getting old.</i>
    </p>
  </>
);

const About = () => (
  <Container className={classnames(styles.container, styles.about)}>
    <Paragraphs />
  </Container>
);

export default About;
