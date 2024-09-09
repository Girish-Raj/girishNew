export type Option = {
    id: number;
    text: string;
    desc: string;
    image?: string;
    option_id: string;
  };
  
  export type Question = {
    id: number;
    question_id: number;
    is_answered: boolean | null;
    is_correct: boolean | null;
    text: string;
    image: string;
    options: Option[];
    option_selected: string;
    correct_id: number;
    start_timestamp: string | null;
    end_timestamp: string | null;
    order : string[]
  };
  
  
  export enum TestType {
    customTest = "custom_test",
    fullTest = "full_test",
    quiz =  "quiz",
    chapterQuiz = "chapter_test"
  }