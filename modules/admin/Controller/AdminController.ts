import { BaseAdminController } from './BaseAdminController';
import { AdminValidate} from 'cgserver';

export class AdminController extends BaseAdminController
{
    @AdminValidate
    async showIndex()
    {
        return this.show()
    }
}