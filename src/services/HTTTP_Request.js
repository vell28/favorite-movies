// @flow
import { mockError } from '../errors';

export default function HTTP_Request ( method:string, url:string, data?:any) {
    return fetch(`${url}`, {
            method : `${method}`,
            if(data) {
                body: JSON.stringify(data)
            }
    }).then(
        (response) => {
            if(response.ok) {
                return response.json();
            }
            throw new Error();
        }
    ).then(
        (response) => { 
            return response;
        }
    ).catch(
        (error) => {
            return error = {
                message: mockError
            }
        }
    )
}
