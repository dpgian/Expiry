import axios from 'axios'

export default {
    getItems: function() {
        return axios.get('/api/items', {
            headers: { token: window.localStorage.getItem('token')} 
        })
    },
    getItem: function(id) {
        return axios.get(`/api/items/${id}`)
    },
    deleteItem: function(id) {
        return axios.delete(`/api/items/${id}`)
    },
    saveItem: function(itemData) {
        return axios.post(`/api/items`, itemData)
    },
    registerStore: function(storeData) {
        return axios.post(`/api/store`, storeData)
    },
    logIn: function(storeData) {
        return axios.post(`/api/store/login`, storeData)
    },
    getStore: function(storeName) {
        return axios.get(`/api/store`, {
            params: {
              name: storeName
            }
        }
    )
    }
}