import { ICourse } from "../../types";
import { useEffect, useState } from "react";

const useSearch = (courses: ICourse[] | null) => {
  const [coursesFiltered, setFilteredCourses] = useState(courses);

  const filterCourses = (text: string) => {
    const coursesCopy = JSON.parse(JSON.stringify(courses));
    if (text !== "") {
      setFilteredCourses(
        coursesCopy.filter((course) =>
          String(course.title).toLowerCase().includes(text)
        )
      );
    } else {
      setFilteredCourses(courses);
    }
  };

  useEffect(() => setFilteredCourses(courses), [courses]);

  return { coursesFiltered, filterCourses };
};

export default useSearch;
