import { Skill } from '@/data/skills';
import { Tooltip } from './tooltip';

export const SkillBadge = ({ name, icon: Icon }: Skill) => {
  return (
    <Tooltip content={name} delayDuration={0}>
      <div className="group flex items-center justify-center rounded-md border bg-muted/50 p-4">
        <Icon className="size-7 transition-all group-hover:scale-110" />
      </div>
    </Tooltip>
  );
};
