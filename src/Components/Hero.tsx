export default function Hero() {
    return (
        <div
            className="h-screen w-full flex flex-col items-center justify-center bg-black/70 bg-blend-overlay"
            style={{
                backgroundImage: "url('./hero.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundSize: "cover",
            }}
        >
            <h1 className="montserrat text-4xl md:text-6xl font-bold mb-8 text-center text-white">
                VERNON UBICO
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
                <a href="https://www.ubicohomes.com/11/search/11" target="_blank" rel="noreferrer">
                    <button className="px-8 py-3 bg-white text-black font-semibold hover:bg-transparent border-2 hover:text-white transition-colors">
                        Buy a Home
                    </button>
                </a>
                <button className="px-8 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-colors">
                    Sell my Home
                </button>
            </div>
        </div>
    );
}