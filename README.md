# SpaceBnB Reviews Service

> This service displays the reviews for each rental property and lists the average rating given by people who have stayed.

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> To seed the database with dummy data, enter the dataGenerators folder and first run seedProperties.js to populate MongoDB with the properties, then run seedReviews.js to add randomized reviews to each property.

> To change the number of properties (for dummy data):
-In dataGenerators/seedProperties.js, change the number in line 3 from 101 to your desired number + 1. Then, in dataGenerators/seedReviews.js, change the value of "max" on line 18 to match your desired number.

>To change the number of reviews (for dummy data):
-In datGenerators/seedReviews.js, change the number on lime 87 from 1001 to your desired number + 1. Suggested number = your number of properties * 10.

> App.jsx (in client/src/components) has the option to comment/uncomment two different URLs for each of the ajax requests. This allows you to easily switch between playing on localhost or another server.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

