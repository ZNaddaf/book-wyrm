docker build --rm -t auth0-react-01-login .
docker run --init -p 3001:3001 -it auth0-react-01-login
