"use client"
import { Link as ScrollLink } from 'react-scroll';
import { Button, Icon, Typography } from '../../atoms';

interface CourseCardProps {
  icon?: React.ReactNode | string;
  enrollmentLink?: string;
  title: string;
  description: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  enrollmentLink,
  icon,
  title,
  description,
}) => {
  return (
    <div className="max-w-md mx-auto text-center">
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24">
        {typeof icon == 'string' ? <Icon variant={icon as any} /> : icon}
      </div>
      <Typography variant="h6" className="mb-3 text-xl font-bold leading-5">
        {title}
      </Typography>
      <Typography variant="p" className="mb-3 text-sm text-gray-900">
        {description}
      </Typography>
      
      <ScrollLink
          to={'booking'}
          // to={link.href}
          smooth={true}
          duration={500}
          offset={-70} // Adjust the offset as needed to account for fixed headers or other elements
          // className={`bg-skin-accent text-white font-bold uppercase  ${linkItemStyles} hover:bg-skin-primary`}
        >
          <Button  className='hover:bg-skin-accent'>Book Now</Button>
        </ScrollLink>
      {/* <a
        aria-label=""
        // className="btn-services inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        href="/#booking"
      >
        <Button  className='hover:bg-skin-accent'>Book Now</Button>
      </a> */}
    </div>
  );
};

export default CourseCard;
