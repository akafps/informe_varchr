import React from 'react';
import { Bot, Terminal } from 'lucide-react';

export default function Prompts() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
      <div className="flex items-center gap-2 mb-4 border-b pb-4">
        <Bot className="text-yellow-500 w-8 h-8" />
        <h2 className="text-3xl font-bold text-gray-800">08. Bitácora de Uso de IA</h2>
      </div>

      <div className="text-sm text-gray-600 space-y-4">
        <p><strong>Herramientas Utilizadas:</strong> Gemini AI y Claude</p>
        <p><strong>Contexto:</strong> Estructuración del entorno técnico de desarrollo, resolución de conflictos en la compilación de hojas de estilo y optimización técnica de componentes para el renderizado del informe de ciberseguridad.</p>
        
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-xs space-y-2">
          <div className="flex items-center gap-2 text-yellow-400 border-b border-gray-800 pb-1 mb-2">
            <Terminal className="w-4 h-4"/> <span>Prompts de interacción ejecutados:</span>
          </div>
          <p>&gt; "Genera una guía paso a paso para inicializar un proyecto desde cero utilizando Vite, React y Tailwind CSS v4..."</p>
          <p>&gt; "Tengo un error de compilación en Vite [plugin:vite:css] que indica que PostCSS no reconoce la directiva tradicional..."</p>
          <p>&gt; "Propón un caso de estudio sobre incidentes de ciberseguridad transnacionales con impacto en la industria del entretenimiento..."</p>
          <p>&gt; "Diseña la estructura visual en React y Tailwind CSS para un conjunto de componentes modulares, optimizando el uso de grillas..."</p>
        </div>

        <div className="p-4 bg-yellow-50 text-yellow-950 border border-yellow-200 rounded">
          <h4 className="font-bold mb-1">Reflexión sobre la Herramienta</h4>
          <p className="text-xs text-justify">La combinación de modelos de Inteligencia Artificial funcionó como un acelerador técnico en la depuración de errores críticos de configuración del sistema operativo (bloqueos de directivas en PowerShell) y la resolución de incompatibilidades en el pipeline de CSS con Tailwind v4. En el plano del desarrollo frontend, permitieron maquetar rápidamente una interfaz interactiva y adaptada a la rúbrica de INACAP basándose en los datos analizados, optimizando los tiempos de diseño visual a través de la integración limpia de estilos.</p>
        </div>
      </div>
    </div>
  );
}