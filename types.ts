export enum ContentType {
  EVENT = 'EVENT',
  NEWS = 'NEWS',
  PAGE = 'PAGE'
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML or Markdown
  image: string;
  date: string;
  type: ContentType;
  tags: string[];
}

export interface NavItem {
  label: string;
  path: string;
}

export interface User {
  id: string;
  name: string;
  role: 'admin' | 'editor';
}

// Mocking the structure of what we'd get from WP API
export interface WPRawPost {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  date: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
  };
}