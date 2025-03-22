
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "@/context/AppContext";
import AppLayout from "@/components/layout/AppLayout";
import NotFound from "./pages/NotFound";

// Import all our pages
import Dashboard from "./pages/Dashboard";
import CustomersPage from "./pages/CustomersPage";
import InvoicesPage from "./pages/InvoicesPage";
import InventoryPage from "./pages/InventoryPage";
import ReportsPage from "./pages/ReportsPage";
import AlertsPage from "./pages/AlertsPage";
import Index from "./pages/Index";
import ImportExportPage from "./pages/ImportExportPage";
import SettingsPage from "./pages/SettingsPage";
import AddNewCustomerPage from "./pages/AddNewCustomerPage";
import AddNewInvoicePage from "./pages/AddNewInvoicePage";
import AddNewVendorPage from "./pages/AddNewVendorPage";
import VendorsPage from "./pages/VendorsPage";
import TaxesPage from "./pages/TaxesPage";
import PaymentsPage from "./pages/PaymentsPage";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import InvoiceDetailPage from "./pages/InvoiceDetailPage";
import { AnimatePresence } from "framer-motion";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-right" />
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/index" element={<Index />} />
              <Route element={<AppLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/customers" element={<CustomersPage />} />
                <Route path="/customers/add" element={<AddNewCustomerPage />} />
                <Route path="/customers/:id" element={<CustomerDetailPage />} />
                <Route path="/vendors" element={<VendorsPage />} />
                <Route path="/vendors/add" element={<AddNewVendorPage />} />
                <Route path="/invoices" element={<InvoicesPage />} />
                <Route path="/invoices/add" element={<AddNewInvoicePage />} />
                <Route path="/invoices/:id" element={<InvoiceDetailPage />} />
                <Route path="/payments" element={<PaymentsPage />} />
                <Route path="/inventory" element={<InventoryPage />} />
                <Route path="/taxes" element={<TaxesPage />} />
                <Route path="/reports" element={<ReportsPage />} />
                <Route path="/alerts" element={<AlertsPage />} />
                <Route path="/import-export" element={<ImportExportPage />} />
                <Route path="/settings" element={<SettingsPage />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </TooltipProvider>
    </AppProvider>
  </QueryClientProvider>
);

export default App;
