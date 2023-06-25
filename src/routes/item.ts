// Manejador de las rutas proveniente de 'express'
import { Request, Response, Router } from "express";

// Constante que almacenará las rutas
const router = Router();



/**
 * 
 * En este punto yo soy el 'servidor' (quien responde a los clientes).
 * 
 * Y los metodos de abajo es la forma como el cliente debe 
 * comunicarse conmigo para yo devolverle una respuesta.
 * 
 */



/**
 * http://localhost:3002/items [GET]
 */
router.get('/', ( req:Request, res:Response ) => {

    // Respuesta
    res.send({ data: 'AQUI_VAN_LOS_DATOS_SOLICITADOS' });

});



// xportar las rutas para sr usadas en el archivo principal
export { router };
