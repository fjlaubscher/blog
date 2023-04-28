import { Link } from 'react-router-dom';
import { Image, TagGroup, Tag, Stack } from '@fjlaubscher/matter';

// styles
import styles from './post.module.scss';
import { format, parseISO } from 'date-fns';

const Post = ({ category, date, slug, title, image }: Blog.Post) => (
  <Link to={`/${category}/${slug}`}>
    <div className={styles.post}>
      <Image src={image.small} alt={title} />
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <Stack direction="row" className={styles.tags}>
          <Tag>{format(parseISO(date), 'd MMMM yyyy')}</Tag>
          <Tag className={styles.tag} variant="accent">
            {category}
          </Tag>
        </Stack>
      </div>
    </div>
  </Link>
);

export default Post;
