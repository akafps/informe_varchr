import React from 'react';
import { Users, Shield, Briefcase, FileText } from 'lucide-react';

export default function Responsabilidades() {
  return (
    <div className="p-8 bg-white rounded-[32px] shadow-soft border border-slate-200 space-y-8">
      <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Users className="text-orange-500 w-9 h-9" />
          <h2 className="text-3xl font-semibold text-slate-950">05. Responsabilidades Legales</h2>
        </div>
      </div>

      <div className="grid gap-5">
        <div className="rounded-[28px] border border-orange-200 bg-orange-50 p-6 shadow-sm flex gap-4 items-start">
          <Shield className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-orange-950 text-lg">Responsabilidad Penal (Grupo Ragnar Locker)</h3>
            <span className="text-xs font-semibold bg-orange-200 text-orange-800 px-2 py-0.5 rounded">Cita: Artículos 1, 2, 3 y 6 de la Ley N° 21.459</span>
            <p className="text-sm text-orange-900 mt-2">Los autores materiales del ataque arriesgan penas de presidio menor debido a la ejecución dolosa del secuestro de datos (ransomware) y extorsión financiera.</p>
          </div>
        </div>

        <div className="rounded-[28px] border border-orange-200 bg-orange-50 p-6 shadow-sm flex gap-4 items-start">
          <Briefcase className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-orange-950 text-lg">Responsabilidad Civil (Capcom Persona Jurídica)</h3>
            <span className="text-xs font-semibold bg-orange-200 text-orange-800 px-2 py-0.5 rounded">Cita: Artículo 2314 del Código Civil Chileno</span>
            <p className="text-sm text-orange-900 mt-2">Capcom Chile podría enfrentar demandas civiles de indemnización por perjuicios provenientes de usuarios y empleados afectados, debido a la falta de cuidado (culpa leve) en la custodia de los datos.</p>
          </div>
        </div>

        <div className="rounded-[28px] border border-orange-200 bg-orange-50 p-6 shadow-sm flex gap-4 items-start">
          <FileText className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-orange-950 text-lg">Responsabilidad Administrativa (Ante Reguladores)</h3>
            <span className="text-xs font-semibold bg-orange-200 text-orange-800 px-2 py-0.5 rounded">Cita: Ley N° 19.628 y dictámenes de la Dirección del Trabajo</span>
            <p className="text-sm text-orange-900 mt-2">Exposición a multas e infracciones administrativas aplicadas por los organismos fiscalizadores del Estado debido a la vulneración de las bases de datos de trabajadores chilenos.</p>
          </div>
        </div>
      </div>
    </div>
  );
}