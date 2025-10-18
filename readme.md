### Dockerizing the Application

Follow these steps to build and run the application using Docker:

---

**Build the image:**

```bash
docker build -t faizan/hikaru:0.1 .

```

**Create and run the container:**

```bash
docker run --name hikaru -p 8080:8080 faizan/hikaru:0.1

```

_Note: Please comment out the MongoDB connection code in server.ts for the above process._
