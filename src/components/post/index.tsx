import { Link } from 'react-router-dom';
import { Image, TagGroup, Tag } from '@fjlaubscher/matter';

// styles
import styles from './post.module.scss';

const Post = ({ category, slug, title, image }: Blog.Post) => (
  <Link to={`/${category}/${slug}`}>
    <div className={styles.post}>
      <Image src={image.small} alt={title} />
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <TagGroup className={styles.tags}>
          <Tag className={styles.tag} variant="accent">
            {category}
          </Tag>
        </TagGroup>
      </div>
    </div>
  </Link>
);

export default Post;
