import { FaRegFlag } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
const Logout = () => {
  return (
    <section className="bg-amazonclone p-3 sm:hidden">
      <div className="bg-amazonclone flex justify-center items-center gap-6 pt-3">
        <div className="flex justify-center items-center  gap-2">
          <div>
            <TbWorld />
          </div>
          <p>Castellano</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div>
            <FaRegFlag />
          </div>
          <p>España</p>
        </div>
      </div>
      <div className="flex justify-center items-center pt-3 font-bold">
        <button>Logout</button>
      </div>
    </section>
  );
};

export default Logout;
