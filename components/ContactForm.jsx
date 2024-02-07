'use client'

//motion
import { motion } from 'framer-motion';
//variants

import { fadeIn} from '../utils/motion';
//forms
import { useForm, ValidationError } from '@formspree/react';

import RedesSociales from './RedesSociales';


import { TitleText, TypingText } from '../components';

const ContactForm = () => {
    
    const [state, handleSubmit] = useForm("xjvdrgba");
    
    if (state.succeeded) {
        return(

            <section className='py-16 lg:section' id='contact'>
                <div className="container xs:text-center xs:items-center">
                    <div className='flex flex-col lg:flex-row'>
                        {/*text*/}
                        <motion.div
                        variants={fadeIn('right', 0.3)} 
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }} 
                        className='flex-1 flex justify-start items-center'>
                            <div>
                                <TypingText title="| Get in touch" />
                                
                                <TitleText title={<>Let´s work <br />together!</>} />
                            </div>
                        </motion.div>
                        <motion.div
                        onSubmit={handleSubmit}
                        variants={fadeIn('left', 0.5)} 
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}  
                        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-center justify-center '>
                            <p className='flex justify-center items-center'>¡Gracias por contactarme!</p>
                        </motion.div>
                        
                    </div>
                </div>
            </section>
        );
    }

  return (

    <section className='py-16 section' id='contact'>
        <div className="container xs:text-center xs:items-center">
            <div className='flex flex-col lg:flex-row justify-center items-center text-center '>
                {/*text*/}
                <motion.div
                variants={fadeIn('right', 0.3)} 
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }} 
                className='py-8 flex-1 flex justify-center items-center text-center'>
                    <div className='flex justify-center items-center text-center flex-col' >
                        
                        <TypingText title="| Get in touch" />
                        <TitleText title={<>Potenciá tu negocio</>} />
                        <RedesSociales/>
                    </div>
                </motion.div>
                {/*form*/}
                <motion.form
                onSubmit={handleSubmit}
                variants={fadeIn('left', 0.5)} 
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}  
                className='text-white  flex-1 border min-w-[400px] max-w-[400px] rounded-2x1 flex flex-col gap-y-6 pb-16 md:pb-12 p-6 items-start'>
                    <input
                    required
                    id="name"
                    name="name"
                    type="text" 
                    className=" text-white bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all" 
                    placeholder='Su Nombre'/>

                    <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                    />

                    <input
                    required
                    id="email" 
                    name="email"
                    type="text" 
                    className="text-white  bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all" 
                    placeholder='Su Email'/>

                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />

                    <textarea
                    required
                    id="message" 
                    name="message"
                    className="text-white  bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12" 
                    placeholder='Su mensaje'>
                    </textarea>

                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />

                    <button 
                    type="submit"
                    disabled={state.submitting}
                    className="btn text-white font-bold py-2 px-4 rounded-full">Enviar Mensaje</button>
                </motion.form>
            </div>
        </div>
    </section>

  )
}

export default ContactForm
