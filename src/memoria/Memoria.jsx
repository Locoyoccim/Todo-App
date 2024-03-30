import React, { useReducer } from "react";
import { createContext } from "react";

let list = [
  { id: 1, actividad: "jog around the park 3x", completed:  true},
  { id: 2, actividad: "10 minutes meditation", completed:  false},
  { id: 3, actividad: "Read for 1 hour", completed: false },
  { id: 4, actividad: "Pick up groceries", completed: false },
  {
    id: 5,
    actividad: "Complete Todo App on Frontend Mentor",
    completed: false,
  },
];

const EstadoInicial = {
  orden: [],
  objetos: {},
};

function Reductor(estado, accion) {
  switch (accion.tipo) {
    case "colocar": {
      const metas = accion.meta;
      const NuevoEstado = {
        orden: metas.map((meta) => meta.id),
        objetos: metas.reduce(
          (objeto, meta) => ({ ...objeto, [meta.id]: meta }),
          {}
        ),
      };
      return NuevoEstado;
    }
    case "create": {
      const id = accion.meta.id;
      const NuevoEstado = {
        orden: [...estado.orden, id],
        objetos: { ...estado.objetos, [id]: accion.meta },
      };
      return NuevoEstado;
    }
    case "update": {
      const id = accion.meta.id;
      estado.objetos[id] = {
        ...estado.objetos[id],
        ...accion.meta,
      };
      const NuevoEstado = { ...estado };
      return NuevoEstado;
    }
    case "delete": {
      const id = accion.id;
      const nuevoOrden = estado.orden.filter(item => item !== id);
      delete estado.objetos[id]
      const NuevoEstado = {
        orden: nuevoOrden,
        objetos: estado.objetos
      };
      return NuevoEstado;
    }
    case "clearComplete": {
      const id = accion.id;
      const nuevoOrden = estado.orden.filter(item => estado.objetos[item] !== id);
      for (const id in estado.objetos) {
        if (estado.objetos[id].completed === true) {
          delete estado.objetos[id];
        }
      }
      const NuevoEstado = {
        orden: nuevoOrden,
        objetos: estado.objetos
      };
      return NuevoEstado;
    }
  }
}

const metas = Reductor(EstadoInicial, { tipo: "colocar", meta: list });

export const Activities = createContext(null);

function Memoria({ children }) {
  const [estado, enviar] = useReducer(Reductor, metas);
  return (
    <Activities.Provider value={[estado, enviar]}>
      {children}
    </Activities.Provider>
  );
}

export default Memoria;
