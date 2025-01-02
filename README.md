# Simple Next.js Starter Template

This is a simple starter template for Next.js projects. It includes basic configurations and components to help you get started quickly.

## Getting Started

### Prerequisites

- Node.js (>= 20.0.0)
- npm

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/MilanLund/nextjs-starter.git
    cd nextjs-starter
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create an `.env` file with the following content:

    ```env
    SITE_URL=http://localhost:3000
    ```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Running a Build

To create an optimized production build, run:

```bash
npm run build
```

This will generate the production-ready files in the `.next` directory.

To ru the production build:

```bash
npm run start
```

## Project Structure

- `components/`: Reusable React components.
- `lib/`: Library code including models and helpers.
- `app/`: Next.js pages.
- `public/`: Static assets.

## License

This project is licensed under the MIT License.

## Author

[Milan Lund](https://www.milanlund.com)
