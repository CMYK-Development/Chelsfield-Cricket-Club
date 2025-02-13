import { PiGreaterThanLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import aboutImage from "../assets/users/NaeemAhad-removebg-preview.png";

const About = () => {
  return (
    <>
      <div className="w-full bg-gray-800 pb-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1 ml-32 py-4 text-white">
          <Link to={"/"} className="hover:underline">
            Home
          </Link>
          <PiGreaterThanLight className="text-sm" />
          <span>About Us</span>
        </div>
        <hr />

        {/* New About Section */}
        <div className="w-full py-8 flex items-center justify-center">
          <div className="w-[90%] mx-auto flex flex-col lg:flex-row items-center gap-8">
            {/* Location Section */}
            <div className="flex flex-col text-left w-full lg:w-[30%]">
              <h2 className="text-blue-500 font-bold text-2xl mb-4">Location</h2>
              <p className="text-gray-100 font-semibold text-xl">
                THE CLUB HOUSE
              </p>
              <p className="text-gray-100">
                Bucks Cross Road
                <br />
                Chelsfield, Orpington, Kent, BR6 7RN
                <br />
                Telephone:{" "} +447572-427856
              </p>
              <a
                href="https://maps.app.goo.gl/Vy7inxhQyEJx5vd18"
                target="_blank"
                rel="noreferrer"
                className="mt-4 w-[200px] text-center bg-blue-500 text-white font-semibold py-2 hover:bg-transparent hover:text-blue-500 hover:border hover:border-blue-500 transition-all duration-300"
              >
                Open in Google Maps
              </a>
            </div>

            {/* Google Maps Section */}
            <div className="w-full lg:w-[70%] h-[300px] bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://maps.google.com/maps?q=chelsfield%20cricket%20club&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
        {/* Introduction Section */}
        <div className="text-white mt-12 ml-16 max-sm:ml-8 w-[90%] flex flex-col gap-8">
          <h1 className="chels font-semibold tracking-wider text-[70px] max-sm:text-[40px] leading-[1.1]">
            Chelsfield Cricket Club
          </h1>
          <p className="text-lg">
            A place for cricket enthusiasts of all ages and abilities. We are a
            family-friendly club, welcoming players and their families,
            regardless of age or ability. Our Saturday 1st & 2nd XI teams
            compete in the Kent Cricket League, while our Sunday fixtures offer
            friendly matches throughout the summer.
          </p>
          <Link
            to={"/touch"}
            className="h-12 w-32 flex items-center justify-center bg-blue-500 text-white font-semibold hover:bg-transparent hover:border hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Chairman's Statement Section */}
        <div className="w-[90%] mx-auto mt-16 flex gap-8 items-start max-sm:flex-col">
          <img
            className="h-[500px] w-[450px] object-cover"
            src={aboutImage}
            alt="About"
          />
          <div className="text-white w-[70%] max-sm:w-full">
            <h2 className="text-4xl font-semibold mb-4 text-blue-500">
              Chairman’s Statement – Chelsfield Cricket Club
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Dear Members, Supporters, and Friends of Chelsfield Cricket Club,
            </p>
            <p className="text-lg leading-relaxed mb-4">
              As Chairman of this great club, I would like to take this
              opportunity to extend my heartfelt thanks to everyone who has been
              part of Chelsfield Cricket Club over the past year. Whether you
              are a player, coach, volunteer, sponsor, or supporter, your
              contribution has been invaluable to our continued success both on
              and off the field.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              This season has brought with it many highlights. Our teams have
              shown tremendous spirit and determination, and we are proud of the
              progress made across all age groups. The commitment of our players
              and coaching staff to developing their skills and pushing for
              excellence is evident, and the results are a testament to their
              hard work.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              But Chelsfield Cricket Club is more than just the cricket we play.
              It is about the community we are building together—a community
              where all are welcome, where young and old come together to share
              in the passion for the game.
            </p>
          </div>
        </div>

        <div className="w-[90%] mx-auto mt-4">
          <p className="text-white text-lg leading-relaxed mb-4">
            Our membership continues to grow, and it is heartening to see the
            next generation of players thriving, learning, and developing not
            just as cricketers but as individuals who embody the spirit of
            sportsmanship. I would like to acknowledge the tireless work of our
            management and sub-committees and volunteers. Without your efforts
            behind the scenes, none of this would be possible.
          </p>
          <p className="text-white text-lg leading-relaxed mb-4">
            Looking ahead, we have exciting plans for the future. Whether it is
            improving our facilities, expanding our youth programme, or
            strengthening our competitive teams, we are focused on ensuring that
            Chelsfield Cricket Club remains a hub for cricketing excellence and
            community engagement for many years to come.
          </p>
          <p className="text-white text-lg leading-relaxed mb-4">
            Finally, I want to thank all our sponsors and supporters. Your
            generosity and belief in our club allow us to continue growing and
            providing opportunities for all to enjoy the game we love.
          </p>
          <p className="text-white text-lg leading-relaxed mb-4">
            As we look forward to the next chapter in our club’s journey, let us
            continue to support each other and celebrate all that makes
            Chelsfield Cricket Club the special place it is.
          </p>
          <p className="text-white text-lg mt-4">Yours sincerely,</p>
          <p className="text-white text-lg font-semibold">
            Naeem Ahad <br />
            Chairman, Chelsfield Cricket Club
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
