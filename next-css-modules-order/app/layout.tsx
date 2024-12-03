import "bootstrap/dist/css/bootstrap.css";

import GlobalContainer from "./_stuff/GlobalContainer";

type TProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: TProps) {
  return (
    <html lang="en">
      <body>
        <GlobalContainer />
        {children}
      </body>
    </html>
  );
}
