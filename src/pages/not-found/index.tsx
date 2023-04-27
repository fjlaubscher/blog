import { FaTerminal } from 'react-icons/fa';

// components
import Layout from '../../components/layout';

import styles from './not-found.module.scss';

const NotFound = () => (
  <Layout title="Not Found" description="The page you're looking for does not exist">
    <div className={styles.content}>
      <FaTerminal className={styles.notFound} />
    </div>
  </Layout>
);

export default NotFound;
