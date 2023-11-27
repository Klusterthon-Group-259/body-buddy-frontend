import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { LoadingProvider } from "./context/LoadingContext";
import { FormProvider } from "./context/FormContext";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <>
      <LoadingProvider>
        <FormProvider>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </FormProvider>
      </LoadingProvider>
    </>
  );
}
