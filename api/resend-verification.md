@extends('\_layouts.master') @section('body\_class', 'documentation help') @section('title', 'API Method: Resend Verification - ZeroSSL') @section('canonical\_url', 'https://zerossl.com/documentation/api/resend-verification') @section('meta\_description', 'You can use the ZeroSSL API to resend domain verification emails for each domain in your certificate.') @section('body')

@include('\_partials.documentation-sidebar', \['active\_article' => $active\_article\])

# [REST API](/documentation/api "ZeroSSL Documentation") Resend Verification

## Resend Verification EmailHTTPS POST

To resend all verification emails for a specific certificate using the ZeroSSL API, simply make an HTTPS GET request to the API endpoint below, specifying your certificate using its ID (hash) inside the URL's `{id}` parameter, as shown below.

Only for Email Verification Please note that this API endpoint can only be used if Email Verification is your selected domain verification method.

**API Request URL:**

api.zerossl.com/certificates/{id}/challenges/email

**HTTPS GET Request Parameters:**

| Parameter | Description |
| --- | --- |
| `access_key` | `access_key`**\[Required\]** Use this parameter to specify your API access key. |
| `{id}` | `{id}`**\[Required\]** Use this parameter to specify your certificate ID / hash. |

**API Response:**

If your API request has been successful, you will receive a simple JSON response indicating that your API request was successful.

{
"success": 1
}

**Response Objects:**

| Parameter | Description |
| --- | --- |
| `success` | `success`Returns `1` to indicate that your API request was successful. |



[Revoke Certificate](/documentation/api/revoke-certificate)

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