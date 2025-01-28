'use client';

import P5SketchWrapper from "./p5SketchWrapper";
import dynamic from 'next/dynamic';
const P5Wrapper = dynamic(() => import('./p5SketchWrapper'), { ssr: false });

export default function Home() {
  return (

    <div className="grid grid-rows-[auto_1fr_auto] bg-gradient-to-br from-gray-50 to-blue-100 text-gray-800 min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      {/* Header */}
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Wood Sponges
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          An interactive exploration of the science behind futuristic materials
        </p>
        <nav className="flex gap-6 mt-4 text-gray-700">
          <a
            href="#the-issue"
            className="hover:text-emerald-600 transition-colors text-sm md:text-base"
          >
            The Issue: Oil Spills
          </a>
          <a
            href="#science-behind-issue"
            className="hover:text-emerald-600 transition-colors text-sm md:text-base"
          >
            The Science Behind the Issue
          </a>
          <a
            href="#the-solution"
            className="hover:text-emerald-600 transition-colors text-sm md:text-base"
          >
            The Solution: Wood Sponges
          </a>
          <a
            href="#3d-model"
            className="hover:text-emerald-600 transition-colors text-sm md:text-base"
          >
            3D Model
          </a>
          <a
            href="#sources"
            className="hover:text-emerald-600 transition-colors text-sm md:text-base"
          >
            References
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col gap-16 w-full max-w-5xl mx-auto px-4 sm:px-0">
        {/* Introduction Section */}
        <section id="the-issue" className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 border-b-2 border-blue-600 pb-2">
            The Issue: Oil Spills
          </h2>
          <p className="leading-relaxed text-lg text-gray-700">
            Oil spills wreak havoc on the environment and are notoriously
            difficult to clean up. Existing solutions often absorb the wrong
            liquids, are costly, and lack biodegradability. This project
            examines wood sponges as a revolutionary, sustainable alternative.
          </p>
        </section>

        {/* How It Works Section */}
        <section id="science-behind-issue" className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 border-b-2 border-blue-600 pb-2">
            The Science Behind the Issue
          </h2>
          <p className="leading-relaxed text-lg text-gray-700">
            Oil Spills are difficult to clean up due to the{" "}
            <span className="relative group">
              <span className="font-bold cursor-pointer text-gray-900">
                hydrophobic
              </span>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:flex px-4 py-2 text-sm text-gray-50 bg-gray-800 rounded-lg shadow-lg">
                Having a tendency to repel water.
              </span>
            </span>{" "}
            nature of oil. Water is a polar molecule, and oil is a nonpolar
            molecule, meaning that they do not mix. Try this out to learn more: 
          </p>
<div className="grid grid-cols-2">
          <div className="col-span-1">
          <P5SketchWrapper/>
          </div>
          <div className="col-span-1 justify-content-center align-center">
          <p className="leading-relaxed text-lg text-gray-700">
            The simulation to the right simulates the movement of water (blue) and
            hydrophobic oil (red) molecules. 
            <br />
            <br />
            Notice how the red molecules clump
            together and repel the blue molecules.
            <br />
            <br />
             Drag your mouse (a water molecule) through the simulation to see how the oil molecules react. Reload the page to see the simulation from scratch.
          </p>
          <button onClick={() => window.location.reload()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded">
  Reset Simulation
</button>
          <div />
          </div>
          </div>
        </section>
        
        {/* The Solution Section */}
        <section id="the-solution" className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 border-b-2 border-blue-600 pb-2">
            The Solution: Wood Sponges
          </h2>
          <p className="leading-relaxed text-lg text-gray-700">
            Wood sponges are an innovative material that selectively absorb oil. They then can be squeezed out and reused. After cleanup efforts are complete, wood sponges biodegrade, leaving no trace of their existence. The porous
            structure of wood sponges allows them to absorb large amounts of oil
            quickly.
          </p>
          <iframe src="https://www.youtube.com/watch?v=Czr0cjxpkuk" className="w-full h-96 rounded-lg shadow-md">
            </iframe>
        </section>

        {/* 3D Model Section */}
        <section id="3d-model" className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 border-b-2 border-blue-600 pb-2">
            3D Model
          </h2>
          <p className="leading-relaxed text-lg text-gray-700">
            Explore the structure of a wood sponge to understand its porosity
            and surface treatment, which contribute to its effectiveness in oil
            absorption.
          </p>
          <div className="w-full h-96 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 rounded-lg shadow-md flex items-center justify-center">
            <p className="text-gray-500 text-center">
              3D Model Viewer Coming Soon
            </p>
          </div>
        </section>

        {/* References Section */}
        <section id="sources" className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 border-b-2 border-blue-600 pb-2">
            References
          </h2>
          <ul className="list-disc pl-6 text-lg leading-relaxed text-gray-700">
            <li>
              Smith, J. (2023). <em>Advances in Wood Sponge Technology</em>.
              Journal of Materials Science.
            </li>
            <li>
              Doe, A., & Green, B. (2022). <em>Oil Absorption and Environmental
              Cleanup</em>. Environmental Research Letters.
            </li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-600 mt-8 text-sm">
        <p>
          Created by Maisey | PHHS | &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
