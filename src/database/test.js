const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
/*     //inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-29.1786657",
        lng: "-51.1871302",
        name: "Lar das meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "5554899999950",
        images: [
            "https://images.unsplash.com/photo-1542901689-8917f44e3541?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q",

            "https://images.unsplash.com/photo-1444117002436-be442e10757e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q"
        ].toString(),
        instructions: "Venha nos visitar e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 9h até 17h",
        open_on_weekends: "0"
    }); */

    // Consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);
/*     
    // Consultar dados da tabela
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"');
    console.log(orphanage);

    //deletar dados da tabela
    console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"));    
 */
});