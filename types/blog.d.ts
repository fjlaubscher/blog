declare namespace Blog {
  interface Image {
    small: string;
    large: string;
  }

  interface Post {
    date: string;
    category: 'hobby' | 'wargaming' | '3d-printing';
    slug: string;
    title: string;
    description: string;
    image: Image;
  }
}
