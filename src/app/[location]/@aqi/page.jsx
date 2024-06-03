import NoLocationInfo from "@/components/NoLocationInfo";
import { getResolvedLatLong } from "@/lib/location-info";

const { AQIComponent } = require("@/components/location/AQIComponent")

const LocationAqi = async ({
    params: { location },
    searchParams: { latitude, longitude }

}) => {
    const resolved = await getResolvedLatLong(location, latitude, longitude);

    if (resolved?.lat && resolved?.lon) {
        return <AQIComponent lat={resolved.lat} lon={resolved.lon} />;
    } else {
        return <NoLocationInfo />;
    }
};

export default LocationAqi;
