import { useState } from 'react'
import Header from './components/Header/Header'
import Props from './components/Props/Props'



function App() {

  return (
    <>
      < Header items={["Shop", "All", "Mobile", "TV & Audio", "Appliaces", "Computing", "Displays", "Accessories", "SmartThings"]} item={["Explore", "Support", "For Business"]}/>
      < Props subtitle={"Mobile & Computing"} categories={["Galaxy Z Flip6", "Galaxy Z Fold6", "Galaxy Watch Ultra", "Galaxy Buds3 Pro", "Galaxy Experience"]} img="/assets/props-1.jpg"/>
    </>
  )
}

export default App
