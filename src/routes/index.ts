import { Router } from "express";
import { readdirSync } from "fs";


// Ruta del directorio
const PATH_ROUTER = `${__dirname}`;

const router = Router();


const cleanFileName = ( fileName: string ) => {
    const file = fileName.split('.').shift()
    return file;
}


// Leer cada uno de los archivos dentro del directorio
readdirSync( PATH_ROUTER ).filter( (filename) => {

    const cleanName = cleanFileName( filename );

    if ( cleanName !== 'index' ) {

        import(`./${ cleanName }`).then( ( moduleRouter ) => {
            router.use(`./${ cleanName }`, moduleRouter.router)
        });

    }

});



export { router };

