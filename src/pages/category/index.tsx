import { useMemo } from 'react';
import { Container, Grid } from '@fjlaubscher/matter';
import { useParams } from 'react-router-dom';

// components
import Layout from '../../components/layout';
import Post from '../../components/post';

// data
import data from '../../data.json';

// utils
import { capitalize } from '../../utils/text';

const Category = () => {
  const { category } = useParams();

  const postsByCategory: Blog.Post[] = useMemo(() => {
    if (category) {
      const posts = data as Blog.Post[];
      return posts.filter((p) => p.category === category);
    }

    return [];
  }, [data, category]);

  return (
    <Layout
      title={capitalize(category || '')}
      description={`Posts tagged with '${capitalize(category || '')}'`}
      variant="with-hero"
    >
      <Container>
        <Grid>
          {postsByCategory.map((post, i) => (
            <Post key={`post -${i}`} {...post} />
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Category;
