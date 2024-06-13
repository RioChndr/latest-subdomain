# Latest Subdomain

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Description

The "latest subdomain" package is a powerful tool that allows you to extract the latest subdomain from a given URL. With its simple and intuitive interface, you can easily integrate this functionality into your projects. Whether you're building a web application, analyzing traffic data, or implementing custom routing logic, the "latest subdomain" package has got you covered. Say goodbye to manual parsing and let this package handle all the heavy lifting for you. Experience the convenience and efficiency of the "latest subdomain" package today!

## Features

- extract latest subdomain

## Usage

To use the "latest subdomain" module, you can follow these steps:

1. Install the module globally by running the following command:
  ```shell
  npx jsr @riochndr/latest-subdomain
  ```

2. Import the module in your JavaScript file:
  ```javascript
  import latestSubdomain from '@riochndr/latest-subdomain'
  ```

3. Use the `latestSubdomain` function to get the latest subdomain:
  ```javascript
  const subdomain = latestSubdomain('foo.bar.bar.example.com', {parentDomain: 'bar.bar.example.com'});
  console.log('Latest subdomain:', subdomain);
  // Latest subdomain: foo
  ```

  The `latestSubdomain` function returns the latest subdomain

## Contributing

If you would like to contribute to the "latest subdomain" project, you can follow these steps:

1. Fork the repository on GitHub.
2. Clone the forked repository to your local machine.
3. Create a new branch for your changes.
4. Make your changes and commit them.
5. Push the changes to your forked repository.
6. Submit a pull request to the original repository.

We appreciate any contributions to the project!

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or suggestions regarding the "latest subdomain" project, you can reach out to us through the following channels:

- Email: me.riochndr@gmail.com
- Twitter: [@me_riochndr](https://twitter.com/me_riochndr)