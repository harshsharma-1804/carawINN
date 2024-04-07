const extractRefreshTokenFromCookies = () => {
    // Get the cookies string
    const cookies = document.cookie;
  
    // Split the cookies string into individual cookie key-value pairs
    const cookiePairs = cookies.split(';');
    console.log("Cookies: ", cookies);
  
    // Loop through each cookie pair to find the refresh token
    for (let pair of cookiePairs) {
      // Trim any leading or trailing whitespace
      pair = pair.trim();
  
      // Split the cookie pair into key and value
      const [name, value] = pair.split('=');
  
      // Check if the key is 'refreshToken'
      if (name === '_BINGNEWS') {
        // Return the value of the refreshToken
        return value;
      }
    }
  
    // Return null if refresh token not found in cookies
    return null;
  };

export default extractRefreshTokenFromCookies;