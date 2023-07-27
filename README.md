# Promptopia - AI Prompting Tool

![Next.js](https://img.shields.io/badge/Next.js-13.4.10-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1.6-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.3-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-5.7.0-green)

Promptopia is an AI-powered prompting tool that allows users to discover, create, and share useful prompts. This application was created as a learning project to explore and gain experience in Next.js 13, and further my expertise in TypeScript, Tailwind CSS, and MongoDB.


## Local Setup

To run Promptopia locally, follow these steps:

1. Clone the repository.
2. Create a .env file and paste the contents of the .env.example file into it.
3. Set up a MongoDB cluster for the application to connect to. Instructions for setting up a MongoDB cluster can be found [here](https://www.mongodb.com/basics/clusters/mongodb-cluster-setup).
4. Obtain the connection string for the MongoDB cluster and add it to your .env file:
```.env
MONGODB_URI=<CONNECTION_STRING>
```
5. Create a GCP project and generate an OAuth 2.0 client ID. Follow the instructions here to create the client ID.
6. Add the client ID and client secret to the relevant .env file variables:
```.env
GOOGLE_CLIENT_ID=<YOUR_CLIENT_ID>
GOOGLE_CLIENT_SECRET=<YOUR_CLIENT_SECRET>
```
7. Generate a secure NEXTAUTH_SECRET by running the following command in your terminal:
```terminal
openssl rand -base64 32
```
Copy the generated value and use it for NEXTAUTH_SECRET in your .env file:
```.env
NEXTAUTH_SECRET=<GENERATED_SECRET>
```
8. Install project dependencies:
```
npm install
```
9. Build and start the app:
```
npm run build
npm start
```

## Key Takeaways

### 1. Simplified Project Setup

Next.js provided a ready-to-use project structure, enabling me to focus more on the application's development rather than getting lost in complex configurations. This simplicity allowed for a smoother development experience.

### 2. Server-side Rendering (SSR)

Leveraging Next.js's built-in support for SSR significantly improved the initial page load times. With pre-rendered pages delivered from the server, the application offers faster content delivery, better SEO performance, and a more seamless user experience, particularly on slower networks or devices.

### 3. Automatic Code Splitting

Next.js's automatic code splitting ensures that only the necessary JavaScript and CSS files are served to the client based on the requested page. This efficient bundling leads to quicker page loads and enhanced overall performance.

### 4. Improved SEO

Combining SSR and static site generation (SSG) in Next.js greatly improved the application's search engine optimisation. The pre-rendered pages are more effectively crawled and indexed by search engines, resulting in better search rankings and increased discoverability.




