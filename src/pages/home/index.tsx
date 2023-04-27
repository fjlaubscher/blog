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

const Home = () => (
  <Layout title="Home" description="Welcome to my blog">
    <Hero />
    <About />
    <Container className={classnames(styles.container, styles.featured)}>
      <h2>Latest</h2>
      <Grid>
        {(data as Blog.Post[]).map((post, i) => (
          <Post key={`post-${i}`} {...post} />
        ))}
      </Grid>
    </Container>
  </Layout>
);

export default Home;
