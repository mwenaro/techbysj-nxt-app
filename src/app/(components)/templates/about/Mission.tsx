import { ReactNode } from 'react';
import { Icon, Typography } from '../../atoms';

interface MissionProps {
  title: string;
  icon: ReactNode | string;
  description: string;
}

const Mission: React.FC<MissionProps> = ({ title, icon, description }) => {
  return (
    <div className="rounded-2xl p-10 bg-white 2xl:absolute 2xl:w-[30rem] 2xl:top-[38rem] 2xl:right-80 w-4/5 block mt-10 mx-auto relative shadow-lg">
      <div className="text-skin-accent    flex gap-2 justify-center font-bold items-center text-xl pb-4">
        <Typography variant="h3">{title}</Typography>
        {typeof icon == 'string' ? <Icon variant={icon as any} /> : icon}
      </div>

      <Typography variant="h5">{description}</Typography>
    </div>
  );
};

export default Mission;
