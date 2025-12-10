@extends('\_layouts.master') @section('body\_class', 'documentation help') @section('title', 'API Method: Create Certificate - ZeroSSL') @section('canonical\_url', 'https://zerossl.com/documentation/api/create-certificate') @section('meta\_description', 'Learn how to automate SSL certificate order and creation using the ZeroSSL certificate management REST API.') @section('body')

@include('\_partials.documentation-sidebar', \['active\_article' => $active\_article\])

# [REST API](/documentation/api "ZeroSSL Documentation") Create Certificate

## Create CertificateHTTPS POST

To create a new SSL certificate using the ZeroSSL API you will need to make an HTTPS POST request to the API's `certificates` endpoint. Below you will find the API request URL you will need to make your request to as well as all required and optional request parameters.

**API Request URL:**

api.zerossl.com/certificates

**HTTPS GET Request Parameters:**

| Parameter | Description |
| --- | --- |
| `access_key` | `access_key`**\[Required\]** Use this parameter to specify your API access key. |

**HTTPS POST Request Parameters:**

| Parameter | Description |
| --- | --- |
| `certificate_domains` | `certificate_domains`**\[Required\]** Use this parameter to specify one or multiple comma-separated domains (or IP addresses) to be secured by your certificate. The first element of the list should be identical to the CN (common name) specified within your CSR. |
| `certificate_csr` | `certificate_csr`**\[Required\]** Use this parameter to specify a _certificate signing request (CSR)_ for your certificate. The CSR has to be _2048-bit or 4096-bit encrypted_, otherwise it is rejected or might cause other issues. The CSRs' CN (common name) should be identical to the first element in your `certificate_domains` parameter.  <br>  <br>_It is highly recommended to use a fresh, unique and correct CSR for each and every certificate_ (for security reasons and in order to avoid any problems with the certificate).  <br>  <br>Valid examples for the CSRs' CN (common name): `example.com`, `127.0.0.1`. |
| `certificate_validity_days` | `certificate_validity_days` For creating 1-year certificates specify `365` here, the default is `90`. Other values are currently not supported. |
| `strict_domains` | `strict_domains` Set this parameter to `1` in order to create a certificate exactly for the domains passed in the `certificate_domains` parameter. This means the certificates' _Subject Alternative Names (SAN)_ will not include any alternative DNS entries.  <br>  <br>In practice this mostly affects _www./non-www._ variants: While most users prefer to cover and validate both variants by default, you might want to create a certificate which covers exactly one of those variants. |
| `replacement_for_certificate` | `replacement_for_certificate` Certificate hash of the certificate to be replaced. The certificate to be replaced must be in status `issued` or `expiring_soon`. You can only create one replacement certificate for an existing certificate. This parameter is entirely optional and not yet widely adapted. In the future it might be used in the UI. |

Breaking change (BC) for few user agents The ZeroSSL REST API redirects HTTP requests to HTTPS with a 301 permanent redirect. According to the specification 301 redirects may not change the request method. Some clients which are not sticking to the specification will change a POST into a GET request to the same URL and this can lead to unexpected results. Make sure to use the correct request method. More information: [Mozilla HTTP Status Code 301](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301).

CSR is required Please note that in order for your certificate to be created you will be required to specify an existing CSR using the `certificate_csr` parameter. [Here's a tool](https://csrgenerator.com/ "Generate CSR") you can use to generate a new CSR.

Validate your CSR If you want to validate your CSR first you can use the [validate CSR endpoint](/documentation/api/validate-csr "Validate CSR") for the check.



**API Response:**

If your API request has been successful, you will receive a JSON API response containing all the details of your newly created SSL certificate. For illustration purposes, you will find an example API response below.

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
"signature\_algorithm\_properties": null,
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
| `type` | `type`Returns a numeric ID to identify the certificate type. Possible values: `1` (90-day), `2` (90-day wildcard), `3` (90-day multi-domain), `4` (1-year), `5` (1-year wilcard), `6` (1-year multi-domain) |
| `common_name` | `common_name`Returns the common name (e.g. `domain.com`) of your certificate. |
| `additional_domains` | `additional_domains`Returns any additional domains (SANs) in your certificate. |
| `created` | `created`Returns the exact time (UTC) your certificate was created. |
| `expires` | `expires`Returns the exact time (UTC) your certificate will expire. |
| `status` | `status`Returns the current certificate status. Possible values: `draft`, `pending_validation`, `issued`, `cancelled`, `revoked`, `expired` |
| `validation_type` | `validation_type`Returns `null` if domain verification has not been initiated, or the selected verification type. Possible values: `EMAIL` (email verification), `CNAME_CSR_HASH` (CNAME verification), `HTTP_CSR_HASH` (HTTP file upload), `HTTPS_CSR_HASH` (HTTPS file upload) |
| `validation_emails` | `validation_emails`Returns one or a comma-separated list of selected verification emails if email verification is chosen for this certificate. |
| `replacement_for` | `replacement_for`Returns the ID (certificate hash) of the existing certificate this certificate is replacing as part of a renewal. |
| `validation` | `validation`Returns a series of sub-objects related to domain verification. |
| `email_validation` | `email_validation`Returns an array of eligible domain verification emails. |
| `other_methods` | `other_methods`Returns a series of sub-objects (one for each domain in your certificate) containing alternative verification methods. |
| `file_validation_url_http` | `file_validation_url_http`Returns the URL (http format) your verification file must be uploaded to as part of domain verification. |
| `file_validation_url_https` | `file_validation_url_https`Returns the URL (https format) your verification file must be uploaded to as part of domain verification. |
| `file_validation_content` | `file_validation_content`Returns the content your verification file must contain, consisting of three lines of plain-text. |
| `cname_validation_p1` | `cname_validation_p1`Returns the host-part (Name) of the CNAME-record that must be created as part of domain verification. |
| `cname_validation_p2` | `cname_validation_p2`Returns the value-part (Point To) of the CNAME-record that must be created as part of domain verification. |

Certificate Issuance In order for your certificate to be issued, please note that you will need to complete one of the 3 available domain verification methods: Email Verification, Verification via CNAME Record, Verification via HTTP File Upload or Verification via HTTPS File Upload.



[Verify Domains](/documentation/api/verify-domains)

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