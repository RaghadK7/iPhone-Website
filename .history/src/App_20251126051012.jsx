import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import * as Sentry from "@sentry/react";

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

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero /> 
      <Highlights />
      <Model />
      {/* يمكنك إضافة زر الاختبار هنا إذا أردت */}
      {/* <ErrorButton /> */}
    </main>
  );
}

export default Sentry.withProfiler(App);