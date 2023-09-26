'use client'
import Stepper from "@/components/Stepper";
import { useState } from "react";

const Subscription = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            label: 'Dados pessoais',
            component: <div>Dados pessoais</div>
        },
        {
            label: 'Mini cursos',
            component: <div>Endereço</div>
        },
        {
            label: 'Palestras',
            component: <div>Palestras</div>
        },
        {
            label: 'Pagamento',
            component: <div>Pagamento</div>
        },
        {
            label: 'Resumo',
            component: <div>Confirmação</div>
        }
    ]
    return (
        <section className="bg-shape w-screen h-screen">
            <div className="w-11/12 h-5/6 bg-slate-800 mx-auto rounded-xl">
                <Stepper activeStep={activeStep} steps={steps.map(item => item.label)}>

                </Stepper>
            </div>
        </section>
    )
}

export default Subscription;