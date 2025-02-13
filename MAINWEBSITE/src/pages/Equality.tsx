import { PiGreaterThanLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const Equality = () => {
  return (
    <div className="w-full text-black bg-gray-800 pb-10">
      {/* Background section */}
      <div className="bg4 relative"></div>

      {/* Title section */}
      <div className="absolute top-[70%] left-[20%] text-white w-[60%] mx-auto">
        <h1 className="text-[30px] font-bold uppercase leading-tight text-center">
          Equality, Diversity, and Inclusivity
        </h1>
      </div>

      {/* Breadcrumb navigation */}
      <div className="flex items-center gap-1 ml-32 py-4 text-white">
        <Link to="/" className="hover:underline">Home</Link>
        <PiGreaterThanLight className="text-sm" />
        <span>Equality, Diversity and Inclusivity</span>
      </div>

      <hr className="border-gray-600" />

      {/* Content section */}
      <div className="text-gray-800 rounded-lg w-[90%] md:w-[80%] bg-gray-300 px-8 py-8 mx-auto mt-4">
        <h1 className="text-3xl font-bold text-center mb-6">
          Inclusion and Diversity Policies
        </h1>

        <p className="text-lg mb-4">
          At Chelsfield Cricket Club, we are fully committed to the principles of equality of opportunity in cricket. Our aim is to ensure that all employees, members, volunteers, and spectators are treated fairly, without discrimination, harassment, or intimidation.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Non-Discrimination</h2>
        <p className="mb-4">
          Chelsfield Cricket Club will not discriminate on the grounds of age, gender, disability, race, marital status, pregnancy, religion or belief, or sexual orientation.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Zero Tolerance for Harassment and Bullying</h2>
        <p className="mb-4">
          We do not tolerate any form of harassment, bullying, abuse, or victimization of individuals. We take claims of such behavior seriously and will investigate them thoroughly.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Creating Access and Opportunities</h2>
        <p className="mb-4">
          We are dedicated to creating access and opportunities for individuals wishing to participate in our activities, as long as they are lawfully eligible.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Compliance with Equality Act 2010</h2>
        <p className="mb-4">
          We ensure compliance with the Equality Act 2010 and take steps to ensure our employees, members, and volunteers follow these requirements.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Reporting and Investigation of Claims</h2>
        <p className="mb-4">
          Any employee, member, volunteer, participant, or spectator who feels they have been subjected to discrimination, harassment, bullying, or victimization should report the incident in writing to the committee. The report should include details of the event, date, time, location, witnesses, and statements.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Disciplinary Actions</h2>
        <p className="mb-4">
          If the accused is an employee, the matter will be handled according to the club's employment disciplinary procedure. For non-employees, the management committee reserves the right to:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Warn the individual about future conduct.</li>
          <li>Suspend or remove membership.</li>
          <li>Exclude the individual from the facility.</li>
          <li>Turn down future membership applications.</li>
        </ul>
        <p>
          Both parties involved will receive written reasons for the committee's decision, and there is an option to appeal to the relevant County Cricket Board within 3 months.
        </p>
      </div>
    </div>
  );
}

export default Equality;
