# Convosay

Convosay is a Next.js application that is currently under development. As of now the auth feature using Github and Google is provided using OAuth.

## Features

- Working user authentication through Google and Github providers
- Convex database to store registered users
- Project is created using Bun as package manager

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yogeshbisht/convosay.git
   cd convosay
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Copy the example environment file to a new `.env.local` file:

   ```bash
   cp env.example .env.local
   ```

   Then, fill in the values in the `.env.local` file:

   ```plaintext
   CONVEX_DEPLOYMENT=
   NEXT_PUBLIC_CONVEX_URL=
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Run convex database server (first you have to create a new convex db):**

   ```bash
   npx convex dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

**Sign up** to create a new account or **log in** if you already have one using either Github or Google Link.

## Contact
