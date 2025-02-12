import Image from "next/image"
import Link from "next/link"
import { Command, ChevronRight } from "lucide-react"
import { instrumentSerif} from "../lib/fonts"

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f3f1ea]">
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 
        bg-[#F2F1EA]/80 backdrop-blur-lg border-b-2 border-[#E8E8E8]
        h-[66px] flex items-center transition-all duration-300 ease-in-out"
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo container */}
          <div className="lg:absolute lg:left-[271px] transition-all duration-300 ease-in-out">
            <div className="flex items-center gap-2">
              <span className={`${instrumentSerif.className} text-xl`}>Existence</span>
            </div>
          </div>

          {/* Right side elements */}
          <div className="lg:absolute lg:right-[271px] flex items-center gap-[40px]">
            <Link
              href="/services"
              className="text-[13px] font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300 ease-in-out font-instrument-sans"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-[13px] font-medium bg-black text-white px-[13px] pt-[8px] pb-[8px] rounded-[7px] hover:bg-gray-800 transition-all duration-300 ease-in-out font-instrument-sans"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center bg-[#f3f1ea]">
        {/* Spacer for header + intro content */}
        <div className="w-full pt-32 lg:pt-40 px-4 md:px-8 lg:px-0">
          <p className={`font-instrument-sans uppercase tracking-[0.3em] md:tracking-[0.51em] leading-[133%] text-center text-sm sm:text-base md:text-[19px] animate-fade-in-up mb-4 sm:mb-6 md:mb-8 px-4`}>
            INTRODUCING EXISTENCE
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[64px] leading-tight md:leading-[1.3] lg:leading-[83px] text-center max-w-4xl mx-auto animate-fade-in-up mb-4 sm:mb-6 md:mb-8 px-4">
            <span className={`${instrumentSerif.className} font-normal`}>Elevate your </span>
            <span className={`${instrumentSerif.className} font-normal italic`}>business </span>
            <span className={`${instrumentSerif.className} font-normal`}>from concept to reality</span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl lg:text-[28px] text-center font-instrument-sans font-light max-w-3xl mx-auto leading-[1.4] animate-fade-in-up mb-6 sm:mb-8 md:mb-12 px-4">
            Existence is your all-in-one partner for launching and growing exceptional businesses.
          </p>
        </div>

        <Link href="/contact" style={{ marginTop: "-2px" }} className="animate-fade-in-up">
          <div
            className="inline-flex items-center bg-black text-white rounded-[10px] hover:bg-black/90 transition-all duration-300 ease-in-out font-instrument-sans"
            style={{ width: "227px", height: "49px" }}
          >
            <div className="flex items-center justify-between w-full pl-[22px] pr-[17px]">
              <span className="text-[19px] whitespace-nowrap">Get Started</span>
              <ChevronRight
                size={24}
                className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              />
            </div>
          </div>
        </Link>

        <div className="relative w-full mt-12 animate-fade-in-up">
          <Image
            src="/placeholder.svg"
            alt="Existence Services Showcase"
            width={1274}
            height={1043}
            className="w-full max-w-[1274px] mx-auto"
            priority
          />
          <div
            className="absolute bottom-0 left-0 right-0 w-full"
            style={{
              height: "303px",
              background: "linear-gradient(to top, #DCD5C1 0%, rgba(217, 217, 217, 0) 100%)",
              zIndex: 10,
            }}
          />
        </div>

        <div className="container mx-auto relative py-24 px-4">
          <div className="w-full flex justify-center">
            <div className="max-w-[1024px] w-full">
              <div className={`${instrumentSerif.className} text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight md:leading-[70px] animate-fade-in-up px-4`}>
                Comprehensive
                <br />
                Business Solutions
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center mt-8 sm:mt-12 mb-16 sm:mb-24 relative z-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-[1024px] mx-auto px-4">
              <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <Image
            src="/placeholder.svg"
            alt="Branding"
                  width={336}
                  height={332}
                  priority
                  className="w-full mx-auto transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <Image
            src="/placeholder.svg"
            alt="Interior Design"
                  width={336}
                  height={332}
                  priority
                  className="mx-auto transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <Image
            src="/placeholder.svg"
            alt="Psychology"
                  width={336}
                  height={332}
                  priority
                  className="mx-auto transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="font-instrument-sans text-base md:text-lg text-black mt-12 md:mt-0 md:absolute md:right-4 lg:right-[135px] md:top-[256px] md:w-[650px] md:pl-[135px] animate-fade-in-up">
            <p className="md:w-[650px] leading-relaxed">
              Existence is founded by a team of experts in branding, design, and business psychology.
              <br />
              We&apos;re committed to creating holistic solutions for businesses of all sizes.
              <br />
              <Link
                href="/contact"
                className="inline-flex items-center hover:opacity-80 font-instrument-sans text-base md:text-lg leading-[20px] text-black mt-4 group"
              >
                Start Your Journey
                <span className="inline-flex items-center ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                  <ChevronRight size={20} />
                </span>
              </Link>
            </p>
          </div>
        </div>

        {/* New Section */}
        <section className="w-full bg-[#f3f1ea] relative py-24">
          <div className="w-full h-[213px] absolute top-0 left-0 right-0">
            <div
              className="w-full h-full"
              style={{
                background: "linear-gradient(0deg, rgba(243, 241, 234, 0.00) 0%, #DCD5C1 100%)",
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="lg:ml-[112px] animate-fade-in-up">
              <p className="font-instrument-sans text-black text-base sm:text-lg md:text-[18px] font-normal max-w-[326px] px-4">
                From vision to reality
              </p>
              <div className="mt-4">
                <p className={`${instrumentSerif.className} text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-black font-normal leading-tight lg:leading-[65px] max-w-[418px] px-4`}>
                  Your business, <br />
                  reimagined
                </p>
              </div>
              <p className="font-instrument-sans text-black max-w-[326px] mt-6 text-sm sm:text-base md:text-lg px-4">
                We blend psychology, design, and strategy to create a unique identity for your business. Our holistic
                approach ensures that every aspect of your brand aligns with your vision and resonates with your
                audience.
              </p>
            </div>

            <div className="mt-12 md:mt-[-200px]">
              <div className="relative">
                <Image
            src="/placeholder.svg"
            alt="Existence Process Visualization"
                  width={1391}
                  height={1033}
                  className="w-full h-auto animate-fade-in-up"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-8 sm:py-12 w-full mt-12 sm:mt-20">
          <div className="container mx-auto px-4 w-full">
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full">
              <div className="flex flex-col items-center lg:items-start gap-4 mb-6 lg:mb-0">
                <div className="flex items-center gap-2 animate-fade-in-up">
                  <Command
                    size={24}
                    color="white"
                    className="transition-colors duration-300 ease-in-out hover:text-gray-300"
                  />
                  <span className={`${instrumentSerif.className} text-xl text-white`}>Existence</span>
                </div>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-12 text-xs sm:text-sm animate-fade-in-up">
                  <Link
                    href="/services"
                    className="hover:opacity-80 transition-opacity duration-300 ease-in-out font-instrument-sans"
                  >
                    Services
                  </Link>
                  <Link
                    href="/portfolio"
                    className="hover:opacity-80 transition-opacity duration-300 ease-in-out font-instrument-sans"
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/about-us"
                    className="hover:opacity-80 transition-opacity duration-300 ease-in-out font-instrument-sans"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    className="hover:opacity-80 transition-opacity duration-300 ease-in-out font-instrument-sans"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/privacy"
                    className="hover:opacity-80 transition-opacity duration-300 ease-in-out font-instrument-sans"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
            <div className={`mt-8 sm:mt-12 lg:mt-40 text-xs sm:text-sm opacity-70 text-center lg:text-left ${instrumentSerif.className} animate-fade-in-up`}>
              Crafting exceptional business experiences with passion and expertise.
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}

