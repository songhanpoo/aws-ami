
# AMI AWS

This is api effect to AMI AWS

## API Reference

#### Get all items

```http
  POST /v1/aws/ami
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `region` | `string` | **Required**. Region aws |
| `apiVersion` | `string` | **Required**. Your Version API key aws |
| `InstanceId` | `string` | **Required**. Your Instance Id API key aws |
| `Name` | `string` | **Required**. Your Name ami aws |
| `Description` | `string` | This Description your ami aws |

  
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`: Port app running

`HOST`: default 0.0.0.0 running with any adapter network 

`AWS_ACCESS_KEY_ID` : access key from credentials aws
`AWS_SECRET_ACCESS_KEY`: secret key from credentials aws
`AWS_DEFAULT_REGION`: region aws

  
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  yarn
```

```bash
  mv .env.example .env
```
You need input exactly your secret key, access key for use api

Start the server

```bash
  yarn dev
```

  
## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

  
## Support

For support, email songhanpoo@gmail.com.

  
## Authors

- [@songhanpoo](https://www.github.com/songhanpoo)

  