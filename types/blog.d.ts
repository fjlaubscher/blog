declare namespace Blog {
  interface Image {
    small: string;
    medium: string;
    large: string;
  }

  interface Post {
    category: 'hobby' | 'wargaming' | '3d-printing';
    slug: string;
    title: string;
    description: string;
    image: Image;
  }
}
