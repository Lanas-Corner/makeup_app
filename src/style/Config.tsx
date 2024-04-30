import { ConfigProvider } from "antd";
import { ReactNode } from "react";

const AntdConfig = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#4f3720",
          colorText: "black",
          controlOutlineWidth: 0,
          fontSize: 14,
          fontSizeHeading1: 40,
          fontWeightStrong: 400,
          fontFamily: "Roboto, sans-serif",
        },
        components: {
          Layout: {
            headerBg: "#0C0D09",
            headerColor: "#908863",
            headerHeight: 80,
          },
          List: {
            descriptionFontSize: 12,
          },
          Typography: {
            titleMarginTop: 10,
            titleMarginBottom: 10,
          },
          Select: {
            optionActiveBg: "white",
            optionSelectedBg: "#908863",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdConfig;
