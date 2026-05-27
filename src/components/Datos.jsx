import React from 'react';
import { Database, EyeOff, ShieldCheck } from 'lucide-react';

export default function Datos() {
  return (
    <div className="p-8 bg-white rounded-[32px] shadow-soft border border-slate-200 space-y-8">
      <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Database className="text-cyan-500 w-9 h-9" />
          <h2 className="text-3xl font-semibold text-slate-950">06. Tratamiento de Datos Personales (Ley 19.628)</h2>
        </div>
      </div>

      <div className="grid gap-5">
        <div className="rounded-[28px] border border-cyan-100 bg-cyan-50 p-6 shadow-sm space-y-4">
          <h3 className="font-bold text-cyan-950 flex items-center gap-2">
            <EyeOff className="text-cyan-600 w-5 h-5" />
            1. Distinción de Datos Vulnerados
          </h3>
          <ul className="text-sm text-cyan-900 list-disc pl-5 space-y-2">
            <li><strong>Datos Personales Estándar:</strong> Nombres de usuario, correos electrónicos, teléfonos y contraseñas encriptadas de los jugadores chilenos. Se vulneró el principio de seguridad informática.</li>
            <li><strong>Datos Sensibles:</strong> Historiales médicos preliminares y datos de recursos humanos correspondientes a la planilla de empleados. La ley chilena prohíbe el tratamiento de estos datos sin autorización expresa.</li>
          </ul>
        </div>

        <div className="rounded-[28px] border border-cyan-100 bg-cyan-50 p-6 shadow-sm space-y-4">
          <h3 className="font-bold text-cyan-950 flex items-center gap-2">
            <ShieldCheck className="text-cyan-600 w-5 h-5" />
            2. Afectación de los Derechos ARCO
          </h3>
          <p className="text-sm text-cyan-900 text-justify leading-relaxed">
            Los jugadores chilenos vieron vulnerados sus derechos de Acceso al no conocer la magnitud de los perfiles robados en la Dark Web, su capacidad de Rectificación por congelamiento de sistemas, y su derecho de Cancelación y Oposición para exigir el borrado total e inmediato de sus registros financieros para evitar fraudes adicionales.
          </p>
        </div>
      </div>
    </div>
  );
}