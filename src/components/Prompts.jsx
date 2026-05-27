import React from 'react';
import { Bot, Terminal, HelpCircle } from 'lucide-react';

export default function Prompts() {
  return (
    <div className="p-8 bg-white rounded-[32px] shadow-soft border border-slate-200 space-y-8">
      <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Bot className="text-yellow-500 w-9 h-9" />
          <h2 className="text-3xl font-semibold text-slate-950">08. Bitácora de Uso de IA</h2>
        </div>
      </div>

      <div className="text-sm text-slate-900 space-y-4">
        <p><strong>Herramientas Utilizadas:</strong> Gemini AI, Claude y GitHub Copilot</p>
        <p><strong>Contexto:</strong> Resolución de bloqueos en consola, parches de PostCSS/Tailwind v4, mapeo de artículos penales para leyes chilenas y automatización de sintaxis repetitiva en VS Code.</p>
        
        <div className="rounded-[28px] bg-slate-950 p-5 font-mono text-xs text-slate-100 space-y-3">
          <div className="flex items-center gap-2 text-yellow-400 border-b border-gray-800 pb-2 mb-1">
            <Terminal className="w-4 h-4"/> <span>Consultas y Prompts del Estudiante (Consola e In-line Code):</span>
          </div>
          <div>
            <span className="text-slate-500">// 1. Error de entorno de desarrollo (Gemini/Claude)</span>
            <p className="text-yellow-100">&gt; "Oye, estoy armando un proyecto con Vite y React desde CMD pero PowerShell me tira un error de políticas de ejecución..."</p>
          </div>
          <div>
            <span className="text-slate-500">// 2. Error técnico de hojas de estilo (Gemini/Claude)</span>
            <p className="text-yellow-100">&gt; "Instalé Tailwind CSS v4 pero me tira un error gigante de compilación en el css de Vite..."</p>
          </div>
          <div>
            <span className="text-slate-500">// 3. Validación de leyes chilenas (Gemini)</span>
            <p className="text-yellow-100">&gt; "Tengo que hacer un informe para INACAP... ¿Me sirve el hackeo de Capcom en el 2020 para analizarlo con la nueva ley chilena 21.459?"</p>
          </div>
          <div>
            <span className="text-slate-500">// 4. Automatización de código en el editor (GitHub Copilot via inline comment)</span>
            <p className="text-yellow-100">&gt; "// Generar el estado de React (useState) para controlar la pestaña activa del menú y la función Switch para renderizar condicionalmente los componentes..."</p>
          </div>
        </div>

        <div className="p-4 bg-yellow-50 text-yellow-950 border border-yellow-200 rounded space-y-2">
          <h4 className="font-bold flex items-center gap-1"><HelpCircle className="w-4 h-4 text-yellow-600" /> Evaluación del ecosistema de IA</h4>
          <p className="text-xs text-justify">
            La combinación de modelos conversacionales con extensiones de autocompletado en tiempo real como GitHub Copilot permitió abordar el proyecto de forma integral. Mientras las IA de chat resolvieron los problemas conceptuales y de configuración inicial de empaquetadores, Copilot aceleró la escritura de la lógica del lado del cliente en el frontend, automatizando los patrones repetitivos de los componentes de React de manera limpia.
          </p>
        </div>
      </div>
    </div>
  );
}