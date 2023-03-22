import React from 'react'
import CardPro from './CardPro'

function ExperiencePro() {

    const Exp=[{
        exp:"Stage au laboratoire de pharmacovigilance (stage de mémoire)", periode:"de 01/03/2021 à 01/03/2022",
    },{ exp:"Stage au laboratoire de microbiologie à l'hopital Béchir Hamza de Tunis(stage de mémoire)", periode:"de 01/07/2018 à 01/08/2018"},
    { exp:"Stage au laboratoire de parasitologie à l'hopital Militaire de Tunis", periode:"de 01/07/2017 à 01/08/2017"}]
  return (
    <div   >
        <h1> EXPERIENCES PROFESSIONELLE </h1>
        <div  className='CardPro'>
        {Exp.map ((experience)=><CardPro experience ={experience}/> )}
        </div>
    </div>
  )
}

export default ExperiencePro