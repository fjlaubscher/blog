import { useMemo } from 'react';
import { Container, Grid } from '@fjlaubscher/matter';
import classnames from 'classnames';

// components
import Layout from '../../components/layout';
import Post from '../../components/post';

import About from './about';
import Hero from './hero';

// data
import data from '../../data.json';

import styles from './home.module.scss';

const META_DESCRIPTION = `
    I've played Warhammer 40,000 (on-and-off) since 4th edition, starting with a Catachan Battle Force and an old 3rd edition Codex Supplement.
      
    I'm much more of a hobbyist than a "competitive wargamer" (yes, it's a thing).
    The entire process of building, painting and then playing with your models is what gets me.

    Recently, I've shifted my entire hobby focus to Bolt Action as I've gotten stuck in the world
    of historical WWII gaming.
    
    I think I'm getting old.
`;

const Home = () => {
  const latestPosts: Blog.Post[] = useMemo(() => {
    const posts = data as Blog.Post[];

    return posts.slice(0, 3);
  }, [data]);

  return (
    <Layout title="Blog" description={META_DESCRIPTION}>
      <Hero />
      <About />
      <Container className={classnames(styles.container, styles.featured)}>
        <h2>Latest</h2>
        <Grid>
          {latestPosts.map((post, i) => (
            <Post key={`post-${i}`} {...post} />
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;
