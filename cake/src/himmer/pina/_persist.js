export default {
    enabled: true,
    strategies: [
        {
            key: 'dan_vanlily_user',
            storage: sessionStorage, 
            paths: [ 'jwt' , 'user' ]
        }
    ]
}