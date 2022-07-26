export interface ICategories {
    id: string,
    name: string,
    icon: string
}

export interface ICourse {
    id: string,
    title: string;
    video: string;
    cover: string;
    rank: number;
    countRank: number;
    status: string;
    level: string;
    description: string;
    duration: number;
    countChapters: number;
    teacher: ITeacher;
    chapters: IChapter[];
    categories: string;
}

export interface ITeacher {
    id: string;
    name: string;
    description: string;
    avatar: string;
}
  
export interface IChapter {
    id: string;
    title: string;
    description: string;
    duration: number;
}
  
export interface ICourseProps {
    course: ICourse;
}

export interface IFilters {
    category: string,
    status: string
}

export interface ICoursesContext {
    course: ICourse | null,
    filters: IFilters,
    courses: ICourse[] | null
    coursesFiltered: ICourse[] | null
}