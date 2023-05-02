import Hydrator from "~/components/react-query/hydrator";
import LoginComponent from "./login";
import RQProvider from "~/components/react-query/provider";
interface RootLayoutProps {
  children: React.ReactNode;
}
function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
      // className={cn(
      //   "min-h-screen bg-background font-sans antialiased",
      //   fontSans.variable
      // )}
      >
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
        {/* <SombraEffect /> */}
        <div className="px:1 container relative flex min-h-screen flex-col sm:px-2 md:px-4">
          {/* <Navbar /> */}
          <RQProvider>
            <div className="flex flex-auto">{children}</div>
          </RQProvider>
          {/* <SiteFooter /> */}
        </div>
        {/* </ThemeProvider> */}
        {/* <StyleSwitcher />
          <Analytics /> */}
        {/* <Toaster /> */}
      </body>
    </html>
  );
}

export default RootLayout;
