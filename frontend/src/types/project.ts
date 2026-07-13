export interface Project {
  id: string | number;
  title: string;
  titleEn?: string | null;
  description: string;
  descriptionEn?: string | null;
  image?: string | null;
  imageUrl?: string | null;
  repoUrl?: string;
  deployInput?: string;
  technologies?: string[];
  type?: string;
  challenge?: string;
  challengeEn?: string | null;
  solution?: string;
  solutionEn?: string | null;
  learned?: string;
  learnedEn?: string | null;
}
