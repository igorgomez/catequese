export interface StoryPage {
  title: string;
  content: string;
  image: string;
}

export interface Question {
  text: string;
  options: string[];
  correctOption: number;
  explanation: string;
}

export interface ModuleType {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  story: StoryPage[];
  quiz: Question[];
}