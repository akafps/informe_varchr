import React from 'react';
import { ShieldAlert, AlertTriangle } from 'lucide-react';

export default function Delitos() {
  return (
    <div className="p-8 bg-white rounded-[32px] shadow-soft border border-slate-200 space-y-8">
      <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <ShieldAlert className="text-red-500 w-9 h-9" />
          <h2 className="text-3xl font-semibold text-slate-950">03. Tipificación de Delitos (Ley 21.459)</h2>
        </div>
      </div>
      
      <p className="text-slate-900 leading-relaxed">
        El actuar del grupo delictivo "Ragnar Locker" en el ataque a Capcom configura los siguientes delitos informáticos bajo la legislación penal chilena:
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="h-full rounded-[28px] border border-red-100 bg-red-50 p-6 shadow-sm">
          <h3 className="font-semibold text-red-900 flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-red-500" /> Acceso Ilícito (Artículo 1)
          </h3>
          <p className="text-sm text-red-800 leading-relaxed">Los atacantes vulneraron los perímetros de seguridad informática y las credenciales de los servidores de Capcom, ingresando sin autorización ni derecho a los sistemas computacionales de la empresa.</p>
        </div>

        <div className="h-full rounded-[28px] border border-red-100 bg-red-50 p-6 shadow-sm">
          <h3 className="font-semibold text-red-900 flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-red-500" /> Interceptación Ilícita (Artículo 2)
          </h3>
          <p className="text-sm text-red-800 leading-relaxed">Durante la intrusión, el grupo criminal interceptó y capturó flujos de datos internos de la red corporativa, deteniendo y extrayendo las transmisiones de datos no públicas como planes de desarrollo y correos.</p>
        </div>

        <div className="h-full rounded-[28px] border border-red-100 bg-red-50 p-6 shadow-sm">
          <h3 className="font-semibold text-red-900 flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-red-500" /> Ataque a la Integridad (Artículo 3)
          </h3>
          <p className="text-sm text-red-800 leading-relaxed">El uso del ransomware encriptó los archivos de bases de datos, códigos fuente y sistemas operativos corporativos, alterando y dañando de forma directa la disponibilidad del patrimonio informático.</p>
        </div>

        <div className="h-full rounded-[28px] border border-red-100 bg-red-50 p-6 shadow-sm">
          <h3 className="font-semibold text-red-900 flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-red-500" /> Recepción de Datos (Artículo 6)
          </h3>
          <p className="text-sm text-red-800 leading-relaxed">Los atacantes, conociendo el origen ilícito de la información sustraída, almacenaron, comercializaron y divulgaron masivamente en un sitio web de la Dark Web los datos personales robados.</p>
        </div>
      </div>
    </div>
  );
}