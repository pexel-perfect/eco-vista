import { Inter } from "next/font/google";
// import "../globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function LocationLayout({ children, aqi, temperature, weather, wind }) {
    return (
        <div>
            <div> {children}</div>
            <div>{aqi}</div>
            <div>{temperature}</div>
            <div>{weather}</div>
            <div>{wind}</div>
        </div>
    );
}
