import { Icon, Typography } from '../../atoms';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
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
      <Typography variant="p" className="mb-3 text-sm text-gray-900 first-letter:uppercase">
        {description}
      </Typography>
      <a
        aria-label=""
        className="btn-services inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        href="/#contact"
      >
        Learn more
      </a>
    </div>
  );
};

export default ServiceCard;
