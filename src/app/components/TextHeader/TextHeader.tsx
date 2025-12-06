export interface HeaderProps {
    children?: React.ReactNode;
    variant: 'h1' | 'h2' | 'h3' | 'h4';
    classes?: string;
}

export const TextHeader = ({ classes, children, variant }: HeaderProps) => {
    const getHeaderStyle = (variant: 'h1' | 'h2' | 'h3' | 'h4') => {
        switch (variant) {
            case 'h1':
                return 'text-4xl font-bold';
            case 'h2':
                return 'text-2xl leading-relaxed';
            case 'h3':
                return 'text-xl font-semibold';
            case 'h4':
                return 'text-lg font-medium';
            default:
                return '';
        }
    };

    const TagMap = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
    } as const;

    const Tag = TagMap[variant];

    return (
        <Tag className={`${getHeaderStyle(variant)} ${classes}`}>
            {children}
        </Tag>
    )
}

export default TextHeader;