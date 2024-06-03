import Image from "next/image";
import { CardContainer } from "../CardContainer";
import { getWeatherData } from "@/lib/weather-info";

const WeatherComponent = async ({ lat, lon }) => {
    const { main, description } = await getWeatherData(lat, lon);

    return (
        <CardContainer>
            <h6 className="feature-name">Current Weather</h6>
            <div className="feature-main">
                <Image
                    className="max-w-20"
                    src="/icons/icon_rain.png"
                    width={200}
                    height={200}
                    alt="rain icon"
                />
                <h3 className="feature-title">{main}</h3>
                <span className="feature-name">{description}</span>
            </div>
        </CardContainer>
    );
};

export default WeatherComponent;