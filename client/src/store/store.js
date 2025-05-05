import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import Attendance from "../store/common/attendance-slice/index";
import leaveSlice from "../store/common/leaveApplication-slice/index";
import warningSlice from "../store/common/warning-slice/index";
import terminateSlice from "../store/common/termination-slice/index";
import resignationSlice from "../store/common/resignation-slice/index";
import adddataSlice from "../store/tstl/adddata-slice/index";
import assignPackageSlice from "../store/tstl/assignPackage-slice/index";

import serviceSlice from "../store/admin/services-slice";
import packageSlice from "../store/admin/packages-slice";
import kycLinksSlice from "../store/admin/kyclink-slice";
import addImageSlice from "../store/admin/AddImage-slice";











const store = configureStore({
  reducer: {
    auth: authReducer,
    attendance: Attendance,
    leave: leaveSlice,
    warning:warningSlice,
    terminate:terminateSlice,
    resignation:resignationSlice,
    adddata:adddataSlice,
    service:serviceSlice,
    package:packageSlice,
    assignPackage:assignPackageSlice,
    kycLink:kycLinksSlice,
    addImage:addImageSlice
  },
});

export default store;
