// import { configure } from 'mobx';
import { createContext } from 'react';
import ActivityStore from './activityStore';
import CommonStore from './commonStore';
import ModalStore from './modalStore';
import ProfileStore from './profileStore';
import UserStore from './userStore';

// === mobx === //
// configure({ enforceActions: 'always' });


export class RootStore {
    activityStore: ActivityStore;
    userStore: UserStore;
    commonStore: CommonStore;
    modalStore: ModalStore;
    profileStore: ProfileStore;

    //me:
    // motofyStore: MotofyStore

    constructor () {
        this.activityStore = new ActivityStore(this);
        this.userStore = new UserStore(this);
        this.commonStore = new CommonStore(this);
        this.modalStore = new ModalStore(this);
        this.profileStore = new ProfileStore(this);

        // me:
        // this.motofyStore = new MotofyStore(this);
    }
}

export const RootStoreContext = createContext(new RootStore());