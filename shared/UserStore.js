import { Hub } from 'aws-amplify';

class UserStore  {

    constructor() {

        if(! UserStore.instance){
            this._userId = "ajmalbabu122@gmail.com";
            this.registerAuthEvents();
            UserStore.instance = this;
        }
       
        return UserStore.instance;

    }
 
    registerAuthEvents = () => {

        Hub.listen('auth', (data) => {
    
            // https://kula.blog/learnjs/destructuring_5/
            // const { payload: { data: { attributes: {email = "NO MATCH"} = {}} = {}} = {}} = data;
    
            const { payload }  = data;
    
            if(payload !== null && payload !== undefined) {
    
                if(payload.data !== null && payload.data !== undefined) {
    
                    if(payload.data.attributes !== null &&  payload.data.attributes !== undefined) {
                        console.log('email found and assigned as user id: ', payload.data.attributes.email);      
                            this._userId =  payload.data.attributes.email; // Since object.freeze was called, properties canot be changed. See https://www.youtube.com/watch?v=sJ-c3BA-Ypo&list=PLZlA0Gpn_vH_CthENcPCM0Dww6a5XYC7f&index=4  
                    }
                }
            }
    
            console.log('Current user id is: ', this._userId);
    
        })

    }

    getUserId() {
        return this._userId;
    }

}

const userStore = new UserStore();
Object.freeze(userStore);

export default userStore;

