@extends('\_layouts.master') @section('body\_class', 'documentation help') @section('title', 'API Method: Download Certificate ZIP - ZeroSSL') @section('canonical\_url', 'https://zerossl.com/documentation/api/download-certificate') @section('meta\_description', 'Learn how to download certificate files as ZIP using the ZeroSSL API.') @section('body')

@include('\_partials.documentation-sidebar', \['active\_article' => $active\_article\])

# [REST API](/documentation/api "ZeroSSL Documentation") Download Certificate (ZIP)

## Download Certificate (ZIP)HTTPS GET

To download a certificate as a ZIP-file using the ZeroSSL API, you can use the `download` endpoint below and pass the given certificate ID (hash) to the API to the URL inside the `{id}` parameter, as shown below.

**API Request URL:**

api.zerossl.com/certificates/{id}/download

**HTTPS GET Request Parameters:**

| Parameter | Description |
| --- | --- |
| `access_key` | `access_key`**\[Required\]** Use this parameter to specify your API access key. |
| `{id}` | `{id}`**\[Required\]** Use this parameter to specify your certificate ID / hash. |
| `include_cross_signed` | `include_cross_signed` Set this parameter to `1` to include the cross signed certificate in the response [(further information)](https://help.zerossl.com/hc/en-us/articles/360060198034-Legacy-Client-Compatibility-Cross-Signed-Root-Certificates "ZeroSSL Help Center: Legacy Client Compatibility Cross-Signed Root Certificates"). |

Please Note Please note that only issued certificates can be downloaded.

**API Response:**

If your API request is successful, the ZeroSSL API will return your certificate files wrapped in a ZIP-file.



[Download (inline)](/documentation/api/download-certificate-inline)

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