import React from "react";
import { App as AntApp, ConfigProvider } from "antd";
import { FormDialog, FormDrawer } from "@formily/antd-v5";

const FCProvider: React.FC = ({ children }: React.PropsWithChildren) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#445af7",
          colorLink: "#445af7",
        },
        components: {
          Typography: {
            fontSizeHeading1: 24,
            fontSizeHeading2: 20,
            fontSizeHeading3: 16,
          },
        },
      }}
      direction="ltr"
    >
      <AntApp component={false}>
        <FormDialog.Portal>
          <FormDrawer.Portal>{children}</FormDrawer.Portal>
        </FormDialog.Portal>
      </AntApp>
    </ConfigProvider>
  );
};

export default FCProvider;
