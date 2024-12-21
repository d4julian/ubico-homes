export default function Stats() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8 mb-10">
            {[
                { title: 'Top 1%', value: 'of all agents in Miami' },
                { title: '750+', value: 'homes sold' },
                { title: '$50M', value: 'in career sales' }
            ].map((item) => (
                <div key={item.title} className="bg-slate-200 px-4 py-20 flex flex-col items-center">
                    <h3 className="text-5xl font-bold karla-ultra-light">{item.title}</h3>
                    <p className="text-2xl karla-ultra-light">{item.value}</p>
                </div>
            ))}
        </div>
    )
}