import jwtDecode from 'jwt-decode';


export function decodeAuthToken(accessToken: string) {
    
        const authTokenData: string = jwtDecode(accessToken);
        return authTokenData;
    
   
  }