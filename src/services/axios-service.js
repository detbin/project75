import Apirequest from '../utils/config/axios.config';
export function getChucknorris(){
    return Apirequest.get('/',{
        validateStatus: function (status) {
            return status < 500; // reserve only if status is less than 500
          }
    });
}