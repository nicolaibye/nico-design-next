"use client";
import { Lexend } from "next/font/google";
import SectionDivider from "@/app/comp/reuse/SectionDivider";
import AnimatedText from "@/app/comp/reuse/AnimatedText";
import { wrapText } from "@/app/js/helper/wrapText";
import { useState } from "react";

const fontLexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

const userProfiles = [
  {
    name: "Affluent",
    iconColor: "text-[#760933]",
    who: "Business traveller/part leisure. Moderately priced, well-rated hotels value convenience, reliability and family friendliness.",
    currentUse:
      "Booking.com/Expedia user. Start on desktop, finalise on mobile. Deeper research, review checker, close by locations, and checks the features of the hotel.",
    needs:
      "Transparent info about the room, Wi-Fi connection, business options, easy check-in/out, location map and quick access to booking history.",
    wants:
      "Seamless cross-device booking. Filter for business options, quick checkout flow, account + loyalty features, consistent UX.",
    painPoints: [
      "Decision fatigue",
      "Inconsistent UI between devices",
      "Booking changes/cancellations unclear",
    ],
    userTrip:
      "Login -> Destination + date + filters -> Top recommendations with map for locations, reviews, price -> Books in a few steps. Later in the app, he sees the upcoming trip, itinerary, and check-in link. Mobile notifications for check-in, changes, and loyalty offers.",
  },
  {
    name: "Guardian",
    iconColor: "text-[#ec4e20]",
    who: "Value-driven, risk-averse, plans for her family. Comfort, safety and clear info.",
    currentUse:
      "Book family holidays through Hotels/Booking. Might stop by Airbnb if she finds a family-friendly stay. Looks through many reviews, good breakfast option and cancellation policies.",
    needs:
      "Clear information about the room and facilities. Cancellation policy, locations relative to attractions, real reviews, and easy-to-compare listings.",
    wants:
      "One-stop search, no nasty surprises. Good booking confidence, photos showcasing the accommodation, explicit info about child policies, a map, and possible transport options.",
    painPoints: [
      "Unclear policies and info",
      "Hidden fees",
      "Accommodation fitting online listing",
    ],
    userTrip:
      "Google destination + criteria for her family. Bookmarking, checks maps, reviews, then books. Clear and family-friendly badges/icons for information. Mobile easily shows the itinerary.",
  },

  {
    name: "Explorer",
    iconColor: "text-[#ff9505]",
    who: "Very price-sensitive, adventurous, flexible on dates and locations, want the baseline accommodation, and social feelings.",
    currentUse:
      "Hostelworld or cheap Airbnb stays. Mobile use first, filters for the lowest price first, looks for shared and social, gives in to last-minute deals, goes by friend tips or social media, and flies over reviews to ensure he will survive.",
    needs:
      "Price filter, if there are social areas, shared rooms, info about close-by transportation and nightlife, easy booking flow and cancellation flexibility.",
    wants:
      "Cheap, central, meeting minimal standards, and meeting other travellers. Want the booking to be easy without hidden extras, his focus is just getting to the place.",
    painPoints: [
      "Hidden fees",
      "Accommodation uses old pictures",
      "Complex booking processes",
    ],
    userTrip:
      "Destination, flexible dates, filter “budget”, map overview of city with listings + price and rating. Finds one, books in under a minute. Chat support + easy check-in instructions on mobile.",
  },
];

const HolidazeChallengeContent = () => {
  const [activeProfile, setActiveProfile] = useState(0);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (profileIndex: number, field: string) => {
    const key = `${profileIndex}-${field}`;
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isOpen = (profileIndex: number, field: string) =>
    expanded[`${profileIndex}-${field}`] ?? false;

  const switchProfile = (i: number) => {
    setActiveProfile(i);
    setExpanded({});
  };

  return (
    <section className={`${fontLexend.variable}`}>
      <div
        className={`flex justify-center items-center p-20 md:px-40 min-h-[50vh] ${fontLexend.variable}`}
      >
        <AnimatedText
          lines={wrapText(
            `At the start of this project, I identified two research focuses: music festivals as an arena and the relationship between the East and the West.`,
            50,
          )}
          size="md"
          align="left"
        />
      </div>
      <div
        className={`flex flex-col justify-center items-center my-auto min-h-[50vh] px-10 lg:px-40`}
      >
        <SectionDivider lineClass="outline-black-Mirage dark:outline-white-LinkWater">
          <h2 className="font-lexend uppercase text-xs min-w-fit tracking-widest">
            Varied Focus
          </h2>
        </SectionDivider>
        <p className="font-lexend font-light text-black-Mirage dark:text-white-LinkWater lg:px-40 mt-10">
          Starting my research, I did a deep dive into how competitors in the
          same field were operating, what design decisions they made for their
          websites, and ultimately what demographics they attracted. After
          distilling some main takeaways from this, accompanied by market
          research into hotel trends, it became clear that a tailored experience
          would be necessary to engage a wider audience.
          <br />
          <br />
          To better grasp the needs for different audiences, I worked out 5 user
          profiles and combined / refined them into 3 main target audiences for
          the brand. Dividing them into guiding archetypes of “Affluent”,
          “Guardian” and “Explorer”.
          <br />
          <br />
          For the website, this took form in dynamically updating how
          information and texts were displayed to the user, essentially creating
          three separate experiences depending on what type of travel archetype
          you identified with. “Affluent” was focused on maximising, showing the
          location, and keeping deeper details for the listing page. “Guardian”
          showcased important amenities that could play a key role in meeting
          their needs at every location. Finally, “Explorer” being the fast and
          wild one, given the chance to skip as many steps as possible of the
          booking process.
        </p>
      </div>
      <div className="relative max-w-200 flex flex-col justify-center m-10 mx-auto min-h-[50vh]">
        {/* Profile name switcher */}
        <div className="flex flex-row gap-4 mb-6 items-center justify-center">
          {userProfiles.map((profile, i) => (
            <button
              key={i}
              onClick={() => switchProfile(i)}
              className={`font-bold text-2xl uppercase ${activeProfile === i ? `${profile.iconColor}` : "hover:underline"} transition-color`}
            >
              {profile.name}
            </button>
          ))}
        </div>

        {/* Active profile content */}
        {(() => {
          const profile = userProfiles[activeProfile];
          return (
            <div className="flex flex-col gap-4 rounded-lg text-black-Mirage dark:text-white-LinkWater">
              <p>
                <button
                  onClick={() => toggle("who")}
                  className="font-semibold hover:underline cursor-pointer"
                >
                  Who they are {isOpen("who") ? "▲" : "▼"}
                </button>
                {isOpen("who") && (
                  <span className="block mt-1">{profile.who}</span>
                )}
              </p>
              <p>
                <button
                  onClick={() => toggle("needs")}
                  className="font-semibold hover:underline cursor-pointer"
                >
                  Needs {isOpen("needs") ? "▲" : "▼"}
                </button>
                {isOpen("needs") && (
                  <span className="block mt-1">{profile.needs}</span>
                )}
              </p>
              <p>
                <button
                  onClick={() => toggle("wants")}
                  className="font-semibold hover:underline cursor-pointer"
                >
                  Wants {isOpen("wants") ? "▲" : "▼"}
                </button>
                {isOpen("wants") && (
                  <span className="block mt-1">{profile.wants}</span>
                )}
              </p>
              <ul>
                <button
                  onClick={() => toggle("painPoints")}
                  className="font-semibold hover:underline cursor-pointer"
                >
                  Pain points {isOpen("painPoints") ? "▲" : "▼"}
                </button>
                {isOpen("painPoints") && (
                  <ul className="block mt-1">
                    {profile.painPoints.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                )}
              </ul>
              <p>
                <button
                  onClick={() => toggle("userTrip")}
                  className="font-semibold hover:underline cursor-pointer"
                >
                  User trip {isOpen("userTrip") ? "▲" : "▼"}
                </button>
                {isOpen("userTrip") && (
                  <span className="block mt-1">{profile.userTrip}</span>
                )}
              </p>
            </div>
          );
        })()}
      </div>
      <div
        className={`flex flex-col justify-center items-center mt-10 md:mt-auto min-h-[50vh] px-10 lg:px-40`}
      >
        <SectionDivider lineClass="outline-black-Mirage dark:outline-white-LinkWater">
          <h2 className="font-lexend uppercase text-xs min-w-fit tracking-widest">
            True Exploration
          </h2>
        </SectionDivider>
        <p className="font-lexend font-light text-black-Mirage dark:text-white-LinkWater lg:px-40 my-10">
          My approach to branding became focused on being grounded in community
          and sustainability. Holidazes’ brand would pride itself on the great
          benefits of travelling and exploring the world outside of your own
          borders. Not only evolving as individuals, but also learning the
          importance of taking care of our world.
          <br />
          <br />
          The final brand aimed to communicate as a warm summer sunrise, the
          start of a bright and beautiful day, with endless opportunities lying
          in wait. Standing out as more than just a booking website, but a
          lifestyle of connecting.
        </p>
      </div>
    </section>
  );
};

export default HolidazeChallengeContent;
