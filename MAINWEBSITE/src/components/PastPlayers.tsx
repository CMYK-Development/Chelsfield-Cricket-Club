import { useState } from "react";
import JohnBristow from "../assets/Past Players/John Bristow.jpg"
import JimEshelby from "../assets/Past Players/Jim Eshelby.jpg"
import daveWalker from "../assets/club history/Dave Walker.jpg"
const PastPlayers = () => {
  const [isOpen, setIsOpen] = useState(false); // Track modal state
  const [activeImage, setActiveImage] = useState<string | null>(null); // Track active image

  const openModal = (imageSrc: string) => {
    setActiveImage(imageSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveImage(null);
  };

  const handleClickOutside = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <div className=" pt-8">
      <h1 className="text-2xl font-semibold text-gray-700 text-center pt-4 tracking-wider">
        Former Players
      </h1>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 w-[80%] gap-4 mx-auto mt-8">
        {/* Player 1 */}
        <div className="lg:w-[320px] w-[98%] mx-auto py-4 border border-gray-300 bg-customSky rounded">
          <div className="flex items-center justify-center mx-auto gap-4 mt-4">
            <img
              className="h-14 w-14 max-sm:h-16 max-sm:w-16 rounded-full object-cover hover:opacity-70 transition-all duration-300 cursor-pointer"
              src={JohnBristow}
              alt="John Smith"
              onClick={() =>
                openModal(
                  JohnBristow
                )
              }
            />
            <div>
              <h3 className="text-xs max-sm:text-sm text-white italic">
                John Bristow
              </h3>
              <p className="text-xs max-sm:text-sm text-gray-300 italic">
              The Godfather of Post-War <br /> Chelsfield Cricket

              </p>
            </div>
          </div>
          <p className="text-xs max-sm:text-sm mt-4 w-[85%] mx-auto">
          After the Second World War, Chelsfield Cricket Club found new life thanks to the tireless efforts of John Bristow, affectionately known by players as the “godfather of Chelsfield cricket.” His leadership was instrumental in reviving the club, bringing it back from the brink and transforming it into a competitive and thriving village team. Bristow’s extensive network within the cricket community attracted top-level talent to the club, particularly for Sunday matches, which was rare at the time. Under his guidance, Chelsfield Cricket Club grew stronger, earning the nickname “Chelsfield All Stars” due to the caliber of players he brought in. His legacy of fostering talent and building connections is still felt today, contributing to the club’s long-standing culture of inclusion and development.
          </p>
        </div>

        {/* Player 2 */}
        <div className="lg:w-[320px] w-[98%] mx-auto py-4 border border-gray-300 bg-white rounded">
          <div className="flex items-center justify-center mx-auto gap-4 mt-4">
            <img
              className="h-14 w-14 max-sm:h-16 max-sm:w-16 rounded-full object-cover hover:opacity-70 transition-all duration-300 cursor-pointer"
              src={JimEshelby}
              alt="Jim Eshelby"
              onClick={() =>
                openModal(
                  JimEshelby
                )
              }
            />
            <div>
              <h3 className="text-xs max-sm:text-sm text-black font-semibold italic">
              Jim Eshelby
              </h3>
              <p className="text-xs max-sm:text-sm text-black italic">
                Chelsfield
              </p>
            </div>
          </div>
          <p className="text-xs max-sm:text-sm mt-4 w-[75%] mx-auto">
          J. Jim Eshelby. Originally playing cricket in the Derbyshire leagues Jim moved to Kent as a teacher at Chelsfield Village School in 1983. Predominantly a bowler he played for Chelsfield CC until 2019 captaining the team for a few years in the early 2000s .Although originally a slow right arm orthodox spin bowler, Jim bowled countless overs ‘up the hill’ at around medium pace. Consistently accurate and hard to score runs against, Jim took many wickets for Chelsfield including regular 5 wicket hauls and a few hatricks for good measure.
          </p>
        </div>

        {/* Player 3 */}
        <div className="lg:w-[320px] w-[98%] mx-auto py-4 border border-gray-300 bg-customSky rounded">
          <div className="flex items-center justify-center mx-auto gap-4 mt-4">
            <img
              className="h-14 w-14 max-sm:h-16 max-sm:w-16 rounded-full object-cover hover:opacity-70 transition-all duration-300 cursor-pointer"
              src={daveWalker}
              alt="Alan Jones"
              onClick={() =>
                openModal(
                  daveWalker
                )
              }
            />
            <div>
              <h3 className="text-xs max-sm:text-sm text-white italic">
                Dave Walker
              </h3>
              <p className="text-xs max-sm:text-sm text-gray-300 italic">
                Chelsfield
              </p>
            </div>
          </div>
          <p className="text-xs max-sm:text-sm mt-4 w-[75%] mx-auto">
          Dave Walker is a lifelong member of Chelsfield Cricket Club, deeply connected to its century-old history. His family’s involvement spans four generations, and Dave plays a key role in preserving and sharing the club’s rich heritage. Known for his vast knowledge of the club’s past, he keeps alive memories of earlier times when the community played a central role in the club’s activities, including preparing pitches with horse-drawn rollers. Through his dedication, Dave ensures that Chelsfield Cricket Club remains a symbol of tradition, community, and a deep love for cricket.
          </p>
        </div>

        {/* Player 4 */}
       
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 modal-overlay"
          onClick={handleClickOutside}
        >
          <div className="relative">
            <img
              src={activeImage!}
              alt="Active"
              className="max-w-full max-h-screen"
            />
            <button
              className="absolute top-2 right-2 text-white bg-black rounded-full p-2"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PastPlayers;
