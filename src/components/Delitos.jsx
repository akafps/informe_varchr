import React from 'react';
import { ShieldAlert, AlertTriangle } from 'lucide-react';

const delitos = [
  {
    titulo: 'Acceso Ilícito (Artículo 1)',
    descripcion:
      'Los atacantes vulneraron los perímetros de seguridad informática y las credenciales de los servidores de Capcom, ingresando sin autorización ni derecho a los sistemas computacionales de la empresa.',
  },
  {
    titulo: 'Interceptación Ilícita (Artículo 2)',
    descripcion:
      'Durante la intrusión, el grupo criminal interceptó y capturó flujos de datos internos de la red corporativa, deteniendo y extrayendo las transmisiones de datos no públicas como planes de desarrollo y correos.',
  },
  {
    titulo: 'Ataque a la Integridad (Artículo 3)',
    descripcion:
      'El uso del ransomware encriptó los archivos de bases de datos, códigos fuente y sistemas operativos corporativos, alterando y dañando de forma directa la disponibilidad del patrimonio informático.',
  },
  {
    titulo: 'Recepción de Datos (Artículo 6)',
    descripcion:
      'Los atacantes, conociendo el origen ilícito de la información sustraída, almacenaron, comercializaron y divulgaron masivamente en un sitio web de la Dark Web los datos personales robados.',
  },
  {
    titulo: 'Sabotaje Informático (Artículo 4)',
    descripcion:
      'Al cifrar más de 1 TB de archivos críticos mediante ransomware personalizado, el grupo Ragnar Locker obstaculizó deliberadamente el funcionamiento de los sistemas de Capcom, impidiendo el acceso legítimo de la empresa a su propia infraestructura tecnológica y paralizando sus operaciones por varios días.',
  },
  {
    titulo: 'Extorsión Informática (Artículo 8)',
    descripcion:
      'Tras el cifrado de los sistemas, los atacantes exigieron un rescate de 11 millones de dólares en criptomonedas como condición para restituir el acceso a los datos y evitar la publicación masiva de información confidencial, configurando una amenaza coactiva con fines de lucro ilícito.',
  },
];

export default function Delitos() {
  return (
    <div className="p-8 bg-white rounded-[32px] shadow-soft border border-slate-200 space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
        <ShieldAlert className="text-red-500 w-9 h-9 shrink-0" />
        <h2 className="text-3xl font-semibold text-slate-950">
          03. Tipificación de Delitos (Ley 21.459)
        </h2>
      </div>

      {/* Intro */}
      <p className="text-slate-900 leading-relaxed">
        El actuar del grupo delictivo "Ragnar Locker" en el ataque a Capcom configura los
        siguientes delitos informáticos bajo la legislación penal chilena:
      </p>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          alignItems: 'stretch',
        }}
      >
        {delitos.map(({ titulo, descripcion }) => (
          <div
            key={titulo}
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '1.75rem',
              border: '1px solid #fecaca',
              backgroundColor: '#fff1f2',
              padding: '1.5rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
            }}
          >
            <h3
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: 600,
                color: '#7f1d1d',
                marginBottom: '0.75rem',
                fontSize: '1rem',
              }}
            >
              <AlertTriangle
                style={{ width: '1rem', height: '1rem', color: '#ef4444', flexShrink: 0 }}
              />
              {titulo}
            </h3>
            <p
              style={{
                fontSize: '0.875rem',
                color: '#991b1b',
                lineHeight: 1.65,
                margin: 0,
                flexGrow: 1,
              }}
            >
              {descripcion}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}