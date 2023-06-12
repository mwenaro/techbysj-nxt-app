import { Course } from '@/types';
import { SectionSubTitle, SectionTitle, SectionWrapper } from '../../organisms';
import CourseCard from './CourseCard';
import { OUR_COURSES } from '@/constants/COURSES';

interface CoursesSectionProps {
  courses?: any[];
  children?: React.ReactNode;
}

const CoursesSection: React.FC<CoursesSectionProps> = ({
  children,
  courses = OUR_COURSES
}) => (
  <SectionWrapper sectionId="courses" className="bg-blue-50 dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
      <SectionTitle className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
        explore our <br /> awesome{' '}
        <span className="underline decoration-blue-500">Courses</span>
      </SectionTitle>
      <SectionSubTitle className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
        Our courses are set to start on 12th June. To enroll click on the forward
        arrow on the course you wish to enroll for here.
      </SectionSubTitle>
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
        {courses !== undefined && courses.length > 0 ? (
          <>
            {courses.map((course: Course, indx: number) => (
              <CourseCard key={indx} {...course} />
            ))}
          </>
        ) : (
          children
        )}
      </div>
    </div>
  </SectionWrapper>
);

export default CoursesSection;
