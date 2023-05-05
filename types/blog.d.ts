declare namespace Blog {
  interface Image {
    small: string;
    large: string;
    social: string;
  }

  interface Post {
    date: string;
    category: 'code' | 'hobby' | 'wargaming' | 'showcase';
    slug: string;
    title: string;
    description: string;
    image: Image;
  }

  interface ShowcaseImage {
    src: string;
    alt: string;
    description: string;
  }
}
