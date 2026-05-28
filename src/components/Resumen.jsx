import React from 'react';
import { FileText, Calendar, Users, ShieldAlert } from 'lucide-react';

export default function Resumen() {
  return (
    <div className="p-8 bg-white rounded-[32px] shadow-soft border border-slate-200 space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
        <FileText className="text-blue-500 w-9 h-9 shrink-0" />
        <h2 className="text-3xl font-semibold text-slate-950">01. Resumen Ejecutivo del Caso</h2>
      </div>

      {/* Intro */}
      <p className="text-slate-900 leading-relaxed text-justify">
        En noviembre de 2020, la multinacional de videojuegos <strong>Capcom</strong> sufrió un ataque informático masivo perpetrado por el grupo criminal <strong>"Ragnar Locker"</strong>. Los atacantes lograron infiltrarse en los servidores internos utilizando un ransomware personalizado, cifrando los sistemas y exigiendo un rescate millonario. Bajo el escenario planteado para esta evaluación, analizamos el impacto hipotético de este incidente sobre la infraestructura de la empresa en territorio chileno.
      </p>

      {/* Grid de 2 cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          alignItems: 'stretch',
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '1.75rem',
            border: '1px solid #e2e8f0',
            backgroundColor: '#f8fafc',
            padding: '1.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.75rem' }}>
            <Calendar style={{ color: '#3b82f6', width: '1.25rem', height: '1.25rem', flexShrink: 0 }} />
            <span>¿Cuándo ocurrió?</span>
          </div>
          <p style={{ fontSize: '0.875rem', color: '#0f172a', lineHeight: 1.65, margin: 0, flexGrow: 1 }}>
            Detectado el 2 de noviembre de 2020, con filtraciones de datos que se extendieron durante las semanas siguientes.
          </p>
        </div>

        {/* Card 2 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '1.75rem',
            border: '1px solid #e2e8f0',
            backgroundColor: '#f8fafc',
            padding: '1.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.75rem' }}>
            <Users style={{ color: '#3b82f6', width: '1.25rem', height: '1.25rem', flexShrink: 0 }} />
            <span>Actores Involucrados</span>
          </div>
          <p style={{ fontSize: '0.875rem', color: '#0f172a', lineHeight: 1.65, margin: 0, flexGrow: 1 }}>
            <strong>Atacantes:</strong> Ragnar Locker.<br />
            <strong>Afectados:</strong> Capcom Chile, empleados, colaboradores y más de 350.000 usuarios de la plataforma de videojuegos.
          </p>
        </div>
      </div>

      {/* Impacto General */}
      <div
        style={{
          padding: '1.25rem 1.5rem',
          backgroundColor: '#fff1f2',
          borderRadius: '0.75rem',
          border: '1px solid #fecaca',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#991b1b', fontWeight: 700, marginBottom: '0.75rem' }}>
          <ShieldAlert style={{ color: '#ef4444', width: '1.25rem', height: '1.25rem', flexShrink: 0 }} />
          <span>Impacto General</span>
        </div>
        <ul style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.875rem', color: '#0c0a09', lineHeight: 1.75 }}>
          <li><strong>Financiero:</strong> Paralización de operaciones y costos de remediación de sistemas.</li>
          <li><strong>Propiedad Intelectual:</strong> Filtración de códigos fuente y planes comerciales.</li>
          <li><strong>Privacidad:</strong> Exposición masiva en la Dark Web de nombres, correos y datos de contacto de jugadores chilenos.</li>
        </ul>
      </div>
    </div>
  );
}