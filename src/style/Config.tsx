import { ConfigProvider } from "antd";
import { ReactNode } from "react";

const AntdConfig = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#4f3720",
          colorText: "#4f3720",
          controlOutlineWidth: 0,
          colorBgBase: "#ffffff",
          fontSize: 14,
          fontSizeHeading1: 40,
          fontWeightStrong: 400,
          fontFamily: "Roboto, sans-serif",
        },
        components: {
          Layout: {
            headerBg: "#ffffff",
            headerColor: "#4f3720",
            headerHeight: 70,
            bodyBg: "#ffffff",
            footerBg: "#ffffff",
          },
          List: {
            descriptionFontSize: 12,
          },
          Typography: {
            titleMarginTop: 10,
            titleMarginBottom: 10,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdConfig;
