import { ReactNode } from 'react';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    return (
        <div
            className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
        >
            <div
                className="fixed inset-0 bg-black/50 transition-opacity duration-300"
                onClick={onClose}
            />
            <div
                className={`bg-white p-8 rounded-lg max-w-md w-full mx-4 relative transform transition-all duration-300 ${isOpen ? 'scale-100' : 'scale-95'
                    }`}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                >
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
}