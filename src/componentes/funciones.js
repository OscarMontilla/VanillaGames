// Gestión del localstorage
export const ls = {
    // Captuar datos de localStorage
    getUsuario: () => {
      // Leer en localStorage
      const usuarioJSON = localStorage.getItem('usuarioVanilla')
      // Convertir a objeto
      const usuario = JSON.parse(usuarioJSON)
      // Devolvemos objeto
      return usuario
    },
    setUsuario: (usuario) => {
      // Convertir el objeto a una cadena JSON
      const usuarioJSON = JSON.stringify(usuario)
      // Guardar en localStorage
      localStorage.setItem('usuarioVanilla', usuarioJSON)
    }
  }