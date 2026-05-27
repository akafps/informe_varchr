import React from 'react';
import { Scale } from 'lucide-react';

export default function Comparacion() {
  return (
    <div className="p-8 bg-white rounded-[32px] shadow-soft border border-slate-200 space-y-8">
      <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Scale className="text-indigo-500 w-9 h-9" />
          <h2 className="text-3xl font-semibold text-slate-950">04. Comparación de Marcos Regulatorios</h2>
        </div>
      </div>
      
      <p className="text-slate-900 leading-relaxed">
        Análisis comparativo entre la legislación chilena y los marcos internacionales aplicados a la industria de plataformas de entretenimiento y videojuegos:
      </p>

      <div className="overflow-x-auto rounded-[28px] border border-slate-200 shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-950 text-white text-sm">
            <tr>
              <th className="px-5 py-4 font-semibold">Ejes de Análisis</th>
              <th className="px-5 py-4 font-semibold">Ley N° 21.459 (Chile)</th>
              <th className="px-5 py-4 font-semibold">GDPR (Unión Europea)</th>
              <th className="px-5 py-4 font-semibold">NIST Framework</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white text-sm text-slate-700">
            <tr>
              <td className="px-4 py-4 font-bold bg-gray-50 border-r">Ámbito de Aplicación</td>
              <td className="px-4 py-4">Persecución penal de delincuentes informáticos en territorio nacional.</td>
              <td className="px-4 py-4">Protección y privacidad global de los datos de ciudadanos europeos.</td>
              <td className="px-4 py-4">Adopción voluntaria para la gestión de riesgos en infraestructuras.</td>
            </tr>
            <tr>
              <td className="px-4 py-4 font-bold bg-gray-50 border-r">Sanciones y Multas</td>
              <td className="px-4 py-4">Penas de cárcel (presidio) y multas accesorias del Código Penal.</td>
              <td className="px-4 py-4">Multas administrativas de hasta 20 millones de euros o el 4% anual global.</td>
              <td className="px-4 py-4">No aplica sanciones directas por ser una guía técnica de buenas prácticas.</td>
            </tr>
            <tr>
              <td className="px-4 py-4 font-bold bg-gray-50 border-r">Obligaciones Principales</td>
              <td className="px-4 py-4">Prohibición de accesos indebidos, sabotajes y fraudes informáticos.</td>
              <td className="px-4 py-4">Notificar brechas en un máximo de 72 horas y garantizar el cifrado.</td>
              <td className="px-4 py-4">Implementar controles: Identificar, Proteger, Detectar, Responder y Recuperar.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}