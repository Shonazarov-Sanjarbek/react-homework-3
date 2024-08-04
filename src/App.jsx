import { useState } from 'react'
import Header from './components/Header/Header'
import Props from './components/Props/Props'
import Products from './components/Products/Products'



function App() {

  return (
    <>
      < Header items={["Shop", "All", "Mobile", "TV & Audio", "Appliaces", "Computing", "Displays", "Accessories", "SmartThings"]} item={["Explore", "Support", "For Business"]}/>

      < Props subtitle={"Mobile & Computing"} categories={["Galaxy Z Flip6", "Galaxy Z Fold6", "Galaxy Watch Ultra", "Galaxy Buds3 Pro", "Galaxy Experience"]} img="/assets/props-1.jpg" title={"Galaxy Z Flip6"} desc={["Get up $650 instant trade-in credit and double the storage on us with select colors"]} btn={"Buy now"}/>

      < Props subtitle={"TV & Audio"} categories={["Samsung Neo Qled 8k", "TV+Soundbar bundles", "Q990D"]} img="/assets/props-2.jpg" title={"Discover new depths of detail"} desc={["Buy an 85” Class Samsung Neo QLED QN800D and take in hyper-realistic picture with Neo Quantum HDR 8K+."]} btn={"Buy now"} cl="#fff"/>

      < Props subtitle={"Home Appliances"} categories={["Bespoke Appliances", "Bespoke Refrigerators", "Bespoke Laundry"]} img="/assets/props-3.jpg" title={"Save on Bespoke all summer"} desc={["Get up to $1,300 off select Bespoke models from America's #1 appliance brand."]} btn={"Shop now"}/>

      < Products subtitle={"Shop all latest offers and innovations"} title={"View all offers"} categories={["For You", "Top Deals", "Mobile", "TV & Audio", "Home Appliances", "Computing"]}/>
    </>
  )
}

export default App
