@extends('\_layouts.master') @section('body\_class', 'documentation help') @section('title', 'API Documentation - ZeroSSL') @section('canonical\_url', 'https://zerossl.com/documentation/api') @section('meta\_description', 'Browse the ZeroSSL API documentation with simple integration guides for creating and managing certificates, supporting PHP, JS, Python, Node and Java.') @section('body')

@include('\_partials.documentation-sidebar', \['active\_article' => $active\_article\])

# [Documentation](/documentation/api "ZeroSSL Documentation") REST API

## Getting Started

ZeroSSL makes it easy to create, install and manage SSL certificates of any kind by offering an easy-to-use user interface with calear instructions and plenty of automation in the background. To better serve customers who are looking to put SSL management on autopilot completely, we are offering a full-fledged SSL REST API that will allow you to automate all the actions our UI supports and perform them using a secure, fast and straightforward API interface.

## Base URL

API requests are made using a simple API base URL, variable endpoints and requests using **HTTPS** GET and POST. No matter which API endpoint you are using, the value below will your base URL:

api.zerossl.com

## HTTPS redirection

The ZeroSSL API redirects HTTP to HTTPS for security reasons. We recommend using HTTPS directly for your requests in order to avoid any redirection issues.

## Access Key

Each user account is assigned a unique API access key, which must be passed to the API using a simple HTTPS GET request parameter called `access_key`. You will find your API access key in the [Developer section]({{ $page->appBaseUrl }}/developer "ZeroSSL Developer Console") of your ZeroSSL management console.

You can find an example URL carrying an API access key below:

api.zerossl.com/example\_endpoint**?access\_key=EXAMPLE\_KEY**

Please note that the values `example_endpoint` and `EXAMPLE_KEY` will need to be replaced in order to work.

## Methods

The ZeroSSL API currently supports around 10 methods you can use to create, verify, download and otherwise existing or new SSL certificates. Some methods are making use of HTTPS GET parameters, others require HTTPS POST parameters in order to work.

To get started right away, please find a list of available API methods below:

*   [Create Certificate](/documentation/api/create-certificate "API Method: Create Certificate")
*   [Verify Domains](/documentation/api/verify-domains "API Method: Verify Domains")
*   [Download Certificate (.zip)](/documentation/api/download-certificate "API Method: Download Certificate (inline)")
*   [Download Certificate (inline)](/documentation/api/download-certificate-inline "API Method: Download Certificate (.zip)")
*   [Get Certificate](/documentation/api/get-certificate "API Method: Get Certificate")
*   [List Certificates](/documentation/api/list-certificates "API Method: List Certificates")
*   [Get Verification Status](/documentation/api/verification-status "API Method: Get Verification Status")
*   [Resend Verification Email](/documentation/api/resend-verification "API Method: Resend Verification Email")
*   [Cancel Certificate](/documentation/api/cancel-certificate "API Method: Cancel Certificate")

## Alternative: Send JSON requests

Instead of using HTTP GET or POST parameters, you can submit JSON in every API request. The parameters are exactly the same as described in the API documentation, the JSON has to be in the request body.

Allowed request content In certain endpoints we require you to send lists as comma-seperated strings. Currently, this also applies to JSON requests, you can **not send arrays** instead (yet).

Header required

If you are submitting a JSON request it is mandatory to set the `Content-Type: application/json` header.

**JSON request body sample for [Create Certificate](https://zerossl.com/documentation/api/create-certificate/):**

{
"certificate\_domains": "zerossl.dev",
"certificate\_validity\_days": 90,
"certificate\_csr": "CSR",
"strict\_domains": 1
}


New feature, added Q2, 2023.

## API integrator information

Read this section carefully if you are going to automate processes using our API for instance by writing your own scripts ([Sample API integration](https://github.com/zerossl/cli-client)).

#### API changes

Sometimes new functionality is added to the ZeroSSL API, and in rare cases the functionality of endpoints may change a little. The ZeroSSL API basically follows the rules of the **tolerant reader pattern**. If you implement the ZeroSSL API in your web application your web application should be _tolerant_ in the following regards:

*   **Added attributes:** Additional attributes might be added to existing JSON objects
*   **Endpoints:** New endpoints might be published over time
*   **Enumerations:** Additional options might be added over time
*   **Response codes:** The HTTP response codes in case of API errors (\`4xx\` or \`5xx\`) might change in rare cases (in case of success the response code is always HTTP 200)
*   **Typing:** In very rare cases we might change the returned type within a JSON response (e.g. integer instead of string). Please typecast on your side just to be sure nothing breaks.

In general the current API is treated as conservative as possible, and we try to do as few changes as possible. Endpoints as well as attributes shall never be removed. Anyway try to be tolerant in your implementations.

#### Proper use of the API

The ZeroSSL API is protected against misuse. Write appropriate integrations which use the ZeroSSL API in a reasonable way. In case of heavy misuse - which endangers our systems' functionality and therefore other users - you might get blocked (temporarily or even permanently).



[Create Certificate](/documentation/api/create-certificate)

Blue Notice Blue Note: Information

Yellow Notice Yellow Note: Information

Red Notice Red Note: Information

*   List item
*   List item
*   List item

1.  List item
2.  List item
3.  List item

*   [List item](#)
*   [List item](#)
*   [List item](#)

`Code lone-standing`

`Code in paragraph`

\*/ ?>

@endsection