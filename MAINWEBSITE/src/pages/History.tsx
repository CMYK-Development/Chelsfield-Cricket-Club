import community from "../assets/club history/community gathering.jpg";
import glimps1 from "../assets/club history/glimps1.jpg";
import glimps3 from "../assets/club history/glimps3.jpg";
import glimps2 from "../assets/club history/glimpse2.jpg";
import historicMatch from "../assets/club history/historic match.jpg";
import pitchPreparation from "../assets/club history/pitch preparation.jpg";
import daveWalker from "../assets/club history/Dave Walker.jpg"
import oldPavilion from "../assets/club history/old pavillion black.jpg";
import heroImage from "../assets/club history/hero image.jpg";
import PastPlayers from "../components/PastPlayers";
const History = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <img
          src={heroImage}
          alt="Chelsfield Cricket Club Hero"
          className="w-full h-[60vh] object-cover lg:object-fill lg:h-[100vh]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center">
          <div className="text-center absolute top-1/2 -translate-y-1/2 text-white px-4">
            <h1 className="lg:text-5xl text-2xl font-bold">History of Chelsfield Cricket Club</h1>
            <p className="lg:mt-4 mt-1 w-[90%] mx-auto lg:w-full text-sm lg:text-xl font-semibold">
              A journey of cricket, community, and tradition since 1731.
            </p>
          </div>
        </div>
      </section>

      {/* History Content */}
      <section className="px-8 pt-12 max-w-5xl mx-auto space-y-12">
        <h2 className="md:text-3xl text-xl font-semibold text-gray-800 mb-6 text-center">
          A Glimpse into the History of Chelsfield Cricket Club: From Horse-Drawn Rollers to Modern Times
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <img
            src={daveWalker}
            alt="Pitch Preparation"
            className="rounded-lg h-[400px] w-full lg:w-[450px] shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <p className="text-gray-600">
            After World War II, John Bristow spearheaded the club's revival. His extensive cricket network brought 
            talented players to the club, forming what became known as the “Chelsfield All Stars.” Thursday evenings 
            were dedicated to pitch preparation, a communal task that fostered camaraderie.
          </p>
        </div>
        {/* Early Years Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <p className="text-gray-600">
            During the interwar period, Chelsfield was a small, close-knit village where most of the cricket team 
            came from the local area. With few cars on the roads, players traveled to away games in horse-drawn carts. 
            The cricket club was a major hub of social life, and it’s said that horses, wearing protective boots, were 
            used to pull rollers across the pitch.
          </p>
          <img
            src={historicMatch}
            alt="Historic Match"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Post-War Revival Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <img
            src={pitchPreparation}
            alt="Pitch Preparation"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <p className="text-gray-600">
            After World War II, John Bristow spearheaded the club's revival. His extensive cricket network brought 
            talented players to the club, forming what became known as the “Chelsfield All Stars.” Thursday evenings 
            were dedicated to pitch preparation, a communal task that fostered camaraderie.
          </p>
        </div>

        {/* The Pavilions Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <p className="text-gray-600">
            The original wooden pavilion, moved by horse and cart in 1924, bears a scar from World War II—a hole in 
            the floor from shrapnel. Today, the old pavilion stands with listed status, symbolizing the club's history 
            and resilience. Interestingly, the “new” pavilion was an old school building from Seal, near Sevenoaks, 
            which was almost demolished before it found a home at Chelsfield.
          </p>
          <img
            src={oldPavilion}
            alt="Pavilion"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Tradition Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <img
            src={community}
            alt="Community Gathering"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <p className="text-gray-600">
            As Chelsfield Cricket Club enters its second century, memories of horse-drawn carts, hand-pulled rollers, 
            and the local blacksmith remain integral to its legacy. The club continues to thrive, blending tradition 
            with modern developments to foster talent and serve the community.
          </p>
        </div>

        <p className="text-gray-600 text-center mt-8">
          As narrated by Dave Walker, with contributions from Naeem Ahad, dated 13 October 2024.
        </p>
      </section>
        <PastPlayers />
        {/* Final Image Gallery */}
        <div className="mt-12 max-w-5xl px-8 mx-auto space-y-12 pb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
            A Glimpse into Our Past
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src={glimps1}
              alt="Historic Match"
              className="rounded-lg h-[400px] w-full object-fill shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img
              src={glimps2}
              alt="Team Photo"
              className="rounded-lg h-[400px] w-full object-fill aspect-auto shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img
              src={glimps3}
              alt="Championship Win"
              className="rounded-lg h-[400px] w-full object-fill aspect-auto shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
    </div>
  );
};

export default History;
