import ReactMarkdown from 'react-markdown';

import styles from './markdown.module.scss';

interface Props {
  content: string;
}

const Markdown = ({ content }: Props) => (
  <ReactMarkdown linkTarget="_blank" className={styles.markdown}>
    {content}
  </ReactMarkdown>
);

export default Markdown;
