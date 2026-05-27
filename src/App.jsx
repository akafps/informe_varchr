import React, { useState } from 'react';
// Importamos los 8 componentes que acabas de crear
import Resumen from './components/Resumen';
import Marco from './components/Marco';
import Delitos from './components/Delitos';
import Comparacion from './components/Comparacion';
import Responsabilidades from './components/Responsabilidades';
import Datos from './components/Datos';
import Conclusiones from './components/Conclusiones';
import Prompts from './components/Prompts';

export default function App() {
  // Estado para controlar qué sección del informe se muestra en pantalla
  const [tabActual, setTabActual] = useState('resumen');

  // Función para renderizar el componente activo según la pestaña seleccionada
  const renderContenido = () => {
    switch (tabActual) {
      case 'resumen': return <Resumen />;
      case 'marco': return <Marco />;
      case 'delitos': return <Delitos />;
      case 'comparacion': return <Comparacion />;
      case 'responsabilidades': return <Responsabilidades />;
      case 'datos': return <Datos />;
      case 'conclusiones': return <Conclusiones />;
      case 'prompts': return <Prompts />;
      default: return <Resumen />;
    }
  };

  // Listado de las 8 pestañas obligatorias basadas en el PDF
  const pestañas = [
    { id: 'resumen', nombre: '01. Resumen' },
    { id: 'marco', nombre: '02. Marco Normativo' },
    { id: 'delitos', nombre: '03. Delitos' },
    { id: 'comparacion', nombre: '04. Comparación' },
    { id: 'responsabilidades', nombre: '05. Responsabilidades' },
    { id: 'datos', nombre: '06. Datos Personales' },
    { id: 'conclusiones', nombre: '07. Conclusiones' },
    { id: 'prompts', nombre: '08. Bitácora IA' },
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Menú Lateral de Navegación */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-5 border-b border-gray-800">
          <h1 className="text-lg font-bold tracking-wider text-blue-400">Análisis Legal</h1>
          <p className="text-xs text-gray-400">Evaluación N°2 - varchr</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {pestañas.map((pestaña) => (
            <button
              key={pestaña.id}
              onClick={() => setTabActual(pestaña.id)}
              className={`w-full text-left px-4 py-2.5 rounded transition-colors text-sm ${
                tabActual === pestaña.id 
                  ? 'bg-blue-600 text-white font-medium' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              {pestaña.nombre}
            </button>
          ))}
        </nav>
      </aside>

      {/* Contenedor Principal donde carga cada pantalla */}
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-4xl mx-auto">
          {renderContenido()}
        </div>
      </main>
    </div>
  );
}