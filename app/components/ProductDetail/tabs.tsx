"use client"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function ProductTabs({products}: any) {
  return (
   
    <Tabs>
    <TabList>
    <div className="grid grid-cols-2 gap-10 ">
      <Tab>
     
        <div className="px-4 py-6 rounded-sm overflow-hidden text-center">

<p className="text-center text-gray-800">Хэрэглэх заалт
</p>
</div>
        </Tab>
        <Tab>
        <div className=" px-4 py-6 rounded-sm overflow-hidden text-center">

<p className="text-center text-gray-800">Хэрэглэх заавар
</p>
</div>
        </Tab>
    </div>
    </TabList>

    <TabPanel>
      <h2>{products?.useZaalt ? products.useZaalt : "no desc"}</h2>
    </TabPanel>
    <TabPanel>
      <h2>{products?.useTitle ? products.useTitle : "no title"}</h2>
    </TabPanel>
 
  </Tabs>

  )
}
