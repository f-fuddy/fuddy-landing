import {
  Start,
  Newsletter,
  NutritionInLatam,
  Steps,
  WhyFuddy,
} from "@/components";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-K8EY4NQ8G2" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K8EY4NQ8G2');
                  `}
      </Script>
      <Start />
      <WhyFuddy />
      <Steps />
      <NutritionInLatam />
      {/* <Newsletter /> */}
    </>
  );
}
