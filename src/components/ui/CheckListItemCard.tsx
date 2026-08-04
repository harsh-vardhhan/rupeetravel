import CheckListItem, { type TaskItem } from "./CheckListItem";
import { Card, CardHeader, CardContent } from "./card";

export interface CheckListItemCardProps {
  title: string;
  list: TaskItem[];
}

const CheckListItemCard: React.FC<CheckListItemCardProps> = ({ title, list }) => {
  return (
    <Card className="w-full mt-4 shadow-sm hover:shadow-md transition-shadow border-border/80">
      <CardHeader className="p-4 sm:p-6 pb-2">
        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
          {title}
        </h3>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-2">
        <div className="space-y-1">
          {list.map((task, i) => (
            <CheckListItem key={task.key ?? i} task={task} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CheckListItemCard;
