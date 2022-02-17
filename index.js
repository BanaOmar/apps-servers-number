function getServersNumber(appsReources, serverResources){
    let servers = [{...serverResources}];
    let appsMap = {};
    appsReources.forEach((app) => {
        let serverExisted =false;
        for(i=0; i< servers.length; i++){
            if( servers[i].ram - app.ram >= 0 &&
                servers[i].cpu - app.cpu >= 0 &&
                servers[i].storage - app.storage >= 0){
                    allocateServer(i, servers,app, appsMap);
                    serverExisted= true;
                    break;
                }
        }
        if(!serverExisted){
                servers.push({...serverResources});
                allocateServer(servers.length-1, servers,app, appsMap)
         
        }
    });
    console.log(appsMap);
    return servers.length;
}
function allocateServer(i, servers, app , appsMap){
    servers[i].ram -= app.ram; 
    servers[i].cpu -= app.cpu; 
    servers[i].storage -= app.storage;
    appsMap[app.name] = i+1;
}

module.exports = {getServersNumber};