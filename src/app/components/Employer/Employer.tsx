import React from "react";

import { TextHeader } from "../TextHeader";
import { Pill } from "../Pill";

export interface EmployerProps {
  name: string;
  subname?: string;
  jobTitle: string;
  timeframe: string;
  logo: string;
  skills?: string[];
  description: string[];
}

const Employer: React.FC<EmployerProps> = ({ name, subname, timeframe, jobTitle, skills, description }) => {
  console.log("skills", skills);
  return (
    <div className="mb-2 flex flex-row">
      <div className="min-w-[200px]">
        <div className="text-sm text-gray-500">{timeframe}</div>
      </div>
      <div>
        <TextHeader variant="h3">
          {name}
          {subname && ": "} <span className="subname">{subname}</span>
        </TextHeader>
        <TextHeader variant="h4">{jobTitle}</TextHeader>
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
