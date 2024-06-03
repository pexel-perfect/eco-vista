import { Inter } from "next/font/google";
import Image from "next/image";
// import "../globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function LocationLayout({ children, aqi, temperature, weather, wind }) {
    return (
        <div className="wrapper">
            <div className="overlay"></div>
            <Image
                src="/images/background.png"
                className="bg-img"
                alt="bg image"
                height={700}
                width={1200}
            />
            <main className="!z-50 w-full">
                <div className="container">
                    <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
                        <div> {children}</div>
                        <div>{aqi}</div>
                        <div>{temperature}</div>
                        <div>{weather}</div>
                        <div>{wind}</div>
                    </div>
                </div>
            </main>
        </div>
    );
}
