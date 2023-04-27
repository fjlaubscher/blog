import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Alert, Container, Loader } from '@fjlaubscher/matter';

// components
import Layout from '../../components/layout';
import Markdown from '../../components/markdown';

// data
import data from '../../data.json';

// hooks
import useAsync from '../../hooks/use-async';

const PostPage = () => {
  const { category, slug } = useParams();

  const {
    execute,
    status,
    value: markdown
  } = useAsync<string | undefined>(async () => {
    const response = await fetch(`/posts/${category}/${slug}.md`);
    if (response.ok) {
      const blob = await response.blob();
      return await blob.text();
    }

    return undefined;
  }, false);

  const post = useMemo(() => {
    if (category && slug) {
      const posts = data as Blog.Post[];
      if (posts) {
        return posts.filter((p) => p.category === category && p.slug === slug)[0];
      }
    }

    return undefined;
  }, [category, slug]);

  useEffect(() => {
    execute();
  }, [category, slug]);

  return (
    <Layout
      title={post?.title || 'Loading'}
      description={post?.description || ''}
      variant="with-hero"
      image={post?.image}
    >
      {status === 'pending' && <Loader />}
      {status === 'success' && (
        <Container>
          <Markdown content={markdown || ''} />
        </Container>
      )}
      {status === 'error' && (
        <Alert variant="error">
          <p>This post's content has gone missing!?</p>
        </Alert>
      )}
    </Layout>
  );
};

export default PostPage;
