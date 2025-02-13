const Ground = () => {
  return (
    <div className='w-full bg-white pt-8'>
        <h1 className=" text-2xl uppercase font-semibold text-center pt-4 tracking-wider">Our Grounds</h1>
        <div className="w-[70%] max-sm:w-[90%] mx-auto">
        <p className="text-sm mt-4 text-center"> Chelsfield Cricket Club has two grounds. The club's main facility is based in Chelsfield Village @ Bucks Cross Road, BR6 7RN</p>
        <iframe className="w-full h-[400px] object-cover mt-8" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2491.4878301428257!2d0.12911100000000003!3d51.357328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTHCsDIxJzI2LjQiTiAwwrAwNyc0NC44IkU!5e0!3m2!1sen!2s!4v1730962640934!5m2!1sen!2s" width="600" height="450"   loading="lazy"></iframe>

        <p className="text-sm text-center mt-4">The additional facility is in Faversham @ Norton Sports Club, ME9 9JU.</p>
        {/* <img className="w-full h-[400px] object-cover mt-8" src={chelsefieldMap} alt="" /> */}
       
        <iframe className="w-full h-[400px] object-cover mt-8" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9975.326084652601!2d0.818871!3d51.3142239!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ded5fac5331429%3A0xe4deaeb6248e0689!2sNorton%20Sports%20Club!5e0!3m2!1sen!2s!4v1730276168947!5m2!1sen!2s" width="600" height="450"   loading="lazy"></iframe>
       
       
        </div>
    </div>
  )
}

export default Ground