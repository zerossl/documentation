@extends('\_layouts.master') @section('body\_class', 'documentation help') @section('title', 'ACME Documentation: Generate EAB credentials via API') @section('canonical\_url', 'https://zerossl.com/documentation/acme/generate-eab-credentials') @section('meta\_description', 'You can use this API endpoint to generate EAB credentials for use with an ACME client of your choice.') @section('body')

@include('\_partials.documentation-sidebar', \['active\_article' => $active\_article\])

# [REST API](/documentation/acme "ZeroSSL Documentation") Generate ACME EAB Credentials

## Generate ACME EAB Credentials via APIHTTPS POST

To generate a set of ACME EAB credentials using the ZeroSSL API you will need to make an HTTPS POST request to the API endpoint below.

Please Note Since March 2022 all EAB credentials are **reusable**. One set of EAB credentials should be enough for most use cases. EAB credentials are limited to a maximum per user/per day.

**API Request URL:**

api.zerossl.com/acme/eab-credentials

**HTTPS GET Request Parameters:**

| Parameter | Description |
| --- | --- |
| `access_key` | `access_key`**\[Required\]** Use this parameter to specify your API access key. |

**API Response:**

If your API request has been successful, you will receive a simple JSON response indicating that your API request was successful and containing your ACME EAB credentials. Find an example API response below.

{
"success": 1
"eab\_kid": "GD-VvWydSVFuss\_GhBwYQQ",
"eab\_hmac\_key": "MjXU3MH-Z0WQ7piMAnVsCpD1shgMiWx6ggPWiTmydgUaj7dWWWfQfA"
}

**Response Objects:**

| Parameter | Description |
| --- | --- |
| `success` | `success`Returns `1` to indicate that your API request was successful. |
| `eab_kid` | `eab_kid`Returns your EAB KID value. |
| `eab_hmac_key` | `eab_hmac_key`Returns your EAB HMAC key value. |



[Error Codes](/documentation/acme/error-codes)

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