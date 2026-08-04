import Link from "next/link";
import { Badge } from "./badge";
import { ChevronRight } from "lucide-react";

export interface TaskItem {
  key?: number | string;
  heading: string;
  subHeading: string;
  tagText: string;
  tagColor: "orange" | "teal" | "red" | "blue" | string;
  link: string;
}

export interface CheckListItemProps {
  task: TaskItem;
}

const getTagStyles = (color: string) => {
  switch (color) {
    case "orange":
      return "bg-orange-100 text-orange-900 border-orange-200 dark:bg-orange-950 dark:text-orange-200 dark:border-orange-800";
    case "teal":
      return "bg-teal-100 text-teal-900 border-teal-200 dark:bg-teal-950 dark:text-teal-200 dark:border-teal-800";
    case "red":
      return "bg-red-100 text-red-900 border-red-200 dark:bg-red-950 dark:text-red-200 dark:border-red-800";
    case "blue":
      return "bg-blue-100 text-blue-900 border-blue-200 dark:bg-blue-950 dark:text-blue-200 dark:border-blue-800";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

const CheckListItem: React.FC<CheckListItemProps> = ({ task }) => {
  return (
    <div className="border-b last:border-0 pb-3 sm:pb-4 last:pb-0">
      <Link href={task.link} className="group block rounded-lg p-2.5 -mx-2 hover:bg-muted/60 transition-colors">
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-base sm:text-lg font-bold text-foreground group-hover:text-green-600 transition-colors">
              {task.heading}
            </h4>
            <Badge 
              variant="outline"
              className={`w-fit font-medium border ${getTagStyles(task.tagColor)}`}
            >
              {task.tagText}
            </Badge>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground/60 group-hover:text-green-600 group-hover:translate-x-0.5 transition-all shrink-0" />
        </div>
        <p className="font-medium text-xs sm:text-sm text-foreground/85 pt-1 group-hover:text-foreground transition-colors">
          {task.subHeading}
        </p>
      </Link>
    </div>
  );
};

export default CheckListItem;
