import Image from "next/image";
import { cn } from "../lib/utils";

export const dynamic = 'force-static';

const Avatar = ({ name, picture, className }) => {
  return (
    <div className={cn(
      "flex flex-wrap items-center gap-4 my-5",
      className
    )}>
      <div>
        <Image 
          height={48} 
          width={48} 
          alt={name} 
          src={picture}
          className="rounded-full"
        />
      </div>
      <div>
        <p className="font-bold text-base mt-3">
          {name}
        </p>
      </div>
    </div>
  );
};

export default Avatar;
