import Link from "next/link";
import { Badge } from "../ui/badge";

const CheckListItem = ({ task }) => {
  return (
    <div className="border-b last:border-0 pb-3 sm:pb-4 last:pb-0">
      <Link href={task.link}>
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="text-lg sm:text-xl font-bold">
            {task.heading}
          </h4>
          <Badge 
            variant={task.tagColor === 'orange' ? 'default' : task.tagColor === 'teal' ? 'secondary' : task.tagColor === 'red' ? 'destructive' : 'outline'}
            className="w-fit"
            style={{ 
              backgroundColor: task.tagColor === 'orange' ? '#FED7AA' : 
                            task.tagColor === 'teal' ? '#99F6E4' : 
                            task.tagColor === 'red' ? '#FECACA' : '#F1F5F9',
              color: task.tagColor === 'orange' ? '#9A3412' : 
                    task.tagColor === 'teal' ? '#134E4A' : 
                    task.tagColor === 'red' ? '#991B1B' : '#475569',
              fontWeight: "500"
            }}
          >
            {task.tagText}
          </Badge>
        </div>
        <p className="font-medium text-sm pt-1 sm:pt-2">
          {task.subHeading}
        </p>
      </Link>
    </div>
  );
};

export default CheckListItem; 