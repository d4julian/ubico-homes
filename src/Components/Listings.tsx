import React, { useEffect, useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import EmblaCarousel from './EmblaCarousel';
import '../styles/embla.css';

export type Property = {
    id: number;
    address: string;
    beds: number;
    fbaths: number;
    list_price: number;
    city_name: string;
    state: string;
    sys_details: {
        getimages: Array<{
            image_path: string;
        }>;
    };
};

const OPTIONS: EmblaOptionsType = {
    align: 'start',
    slidesToScroll: 1,
    loop: true,
};

export default function Listings() {
    const [properties, setProperties] = useState<Property[]>([]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await fetch('/api/hometheme/mls-property', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-cache',
                        'X-Content-Type-Options': 'nosniff',
                        'X-Frame-Options': 'SAMEORIGIN',
                        'X-XSS-Protection': '1; mode=block',
                    },
                    body: JSON.stringify({ member_id: "879" }),
                });
                const data = await response.json();
                if (data.success === 1) {
                    // Duplicate the properties array
                    setProperties([...data.featured_porpety]);
                }
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };

        fetchProperties();
    }, []);

    if (properties.length === 0) return <div>Loading...</div>;

    return (
        <div className="w-full px-4">
            <h1 className="montserrat text-4xl text-center mt-10 mb-8">FEATURED LISTINGS</h1>
            <EmblaCarousel properties={properties} options={OPTIONS} />
        </div>
    );
}
