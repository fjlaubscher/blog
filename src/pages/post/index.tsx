import { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Alert, Container, Loader, Stack, Tag } from '@fjlaubscher/matter';
import { parseISO, format } from 'date-fns';

// components
import Layout from '../../components/layout';
import Markdown from '../../components/markdown';

// data
import data from '../../data.json';

// hooks
import useAsync from '../../hooks/use-async';

import styles from './post.module.scss';

const PostPage = () => {
  const { category, slug } = useParams();

  const {
    execute,
    status,
    value: markdown
  } = useAsync<string | undefined>(async () => {
    if (navigator.userAgent !== 'ReactSnap') {
      const response = await fetch(`/posts/${category}/${slug}.md`);
      if (response.ok) {
        const blob = await response.blob();
        return await blob.text();
      }
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
          <Stack direction="row" className={styles.tags}>
            <Tag>{format(parseISO(post!.date), 'd MMMM yyyy')}</Tag>
            <Link className={styles.tag} to={`/${post?.category}`}>
              <Tag variant="accent">{post?.category}</Tag>
            </Link>
          </Stack>
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
