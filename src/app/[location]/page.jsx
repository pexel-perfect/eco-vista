import LocationInfo from "@/components/location/Locationinfo";

const LocationPage = ({
    params: { location },
    searchParams: { latitude, longitude }
  }) => {
    return (<LocationInfo lat={latitude} lon={longitude}/>);
};

export default LocationPage;
