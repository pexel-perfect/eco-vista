
'use client'
import React, { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

const LocationDetector = () => {
    const [loading, setLoading] = React.useState(false);

    const searchParams = useSearchParams();
    const pathName = usePathname();
    const router = useRouter();

    React.useEffect(() => {
        setLoading(true);
        const params = new URLSearchParams(searchParams);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                params.set('latitude', position.coords.latitude);
                params.set('longitude', position.coords.longitude);
                setLoading(false);
                router.push(`/current?${params.toString()}`);
            })
        }

    }, [pathName, searchParams]);

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white z-[300]">
            {
                loading && (
                    <>
                        <Image
                            src="/images/network.gif"
                            alt="Loading..."
                            height={500}
                            width={500}
                            className="border rounded-md my-4" />
                        <p className="text-4xl text-center">Detecting Location...</p>
                    </>
                )
            }
        </div>
    )
}

export default LocationDetector