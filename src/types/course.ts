export type Course = {
    course_id: number;
    course_label: string;
    course_heading: string;
    sections: Section[];
    completion_percent: number;
    correct_percent: number;
    course_access: "FREE" | "PAID",
    course_quiz_schedule?: Schedule;
  };
  
  export type Schedule = {
    active_ind: boolean;
    country_code: string;
    interval_hours: number;
    last_attempt_timestamp?: string;
    phone_number: string;
  }
  
  export type Section = {
    section_id: number;
    section_label: string;
    section_heading: string;
    chapters: Chapter[];
  };
  
  export type Chapter = {
    chapter_id: number;
    section_id: number;
    chapter_label: string;
    chapter_heading: string;
    correct_percent: number;
    progress: ChapterInfo;
    weightage?: number;
  };
  
  export type ChapterInfo = {
    is_complete: boolean;
    total_answered_right: number;
    total_questions_asked: number;
  }