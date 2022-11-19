import { Outlet, ScrollRestoration } from "react-router-dom";
import { useRequestInterceptorsRequest, useRequestInterceptorsResponse } from "@/hooks";

const Root: React.FC = () => {
  useRequestInterceptorsRequest();
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
