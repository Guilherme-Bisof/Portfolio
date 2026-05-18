export interface Project {
  id: string | number;
  title: string;
  description: string;
  image?: string | null;
  imageUrl?: string | null;
  repoUrl?: string;
  deployInput?: string;
  technologies?: string[];
  type?: string;
  challenge?: string;
  solution?: string;
  learned?: string;
}
