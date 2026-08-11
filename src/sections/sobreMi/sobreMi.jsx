import "./sobreMi.css"
import logoRaices from '../../assets/images/Amaru.jpeg';


function SobreMi() {
    return(
        <section className="w-full min-h-screen flex items-center justify-center p-4" id="SobreMi">
            
            <div className="sobreMi_content">
                <div className="min-w-full">
                    <h1 className="title">
                        Un espacio creado desde el alma...
                    </h1>
                </div>
                <div className="grid grid-cols-2 items-stretch w-full max-w-7xl mx-auto rounded-lg shadow-lg overflow-hidden ">

                    <div className="w-full p-6 sm:p-10 flex flex-col justify-center">

                        <p className="eyebrow">
                            ❝PARA QUE CADA MUJER PUEDA VOLVER A ENCONTRARSE CONSIGO MISMA❞
                        </p>

                        <h3 className="description">
                           Aquí encontrarás experiencias, rituales y constelaciones que te invitan a 
                           mirar tu historia con amor, a soltar lo que ya no necesitas y a recordar quién 
                           sos realmente <br />
                           Creo en el poder de los encuentros auténticos, en la transformación
                           que sucede cuando alguien se elige, se honra y se permite florecer. 
                        </h3>
                        <h3 className="fin">
                            Las respuestas siempre estuvieron en tu interior. <br />
                            Nosotros solo te acompañamos a recordarles. <br />
                                            ♡
                        </h3>
                    </div>

                    <div className="relative w-full h-full min-h-[200px]">
                        <img 
                          src={logoRaices} 
                          alt="Logo Raices" 
                          className="absolute inset-0 w-full h-full object-cover object-center " 
                        />
                    </div>



                </div>
            </div>
            
        </section>
    );
}

export default SobreMi;
