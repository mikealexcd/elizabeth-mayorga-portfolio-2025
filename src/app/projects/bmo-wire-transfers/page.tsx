import Image from "next/image"
import Link from "next/link"
import { SectionHeader } from "@/components/case-study/section-header"
import { ProcessStep } from "@/components/case-study/process-step"
import { InfoSection } from "@/components/case-study/info-card"
import { ButtonLink } from "@/components/case-study/button-link"
import { DeliverableItem } from "@/components/case-study/deliverable-item"
import BMOWireTransfersBanner from "@/assets/bmo/bmo-wire-banner.jpg"
import BMOAirplane from "@/assets/bmo/bmo-airplane.png"
import BMOChallenges from "@/assets/bmo/bmo-challenges.png"

export default function BMOWireTransfersCaseStudy() {
  return (
    <main className="bg-white">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center text-blue-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </Link>
        <div className="flex gap-8">
          <Link href="/#projects" className="hover:text-blue-900 transition-colors">
            My projects
          </Link>
          <Link href="/#about" className="hover:text-blue-900 transition-colors">
            About me
          </Link>
        </div>
      </div>

      {/* Banner */}
      <div className="w-full">
        <div className="flex justify-center">
          <Image
            alt="Mockups in frames of BMO Wire Transfers on desktop and mobile devices"
            {...BMOWireTransfersBanner}
          />
        </div>
      </div>

      {/* Main Content */}

      {/* Overview and Role Section */}
      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-15">BMO - US Wire Transfer</h1>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <SectionHeader title="OVERVIEW" />
              <p className="text-gray-700 mb-4">
                Following BMO's acquisition of Bank of the West, there was a strategic initiative to modernize and unify the wire transfer experience for U.S. clients. The goal was to reduce reliance on in-branch transactions and empower users with a seamless, self-service digital solution.
              </p>
              <ButtonLink href="#prototype" variant="secondary" className="shadow-[2px_6px_0px_0px_#000000] mt-4">
                CHECK OUT THE PROTOTYPE
              </ButtonLink>
            </div>
            <div>
              <SectionHeader title="MY ROLE" />
              <p className="text-gray-700 mb-4">I led the end-to-end UX strategy, collaborating within an agile framework alongside over 15 stakeholders from diverse teams, including business, product management, and development
              </p>
              <SectionHeader title="DELIVERABLES" className="mt-8" />
              <ul className="grid md:grid-cols-2">
                <DeliverableItem text="User Personas" />
                <DeliverableItem text="Wireframes" />
                <DeliverableItem text="Journey Maps" />
                <DeliverableItem text="Mockups" />
                <DeliverableItem text="Prototype" />
                <DeliverableItem text="Development Handoff" />
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <InfoSection title="Business team and I identified a few challenges" subtitle="PROBLEM" bgColor="bg-gray-100" className="mb-16" media={{ ...BMOChallenges, alt: "Illustration of the challenges" }} transparentMedia>
        <ul>
          <li className="flex items-start mb-2">
            <span className="mr-2">•</span>
            Inability to Initiate Wire Transfers Digitally: Users lacked the capability to send wire transfers through the digital platform, leading to frustration and increased branch visits.
          </li>
          <li className="flex items-start mb-2">
            <span className="mr-2">•</span>
            Business Objective to Reduce In-Branch Transactions: The organization aimed to decrease in-person wire transfer requests by 10% within six months to enhance operational efficiency.
          </li>
          <li className="flex items-start mb-2">
            <span className="mr-2">•</span>
            User Anxiety Over Potential Errors: Customers expressed concerns about making mistakes when attempting to process wire transfers independently.
          </li>
        </ul>
      </InfoSection>

      {/* Solution Section */}
      <InfoSection title="What did we do?" subtitle="SOLUTION" bgColor="bg-white">
        <ul>
          <li className="flex items-start mb-2">
            <span className="mr-2">•</span>
            User-Centered Design Approach: Implemented intuitive interfaces with clear guidance to facilitate user confidence in executing wire transfers.
          </li>
          <li className="flex items-start mb-2">
            <span className="mr-2">•</span>
            Educational Tooltips and Confirmations: Integrated real-time feedback mechanisms to reassure users at each step of the process.
          </li>
          <li className="flex items-start mb-2">
            <span className="mr-2">•</span>
            Streamlined Workflow: Reduced the number of steps required to complete a wire transfer, minimizing complexity and potential errors.
          </li>
        </ul>
      </InfoSection>

      {/* Results Section */}
      <InfoSection title="What was the impact of this design?" subtitle="OUTCOME" bgColor="bg-gray-100">
        <ul>
          <li className="flex items-start mb-2">
            <span className="mr-2">•</span>
            109% Increase in Digital Wire Transfer Usage: Post-launch analytics indicated a significant uptick in users adopting the digital wire transfer feature.
          </li>
          <li className="flex items-start mb-2">
            <span className="mr-2">•</span>
            50% Adoption Rate on the West Coast: The redesigned experience resonated particularly well with users in the western regions, reflecting successful localization efforts.
          </li>
          <li className="flex items-start mb-2">
            <span className="mr-2">•</span>
            Under 5 Minutes Completion Time: Users were able to complete wire transfers swiftly, enhancing satisfaction and reducing drop-off rates.
          </li>
          <li className="flex items-start mb-2">
            <span className="mr-2">•</span>
            20 Minutes Saved per Transaction for Branch Employees: The shift to digital processing alleviated workload on branch staff, allowing them to focus on more complex customer needs.
          </li>
          <li className="flex items-start mb-2">
            <span className="mr-2">•</span>
            💬 “Very easy to process — thank you for making this available.” — BMO client
          </li>
        </ul>
      </InfoSection>

      {/* Process Section */}
      <InfoSection title="What are my steps while I design?" subtitle="THE PROCESS" bgColor="bg-white">
        <div className="mt-8">
          <ProcessStep number={1} title="Discovery & Research" bgColor="bg-blue-500">
            <p>
              Reviewed existing West Coast customer behaviour and branch wire logs. Gathered insights from the existing business team to understand what they were trying to achieve with this new feature. At BMO, we used a template called Phase 0 which helped us gather important information from relevant stakeholders making sure that we were missing any important information.
            </p>
          </ProcessStep>
          <ProcessStep number={2} title="Defining the Problem" bgColor="bg-blue-500">
            <p>
              Mapped current vs ideal-state user flows to reduce drop-off and confusion. I also added some common sentiments among users through the paths such as not trusting themselves when sending a large amount of money and adding incorrect information.
            </p>
          </ProcessStep>
          <ProcessStep number={3} title="Ideation & Concept Development" bgColor="bg-blue-500">
            <p>
              Designed multiple flows with clear instructions, progress indicators, and confirmation steps to increase user confidence. In this case, I like to present wireframes and mockups in separate meetings first focusing only on the UX and not looking into the UI so that I could understand that the journey was intuitive and so that then we could only focus on our UI and the existing design system.
            </p>
          </ProcessStep>
          <ProcessStep number={4} title="Wireframing & Prototyping" bgColor="bg-blue-500">
            <p>
              Ran usability tests to refine copy, error handling, and user guidance through the journey. Testing was short due to time constraints but we made sure to do the best with what we had.
            </p>
          </ProcessStep>
          <ProcessStep number={5} title="Design Handoff & Documentation" bgColor="bg-blue-500">
            <p>
              Using Figma, during our daily standups, I made sure to provide as much information to our developers in order to ensure visual consistency. This range from discussing existing design components to enhancing new components and even teaching them how to navigate Figma in dev mode.
            </p>
          </ProcessStep>
        </div>
      </InfoSection>

      {/* Prototype Section */}

      <InfoSection title="Feel free to explore the prototypes for desktop and mobile" subtitle="PROTOTYPE" bgColor="bg-gray-900" id="prototype" className="text-white">
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Desktop Prototype</p>
          </div>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Mobile Prototype</p>
          </div>
        </div>
      </InfoSection>

      {/* Conclusion Section */}
      <InfoSection title="What were my final thoughts and learning experiences?" subtitle="CONCLUSION" bgColor="bg-white" media={{ ...BMOAirplane, alt: "" }} transparentMedia>
        <p className="text-gray-700 mb-4">
          We successfully got to the goals we had at the beginning of this project. This project taught me how to work across complex, regulated environments while still advocating for simple, intuitive design. I learned how to break down a high-risk, high-friction task like wire transfers into digestible steps users feel confident completing. Collaborating with developers to ensure visual consistency and behaviour across devices also made me more thoughtful in how I document and support handoffs — especially across a multiple stakeholders.
        </p>
      </InfoSection>

      {/* Navigation Footer */}
      <div className="bg-gray-900 text-white px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-8">
          <ButtonLink href="/" variant="secondary">
            Back to Homepage
          </ButtonLink>
          <ButtonLink className="bg-blue-500 text-white hover:bg-blue-400" href="/projects/kpmg">Next: KPMG Proposal Generation Bot</ButtonLink>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-lg py-6 md:py-15 ">
        <p>Elizabeth Mayorga - 2025</p>
      </footer>
    </main >
  )
}
