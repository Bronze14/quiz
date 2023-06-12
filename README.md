# Quizzical

Quizzical is a quiz application built using React.js, HTML, and CSS. The project utilizes the React Split library for responsive layouts and fetches quiz questions from the Open Trivia Database API. You can view the live preview of the application [here](https://quizzl.netlify.app/).

## Prerequisites

Before running the project, make sure you have the following dependencies installed:

- Node.js (version v18.13.0)
- npm (Node Package Manager, version 8.19.3)

## Getting Started

To get started with the project, follow the steps below:

1. Clone the repository:

```
git clone https://github.com/Bronze14/quiz.git
```

2. Navigate to the project directory:

```
cd quiz
```

3. Install the dependencies:

```
npm install
```

## Development

To start the development server, run the following command:

```
npm start
```

This will launch the development server and open the application in your default browser. Any changes you make to the source code will automatically update the application.

## Build

To build the project for production, use the following command:

```
npm run build
```

This will generate a `build` directory with optimized and minified files ready for deployment.

## Deployment

To deploy the project, you can use any hosting platform of your choice. One option is to use Netlify:

1. Create an account on [Netlify](https://www.netlify.com/) (if you don't have one already).

2. Connect your project repository to Netlify.

3. Set the build command to:

```
npm run build
```

4. Set the publish directory to:

```
build
```

5. Click on the "Deploy" button.

Netlify will automatically build and deploy your project whenever you push changes to the repository.

## Contributing

Contributions to the project are welcome. If you find any issues or have suggestions for improvements, feel free to open a pull request or submit an issue in the project repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- This project was built using React.js (https://reactjs.org/).
- Quiz questions are fetched from the Open Trivia Database API (https://opentdb.com/).
- The React Split library (https://github.com/tomkp/react-split) is used for responsive layouts.
