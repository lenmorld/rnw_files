## sample HTTP requests to jsonplaceholder.typicode.com

$ curl https://jsonplaceholder.typicode.com/posts/1

$ curl https://jsonplaceholder.typicode.com/posts

$ curl -X POST -H "Content-Type: application/json" --data '{"title": "foo", "body": "bar", "userId": 1}' https://jsonplaceholder.typicode.com/posts/

$ curl -X PUT -H "Content-Type: application/json" --data '{"title": "foo", "body": "bar", "userId": 2}' https://jsonplaceholder.typicode.com/posts/1

$ curl -X DELETE https://jsonplaceholder.typicode.com/posts/1



## sample HTTP requests on our app

curl http://localhost:4000/list/

curl http://localhost:4000/list/0c4IEciLCDdXEhhKxj4ThA

curl http://localhost:4000/list/something_that_doesnt_exist

curl -X POST http://localhost:4000/list -H "Content-Type: application/json" --data '{"title":"Castle on the Hill", "artist":"Ed Sheran", "album":"Divide", "id":"6PCUP3dWmTjcTtXY02oFdT"}'

curl -X PUT http://localhost:4000/list/6PCUP3dWmTjcTtXY02oFdT -H "Content-Type: application/json" --data '{"title":"Castle on the Hill", "artist":"Ed Sheeeran", "album":"Divide", "id":"6PCUP3dWmTjcTtXY02oFdT"}'

curl -X DELETE http://localhost:4000/list/6PCUP3dWmTjcTtXY02oFdT

