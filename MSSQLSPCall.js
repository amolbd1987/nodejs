const sqlConfig=  {
				user:MSSQLUSERNAME,
				password:MSSQLPASS,
				server: MSSQLSERVERIP,
				database: MSSQLDBNAME,
				requestTimeout: 60000,
				options: {
					encrypt: false,
					enableArithAbort: true
				},
				pool: {
					max: 10,
					min: 0,
					idleTimeoutMillis: 46000
				}
			}

const sql = require('mssql');

const poolPromise = new sql.ConnectionPool(sqlConfig)
    .connect()
    .then(pool => {
        console.log('Connected to MSSQL server =>',sqlConfig.server);
        return pool
    })
    .catch(err => {
        let body = {};
        body.failure = err;
        console.log('Database Connection Failed! Bad Config: ', err);
    })
module.exports = {
        sql, poolPromise
}

        const pool = await poolPromise
        const recordset = await pool.request()
            .input("Param1", sql.VarChar, var1)
            .input("Param2", sql.Int, var2)
            .input("Param3",sql.Int, var3)
            .execute("SPName");
         if(recordset && recordset.recordsets[0].length > 0){
              sql.close();
         }
         
