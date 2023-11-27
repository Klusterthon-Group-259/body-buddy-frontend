import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { LoadingProvider } from "./context/LoadingContext";
import { FormProvider } from "./context/FormContext";

export default function App() {
  return (
    <>
      <LoadingProvider>
        <FormProvider>
          <RouterProvider router={router} />
        </FormProvider>
      </LoadingProvider>
    </>
  );
}
