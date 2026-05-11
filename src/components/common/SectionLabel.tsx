import React from 'react';

interface SectionLabelProps {
    children: React.ReactNode;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ children }) => {
    return <span className="section-label">{children}</span>;
};

export default SectionLabel;
