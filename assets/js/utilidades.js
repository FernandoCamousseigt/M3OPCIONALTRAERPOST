import { buscarUsuario, buscarPosteosPorUsuario } from './provider.js';

export const capturarDatosUsuariosPosteos = async(idUsuario) => {
    const usuario = buscarUsuario(idUsuario);
    const posteos = buscarPosteosPorUsuario(idUsuario);
    const datos = await Promise.all([usuario, posteos]);
    return datos;
}