import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Alert, Container, Grid, Image, Loader, Modal, Stack, Tag } from '@fjlaubscher/matter';
import { parseISO, format } from 'date-fns';

// components
import Layout from '../../components/layout';

// data
import data from '../../data.json';

// hooks
import useAsync from '../../hooks/use-async';

import styles from './showcase.module.scss';

const ShowcasePage = () => {
  const { slug } = useParams();
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined);

  const {
    execute,
    status,
    value: images
  } = useAsync<Blog.ShowcaseImage[] | undefined>(async () => {
    const response = await fetch(`/posts/showcase/${slug}.json`);
    if (response.ok) {
      const images = await response.json();
      if (images) {
        return images as Blog.ShowcaseImage[];
      }
    }

    return undefined;
  }, false);

  const post = useMemo(() => {
    if (slug) {
      const posts = data as Blog.Post[];
      if (posts) {
        return posts.filter((p) => p.category === 'showcase' && p.slug === slug)[0];
      }
    }

    return undefined;
  }, [slug]);

  const selectedImage = useMemo(() => {
    if (images && selectedIndex !== undefined) {
      return images[selectedIndex];
    }
    return undefined;
  }, [images, selectedIndex]);

  useEffect(() => {
    execute();
  }, [slug]);

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
          {selectedImage && (
            <Modal
              className={styles.modal}
              visible={!!selectedImage}
              onOverlayClick={() => setSelectedIndex(undefined)}
              onClose={() => setSelectedIndex(undefined)}
            >
              <Image alt={selectedImage.alt} src={selectedImage.src} />
              <p className={styles.description}>{selectedImage.description}</p>
            </Modal>
          )}
          <Stack direction="column">
            <Stack direction="row" className={styles.tags}>
              <Tag>{format(parseISO(post!.date), 'd MMMM yyyy')}</Tag>
              <Link className={styles.tag} to={`/${post?.category}`}>
                <Tag variant="accent">{post?.category}</Tag>
              </Link>
            </Stack>
            {images && (
              <Grid className={styles.grid}>
                {images.map((image, i) => (
                  <Image
                    className={styles.image}
                    key={`image-${i}`}
                    alt={image.alt}
                    src={image.src}
                    onClick={() => setSelectedIndex(i)}
                  />
                ))}
              </Grid>
            )}
          </Stack>
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

export default ShowcasePage;
