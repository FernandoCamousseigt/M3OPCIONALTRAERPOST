const buscarUsuario = async (idUsuario) => {
    const endPointUsuario = `https://jsonplaceholder.typicode.com/users/${idUsuario}`;
    try {
        const respuesta = await fetch(endPointUsuario);
        if (respuesta.ok) {
            const usuario = await respuesta.json();
            return usuario;
        }
        throw new Error('el servidor no esta disponible');
    } catch (e) {
        console.log(e);
    }
}

const buscarPosteosPorUsuario = async (idUsuario) => {
    const endPointPosteoUsuario = `https://jsonplaceholder.typicode.com/posts?userId=${idUsuario}`;
    const respuesta = await fetch(endPointPosteoUsuario);
    const posteos = await respuesta.json();
    return posteos;
}

export {
    buscarPosteosPorUsuario,
    buscarUsuario
}