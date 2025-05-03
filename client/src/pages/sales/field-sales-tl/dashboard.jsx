import Warning from "../../../components/sales/tele-sales/warning";
import LeaveApplication from "../../../components/sales/tele-sales/leaveApplication";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import Terminate from "../../../components/sales/tele-sales/terminate";
import Resignation from "../../../components/sales/tele-sales/resignation";
import Attendance from "../tele-sales/attendance";

const FieldLidDashboard = () => {  
  return (
    <div className="h-full overflow-y-auto px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="text-2xl font-bold text-pink-600 mb-6">📊 Dashboard Overview</h2>


      {/* Tabs Section with Attendance and Payroll */}
      <div className="container mx-auto grid grid-cols-1 gap-8 py-8">
        <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm max-h-full  scrollbar-thin">
          <Tabs defaultValue="orders">
            <TabsList>
              <TabsTrigger value="orders">Attendance</TabsTrigger>
              <TabsTrigger value="address">Leave Application</TabsTrigger>
              <TabsTrigger value="warning">Warning</TabsTrigger>
              <TabsTrigger value="terminate">Terminate</TabsTrigger>
              <TabsTrigger value="resignation">Resignation</TabsTrigger>
            </TabsList>
            <TabsContent value="orders">
              <Attendance />
            </TabsContent>
            <TabsContent value="address">
              <LeaveApplication/>
            </TabsContent>
            <TabsContent value="warning">
              <Warning/>
            </TabsContent>
            <TabsContent value="terminate">
              <Terminate/>
            </TabsContent>
            <TabsContent value="resignation">
              <Resignation/>
            </TabsContent>
            
          </Tabs>
        </div>
      </div>
    </div>
  );
};


export default FieldLidDashboard