import { s as supabase, U as User } from "./main-xqChGdwP.js";
class Perfil {
  constructor({
    id = null,
    // ID único del perfil
    created_at = null,
    // Fecha de creación del perfil
    user_id = null,
    // ID del usuario asociado al perfil
    nombre = null,
    // Nombre del usuario
    apellidos = null,
    // Apellidos del usuario
    avatar = "default_avatar.png",
    // URL del avatar por defecto
    estado = "activo",
    // Estado del perfil (activo/inactivo, por ejemplo)
    rol = "registrado"
    // Rol del usuario (registrado, administrador, etc.)
  }) {
    this.id = id;
    this.created_at = created_at;
    this.user_id = user_id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.avatar = avatar;
    this.estado = estado;
    this.rol = rol;
  }
  // Método estático para obtener todos los perfiles
  static async getAll() {
    const { data: perfiles, error } = await supabase.from("perfiles").select("*").order("created_at", { ascending: false });
    if (error) {
      throw new Error(error.message);
    }
    return perfiles.map((perfil) => new Perfil(perfil));
  }
  // Método estático para obtener un perfil por su ID
  static async getById(id) {
    const { data: perfil, error } = await supabase.from("perfiles").select("*").eq("id", id);
    if (error) {
      throw new Error(error.message);
    }
    return new Perfil(perfil[0]);
  }
  // Método estático para obtener un perfil por el ID del usuario asociado
  static async getByUserId(userId) {
    const { data: perfil, error } = await supabase.from("perfiles").select("*").eq("user_id", userId);
    if (error) {
      throw new Error(error.message);
    }
    return new Perfil(perfil[0]);
  }
  // Método estático para crear un nuevo perfil
  static async create(perfilData) {
    const { data, error } = await supabase.from("perfiles").insert(perfilData).select();
    if (error) {
      throw new Error(`Error creando perfil: ${error.message}`);
    }
    return data ? new Perfil(data[0]) : null;
  }
  // Método estático para actualizar un perfil existente por su ID
  static async update(id, newData) {
    const { error } = await supabase.from("perfiles").update(newData).eq("id", id);
    if (error) {
      throw new Error(`Error actualizando perfil: ${error.message}`);
    }
    return true;
  }
}
const registroVista = {
  template: (
    // html
    `
  <div class="container">
  <h1 class="mt-5 text-center">Registro</h1>
  <div class="m-5 mx-auto" style="max-width: 400px">
    <!-- Formulario de registro -->
    <form id="formularioRegistro" class="form border shadow-sm p-3" novalidate>
      <!-- Nombre -->
      <label for="nombre" class="form-label">Nombre:</label>
      <input required id="nombre" type="text" class="form-control" />

      <!-- Apellidos -->
      <label for="apellidos" class="form-label">Apellidos:</label>
      <input id="apellidos" type="text" class="form-control" />

      <!-- Email -->
      <label for="email" class="form-label">Email:</label>
      <input required id="email" type="email" class="form-control" />

      <!-- Contraseña -->
      <label for="pass" class="form-label mt-3">Contraseña:</label>
      <input required id="pass" type="password" class="form-control" />

      <!-- Botón enviar -->
      <input type="submit" class="btn btn-primary w-100 mt-3" value="Enviar" />
    </form>
  </div>
</div>
  `
  ),
  script: () => {
    console.log("vista registro cargada");
    const formulario = document.querySelector("#formularioRegistro");
    formulario.addEventListener("submit", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (!formulario.checkValidity()) {
        formulario.classList.add("was-validated");
      } else {
        try {
          const usuario = {
            email: document.getElementById("email").value,
            password: document.getElementById("pass").value
          };
          console.log("Formulario valido. Datos formulario: ", usuario);
          const user = await User.create(usuario);
          console.log("user creado", user);
          const perfil = {
            ...usuario,
            user_id: user.id,
            nombre: document.getElementById("nombre").value,
            apellidos: document.getElementById("apellidos").value
          };
          Perfil.create(perfil);
          alert("Usuario creado correctamente. Revisa tu email...");
          window.location = "#/login";
        } catch (error) {
          alert("Error al crear usuario", error);
        }
      }
    });
  }
};
export {
  registroVista as default
};
