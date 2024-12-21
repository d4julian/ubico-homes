type AreaProps = {
    name: string;
}

function AreaCard({ name }: AreaProps) {
    return (
        <div
            className="bg-black/60 bg-blend-overlay h-24 flex items-center justify-center shadow-md hover:bg-black/40 transition-colors"
            style={{
                backgroundImage: `url('./${name}.jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                WebkitBackgroundSize: "cover",
            }}
        >
            <h3 className="montserrat text-lg text-white font-medium px-2 text-center">
                {name.toUpperCase()}
            </h3>
        </div>
    )
}

export default function Areas() {
    const areas = [
        "Aventura", "Miami Beach", "Miami Design District", "Downtown Miami",
        "Brickell", "Key Biscayne", "Coral Gables", "Pinecrest",
        "Palmetto Bay", "Miami Lakes", "Miami Springs", "Westchester",
        "South Miami", "Kendall", "Doral", "West Kendall",
        "Redland", "Homestead"
    ];

    return (
        <div>
            <h1 className="montserrat text-4xl text-center mb-8">AREAS OF EXPERTISE</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {areas.map((area) => (
                    <AreaCard key={area} name={area} />
                ))}
            </div>
        </div>
    )
}