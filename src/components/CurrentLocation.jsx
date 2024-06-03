'use client'
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export const CurrentLocation = () => {
    const [loading, setLoading] = React.useState(false)
    const params = useSearchParams();
    const router = useRouter();

    React.useEffect(() => {
        setLoading(true);
        const searchParams = new URLSearchParams(params);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                searchParams.set("latitude", latitude)
                searchParams.set("longitude", longitude);
                router.push(`/current?${searchParams.toString()}`);
            })

            setLoading(false);

        } else {
            console.error('Geolocation is not supported by this browser.');
        }

    }, [params, router])


    return (
        <div>
            {loading && <p>Getting location</p>}
        </div>
    );
}