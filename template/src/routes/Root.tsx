import { Outlet, ScrollRestoration } from "react-router-dom";
import { useRequestInterceptorsResponse } from "@/hooks";

const Root: React.FC = () => {
  useRequestInterceptorsResponse();

  return (
    <>
      <ScrollRestoration
        getKey={(location, _matches) => {
          const paths: string[] = [];
          return paths.includes(location.pathname) ? location.pathname : location.key;
        }}
      />
      <Outlet />
    </>
  );
};

export default Root;
