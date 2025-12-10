@extends('\_layouts.master') @section('body\_class', 'documentation help') @section('title', 'API Method: Get Certificate - ZeroSSL') @section('canonical\_url', 'https://zerossl.com/documentation/api/get-certificate') @section('meta\_description', 'Learn how to get information about a specific SSL certificate using the Get Certificate endpoint.') @section('body')

@include('\_partials.documentation-sidebar', \['active\_article' => $active\_article\])

# [REST API](/documentation/api "ZeroSSL Documentation") Get Certificate

## Get CertificateHTTPS GET

To retrieve information about an existing certificate using the ZeroSSL API you will need to make an HTTPS GET request to the API's `certificates` and pass the given certificate ID (hash) to the URL inside the `{id}` parameter, as shown below.

**API Request URL:**

api.zerossl.com/certificates/{id}

**HTTPS GET Request Parameters:**

| Parameter | Description |
| --- | --- |
| `access_key` | `access_key`**\[Required\]** Use this parameter to specify your API access key. |
| `{id}` | `{id}`**\[Required\]** Use this parameter to specify your certificate ID / hash. |

**API Response:**

If your API request has been successful, you will receive a JSON API response containing all the details of your SSL certificate. For illustration purposes, you will find an example API response below.

{
"id": "a856a39a1c3ad0s8asa606g37667d221",
"type": "1",
"common\_name": "domain.com",
"additional\_domains": "www.domain.com",
"created": "2020-04-29 09:04:19",
"expires": "2020-07-28 00:00:00",
"status": "draft",
"validation\_type": null,
"validation\_emails": null,
"replacement\_for": "",
"fingerprint\_sha1": null,
"brand\_validation": null,
"signature\_algorithm\_properties": "sha384WithRSAEncryption:2048",
"validation": {
"email\_validation": {
"domain.com": \[
"admin@domain.com",
"administrator@domain.com",
"hostmaster@domain.com",
"postmaster@domain.com",
"webmaster@domain.com"
\]
},
"other\_methods": {
"domain.com": {
"file\_validation\_url\_http": "http://domain.com/.well-known/pki-validation/2449B.txt",
"file\_validation\_url\_https": "https://domain.com/.well-known/pki-validation/2449B.txt",
"file\_validation\_content": \[
"2B449B722B449B729394793947",
"comodoca.com",
"4bad7360c7076ba"
\],
"cname\_validation\_p1": "2B449B7293947.domain.com",
"cname\_validation\_p2": "2B449B7293947.23DD7293947.11DD7293941.ca.com"
},
"www.domain.com": {
"file\_validation\_url\_http": "http://www.domain.com/.well-known/pki-validation/2449B.txt",
"file\_validation\_url\_https": "https://www.domain.com/.well-known/pki-validation/2449B.txt",
"file\_validation\_content": \[
"2B449B722B449B729394793947",
"comodoca.com",
"4bad7360c7076ba"
\],
"cname\_validation\_p1": "2B449B7293947.www.domain.com",
"cname\_validation\_p2": "2B449B7293947.23DD7293947.11DD7293941.ca.com"   
            }
}
}
}

**Response Objects:**

| Parameter | Description |
| --- | --- |
| `id` | `id`Returns the internal certificate ID, also referred to as certificate hash. |
| `type` | `type`Returns a numeric ID to identify the certificate type. Possible values: `1` (90-day), `2` (90-day wildcard), `3` (90-day multi-domain), `4` (1-year), `5` (1-year wildcard), `6` (1-year multi-domain) |
| `common_name` | `common_name`Returns the common name (e.g. `domain.com`) of your certificate. |
| `additional_domains` | `additional_domains`Returns any additional domains (SANs) in your certificate. |
| `created` | `created`Returns the exact time (UTC) your certificate was created. |
| `expires` | `expires`Returns the exact time (UTC) your certificate will expire. |
| `status` | `status`Returns the current certificate status. Possible values: `draft`, `pending_validation`, `issued`, `revoked`, `cancelled`, `expired` |
| `validation_type` | `validation_type`Returns `null` if domain verification has not been initiated, or the selected verification type. Possible values: `EMAIL` (email verification), `CNAME_CSR_HASH` (CNAME verification), `HTTP_CSR_HASH` (HTTP file upload), `HTTPS_CSR_HASH` (HTTPS file upload) |
| `validation_emails` | `validation_emails`Returns one or a comma-separated list of selected verification emails if email verification is chosen for this certificate. |
| `replacement_for` | `replacement_for`Returns the ID (certificate hash) of the existing certificate this certificate is replacing as part of a renewal. |
| `fingerprint_sha1` | `fingerprint_sha1`The SHA-1 fingerprint of the certificate (if issued). \[Note: Added in autumn 2022, is `null` for older certificates.\] |
| `brand_validation` | `brand_validation`Usually `null` or `false` - only true for very few certificates where the domain has to be manually reviewed. |
| `signature_algorithm_properties` | `signature_algorithm_properties`Signature algorithm and key size for your certificate.  <br>  <br>Syntax: `[OpenSSL parsed signature algorithm]:[key size]`.  <br>  <br>Examples: `sha384WithRSAEncryption:2048`, `ecdsa-with-SHA384:256`.  <br>  <br>We get that information by best effort: It is `null` until a certificate has been issued and its signature algorithm properties have been determined. It can also be `null` for certificates being issued before December 2025, although we try to catch up. Furthermore, it can be `null` in case we are unable to retrieve the required information (can also be `unknown` or similar). |
| `validation` | `validation`Returns a series of sub-objects related to domain verification. |
| `email_validation` | `email_validation`Returns an array of eligible domain verification emails. |
| `other_methods` | `other_methods`Returns a series of sub-objects (one for each domain in your certificate) containing alternative verification methods. |
| `file_validation_url_http` | `file_validation_url_http`Returns the URL (http format) your verification file must be uploaded to as part of domain verification. |
| `file_validation_url_https` | `file_validation_url_https`Returns the URL (https format) your verification file must be uploaded to as part of domain verification. |
| `file_validation_content` | `file_validation_content`Returns the content your verification file must contain, consisting of three lines of plain-text. |
| `cname_validation_p1` | `cname_validation_p1`Returns the host-part (Name) of the CNAME-record that must be created as part of domain verification. |
| `cname_validation_p2` | `cname_validation_p2`Returns the value-part (Point To) of the CNAME-record that must be created as part of domain verification. |



[List Certificates](/documentation/api/list-certificates)

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