# Dockerizing-NodeJS-Application

**Note :** To run this app locally, clone the repository and make sure you have docker installed locally

### Building images : 

```bash
docker build -t image_name .
```

Now if you try to look at your images, you should notice a new image created

```bash
docker images
```

### Running images : 

```bash
docker run -p 3000:3000 image_name
```