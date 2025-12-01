import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import * as Sentry from "@sentry/react"
const App = () => {
  import * as Sentry from '@sentry/react';
// Add this button component to your app to test Sentry's error tracking
function ErrorButton() {
  return (
    <button
      onClick={() => {
        throw new Error('This is your first error!');
      }}
    >
      Break the world
    </button>
  );
}
  return (
    <main className="bg-black">
      <Navbar />
      <Hero /> 
      < Highlights />
      <Model />
    </main>
)
}

export default Sentry.withProfiler(App);
