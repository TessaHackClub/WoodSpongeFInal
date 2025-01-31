'use client';

import Image from "next/image";
// pages/index.tsx
import { useState } from 'react';
import Stepper from './stepper';
import dynamic from "next/dynamic";
import Link from "next/link";


const P5SketchWrapper = dynamic(() => import("./p5SketchWrapper"), { ssr: false }); // Dynamic import

export default function Home() {
  const steps = [
    { id: 1, label: 'Step 1' },
    { id: 2, label: 'Step 2' },
    { id: 3, label: 'Step 3' },
    { id: 4, label: 'Step 4' },
    { id: 5, label: 'Step 5' },
    { id: 6, label: 'Step 6' },
  ];
  
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepClick = (stepId: number) => {
    setCurrentStep(stepId);
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] bg-gradient-to-br from-gray-50 to-blue-100 text-gray-800 min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Wood Sponges
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          An interactive exploration of the science behind futuristic materials
        </p>
        <nav className="flex gap-6 mt-4 text-gray-700">
          {/* Nav Links */}
        </nav>
      </header>

      <main className="flex flex-col gap-16 w-full max-w-5xl mx-auto px-4 sm:px-0">
        <section id="the-issue" className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 border-b-2 border-blue-600 pb-2">
            The Issue: Oil Cleanup
          </h2>
          <p className="leading-relaxed text-lg text-gray-700">
            Oil spills are notoriously difficult to clean up. Ranging from in the kitchen, in automotive applications, and in the environment, oil spills are 
            dangerous and problematic. Existing solutions often absorb the wrong
            liquids, are costly, and lack biodegradability. This project
            examines wood sponges as a revolutionary, sustainable solution.
          </p>
        </section>

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
              <P5SketchWrapper />
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
            </div>
          </div>
        </section>
        
        {/* The Solution Section */}
        <section id="the-solution" className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 border-b-2 border-blue-600 pb-2">
            The Solution: Wood Sponges
          </h2>
          <p className="leading-relaxed text-lg text-gray-700">
            Wood sponges are an innovative material that selectively absorb oil. They then can be squeezed out and reused. After cleanup efforts are complete, wood sponges biodegrade, leaving no trace of their existence. The {" "}
            <span className="relative group">
              <span className="font-bold cursor-pointer text-gray-900">
                porous
              </span>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:flex px-4 py-2 text-sm text-gray-50 bg-gray-800 rounded-lg shadow-lg">
              Having small holes that allow liquid to pass through
              </span>
            </span>{" "}
            structure of wood sponges allows them to absorb large amounts of oil
            quickly. Watch the demo below to see one in action.
          </p>
          <iframe src="https://www.youtube.com/embed/Czr0cjxpkuk" className="w-full h-96 rounded-lg shadow-md"></iframe>

        </section>

        {/* Making Wood Sponges Section */}
        <section id="making" className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 border-b-2 border-blue-600 pb-2">
            Making Wood Sponges
          </h2>
          <p className="leading-relaxed text-lg text-gray-700">
            Scientists have experimented with several cutting edge strategies to create wood sponges. Navigate through the steps to view the optimal process. 
          </p>
          <div className="container mx-auto p-4">
      <Stepper steps={steps} currentStep={currentStep} onStepClick={handleStepClick} />
      <div className="mt-4">
      <div className="mt-4">
  {currentStep === 1 && (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold text-gray-900">Preparing Wood</h3>
      <p className="text-lg text-gray-700">
        Poplar wood has been frequently used in Wood Sponge tests. However, other similar density woods may be utilized. The wood gets cut into small, uniform blocks.
      </p>
      <Image src="/s1.png" alt="Wood Blocks" width={100} height={100} />

    </div>
  )}

  {currentStep === 2 && (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold text-gray-900">Lignin Removal</h3>
      <p className="text-lg text-gray-700">
      Delignification:
Wood blocks are immersed in a solution of sodium chlorite and acetic acid.
This removes lignin, giving the wood a lighter color.
      </p>
      <Image src="/s2.png" alt="Wood Blocks" width={100} height={100} />
    </div>
  )}

  {currentStep === 3 && (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold text-gray-900">Hemicellulose removal</h3>
      <p className="text-lg text-gray-700">
      Treat the delignified wood with sodium hydroxide solution.
      This removes hemicellulose, leaving a primarily cellulose structure.
      </p>
      <Image src="/s3.png" alt="Wood Blocks" width={100} height={100} />
    </div>
  )}
  {currentStep === 4 && (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold text-gray-900">Wood Sponge Creation</h3>
      <p className="text-lg text-gray-700">
      Freeze the treated wood blocks.
Sublimate the ice, leaving behind a porous, sponge-like structure.
      </p>
      <Image src="/s3.png" alt="Wood Blocks" width={100} height={100} />
    </div>
  )}
  {currentStep === 5 && (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold text-gray-900">Reinforcement</h3>
      <p className="text-lg text-gray-700">
      The wood sponge is immersed in a polyvinyl alcohol (PVA) solution.
      This strengthens the sponge and improves its mechanical properties.
      </p>
      <Image src="/s5.png" alt="Wood Blocks" width={100} height={100} />
    </div>
  )}
  {currentStep === 6 && (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold text-gray-900">Hydrophobization</h3>
      <p className="text-lg text-gray-700">
      Immerse the wood sponge in a polydimethylsiloxane (PDMS) solution.
This creates a hydrophobic coating on the sponge.
      </p>
      <Image src="/s6.png" alt="Wood Blocks" width={100} height={100} />
    </div>
  )}
 
</div>

      </div>
    </div>
        </section>
        {/* Innovative Use Section */}
        <section id="uses" className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 border-b-2 border-blue-600 pb-2">
            An Innovative Use Case
          </h2>
          <p className="leading-relaxed text-lg text-gray-700">
            Wood sponges have been used in a variety of applications. One potential use is in the creation of a floating oil barrier. This barrier can be deployed in the event of an oil spill to contain and absorb the oil, preventing it from spreading and causing further damage.Due to the sponges flexible properties, once the oil is absorbed, the barrier can be easily removed and the barrier rolled up to squeeze out oil for reuse.
          </p>
          <Image src="/sponge.png" alt="Oil Barrier" width={500} height={500} />
        </section>
        {/* Test Plans Section */}
        <section id="testPlans" className="flex flex-col justify-content-center gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 border-b-2 border-blue-600 pb-2">
            Test Plans
          </h2>
          <p className="leading-relaxed text-lg text-gray-700">
           Although some tests have been conducted, more research is needed to fully understand the potential of wood sponges and their mechanic properties. Explore the Gantt Chart illustrating a test plan, as well as the current known properties.
          </p>
          <Image  src="/gantt.png" alt="Gantt Chart" width={800} height={800} />
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
          
          <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded">
          <Link href="https://a360.co/40WFshy" target="_blank">Go to 3D Model
  </Link>
</button>

        </section>

               {/* References Section */}
               <section id="sources" className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 border-b-2 border-blue-600 pb-2">
            References
          </h2>
          <div className="list-disc pl-6 text-lg leading-relaxed  text-gray-700">
            <p>
              Cai, Yijing, et al. “Wood Sponge Reinforced with Polyvinyl Alcohol for Sustainable Oil–Water Separation.” <i>ACS Omega</i>, vol. 6, no. 19, 10 May 2021, pp. 12866–12876, 
              
            <a href="https://doi.org/10.1021/acsomega.1c01280" className="text-blue-600 hover:underline"> https://doi.org/10.1021/acsomega.1c01280</a>. Accessed 5 Apr. 2022.
           
            </p>

            <p>
              Guan, Hao, et al. “Highly Compressible Wood Sponges with a Spring-like Lamellar Structure as Effective and Reusable Oil Absorbents.” <i>ACS Nano</i>, vol. 12, no. 10, Oct. 2018, pp. 10365–10373, 
              <a href="https://doi.org/10.1021/acsnano.8b05763" className="text-blue-600 hover:underline"> https://doi.org/10.1021/acsnano.8b05763</a>.
            </p>

            <p>
              “Wood Sponge Soaks up Oil from Water (Video).” <i>American Chemical Society</i>, 
              <a href="https://www.acs.org/pressroom/presspacs/2018/acs-presspac-october-24-2018/wood-sponge-soaks-up-oil-from-water-video.html" className="text-blue-600 hover:underline">
                www.acs.org/pressroom/presspacs/2018/acs-presspac-october-24-2018/wood-sponge-soaks-up-oil-from-water-video.html
              </a>.
            </p>

            <p>
              “Wood-Based Sponges Could Clean Oil Spills.” <i>Nomaco</i>, 1 Feb. 2019, 
              <a href="https://www.nomaco.com/wood-based-sponges-could-clean-oil-spills/" className="text-blue-600 hover:underline">
                www.nomaco.com/wood-based-sponges-could-clean-oil-spills/
              </a>.
            </p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="text-center text-gray-600 mt-8 text-sm">
        <p>
          Created by Maisey | &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
