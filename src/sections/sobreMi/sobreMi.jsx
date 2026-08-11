import "./sobreMi.css"
import logoRaices from '../../assets/images/sobreMi.png';


function SobreMi() {
    return(
        <section className="w-full min-h-screen bg-[#fbf7f2] flex items-center justify-center p-4" id="SobreMi">
            
            <div className="sobreMi_content">
                <div className="min-w-full">
                    <h1 className="title">
                        Un espacio creado desde el alma...
                    </h1>
                </div>
                <div className="grid grid-cols-2 items-stretch w-full max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden ">

                    <div className="w-full p-6 sm:p-10 flex flex-col justify-center">

                        <p className="eyebrow">
                            ❝PARA QUE CADA MUJER PUEDA VOLVER A ENCONTRARSE CONSIGO MISMA❞
                        </p>

                        <h3 className="description">
                            No podemos elegir donde comienza nuestra historia.  <br />
                            Pero si podemos elegir cómo queremos continuarla.  <br />
                            Cada uno de nosotros llega al mundo dentro de una trama de historias, 
                            vínculos, silencios, sueños y aprendizajes, que comenzaron hace miucho antes de nuestro nacimiento. <br />
                            Nuestros orígenes viven en nosotros. Algunas veces con fortaleza, otras como preguntas que aún buscan una respuesta <br />
                            En esta estación del camino te invitamos a acercarte a tus raíces con una mirada nueva.  <br />
                            No para juzgar el pasado, sino para comprenderlo, honrar lo recibido y abrir espacio a aquello que hoy elegis para tu vida. 
                        </h3>
                    </div>

                    <div className="relative w-full h-full min-h-[200px]">
                        <img 
                          src={logoRaices} 
                          alt="Logo Raices" 
                          className="absolute inset-0 w-full h-full object-cover object-center" 
                        />
                    </div>



                </div>
            </div>
            
        </section>
    );
}

export default SobreMi;
