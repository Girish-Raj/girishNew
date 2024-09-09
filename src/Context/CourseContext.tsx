import React, { ReactNode, useState } from "react";
import { createContext, useContext } from "react";
import { Course } from "../types/course";

type SelectedCourse = {
  course: Course | null;
  user: string | undefined;
  setCourse: Function;
  setUser: Function;
};

export const CourseContext = createContext({
  course: null,
  setCourse: () => {},
  user: undefined,
  setUser: () => {},
} as SelectedCourse);

export const CourseProvider = ({ children }: { children: React.ReactNode }) => {
  const [course, setCourse] = useState<Course | null>(null);
  const [user, setUser] = useState<string | undefined>();

  return (
    <CourseContext.Provider value={{ course, setCourse, user, setUser }}>
      {children}
    </CourseContext.Provider>
  );
};
