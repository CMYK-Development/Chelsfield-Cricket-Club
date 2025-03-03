import heroImage from "../assets/All Sections/Equal_opportunities.jpg";
import Asjad from "../assets/All Teams/2nd captain (Asjad).jpg";
import IndoorCaptain from "../assets/All Teams/Indoor captain.jpg";
import thirdCaptain from "../assets/All Teams/karthick.jpg";
import sundaycaptain from "../assets/All Teams/sunday captain.jpg";
import T20captain from "../assets/All Teams/T20 Captain.png";
import Shakil from "../assets/users/Shakil bhai.jpeg";
const OurTeams = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative">
        <img
          src={heroImage}
          alt="Chelsfield Cricket Club Hero"
          className="w-full h-[60vh] object-cover lg:h-[80vh]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center">
          <div className="text-center absolute top-1/2 -translate-y-1/2 text-white px-4">
            <h1 className="lg:text-5xl text-3xl font-bold">Our Teams</h1>
          </div>
        </div>
      </section>
      {/* History Content */}
      <section className="px-8 py-12 w-[90%] mx-auto space-y-12">
        <h2 className="md:text-3xl text-xl font-semibold text-gray-800 mb-6 text-center">
        Meet the Teams Driving Our Success
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
              <h3 className="text-2xl font-semibold text-gray-700">Saturday XI (Dark Horses), Kent Cricket League, Division 8, Underwood</h3>
              <p className="text-lg text-gray-600 font-medium">Captain: Shakil Ahmed</p>
              <p className="text-gray-600 mt-4">Shakil Ahmed, the captain of Chelsfield Cricket Club’s 1st XI, has a rich and distinguished cricketing career, having played competitive cricket for several decades across various clubs in London. His extensive experience, passion, and love for the game unites the team and inspire everyone to give their best.

The CCC 1st XI is a group of committed cricketers from diverse backgrounds, each bringing unique skills and a shared passion for the sport. United by our love for cricket, our goal is to compete with dedication, teamwork, and respect for the game and one another.</p>
            </div>
          <img
            src={Shakil}
            alt="Pitch Preparation"
            className="rounded-lg h-auto md:h-[400px] w-full lg:w-[450px] mx-auto shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <img
            src={Asjad}
            alt="Pitch Preparation"
            className="rounded-lg h-auto md:h-[400px] w-full lg:w-[450px] mx-auto shadow-lg hover:scale-105 transition-transform duration-300"
          />
        <div>
              <h3 className="text-2xl font-semibold text-gray-700">Saturday 2nd XI (Lion Hearts) – Kent Cricket League, Division 11, Underwood</h3>
              <p className="text-lg text-gray-600 font-medium">Captain: Asjad Mir</p>
              <p className="text-gray-600 mt-4">Asjad Mir, captain of CCC`s 2nd XI team, the Lion Hearts, leads with passion, dedication, and vast experience. He plays a crucial role in mentoring his squad, helping each player reach their full potential. Under his guidance, the Lion Hearts have emerged as a formidable team. The Lion Hearts bring together players of varying skill levels, united by a shared love for cricket. The team approaches every match, whether in league competitions or friendly games, with enthusiasm, determination, and an unwavering drive to win.</p>
            </div>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      
        <div>
              <h3 className="text-2xl font-semibold text-gray-700">Saturday 3rd XI (Hunters) - Kent Cricket League, Division 13, Knott</h3>
              <p className="text-lg text-gray-600 font-medium">Captain: Karthic</p>
              <p className="text-gray-600 mt-4">Karthic is the team captain, leading the squad with passion, dedication, and years of experience. He plays a vital role in mentoring the team and bringing out the best in every player. Under his leadership, the team has developed into a strong, competitive unit.</p>
            </div>
            <img
            src={thirdCaptain}
            alt="Pitch Preparation"
            className="rounded-lg h-auto md:h-[400px] w-full lg:w-[450px] mx-auto shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <img
            src={sundaycaptain}
            alt="Pitch Preparation"
            className="rounded-lg h-auto md:h-[400px] w-full lg:w-[450px] mx-auto shadow-lg hover:scale-105 transition-transform duration-300"
          />
        <div>
              <h3 className="text-2xl font-semibold text-gray-700">4th XI Sunday (Tigers) – Kent Village Cricket League, Three East</h3>
              <p className="text-lg text-gray-600 font-medium">Captain: Naeem Ahad</p>
              <p className="text-gray-600 mt-4">Naeem Ahad, the Captain of the Sunday Tigers, has led his team to an extraordinary feat, winning all 7 games under his captaincy this season. His leadership and strategic brilliance have made him a pivotal force for the team, adding to the Tigers’ already stellar performance. With his sharp decision-making, Naeem’s on-field presence has transformed each game into a well-executed victory. Beyond his tactical acumen, he successfully united the team, fostering strong bonds and a sense of camaraderie that turned the Tigers into a closely-knit unit.</p>
            </div>
           
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      
        <div>
              <h3 className="text-2xl font-semibold text-gray-700">Indoor League</h3>
              <p className="text-lg text-gray-600 font-medium">Captain: Adnan</p>
              <p className="text-gray-600 mt-4">Adnan is the team captain, leading the squad with passion, dedication, and years of experience. He plays a vital role in mentoring the team and bringing out the best in
                every player. Under his leadership, the team has developed into a strong, competitive
                unit.</p>
            </div>
            <img
            src={IndoorCaptain}
            alt="Pitch Preparation"
            className="rounded-lg h-auto md:h-[400px] w-full lg:w-[450px] mx-auto shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <img
            src={T20captain}
            alt="Pitch Preparation"
            className="rounded-lg h-auto md:h-[400px] w-full lg:w-[450px] mx-auto shadow-lg hover:scale-105 transition-transform duration-300"
          />
        <div>
              <h3 className="text-2xl font-semibold text-gray-700">T20 Team</h3>
              <p className="text-lg text-gray-600 font-medium">Captain: Kashif Malik</p>
              <p className="text-gray-600 mt-4">T20 squad enjoys the fun of 120 ball game by providing extensive support to each other. We play fearless cricket and try to get the best out of our players. Each member brings in unique value to the team and have had a massive role in taking the team to the T20 cup final in 2024 season of CWG T20 league.</p>
            </div>
           
        </div>
      
       

      
      </section>
    </div>
  );
};

export default OurTeams;
