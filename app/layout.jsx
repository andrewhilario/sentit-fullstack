import "./globals.css";
import Nav from "./auth/Nav";
import QueryWrapper from "./auth/QueryWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="mx-4 md:mx-48 lg:mx-96 bg-gray-200 ">
        <QueryWrapper>
          <Nav />

          {children}
        </QueryWrapper>
      </body>
    </html>
  );
}
