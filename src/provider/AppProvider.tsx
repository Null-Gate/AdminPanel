import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import "@mantine/core/styles.css";
import '@mantine/dates/styles.css';
import { DatesProvider } from "@mantine/dates";
import { MantineProvider } from "@mantine/core";
interface ChildProps {
  children: React.ReactNode;
}
const AppProvider = ({ children }: ChildProps) => {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <MantineProvider>
        <QueryClientProvider client={queryClient}>
          <DatesProvider settings={{ timezone: "America/New_York" }}>
            {children}
          </DatesProvider>
        </QueryClientProvider>
      </MantineProvider>
      <Toaster />
    </BrowserRouter>
  );
};

export default AppProvider;
