import { Footer,Navbar } from "./components"
//第二版导航栏
// import { Navbar } from "./components/Macviews";
import * as Sentry from '@sentry/react';
const App = () =>{
  return ( 
    <main className="bg-black">
      <Navbar />
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);
