import React from "react";

export interface Props {
  content?: string;
}

export const Header: React.FC<Props> = ({content}) => {
  return (
    <div className="text-6xl bg-green-400 my-4">
      <span>{content}</span>
    </div>
  );
};
