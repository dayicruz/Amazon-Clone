import { BiWorld } from "react-icons/bi";
import { GiModernCity } from "react-icons/gi";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { SlNotebook } from "react-icons/sl";
import AsideDetailPage from "./components/AsideDetailPage";
import BadgeAmazon from "./components/BadgeAmazon";
import CarouselProducts from "./components/CarouselProducts";
import Starts from "./components/Starts";
import TruncateText from "./components/TruncateText";
const ProductBooks = () => {
  return (
    <div className="max-w-screen-xl m-auto p-3">
      <div className=" sm:mt-20 mb-10 flex flex-col sm:flex-row">
        <div className="sm:w-[20vw] sm:mr-6 sm:self-start w-[50vw] self-center ">
          <img
            src={"../../public/images/product_7.jpg"}
            alt=""
            className="object-contain"
          />
        </div>
        <div className="sm:w-[50vw] flex flex-col mr-6 w-[90vw] mt-5 sm:mt-0">
          <div className="flex flex-col sm:gap-1  gap-2">
            <div className="flex items-center gap-2">
              <h3 className="sm:text-2xl text-xl font-semibold ">
                Cómo Dejar de Pensar Demasiado{" "}
                <span className="text-xl font-semibold text-[#949494]">
                  Paperback
                </span>
              </h3>
            </div>
            <div className="flex gap-4">
              <p className="text-sm">
                de <span className="text-[#008296] text-sm">Angel Ruiz</span>{" "}
                <span className="text-sm text-[#949494]">(Autor)</span>{" "}
              </p>
              <p className="text-sm ">
                <span className="text-sm text-[#949494]">Formato:</span> Versión
                Kindle
              </p>
            </div>
            <Starts />
            <BadgeAmazon />
          </div>
          <div className=" border-t border-b border-slate-400 mt-10 mb-3 pt-3 pb-3">
            <TruncateText
              text=" La salud mental suele relegarse a un segundo plano y subestimarse,
                pero es precisamente el pensamiento positivo lo que nos permite
                encontrar soluciones a situaciones difíciles, planificar mejor
                nuestro futuro y tomar decisiones meditadas. De hecho, nuestro
                cerebro esconde, entre otras funciones, la capacidad de adaptarse
                a un suceso o periodo traumático. La procrastinación, los malos
                hábitos y los vicios ineludibles son condiciones que constituyen
                un paliativo aparente y alimentan así el sentimiento general de
                fracaso. Es esencial saber canalizar nuestros pensamientos
                negativos para convertirlos en estímulos constructivos, que eviten
                el desorden interior y el exceso de pensamiento. En este manual
                encontrarás 2 libros que te ayudarán a enfrentarte a los problemas
                y trastornos que te afligen y a desarrollar estrategias eficaces
                para enfrentarte a ellos paso a paso.Si conoces al enemigo y a ti
                mismo, tu victoria es segura, dijo Sun Tzu en El arte de la
                guerra. Con un enfoque que va directo al grano, claro y
                cautivador, este libro te guiará como un compañero a través de la
                información que ha permitido a cientos de miles de personas dar un
                giro a sus vidas para mejor. ¡Es hora de apaciguar tu mente y
                tomar las riendas de tu vida!"
              maxWidth={1000}
            />
          </div>
          <div className="flex justify-around ">
            <div className="flex flex-col items-center sm:gap-1 gap-3">
              <p className="sm:text-sm text-xs text-[#949494]"> Print length</p>
              <div>
                <SlNotebook />
              </div>
              <p className="sm:text-sm text-xs">220 pages</p>
            </div>
            <div className="flex flex-col items-center sm:gap-1 gap-3">
              <p className="sm:text-sm text-xs text-[#949494]">Language</p>
              <div>
                <BiWorld />
              </div>
              <p className="sm:text-sm text-xs">Spanish</p>
            </div>
            <div className="flex flex-col items-center sm:gap-1 gap-3">
              <p className="sm:text-sm text-xs text-[#949494]"> Editorial</p>
              <div>
                <GiModernCity />
              </div>
              <p className="sm:text-sm text-xs">Gaia</p>
            </div>
            <div className="flex flex-col items-center sm:gap-1 gap-3">
              <p className="sm:text-sm text-xs text-[#949494]">
                {" "}
                Publication date
              </p>
              <div>
                <IoCalendarNumberOutline />
              </div>
              <p className="sm:text-sm text-xs">October 9, 2018</p>
            </div>
          </div>
        </div>

        <AsideDetailPage />
      </div>
      <CarouselProducts />
    </div>
  );
};

export default ProductBooks;
