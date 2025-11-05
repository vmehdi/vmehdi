"use client";

import Script from "next/script";

export function TrackingScripts() {
  return (
    <>
      <Script
        src="https://cdn.segmentaim.com/dev/loader.js"
        type="module"
        data-k="68dbc62b83bc2"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
      <Script
        src="https://cdn.amplitude.com/libs/analytics-browser-2.11.1-min.js.gz"
        strategy="afterInteractive"
        onLoad={() => {
          // Load session replay plugin after analytics is loaded
          const script = document.createElement("script");
          script.src = "https://cdn.amplitude.com/libs/plugin-session-replay-browser-1.8.0-min.js.gz";
          script.onload = () => {
            // Initialize Amplitude after both scripts are loaded
            if (typeof window !== "undefined" && (window as any).amplitude && (window as any).sessionReplay) {
              (window as any).amplitude.add((window as any).sessionReplay.plugin({ sampleRate: 1 }));
              (window as any).amplitude.init("d36eb4c9819ffdd8a3ec3f496314f22c", {
                autocapture: { elementInteractions: true }
              });
            }
          };
          document.head.appendChild(script);
        }}
      />
      <Script
        id="hotjar-tracking"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:6494685,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
        }}
      />
    </>
  );
}
