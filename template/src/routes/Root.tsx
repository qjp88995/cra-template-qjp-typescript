import { Outlet, ScrollRestoration } from "react-router-dom";

const Root: React.FC = () => {
  return (
    <>
      <ScrollRestoration
        getKey={(location, _matches) => {
          console.log(location.pathname);
          return location.pathname;
        }}
      />
      <Outlet />
    </>
  );
};

export default Root;
