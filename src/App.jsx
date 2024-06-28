import { Footer, Navbar} from "./components"
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
