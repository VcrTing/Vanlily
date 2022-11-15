export default {
    enabled: true,
    strategies: [
        {
            key: 'dan_vanlily',
            storage: sessionStorage, 
            paths: [ 'jwt' , 'user' ]
        }
    ]
}