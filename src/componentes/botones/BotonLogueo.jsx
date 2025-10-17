import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";

const BotonLogueo = ({ iniciarSesion }) => {
const manejoExito = (respuestaCredencial) => {
    if (!respuestaCredencial?.credential) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se recibió la credencial de Google. Inténtalo nuevamente.",
        confirmButtonText: "Aceptar",
      })
      return;}

let datosUsuario
try {
  datosUsuario = jwtDecode(respuestaCredencial.credential);
} catch (error) {
  Swal.fire({
    icon: "error",
    title: "Error al procesar la respuesta",
    text: "Ocurrió un problema al obtener los datos del usuario.",
  });
  return;}

sessionStorage.setItem("tokenGoogle", respuestaCredencial.credential);

Swal.fire({
  icon: "success",
  title: "¡Inicio de sesión exitoso!",
  text: `Bienvenido ${datosUsuario.name || "usuario"}`,
  confirmButtonText: "Continuar",
});
if (iniciarSesion) iniciarSesion(datosUsuario);
}

const manejoError = () => {
  Swal.fire({
    icon: "error",
    title: "Error al iniciar sesión",
    text: "No pudimos conectarnos con Google. Por favor, inténtalo más tarde.",
    confirmButtonText: "Aceptar",
  });
}
return (
  <div className="d-flex justify-content-center">
    <GoogleLogin
      onSuccess={manejoExito}
      onError={manejoError}
      shape="pill"
      size="large"
      theme="outline"
      text="signin_with"
      logo_alignment="center"
    />
  </div>
)
}

export default BotonLogueo