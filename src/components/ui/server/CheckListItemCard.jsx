import CheckListItem from "./CheckListItem";
import { Card, CardHeader, CardContent } from "../server/card";

const CheckListItemCard = ({ title, list }) => {
  return (
    <Card className="w-full mt-2.5 shadow-md">
      <CardHeader className="p-4 sm:p-6 pt-4 sm:pt-6">
        <h3 className="text-xl sm:text-2xl font-bold">
          {title}
        </h3>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0">
        <div className="space-y-3 sm:space-y-4">
          {list.map((arrivals) => (
            <CheckListItem key={arrivals.key} task={arrivals} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CheckListItemCard; 