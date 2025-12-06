import React from 'react';

import { TextHeader } from './TextHeader';

export interface EmployerProps {
    name: string;
    subname: string;
    jobTitle: string;
    timeframe: string;
    logo: string;
    description: string[];
}

const Employer: React.FC<EmployerProps> = ({ name, subname, timeframe, jobTitle, logo, description }) => {
    return (
        <div className="mb-2">
            <TextHeader variant="h3">{name}: <span className="subname">{subname}</span></TextHeader>
            <TextHeader variant="h4">{jobTitle}</TextHeader>
            <div className="text-sm text-gray-500">{timeframe}</div>
            <ul className="list-disc list-inside space-y-1 mt-1">
              {
                description.map((desc, idx) => {
                    return <li key={idx}>{desc}</li>
                })
              }
            </ul>
        </div>
    );
};

export default Employer;