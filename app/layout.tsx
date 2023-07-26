import { ReactNode } from "react";
import Nav from "@components/Nav";
import "@styles/globals.css";
import Provider from "@components/Provider";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
}: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
