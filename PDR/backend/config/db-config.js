import sql from 'mssql';

const config = {
    user: 'TUTO',
    password: '12345',
    server: 'LEDE',
    database: 'tiendaDB',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};


export const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Conectado a la base de datos');
        return pool;
    })
    .catch(err => {
        console.error('Error al conectar a la base de datos:', err);
        process.exit(1); // Salir del proceso Node.js con error
    });

export { sql };
