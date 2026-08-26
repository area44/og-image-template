import type { ReactNode } from "react";

export interface OGImageProps {
  title?: string;
  category?: string;
  date?: string;
}

export default function OGImage({
  title = "Optimized CDN caching and deploying of immutable static assets",
}: OGImageProps): ReactNode {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "#000000",
        color: "#ffffff",
        padding: "80px",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "Geist Sans, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Background Dotted World Map SVG Overlay */}
      <div
        style={{
          display: "flex",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "800px",
          alignItems: "center",
          justifyContent: "flex-end",
          opacity: 0.65,
        }}
      >
        <svg
          width={1000}
          height={500}
          viewBox="0 0 1000 500"
          style={{
            width: "800px",
            height: "auto",
          }}
        >
          <g fill="#888c94">
            {/* NORTH AMERICA */}
            <circle cx="515" cy="10" r="3.2" fill="#888c94" />{" "}
            <circle cx="525" cy="10" r="3.2" fill="#888c94" />{" "}
            <circle cx="535" cy="10" r="3.2" fill="#888c94" />{" "}
            <circle cx="545" cy="10" r="3.2" fill="#888c94" />{" "}
            <circle cx="555" cy="10" r="3.2" fill="#888c94" />{" "}
            <circle cx="565" cy="10" r="3.2" fill="#888c94" />{" "}
            <circle cx="575" cy="10" r="3.2" fill="#888c94" />{" "}
            <circle cx="585" cy="10" r="3.2" fill="#888c94" />{" "}
            <circle cx="595" cy="10" r="3.2" fill="#888c94" />{" "}
            <circle cx="605" cy="10" r="3.2" fill="#888c94" />{" "}
            <circle cx="615" cy="10" r="3.2" fill="#888c94" />
            <circle cx="505" cy="22" r="3.2" fill="#888c94" />{" "}
            <circle cx="515" cy="22" r="3.2" fill="#888c94" />{" "}
            <circle cx="525" cy="22" r="3.2" fill="#888c94" />{" "}
            <circle cx="535" cy="22" r="3.2" fill="#888c94" />{" "}
            <circle cx="545" cy="22" r="3.2" fill="#888c94" />{" "}
            <circle cx="555" cy="22" r="3.2" fill="#888c94" />{" "}
            <circle cx="565" cy="22" r="3.2" fill="#888c94" />{" "}
            <circle cx="575" cy="22" r="3.2" fill="#888c94" />{" "}
            <circle cx="585" cy="22" r="3.2" fill="#888c94" />{" "}
            <circle cx="595" cy="22" r="3.2" fill="#888c94" />{" "}
            <circle cx="605" cy="22" r="3.2" fill="#888c94" />{" "}
            <circle cx="615" cy="22" r="3.2" fill="#888c94" />
            <circle cx="515" cy="34" r="3.2" fill="#888c94" />{" "}
            <circle cx="525" cy="34" r="3.2" fill="#888c94" />{" "}
            <circle cx="535" cy="34" r="3.2" fill="#888c94" />{" "}
            <circle cx="545" cy="34" r="3.2" fill="#888c94" />{" "}
            <circle cx="555" cy="34" r="3.2" fill="#888c94" />{" "}
            <circle cx="565" cy="34" r="3.2" fill="#888c94" />{" "}
            <circle cx="575" cy="34" r="3.2" fill="#888c94" />{" "}
            <circle cx="585" cy="34" r="3.2" fill="#888c94" />{" "}
            <circle cx="595" cy="34" r="3.2" fill="#888c94" />{" "}
            <circle cx="605" cy="34" r="3.2" fill="#888c94" />{" "}
            <circle cx="615" cy="34" r="3.2" fill="#888c94" />{" "}
            <circle cx="625" cy="34" r="3.2" fill="#888c94" />
            <circle cx="525" cy="46" r="3.2" fill="#888c94" />{" "}
            <circle cx="535" cy="46" r="3.2" fill="#888c94" />{" "}
            <circle cx="545" cy="46" r="3.2" fill="#888c94" />{" "}
            <circle cx="555" cy="46" r="3.2" fill="#888c94" />{" "}
            <circle cx="565" cy="46" r="3.2" fill="#888c94" />{" "}
            <circle cx="575" cy="46" r="3.2" fill="#888c94" />{" "}
            <circle cx="585" cy="46" r="3.2" fill="#888c94" />{" "}
            <circle cx="595" cy="46" r="3.2" fill="#888c94" />{" "}
            <circle cx="605" cy="46" r="3.2" fill="#888c94" />{" "}
            <circle cx="615" cy="46" r="3.2" fill="#888c94" />{" "}
            <circle cx="625" cy="46" r="3.2" fill="#888c94" />{" "}
            <circle cx="635" cy="46" r="3.2" fill="#888c94" />
            <circle cx="435" cy="58" r="3.2" fill="#888c94" />{" "}
            <circle cx="445" cy="58" r="3.2" fill="#888c94" />{" "}
            <circle cx="515" cy="58" r="3.2" fill="#888c94" />{" "}
            <circle cx="525" cy="58" r="3.2" fill="#888c94" />{" "}
            <circle cx="535" cy="58" r="3.2" fill="#888c94" />{" "}
            <circle cx="545" cy="58" r="3.2" fill="#888c94" />{" "}
            <circle cx="555" cy="58" r="3.2" fill="#888c94" />{" "}
            <circle cx="565" cy="58" r="3.2" fill="#888c94" />{" "}
            <circle cx="575" cy="58" r="3.2" fill="#888c94" />{" "}
            <circle cx="585" cy="58" r="3.2" fill="#888c94" />{" "}
            <circle cx="595" cy="58" r="3.2" fill="#888c94" />{" "}
            <circle cx="605" cy="58" r="3.2" fill="#888c94" />{" "}
            <circle cx="615" cy="58" r="3.2" fill="#888c94" />{" "}
            <circle cx="625" cy="58" r="3.2" fill="#888c94" />{" "}
            <circle cx="635" cy="58" r="3.2" fill="#888c94" />{" "}
            <circle cx="645" cy="58" r="3.2" fill="#888c94" />
            <circle cx="425" cy="70" r="3.2" fill="#888c94" />{" "}
            <circle cx="435" cy="70" r="3.2" fill="#888c94" />{" "}
            <circle cx="505" cy="70" r="3.2" fill="#888c94" />{" "}
            <circle cx="515" cy="70" r="3.2" fill="#888c94" />{" "}
            <circle cx="525" cy="70" r="3.2" fill="#888c94" />{" "}
            <circle cx="535" cy="70" r="3.2" fill="#888c94" />{" "}
            <circle cx="545" cy="70" r="3.2" fill="#888c94" />{" "}
            <circle cx="555" cy="70" r="3.2" fill="#888c94" />{" "}
            <circle cx="565" cy="70" r="3.2" fill="#888c94" />{" "}
            <circle cx="575" cy="70" r="3.2" fill="#888c94" />{" "}
            <circle cx="585" cy="70" r="3.2" fill="#888c94" />{" "}
            <circle cx="595" cy="70" r="3.2" fill="#888c94" />{" "}
            <circle cx="605" cy="70" r="3.2" fill="#888c94" />{" "}
            <circle cx="615" cy="70" r="3.2" fill="#888c94" />{" "}
            <circle cx="625" cy="70" r="3.2" fill="#888c94" />{" "}
            <circle cx="635" cy="70" r="3.2" fill="#888c94" />
            <circle cx="415" cy="82" r="3.2" fill="#888c94" />{" "}
            <circle cx="425" cy="82" r="3.2" fill="#888c94" />{" "}
            <circle cx="435" cy="82" r="3.2" fill="#888c94" />{" "}
            <circle cx="445" cy="82" r="3.2" fill="#888c94" />{" "}
            <circle cx="505" cy="82" r="3.2" fill="#888c94" />{" "}
            <circle cx="515" cy="82" r="3.2" fill="#888c94" />{" "}
            <circle cx="525" cy="82" r="3.2" fill="#888c94" />{" "}
            <circle cx="535" cy="82" r="3.2" fill="#888c94" />{" "}
            <circle cx="545" cy="82" r="3.2" fill="#888c94" />{" "}
            <circle cx="555" cy="82" r="3.2" fill="#888c94" />{" "}
            <circle cx="565" cy="82" r="3.2" fill="#888c94" />{" "}
            <circle cx="575" cy="82" r="3.2" fill="#888c94" />{" "}
            <circle cx="585" cy="82" r="3.2" fill="#888c94" />{" "}
            <circle cx="595" cy="82" r="3.2" fill="#888c94" />{" "}
            <circle cx="605" cy="82" r="3.2" fill="#888c94" />{" "}
            <circle cx="615" cy="82" r="3.2" fill="#888c94" />{" "}
            <circle cx="625" cy="82" r="3.2" fill="#888c94" />
            <circle cx="425" cy="94" r="3.2" fill="#888c94" />{" "}
            <circle cx="435" cy="94" r="3.2" fill="#888c94" />{" "}
            <circle cx="445" cy="94" r="3.2" fill="#888c94" />{" "}
            <circle cx="455" cy="94" r="3.2" fill="#888c94" />{" "}
            <circle cx="505" cy="94" r="3.2" fill="#888c94" />{" "}
            <circle cx="515" cy="94" r="3.2" fill="#888c94" />{" "}
            <circle cx="525" cy="94" r="3.2" fill="#888c94" />{" "}
            <circle cx="535" cy="94" r="3.2" fill="#888c94" />{" "}
            <circle cx="545" cy="94" r="3.2" fill="#888c94" />{" "}
            <circle cx="555" cy="94" r="3.2" fill="#888c94" />{" "}
            <circle cx="565" cy="94" r="3.2" fill="#888c94" />{" "}
            <circle cx="575" cy="94" r="3.2" fill="#888c94" />{" "}
            <circle cx="585" cy="94" r="3.2" fill="#888c94" />{" "}
            <circle cx="595" cy="94" r="3.2" fill="#888c94" />{" "}
            <circle cx="605" cy="94" r="3.2" fill="#888c94" />{" "}
            <circle cx="615" cy="94" r="3.2" fill="#888c94" />{" "}
            <circle cx="625" cy="94" r="3.2" fill="#888c94" />
            <circle cx="435" cy="106" r="3.2" fill="#888c94" />{" "}
            <circle cx="445" cy="106" r="3.2" fill="#888c94" />{" "}
            <circle cx="455" cy="106" r="3.2" fill="#888c94" />{" "}
            <circle cx="465" cy="106" r="3.2" fill="#888c94" />{" "}
            <circle cx="505" cy="106" r="3.2" fill="#888c94" />{" "}
            <circle cx="515" cy="106" r="3.2" fill="#888c94" />{" "}
            <circle cx="525" cy="106" r="3.2" fill="#888c94" />{" "}
            <circle cx="535" cy="106" r="3.2" fill="#888c94" />{" "}
            <circle cx="545" cy="106" r="3.2" fill="#888c94" />{" "}
            <circle cx="555" cy="106" r="3.2" fill="#888c94" />{" "}
            <circle cx="565" cy="106" r="3.2" fill="#888c94" />{" "}
            <circle cx="575" cy="106" r="3.2" fill="#888c94" />{" "}
            <circle cx="585" cy="106" r="3.2" fill="#888c94" />{" "}
            <circle cx="595" cy="106" r="3.2" fill="#888c94" />{" "}
            <circle cx="605" cy="106" r="3.2" fill="#888c94" />{" "}
            <circle cx="615" cy="106" r="3.2" fill="#888c94" />{" "}
            <circle cx="625" cy="106" r="3.2" fill="#888c94" />
            <circle cx="505" cy="118" r="3.2" fill="#888c94" />{" "}
            <circle cx="515" cy="118" r="3.2" fill="#888c94" />{" "}
            <circle cx="525" cy="118" r="3.2" fill="#888c94" />{" "}
            <circle cx="535" cy="118" r="3.2" fill="#888c94" />{" "}
            <circle cx="545" cy="118" r="3.2" fill="#888c94" />{" "}
            <circle cx="555" cy="118" r="3.2" fill="#888c94" />{" "}
            <circle cx="565" cy="118" r="3.2" fill="#888c94" />{" "}
            <circle cx="575" cy="118" r="3.2" fill="#888c94" />{" "}
            <circle cx="585" cy="118" r="3.2" fill="#888c94" />{" "}
            <circle cx="595" cy="118" r="3.2" fill="#888c94" />{" "}
            <circle cx="605" cy="118" r="3.2" fill="#888c94" />{" "}
            <circle cx="615" cy="118" r="3.2" fill="#888c94" />{" "}
            <circle cx="625" cy="118" r="3.2" fill="#888c94" />{" "}
            <circle cx="635" cy="118" r="3.2" fill="#888c94" />
            <circle cx="505" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="515" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="525" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="535" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="545" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="555" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="565" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="575" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="585" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="595" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="605" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="615" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="625" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="635" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="645" cy="130" r="3.2" fill="#888c94" />
            <circle cx="505" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="515" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="525" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="535" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="545" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="555" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="565" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="575" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="585" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="595" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="605" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="615" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="625" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="635" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="645" cy="142" r="3.2" fill="#888c94" />
            <circle cx="515" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="525" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="535" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="545" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="555" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="565" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="575" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="585" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="595" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="605" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="615" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="625" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="635" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="645" cy="154" r="3.2" fill="#888c94" />
            <circle cx="525" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="535" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="545" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="555" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="565" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="575" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="585" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="595" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="605" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="615" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="625" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="635" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="645" cy="166" r="3.2" fill="#888c94" />
            <circle cx="525" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="535" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="545" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="555" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="565" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="575" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="585" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="595" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="605" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="615" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="625" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="635" cy="178" r="3.2" fill="#888c94" />
            <circle cx="535" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="545" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="555" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="565" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="575" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="585" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="595" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="605" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="615" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="625" cy="190" r="3.2" fill="#888c94" />
            <circle cx="535" cy="202" r="3.2" fill="#888c94" />{" "}
            <circle cx="545" cy="202" r="3.2" fill="#888c94" />{" "}
            <circle cx="555" cy="202" r="3.2" fill="#888c94" />{" "}
            <circle cx="565" cy="202" r="3.2" fill="#888c94" />{" "}
            <circle cx="575" cy="202" r="3.2" fill="#888c94" />{" "}
            <circle cx="585" cy="202" r="3.2" fill="#888c94" />{" "}
            <circle cx="595" cy="202" r="3.2" fill="#888c94" />{" "}
            <circle cx="605" cy="202" r="3.2" fill="#888c94" />{" "}
            <circle cx="615" cy="202" r="3.2" fill="#888c94" />
            <circle cx="545" cy="214" r="3.2" fill="#888c94" />{" "}
            <circle cx="555" cy="214" r="3.2" fill="#888c94" />{" "}
            <circle cx="565" cy="214" r="3.2" fill="#888c94" />{" "}
            <circle cx="575" cy="214" r="3.2" fill="#888c94" />{" "}
            <circle cx="585" cy="214" r="3.2" fill="#888c94" />{" "}
            <circle cx="595" cy="214" r="3.2" fill="#888c94" />
            <circle cx="555" cy="226" r="3.2" fill="#888c94" />{" "}
            <circle cx="565" cy="226" r="3.2" fill="#888c94" />{" "}
            <circle cx="575" cy="226" r="3.2" fill="#888c94" />
            <circle cx="565" cy="238" r="3.2" fill="#888c94" />{" "}
            <circle cx="575" cy="238" r="3.2" fill="#888c94" />
            <circle cx="585" cy="238" r="3.2" fill="#888c94" />
            <circle cx="595" cy="226" r="3.2" fill="#888c94" />
            {/* SOUTH AMERICA */}
            <circle cx="605" cy="250" r="3.2" fill="#888c94" />{" "}
            <circle cx="615" cy="250" r="3.2" fill="#888c94" />{" "}
            <circle cx="625" cy="250" r="3.2" fill="#888c94" />{" "}
            <circle cx="635" cy="250" r="3.2" fill="#888c94" />{" "}
            <circle cx="645" cy="250" r="3.2" fill="#888c94" />{" "}
            <circle cx="655" cy="250" r="3.2" fill="#888c94" />
            <circle cx="595" cy="262" r="3.2" fill="#888c94" />{" "}
            <circle cx="605" cy="262" r="3.2" fill="#888c94" />{" "}
            <circle cx="615" cy="262" r="3.2" fill="#888c94" />{" "}
            <circle cx="625" cy="262" r="3.2" fill="#888c94" />{" "}
            <circle cx="635" cy="262" r="3.2" fill="#888c94" />{" "}
            <circle cx="645" cy="262" r="3.2" fill="#888c94" />{" "}
            <circle cx="655" cy="262" r="3.2" fill="#888c94" />{" "}
            <circle cx="665" cy="262" r="3.2" fill="#888c94" />
            <circle cx="605" cy="274" r="3.2" fill="#888c94" />{" "}
            <circle cx="615" cy="274" r="3.2" fill="#888c94" />{" "}
            <circle cx="625" cy="274" r="3.2" fill="#888c94" />{" "}
            <circle cx="635" cy="274" r="3.2" fill="#888c94" />{" "}
            <circle cx="645" cy="274" r="3.2" fill="#888c94" />{" "}
            <circle cx="655" cy="274" r="3.2" fill="#888c94" />{" "}
            <circle cx="665" cy="274" r="3.2" fill="#888c94" />{" "}
            <circle cx="675" cy="274" r="3.2" fill="#888c94" />
            <circle cx="615" cy="286" r="3.2" fill="#888c94" />{" "}
            <circle cx="625" cy="286" r="3.2" fill="#888c94" />{" "}
            <circle cx="635" cy="286" r="3.2" fill="#888c94" />{" "}
            <circle cx="645" cy="286" r="3.2" fill="#888c94" />{" "}
            <circle cx="655" cy="286" r="3.2" fill="#888c94" />{" "}
            <circle cx="665" cy="286" r="3.2" fill="#888c94" />{" "}
            <circle cx="675" cy="286" r="3.2" fill="#888c94" />{" "}
            <circle cx="685" cy="286" r="3.2" fill="#888c94" />{" "}
            <circle cx="695" cy="286" r="3.2" fill="#888c94" />
            <circle cx="615" cy="298" r="3.2" fill="#888c94" />{" "}
            <circle cx="625" cy="298" r="3.2" fill="#888c94" />{" "}
            <circle cx="635" cy="298" r="3.2" fill="#888c94" />{" "}
            <circle cx="645" cy="298" r="3.2" fill="#888c94" />{" "}
            <circle cx="655" cy="298" r="3.2" fill="#888c94" />{" "}
            <circle cx="665" cy="298" r="3.2" fill="#888c94" />{" "}
            <circle cx="675" cy="298" r="3.2" fill="#888c94" />{" "}
            <circle cx="685" cy="298" r="3.2" fill="#888c94" />{" "}
            <circle cx="695" cy="298" r="3.2" fill="#888c94" />{" "}
            <circle cx="705" cy="298" r="3.2" fill="#888c94" />
            <circle cx="615" cy="310" r="3.2" fill="#888c94" />{" "}
            <circle cx="625" cy="310" r="3.2" fill="#888c94" />{" "}
            <circle cx="635" cy="310" r="3.2" fill="#888c94" />{" "}
            <circle cx="645" cy="310" r="3.2" fill="#888c94" />{" "}
            <circle cx="655" cy="310" r="3.2" fill="#888c94" />{" "}
            <circle cx="665" cy="310" r="3.2" fill="#888c94" />{" "}
            <circle cx="675" cy="310" r="3.2" fill="#888c94" />{" "}
            <circle cx="685" cy="310" r="3.2" fill="#888c94" />{" "}
            <circle cx="695" cy="310" r="3.2" fill="#888c94" />
            <circle cx="625" cy="322" r="3.2" fill="#888c94" />{" "}
            <circle cx="635" cy="322" r="3.2" fill="#888c94" />{" "}
            <circle cx="645" cy="322" r="3.2" fill="#888c94" />{" "}
            <circle cx="655" cy="322" r="3.2" fill="#888c94" />{" "}
            <circle cx="665" cy="322" r="3.2" fill="#888c94" />{" "}
            <circle cx="675" cy="322" r="3.2" fill="#888c94" />{" "}
            <circle cx="685" cy="322" r="3.2" fill="#888c94" />
            <circle cx="625" cy="334" r="3.2" fill="#888c94" />{" "}
            <circle cx="635" cy="334" r="3.2" fill="#888c94" />{" "}
            <circle cx="645" cy="334" r="3.2" fill="#888c94" />{" "}
            <circle cx="655" cy="334" r="3.2" fill="#888c94" />{" "}
            <circle cx="665" cy="334" r="3.2" fill="#888c94" />{" "}
            <circle cx="675" cy="334" r="3.2" fill="#888c94" />
            <circle cx="625" cy="346" r="3.2" fill="#888c94" />{" "}
            <circle cx="635" cy="346" r="3.2" fill="#888c94" />{" "}
            <circle cx="645" cy="346" r="3.2" fill="#888c94" />{" "}
            <circle cx="655" cy="346" r="3.2" fill="#888c94" />{" "}
            <circle cx="665" cy="346" r="3.2" fill="#888c94" />
            <circle cx="625" cy="358" r="3.2" fill="#888c94" />{" "}
            <circle cx="635" cy="358" r="3.2" fill="#888c94" />{" "}
            <circle cx="645" cy="358" r="3.2" fill="#888c94" />{" "}
            <circle cx="655" cy="358" r="3.2" fill="#888c94" />
            <circle cx="625" cy="370" r="3.2" fill="#888c94" />{" "}
            <circle cx="635" cy="370" r="3.2" fill="#888c94" />{" "}
            <circle cx="645" cy="370" r="3.2" fill="#888c94" />
            <circle cx="625" cy="382" r="3.2" fill="#888c94" />{" "}
            <circle cx="635" cy="382" r="3.2" fill="#888c94" />{" "}
            <circle cx="645" cy="382" r="3.2" fill="#888c94" />
            <circle cx="615" cy="394" r="3.2" fill="#888c94" />{" "}
            <circle cx="625" cy="394" r="3.2" fill="#888c94" />{" "}
            <circle cx="635" cy="394" r="3.2" fill="#888c94" />
            <circle cx="615" cy="406" r="3.2" fill="#888c94" />{" "}
            <circle cx="625" cy="406" r="3.2" fill="#888c94" />
            <circle cx="625" cy="418" r="3.2" fill="#888c94" />
            <circle cx="635" cy="418" r="3.2" fill="#888c94" />
            <circle cx="635" cy="430" r="3.2" fill="#888c94" />
            <circle cx="635" cy="442" r="3.2" fill="#888c94" />
            {/* EUROPE & AFRICA & ASIA */}
            <circle cx="665" cy="10" r="3.2" fill="#888c94" />{" "}
            <circle cx="675" cy="10" r="3.2" fill="#888c94" />{" "}
            <circle cx="685" cy="10" r="3.2" fill="#888c94" />{" "}
            <circle cx="695" cy="10" r="3.2" fill="#888c94" />{" "}
            <circle cx="705" cy="10" r="3.2" fill="#888c94" />{" "}
            <circle cx="715" cy="10" r="3.2" fill="#888c94" />{" "}
            <circle cx="725" cy="10" r="3.2" fill="#888c94" />{" "}
            <circle cx="735" cy="10" r="3.2" fill="#888c94" />
            <circle cx="655" cy="22" r="3.2" fill="#888c94" />{" "}
            <circle cx="665" cy="22" r="3.2" fill="#888c94" />{" "}
            <circle cx="675" cy="22" r="3.2" fill="#888c94" />{" "}
            <circle cx="685" cy="22" r="3.2" fill="#888c94" />{" "}
            <circle cx="695" cy="22" r="3.2" fill="#888c94" />{" "}
            <circle cx="705" cy="22" r="3.2" fill="#888c94" />{" "}
            <circle cx="715" cy="22" r="3.2" fill="#888c94" />{" "}
            <circle cx="725" cy="22" r="3.2" fill="#888c94" />{" "}
            <circle cx="735" cy="22" r="3.2" fill="#888c94" />{" "}
            <circle cx="745" cy="22" r="3.2" fill="#888c94" />
            <circle cx="665" cy="34" r="3.2" fill="#888c94" />{" "}
            <circle cx="675" cy="34" r="3.2" fill="#888c94" />{" "}
            <circle cx="685" cy="34" r="3.2" fill="#888c94" />{" "}
            <circle cx="695" cy="34" r="3.2" fill="#888c94" />{" "}
            <circle cx="705" cy="34" r="3.2" fill="#888c94" />{" "}
            <circle cx="715" cy="34" r="3.2" fill="#888c94" />{" "}
            <circle cx="725" cy="34" r="3.2" fill="#888c94" />{" "}
            <circle cx="735" cy="34" r="3.2" fill="#888c94" />{" "}
            <circle cx="745" cy="34" r="3.2" fill="#888c94" />
            <circle cx="675" cy="46" r="3.2" fill="#888c94" />{" "}
            <circle cx="685" cy="46" r="3.2" fill="#888c94" />{" "}
            <circle cx="695" cy="46" r="3.2" fill="#888c94" />{" "}
            <circle cx="705" cy="46" r="3.2" fill="#888c94" />{" "}
            <circle cx="715" cy="46" r="3.2" fill="#888c94" />{" "}
            <circle cx="725" cy="46" r="3.2" fill="#888c94" />{" "}
            <circle cx="735" cy="46" r="3.2" fill="#888c94" />{" "}
            <circle cx="745" cy="46" r="3.2" fill="#888c94" />
            <circle cx="675" cy="58" r="3.2" fill="#888c94" />{" "}
            <circle cx="685" cy="58" r="3.2" fill="#888c94" />{" "}
            <circle cx="695" cy="58" r="3.2" fill="#888c94" />{" "}
            <circle cx="705" cy="58" r="3.2" fill="#888c94" />{" "}
            <circle cx="715" cy="58" r="3.2" fill="#888c94" />{" "}
            <circle cx="725" cy="58" r="3.2" fill="#888c94" />{" "}
            <circle cx="735" cy="58" r="3.2" fill="#888c94" />
            <circle cx="675" cy="70" r="3.2" fill="#888c94" />{" "}
            <circle cx="685" cy="70" r="3.2" fill="#888c94" />{" "}
            <circle cx="695" cy="70" r="3.2" fill="#888c94" />{" "}
            <circle cx="705" cy="70" r="3.2" fill="#888c94" />{" "}
            <circle cx="715" cy="70" r="3.2" fill="#888c94" />{" "}
            <circle cx="725" cy="70" r="3.2" fill="#888c94" />
            <circle cx="675" cy="82" r="3.2" fill="#888c94" />{" "}
            <circle cx="685" cy="82" r="3.2" fill="#888c94" />{" "}
            <circle cx="695" cy="82" r="3.2" fill="#888c94" />{" "}
            <circle cx="705" cy="82" r="3.2" fill="#888c94" />{" "}
            <circle cx="715" cy="82" r="3.2" fill="#888c94" />
            <circle cx="685" cy="94" r="3.2" fill="#888c94" />{" "}
            <circle cx="695" cy="94" r="3.2" fill="#888c94" />{" "}
            <circle cx="705" cy="94" r="3.2" fill="#888c94" />
            <circle cx="695" cy="106" r="3.2" fill="#888c94" />
            <circle cx="735" cy="70" r="3.2" fill="#888c94" />{" "}
            <circle cx="745" cy="70" r="3.2" fill="#888c94" />{" "}
            <circle cx="755" cy="70" r="3.2" fill="#888c94" />
            <circle cx="735" cy="82" r="3.2" fill="#888c94" />{" "}
            <circle cx="745" cy="82" r="3.2" fill="#888c94" />{" "}
            <circle cx="755" cy="82" r="3.2" fill="#888c94" />{" "}
            <circle cx="765" cy="82" r="3.2" fill="#888c94" />
            <circle cx="805" cy="82" r="3.2" fill="#888c94" />{" "}
            <circle cx="815" cy="82" r="3.2" fill="#888c94" />
            <circle cx="785" cy="94" r="3.2" fill="#888c94" />{" "}
            <circle cx="795" cy="94" r="3.2" fill="#888c94" />{" "}
            <circle cx="805" cy="94" r="3.2" fill="#888c94" />{" "}
            <circle cx="815" cy="94" r="3.2" fill="#888c94" />{" "}
            <circle cx="825" cy="94" r="3.2" fill="#888c94" />
            <circle cx="775" cy="106" r="3.2" fill="#888c94" />{" "}
            <circle cx="785" cy="106" r="3.2" fill="#888c94" />{" "}
            <circle cx="795" cy="106" r="3.2" fill="#888c94" />{" "}
            <circle cx="805" cy="106" r="3.2" fill="#888c94" />{" "}
            <circle cx="815" cy="106" r="3.2" fill="#888c94" />{" "}
            <circle cx="825" cy="106" r="3.2" fill="#888c94" />{" "}
            <circle cx="835" cy="106" r="3.2" fill="#888c94" />{" "}
            <circle cx="845" cy="106" r="3.2" fill="#888c94" />
            <circle cx="765" cy="118" r="3.2" fill="#888c94" />{" "}
            <circle cx="775" cy="118" r="3.2" fill="#888c94" />{" "}
            <circle cx="785" cy="118" r="3.2" fill="#888c94" />{" "}
            <circle cx="795" cy="118" r="3.2" fill="#888c94" />{" "}
            <circle cx="805" cy="118" r="3.2" fill="#888c94" />{" "}
            <circle cx="815" cy="118" r="3.2" fill="#888c94" />{" "}
            <circle cx="825" cy="118" r="3.2" fill="#888c94" />{" "}
            <circle cx="835" cy="118" r="3.2" fill="#888c94" />{" "}
            <circle cx="845" cy="118" r="3.2" fill="#888c94" />{" "}
            <circle cx="855" cy="118" r="3.2" fill="#888c94" />{" "}
            <circle cx="865" cy="118" r="3.2" fill="#888c94" />
            <circle cx="775" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="785" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="795" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="805" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="815" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="825" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="835" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="845" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="855" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="865" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="875" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="885" cy="130" r="3.2" fill="#888c94" />
            <circle cx="765" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="775" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="785" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="795" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="805" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="815" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="825" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="835" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="845" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="855" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="865" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="875" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="885" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="895" cy="142" r="3.2" fill="#888c94" />
            <circle cx="775" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="785" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="795" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="805" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="815" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="825" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="835" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="845" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="855" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="865" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="875" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="885" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="895" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="905" cy="154" r="3.2" fill="#888c94" />
            <circle cx="765" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="775" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="785" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="795" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="805" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="815" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="825" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="835" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="845" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="855" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="865" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="875" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="885" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="895" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="905" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="915" cy="166" r="3.2" fill="#888c94" />
            <circle cx="755" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="765" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="775" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="785" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="795" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="805" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="815" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="825" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="835" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="845" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="855" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="865" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="875" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="885" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="895" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="905" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="915" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="925" cy="178" r="3.2" fill="#888c94" />
            <circle cx="765" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="775" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="785" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="795" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="805" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="815" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="825" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="835" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="845" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="855" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="865" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="875" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="885" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="895" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="905" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="915" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="925" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="935" cy="190" r="3.2" fill="#888c94" />
            <circle cx="775" cy="202" r="3.2" fill="#888c94" />{" "}
            <circle cx="785" cy="202" r="3.2" fill="#888c94" />{" "}
            <circle cx="795" cy="202" r="3.2" fill="#888c94" />{" "}
            <circle cx="805" cy="202" r="3.2" fill="#888c94" />{" "}
            <circle cx="815" cy="202" r="3.2" fill="#888c94" />{" "}
            <circle cx="825" cy="202" r="3.2" fill="#888c94" />{" "}
            <circle cx="835" cy="202" r="3.2" fill="#888c94" />{" "}
            <circle cx="845" cy="202" r="3.2" fill="#888c94" />{" "}
            <circle cx="855" cy="202" r="3.2" fill="#888c94" />{" "}
            <circle cx="865" cy="202" r="3.2" fill="#888c94" />{" "}
            <circle cx="875" cy="202" r="3.2" fill="#888c94" />{" "}
            <circle cx="885" cy="202" r="3.2" fill="#888c94" />{" "}
            <circle cx="895" cy="202" r="3.2" fill="#888c94" />{" "}
            <circle cx="905" cy="202" r="3.2" fill="#888c94" />{" "}
            <circle cx="915" cy="202" r="3.2" fill="#888c94" />{" "}
            <circle cx="925" cy="202" r="3.2" fill="#888c94" />{" "}
            <circle cx="935" cy="202" r="3.2" fill="#888c94" />{" "}
            <circle cx="945" cy="202" r="3.2" fill="#888c94" />
            <circle cx="775" cy="214" r="3.2" fill="#888c94" />{" "}
            <circle cx="785" cy="214" r="3.2" fill="#888c94" />{" "}
            <circle cx="795" cy="214" r="3.2" fill="#888c94" />{" "}
            <circle cx="805" cy="214" r="3.2" fill="#888c94" />{" "}
            <circle cx="815" cy="214" r="3.2" fill="#888c94" />{" "}
            <circle cx="825" cy="214" r="3.2" fill="#888c94" />{" "}
            <circle cx="835" cy="214" r="3.2" fill="#888c94" />{" "}
            <circle cx="845" cy="214" r="3.2" fill="#888c94" />{" "}
            <circle cx="855" cy="214" r="3.2" fill="#888c94" />{" "}
            <circle cx="865" cy="214" r="3.2" fill="#888c94" />{" "}
            <circle cx="875" cy="214" r="3.2" fill="#888c94" />{" "}
            <circle cx="885" cy="214" r="3.2" fill="#888c94" />{" "}
            <circle cx="895" cy="214" r="3.2" fill="#888c94" />{" "}
            <circle cx="905" cy="214" r="3.2" fill="#888c94" />{" "}
            <circle cx="915" cy="214" r="3.2" fill="#888c94" />{" "}
            <circle cx="925" cy="214" r="3.2" fill="#888c94" />{" "}
            <circle cx="935" cy="214" r="3.2" fill="#888c94" />{" "}
            <circle cx="945" cy="214" r="3.2" fill="#888c94" />{" "}
            <circle cx="955" cy="214" r="3.2" fill="#888c94" />
            <circle cx="765" cy="226" r="3.2" fill="#888c94" />{" "}
            <circle cx="775" cy="226" r="3.2" fill="#888c94" />{" "}
            <circle cx="785" cy="226" r="3.2" fill="#888c94" />{" "}
            <circle cx="795" cy="226" r="3.2" fill="#888c94" />{" "}
            <circle cx="805" cy="226" r="3.2" fill="#888c94" />{" "}
            <circle cx="815" cy="226" r="3.2" fill="#888c94" />{" "}
            <circle cx="825" cy="226" r="3.2" fill="#888c94" />{" "}
            <circle cx="835" cy="226" r="3.2" fill="#888c94" />{" "}
            <circle cx="845" cy="226" r="3.2" fill="#888c94" />{" "}
            <circle cx="855" cy="226" r="3.2" fill="#888c94" />{" "}
            <circle cx="865" cy="226" r="3.2" fill="#888c94" />{" "}
            <circle cx="875" cy="226" r="3.2" fill="#888c94" />{" "}
            <circle cx="885" cy="226" r="3.2" fill="#888c94" />{" "}
            <circle cx="895" cy="226" r="3.2" fill="#888c94" />{" "}
            <circle cx="905" cy="226" r="3.2" fill="#888c94" />{" "}
            <circle cx="915" cy="226" r="3.2" fill="#888c94" />{" "}
            <circle cx="925" cy="226" r="3.2" fill="#888c94" />{" "}
            <circle cx="935" cy="226" r="3.2" fill="#888c94" />{" "}
            <circle cx="945" cy="226" r="3.2" fill="#888c94" />{" "}
            <circle cx="955" cy="226" r="3.2" fill="#888c94" />{" "}
            <circle cx="965" cy="226" r="3.2" fill="#888c94" />
            <circle cx="755" cy="238" r="3.2" fill="#888c94" />{" "}
            <circle cx="765" cy="238" r="3.2" fill="#888c94" />{" "}
            <circle cx="775" cy="238" r="3.2" fill="#888c94" />{" "}
            <circle cx="785" cy="238" r="3.2" fill="#888c94" />{" "}
            <circle cx="795" cy="238" r="3.2" fill="#888c94" />{" "}
            <circle cx="805" cy="238" r="3.2" fill="#888c94" />{" "}
            <circle cx="815" cy="238" r="3.2" fill="#888c94" />{" "}
            <circle cx="825" cy="238" r="3.2" fill="#888c94" />{" "}
            <circle cx="835" cy="238" r="3.2" fill="#888c94" />{" "}
            <circle cx="845" cy="238" r="3.2" fill="#888c94" />{" "}
            <circle cx="855" cy="238" r="3.2" fill="#888c94" />{" "}
            <circle cx="865" cy="238" r="3.2" fill="#888c94" />{" "}
            <circle cx="875" cy="238" r="3.2" fill="#888c94" />{" "}
            <circle cx="885" cy="238" r="3.2" fill="#888c94" />{" "}
            <circle cx="895" cy="238" r="3.2" fill="#888c94" />{" "}
            <circle cx="905" cy="238" r="3.2" fill="#888c94" />{" "}
            <circle cx="915" cy="238" r="3.2" fill="#888c94" />{" "}
            <circle cx="925" cy="238" r="3.2" fill="#888c94" />{" "}
            <circle cx="935" cy="238" r="3.2" fill="#888c94" />{" "}
            <circle cx="945" cy="238" r="3.2" fill="#888c94" />{" "}
            <circle cx="955" cy="238" r="3.2" fill="#888c94" />{" "}
            <circle cx="965" cy="238" r="3.2" fill="#888c94" />{" "}
            <circle cx="975" cy="238" r="3.2" fill="#888c94" />
            <circle cx="755" cy="250" r="3.2" fill="#888c94" />{" "}
            <circle cx="765" cy="250" r="3.2" fill="#888c94" />{" "}
            <circle cx="775" cy="250" r="3.2" fill="#888c94" />{" "}
            <circle cx="785" cy="250" r="3.2" fill="#888c94" />{" "}
            <circle cx="795" cy="250" r="3.2" fill="#888c94" />{" "}
            <circle cx="805" cy="250" r="3.2" fill="#888c94" />{" "}
            <circle cx="815" cy="250" r="3.2" fill="#888c94" />{" "}
            <circle cx="825" cy="250" r="3.2" fill="#888c94" />{" "}
            <circle cx="835" cy="250" r="3.2" fill="#888c94" />{" "}
            <circle cx="845" cy="250" r="3.2" fill="#888c94" />{" "}
            <circle cx="855" cy="250" r="3.2" fill="#888c94" />{" "}
            <circle cx="865" cy="250" r="3.2" fill="#888c94" />{" "}
            <circle cx="875" cy="250" r="3.2" fill="#888c94" />{" "}
            <circle cx="885" cy="250" r="3.2" fill="#888c94" />{" "}
            <circle cx="895" cy="250" r="3.2" fill="#888c94" />{" "}
            <circle cx="905" cy="250" r="3.2" fill="#888c94" />{" "}
            <circle cx="915" cy="250" r="3.2" fill="#888c94" />{" "}
            <circle cx="925" cy="250" r="3.2" fill="#888c94" />{" "}
            <circle cx="935" cy="250" r="3.2" fill="#888c94" />{" "}
            <circle cx="945" cy="250" r="3.2" fill="#888c94" />{" "}
            <circle cx="955" cy="250" r="3.2" fill="#888c94" />{" "}
            <circle cx="965" cy="250" r="3.2" fill="#888c94" />
            <circle cx="755" cy="262" r="3.2" fill="#888c94" />{" "}
            <circle cx="765" cy="262" r="3.2" fill="#888c94" />{" "}
            <circle cx="775" cy="262" r="3.2" fill="#888c94" />{" "}
            <circle cx="785" cy="262" r="3.2" fill="#888c94" />{" "}
            <circle cx="795" cy="262" r="3.2" fill="#888c94" />{" "}
            <circle cx="805" cy="262" r="3.2" fill="#888c94" />{" "}
            <circle cx="815" cy="262" r="3.2" fill="#888c94" />{" "}
            <circle cx="825" cy="262" r="3.2" fill="#888c94" />{" "}
            <circle cx="835" cy="262" r="3.2" fill="#888c94" />{" "}
            <circle cx="845" cy="262" r="3.2" fill="#888c94" />{" "}
            <circle cx="855" cy="262" r="3.2" fill="#888c94" />{" "}
            <circle cx="865" cy="262" r="3.2" fill="#888c94" />{" "}
            <circle cx="875" cy="262" r="3.2" fill="#888c94" />{" "}
            <circle cx="885" cy="262" r="3.2" fill="#888c94" />{" "}
            <circle cx="895" cy="262" r="3.2" fill="#888c94" />{" "}
            <circle cx="905" cy="262" r="3.2" fill="#888c94" />{" "}
            <circle cx="915" cy="262" r="3.2" fill="#888c94" />{" "}
            <circle cx="925" cy="262" r="3.2" fill="#888c94" />{" "}
            <circle cx="935" cy="262" r="3.2" fill="#888c94" />{" "}
            <circle cx="945" cy="262" r="3.2" fill="#888c94" />{" "}
            <circle cx="955" cy="262" r="3.2" fill="#888c94" />
            <circle cx="765" cy="274" r="3.2" fill="#888c94" />{" "}
            <circle cx="775" cy="274" r="3.2" fill="#888c94" />{" "}
            <circle cx="785" cy="274" r="3.2" fill="#888c94" />{" "}
            <circle cx="795" cy="274" r="3.2" fill="#888c94" />{" "}
            <circle cx="805" cy="274" r="3.2" fill="#888c94" />{" "}
            <circle cx="815" cy="274" r="3.2" fill="#888c94" />{" "}
            <circle cx="825" cy="274" r="3.2" fill="#888c94" />{" "}
            <circle cx="835" cy="274" r="3.2" fill="#888c94" />{" "}
            <circle cx="845" cy="274" r="3.2" fill="#888c94" />{" "}
            <circle cx="855" cy="274" r="3.2" fill="#888c94" />{" "}
            <circle cx="865" cy="274" r="3.2" fill="#888c94" />{" "}
            <circle cx="875" cy="274" r="3.2" fill="#888c94" />{" "}
            <circle cx="885" cy="274" r="3.2" fill="#888c94" />{" "}
            <circle cx="895" cy="274" r="3.2" fill="#888c94" />{" "}
            <circle cx="905" cy="274" r="3.2" fill="#888c94" />{" "}
            <circle cx="915" cy="274" r="3.2" fill="#888c94" />{" "}
            <circle cx="925" cy="274" r="3.2" fill="#888c94" />{" "}
            <circle cx="935" cy="274" r="3.2" fill="#888c94" />{" "}
            <circle cx="945" cy="274" r="3.2" fill="#888c94" />
            {/* AFRICA LOWER */}
            <circle cx="785" cy="286" r="3.2" fill="#888c94" />{" "}
            <circle cx="795" cy="286" r="3.2" fill="#888c94" />{" "}
            <circle cx="805" cy="286" r="3.2" fill="#888c94" />{" "}
            <circle cx="815" cy="286" r="3.2" fill="#888c94" />{" "}
            <circle cx="825" cy="286" r="3.2" fill="#888c94" />{" "}
            <circle cx="835" cy="286" r="3.2" fill="#888c94" />{" "}
            <circle cx="845" cy="286" r="3.2" fill="#888c94" />{" "}
            <circle cx="855" cy="286" r="3.2" fill="#888c94" />{" "}
            <circle cx="865" cy="286" r="3.2" fill="#888c94" />{" "}
            <circle cx="875" cy="286" r="3.2" fill="#888c94" />{" "}
            <circle cx="885" cy="286" r="3.2" fill="#888c94" />{" "}
            <circle cx="895" cy="286" r="3.2" fill="#888c94" />{" "}
            <circle cx="905" cy="286" r="3.2" fill="#888c94" />
            <circle cx="785" cy="298" r="3.2" fill="#888c94" />{" "}
            <circle cx="795" cy="298" r="3.2" fill="#888c94" />{" "}
            <circle cx="805" cy="298" r="3.2" fill="#888c94" />{" "}
            <circle cx="815" cy="298" r="3.2" fill="#888c94" />{" "}
            <circle cx="825" cy="298" r="3.2" fill="#888c94" />{" "}
            <circle cx="835" cy="298" r="3.2" fill="#888c94" />{" "}
            <circle cx="845" cy="298" r="3.2" fill="#888c94" />{" "}
            <circle cx="855" cy="298" r="3.2" fill="#888c94" />{" "}
            <circle cx="865" cy="298" r="3.2" fill="#888c94" />{" "}
            <circle cx="875" cy="298" r="3.2" fill="#888c94" />{" "}
            <circle cx="885" cy="298" r="3.2" fill="#888c94" />{" "}
            <circle cx="895" cy="298" r="3.2" fill="#888c94" />
            <circle cx="795" cy="310" r="3.2" fill="#888c94" />{" "}
            <circle cx="805" cy="310" r="3.2" fill="#888c94" />{" "}
            <circle cx="815" cy="310" r="3.2" fill="#888c94" />{" "}
            <circle cx="825" cy="310" r="3.2" fill="#888c94" />{" "}
            <circle cx="835" cy="310" r="3.2" fill="#888c94" />{" "}
            <circle cx="845" cy="310" r="3.2" fill="#888c94" />{" "}
            <circle cx="855" cy="310" r="3.2" fill="#888c94" />{" "}
            <circle cx="865" cy="310" r="3.2" fill="#888c94" />{" "}
            <circle cx="875" cy="310" r="3.2" fill="#888c94" />{" "}
            <circle cx="885" cy="310" r="3.2" fill="#888c94" />
            <circle cx="805" cy="322" r="3.2" fill="#888c94" />{" "}
            <circle cx="815" cy="322" r="3.2" fill="#888c94" />{" "}
            <circle cx="825" cy="322" r="3.2" fill="#888c94" />{" "}
            <circle cx="835" cy="322" r="3.2" fill="#888c94" />{" "}
            <circle cx="845" cy="322" r="3.2" fill="#888c94" />{" "}
            <circle cx="855" cy="322" r="3.2" fill="#888c94" />{" "}
            <circle cx="865" cy="322" r="3.2" fill="#888c94" />{" "}
            <circle cx="875" cy="322" r="3.2" fill="#888c94" />{" "}
            <circle cx="885" cy="322" r="3.2" fill="#888c94" />
            <circle cx="815" cy="334" r="3.2" fill="#888c94" />{" "}
            <circle cx="825" cy="334" r="3.2" fill="#888c94" />{" "}
            <circle cx="835" cy="334" r="3.2" fill="#888c94" />{" "}
            <circle cx="845" cy="334" r="3.2" fill="#888c94" />{" "}
            <circle cx="855" cy="334" r="3.2" fill="#888c94" />{" "}
            <circle cx="865" cy="334" r="3.2" fill="#888c94" />{" "}
            <circle cx="875" cy="334" r="3.2" fill="#888c94" />
            <circle cx="825" cy="346" r="3.2" fill="#888c94" />{" "}
            <circle cx="835" cy="346" r="3.2" fill="#888c94" />{" "}
            <circle cx="845" cy="346" r="3.2" fill="#888c94" />{" "}
            <circle cx="855" cy="346" r="3.2" fill="#888c94" />{" "}
            <circle cx="865" cy="346" r="3.2" fill="#888c94" />{" "}
            <circle cx="875" cy="346" r="3.2" fill="#888c94" />
            <circle cx="825" cy="358" r="3.2" fill="#888c94" />{" "}
            <circle cx="835" cy="358" r="3.2" fill="#888c94" />{" "}
            <circle cx="845" cy="358" r="3.2" fill="#888c94" />{" "}
            <circle cx="855" cy="358" r="3.2" fill="#888c94" />{" "}
            <circle cx="865" cy="358" r="3.2" fill="#888c94" />
            <circle cx="825" cy="370" r="3.2" fill="#888c94" />{" "}
            <circle cx="835" cy="370" r="3.2" fill="#888c94" />{" "}
            <circle cx="845" cy="370" r="3.2" fill="#888c94" />{" "}
            <circle cx="855" cy="370" r="3.2" fill="#888c94" />{" "}
            <circle cx="865" cy="370" r="3.2" fill="#888c94" />
            <circle cx="825" cy="382" r="3.2" fill="#888c94" />{" "}
            <circle cx="835" cy="382" r="3.2" fill="#888c94" />{" "}
            <circle cx="845" cy="382" r="3.2" fill="#888c94" />{" "}
            <circle cx="855" cy="382" r="3.2" fill="#888c94" />
            <circle cx="835" cy="394" r="3.2" fill="#888c94" />{" "}
            <circle cx="845" cy="394" r="3.2" fill="#888c94" />{" "}
            <circle cx="855" cy="394" r="3.2" fill="#888c94" />
            <circle cx="835" cy="406" r="3.2" fill="#888c94" />{" "}
            <circle cx="845" cy="406" r="3.2" fill="#888c94" />
            {/* MADAGASCAR */}
            <circle cx="895" cy="346" r="3.2" fill="#888c94" />{" "}
            <circle cx="895" cy="358" r="3.2" fill="#888c94" />{" "}
            <circle cx="895" cy="370" r="3.2" fill="#888c94" />
            {/* ASIA EAST / RUSSIA EAST */}
            <circle cx="905" cy="10" r="3.2" fill="#888c94" />{" "}
            <circle cx="915" cy="10" r="3.2" fill="#888c94" />{" "}
            <circle cx="925" cy="10" r="3.2" fill="#888c94" />{" "}
            <circle cx="935" cy="10" r="3.2" fill="#888c94" />{" "}
            <circle cx="945" cy="10" r="3.2" fill="#888c94" />{" "}
            <circle cx="955" cy="10" r="3.2" fill="#888c94" />{" "}
            <circle cx="965" cy="10" r="3.2" fill="#888c94" />{" "}
            <circle cx="975" cy="10" r="3.2" fill="#888c94" />
            <circle cx="915" cy="22" r="3.2" fill="#888c94" />{" "}
            <circle cx="925" cy="22" r="3.2" fill="#888c94" />{" "}
            <circle cx="935" cy="22" r="3.2" fill="#888c94" />{" "}
            <circle cx="945" cy="22" r="3.2" fill="#888c94" />{" "}
            <circle cx="955" cy="22" r="3.2" fill="#888c94" />{" "}
            <circle cx="965" cy="22" r="3.2" fill="#888c94" />{" "}
            <circle cx="975" cy="22" r="3.2" fill="#888c94" />{" "}
            <circle cx="985" cy="22" r="3.2" fill="#888c94" />
            <circle cx="925" cy="34" r="3.2" fill="#888c94" />{" "}
            <circle cx="935" cy="34" r="3.2" fill="#888c94" />{" "}
            <circle cx="945" cy="34" r="3.2" fill="#888c94" />{" "}
            <circle cx="955" cy="34" r="3.2" fill="#888c94" />{" "}
            <circle cx="965" cy="34" r="3.2" fill="#888c94" />{" "}
            <circle cx="975" cy="34" r="3.2" fill="#888c94" />{" "}
            <circle cx="985" cy="34" r="3.2" fill="#888c94" />
            <circle cx="935" cy="46" r="3.2" fill="#888c94" />{" "}
            <circle cx="945" cy="46" r="3.2" fill="#888c94" />{" "}
            <circle cx="955" cy="46" r="3.2" fill="#888c94" />{" "}
            <circle cx="965" cy="46" r="3.2" fill="#888c94" />{" "}
            <circle cx="975" cy="46" r="3.2" fill="#888c94" />{" "}
            <circle cx="985" cy="46" r="3.2" fill="#888c94" />
            <circle cx="945" cy="58" r="3.2" fill="#888c94" />{" "}
            <circle cx="955" cy="58" r="3.2" fill="#888c94" />{" "}
            <circle cx="965" cy="58" r="3.2" fill="#888c94" />{" "}
            <circle cx="975" cy="58" r="3.2" fill="#888c94" />{" "}
            <circle cx="985" cy="58" r="3.2" fill="#888c94" />
            <circle cx="945" cy="70" r="3.2" fill="#888c94" />{" "}
            <circle cx="955" cy="70" r="3.2" fill="#888c94" />{" "}
            <circle cx="965" cy="70" r="3.2" fill="#888c94" />{" "}
            <circle cx="975" cy="70" r="3.2" fill="#888c94" />{" "}
            <circle cx="985" cy="70" r="3.2" fill="#888c94" />
            <circle cx="955" cy="82" r="3.2" fill="#888c94" />{" "}
            <circle cx="965" cy="82" r="3.2" fill="#888c94" />{" "}
            <circle cx="975" cy="82" r="3.2" fill="#888c94" />{" "}
            <circle cx="985" cy="82" r="3.2" fill="#888c94" />
            <circle cx="965" cy="94" r="3.2" fill="#888c94" />{" "}
            <circle cx="975" cy="94" r="3.2" fill="#888c94" />{" "}
            <circle cx="985" cy="94" r="3.2" fill="#888c94" />
            <circle cx="965" cy="106" r="3.2" fill="#888c94" />{" "}
            <circle cx="975" cy="106" r="3.2" fill="#888c94" />{" "}
            <circle cx="985" cy="106" r="3.2" fill="#888c94" />
            <circle cx="955" cy="118" r="3.2" fill="#888c94" />{" "}
            <circle cx="965" cy="118" r="3.2" fill="#888c94" />{" "}
            <circle cx="975" cy="118" r="3.2" fill="#888c94" />{" "}
            <circle cx="985" cy="118" r="3.2" fill="#888c94" />
            <circle cx="945" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="955" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="965" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="975" cy="130" r="3.2" fill="#888c94" />{" "}
            <circle cx="985" cy="130" r="3.2" fill="#888c94" />
            <circle cx="935" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="945" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="955" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="965" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="975" cy="142" r="3.2" fill="#888c94" />{" "}
            <circle cx="985" cy="142" r="3.2" fill="#888c94" />
            <circle cx="925" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="935" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="945" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="955" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="965" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="975" cy="154" r="3.2" fill="#888c94" />{" "}
            <circle cx="985" cy="154" r="3.2" fill="#888c94" />
            <circle cx="935" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="945" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="955" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="965" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="975" cy="166" r="3.2" fill="#888c94" />{" "}
            <circle cx="985" cy="166" r="3.2" fill="#888c94" />
            <circle cx="945" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="955" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="965" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="975" cy="178" r="3.2" fill="#888c94" />{" "}
            <circle cx="985" cy="178" r="3.2" fill="#888c94" />
            <circle cx="955" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="965" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="975" cy="190" r="3.2" fill="#888c94" />{" "}
            <circle cx="985" cy="190" r="3.2" fill="#888c94" />
            <circle cx="965" cy="202" r="3.2" fill="#888c94" />{" "}
            <circle cx="975" cy="202" r="3.2" fill="#888c94" />{" "}
            <circle cx="985" cy="202" r="3.2" fill="#888c94" />
            <circle cx="975" cy="214" r="3.2" fill="#888c94" />{" "}
            <circle cx="985" cy="214" r="3.2" fill="#888c94" />
            <circle cx="985" cy="226" r="3.2" fill="#888c94" />
          </g>
        </svg>
      </div>

      {/* Vercel Triangle Icon */}
      <div style={{ display: "flex" }}>
        <svg
          width="36"
          height="32"
          viewBox="0 0 76 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Main Headline */}
      <div
        style={{
          display: "flex",
          maxWidth: "880px",
          fontSize: "56px",
          fontWeight: 600,
          lineHeight: 1.15,
          letterSpacing: "-0.03em",
          color: "#ffffff",
        }}
      >
        {title}
      </div>
    </div>
  );
}
