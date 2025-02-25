import React from 'react';

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
        <>
            <h3>{name}: <span className="subname">{subname}</span></h3>
            <h4>{jobTitle}</h4>
            <div>{timeframe}</div>
            <ul>
              <li>Responsibility 1</li>
              <li>Responsibility 2</li>
              <li>Responsibility 3</li>
            </ul>
        </>
    );
};

export default Employer;