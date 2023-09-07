import TimelineMobile from "./timeline";

const Careers = () => {
  return (
    <section id="career" className="py-12 text-xl">
      <div>
        <div className="contain mx-6 p-6">
          <h1 className="text-pink">const Career = () {"=> {"}</h1>
          <div className="pl-2 text-gray-clear">
            return (
            <br />
            <span className="pl-2">{"<Chrono>"}</span>
            <br />
            <div className="w-full py-4 flex justify-center">
              <TimelineMobile />
            </div>
            <span className="pl-2">{"</Chrono>"}</span>
            <br />
            );
          </div>
          <h1 className="text-pink">{"};"}</h1>
          <h1 className="text-pink">Career();</h1>
        </div>
      </div>
    </section>
  );
};

export default Careers;
