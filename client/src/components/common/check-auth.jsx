import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();
  const role = user?.role;

  const getDashboardPath = (role) => {
    switch (role) {
      case "admin": return "/admin/home";
      case "ts": return "/telesales/dashboard";
      case "tl": return "/telesalestl/dashboard";
      case "fs": return "/fieldsales/dashboard";
      case "fl": return "/fieldsalestl/dashboard";
      default: return "/auth/login";
    }
  };

  const isAuthPage =
    location.pathname.toLowerCase().includes("/login") 
    // ||
    // location.pathname.toLowerCase().includes("/register");

  const isSalesRoute =
    location.pathname.includes("telesales") ||
    location.pathname.includes("telesalestl") ||
    location.pathname.includes("fieldsales") ||
    location.pathname.includes("fieldsalestl");

  // Case 1: Unauthenticated trying to access protected routes
  if (!isAuthenticated && !isAuthPage) {
    return <Navigate to="/auth/login" />;
  }

  // Case 2: Authenticated + valid role trying to access login/register
  if (
    isAuthenticated &&
    role &&
    role !== "" &&
    isAuthPage
  ) {
    return <Navigate to={getDashboardPath(role)} />;
  }

  // Case 3: Root path (/) — redirect if authenticated
  if (location.pathname === "/") {
    return isAuthenticated && role
      ? <Navigate to={getDashboardPath(role)} />
      : <Navigate to="/auth/login" />;
  }

  // Case 4: Prevent non-admins from accessing admin routes
  if (isAuthenticated && role !== "admin" && location.pathname.includes("admin")) {
    return <Navigate to="/unauth-page" />;
  }

  // Case 5: Prevent admins from accessing sales routes
  if (isAuthenticated && role === "admin" && isSalesRoute) {
    return <Navigate to="/admin/home" />;
  }

  return <>{children}</>;
}

export default CheckAuth;
