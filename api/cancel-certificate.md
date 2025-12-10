@extends('\_layouts.master') @section('body\_class', 'documentation help') @section('title', 'API Method: Cancel Certificate - ZeroSSL') @section('canonical\_url', 'https://zerossl.com/documentation/api/cancel-certificate') @section('meta\_description', 'Learn how to cancel an existing SSL certificate using the ZeroSSL API.') @section('body')

@include('\_partials.documentation-sidebar', \['active\_article' => $active\_article\])

# [REST API](/documentation/api "ZeroSSL Documentation") Cancel Certificate

## Cancel CertificateHTTPS POST

To cancel an existing certificate using the ZeroSSL API you will need to make an HTTPS POST request to the API endpoint below and specify your certificate using its ID (hash) inside the URL's `{id}` parameter, as shown below.

Limitations Please note that only certificates with status `draft` or `pending_validation` can be cancelled.

**API Request URL:**

api.zerossl.com/certificates/{id}/cancel

**HTTPS GET Request Parameters:**

| Parameter | Description |
| --- | --- |
| `access_key` | `access_key`**\[Required\]** Use this parameter to specify your API access key. |
| `{id}` | `{id}`**\[Required\]** Use this parameter to specify your certificate ID (hash). |

**API Response:**

If your API request has been successful, you will receive a simple JSON response indicating that your API request was successful.

{
"success": 1
}

**Response Objects:**

| Parameter | Description |
| --- | --- |
| `success` | `success`Returns `1` to indicate that your API request was successful. |



[Validate CSR](/documentation/api/validate-csr)

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