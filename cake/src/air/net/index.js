import _method from './_method'
import _auth from './_auth'

export default {
    /*
    _get: _method._get,
    get: _method.get,
    get_one: _method.get_one,
    
    put: _method.put,
    post: _method.post,
    */
    ..._auth,
    ..._method,
    token: (vue) => vue.$store.state.token,
}