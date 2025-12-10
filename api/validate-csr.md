@extends('\_layouts.master') @section('body\_class', 'documentation help') @section('title', 'API Method: Validate CSR - ZeroSSL') @section('canonical\_url', 'https://zerossl.com/documentation/api/validate-csr') @section('meta\_description', 'You can use the ZeroSSL API to validate a certificate signing request request (CSR).') @section('body')

@include('\_partials.documentation-sidebar', \['active\_article' => $active\_article\])

# [REST API](/documentation/api "ZeroSSL Documentation") Validate CSR

## Validate certificate signing request (CSR)HTTPS POST

You might want to validate a certificate signing request (CSR) e.g. before using it in a certificate creation request.

**API Request URL:**

api.zerossl.com/validation/csr

**HTTPS GET Request Parameters:**

| Parameter | Description |
| --- | --- |
| `access_key` | `access_key`**\[Required\]** Use this parameter to specify your API access key. |

**HTTPS POST Request Parameters:**

| Parameter | Description |
| --- | --- |
| `csr` | `csr`**\[Required\]** The CSR you want to validate. |

**API Response:**

If your CSR is valid, you will receive the following JSON:

{
"valid": true,
"error": null,
"csrResponse": \[
"2048",
"sigalg=sha256WithRSAEncryption"
\]
}

**Response Objects:**

| Parameter | Description |
| --- | --- |
| `valid` | `valid`Returns `true` to indicate your CSR is valid, false otherwise. |
| `error` | `error`Returns `null` in case the CSR was successfully validated, error code and description otherwise. |
| `csrResponse` | `csrResponse`Returns an array containing the key size and signature algorithm in case the CSR was successfully validated, `null` otherwise. |



[Error codes](/documentation/api/error-codes)

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