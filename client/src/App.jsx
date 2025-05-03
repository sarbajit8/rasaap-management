import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthLayout from './components/auth/layout'
import  AuthLogin from './pages/auth/Login'
import AuthRegister from './pages/auth/Register'
import AdminLayout from './components/admin-view/layout'
import AdminDashboard from './pages/admin-view/dashboard'
import EmployeeLayout from './components/employee-view/layout'
import EmployeeDashboard from './pages/employee-view/dashboard'
import NotFound from './pages/not-found'
import TeleSalesLayout from './components/sales/tele-sales/layout'
import FieldSalesLayout from './components/sales/field-sales/layout'
import TeleSalesDashboard from './pages/sales/tele-sales/dashboard'
import FieldSalesDashboard from './pages/sales/field-sales/dashboard'
import TeleLeaderLayout from './components/sales/tele-sales-tl/layout'
import TeleLidDashboard from './pages/sales/tele-sales-tl/dashboard'
import FieldLeaderLayout from './components/sales/field-sales-tl/layout'
import FieldLidDashboard from './pages/sales/field-sales-tl/dashboard'
import CheckAuth from './components/common/check-auth'
import UnauthPage from './pages/unauth-page'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { checkAuth } from './store/auth-slice'; 
import AttendanceDetails from './components/admin-view/attendanceDetails'
import EmployeeList from './pages/admin-view/employeeList'
import AdminWarning from './components/admin-view/adminWarning'
import AdminTerminate from './components/admin-view/adminTerminate'
import AddData from './pages/sales/tele-sales-tl/addData'
import Packages from './components/admin-view/packages'
import AssignPackages from './components/sales/tele-sales-tl/assignPackages'
import ViewData from './pages/sales/tele-sales/viewData'
import AssignPackagesTs from './components/sales/tele-sales/assignPackagesTs'
import ViewFlData from './pages/sales/field-sales-tl/viewFlData'
import ViewFsData from './pages/sales/field-sales/viewFsData'



function App() {

  
  // const { user, isAuthenticated, isLoading } = useSelector(
  //   (state) => state.auth
  // );

  const { user, isAuthenticated, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Check session on load
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  
  // Optional: Show loading spinner while checking auth
  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <p className="text-lg">Checking session...</p>
  //     </div>
  //   );
  // }
  return (
   <div className='flex flex-col overflow-hidden bg-white'>
    {/* common component */}
    <Routes>
      <Route path="/auth" element={
     <CheckAuth isAuthenticated={isAuthenticated} user={user}>
     <AuthLayout/>
   </CheckAuth>
    }>
      <Route path="login" element={<AuthLogin/>}/>
      <Route path="register" element={<AuthRegister/>}/>
      </Route>

      {/* //admin// */}

      <Route path="/admin" element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AdminLayout/>
        </CheckAuth>
        }>
      <Route path="dashboard" element={<AdminDashboard/>}/>
      <Route path="attendance-details/:id" element={<AttendanceDetails/>}/>
      <Route path="employee" element={<EmployeeList/>}/>
      <Route path="warning/:employeeId" element={<AdminWarning/>}/>
      <Route path="terminate/:employeeId" element={<AdminTerminate/>}/>
      <Route path="packages" element={<Packages/>}/>




       
      
      
      </Route>

      {/* <Route path="/employee" element={<EmployeeLayout/>}>
      <Route path="dashboard" element={<EmployeeDashboard/>}/>
    
      </Route> */}

      {/* //tele sales// */}
      <Route path="/telesales" element={
         <CheckAuth isAuthenticated={isAuthenticated} user={user}>
         <TeleSalesLayout/>
       </CheckAuth>
        }>
      <Route path="dashboard" element={<TeleSalesDashboard/>}/> 
      <Route path="viewdata" element={<ViewData/>}/> 
      <Route path="assignpackages/:id" element={<AssignPackagesTs/>}/>    

      
      </Route>
       {/* //tele sales leader// */}
       <Route path="/telesalestl" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <TeleLeaderLayout/>
        </CheckAuth>}>
      <Route path="dashboard" element={<TeleLidDashboard/>}/>    
      <Route path="adddata" element={<AddData/>}/>    
      <Route path="assignpackages/:id" element={<AssignPackages/>}/>    


      
      
      </Route>
      {/* //field sales// */}
      <Route path="/fieldsales" element={
         <CheckAuth isAuthenticated={isAuthenticated} user={user}>
         <FieldSalesLayout/>
       </CheckAuth>}>             
      <Route path="dashboard" element={<FieldSalesDashboard/>}/>    
      <Route path="viewdata" element={<ViewFsData/>}/>    



      
      </Route>
         {/* //field Leader// */}
         <Route path="/fieldsalestl" element={
           <CheckAuth isAuthenticated={isAuthenticated} user={user}>
           <FieldLeaderLayout/>
         </CheckAuth>}>
      <Route path="dashboard" element={<FieldLidDashboard/>}/>    
      <Route path="viewdata" element={<ViewFlData/>}/>    


      
      </Route>

      {/* not found */}
      <Route path="*" element={<NotFound/>}/>
      <Route path="/unauth-page" element={<UnauthPage/>}/>


    </Routes>

   </div>
  )
}

export default App
