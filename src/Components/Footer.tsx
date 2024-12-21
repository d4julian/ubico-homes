export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-black">
            <div className="max-w-6xl mx-auto py-12 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Vernon Ubico</h3>
                        <p>
                            814 Ponce DeLeon Boulevard, Suite #503<br />
                            Coral Gables, FL, 33134
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact</h3>
                        <p className="mb-2">
                            Phone: <a href="tel:305-323-4269">305-323-4269</a>
                        </p>
                        <p>
                            Email: <a href="mailto:vernonu@bellsouth.net">vernonu@bellsouth.net</a>
                        </p>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8">
                    <p className="text-center text-sm">
                        © {currentYear} Ubico Homes. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}