interface TeamsProps {
    teamImage1: string;
    teamImage2: string;
    captainImage: string;
    captainName: string;
    teamName: string;
    captainEmail: string;
    captainPhone: string;
    captainStatment: string;
    captainStatment2?: string;
  }
  
  const Teams = ({
    teamImage1,
    teamImage2,
    captainImage,
    captainName,
    teamName,
    captainEmail,
    captainPhone,
    captainStatment,
    captainStatment2
  }: TeamsProps) => {
    return (
      <div className="w-full bg-gray-800">
        {/* Team Image as Background */}
        <div
          className="w-full h-[60vh] bg-cover bg-top"
          style={{ backgroundImage: `url(${teamImage1})` }}
        >
          <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
            <h1 className="md:text-[60px] text-[40px] font-bold text-white uppercase">{teamName}</h1>
          </div>
        </div>
  
        {/* Team Content */}
        <div className="flex flex-col items-center gap-8 max-sm:flex-col py-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-white text-center">Meet the Team</h1>
  
          {/* Captain Section */}
          <div className="flex w-[90%] max-sm:w-full mx-auto py-8 max-sm:gap-2 gap-8 flex-col bg-gray-900 shadow-lg rounded-lg overflow-hidden">
            {/* Team Images */}
            <div className=" w-[90%] mx-auto">
              <img
                src={teamImage2}
                alt="Team Image 1"
                className="w-full max-sm:rounded-lg h-[400px] object-contain mb-4"
              />
             
            </div>
            {/* Captain Image and Content */}
            <div className="w-[90%] mx-auto max-sm:p-2 p-8 text-gray-200 ">
           <div className="flex md:flex-row flex-col gap-8">
             
          <div>
          <h2 className="md:text-3xl text-xl font-bold mb-2">{captainName}</h2>
              <p className="md:text-lg text-sm">
                {captainStatment} 
              </p>
              <p className="mt-4 md:text-lg text-sm">
               {captainStatment2}
              </p>
              {/* Contact Details */}
              <div className="mt-4">
                <h3 className="md:text-3xl text-xl font-bold">Captain's Contact</h3>
                <p className="text-sm md:text-base">Email: <a href={`mailto:${captainEmail}`} className="text-blue-500">{captainEmail}</a></p>
                <p className="text-sm md:text-base">Phone: <a href={`tel:${captainPhone}`} className="text-blue-500">{captainPhone}</a></p>
              </div>
          </div>
          <img
                src={captainImage}
                alt={`${captainName}`}
                className="w-[300px] mx-auto h-[300px] object-cover rounded-lg mb-2"
              />
           </div>
            </div>
           
  
           
          </div>
        </div>
      </div>
    );
  };
  
  export default Teams;
  