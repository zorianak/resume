"use client";
import React from "react";

import { TextHeader } from "../TextHeader";
import { Pill } from "../Pill";
import { Icon } from "../Icon";

export interface EmployerProps {
  name: string;
  subname?: string;
  jobTitle: string;
  timeframe: string;
  logo: string;
  link: string;
  skills?: string[];
  description: string[];
}

const Employer: React.FC<EmployerProps> = ({ name, subname, timeframe, jobTitle, skills, description, link }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };
  return (
    <div
      onClick={handleClick}
      className="group flex flex-col sm:flex-row space-y-2 border-b hover:border border-gray-900 pb-2 hover:p-4 hover:-mr-5 hover:cursor-pointer transition-all duration-300 ease-in-out"
    >
      <div className="min-w-[200px]">
        <div className="text-sm text-gray-400 mt-2">{timeframe}</div>
      </div>
      <div className="space-y-2">
        <TextHeader variant="h3" classes="group-hover:text-red-400 flex items-center gap-1">
          <span>{name}</span>
          {subname && ": "} <span className="subname">{subname}</span>
          <Icon type="external" className="inline-block flex-shrink-0" size={16} />
        </TextHeader>
        <TextHeader variant="h4" classes="flex items-center gap-1">
          {jobTitle}
        </TextHeader>
        {skills && skills.length > 0 && (
          <div className="space-x-2 mb-2 ">
            {skills.map((skill, idx) => {
              return <Pill key={idx}>{skill}</Pill>;
            })}
          </div>
        )}
        {description.map((desc, idx) => {
          return <p key={idx}>{desc}</p>;
        })}
      </div>
    </div>
  );
};

export default Employer;
