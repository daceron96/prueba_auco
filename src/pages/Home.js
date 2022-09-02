import React from 'react';
import foto_perfil from '../assets/img/foto_perfil.jpg'
const Home = () => {
    return (
        <div className='row mt-4'>
            <div className="text-center rounded-circle col-3">
                <img src={foto_perfil} className="rounded-circle img-style" alt="..." ></img>
                <div className='text-start'>
                    <h5 className='mt-2 text-center'>Informacion</h5>
                    <p><i class="bi bi-telephone-fill"></i> +57 3196688928</p>
                    <p><i class="bi bi-envelope-fill"></i> daceron96@gmail.com</p>
                    <p><i class="bi bi-geo-alt-fill"></i> Carrera 33 # 20-23</p>
                    <p><i class="bi bi-geo-alt-fill"></i> Popayán- Cauca</p>
                </div>
                <div className='text-start'>
                    <h5 className='mt-2 text-center'>Mis habilidades</h5>
                    <p><i class="bi bi-check-lg"></i> Java</p>
                    <p><i class="bi bi-check-lg"></i> Python</p>
                    <p><i class="bi bi-check-lg"></i> Django</p>
                    <p><i class="bi bi-check-lg"></i> Django-rest</p>
                    <p><i class="bi bi-check-lg"></i> React</p>
                    <p><i class="bi bi-check-lg"></i> Java Script</p>
        

                </div>
            </div>
            <div className='col-9 text-center'>
                <h4>Hola!, mi nombre es Daniel Alejandro Tutalcha Cerón</h4>
                <p className='text-start'>Nací el 31 de diciembre de 1996 en la ciudad de Popayán (Cauca), por parte de mi madre soy
                    el segundo hijo por parte de mi padre solo podre decir que soy el ultimo de todos, actualmente
                    tengo 25 años he vivido y criado toda mi vida en la ciudad en la cual la nací, la cual es
                    pequeña pero muy cómoda para vivir. Me gustan los retos recuerdo que desde pequeño me mucho
                    el mundo de las computadoras y siempre he tenido esa pequeña inquietud de saber como funcionan,
                    Como es posible crear algo desde cero o como siquiera puede existir tal tecnología. </p>
                <p className='text-start'>
                    Lo cual ocasiono que me decidiera a estudiar ingeniería en software, Mi primer acercamiento
                    con el mundo del desarrollo fue cuando ingrese a estudiar en el SENA un programa tecnológico
                    en Análisis y desarrollo de información, seguidamente ingrese a la universidad del cauca en
                    el año 2015 a estudiar ingenierías en sistemas pero por motivos personales no pude seguir
                    muy bien la ruta de aprendizaje lo cual conllevo a que me retrasara un poco, Cuando estaba
                    viendo materias de sexto semestre decidí cambiarme al colegio mayor del cauca y me inscribí
                    en Ingeniería informática ya que el perfil se ajusta más a mis anhelos a lo que deseo aprender.
                </p>
                <p className='text-start'>
                    Soy una persona que le gusta mucho este mundo del desarrollo de software me gusta aprender
                    nuevas cosas y cuando tengo un reto estudio y pongo mi mayor esfuerzo para poder cumplirlo,
                    no me rindo fácil, soy cumplido con mis objetivos me gusta trabajar en equipo y siempre estoy
                    abierto a la critica constructiva para poder mejorar día a día.
                    Respecto a mi experiencia laboral mi principal fuerte es el desarrollo en Back-end manejo
                    las tecnologías de Java y Python con el framework Django, mi ultima experiencia laborar fue
                    el diseño, desarrollo e implementación de un sistema de control de stock de productos para
                    una funeraria el cual desarrolle con Python  y Django.
                </p>
                <p className='text-start'>
                    Mis metas… mis sueños… soy una persona mas de metas que de sueños pienso que con cada meta es un
                    reto bien sea a corto o a largo plazo mi principal meta  a corto plazo es poner en practica todos
                    lo aprendido en la universidad y poder mejorar poder ser un excelente profesional  y quien sabe
                    quizás  en un futuro pueda enseñar a futuros ingenieros y compartir el conocimiento adquirido ya
                    que pienso que el conocimiento es algo que se debe compartir no tiene ningún sentido aprender
                    algo perfeccionarlo y no compartirlos porque el día que se deja de existir también se pierde
                    esa experiencia ese conocimiento.
                </p>
                <p>Friedrich Nietzsche <q >Solo el que construye el futuro tiene derecho a juzgar el pasado.</q></p>
            </div>
        </div>
    );
}

export default Home;
