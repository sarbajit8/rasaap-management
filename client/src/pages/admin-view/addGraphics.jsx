import React from 'react'

import { Tabs,TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'


import Attendance from '../../components/admin-view/attendance'
import AdminleaveApplication from '../../components/admin-view/leaveApplication'
import AdminWarning from '../../components/admin-view/adminWarning'
import AdminResignation from '../../components/admin-view/adminResignation'
import AddVideos from '../../components/admin-view/addVideos'
import AddImages from '../../components/admin-view/addImages'
import AddPdf from '../../components/admin-view/addPdf'


const AddGraphics = () => {

  
  return (
    <div className='flex flex-col m-4 '>
      {/* <div className='relative h-[300px] w-full overflow-hidden'>
        <img
        width={"1600"}
        height={"300"}
           src={accImg}
           className='h-full w-full object-cover object-center '
         /> 
      </div> */}

      <div className="container  mx-auto grid grid-cols-1 gap-8 py-8">
        <div className='flex flex-col rounded-lg border bg-background p-6 shadow-sm '>
          <Tabs defaultValue="orders" >
            <TabsList>
            <div className="overflow-x-auto">

            <TabsTrigger value="videos">Add Videos</TabsTrigger>
            <TabsTrigger value="images">Add Images</TabsTrigger>
            <TabsTrigger value="pdf">Add pdf</TabsTrigger>

</div>


            </TabsList>
            <TabsContent value='videos'>
              <AddVideos/>
            </TabsContent>
            <TabsContent value='images' >
              <AddImages/>
            </TabsContent>
            <TabsContent value='pdf' >
              <AddPdf/>
            </TabsContent>

           
         
          </Tabs>

        </div>

      </div>
    </div>
  )
}





export default AddGraphics