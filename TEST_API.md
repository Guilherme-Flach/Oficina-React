# Testing the API

Start PHP server:

```
php -S localhost:8080 -t api
```

All curl commands use `-c cookies.txt -b cookies.txt` to persist PHP session between requests.

Test endpoints:

```bash
# List messages
curl -c cookies.txt -b cookies.txt http://localhost:8080/api/messages

# Create message
curl -c cookies.txt -b cookies.txt -X POST http://localhost:8080/api/messages \
  -H "Content-Type: application/json" \
  -d '{"title":"Test","body":"Hello world"}'

# List again (should show 2)
curl -c cookies.txt -b cookies.txt http://localhost:8080/api/messages

# Update message (id 1)
curl -c cookies.txt -b cookies.txt -X PUT http://localhost:8080/api/messages/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated","body":"Changed body"}'

# Delete message (id 1)
curl -c cookies.txt -b cookies.txt -X DELETE http://localhost:8080/api/messages/1

# List again (should show only test message)
curl -c cookies.txt -b cookies.txt http://localhost:8080/api/messages
```
