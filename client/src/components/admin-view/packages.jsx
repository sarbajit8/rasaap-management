import React from 'react'

import { Tabs,TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import AddPackages from './addPackages'
import AddServices from './addServices'





const Packages = () => {

  
  return (
    <div className='flex flex-col m-4 '>
    
      <div className="container  mx-auto grid grid-cols-1 gap-8 py-8">
        <div className='flex flex-col rounded-lg border bg-background p-6 shadow-sm '>
          <Tabs defaultValue="packages" >
            <TabsList>
            <div className="overflow-x-auto">

            <TabsTrigger value="packages">Packages</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>

</div>
            </TabsList>
            <TabsContent value='packages'>
              <AddPackages/>
            </TabsContent>
            <TabsContent value='services' >
              <AddServices/>
            </TabsContent>        
          </Tabs>

        </div>

      </div>
    </div>
  )
}




export default Packages