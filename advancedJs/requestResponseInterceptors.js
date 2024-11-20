//Add a request and response interceptor method to fetch that can be used to monitor each request and response.

class MakeApi {
  async fetch(url = null, body = {}, options = {}) {
    const request = this.requestInterceptor(Array.from(arguments));
    console.log(request);
    const response = await fetch(...request);
    const parsedResponse = this.responseInterceptor(response);
    return parsedResponse;
  }

  requestInterceptor(...args) {
    console.log("Request Intercepted !!! ", args[0]);
    const request = Array.from(args);
    request[0] = request[0] + "8";
    return request;
  }

  responseInterceptor(response) {
    console.log("Response Intercepted !!! ");
    return response.json();
  }
}

const makeApi = new MakeApi();

makeApi
  .fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data));
