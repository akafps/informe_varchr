import React from 'react';
import {
  Bot,
  Terminal,
  HelpCircle,
  Sparkles,
  BrainCircuit,
  Code2,
} from 'lucide-react';

export default function Prompts() {

  const prompts = [
    {
      id: 1,
      ia: 'Claude',
      title: 'Error de entorno de desarrollo',
      text: 'Estoy armando un proyecto con Vite y React desde CMD pero PowerShell me tira un error de políticas de ejecución de scripts y no me deja levantar el entorno.',
    },
    {
      id: 2,
      ia: 'Gemini',
      title: 'Error técnico Tailwind/PostCSS',
      text: 'Instalé Tailwind CSS v4 pero me tira un error gigante de compilación en Vite y PostCSS.',
    },
    {
      id: 3,
      ia: 'ChatGPT',
      title: 'Consulta legal y ciberseguridad',
      text: '¿Me sirve el hackeo de Capcom 2020 para analizarlo con la ley chilena 21.459?',
    },
    {
      id: 4,
      ia: 'Gemini',
      title: 'Diseño UI en React',
      text: 'Diseña la estructura visual en React usando tarjetas y Lucide-react.',
    },
    {
      id: 5,
      ia: 'GitHub Copilot',
      title: 'Autocompletado React',
      text: 'Generar useState y renderizado condicional para pestañas.',
    },
    {
      id: 6,
      ia: 'Claude',
      title: 'Corrección visual',
      text: 'Arregla el código para que los cuadros no se sobrepongan.',
    },
    {
      id: 7,
      ia: 'Claude',
      title: 'Diagnóstico de errores',
      text: '¿El problema es VS Code o conexión de la página?',
    },
    {
      id: 8,
      ia: 'ChatGPT',
      title: 'Completar información',
      text: 'Agrega información restante para visualizar prompts.jsx.',
    },
    {
      id: 9,
      ia: 'ChatGPT',
      title: 'Ajuste de recuadros',
      text: 'Hace que el texto calce con los recuadros sin vacíos.',
    },
    {
      id: 10,
      ia: 'Claude',
      title: 'Orden visual',
      text: 'Enumera los prompts sin perder el diseño visual.',
    },
  ];

  return (

    <div className="bg-white rounded-[32px] border border-slate-200 shadow-xl p-8 space-y-10">

      {/* HEADER */}
      <div className="border-b border-slate-200 pb-6">

        <div className="flex items-start gap-4">

          <div className="bg-yellow-100 p-4 rounded-2xl shrink-0">
            <Bot className="w-8 h-8 text-yellow-600" />
          </div>

          <div className="space-y-2">

            <h2 className="text-4xl font-bold text-slate-950">
              08. Bitácora de Uso de IA
            </h2>

            <p className="text-slate-500 leading-relaxed max-w-4xl">
              Registro técnico del apoyo de herramientas de inteligencia artificial
              durante el desarrollo y documentación del proyecto.
            </p>

          </div>
        </div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* HERRAMIENTAS */}
        <div className="bg-slate-50 border border-slate-200 rounded-[30px] p-8 flex flex-col">

          <div className="flex items-center gap-3 mb-6">

            <Sparkles className="w-6 h-6 text-yellow-500 shrink-0" />

            <h3 className="text-2xl font-bold text-slate-950">
              Herramientas Utilizadas
            </h3>

          </div>

          <div className="space-y-5 text-slate-700 text-[15px] leading-8 text-justify">

            <p>
              Durante el desarrollo del proyecto se utilizaron herramientas de inteligencia artificial orientadas a resolver problemas técnicos, estructurar componentes visuales y agilizar tareas repetitivas dentro del entorno frontend.
            </p>

            <p>
              Las plataformas utilizadas fueron Gemini AI, Claude, ChatGPT y GitHub Copilot, integrando asistencia conversacional y autocompletado inteligente directamente en Visual Studio Code.
            </p>

          </div>
        </div>

        {/* CONTEXTO */}
        <div className="bg-slate-50 border border-slate-200 rounded-[30px] p-8 flex flex-col">

          <div className="flex items-center gap-3 mb-6">

            <BrainCircuit className="w-6 h-6 text-blue-500 shrink-0" />

            <h3 className="text-2xl font-bold text-slate-950">
              Contexto de Uso
            </h3>

          </div>

          <div className="space-y-5 text-slate-700 text-[15px] leading-8 text-justify">

            <p>
              La IA fue utilizada para resolver errores de configuración en Vite, problemas relacionados con PostCSS y Tailwind CSS v4, además de consultas técnicas sobre dependencias de NPM y React.
            </p>

            <p>
              También se aplicó apoyo para interpretar la Ley 21.459 sobre delitos informáticos y organizar visualmente la investigación mediante componentes reutilizables con Tailwind CSS y Lucide React.
            </p>

          </div>
        </div>
      </div>

      {/* TERMINAL */}
      <div className="rounded-[30px] overflow-hidden border border-slate-900 shadow-2xl">

        {/* HEADER TERMINAL */}
        <div className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center gap-3">

          <Terminal className="w-4 h-4 text-yellow-400" />

          <p className="text-yellow-300 text-sm font-semibold tracking-wide">
            Flujo Cronológico de Prompts Utilizados
          </p>

        </div>

        {/* BODY TERMINAL */}
        <div className="bg-slate-950 p-6 space-y-5">

          {prompts.map((prompt) => (

            <div
              key={prompt.id}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5"
            >

              <div className="flex flex-wrap items-center gap-2 mb-3">

                <span className="w-7 h-7 rounded-full bg-slate-800 text-slate-200 text-xs font-bold flex items-center justify-center">
                  {prompt.id}
                </span>

                <Code2 className="w-4 h-4 text-cyan-400" />

                <span className="text-cyan-300 text-xs uppercase tracking-widest font-semibold">
                  [{prompt.ia}]
                </span>

                <span className="text-slate-500 text-xs">
                  {prompt.title}
                </span>

              </div>

              <p className="text-yellow-100 text-sm leading-7">
                &gt; {prompt.text}
              </p>

            </div>

          ))}

        </div>
      </div>

      {/* REFLEXION */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-[30px] p-8 space-y-5">

        <div className="flex items-center gap-3">

          <HelpCircle className="w-5 h-5 text-yellow-600" />

          <h3 className="text-2xl font-bold text-yellow-950">
            Reflexión sobre el uso de IA
          </h3>

        </div>

        <div className="space-y-4 text-yellow-950 text-sm leading-8 text-justify">

          <p>
            El uso complementario de Gemini, Claude, ChatGPT y GitHub Copilot permitió desarrollar el proyecto de manera más eficiente tanto a nivel técnico como estructural.
          </p>

          <p>
            Las IA conversacionales ayudaron a resolver errores críticos relacionados con PowerShell, Vite, Tailwind CSS v4 y PostCSS, además de orientar la interpretación del marco legal chileno asociado a ciberseguridad.
          </p>

          <p>
            Paralelamente, GitHub Copilot aceleró el desarrollo frontend mediante autocompletado inteligente en React, automatizando estructuras repetitivas y mejorando la organización visual del sistema.
          </p>

        </div>
      </div>

    </div>
  );
}