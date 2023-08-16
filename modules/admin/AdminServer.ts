import { AdminController } from "./Controller/AdminController";
import { GAdminCfg } from './Config/AdminConfig';
import { IWebServer,GSmsTool,GCtrMgr } from 'cgserver';

//实现对controller的手动注册
export let GAdminServer:AdminServer=null
class AdminServer extends IWebServer
{
    constructor()
    {
        super()
        GAdminServer = this
    }
    start()
    {
        GAdminCfg.init()
        return super.start(GAdminCfg.webserver)
    }
    /**
     * 注册控制器
     * eg:GControllerMgr.registerController("Admin","System",SystemController)
     */
    protected _registerController()
    {
        GCtrMgr.registerController("Admin","Index",AdminController)
    }
    protected _registerRouter()
    {

    }
}
new AdminServer()