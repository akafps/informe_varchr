import React from 'react';
import { FileText, Calendar, Users, ShieldAlert } from 'lucide-react';

export default function Resumen() {
  return (
    <div className="p-8 bg-white rounded-[32px] shadow-soft border border-slate-200 space-y-8">
      <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <FileText className="text-blue-500 w-9 h-9" />
          <h2 className="text-3xl font-semibold text-slate-950">01. Resumen Ejecutivo del Caso</h2>
        </div>
      </div>
      
      <div className="text-slate-900 leading-relaxed space-y-4 text-justify">
        <p>
          En noviembre de 2020, la multinacional de videojuegos <strong>Capcom</strong> sufrió un ataque informático masivo perpetrado por el grupo criminal <strong>"Ragnar Locker"</strong>. Los atacantes lograron infiltrarse en los servidores internos utilizando un ransomware personalizado, cifrando los sistemas y exigiendo un rescate millonario. Bajo el escenario planteado para esta evaluación, analizamos el impacto hipotético de este incidente sobre la infraestructura de la empresa en territorio chileno.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="h-full rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <div className="flex items-center gap-3 text-slate-900 font-semibold mb-3">
            <Calendar className="text-blue-500 w-5 h-5" />
            <span>¿Cuándo ocurrió?</span>
          </div>
          <p className="text-sm text-slate-900 leading-relaxed">Detectado el 2 de noviembre de 2020, con filtraciones de datos que se extendieron durante las semanas siguientes.</p>
        </div>

        <div className="h-full rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <div className="flex items-center gap-3 text-slate-900 font-semibold mb-3">
            <Users className="text-blue-500 w-5 h-5" />
            <span>Actores Involucrados</span>
          </div>
          <p className="text-sm text-slate-900 leading-relaxed"><strong>Atacantes:</strong> Ragnar Locker. <br /><strong>Afectados:</strong> Capcom Chile, empleados, colaboradores y más de 350.000 usuarios de la plataforma de videojuegos.</p>
        </div>
      </div>

      <div className="p-4 bg-red-50 rounded-lg border border-red-200">
        <div className="flex items-center gap-2 text-red-800 font-bold mb-2">
          <ShieldAlert className="text-red-500 w-5 h-5" />
          <span>Impacto General</span>
        </div>
        <ul className="list-disc pl-5 text-sm text-red-950 space-y-1">
          <li><strong>Financiero:</strong> Paralización de operaciones y costos de remediación de sistemas.</li>
          <li><strong>Propiedad Intelectual:</strong> Filtración de códigos fuente y planes comerciales.</li>
          <li><strong>Privacidad:</strong> Exposición masiva en la Dark Web de nombres, correos y datos de contacto de jugadores chilenos.</li>
        </ul>
      </div>
    </div>
  );
}