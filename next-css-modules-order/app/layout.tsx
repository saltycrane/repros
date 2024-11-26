import "bootstrap/dist/css/bootstrap.css";

import MyWrapper from "./_stuff/MyWrapper";

type TProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: TProps) {
  return (
    <html lang="en">
      <body>
        <MyWrapper />
        {children}
      </body>
    </html>
  );
}
