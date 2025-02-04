import React, { useEffect } from "react";
import WesterosTheme from "./Echarts/WesterosTheme.json";
import * as echarts from "echarts";
import "./styles.css";
import BarPieWordCloud from "./pages/BarPieWordCloud";

export default function App() {
  useEffect(() => {
    // theme for echart
    echarts.registerTheme("westeros", WesterosTheme);
  }, []);

  return (
    <div className="App">
      <BarPieWordCloud />
    </div>
  );
}
