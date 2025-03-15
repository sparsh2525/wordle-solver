import React from 'react';

interface StatusButtonProps {
    onClick?: () => void;
    Icon: React.ReactNode;
    demo?: boolean;
}

const StatusButton: React.FC<StatusButtonProps> = ({ onClick, Icon, demo = false }) => {
    return (
        <button
            onClick={() => onClick?.()}
            className={`rounded-full w-10 h-10 flex items-center justify-center border-none bg-slate-400 cursor-pointer ${demo ? 'scale-50' : ''}`}
            tabIndex={1}
        >
            {Icon}
        </button>
    );
};

export default StatusButton;
