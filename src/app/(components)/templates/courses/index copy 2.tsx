import { SectionSubTitle, SectionTitle, SectionWrapper } from '../../organisms';
import CourseCard from './CourseCard';

const CoursesSection: React.FC = () => {
  return (
    <SectionWrapper sectionId="courses" className="bg-blue-50 dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <SectionTitle className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          explore our <br /> awesome{' '}
          <span className="underline decoration-blue-500">Courses</span>
        </SectionTitle>
        <SectionSubTitle className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
          Our courses are set to start on 15th May. To enroll click on the
          forward arrow on the course you wish to enroll for here.
        </SectionSubTitle>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <CourseCard
            title="Data Science"
            description="Learn Data Science using python. The course entails in-depth training on Nympy, Pandas, Matplotlib, Searborn, Plotly and many more modules. Enroll today."
            enrollmentLink="https://docs.google.com/forms/d/e/1FAIpQLSeFa5Jy2Qcf9Fh5C8v-_TbaZiEK41DDnPElz-XrCYGdV_utqQ/viewform?usp=sf_link"
          />
          <CourseCard
            title="Web Development"
            description="Are you ready to be a web developer? Get started on this course and learn how to develop responsive websites using HTML, CSS, and JavaScript."
            enrollmentLink="https://docs.google.com/forms/d/e/1FAIpQLScuJ1uWPvt2u4WUZQ3atjfh6jZP7ntX7WouPFYN9xhWdZ_HAg/viewform?usp=sf_link"
          />
          <CourseCard
            title="Graphics Design"
            description="Learn graphics designing using Adobe Photoshop, Adobe Illustrator, and Corel draw. Enroll today."
            enrollmentLink="https://docs.google.com/forms/d/e/1FAIpQLSfMnEXBQ1YJmCKGQ00LLUcQEMqUhJu98_tf6CbbcL9ffGT2jQ/viewform"
          />
          <CourseCard
            title="Game Development"
            description="Do you have a desire to create your own game? Learn gaming by creating your own game logics and graphics. Enroll today."
            enrollmentLink="https://docs.google.com/forms/d/e/1FAIpQLScaQhhKFBLjBsXz-z"
          />
          {/* Add more CourseCard components for additional courses */}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CoursesSection;
