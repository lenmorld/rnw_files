# sample HTTP requests to jsonplaceholder.typicode.com

$ curl https://jsonplaceholder.typicode.com/posts/1

$ curl https://jsonplaceholder.typicode.com/posts

$ curl -X POST -H "Content-Type: application/json" --data '{"title": "foo", "body": "bar", "userId": 1}' https://jsonplaceholder.typicode.com/posts/

$ curl -X PUT -H "Content-Type: application/json" --data '{"title": "foo", "body": "bar", "userId": 2}' https://jsonplaceholder.typicode.com/posts/1

$ curl -X DELETE https://jsonplaceholder.typicode.com/posts/1
