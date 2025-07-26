"use client"

import React from 'react';
import { cn } from "../../lib/utils";

const PostTitle = ({ children, className }) => {
  return (
    <h1 className={cn(
      "mt-5 text-2xl md:text-4xl lg:text-[75px] font-bold leading-tight lg:leading-[1.1]",
      className
    )}>
      {children}
    </h1>
  );
};

export default PostTitle;
