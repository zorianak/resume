export interface PillProps {
  children: React.ReactNode;
  className?: string;
}

const Pill = ({ children, className }: PillProps) => {
  return (
    <div className={`${className} rounded-full inline-block px-3 py-1 bg-rose-700 border border-slate-900 text-sm`}>
      {children}
    </div>
  );
};

export default Pill;
