export interface Idea {
  id: string;
  content: string;
  theme: string;
  createdAt: Date;
  mood: string;
}

export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  particles: string[];
  description: string;
  backgroundGradient: string;
}
