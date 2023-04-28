import { Link, useLocation } from 'react-router-dom';
import { FaGithubSquare, FaInstagram, FaTerminal } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import type { ReactNode } from 'react';
import { Container, Stack } from '@fjlaubscher/matter';

import styles from './layout.module.scss';

interface Props {
  children: ReactNode;
  title: string;
  description: string;
  image?: Blog.Image;
  variant?: 'standard' | 'with-hero';
}

const AppLayout = ({ children, title, description, image, variant = 'standard' }: Props) => {
  const { pathname } = useLocation();

  return (
    <>
      <Helmet>
        <title>{title} | Francois Laubscher</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={`${title} | Francois Laubscher`} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content={image?.small || 'https://francoislaubscher.dev/me.png'} />
      </Helmet>
      <nav className={styles.nav}>
        <Container className={styles.navContent}>
          <Link className={styles.home} to="/">
            <FaTerminal />
          </Link>
          <Stack className={styles.links} direction="row">
            <Link className={pathname.includes('/hobby') ? styles.active : undefined} to="/hobby">
              Hobby
            </Link>
            <Link
              className={pathname.includes('/wargaming') ? styles.active : undefined}
              to="/wargaming"
            >
              Wargaming
            </Link>
            <Link
              className={pathname.includes('/3d-printing') ? styles.active : undefined}
              to="/3d-printing"
            >
              3D Printing
            </Link>
          </Stack>
        </Container>
      </nav>
      {variant === 'with-hero' && (
        <section
          className={styles.hero}
          style={
            image
              ? {
                  backgroundImage: `url(${image.large})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }
              : undefined
          }
        >
          <div className={styles.heroText}>
            <h1>{title}</h1>
            <h2>{description}</h2>
          </div>
        </section>
      )}
      <main className={styles.content}>{children}</main>
      <img className={styles.wave} src="/wave.svg" alt="wave" />
      <footer className={styles.footer}>
        <Stack direction="column" className={styles.footerText}>
          <p>
            This blog serves as a way of documenting my thoughts related to software development,
            the wargaming hobby and whatever else comes to mind.
          </p>
          <a href="https://francoislaubscher.dev">View the professional side of me, here.</a>
        </Stack>
        <div className={styles.links}>
          <a target="_blank" rel="noreferrer" href="https://github.com/fjlaubscher">
            <FaGithubSquare />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/_chipgatsby_">
            <FaInstagram />
          </a>
        </div>
      </footer>
    </>
  );
};

export default AppLayout;
