import { useState } from 'react';
import Modal from './Modal';

export default function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div
                className="h-[60vh] bg-cover bg-center bg-no-repeat bg-fixed flex flex-col items-center justify-center bg-black/70 bg-blend-overlay"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                }}
            >
                <h1 className="montserrat text-3xl md:text-5xl font-bold mb-8 text-center text-white">
                    LET'S CONNECT
                </h1>
                <p className="text-lg text-white text-center px-8 mb-8">
                    I'm here to help you with all your real estate needs. Please feel free to reach out to me.
                </p>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-8 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-colors"
                >
                    Contact Information
                </button>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                    <div className="space-y-4">
                        <p>
                            <strong>Email:</strong><br />
                            <a href="mailto:vernonu@bellsouth.net" className="text-blue-600 hover:underline">
                                vernonu@bellsouth.net
                            </a>
                        </p>
                        <p>
                            <strong>Phone:</strong><br />
                            <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                                305-323-4269
                            </a>
                        </p>
                        <p>
                            <strong>Address:</strong><br />
                            814 Ponce DeLeon Boulevard, Suite #503<br />
                            Coral Gables, FL, 33134
                        </p>

                    </div>
                </div>
            </Modal>
        </>
    );
}