export default [
  {
    ID: 'worker-core/aes/context/create/success',
    Description: 'The number of AES contexts created successfully',
    Label: 'AES Context Creation Successes',
    Keys: ['node']
  },
  {
    ID: 'worker-core/aes/context/create/failure',
    Description: 'The number of failures while creating an AES context',
    Label: 'AES Context Creation Failures',
    Keys: ['node']
  },
  {
    ID: 'worker-core/aes/context/destroy/success',
    Description: 'The number of AES contexts destroyed successfully',
    Label: 'AES Contexts Destruction Successes',
    Keys: ['node']
  },
  {
    ID: 'worker-core/aes/context/destroy/failure',
    Description: 'The number of failures while destroying AES context',
    Label: 'AES Contexts Destruction Failures',
    Keys: ['node']
  },
  {
    ID: 'worker-core/control-messages-sent',
    Description: 'The number of control messages sent to data cores',
    Label: 'Control Messages Sent',
    Keys: ['node']
  },
  {
    ID: 'worker-core/packet-processing-utilization',
    Description: 'The utilization percentage of a packet processing core',
    Label: 'Packet Processing Core Utilization',
    Keys: ['node']
  },
  {
    ID: 'worker-core/process-loop-exception',
    Description: 'The number of worker core process loop exceptions',
    Label: 'Worker Core Process Loop Exceptions',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/received/interface-success',
    Description: 'The number of packets received from the interface',
    Label: 'Packets Received from Interface',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/received/control-success',
    Description: 'Number of control packets recieved',
    Label: 'Control Packets Received',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/received/injected-success',
    Description: 'The number of packets injected into the fast lane',
    Label: 'Injected Packets Received',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/received/control-block-alloc-failure',
    Description: 'The number of times the system was unable to allocate a packet control block',
    Label: 'Packet Control Block Allocation Failures',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/received/interface-standby-drop',
    Description: 'The number of packets received and dropped because the interface is in standby mode.',
    Label: 'Packets Dropped on Standby Interface',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/lookup/fib-table/hit',
    Description: 'The number of packets that have matched against an entry in the FIB table',
    Label: 'FIB Lookup Hit',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/lookup/fib-table/miss',
    Description: 'The number of packets that have not matched any entries in the FIB table',
    Label: 'FIB Lookup Miss',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/lookup/flow-table/hit',
    Description: 'The number of packets that have matched against an entry in the Flow Table',
    Label: 'Flow Lookup Hit',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/lookup/flow-table/invalidated',
    Description: 'The number of packets that have matched against an entry in the Flow Table that was invalidated',
    Label: 'Flow Lookup Invalidated Flow',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/lookup/flow-table/miss',
    Description: 'The number of packets that have not matched any entries in the Flow Table',
    Label: 'Flow Lookup Miss',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/lookup/tenant-table/hit',
    Description: 'Number of matches against the tenant table',
    Label: 'Tenant Table Hit',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/lookup/tenant-table/miss',
    Description: 'The number of tenant table misses',
    Label: 'Tenant Table Miss',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/lookup/tenant-table/failure',
    Description: 'The tenant table lock failed to be acquired',
    Label: 'Failure Locking Tenant Table',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/lookup/access-policy-table/allow',
    Description: "The number of packets allowed that matched 'Allow' rules in the access policy table",
    Label: 'Access Policy Table Allow',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/lookup/access-policy-table/deny',
    Description: "The number of packets denied that matched 'Deny' rules in the access policy table",
    Label: 'Access Policy Table Deny',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/lookup/access-policy-table/miss',
    Description: 'The number of packets that missed rules in the access policy table',
    Label: 'Access Policy Table Miss',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/lookup/access-policy-table/failure',
    Description: 'The access-policy table lock failed to be acquired',
    Label: 'Failure Locking access-policy table',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/lookup/icmp-table/ipv4/allow',
    Description: 'The number of allowed received ICMP packets',
    Label: 'ICMP packets allowed',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/lookup/icmp-table/ipv4/deny',
    Description: 'The number of denied received ICMP packets',
    Label: 'ICMP packets dropped',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/lookup/icmp-table/ipv6/allow',
    Description: 'The number of allowed received ICMPv6 packets',
    Label: 'ICMPv6 packets allowed',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/lookup/icmp-table/ipv6/deny',
    Description: 'The number of denied received ICMPv6 packets',
    Label: 'ICMPv6 packets dropped',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/flow-action-summary/success',
    Description: 'The number of packets successfully processed actions after flow table hit',
    Label: 'Success Flow Packet Action Processing',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/flow-action-summary/failure',
    Description: 'The number of packets dropped due to an action processing failure after flow table hit',
    Label: 'Flow Packet Action Processing Failures',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/flow-action-summary/exception',
    Description:
      'The number of exceptions received during packet action processing in the Fast Lane after flow table hit',
    Label: 'Exception in Flow Packet Action Processing',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/fib-action-summary/success',
    Description: 'The number of packets successfully processed actions after fib table hit',
    Label: 'Success Fib Packet Action Processing',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/fib-action-summary/failure',
    Description: 'The number of packets dropped due to an action processing failure after fib table hit',
    Label: 'Fib Packet Action Processing Failures',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/fib-action-summary/exception',
    Description:
      'The number of exceptions received during packet action processing in the Fast Lane after fib table hit',
    Label: 'Exception in Fib Packet Action Processing',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/aes/payload-encryption',
    Description: 'The number of packets with payload successfully encrypted',
    Label: 'AES Payload Encryption Success',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/aes/payload-decryption',
    Description: 'The number of packets with payload successfully decrypted',
    Label: 'AES Payload Decryption Success',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/aes/no-payload',
    Description: 'The number of packets requiring no AES processing due to not having a payload',
    Label: 'No AES Processing Required',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/aes/metadata-encryption',
    Description: 'The number of packets with metadata successfully encrypted',
    Label: 'AES Metadata Encryption Success',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/aes/metadata-decryption',
    Description: 'The number of packets with metadata successfully decrypted',
    Label: 'AES Metadata Decryption Success',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/aes/no-metadata',
    Description: 'The number of packets requiring no AES processing do to not having metadata',
    Label: 'No AES Processing Required',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/aes/metadata-false-positive-detected',
    Description: 'Successfully ignored false positive detections of metadata in the packet',
    Label: 'Metadata False Positive Detected',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/detour',
    Description: 'The number of packets successfully processed for detour',
    Label: 'Detour Sent',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/dpi/encryption/enqueue',
    Description: 'The number of packets detected as needing encryption',
    Label: 'Dynamic Encryption Required',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/dpi/encryption/detected',
    Description: 'The number of packets detected as part of an encryption handshake',
    Label: 'Encrypted Session Detected',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/drop',
    Description: 'The number of packets processed by installed drop actions',
    Label: 'Drop Action Matches',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/ethernet-header-transform',
    Description: 'The number of packets successfully encapsulated',
    Label: 'Encapsulated in Ethernet Header',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/forward/to-wire',
    Description: 'The number of packets successfully forwarded',
    Label: 'Packets Forwarded',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/flow-move/detected',
    Description: 'The number of flows moved',
    Label: 'Flow Move Detected',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/flow-move/packets-enqueued',
    Description: 'The number of packets enqueued as a result of a flow move',
    Label: 'Packets Enqueued for Flow Move',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/duplicate-detector/allow',
    Description: 'The number of packets allowed with non-duplicate sequence numbers',
    Label: 'Packets Allowed',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/duplicate-detector/deny',
    Description: 'The number of packets denied due to duplicate or out of range sequence numbers',
    Label: 'Packets Denied',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/hmac/digest-added',
    Description: 'HMAC digest successfully added',
    Label: 'Digest Added',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/hmac/digest-removed',
    Description: 'HMAC digest successfully removed',
    Label: 'Digest Removed',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/hmac/not-required',
    Description: 'HMAC digest not required',
    Label: 'Digest Not Required',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/hmac/append-no-payload',
    Description: 'No Payload present for HMAC digest calculation',
    Label: 'No Payload for HMAC Digest',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/hmac/validate-no-payload',
    Description: 'HMAC digest not present on this packet',
    Label: 'No HMAC Digest Available',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/metadata/added',
    Description: 'Metadata successfully added',
    Label: 'Metadata Added',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/metadata/removed',
    Description: 'Metadata successfully removed',
    Label: 'Metadata Removed',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/metadata/add-not-required',
    Description: 'Adding of metadata is not required',
    Label: 'Metadata Add Not Required',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/metadata/remove-not-required',
    Description: 'Removing of metadata is not required',
    Label: 'Metadata Remove Not Required',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/metadata/propagate-not-required',
    Description: 'Propagation of metadata is not required',
    Label: 'Metadata Propagate Not Required',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/metadata/add-false-positive-correction',
    Description: 'Metadata length added to correct for payload and cookie collisions',
    Label: 'Metadata Added for False Positive Detection',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/metadata/remove-false-positive-correction',
    Description: 'Metadata length removed after false positive detection',
    Label: 'Metadata Removed after False Positive Detection',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/metadata/forced-drop',
    Description: 'Number of packets purposefully dropped after metadata processing',
    Label: 'Forced Packet Drop',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/metadata/right-lane-sent',
    Description: 'Reverse metadata packets that were succcessfully sent to right lane',
    Label: 'Reverse metadata packets that were succcessfully sent to right lane',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/metadata/updated',
    Description: 'Reverse metadata in packet updated successfully',
    Label: 'Reverse metadata in packet updated successfully',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/rate-limit-check',
    Description: 'The number of packets admitted by the rate limiter',
    Label: 'Rate Limit Valid',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/tcp-state',
    Description: 'Number of packets validated by the TCP state machine',
    Label: 'Tcp State Valid',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/ttl-validate',
    Description: 'The number of packets with valid TTL',
    Label: 'Ttl Valid',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/bfd/echo-processed',
    Description: 'Echo packet processed successfully',
    Label: 'Echo packet processed',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/success/bfd/async-processed',
    Description: 'Async packet processed successfully',
    Label: 'Async packet processed',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/aes/encryption-exception',
    Description: 'The number of packets dropped due to an encryption exception',
    Label: 'AES Encryption Exceptions',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/aes/metadata-encryption',
    Description: 'The number of packets dropped due to an encryption failure',
    Label: 'AES Metadata Encryption Failures',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/aes/payload-encryption',
    Description: 'The number of packets dropped due to an encryption failure',
    Label: 'AES Payload Encryption Failures',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/aes/decryption-exception',
    Description: 'The number of packets dropped due to a decryption exception',
    Label: 'AES Decryption Exceptions',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/aes/metadata-decryption',
    Description: 'The number of packets dropped due to a decryption failure',
    Label: 'AES Metadata Decryption Failures',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/aes/payload-decryption',
    Description: 'The number of packets dropped due to a decryption failure',
    Label: 'AES Payload Decryption Failures',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/aes/iv-generation',
    Description: 'The number of packets dropped due to an iv generation failure',
    Label: 'AES IV Generation Failures',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/aes/no-context-found',
    Description: 'The number of times an AES context was not found',
    Label: 'AES No Context Found',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/aes/iv-seed',
    Description: 'The number of packets dropped due to a seed failure on decrypt',
    Label: 'AES IV Seed Failures',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/aes/iv-append',
    Description: 'The number of packets dropped due to a failure to append the iv',
    Label: 'AES IV Append Failures',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/aes/get-data-length',
    Description: 'The number of packets dropped due to a failure to get the data length',
    Label: 'AES Get Data Length Failures',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/aes/set-data-length',
    Description: 'The number of packets dropped due to a failure to set the data length',
    Label: 'AES Set Data Length Failures',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/aes/data-normalization',
    Description: 'The number of packets dropped due to a failure to normalize to Aes block size',
    Label: 'Aes Data Normalization Failures',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/ethernet-header-transform/arp-table-misses',
    Description: 'The number of packets dropped because the arp resultant was invalid',
    Label: 'Arp Table Misses',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/ethernet-header-transform/packet-expansion',
    Description: 'The number of packets dropped because the packet could not be expanded',
    Label: 'Packet Expansion Failures',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/hmac/allocation',
    Description: 'The number of packets dropped because the memory for the HMAC could not be allocated',
    Label: 'HMAC Allocation Failures',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/hmac/cannot-find-digest',
    Description: 'The number of packets dropped because the HMAC digest could not be found',
    Label: 'HMAC Cannot Find Digest',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/hmac/digest-calculation',
    Description: 'The number of packets dropped due to a HMAC digest calculation failure',
    Label: 'HMAC Digest Calculation Failures',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/hmac/digest-compare',
    Description: "The number of packets dropped because the HMAC digest didn't match the calculated value",
    Label: 'HMAC Digest Compare Failures',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/hmac/context-not-found',
    Description: 'The number of packets dropped because the HMAC context could not be found',
    Label: 'HMAC Context Not Found',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/metadata/get-length',
    Description: 'The number of packets dropped because the metadata length could not be determined',
    Label: 'Metadata Get Length Failure',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/metadata/add',
    Description: 'The number of packets dropped because metadata add operation failed',
    Label: 'Metadata Add Failure',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/metadata/cached-attributes-not-found',
    Description: 'The number of metadata propagate add failures due to missing cached attributes',
    Label: 'Metadata Propagate Cached Attributes Failure',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/metadata/invalid-type',
    Description: 'The number of packets dropped because of invalid metadata type',
    Label: 'Invalid metadata type received',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/metadata/not-present',
    Description: 'The number of packets dropped because the metadata was not present when required',
    Label: 'Metadata Not Present when required',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/rate-limit-check',
    Description: 'The number of packets dropped by the rate limiter',
    Label: 'Rate Limit Drops',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/tcp-state/invalid-state-transition',
    Description: 'The number of packets dropped by the TCP State Machine',
    Label: 'TCP State Invalid Transitions',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/tcp-state/illegal-flag-combination',
    Description: 'The number of packets dropped because they had an invalid flag combination',
    Label: 'TCP State Illegal Flag Combinations',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/ttl-validate',
    Description: 'The number of packets dropped due to expired TTL',
    Label: 'TTL Validate Drops',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/bfd/echo-init',
    Description: 'Echo action initialization failed',
    Label: 'Echo action initialization failed',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/bfd/decode',
    Description: 'Failure to decode bfd header and metadata',
    Label: 'Failure to decode bfd packet',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/bfd/invalid-header',
    Description: 'Failure due to invalid bfd header',
    Label: 'Failure due to invalid bfd header',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/bfd/empty-payload',
    Description: 'Failure due to empty payload',
    Label: 'Failure due to empty payload',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/bfd/empty-metadata',
    Description: 'Failure due to metadata being absent',
    Label: 'Failure due to metadata being absent',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/action/failure/bfd/metadata-parse',
    Description: 'Failure to parse metadata',
    Label: 'Failure to parse metadata',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/fragmentation/received/successfully-reassembled',
    Description: 'The number of packets successfully reassembled',
    Label: 'Successfully Reassembled',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/fragmentation/received/failure-to-reassemble',
    Description: 'The number of packets that failed to be reassembled',
    Label: 'Failure to Reassemble',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/fragmentation/received/duplicate-first-fragment',
    Description: 'The number of duplicate first fragments',
    Label: 'Duplicate First Fragment',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/fragmentation/received/invalid-length-first-fragment',
    Description: 'The number of first fragments with invalid length',
    Label: 'Invalid Length First Fragment',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/fragmentation/received/duplicate-last-fragment',
    Description: 'The number of duplicate last fragments',
    Label: 'Duplicate Last Fragment',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/fragmentation/received/incomplete-fragments',
    Description: 'The number of incomplete fragments',
    Label: 'Incomplete Fragments',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/fragmentation/received/fragment-chains-discarded',
    Description: 'The number of discarded fragment chains',
    Label: 'Discarded Fragment Chains',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/fragmentation/received/fragment-chains-timeout',
    Description: 'The number of fragment chains discarded due to timeout',
    Label: 'Timeout Fragment Chains',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/fragmentation/received/fragment-chains-exceeded',
    Description: 'Failures due to exhaustion of available fragment chains',
    Label: 'Exceeded Fragment Chains',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/fragmentation/sent/ipv4-packets-fragmented',
    Description: 'The total number of IPv4 fragmented packets created',
    Label: 'Fragmented IPv4 Packets',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/fragmentation/sent/ipv4-fabric-fragments',
    Description: 'The number of fabric IPv4 fragmented packets created',
    Label: 'Fabric IPv4 Fragmented Packets',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/fragmentation/sent/ipv4-non-fabric-fragments',
    Description: 'The number of non-fabric IPv4 fragmented packets created',
    Label: 'Non-Fabric IPv6 Fragmented Packets',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/fragmentation/sent/ipv6-packets-fragmented',
    Description: 'The total number of IPv6 fragmented packets created',
    Label: 'Fragmented IPv6 Packets',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/fragmentation/sent/ipv6-fabric-fragments',
    Description: 'The number of fabric IPv6 fragmented packets created',
    Label: 'Fabric IPv6 Fragmented Packets',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/fragmentation/sent/ipv6-non-fabric-fragments',
    Description: 'The number of non-fabric IPv6 fragmented packets created',
    Label: 'Non-Fabric IPv6 Fragmented Packets',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/fragmentation/sent/ipv4-dont-fragment-drop',
    Description: "The number of jumbo IPv4 don't fragment packets dropped",
    Label: "Jumbo IPv4 Don't Fragment Packets Dropped",
    Keys: ['node']
  },
  {
    ID: 'packet-processing/fragmentation/sent/fragment-creation-failure',
    Description: 'The number of fragment creation failures',
    Label: 'Fragment Creation Failure',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/fragmentation/sent/unknown-l2-version',
    Description: 'The number of jumbo packets with an unknown L2 version',
    Label: 'Unknown L2 Version',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/received/total',
    Description: 'The total number of packets received',
    Label: 'Total Packets Received',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/received/discards',
    Description: 'The number of packets dropped due to a failure to classify the packet',
    Label: 'Total Classification Drops',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/received/ipv4',
    Description: 'The number of packets received and classified as IPv4',
    Label: 'IPv4 Packets Received',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/received/ipv6',
    Description: 'The number of packets received and classified as IPv6',
    Label: 'IPv6 Packets Received',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/received/arp',
    Description: 'The number of packets received and classified as ARP',
    Label: 'ARP Packets Received',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/received/vlan',
    Description: 'The number of packets received having a VLAN tag',
    Label: 'VLAN Packets Received',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/received/icmp',
    Description: 'The number of packets received and classified as ICMP',
    Label: 'ICMP Packets Received',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/received/icmpv6',
    Description: 'The number of packets received and classified as ICMPv6',
    Label: 'ICMPv6 Packets Received',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/received/ndp',
    Description: 'The number of packets received and classified as NDP',
    Label: 'NDP Packets Received',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/received/ospf',
    Description: 'The number of packets received and classified as OSPF',
    Label: 'OSPF Packets Received',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/received/tcp',
    Description: 'The number of packets received and classified as TCP',
    Label: 'TCP Packets Received',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/received/udp',
    Description: 'The number of packets received and classified as UDP',
    Label: 'UDP Packets Received',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/received/sctp',
    Description: 'The number of packets received and classified as SCTP',
    Label: 'SCTP Packets Received',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/received/tunnel',
    Description: 'The number of packets received and classified as tunneled',
    Label: 'Tunneled Packets Received',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/received/lacp',
    Description: 'The number of packets received and classified as LACP',
    Label: 'LACP Packets Received',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/received/is-is',
    Description: 'The number of packets received and classified as IS-IS',
    Label: 'IS-IS Packets Received',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/received/dhcp',
    Description: 'The number of packets received and classified as DHCP',
    Label: 'DHCP Packets Received',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/received/ipv4-fragmented',
    Description: 'The number of packets received and classified as IPv4 fragments',
    Label: 'IPv4 Fragment Packets Received',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/received/ipv6-fragmented',
    Description: 'The number of packets received and classified as IPv6 fragments',
    Label: 'IPv6 Fragment Packets Received',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/received/ipv4-fabric-fragmented',
    Description: 'The number of packets received and classified as IPv4 fabric fragments',
    Label: 'IPv4 Fabric Fragment Packets Received',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/received/ipv6-fabric-fragmented',
    Description: 'The number of packets received and classified as IPv6 fabric fragments',
    Label: 'IPv6 Fabric Fragment Packets Received',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/received/other-layer-4-protocol',
    Description: 'The number of packets received that did not fall into one of the other counted transport-layer types',
    Label: 'Other Layer 4 Protocol Packets Received',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/received/unknown-layer-3-protocol-discards',
    Description: 'The number of packets that were unable to be classified and were dropped',
    Label: 'Received Unclassified Packets Dropped',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/received/invalid-length',
    Description: 'The number of packets received with an invalid length',
    Label: 'Invalid Length Packets Received',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/received/invalid-header-length',
    Description: 'The number of packets received with an invalid header length',
    Label: 'Invalid Header Length Packets Received',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/received/exception',
    Description: 'The number of exceptions caught while classifying packets',
    Label: 'Classifier Exceptions',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/received/broadcast-mac-discards',
    Description: 'The number of packets with broadcast destination mac discards',
    Label: 'Broadcast Packet Discards',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/sent/total',
    Description: 'The total number of packets that have been sent',
    Label: 'Total Packets Sent',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/sent/ipv4',
    Description: 'The number of IPv4 packets sent',
    Label: 'IPv4 Packets Sent',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/sent/ipv6',
    Description: 'The number of IPv6 packets sent',
    Label: 'IPv6 Packets Sent',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/sent/arp',
    Description: 'The number of ARP packets sent',
    Label: 'ARP Packets Sent',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/sent/ndp',
    Description: 'The number of NDP packets sent',
    Label: 'NDP Packets Sent',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/sent/vlan',
    Description: 'The number of packets sent with a VLAN tag',
    Label: 'VLAN Packets Sent',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/sent/icmp',
    Description: 'The number of ICMP packets sent',
    Label: 'ICMP Packets Sent',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/sent/icmpv6',
    Description: 'The number of ICMPv6 packets sent',
    Label: 'ICMPv6 Packets Sent',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/sent/ospf',
    Description: 'The number of OSPF packets sent',
    Label: 'OSPF Packets Sent',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/sent/tcp',
    Description: 'The number of TCP packets sent',
    Label: 'TCP Packets Sent',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/sent/udp',
    Description: 'The number of UDP packets sent',
    Label: 'UDP Packets Sent',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/sent/sctp',
    Description: 'The number of SCTP packets sent',
    Label: 'SCTP Packets Sent',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/sent/tunnel',
    Description: 'The number of tunneled packets sent',
    Label: 'Tunneled Packets Sent',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/sent/lacp',
    Description: 'The number of LACP packets sent',
    Label: 'LACP Packets Sent',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/sent/is-is',
    Description: 'The number of IS-IS packets sent',
    Label: 'IS-IS Packets Sent',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/sent/dhcp',
    Description: 'The number of DHCP packets sent',
    Label: 'DHCP Packets Sent',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/sent/other-layer-4-protocol',
    Description: 'The number of packets sent that did not fall into one of the other counted transport-layer types',
    Label: 'Other Layer 4 Protocol Packets Sent',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/sent/other-layer-3-protocol',
    Description: 'The number of packets sent that did not fall into one of the other counted network-layer types',
    Label: 'Other Layer 3 Protocol Packets Sent',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/sent/ipv4-fragmented',
    Description: 'The number of IPv6 fragments sent',
    Label: 'IPv4 Fragment Packets Sent',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/sent/ipv6-fragmented',
    Description: 'The number of IPv6 fragments sent',
    Label: 'IPv4 Fragment Packets Sent',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/sent/ipv4-fabric-fragmented',
    Description: 'The number of IPv4 fabric fragments sent',
    Label: 'IPv4 Fabric Fragment Packets Sent',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/classifier/sent/ipv6-fabric-fragmented',
    Description: 'The number of IPv6 fabric fragments sent',
    Label: 'IPv6 Fabric Fragment Packets Sent',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/sent/interface-success',
    Description: 'The number of packets transmitted out this interface',
    Label: 'Packets Transmitted',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/sent/interface-failure',
    Description: 'The number of packets failed to be transmitted on the interface',
    Label: 'Packet Transmit Failures',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/sent/interface-standby-drop',
    Description: 'The number of packets not transmitted because the interface is in standby mode',
    Label: 'Packet Transmit Standby Drops',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/sent/interface-retry',
    Description: 'The number of packet send retry attempts on this interface',
    Label: 'Packet Transmit Retries',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/enqueue/to-worker-core-success',
    Description: 'The number of packets re-enqueued within the Fast Lane',
    Label: 'Re-Enqueued Fast Lane Packets',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/enqueue/to-worker-core-failure',
    Description: 'The number of failures when re-enqueuing packets within the Fast Lane',
    Label: 'Failures Re-Enqueuing Fast Lane Packets',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/enqueue/to-controller-success',
    Description: 'The number of control packets enqueued to fast lane controller',
    Label: 'Enqueued Control Packets',
    Keys: ['node']
  },
  {
    ID: 'packet-processing/enqueue/to-controller-failure',
    Description: 'The number of failures when enqueuing control packets to fast lane controller',
    Label: 'Failures Enqueuing Control Packets',
    Keys: ['node']
  },
  {
    ID: 'interface/received/packets',
    Description: 'The number of packets received on interface',
    Label: 'Packets Received',
    Keys: ['node']
  },
  {
    ID: 'interface/received/bytes',
    Description: 'The number of bytes received on interface',
    Label: 'Bytes Received',
    Keys: ['node']
  },
  {
    ID: 'interface/received/error',
    Description: 'The number of receive errors detected by interface',
    Label: 'Receive Errors',
    Keys: ['node']
  },
  {
    ID: 'interface/received/missed',
    Description: 'The number of packets dropped or discarded by the interface',
    Label: 'Receive Missed',
    Keys: ['node']
  },
  {
    ID: 'interface/received/buffer-allocation-failure',
    Description: 'The number of receive buffer allocation failures',
    Label: 'Receive Buffer Allocation Failure',
    Keys: ['node']
  },
  {
    ID: 'interface/received/utilization',
    Description: 'The current receiving bandwidth of interface',
    Label: 'Receive Utilization',
    Keys: ['node']
  },
  {
    ID: 'interface/sent/packets',
    Description: 'The number of packets sent on interface',
    Label: 'Packets Sent',
    Keys: ['node']
  },
  {
    ID: 'interface/sent/bytes',
    Description: 'The number of bytes sent on interface',
    Label: 'Bytes Sent',
    Keys: ['node']
  },
  {
    ID: 'interface/sent/error',
    Description: 'The number of send errors detected by interface',
    Label: 'Send Errors',
    Keys: ['node']
  },
  {
    ID: 'interface/sent/utilization',
    Description: 'The current transmit bandwidth of interface',
    Label: 'Transmit Utilization',
    Keys: ['node']
  },
  {
    ID: 'traffic-eng/right-lane/schedule-success',
    Description: 'The number of packets successfully scheduled in traffic engineering',
    Label: 'Right Lane Scheduler Success',
    Keys: ['node']
  },
  {
    ID: 'traffic-eng/right-lane/schedule-failure',
    Description: 'The number of packets failed to be scheduled in traffic engineering',
    Label: 'Right Lane Scheduler Failure',
    Keys: ['node']
  },
  {
    ID: 'traffic-eng/right-lane/drop',
    Description: 'The number of packets dropped before scheduling to traffic engineering',
    Label: 'Drop before Right Lane Scheduler',
    Keys: ['node']
  },
  {
    ID: 'traffic-eng/right-lane/sent-success',
    Description: 'The number of packets successfully sent to the right lane',
    Label: 'Right Lane Sent Success',
    Keys: ['node']
  },
  {
    ID: 'traffic-eng/right-lane/sent-retry',
    Description: 'The number of packet send retry attempts to the right lane',
    Label: 'Right Lane Sent Failure',
    Keys: ['node']
  },
  {
    ID: 'traffic-eng/right-lane/queue-depth/min',
    Description: 'The smalleset depth of a queue of the given priority currently scheduled in traffic engineering',
    Label: 'Application Priority Minimum Queue Depth',
    Keys: ['node']
  },
  {
    ID: 'traffic-eng/right-lane/queue-depth/max',
    Description: 'The largest depth of a queue of the given priority currently scheduled in traffic engineering',
    Label: 'Application Priority Maximum Queue Depth',
    Keys: ['node']
  },
  {
    ID: 'traffic-eng/right-lane/queue-depth/avg',
    Description: 'The average depth of a queue of the given priority currently scheduled in traffic engineering',
    Label: 'Application Priority Average Queue Depth',
    Keys: ['node']
  },
  {
    ID: 'traffic-eng/right-lane/queue-depth/total',
    Description: 'The total usage of all queues of the given priority currently scheduled in traffic engineering',
    Label: 'Application Priority Total Queue Depth',
    Keys: ['node']
  },
  {
    ID: 'traffic-eng/device-port/schedule-success',
    Description: 'The number of packets successfully scheduled in traffic engineering',
    Label: 'Device Port Scheduler Success',
    Keys: ['node']
  },
  {
    ID: 'traffic-eng/device-port/schedule-failure',
    Description: 'The number of packets failed to be scheduled in traffic engineering',
    Label: 'Device Port Scheduler Failure',
    Keys: ['node']
  },
  {
    ID: 'traffic-eng/device-port/drop',
    Description: 'The number of packets dropped before scheduling to traffic engineering',
    Label: 'Device Port Drop Before Scheduler',
    Keys: ['node']
  },
  {
    ID: 'traffic-eng/device-port/queue-depth/min',
    Description: 'The smalleset depth of a queue of the given priority currently scheduled in traffic engineering',
    Label: 'Device Port Priority Minimum Queue Depth',
    Keys: ['node']
  },
  {
    ID: 'traffic-eng/device-port/queue-depth/max',
    Description: 'The largest depth of a queue of the given priority currently scheduled in traffic engineering',
    Label: 'Device Port Priority Maximum Queue Depth',
    Keys: ['node']
  },
  {
    ID: 'traffic-eng/device-port/queue-depth/avg',
    Description: 'The average depth of a queue of the given priority currently scheduled in traffic engineering',
    Label: 'Device Port Priority Average Queue Depth',
    Keys: ['node']
  },
  {
    ID: 'traffic-eng/device-port/queue-depth/total',
    Description: 'The total usage of all queues of the given priority currently scheduled in traffic engineering',
    Label: 'Device Port Priority Total Queue Depth',
    Keys: ['node']
  },
  {
    ID: 'packet-capture/success',
    Description: 'The number of packets sent to be captured',
    Label: 'Packets send to be captured',
    Keys: ['node']
  },
  {
    ID: 'packet-capture/write-failure',
    Description: 'The number of packet capture write failures',
    Label: 'Packet capture write failures',
    Keys: ['node']
  },
  {
    ID: 'arp/received/arp-request',
    Description: 'The number of received ARP requests',
    Label: 'ARP Requests Received',
    Keys: ['node']
  },
  {
    ID: 'arp/received/arp-reply',
    Description: 'The number of ARP replies received',
    Label: 'ARP Replies Received',
    Keys: ['node']
  },
  {
    ID: 'arp/received/gratuitous-arp',
    Description: 'The number of Gratuitous ARP replies received',
    Label: 'Gratuitous ARP Replies Received',
    Keys: ['node']
  },
  {
    ID: 'arp/received/off-subnet-arp-request',
    Description: 'The number of off-subnet ARP requests received',
    Label: 'Off-subnet ARP Requests Received',
    Keys: ['node']
  },
  {
    ID: 'arp/received/neighbor-solicit',
    Description: 'The number of ICMPv6 Neighbor Solicits received',
    Label: 'ICMPv6 Neighbor Solicits Received',
    Keys: ['node']
  },
  {
    ID: 'arp/received/neighbor-advertisement',
    Description: 'The number of ICMPv6 Neighbor Advertisements received',
    Label: 'ICMPv6 Neighbor Advertisements Received',
    Keys: ['node']
  },
  {
    ID: 'arp/received/unsolicited-neighbor-advertisement',
    Description: 'The number of Unsolicited ICMPv6 Neighbor Advertisements received',
    Label: 'Unsolicited ICMPv6 Neighbor Advertisements Received',
    Keys: ['node']
  },
  {
    ID: 'arp/received/off-subnet-neighbor-solicit',
    Description: 'The number of off-subnet ICMPv6 Neighbor Solicits received',
    Label: 'Off-subnet ICMPv6 Neighbor Solicits Received',
    Keys: ['node']
  },
  {
    ID: 'arp/received/errors/arp-request',
    Description: 'The number of errors while processing ARP Requests',
    Label: 'Errors processing ARP Requests',
    Keys: ['node']
  },
  {
    ID: 'arp/received/errors/arp-reply',
    Description: 'The number of errors while processing ARP Replies',
    Label: 'Errors processing ARP Replies',
    Keys: ['node']
  },
  {
    ID: 'arp/received/errors/neighbor-solicit',
    Description: 'The number of errors while processing ICMPv6 Neighbor Solicits',
    Label: 'Errors processing ICMPv6 Neighbor Solicits',
    Keys: ['node']
  },
  {
    ID: 'arp/received/errors/neighbor-advertisement',
    Description: 'The number of errors while processing ICMPv6 Neighbor Advertisements',
    Label: 'Errors processing ICMPv6 Neighbor Advertisements',
    Keys: ['node']
  },
  {
    ID: 'arp/received/errors/unknown-type',
    Description: 'The number of Packets received of an unknown type',
    Label: 'ARP Received Unknown packet type',
    Keys: ['node']
  },
  {
    ID: 'arp/received/errors/processing',
    Description: 'The number of ARP processing errors',
    Label: 'ARP Receive Processing Errors',
    Keys: ['node']
  },
  {
    ID: 'arp/sent/success/arp-request',
    Description: 'The number of ARP requests sent',
    Label: 'ARP Requests Sent',
    Keys: ['node']
  },
  {
    ID: 'arp/sent/success/arp-reply',
    Description: 'The number of ARP replies sent',
    Label: 'ARP Replies Sent',
    Keys: ['node']
  },
  {
    ID: 'arp/sent/success/gratuitous-arp',
    Description: 'The number of Gratuitous ARPs sent',
    Label: 'Gratuitous ARPs Sent',
    Keys: ['node']
  },
  {
    ID: 'arp/sent/success/neighbor-solicit',
    Description: 'The number of ICMPv6 Neighbor Solicits sent',
    Label: 'ICMPv6 Neighbor Solicits Sent',
    Keys: ['node']
  },
  {
    ID: 'arp/sent/success/neighbor-advertisement',
    Description: 'The number of ICMPv6 Neighbor Advertisements sent',
    Label: 'ICMPv6 Neighbor Advertisements Sent',
    Keys: ['node']
  },
  {
    ID: 'arp/sent/success/unsolicited-neighbor-advertisement',
    Description: 'The number of ICMPv6 Unsolicited Neighbor Advertisements sent',
    Label: 'ICMPv6 Unsolicited Neighbor Advertisements Sent',
    Keys: ['node']
  },
  {
    ID: 'arp/sent/failure/arp-request',
    Description: 'The number of errors while sending ARP Requests',
    Label: 'Errors sending ARP Requests',
    Keys: ['node']
  },
  {
    ID: 'arp/sent/failure/arp-reply',
    Description: 'The number of errors while sending ARP Replies',
    Label: 'Errors sending ARP Replies',
    Keys: ['node']
  },
  {
    ID: 'arp/sent/failure/gratuitous-arp',
    Description: 'The number of errors while sending Gratuitous ARPs',
    Label: 'Errors sending Gratuitous ARPs',
    Keys: ['node']
  },
  {
    ID: 'arp/sent/failure/neighbor-solicit',
    Description: 'The number of errors while sending ICMPv6 Neighbor Solicits',
    Label: 'Errors sending ICMPv6 Neighbor Solicits',
    Keys: ['node']
  },
  {
    ID: 'arp/sent/failure/neighbor-advertisement',
    Description: 'The number of errors while sending ICMPv6 Neighbor Advertisements',
    Label: 'Errors sending ICMPv6 Neighbor Advertisements',
    Keys: ['node']
  },
  {
    ID: 'arp/sent/failure/unsolicited-neighbor-advertisement',
    Description: 'The number of errors while sending ICMPv6 Unsolicited Neighbor Advertisements',
    Label: 'Errors sending ICMPv6 Unsolicited Neighbor Advertisements',
    Keys: ['node']
  },
  {
    ID: 'arp/sent/failure/allocation',
    Description: 'The number allocation failures when attempting to send packet',
    Label: 'ARP Packet Allocation Failure',
    Keys: ['node']
  },
  {
    ID: 'arp/sent/failure/standby',
    Description: 'The number of packets that failed to be sent because the interface was not active',
    Label: 'ARP Packets discarded on standby interface',
    Keys: ['node']
  },
  {
    ID: 'arp/encapsulation/sent/success',
    Description: 'The number of IP packets sent sent after successful ARP resolution',
    Label: 'IP Packets sent after successful ARP resolution',
    Keys: ['node']
  },
  {
    ID: 'arp/encapsulation/sent/failure',
    Description: 'The number of IP packets that failed to be sent after successful ARP resolution',
    Label: 'IP Packets that failed to be sent after successful ARP resolution',
    Keys: ['node']
  },
  {
    ID: 'arp/queued/failure/queue-full',
    Description: 'The number of packets that failed to enqueue',
    Label: 'Packet queue full',
    Keys: ['node']
  },
  {
    ID: 'arp/queued/failure/drop',
    Description: 'The number of packets dropped after ARP entry failed to resolve',
    Label: 'Queued Packet Drops',
    Keys: ['node']
  },
  {
    ID: 'arp/queued/packets',
    Description: 'The number of queued packets waiting for valid arp entry',
    Label: 'Queued packets waiting for valid ARP entry',
    Keys: ['node']
  },
  { ID: 'arp/entries', Description: 'The number of active ARP entries', Label: 'Active ARP entries', Keys: ['node'] },
  {
    ID: 'icmp/sent/success/echo-reply',
    Description: 'The number of successful ICMP Echo replies transmitted',
    Label: 'ICMP Echo reply transmit success',
    Keys: ['node']
  },
  {
    ID: 'icmp/sent/failure/echo-reply',
    Description: 'The number of ICMP Echo replies that failed to be transmitted',
    Label: 'ICMP Echo reply transmit failure',
    Keys: ['node']
  },
  {
    ID: 'device-interface/message-success',
    Description: 'The number of successful interface configurations',
    Label: 'Interface Config Success',
    Keys: ['node']
  },
  {
    ID: 'device-interface/message-failure',
    Description: 'The number of failed interface configurations',
    Label: 'Interface Config Failure',
    Keys: ['node']
  },
  {
    ID: 'bfd/received/total',
    Description: 'The number of BFD packets received',
    Label: 'BFD Packets Received',
    Keys: ['node']
  },
  {
    ID: 'bfd/received/processed',
    Description: 'The number of BFD packets processed',
    Label: 'BFD Packets Processed',
    Keys: ['node']
  },
  {
    ID: 'bfd/received/valid/packets',
    Description: 'The number of valid BFD packets received',
    Label: 'Valid BFD Packets Received',
    Keys: ['node']
  },
  {
    ID: 'bfd/received/invalid/packets',
    Description: 'The number of invalid BFD packets received',
    Label: 'Invalid BFD Packets',
    Keys: ['node']
  },
  {
    ID: 'bfd/received/invalid/length-packets',
    Description: 'The number of BFD packets received with an invalid length',
    Label: 'Invalid Length BFD Packets',
    Keys: ['node']
  },
  {
    ID: 'bfd/received/invalid/payload-small',
    Description:
      'The number of BFD packets received where the payload size is smaller than the minimum BFD packet size',
    Label: 'BFD Packets Too Small',
    Keys: ['node']
  },
  {
    ID: 'bfd/received/invalid/header-small',
    Description: 'The number of packets received where the BFD header length is smaller than the minimum packet size',
    Label: 'BFD Packet Header Too Small',
    Keys: ['node']
  },
  {
    ID: 'bfd/received/invalid/header-large',
    Description:
      'The number of packets received where the length of the BFD header is greater than the size of the packet',
    Label: 'BFD Packet Header Too Large',
    Keys: ['node']
  },
  {
    ID: 'bfd/received/invalid/header-version',
    Description: 'The number of BFD packets received with an invalid header version',
    Label: 'Invalid BFD Header Version',
    Keys: ['node']
  },
  {
    ID: 'bfd/received/invalid/detect-multiple',
    Description: 'The number of packets received with an invalid multiplier',
    Label: 'BFD Invalid Multiplier',
    Keys: ['node']
  },
  {
    ID: 'bfd/received/invalid/discriminator',
    Description: 'The number of BFD packets received with an invalid discriminator',
    Label: 'BFD Invalid Discriminator',
    Keys: ['node']
  },
  {
    ID: 'bfd/received/invalid/authentication-field',
    Description: 'The number of packets received with an invalid authorization field',
    Label: 'BFD Invalid Auth Field',
    Keys: ['node']
  },
  {
    ID: 'bfd/received/invalid/session',
    Description: 'The number of BFD packets received for an invalid session',
    Label: 'Invalid BFD session packets',
    Keys: ['node']
  },
  {
    ID: 'bfd/received/invalid/metadata',
    Description: 'The number of BFD packets received with invalid metdata',
    Label: 'Packets with invalid BFD metadata',
    Keys: ['node']
  },
  {
    ID: 'bfd/received/invalid/local-discriminator',
    Description: 'The number of BFD packets received with invalid local discriminator',
    Label: 'Invalid BFD local discriminator',
    Keys: ['node']
  },
  {
    ID: 'bfd/neighbor/num-source-nat-changes',
    Description: 'The number of source nat changes in BFD neighbors',
    Label: 'Number of source NAT changes in neighbors',
    Keys: ['node']
  },
  {
    ID: 'bfd/neighbor/num-failover-events',
    Description: 'The number of failover events in BFD neighbors',
    Label: 'Number of failover events in neighbors',
    Keys: ['node']
  },
  {
    ID: 'bfd/peer-path/latency',
    Description: 'Latency in milliseconds for the 128T peer path.',
    Label: 'Peer Path Latency',
    Keys: ['peer-path']
  },
  {
    ID: 'bfd/peer-path/jitter',
    Description: 'Jitter in milliseconds for the 128T peer path.',
    Label: 'Peer Path Jitter',
    Keys: ['peer-path']
  },
  {
    ID: 'bfd/peer-path/loss',
    Description: 'Packet loss percentange for the 128T peer path.',
    Label: 'Peer Path Loss',
    Keys: ['peer-path']
  },
  {
    ID: 'bfd/peer-path/mos',
    Description: 'MOS value calculated for the 128T peer path.',
    Label: 'Peer Path MOS value',
    Keys: ['peer-path']
  },
  {
    ID: 'session/flow/remove/failure',
    Description: 'Number of Failures removing flows',
    Label: 'Flow Removal Failures',
    Keys: ['node']
  },
  {
    ID: 'session/flow/add/failure',
    Description: 'Number of failures to add flows when out of resources',
    Label: 'Flow Add Failures',
    Keys: ['node']
  },
  { ID: 'session/flow/active', Description: 'The number of active flows', Label: 'Active Flows', Keys: ['node'] },
  { ID: 'session/active', Description: 'Total number of active sessions', Label: 'Active Session', Keys: ['node'] },
  { ID: 'session/add', Description: 'Total number of added sessions', Label: 'Added Sessions', Keys: ['node'] },
  { ID: 'session/remove', Description: 'Total number of removed sessions', Label: 'Removed Sessions', Keys: ['node'] },
  {
    ID: 'session/added-existing',
    Description:
      'The number of duplicate flow entries during creation. This is a normal occurrence when a flow cannot be installed before the next packet arrives. The first packet that created the flow has not yet created a flow entry. Subsequent packets will cause this counter to be incremented.',
    Label: 'Duplicate Adds',
    Keys: ['node']
  },
  {
    ID: 'session/max-remove-timeout-exceeded',
    Description: 'The time to remove sessions exceeded maximum allowed.',
    Label: 'Maximum Remove Time Exceeded',
    Keys: ['node']
  },
  {
    ID: 'routing-agent/fib-meter',
    Description: 'The number of installed FIB routes',
    Label: 'Active FIB Routes',
    Keys: ['node']
  },
  {
    ID: 'routing-agent/add-route',
    Description: 'The number of routes added by the routing agent',
    Label: 'Routes Added',
    Keys: ['node']
  },
  {
    ID: 'routing-agent/delete-route',
    Description: 'The number of routes deleted by the routing agent',
    Label: 'Routes Deleted',
    Keys: ['node']
  },
  {
    ID: 'routing-agent/install-route',
    Description: 'The number of routes installed by the routing agent',
    Label: 'Routes Installed',
    Keys: ['node']
  },
  {
    ID: 'service-area/received/fabric-packets',
    Description: 'The number of packets received in the Service Area from within the Fabric',
    Label: 'Received Packets From Within The Fabric',
    Keys: ['node']
  },
  {
    ID: 'service-area/received/non-fabric-packets',
    Description: 'The number of packets received in the Service Area from outside the Fabric',
    Label: 'Received Packets From Outside The Fabric',
    Keys: ['node']
  },
  {
    ID: 'service-area/received/existing-flows',
    Description: 'The number of packets received that already have a matching flow',
    Label: 'Packets Received For Existing Flows',
    Keys: ['node']
  },
  {
    ID: 'service-area/received/dropped-packets',
    Description: 'Number of packets dropped by the Service Area due to an error',
    Label: 'Packets Dropped by the Service Area',
    Keys: ['node']
  },
  {
    ID: 'service-area/received/mid-flow-modify-packets',
    Description: 'Number of packets received for flows requiring modification by the Service Area',
    Label: 'Received Packets on flows requiring modification by the Service Area',
    Keys: ['node']
  },
  {
    ID: 'service-area/received/collision-modify-packets',
    Description: 'Number of packets received for flows requiring modification by the Service Area',
    Label: 'Received Packets on flows requiring modification by the Service Area',
    Keys: ['node']
  },
  {
    ID: 'service-area/received/adaptive-encryption-modify-packets',
    Description: 'Number of packets received for flows requiring modification for adaptive encryption',
    Label: 'Received Packets on flows requiring modification for adaptive encryption',
    Keys: ['node']
  },
  {
    ID: 'service-area/received/existing-session',
    Description: 'Number of packets matching an existing session',
    Label: 'Packets matching an existing session',
    Keys: ['node']
  },
  {
    ID: 'service-area/received/session-collision-change-direction',
    Description: 'Number of packets matching an existing session that force a change in session direction',
    Label: 'Packets matching an existing session that changed session direction',
    Keys: ['node']
  },
  {
    ID: 'service-area/received/session-collision-ignored',
    Description: 'Number of packets matching an existing session that do not require any changes to the session',
    Label: 'Packets matching an existing session that do not change the session',
    Keys: ['node']
  },
  {
    ID: 'service-area/received/valid-reverse-metadata-packets',
    Description: 'Number of valid reverse metadata packets received',
    Label: 'Valid reverse metadata packets received',
    Keys: ['node']
  },
  {
    ID: 'service-area/received/invalid-reverse-metadata-packets',
    Description: 'Number of invalid reverse metadata packets received',
    Label: 'Invalid reverse metadata packets received',
    Keys: ['node']
  },
  {
    ID: 'service-area/received/empty-reverse-metadata-packets',
    Description: 'Number of empty reverse metadata packets received',
    Label: 'Empty reverse metadata packets received',
    Keys: ['node']
  },
  {
    ID: 'service-area/received/duplicate-reverse-metadata-packets',
    Description: 'Number of duplicate reverse metadata packets received',
    Label: 'Duplicate reverse metadata packets received',
    Keys: ['node']
  },
  {
    ID: 'service-area/received/flow-expired-reverse-metadata-packets',
    Description: 'Number of reverse metadata packets received with no matching flow',
    Label: 'Reverse metadata packets received with no matching flow',
    Keys: ['node']
  },
  {
    ID: 'service-area/received/existing-session-reverse-metadata-packets',
    Description: 'Number of reverse metadata packets received with key that matches another session',
    Label: 'Reverse metadata packets with key that matches another existing session',
    Keys: ['node']
  },
  {
    ID: 'service-area/received/session-updated-reverse-metadata-packets',
    Description: 'Number of reverse metadata packets that updated the session',
    Label: 'Reverse metadata packets that successfully updated the session',
    Keys: ['node']
  },
  {
    ID: 'service-area/received/session-ignored-reverse-metadata-packets',
    Description: 'Number of reverse metadata packets that are ignored when received from another router',
    Label: 'Reverse metadata packets that are ignored when received from another router',
    Keys: ['node']
  },
  {
    ID: 'service-area/received/external-protocol-agent-packets',
    Description: 'Number of external protocol agent packets to be redirected',
    Label: 'external protocol agent packets to be redirected',
    Keys: ['node']
  },
  {
    ID: 'service-area/received/flow-move-packets',
    Description: 'Number of packets received for flows requiring modification to use a better path',
    Label: 'Received Packets on flows requiring modification to use a better path',
    Keys: ['node']
  },
  {
    ID: 'service-area/received/update-session-with-peer-success',
    Description: 'Number of reverse metadata packets that updated session with destination peer',
    Label: 'Successfully updated session with destination peer received in reverse metadata',
    Keys: ['node']
  },
  {
    ID: 'service-area/received/update-session-with-peer-failure',
    Description: 'Number of reverse metadata packets that failed to update session with destination peer',
    Label: 'Failed to update session with destination peer received in reverse metadata',
    Keys: ['node']
  },
  {
    ID: 'service-area/received/update-flow-with-peer-success',
    Description: 'Number of reverse metadata packets that updated flow with destination peer',
    Label: 'Successfully updated flow with destination peer received in reverse metadata',
    Keys: ['node']
  },
  {
    ID: 'service-area/received/update-flow-with-peer-failure',
    Description: 'Number of reverse metadata packets that failed to update flow with destination peer',
    Label: 'Failed to update flow with destination peer received in reverse metadata',
    Keys: ['node']
  },
  {
    ID: 'service-area/received/reverse-metadata-process-failure',
    Description: 'Number of reverse metadata packets that could not be processed',
    Label: 'Failed to process reverse metadata',
    Keys: ['node']
  },
  {
    ID: 'service-area/received/no-fib-entry',
    Description: 'Number of packets that did not match a FIB entry',
    Label: 'Failed to match FIB entry',
    Keys: ['node']
  },
  {
    ID: 'service-area/received/bad-shared-mem-entry',
    Description: 'Number of packets that had an invalid shared memory entry',
    Label: 'Bad Shared Memory Entry',
    Keys: ['node']
  },
  {
    ID: 'service-area/sent/success',
    Description: 'Number of packets successfully forwarded to the Fast Lane',
    Label: 'Packets Sent Successfully',
    Keys: ['node']
  },
  {
    ID: 'service-area/sent/arp-resolve-pending',
    Description: 'Number of packets enqueued pending ARP resolution',
    Label: 'Packets Queued Pending Valid ARP',
    Keys: ['node']
  },
  {
    ID: 'service-area/sent/arp-resolve-success',
    Description: 'Number of packets sent after successful ARP resolution',
    Label: 'Packets Sent after successful ARP resolution',
    Keys: ['node']
  },
  {
    ID: 'service-area/sent/arp-resolve-failure',
    Description: 'Number of packets dropped due to unsuccessful ARP resolution',
    Label: 'Packets Dropped due to unsuccessful ARP resolution',
    Keys: ['node']
  },
  {
    ID: 'service-area/session-install-errors/waypoint-allocation',
    Description: 'Number of session installation failures due to waypoint allocation failure',
    Label: 'Waypoint Allocation Failure',
    Keys: ['node']
  },
  {
    ID: 'service-area/session-install-errors/fib-lookup',
    Description: 'Number of session installation failures due to unsuccessful FIB route lookup',
    Label: 'FIB Lookup Failure',
    Keys: ['node']
  },
  {
    ID: 'service-area/session-install-errors/invalid-packet',
    Description: 'Number of session installation failures due to invalid packet',
    Label: 'Invalid Packet Failure',
    Keys: ['node']
  },
  {
    ID: 'service-area/session-install-errors/urpf-check-failure',
    Description: 'Number of session installation failures due to uRPF check failure',
    Label: 'uRPF check failure',
    Keys: ['node']
  },
  {
    ID: 'service-area/session-install-errors/duplicate-reverse-flow',
    Description: 'Number of flows that failed to be installed due to reverse flow matching an existing flow',
    Label: 'Flows not installed due to duplicate reverse flow',
    Keys: ['node']
  },
  {
    ID: 'service-area/session-install-errors/service-paths-unavailable',
    Description: 'Number of sessions that failed to be installed due to service paths not being available',
    Label: 'Session not installed due to service paths not being available',
    Keys: ['node']
  },
  {
    ID: 'service-area/dhcp/processed-packets',
    Description: 'The number of received DHCP packets processed',
    Label: 'Processed packets from fast lane',
    Keys: ['node']
  },
  {
    ID: 'service-area/dhcp/dropped-packets',
    Description: 'The number of dropped dhcp packets',
    Label: 'Dropped packets from fast lane',
    Keys: ['node']
  },
  {
    ID: 'service-area/dhcp/discover/processed-packets',
    Description: 'The number of discover packets received',
    Label: 'Received discover packets from fast lane',
    Keys: ['node']
  },
  {
    ID: 'service-area/dhcp/discover/dropped-packets',
    Description: 'The number of dropped discover packets',
    Label: 'Dropped discover packets from fast lane',
    Keys: ['node']
  },
  {
    ID: 'service-area/dhcp/offer/processed-packets',
    Description: 'The number of offer packets received',
    Label: 'Received offer packets from fast lane',
    Keys: ['node']
  },
  {
    ID: 'service-area/dhcp/offer/dropped-packets',
    Description: 'The number of dropped offer packets',
    Label: 'Dropped offer packets from fast lane',
    Keys: ['node']
  },
  {
    ID: 'service-area/dhcp/request/processed-packets',
    Description: 'The number of request packets received',
    Label: 'Received request packets from fast lane',
    Keys: ['node']
  },
  {
    ID: 'service-area/dhcp/request/dropped-packets',
    Description: 'The number of dropped request packets',
    Label: 'Dropped request packets from fast lane',
    Keys: ['node']
  },
  {
    ID: 'service-area/dhcp/decline/processed-packets',
    Description: 'The number of decline packets received',
    Label: 'Received decline packets from fast lane',
    Keys: ['node']
  },
  {
    ID: 'service-area/dhcp/decline/dropped-packets',
    Description: 'The number of dropped decline packets',
    Label: 'Dropped decline packets from fast lane',
    Keys: ['node']
  },
  {
    ID: 'service-area/dhcp/ack/processed-packets',
    Description: 'The number of ack packets received',
    Label: 'Received ack packets from fast lane',
    Keys: ['node']
  },
  {
    ID: 'service-area/dhcp/ack/dropped-packets',
    Description: 'The number of dropped ack packets',
    Label: 'Dropped ack packets from fast lane',
    Keys: ['node']
  },
  {
    ID: 'service-area/dhcp/nack/processed-packets',
    Description: 'The number of nack packets received',
    Label: 'Received nack packets from fast lane',
    Keys: ['node']
  },
  {
    ID: 'service-area/dhcp/nack/dropped-packets',
    Description: 'The number of dropped nack packets',
    Label: 'Dropped nack packets from fast lane',
    Keys: ['node']
  },
  {
    ID: 'service-area/dhcp/release/processed-packets',
    Description: 'The number of release packets received',
    Label: 'Received release packets from fast lane',
    Keys: ['node']
  },
  {
    ID: 'service-area/dhcp/release/dropped-packets',
    Description: 'The number of dropped release packets',
    Label: 'Dropped release packets from fast lane',
    Keys: ['node']
  },
  {
    ID: 'service-area/dhcp/unknown/processed-packets',
    Description: 'The number of unknown packets received',
    Label: 'Received unknown packets from fast lane',
    Keys: ['node']
  },
  {
    ID: 'service-area/dhcp/unknown/dropped-packets',
    Description: 'The number of dropped unknown packets',
    Label: 'Dropped unknown packets from fast lane',
    Keys: ['node']
  },
  {
    ID: 'redundancy/database-connection/active-connections',
    Description: 'Number of active client connections to the database',
    Label: 'Active connections to the database ',
    Keys: ['node']
  },
  {
    ID: 'redundancy/database-connection/connect',
    Description: 'Number of times successfully established connection to the database',
    Label: 'Successfully established connection',
    Keys: ['node']
  },
  {
    ID: 'redundancy/database-connection/client-disconnect',
    Description: 'Number of times successfully disconnected from the database',
    Label: 'Successfully disconnected from database',
    Keys: ['node']
  },
  {
    ID: 'redundancy/database-connection/error-disconnect',
    Description: 'Number of times disconnected from database due to internal error',
    Label: 'Disconnected from database due to internal error',
    Keys: ['node']
  },
  {
    ID: 'redundancy/database-connection/failed-connect',
    Description: 'Number of times attempted connection to the database failed',
    Label: 'Failed attempt at connecting to database',
    Keys: ['node']
  },
  {
    ID: 'redundancy/database-connection/errors',
    Description: 'Number of errors reported from the database while connecting/disconnecting',
    Label: 'Internal errors reported from the database',
    Keys: ['node']
  },
  {
    ID: 'redundancy/session-writes/write-request-sent',
    Description: 'Number of times write request was sent to the database',
    Label: 'Session write requests to the database',
    Keys: ['node']
  },
  {
    ID: 'redundancy/session-writes/write-request-success',
    Description: 'Number of times write request was successfully completed on the database',
    Label: 'Session write requests to the database were successful',
    Keys: ['node']
  },
  {
    ID: 'redundancy/session-writes/errors/encode-failures',
    Description: 'Number of times encode failed due to internal errors',
    Label: 'internal encode failures while processing redundancy buffer ',
    Keys: ['node']
  },
  {
    ID: 'redundancy/session-writes/errors/errors-from-database',
    Description: 'Number of times errors were received from database during write operations',
    Label: 'errors received from database during write operations ',
    Keys: ['node']
  },
  {
    ID: 'redundancy/session-refresh',
    Description: 'Number of times existing session entries were refreshed in the database',
    Label: 'Session Refresh to the database',
    Keys: ['node']
  },
  {
    ID: 'redundancy/session-delete',
    Description: 'Number of times session entries were deleted from the database',
    Label: 'Session deleted from the database',
    Keys: ['node']
  },
  {
    ID: 'redundancy/session-reads/query-pending',
    Description: 'Number of read queries outstanding to the database',
    Label: 'Read query pending response from database ',
    Keys: ['node']
  },
  {
    ID: 'redundancy/session-reads/query-result-success',
    Description: 'Number of times read query resulted in a match in the database',
    Label: 'Result for read query successfully found in database ',
    Keys: ['node']
  },
  {
    ID: 'redundancy/session-reads/query-result-not-found',
    Description: 'Number of times read query resulted in no entry in the database',
    Label: 'Result for read query not found in database ',
    Keys: ['node']
  },
  {
    ID: 'redundancy/session-reads/query-result-timeout',
    Description: 'Number of times read query timed out waiting for result from the database',
    Label: 'Result for read query timed out waiting for result from database ',
    Keys: ['node']
  },
  {
    ID: 'redundancy/session-reads/tcp-reset-sent',
    Description: 'Number of times TCP RST sent due to query failure.',
    Label: 'TCP RST packet sent due to query failure.',
    Keys: ['node']
  },
  {
    ID: 'redundancy/session-reads/net-unreachable-sent',
    Description: 'Number of ICMP Network Unreachable packets after query failure.',
    Label: 'ICMP Network Unreachable packet sent after query failure.',
    Keys: ['node']
  },
  {
    ID: 'redundancy/session-reads/create-new-session',
    Description: 'Number of database miss resulting in new session being created.',
    Label: 'New session being created due to database miss.',
    Keys: ['node']
  },
  {
    ID: 'redundancy/session-reconstruction/created-local-service-paths',
    Description: 'Number of times local service-path was reconstructed from redundancy buffer',
    Label: 'Successfully reconstructed a local service-path from redundancy buffer',
    Keys: ['node']
  },
  {
    ID: 'redundancy/session-reconstruction/created-inter-node-service-paths',
    Description: 'Number of times inter-node service-path was reconstructed from redundancy buffer',
    Label: 'Successfully reconstructed a inter-node service-path from redundancy buffer',
    Keys: ['node']
  },
  {
    ID: 'redundancy/session-reconstruction/created-inter-router-service-paths',
    Description: 'Number of times inter-router service-path was reconstructed from redundancy buffer',
    Label: 'Successfully reconstructed a inter-router service-path from redundancy buffer',
    Keys: ['node']
  },
  {
    ID: 'redundancy/session-reconstruction/diverted-to-external-protocol-agent',
    Description: 'Number of times packets successfully diverted to external-protocol-agent',
    Label: 'Successfully diverted packets to external-protocol-agent',
    Keys: ['node']
  },
  {
    ID: 'redundancy/session-errors/invalid-session-key',
    Description: 'Number of times invalid session-key was received from database',
    Label: 'Invalid session-key received ',
    Keys: ['node']
  },
  {
    ID: 'redundancy/session-errors/invalid-buffer-received',
    Description: 'Number of times invalid buffer was received from database',
    Label: 'Invalid buffer received from database ',
    Keys: ['node']
  },
  {
    ID: 'redundancy/session-errors/decode-failures',
    Description: 'Number of times decode fails due to internal errors',
    Label: 'internal decode failures while processing redundancy buffer ',
    Keys: ['node']
  },
  {
    ID: 'redundancy/session-errors/session-update-failures',
    Description: 'Number of times session update failed',
    Label: 'failures to update session',
    Keys: ['node']
  },
  {
    ID: 'redundancy/session-errors/cache-timeouts',
    Description: 'Number of times packet cache timed out when the database request came back',
    Label: 'Failure to reconstruct session due to packet cache timeouts',
    Keys: ['node']
  },
  {
    ID: 'redundancy/session-errors/session-not-found',
    Description: 'Number of times redundancy session was not found in the session table',
    Label: 'Redundancy session expected but not found in session table',
    Keys: ['node']
  },
  {
    ID: 'redundancy/session-errors/new-session-creation-failure',
    Description: 'Number of times database miss processing resulting in failure to create new session',
    Label: 'Failure in creating new regular session.',
    Keys: ['node']
  },
  {
    ID: 'redundancy/session-errors/unsupported-feature',
    Description: 'Number of times an unsupported feature was attempted',
    Label: 'Attempt to use an unsupported feature.',
    Keys: ['node']
  },
  {
    ID: 'redundancy/session-errors/source-lookup-error',
    Description: 'Number of times recovery failed due to source lookup miss',
    Label: 'Failed to recover session due to source lookup miss',
    Keys: ['node']
  },
  {
    ID: 'redundancy/session-errors/fib-lookup-error',
    Description: 'Number of times recovery failed due to fib miss',
    Label: 'Failed to recover session due to fib miss',
    Keys: ['node']
  },
  {
    ID: 'redundancy/port-initialization/marker-query-pending',
    Description: 'Number of marker query reads outstanding to the database',
    Label: 'Marker query read pending response from database ',
    Keys: ['node']
  },
  {
    ID: 'redundancy/port-initialization/marker-record-found',
    Description: 'Number of times marker query was found to exist in the database',
    Label: 'Marker record already exists in database ',
    Keys: ['node']
  },
  {
    ID: 'redundancy/port-initialization/marker-record-not-found',
    Description: 'Number of times marker query was not found in the database',
    Label: "Marker record doesn't exist in database ",
    Keys: ['node']
  },
  {
    ID: 'redundancy/port-initialization/marker-record-read-error',
    Description: 'Number of times marker query read from the database resulted in error',
    Label: 'Marker record read error from database ',
    Keys: ['node']
  },
  {
    ID: 'redundancy/port-initialization/marker-record-write',
    Description: 'Number of times marker query was written to the database',
    Label: 'Marker record written to the database ',
    Keys: ['node']
  },
  {
    ID: 'redundancy/port-initialization/pending-queries',
    Description: 'Number of pending queries awaiting connection.',
    Label: 'Pending queries waiting for connection. ',
    Keys: ['node']
  },
  {
    ID: 'redundancy/port-list-records/list-record-push',
    Description: 'Number of list record entries pushed to the database',
    Label: 'List record entry pushed to the database ',
    Keys: ['node']
  },
  {
    ID: 'redundancy/port-list-records/list-record-pop-pending',
    Description: 'Number of list pop query outstanding to the database',
    Label: 'List pop query pending response from database ',
    Keys: ['node']
  },
  {
    ID: 'redundancy/port-list-records/list-record-pop-success',
    Description: 'Number of list record entries successfully popped from the database',
    Label: 'List record entry successfully popped from the database ',
    Keys: ['node']
  },
  {
    ID: 'redundancy/port-list-records/list-record-pop-failures',
    Description: 'Number of times no records were found in the database',
    Label: 'No records found in the database',
    Keys: ['node']
  },
  {
    ID: 'redundancy/port-list-records/list-record-pop-errors',
    Description: 'Number of errors while popping list record entries from the database',
    Label: 'Error popping list record entry from the database ',
    Keys: ['node']
  },
  {
    ID: 'waypoint/active-inter-router-tables',
    Description: 'The number of active inter-router waypoint tables',
    Label: 'Active inter-router waypoint tables',
    Keys: ['node']
  },
  {
    ID: 'waypoint/inactive-inter-router-tables',
    Description: 'The number of inactive inter-router waypoint tables',
    Label: 'Inactive inter-router waypoint tables',
    Keys: ['node']
  },
  {
    ID: 'waypoint/giid-transition-to-active',
    Description: 'The number of notifications for interface transitioning to active',
    Label: 'Number of notifications for interface transitioning to active',
    Keys: ['node']
  },
  {
    ID: 'waypoint/giid-transition-to-inactive',
    Description: 'The number of notifications for interface transitioning to inactive',
    Label: 'Number of notifications for interface transitioning to inactive',
    Keys: ['node']
  },
  {
    ID: 'waypoint/allocate-ports-for-range-based-tables',
    Description: 'The number of times ports were allocated to db for range based tables',
    Label: 'Number of times ports were allocated to db for range based tables',
    Keys: ['node']
  },
  {
    ID: 'waypoint/allocate-ports-for-default-range-tables',
    Description: 'The number of times ports were allocated to db for default range tables',
    Label: 'Number of times ports were allocated to db for default range tables',
    Keys: ['node']
  },
  {
    ID: 'waypoint/release-ports-to-db',
    Description: 'The number of times ports were released back to database',
    Label: 'Number of times ports were released back to database',
    Keys: ['node']
  },
  {
    ID: 'waypoint/reinitialize-ports-in-db',
    Description: 'The number of times ports were renitialized after recovery',
    Label: 'Number of times ports were reinitialized after recovery',
    Keys: ['node']
  },
  {
    ID: 'waypoint/reserved-ports',
    Description: 'The number of times ports were reserved during recovery',
    Label: 'Number of times ports were reserved during recovery',
    Keys: ['node']
  },
  {
    ID: 'source-nat/active-tables',
    Description: 'The number of active source-nat tables',
    Label: 'Active source-nat tables',
    Keys: ['node']
  },
  {
    ID: 'source-nat/inactive-tables',
    Description: 'The number of inactive source-nat tables',
    Label: 'Inactive source-nat tables',
    Keys: ['node']
  },
  {
    ID: 'source-nat/giid-transition-to-active',
    Description: 'The number of notifications for interface transitioning to active',
    Label: 'Number of notifications for interface transitioning to active',
    Keys: ['node']
  },
  {
    ID: 'source-nat/giid-transition-to-inactive',
    Description: 'The number of notifications for interface transitioning to inactive',
    Label: 'Number of notifications for interface transitioning to inactive',
    Keys: ['node']
  },
  {
    ID: 'source-nat/allocate-ports-for-db',
    Description: 'The number of times ports were allocated to db',
    Label: 'Number of times ports were allocated to db',
    Keys: ['node']
  },
  {
    ID: 'source-nat/release-ports-to-db',
    Description: 'The number of times ports were released back to database',
    Label: 'Number of times ports were released back to database',
    Keys: ['node']
  },
  {
    ID: 'source-nat/reinitialize-ports-in-db',
    Description: 'The number of times ports were renitialized after recovery',
    Label: 'Number of times ports were reinitialized after recovery',
    Keys: ['node']
  },
  {
    ID: 'source-nat/reserved-ports',
    Description: 'The number of times ports were reserved during recovery',
    Label: 'Number of times ports were reserved during recovery',
    Keys: ['node']
  },
  {
    ID: 'highway/actions/action-meter',
    Description: 'The number of active Action Entries',
    Label: 'Active Action Entries',
    Keys: ['node']
  },
  {
    ID: 'highway/firewall-detector/request-sent',
    Description: 'The number of firewall discovery requests sent',
    Label: 'Discovery requests sent',
    Keys: ['node']
  },
  {
    ID: 'highway/firewall-detector/request-received',
    Description: 'The number of firewall discovery requests received',
    Label: 'Discovery requests received',
    Keys: ['node']
  },
  {
    ID: 'highway/firewall-detector/reply-sent',
    Description: 'The number of firewall discovery replies sent',
    Label: 'Discovery replies sent',
    Keys: ['node']
  },
  {
    ID: 'highway/firewall-detector/reply-received',
    Description: 'The number of firewall discovery replies received',
    Label: 'Discovery replies received',
    Keys: ['node']
  },
  {
    ID: 'highway/firewall-detector/discovery-timeout',
    Description: 'The number of firewall discovery attempts that detected a firewall',
    Label: 'Discovery timeout',
    Keys: ['node']
  },
  {
    ID: 'highway/firewall-detector/tcp-reset-received',
    Description: 'The number of TCP reset packets received by firewall detector',
    Label: 'TCP Reset Packets Received',
    Keys: ['node']
  },
  {
    ID: 'highway/firewall-detector/unknown-received',
    Description: 'The number of unknown packets received by firewall detector',
    Label: 'Unknown Packets Received',
    Keys: ['node']
  },
  {
    ID: 'highway/action-event/enqueue',
    Description: 'The number of action event messages enqueued',
    Label: 'Action Event messages enqueued',
    Keys: ['node']
  },
  {
    ID: 'highway/action-event/dequeue',
    Description: 'The number of action event messages dequeued',
    Label: 'Action Event messages dequeued',
    Keys: ['node']
  },
  {
    ID: 'highway/action-event/enqueue-failure',
    Description: 'The number of action event messages that failed to be enqueued',
    Label: 'Action Event messages failed to be enqueued',
    Keys: ['node']
  },
  {
    ID: 'highway/action-event/send-success',
    Description: 'The number of action event messages successfully sent',
    Label: 'Action Event messages sent',
    Keys: ['node']
  },
  {
    ID: 'highway/action-event/send-timeout',
    Description: 'The number of action event messages which timed out',
    Label: 'Action Event messages timed out',
    Keys: ['node']
  },
  {
    ID: 'highway/action-event/send-retry',
    Description: 'The number of action event messages which were retried',
    Label: 'Action Event message retries',
    Keys: ['node']
  },
  {
    ID: 'aggregate-session/device-interface/bandwidth',
    Description: 'Total bandwidth of active sessions',
    Label: 'Session Bandwidth',
    Keys: ['device-interface']
  },
  {
    ID: 'aggregate-session/device-interface/session-count',
    Description: 'Total number of active sessions',
    Label: 'Session Count',
    Keys: ['device-interface']
  },
  {
    ID: 'aggregate-session/device-interface/session-arrival-rate',
    Description: 'Rate of arrival for new sessions per unit time',
    Label: 'Session Arrival Rate',
    Keys: ['device-interface']
  },
  {
    ID: 'aggregate-session/device-interface/session-departure-rate',
    Description: 'Rate of departure for terminated sessions per unit time',
    Label: 'Session Departure Rate',
    Keys: ['device-interface']
  },
  {
    ID: 'aggregate-session/device-interface/total-data',
    Description: 'Total data of active sessions',
    Label: 'Total Data',
    Keys: ['device-interface']
  },
  {
    ID: 'aggregate-session/device-interface/rx-data',
    Description: 'Total data received of active sessions',
    Label: 'Data Received',
    Keys: ['device-interface']
  },
  {
    ID: 'aggregate-session/device-interface/tx-data',
    Description: 'Total data sent of active sessions',
    Label: 'Data Sent',
    Keys: ['device-interface']
  },
  {
    ID: 'aggregate-session/device-interface/total-tcp-data',
    Description: 'Total TCP data of active sessions',
    Label: 'Total TCP Data',
    Keys: ['device-interface']
  },
  {
    ID: 'aggregate-session/device-interface/rx-tcp-data',
    Description: 'Total TCP data received of active sessions',
    Label: 'TCP Data Received',
    Keys: ['device-interface']
  },
  {
    ID: 'aggregate-session/device-interface/tx-tcp-data',
    Description: 'Total TCP data sent of active sessions',
    Label: 'TCP Data Sent',
    Keys: ['device-interface']
  },
  {
    ID: 'aggregate-session/device-interface/total-udp-data',
    Description: 'Total UDP data of active sessions',
    Label: 'Total UDP Data',
    Keys: ['device-interface']
  },
  {
    ID: 'aggregate-session/device-interface/rx-udp-data',
    Description: 'Total UDP data received of active sessions',
    Label: 'UDP Data Received',
    Keys: ['device-interface']
  },
  {
    ID: 'aggregate-session/device-interface/tx-udp-data',
    Description: 'Total UDP data sent of active sessions',
    Label: 'UDP Data Sent',
    Keys: ['device-interface']
  },
  {
    ID: 'aggregate-session/device-interface/total-packets',
    Description: 'Total packets of active sessions',
    Label: 'Total Packets',
    Keys: ['device-interface']
  },
  {
    ID: 'aggregate-session/device-interface/rx-packets',
    Description: 'Total packets received of active sessions',
    Label: 'Packets Received',
    Keys: ['device-interface']
  },
  {
    ID: 'aggregate-session/device-interface/tx-packets',
    Description: 'Total packets sent of active sessions',
    Label: 'Packets Sent',
    Keys: ['device-interface']
  },
  {
    ID: 'aggregate-session/device-interface/total-tcp-packets',
    Description: 'Total TCP packets of active sessions',
    Label: 'Total TCP Packets',
    Keys: ['device-interface']
  },
  {
    ID: 'aggregate-session/device-interface/rx-tcp-packets',
    Description: 'Total TCP packets received of active sessions',
    Label: 'TCP Packets Received',
    Keys: ['device-interface']
  },
  {
    ID: 'aggregate-session/device-interface/tx-tcp-packets',
    Description: 'Total TCP packets sent of active sessions',
    Label: 'TCP Packets Sent',
    Keys: ['device-interface']
  },
  {
    ID: 'aggregate-session/device-interface/total-udp-packets',
    Description: 'Total UDP packets of active sessions',
    Label: 'Total UDP Packets',
    Keys: ['device-interface']
  },
  {
    ID: 'aggregate-session/device-interface/rx-udp-packets',
    Description: 'Total UDP packets received of active sessions',
    Label: 'UDP Packets Received',
    Keys: ['device-interface']
  },
  {
    ID: 'aggregate-session/device-interface/tx-udp-packets',
    Description: 'Total UDP packets sent of active sessions',
    Label: 'UDP Packets Sent',
    Keys: ['device-interface']
  },
  {
    ID: 'aggregate-session/device-interface/total-tcp-retransmissions',
    Description: 'Total TCP data retransmissions of active sessions',
    Label: 'Total TCP Data Retransmissions',
    Keys: ['device-interface']
  },
  {
    ID: 'aggregate-session/device-interface/rx-tcp-retransmissions',
    Description: 'Total reverse TCP data retransmissions of active sessions',
    Label: 'Reverse TCP Data Retransmissions',
    Keys: ['device-interface']
  },
  {
    ID: 'aggregate-session/device-interface/tx-tcp-retransmissions',
    Description: 'Total forward TCP data retransmissions of active sessions',
    Label: 'Forward TCP Data Retransmissions',
    Keys: ['device-interface']
  },
  {
    ID: 'aggregate-session/network-interface/bandwidth',
    Description: 'Total bandwidth of active sessions',
    Label: 'Session Bandwidth',
    Keys: ['network-interface']
  },
  {
    ID: 'aggregate-session/network-interface/session-count',
    Description: 'Total number of active sessions',
    Label: 'Session Count',
    Keys: ['network-interface']
  },
  {
    ID: 'aggregate-session/network-interface/session-arrival-rate',
    Description: 'Rate of arrival for new sessions per unit time',
    Label: 'Session Arrival Rate',
    Keys: ['network-interface']
  },
  {
    ID: 'aggregate-session/network-interface/session-departure-rate',
    Description: 'Rate of departure for terminated sessions per unit time',
    Label: 'Session Departure Rate',
    Keys: ['network-interface']
  },
  {
    ID: 'aggregate-session/network-interface/total-data',
    Description: 'Total data of active sessions',
    Label: 'Total Data',
    Keys: ['network-interface']
  },
  {
    ID: 'aggregate-session/network-interface/rx-data',
    Description: 'Total data received of active sessions',
    Label: 'Data Received',
    Keys: ['network-interface']
  },
  {
    ID: 'aggregate-session/network-interface/tx-data',
    Description: 'Total data sent of active sessions',
    Label: 'Data Sent',
    Keys: ['network-interface']
  },
  {
    ID: 'aggregate-session/network-interface/total-tcp-data',
    Description: 'Total TCP data of active sessions',
    Label: 'Total TCP Data',
    Keys: ['network-interface']
  },
  {
    ID: 'aggregate-session/network-interface/rx-tcp-data',
    Description: 'Total TCP data received of active sessions',
    Label: 'TCP Data Received',
    Keys: ['network-interface']
  },
  {
    ID: 'aggregate-session/network-interface/tx-tcp-data',
    Description: 'Total TCP data sent of active sessions',
    Label: 'TCP Data Sent',
    Keys: ['network-interface']
  },
  {
    ID: 'aggregate-session/network-interface/total-udp-data',
    Description: 'Total UDP data of active sessions',
    Label: 'Total UDP Data',
    Keys: ['network-interface']
  },
  {
    ID: 'aggregate-session/network-interface/rx-udp-data',
    Description: 'Total UDP data received of active sessions',
    Label: 'UDP Data Received',
    Keys: ['network-interface']
  },
  {
    ID: 'aggregate-session/network-interface/tx-udp-data',
    Description: 'Total UDP data sent of active sessions',
    Label: 'UDP Data Sent',
    Keys: ['network-interface']
  },
  {
    ID: 'aggregate-session/network-interface/total-packets',
    Description: 'Total packets of active sessions',
    Label: 'Total Packets',
    Keys: ['network-interface']
  },
  {
    ID: 'aggregate-session/network-interface/rx-packets',
    Description: 'Total packets received of active sessions',
    Label: 'Packets Received',
    Keys: ['network-interface']
  },
  {
    ID: 'aggregate-session/network-interface/tx-packets',
    Description: 'Total packets sent of active sessions',
    Label: 'Packets Sent',
    Keys: ['network-interface']
  },
  {
    ID: 'aggregate-session/network-interface/total-tcp-packets',
    Description: 'Total TCP packets of active sessions',
    Label: 'Total TCP Packets',
    Keys: ['network-interface']
  },
  {
    ID: 'aggregate-session/network-interface/rx-tcp-packets',
    Description: 'Total TCP packets received of active sessions',
    Label: 'TCP Packets Received',
    Keys: ['network-interface']
  },
  {
    ID: 'aggregate-session/network-interface/tx-tcp-packets',
    Description: 'Total TCP packets sent of active sessions',
    Label: 'TCP Packets Sent',
    Keys: ['network-interface']
  },
  {
    ID: 'aggregate-session/network-interface/total-udp-packets',
    Description: 'Total UDP packets of active sessions',
    Label: 'Total UDP Packets',
    Keys: ['network-interface']
  },
  {
    ID: 'aggregate-session/network-interface/rx-udp-packets',
    Description: 'Total UDP packets received of active sessions',
    Label: 'UDP Packets Received',
    Keys: ['network-interface']
  },
  {
    ID: 'aggregate-session/network-interface/tx-udp-packets',
    Description: 'Total UDP packets sent of active sessions',
    Label: 'UDP Packets Sent',
    Keys: ['network-interface']
  },
  {
    ID: 'aggregate-session/network-interface/total-tcp-retransmissions',
    Description: 'Total TCP data retransmissions of active sessions',
    Label: 'Total TCP Data Retransmissions',
    Keys: ['network-interface']
  },
  {
    ID: 'aggregate-session/network-interface/rx-tcp-retransmissions',
    Description: 'Total reverse TCP data retransmissions of active sessions',
    Label: 'Reverse TCP Data Retransmissions',
    Keys: ['network-interface']
  },
  {
    ID: 'aggregate-session/network-interface/tx-tcp-retransmissions',
    Description: 'Total forward TCP data retransmissions of active sessions',
    Label: 'Forward TCP Data Retransmissions',
    Keys: ['network-interface']
  },
  {
    ID: 'aggregate-session/node/gross-entitlement',
    Description: 'Total bandwidth of sessions, gross input for entitlement',
    Label: 'Entitlement Bandwidth',
    Keys: ['node']
  },
  {
    ID: 'aggregate-session/node/bandwidth',
    Description: 'Total bandwidth of active sessions',
    Label: 'Session Bandwidth',
    Keys: ['node']
  },
  {
    ID: 'aggregate-session/node/session-count',
    Description: 'Total number of active sessions',
    Label: 'Session Count',
    Keys: ['node']
  },
  {
    ID: 'aggregate-session/node/session-arrival-rate',
    Description: 'Rate of arrival for new sessions per unit time',
    Label: 'Session Arrival Rate',
    Keys: ['node']
  },
  {
    ID: 'aggregate-session/node/session-departure-rate',
    Description: 'Rate of departure for terminated sessions per unit time',
    Label: 'Session Departure Rate',
    Keys: ['node']
  },
  {
    ID: 'aggregate-session/node/total-data',
    Description: 'Total data of active sessions',
    Label: 'Total Data',
    Keys: ['node']
  },
  {
    ID: 'aggregate-session/node/rx-data',
    Description: 'Total data received of active sessions',
    Label: 'Data Received',
    Keys: ['node']
  },
  {
    ID: 'aggregate-session/node/tx-data',
    Description: 'Total data sent of active sessions',
    Label: 'Data Sent',
    Keys: ['node']
  },
  {
    ID: 'aggregate-session/node/total-tcp-data',
    Description: 'Total TCP data of active sessions',
    Label: 'Total TCP Data',
    Keys: ['node']
  },
  {
    ID: 'aggregate-session/node/rx-tcp-data',
    Description: 'Total TCP data received of active sessions',
    Label: 'TCP Data Received',
    Keys: ['node']
  },
  {
    ID: 'aggregate-session/node/tx-tcp-data',
    Description: 'Total TCP data sent of active sessions',
    Label: 'TCP Data Sent',
    Keys: ['node']
  },
  {
    ID: 'aggregate-session/node/total-udp-data',
    Description: 'Total UDP data of active sessions',
    Label: 'Total UDP Data',
    Keys: ['node']
  },
  {
    ID: 'aggregate-session/node/rx-udp-data',
    Description: 'Total UDP data received of active sessions',
    Label: 'UDP Data Received',
    Keys: ['node']
  },
  {
    ID: 'aggregate-session/node/tx-udp-data',
    Description: 'Total UDP data sent of active sessions',
    Label: 'UDP Data Sent',
    Keys: ['node']
  },
  {
    ID: 'aggregate-session/node/total-packets',
    Description: 'Total packets of active sessions',
    Label: 'Total Packets',
    Keys: ['node']
  },
  {
    ID: 'aggregate-session/node/rx-packets',
    Description: 'Total packets received of active sessions',
    Label: 'Packets Received',
    Keys: ['node']
  },
  {
    ID: 'aggregate-session/node/tx-packets',
    Description: 'Total packets sent of active sessions',
    Label: 'Packets Sent',
    Keys: ['node']
  },
  {
    ID: 'aggregate-session/node/total-tcp-packets',
    Description: 'Total TCP packets of active sessions',
    Label: 'Total TCP Packets',
    Keys: ['node']
  },
  {
    ID: 'aggregate-session/node/rx-tcp-packets',
    Description: 'Total TCP packets received of active sessions',
    Label: 'TCP Packets Received',
    Keys: ['node']
  },
  {
    ID: 'aggregate-session/node/tx-tcp-packets',
    Description: 'Total TCP packets sent of active sessions',
    Label: 'TCP Packets Sent',
    Keys: ['node']
  },
  {
    ID: 'aggregate-session/node/total-udp-packets',
    Description: 'Total UDP packets of active sessions',
    Label: 'Total UDP Packets',
    Keys: ['node']
  },
  {
    ID: 'aggregate-session/node/rx-udp-packets',
    Description: 'Total UDP packets received of active sessions',
    Label: 'UDP Packets Received',
    Keys: ['node']
  },
  {
    ID: 'aggregate-session/node/tx-udp-packets',
    Description: 'Total UDP packets sent of active sessions',
    Label: 'UDP Packets Sent',
    Keys: ['node']
  },
  {
    ID: 'aggregate-session/node/total-tcp-retransmissions',
    Description: 'Total TCP data retransmissions of active sessions',
    Label: 'Total TCP Data Retransmissions',
    Keys: ['node']
  },
  {
    ID: 'aggregate-session/node/rx-tcp-retransmissions',
    Description: 'Total reverse TCP data retransmissions of active sessions',
    Label: 'Reverse TCP Data Retransmissions',
    Keys: ['node']
  },
  {
    ID: 'aggregate-session/node/tx-tcp-retransmissions',
    Description: 'Total forward TCP data retransmissions of active sessions',
    Label: 'Forward TCP Data Retransmissions',
    Keys: ['node']
  },
  {
    ID: 'aggregate-session/service/bandwidth',
    Description: 'Total bandwidth of active sessions',
    Label: 'Session Bandwidth',
    Keys: ['service']
  },
  {
    ID: 'aggregate-session/service/session-count',
    Description: 'Total number of active sessions',
    Label: 'Session Count',
    Keys: ['service']
  },
  {
    ID: 'aggregate-session/service/session-arrival-rate',
    Description: 'Rate of arrival for new sessions per unit time',
    Label: 'Session Arrival Rate',
    Keys: ['service']
  },
  {
    ID: 'aggregate-session/service/session-departure-rate',
    Description: 'Rate of departure for terminated sessions per unit time',
    Label: 'Session Departure Rate',
    Keys: ['service']
  },
  {
    ID: 'aggregate-session/service/total-data',
    Description: 'Total data of active sessions',
    Label: 'Total Data',
    Keys: ['service']
  },
  {
    ID: 'aggregate-session/service/rx-data',
    Description: 'Total data received of active sessions',
    Label: 'Data Received',
    Keys: ['service']
  },
  {
    ID: 'aggregate-session/service/tx-data',
    Description: 'Total data sent of active sessions',
    Label: 'Data Sent',
    Keys: ['service']
  },
  {
    ID: 'aggregate-session/service/total-tcp-data',
    Description: 'Total TCP data of active sessions',
    Label: 'Total TCP Data',
    Keys: ['service']
  },
  {
    ID: 'aggregate-session/service/rx-tcp-data',
    Description: 'Total TCP data received of active sessions',
    Label: 'TCP Data Received',
    Keys: ['service']
  },
  {
    ID: 'aggregate-session/service/tx-tcp-data',
    Description: 'Total TCP data sent of active sessions',
    Label: 'TCP Data Sent',
    Keys: ['service']
  },
  {
    ID: 'aggregate-session/service/total-udp-data',
    Description: 'Total UDP data of active sessions',
    Label: 'Total UDP Data',
    Keys: ['service']
  },
  {
    ID: 'aggregate-session/service/rx-udp-data',
    Description: 'Total UDP data received of active sessions',
    Label: 'UDP Data Received',
    Keys: ['service']
  },
  {
    ID: 'aggregate-session/service/tx-udp-data',
    Description: 'Total UDP data sent of active sessions',
    Label: 'UDP Data Sent',
    Keys: ['service']
  },
  {
    ID: 'aggregate-session/service/total-packets',
    Description: 'Total packets of active sessions',
    Label: 'Total Packets',
    Keys: ['service']
  },
  {
    ID: 'aggregate-session/service/rx-packets',
    Description: 'Total packets received of active sessions',
    Label: 'Packets Received',
    Keys: ['service']
  },
  {
    ID: 'aggregate-session/service/tx-packets',
    Description: 'Total packets sent of active sessions',
    Label: 'Packets Sent',
    Keys: ['service']
  },
  {
    ID: 'aggregate-session/service/total-tcp-packets',
    Description: 'Total TCP packets of active sessions',
    Label: 'Total TCP Packets',
    Keys: ['service']
  },
  {
    ID: 'aggregate-session/service/rx-tcp-packets',
    Description: 'Total TCP packets received of active sessions',
    Label: 'TCP Packets Received',
    Keys: ['service']
  },
  {
    ID: 'aggregate-session/service/tx-tcp-packets',
    Description: 'Total TCP packets sent of active sessions',
    Label: 'TCP Packets Sent',
    Keys: ['service']
  },
  {
    ID: 'aggregate-session/service/total-udp-packets',
    Description: 'Total UDP packets of active sessions',
    Label: 'Total UDP Packets',
    Keys: ['service']
  },
  {
    ID: 'aggregate-session/service/rx-udp-packets',
    Description: 'Total UDP packets received of active sessions',
    Label: 'UDP Packets Received',
    Keys: ['service']
  },
  {
    ID: 'aggregate-session/service/tx-udp-packets',
    Description: 'Total UDP packets sent of active sessions',
    Label: 'UDP Packets Sent',
    Keys: ['service']
  },
  {
    ID: 'aggregate-session/service/total-tcp-retransmissions',
    Description: 'Total TCP data retransmissions of active sessions',
    Label: 'Total TCP Data Retransmissions',
    Keys: ['service']
  },
  {
    ID: 'aggregate-session/service/rx-tcp-retransmissions',
    Description: 'Total reverse TCP data retransmissions of active sessions',
    Label: 'Reverse TCP Data Retransmissions',
    Keys: ['service']
  },
  {
    ID: 'aggregate-session/service/tx-tcp-retransmissions',
    Description: 'Total forward TCP data retransmissions of active sessions',
    Label: 'Forward TCP Data Retransmissions',
    Keys: ['service']
  },
  {
    ID: 'aggregate-session/service-class/bandwidth',
    Description: 'Total bandwidth of active sessions',
    Label: 'Session Bandwidth',
    Keys: ['service-class']
  },
  {
    ID: 'aggregate-session/service-class/session-count',
    Description: 'Total number of active sessions',
    Label: 'Session Count',
    Keys: ['service-class']
  },
  {
    ID: 'aggregate-session/service-class/session-arrival-rate',
    Description: 'Rate of arrival for new sessions per unit time',
    Label: 'Session Arrival Rate',
    Keys: ['service-class']
  },
  {
    ID: 'aggregate-session/service-class/session-departure-rate',
    Description: 'Rate of departure for terminated sessions per unit time',
    Label: 'Session Departure Rate',
    Keys: ['service-class']
  },
  {
    ID: 'aggregate-session/service-class/total-data',
    Description: 'Total data of active sessions',
    Label: 'Total Data',
    Keys: ['service-class']
  },
  {
    ID: 'aggregate-session/service-class/rx-data',
    Description: 'Total data received of active sessions',
    Label: 'Data Received',
    Keys: ['service-class']
  },
  {
    ID: 'aggregate-session/service-class/tx-data',
    Description: 'Total data sent of active sessions',
    Label: 'Data Sent',
    Keys: ['service-class']
  },
  {
    ID: 'aggregate-session/service-class/total-tcp-data',
    Description: 'Total TCP data of active sessions',
    Label: 'Total TCP Data',
    Keys: ['service-class']
  },
  {
    ID: 'aggregate-session/service-class/rx-tcp-data',
    Description: 'Total TCP data received of active sessions',
    Label: 'TCP Data Received',
    Keys: ['service-class']
  },
  {
    ID: 'aggregate-session/service-class/tx-tcp-data',
    Description: 'Total TCP data sent of active sessions',
    Label: 'TCP Data Sent',
    Keys: ['service-class']
  },
  {
    ID: 'aggregate-session/service-class/total-udp-data',
    Description: 'Total UDP data of active sessions',
    Label: 'Total UDP Data',
    Keys: ['service-class']
  },
  {
    ID: 'aggregate-session/service-class/rx-udp-data',
    Description: 'Total UDP data received of active sessions',
    Label: 'UDP Data Received',
    Keys: ['service-class']
  },
  {
    ID: 'aggregate-session/service-class/tx-udp-data',
    Description: 'Total UDP data sent of active sessions',
    Label: 'UDP Data Sent',
    Keys: ['service-class']
  },
  {
    ID: 'aggregate-session/service-class/total-packets',
    Description: 'Total packets of active sessions',
    Label: 'Total Packets',
    Keys: ['service-class']
  },
  {
    ID: 'aggregate-session/service-class/rx-packets',
    Description: 'Total packets received of active sessions',
    Label: 'Packets Received',
    Keys: ['service-class']
  },
  {
    ID: 'aggregate-session/service-class/tx-packets',
    Description: 'Total packets sent of active sessions',
    Label: 'Packets Sent',
    Keys: ['service-class']
  },
  {
    ID: 'aggregate-session/service-class/total-tcp-packets',
    Description: 'Total TCP packets of active sessions',
    Label: 'Total TCP Packets',
    Keys: ['service-class']
  },
  {
    ID: 'aggregate-session/service-class/rx-tcp-packets',
    Description: 'Total TCP packets received of active sessions',
    Label: 'TCP Packets Received',
    Keys: ['service-class']
  },
  {
    ID: 'aggregate-session/service-class/tx-tcp-packets',
    Description: 'Total TCP packets sent of active sessions',
    Label: 'TCP Packets Sent',
    Keys: ['service-class']
  },
  {
    ID: 'aggregate-session/service-class/total-udp-packets',
    Description: 'Total UDP packets of active sessions',
    Label: 'Total UDP Packets',
    Keys: ['service-class']
  },
  {
    ID: 'aggregate-session/service-class/rx-udp-packets',
    Description: 'Total UDP packets received of active sessions',
    Label: 'UDP Packets Received',
    Keys: ['service-class']
  },
  {
    ID: 'aggregate-session/service-class/tx-udp-packets',
    Description: 'Total UDP packets sent of active sessions',
    Label: 'UDP Packets Sent',
    Keys: ['service-class']
  },
  {
    ID: 'aggregate-session/service-class/total-tcp-retransmissions',
    Description: 'Total TCP data retransmissions of active sessions',
    Label: 'Total TCP Data Retransmissions',
    Keys: ['service-class']
  },
  {
    ID: 'aggregate-session/service-class/rx-tcp-retransmissions',
    Description: 'Total reverse TCP data retransmissions of active sessions',
    Label: 'Reverse TCP Data Retransmissions',
    Keys: ['service-class']
  },
  {
    ID: 'aggregate-session/service-class/tx-tcp-retransmissions',
    Description: 'Total forward TCP data retransmissions of active sessions',
    Label: 'Forward TCP Data Retransmissions',
    Keys: ['service-class']
  },
  {
    ID: 'aggregate-session/service-group/bandwidth',
    Description: 'Total bandwidth of active sessions',
    Label: 'Session Bandwidth',
    Keys: ['service-group']
  },
  {
    ID: 'aggregate-session/service-group/session-count',
    Description: 'Total number of active sessions',
    Label: 'Session Count',
    Keys: ['service-group']
  },
  {
    ID: 'aggregate-session/service-group/session-arrival-rate',
    Description: 'Rate of arrival for new sessions per unit time',
    Label: 'Session Arrival Rate',
    Keys: ['service-group']
  },
  {
    ID: 'aggregate-session/service-group/session-departure-rate',
    Description: 'Rate of departure for terminated sessions per unit time',
    Label: 'Session Departure Rate',
    Keys: ['service-group']
  },
  {
    ID: 'aggregate-session/service-group/total-data',
    Description: 'Total data of active sessions',
    Label: 'Total Data',
    Keys: ['service-group']
  },
  {
    ID: 'aggregate-session/service-group/rx-data',
    Description: 'Total data received of active sessions',
    Label: 'Data Received',
    Keys: ['service-group']
  },
  {
    ID: 'aggregate-session/service-group/tx-data',
    Description: 'Total data sent of active sessions',
    Label: 'Data Sent',
    Keys: ['service-group']
  },
  {
    ID: 'aggregate-session/service-group/total-tcp-data',
    Description: 'Total TCP data of active sessions',
    Label: 'Total TCP Data',
    Keys: ['service-group']
  },
  {
    ID: 'aggregate-session/service-group/rx-tcp-data',
    Description: 'Total TCP data received of active sessions',
    Label: 'TCP Data Received',
    Keys: ['service-group']
  },
  {
    ID: 'aggregate-session/service-group/tx-tcp-data',
    Description: 'Total TCP data sent of active sessions',
    Label: 'TCP Data Sent',
    Keys: ['service-group']
  },
  {
    ID: 'aggregate-session/service-group/total-udp-data',
    Description: 'Total UDP data of active sessions',
    Label: 'Total UDP Data',
    Keys: ['service-group']
  },
  {
    ID: 'aggregate-session/service-group/rx-udp-data',
    Description: 'Total UDP data received of active sessions',
    Label: 'UDP Data Received',
    Keys: ['service-group']
  },
  {
    ID: 'aggregate-session/service-group/tx-udp-data',
    Description: 'Total UDP data sent of active sessions',
    Label: 'UDP Data Sent',
    Keys: ['service-group']
  },
  {
    ID: 'aggregate-session/service-group/total-packets',
    Description: 'Total packets of active sessions',
    Label: 'Total Packets',
    Keys: ['service-group']
  },
  {
    ID: 'aggregate-session/service-group/rx-packets',
    Description: 'Total packets received of active sessions',
    Label: 'Packets Received',
    Keys: ['service-group']
  },
  {
    ID: 'aggregate-session/service-group/tx-packets',
    Description: 'Total packets sent of active sessions',
    Label: 'Packets Sent',
    Keys: ['service-group']
  },
  {
    ID: 'aggregate-session/service-group/total-tcp-packets',
    Description: 'Total TCP packets of active sessions',
    Label: 'Total TCP Packets',
    Keys: ['service-group']
  },
  {
    ID: 'aggregate-session/service-group/rx-tcp-packets',
    Description: 'Total TCP packets received of active sessions',
    Label: 'TCP Packets Received',
    Keys: ['service-group']
  },
  {
    ID: 'aggregate-session/service-group/tx-tcp-packets',
    Description: 'Total TCP packets sent of active sessions',
    Label: 'TCP Packets Sent',
    Keys: ['service-group']
  },
  {
    ID: 'aggregate-session/service-group/total-udp-packets',
    Description: 'Total UDP packets of active sessions',
    Label: 'Total UDP Packets',
    Keys: ['service-group']
  },
  {
    ID: 'aggregate-session/service-group/rx-udp-packets',
    Description: 'Total UDP packets received of active sessions',
    Label: 'UDP Packets Received',
    Keys: ['service-group']
  },
  {
    ID: 'aggregate-session/service-group/tx-udp-packets',
    Description: 'Total UDP packets sent of active sessions',
    Label: 'UDP Packets Sent',
    Keys: ['service-group']
  },
  {
    ID: 'aggregate-session/service-group/total-tcp-retransmissions',
    Description: 'Total TCP data retransmissions of active sessions',
    Label: 'Total TCP Data Retransmissions',
    Keys: ['service-group']
  },
  {
    ID: 'aggregate-session/service-group/rx-tcp-retransmissions',
    Description: 'Total reverse TCP data retransmissions of active sessions',
    Label: 'Reverse TCP Data Retransmissions',
    Keys: ['service-group']
  },
  {
    ID: 'aggregate-session/service-group/tx-tcp-retransmissions',
    Description: 'Total forward TCP data retransmissions of active sessions',
    Label: 'Forward TCP Data Retransmissions',
    Keys: ['service-group']
  },
  {
    ID: 'aggregate-session/service-route/bandwidth',
    Description: 'Total bandwidth of active sessions',
    Label: 'Session Bandwidth',
    Keys: ['service-route']
  },
  {
    ID: 'aggregate-session/service-route/session-count',
    Description: 'Total number of active sessions',
    Label: 'Session Count',
    Keys: ['service-route']
  },
  {
    ID: 'aggregate-session/service-route/session-arrival-rate',
    Description: 'Rate of arrival for new sessions per unit time',
    Label: 'Session Arrival Rate',
    Keys: ['service-route']
  },
  {
    ID: 'aggregate-session/service-route/session-departure-rate',
    Description: 'Rate of departure for terminated sessions per unit time',
    Label: 'Session Departure Rate',
    Keys: ['service-route']
  },
  {
    ID: 'aggregate-session/service-route/total-data',
    Description: 'Total data of active sessions',
    Label: 'Total Data',
    Keys: ['service-route']
  },
  {
    ID: 'aggregate-session/service-route/rx-data',
    Description: 'Total data received of active sessions',
    Label: 'Data Received',
    Keys: ['service-route']
  },
  {
    ID: 'aggregate-session/service-route/tx-data',
    Description: 'Total data sent of active sessions',
    Label: 'Data Sent',
    Keys: ['service-route']
  },
  {
    ID: 'aggregate-session/service-route/total-tcp-data',
    Description: 'Total TCP data of active sessions',
    Label: 'Total TCP Data',
    Keys: ['service-route']
  },
  {
    ID: 'aggregate-session/service-route/rx-tcp-data',
    Description: 'Total TCP data received of active sessions',
    Label: 'TCP Data Received',
    Keys: ['service-route']
  },
  {
    ID: 'aggregate-session/service-route/tx-tcp-data',
    Description: 'Total TCP data sent of active sessions',
    Label: 'TCP Data Sent',
    Keys: ['service-route']
  },
  {
    ID: 'aggregate-session/service-route/total-udp-data',
    Description: 'Total UDP data of active sessions',
    Label: 'Total UDP Data',
    Keys: ['service-route']
  },
  {
    ID: 'aggregate-session/service-route/rx-udp-data',
    Description: 'Total UDP data received of active sessions',
    Label: 'UDP Data Received',
    Keys: ['service-route']
  },
  {
    ID: 'aggregate-session/service-route/tx-udp-data',
    Description: 'Total UDP data sent of active sessions',
    Label: 'UDP Data Sent',
    Keys: ['service-route']
  },
  {
    ID: 'aggregate-session/service-route/total-packets',
    Description: 'Total packets of active sessions',
    Label: 'Total Packets',
    Keys: ['service-route']
  },
  {
    ID: 'aggregate-session/service-route/rx-packets',
    Description: 'Total packets received of active sessions',
    Label: 'Packets Received',
    Keys: ['service-route']
  },
  {
    ID: 'aggregate-session/service-route/tx-packets',
    Description: 'Total packets sent of active sessions',
    Label: 'Packets Sent',
    Keys: ['service-route']
  },
  {
    ID: 'aggregate-session/service-route/total-tcp-packets',
    Description: 'Total TCP packets of active sessions',
    Label: 'Total TCP Packets',
    Keys: ['service-route']
  },
  {
    ID: 'aggregate-session/service-route/rx-tcp-packets',
    Description: 'Total TCP packets received of active sessions',
    Label: 'TCP Packets Received',
    Keys: ['service-route']
  },
  {
    ID: 'aggregate-session/service-route/tx-tcp-packets',
    Description: 'Total TCP packets sent of active sessions',
    Label: 'TCP Packets Sent',
    Keys: ['service-route']
  },
  {
    ID: 'aggregate-session/service-route/total-udp-packets',
    Description: 'Total UDP packets of active sessions',
    Label: 'Total UDP Packets',
    Keys: ['service-route']
  },
  {
    ID: 'aggregate-session/service-route/rx-udp-packets',
    Description: 'Total UDP packets received of active sessions',
    Label: 'UDP Packets Received',
    Keys: ['service-route']
  },
  {
    ID: 'aggregate-session/service-route/tx-udp-packets',
    Description: 'Total UDP packets sent of active sessions',
    Label: 'UDP Packets Sent',
    Keys: ['service-route']
  },
  {
    ID: 'aggregate-session/service-route/total-tcp-retransmissions',
    Description: 'Total TCP data retransmissions of active sessions',
    Label: 'Total TCP Data Retransmissions',
    Keys: ['service-route']
  },
  {
    ID: 'aggregate-session/service-route/rx-tcp-retransmissions',
    Description: 'Total reverse TCP data retransmissions of active sessions',
    Label: 'Reverse TCP Data Retransmissions',
    Keys: ['service-route']
  },
  {
    ID: 'aggregate-session/service-route/tx-tcp-retransmissions',
    Description: 'Total forward TCP data retransmissions of active sessions',
    Label: 'Forward TCP Data Retransmissions',
    Keys: ['service-route']
  },
  {
    ID: 'aggregate-session/tenant/bandwidth',
    Description: 'Total bandwidth of active sessions',
    Label: 'Session Bandwidth',
    Keys: ['tenant']
  },
  {
    ID: 'aggregate-session/tenant/session-count',
    Description: 'Total number of active sessions',
    Label: 'Session Count',
    Keys: ['tenant']
  },
  {
    ID: 'aggregate-session/tenant/session-arrival-rate',
    Description: 'Rate of arrival for new sessions per unit time',
    Label: 'Session Arrival Rate',
    Keys: ['tenant']
  },
  {
    ID: 'aggregate-session/tenant/session-departure-rate',
    Description: 'Rate of departure for terminated sessions per unit time',
    Label: 'Session Departure Rate',
    Keys: ['tenant']
  },
  {
    ID: 'aggregate-session/tenant/total-data',
    Description: 'Total data of active sessions',
    Label: 'Total Data',
    Keys: ['tenant']
  },
  {
    ID: 'aggregate-session/tenant/rx-data',
    Description: 'Total data received of active sessions',
    Label: 'Data Received',
    Keys: ['tenant']
  },
  {
    ID: 'aggregate-session/tenant/tx-data',
    Description: 'Total data sent of active sessions',
    Label: 'Data Sent',
    Keys: ['tenant']
  },
  {
    ID: 'aggregate-session/tenant/total-tcp-data',
    Description: 'Total TCP data of active sessions',
    Label: 'Total TCP Data',
    Keys: ['tenant']
  },
  {
    ID: 'aggregate-session/tenant/rx-tcp-data',
    Description: 'Total TCP data received of active sessions',
    Label: 'TCP Data Received',
    Keys: ['tenant']
  },
  {
    ID: 'aggregate-session/tenant/tx-tcp-data',
    Description: 'Total TCP data sent of active sessions',
    Label: 'TCP Data Sent',
    Keys: ['tenant']
  },
  {
    ID: 'aggregate-session/tenant/total-udp-data',
    Description: 'Total UDP data of active sessions',
    Label: 'Total UDP Data',
    Keys: ['tenant']
  },
  {
    ID: 'aggregate-session/tenant/rx-udp-data',
    Description: 'Total UDP data received of active sessions',
    Label: 'UDP Data Received',
    Keys: ['tenant']
  },
  {
    ID: 'aggregate-session/tenant/tx-udp-data',
    Description: 'Total UDP data sent of active sessions',
    Label: 'UDP Data Sent',
    Keys: ['tenant']
  },
  {
    ID: 'aggregate-session/tenant/total-packets',
    Description: 'Total packets of active sessions',
    Label: 'Total Packets',
    Keys: ['tenant']
  },
  {
    ID: 'aggregate-session/tenant/rx-packets',
    Description: 'Total packets received of active sessions',
    Label: 'Packets Received',
    Keys: ['tenant']
  },
  {
    ID: 'aggregate-session/tenant/tx-packets',
    Description: 'Total packets sent of active sessions',
    Label: 'Packets Sent',
    Keys: ['tenant']
  },
  {
    ID: 'aggregate-session/tenant/total-tcp-packets',
    Description: 'Total TCP packets of active sessions',
    Label: 'Total TCP Packets',
    Keys: ['tenant']
  },
  {
    ID: 'aggregate-session/tenant/rx-tcp-packets',
    Description: 'Total TCP packets received of active sessions',
    Label: 'TCP Packets Received',
    Keys: ['tenant']
  },
  {
    ID: 'aggregate-session/tenant/tx-tcp-packets',
    Description: 'Total TCP packets sent of active sessions',
    Label: 'TCP Packets Sent',
    Keys: ['tenant']
  },
  {
    ID: 'aggregate-session/tenant/total-udp-packets',
    Description: 'Total UDP packets of active sessions',
    Label: 'Total UDP Packets',
    Keys: ['tenant']
  },
  {
    ID: 'aggregate-session/tenant/rx-udp-packets',
    Description: 'Total UDP packets received of active sessions',
    Label: 'UDP Packets Received',
    Keys: ['tenant']
  },
  {
    ID: 'aggregate-session/tenant/tx-udp-packets',
    Description: 'Total UDP packets sent of active sessions',
    Label: 'UDP Packets Sent',
    Keys: ['tenant']
  },
  {
    ID: 'aggregate-session/tenant/total-tcp-retransmissions',
    Description: 'Total TCP data retransmissions of active sessions',
    Label: 'Total TCP Data Retransmissions',
    Keys: ['tenant']
  },
  {
    ID: 'aggregate-session/tenant/rx-tcp-retransmissions',
    Description: 'Total reverse TCP data retransmissions of active sessions',
    Label: 'Reverse TCP Data Retransmissions',
    Keys: ['tenant']
  },
  {
    ID: 'aggregate-session/tenant/tx-tcp-retransmissions',
    Description: 'Total forward TCP data retransmissions of active sessions',
    Label: 'Forward TCP Data Retransmissions',
    Keys: ['tenant']
  },
  {
    ID: 'ipfix/total-records',
    Description: 'Total number of records exported',
    Label: 'Total Records Exported',
    Keys: ['node']
  },
  {
    ID: 'ipfix/record-export-rate',
    Description: 'Rate of records exported per unit time',
    Label: 'Record Export Rate',
    Keys: ['node']
  },
  {
    ID: 'ipfix/total-generation-time',
    Description: 'Total time spent generating IPFIX records',
    Label: 'Total Generation Time',
    Keys: ['node']
  },
  {
    ID: 'ipfix/time-per-session',
    Description: 'Average time spent generating IPFIX records per session in existence',
    Label: 'Generation Time per Session',
    Keys: ['node']
  },
  {
    ID: 'ipfix/time-per-export',
    Description: 'Average time spent generating IPFIX records per record export',
    Label: 'Generation Time per Export',
    Keys: ['node']
  },
  {
    ID: 'database/memory-consumed',
    Description: 'Memory consumed by the database in bytes',
    Label: 'Memory Consumed by the Database',
    Keys: ['node']
  },
  {
    ID: 'metrics/read-metric-latency',
    Description: 'Amortized time take per metric per read',
    Label: 'Amortized per-metric read latency',
    Keys: ['node']
  },
  {
    ID: 'metrics/pending-aggregations',
    Description: 'The number of metric aggregations pending',
    Label: 'Number of Pending Aggregations',
    Keys: ['node']
  },
  {
    ID: 'metrics/per-collection-latency',
    Description: 'Time taken to gather all metrics per collection',
    Label: 'Latency per Collection',
    Keys: ['node']
  },
  {
    ID: 'metrics/per-metric-latency',
    Description: 'Amortized time taken per metric, per collection',
    Label: 'Amortized per-metric collection latency',
    Keys: ['node']
  },
  {
    ID: 'metrics/active-metrics',
    Description: 'The number of metrics that exist in the process',
    Label: 'Number of Active Metrics',
    Keys: ['node']
  },
  {
    ID: 'messages/sent',
    Description: 'Number of sent messages for the process',
    Label: 'Number of Total Sent Messages',
    Keys: ['node']
  },
  {
    ID: 'messages/received',
    Description: 'Number of received messages for the process',
    Label: 'Number of Total Received Messages',
    Keys: ['node']
  },
  { ID: 'cpu/utilization', Description: 'Percentage of CPU used', Label: 'CPU utilization percentage', Keys: ['node'] },
  {
    ID: 'memory/capacity',
    Description: 'Total memory capacity (bytes)',
    Label: 'Total memory capacity',
    Keys: ['node']
  },
  { ID: 'memory/used', Description: 'Total memory used (bytes)', Label: 'Total memory used', Keys: ['node'] },
  { ID: 'disk/capacity', Description: 'Total disk capacity (bytes)', Label: 'Total disk capacity', Keys: ['node'] },
  { ID: 'disk/used', Description: 'Total disk used (bytes)', Label: 'Total disk used', Keys: ['node'] },
  { ID: 'disk/component', Description: 'Total disk used (bytes)', Label: 'Component disk usage', Keys: ['node'] },
  {
    ID: 'path-tree/server/received/requests/average',
    Description: 'The number of transaction request messages received successfully',
    Label: 'Running average requests in the window',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/received/requests/total',
    Description: 'The number of transaction request messages received successfully',
    Label: 'Total requests received',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/received/requests/ignored',
    Description: 'The number of transaction request messages received but were ignored due to invalid session state',
    Label: 'Total requests ignored',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/received/requests/error',
    Description: 'The number of invalid or malformed transaction request messages received',
    Label: 'Total requests invalid',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/sent/responses/total',
    Description: 'The number of transaction response messages sent successfully',
    Label: 'Total responses sent',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/sent/responses/error',
    Description: 'The number of transaction response messages that could not be sent',
    Label: 'Total responses failed',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/transactions/connect/processed',
    Description: 'The number of successfully processed Connect transactions',
    Label: 'Total connect processed',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/transactions/connect/error',
    Description: 'The number of Connect transactions that could not be processed successfully',
    Label: 'Total connect failed',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/transactions/connect/duration',
    Description: 'Average time to process/respond-to Connect transactions',
    Label: 'Connect transaction duration',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/transactions/disconnect/processed',
    Description: 'The number of successfully processed Disconnect transactions',
    Label: 'Total disconnect processed',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/transactions/disconnect/error',
    Description: 'The number of Disconnect transactions that could not be processed successfully',
    Label: 'Total disconnect failed',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/transactions/disconnect/duration',
    Description: 'Average time to process/respond-to Disconnect transactions',
    Label: 'Disconnect transaction duration',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/transactions/ping/processed',
    Description: 'The number of successfully processed Ping transactions',
    Label: 'Total ping processed',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/transactions/ping/error',
    Description: 'The number of Ping transactions that could not be processed successfully',
    Label: 'Total ping failed',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/transactions/ping/duration',
    Description: 'Average time to process/respond-to Ping transactions',
    Label: 'Ping transaction duration',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/transactions/publish/processed',
    Description: 'The number of successfully processed Publish transactions',
    Label: 'Total publish processed',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/transactions/publish/error',
    Description: 'The number of Publish transactions that could not be processed successfully',
    Label: 'Total publish failed',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/transactions/publish/duration',
    Description: 'Average time to process/respond-to Publish transactions',
    Label: 'Publish transaction duration',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/transactions/update/processed',
    Description: 'The number of successfully processed Update transactions',
    Label: 'Total updates processed',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/transactions/update/error',
    Description: 'The number of Update transactions that could not be processed successfully',
    Label: 'Total updates failed',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/transactions/update/duration',
    Description: 'Average time to process/respond-to Update transactions',
    Label: 'Update transaction duration',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/transactions/remove/processed',
    Description: 'The number of successfully processed Remove transactions',
    Label: 'Total removals processed',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/transactions/remove/error',
    Description: 'The number of Remove transactions that could not be processed successfully',
    Label: 'Total removals failed',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/transactions/remove/duration',
    Description: 'Average time to process/respond-to Remove transactions',
    Label: 'Remove transaction duration',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/transactions/read/processed',
    Description: 'The number of successfully processed Read transactions',
    Label: 'Total reads processed',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/transactions/read/error',
    Description: 'The number of Read transactions that could not be processed successfully',
    Label: 'Total reads failed',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/transactions/read/duration',
    Description: 'Average time to process/respond-to Read transactions',
    Label: 'Read transaction duration',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/transactions/list/processed',
    Description: 'The number of successfully processed List transactions',
    Label: 'Total lists processed',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/transactions/list/error',
    Description: 'The number of List transactions that could not be processed successfully',
    Label: 'Total lists failed',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/transactions/list/duration',
    Description: 'Average time to process/respond-to List transactions',
    Label: 'List transaction duration',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/transactions/unsubscribe/processed',
    Description: 'The number of successfully processed Unsubscribe transactions',
    Label: 'Total unsubscribes processed',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/transactions/unsubscribe/error',
    Description: 'The number of Unsubscribe transactions that could not be processed successfully',
    Label: 'Total unsubscribes failed',
    Keys: ['node']
  },
  {
    ID: 'path-tree/server/transactions/unsubscribe/duration',
    Description: 'Average time to process/respond-to Unsubscribe transactions',
    Label: 'Unsubscribe transaction duration',
    Keys: ['node']
  },
  {
    ID: 'path-tree/client/sent/requests/total',
    Description: 'The number of transaction request messages sent successfully',
    Label: 'Total requests sent',
    Keys: ['node']
  },
  {
    ID: 'path-tree/client/sent/requests/error',
    Description: 'The number of transaction request messages that could not be sent',
    Label: 'Total requests failed',
    Keys: ['node']
  },
  {
    ID: 'path-tree/client/received/responses/total',
    Description: 'The number of transaction response messages received successfully',
    Label: 'Total responses received',
    Keys: ['node']
  },
  {
    ID: 'path-tree/client/received/responses/error',
    Description: 'The number of invalid or malformed transaction response messages received',
    Label: 'Total responses failed',
    Keys: ['node']
  },
  {
    ID: 'path-tree/client/received/responses/duration',
    Description: 'Average time to process transaction responses on the client',
    Label: 'Response processing duration',
    Keys: ['node']
  },
  {
    ID: 'path-tree/client/received/notifications/total',
    Description: 'The number of notification messages received successfully',
    Label: 'Total notifications received',
    Keys: ['node']
  },
  {
    ID: 'path-tree/client/received/notifications/error',
    Description: 'The number of invalid or malformed notification messages received',
    Label: 'Total notifications failed',
    Keys: ['node']
  },
  {
    ID: 'path-tree/client/received/notifications/duration',
    Description: 'Average time to process Notifications on the client',
    Label: 'Notification processing duration',
    Keys: ['node']
  },
  {
    ID: 'path-tree/client/received/unknown/total',
    Description: 'The number of unknown message types received',
    Label: 'Total responses received',
    Keys: ['node']
  },
  {
    ID: 'path-tree/client/transactions/server-latency',
    Description: 'Average latency for the server to process/respond-to transactions',
    Label: 'Transaction server latency',
    Keys: ['node']
  },
  {
    ID: 'registered-services/events',
    Description: 'The number of services registered to the SSC',
    Label: 'Number of Registered Services',
    Keys: ['node']
  },
  {
    ID: 'redis-server-manager/redis-session-expirations',
    Description: 'The number of redis session expirations',
    Label: 'Redis Session Expiration Errors',
    Keys: ['node']
  },
  {
    ID: 'redis-server-manager/redis-server-inactives',
    Description: 'The number of redis server inactive',
    Label: 'Redis Server Inactive Errors',
    Keys: ['node']
  },
  {
    ID: 'redis-server-manager/redis-server-network-flaps',
    Description: 'The number of redis server network flaps',
    Label: 'Redis Server Network Flap errors',
    Keys: ['node']
  },
  {
    ID: 'external-protocols/manager/errors/early-inbound',
    Description:
      'The number of packets received from the Fast Lane while not subscribed on the external protocol channel',
    Label: 'External Protocol Early Inbound Errors',
    Keys: ['node']
  },
  {
    ID: 'external-protocols/manager/errors/early-outbound',
    Description:
      'The number of packets received from the External Protocol Manager while not subscribed on the external protocol channel',
    Label: 'External Protocol Early Outbound Errors',
    Keys: ['node']
  },
  {
    ID: 'external-protocols/manager/errors/illegal-external-protocols-channel-message',
    Description: 'The number of messages received from the external protocol channel of an illegal type',
    Label: 'External Protocol Illegal Channel Message Errors',
    Keys: ['node']
  },
  {
    ID: 'external-protocols/manager/errors/outbound-drop',
    Description: 'The number of packets outbound from the Control that were dropped due to any error',
    Label: 'External Protocol Outbound Drop Errors',
    Keys: ['node']
  },
  {
    ID: 'external-protocols/manager/errors/inbound-drop',
    Description: 'The number of packets inbound from the Fast Lane that were dropped due to any error',
    Label: 'External Protocol Inbound Drop Errors',
    Keys: ['node']
  },
  {
    ID: 'external-protocols/manager/packets/outbound',
    Description:
      'The number of packets outbound from the Control received. These may be dropped and therefore outbound minus outbound-drop equals the number of successfully sent packets',
    Label: "Outbound External Protocol's Packets Received",
    Keys: ['node']
  },
  {
    ID: 'external-protocols/manager/packets/inbound',
    Description:
      'The number of packets inbound from the Fast Lane received. These may be dropped and therefore inbound minus inbound-drop equals the number of successfully sent packets',
    Label: "Inbound External Protocol's Packets Received",
    Keys: ['node']
  },
  {
    ID: 'external-protocols/manager/channel-messages/received',
    Description: "The number of messages received on the external protocol's channel",
    Label: "Messages Received from the External Protocol's Channel",
    Keys: ['node']
  },
  {
    ID: 'external-protocols/manager/channel-messages/sent',
    Description: "The number of messages sent on the external protocol's channel.",
    Label: "Messages Sent to the External Protocol's Channel",
    Keys: ['node']
  },
  {
    ID: 'external-protocols/agent/errors/early-inbound',
    Description:
      'The number of packets received from the Fast Lane while not subscribed on the external protocol channel',
    Label: 'External Protocol Early Inbound Errors',
    Keys: ['node']
  },
  {
    ID: 'external-protocols/agent/errors/early-outbound',
    Description:
      'The number of packets received from the External Protocol Manager while not subscribed on the external protocol channel',
    Label: 'External Protocol Early Outbound Errors',
    Keys: ['node']
  },
  {
    ID: 'external-protocols/agent/errors/illegal-external-protocols-channel-message',
    Description: 'The number of messages received from the external protocol channel of an illegal type',
    Label: 'External Protocol Illegal Channel Message Errors',
    Keys: ['node']
  },
  {
    ID: 'external-protocols/agent/errors/outbound-drop',
    Description: 'The number of packets outbound from the Control that were dropped due to any error',
    Label: 'External Protocol Outbound Drop Errors',
    Keys: ['node']
  },
  {
    ID: 'external-protocols/agent/errors/inbound-drop',
    Description: 'The number of packets inbound from the Fast Lane that were dropped due to any error',
    Label: 'External Protocol Inbound Drop Errors',
    Keys: ['node']
  },
  {
    ID: 'external-protocols/agent/errors/outbound-l2-resolution-reply-drop',
    Description:
      'The number of outbound packets from the External Protocol Manager that were an ARP or Neighbor Discovery reply and were therefore dropped',
    Label: "External Protocol's Outbound L2 Resolution Reply Drop Errors",
    Keys: ['node']
  },
  {
    ID: 'external-protocols/agent/errors/illegal-ethernet-drop',
    Description:
      'The number of packets going through the External Protocol Agent and that had an illegal ethertype and were therefore dropped',
    Label: "External Protocol's Illegal Ethernet Drop Errors",
    Keys: ['node']
  },
  {
    ID: 'external-protocols/agent/errors/classify-drop',
    Description: 'The number of packets classified as invalid and dropped by the External Protocol Agent',
    Label: "External Protocol's Classify Drop Errors",
    Keys: ['node']
  },
  {
    ID: 'external-protocols/agent/errors/illegal-ip-drop',
    Description:
      'The number of packets going through the External Protocol Agent and that were IP packets but for which an external protocol was not found and were therefore dropped',
    Label: "External Protocol's Illegal IP Drop Errors",
    Keys: ['node']
  },
  {
    ID: 'external-protocols/agent/errors/fastlane-not-ready-drop',
    Description:
      'The number of outbound packets from the External Protocol Manager that were sent before the Fast Lane was ready to transmit and were therefore dropped',
    Label: "External Protocol's Fastlane Not Ready Drop Errors",
    Keys: ['node']
  },
  {
    ID: 'external-protocols/agent/errors/session-collision',
    Description:
      'The number of packets going through the External Protocol Agent that should have created a session but which collided with another process while creating the session and therefore were dropped',
    Label: "External Protocol's Session Collision Errors",
    Keys: ['node']
  },
  {
    ID: 'external-protocols/agent/errors/global-interface-lookup-drop',
    Description:
      'The number of inbound packets from the Fast Lane to the External Protocol Manager that encountered a global interface lookup failure and were therefore dropped',
    Label: "External Protocol's Global Interface Lookup Drop Errors",
    Keys: ['node']
  },
  {
    ID: 'external-protocols/agent/packets/outbound',
    Description:
      'The number of packets outbound from the Control received. These may be dropped and therefore outbound minus outbound-drop equals the number of successfully sent packets',
    Label: "Outbound External Protocol's Packets Received",
    Keys: ['node']
  },
  {
    ID: 'external-protocols/agent/packets/inbound',
    Description:
      'The number of packets inbound from the Fast Lane received. These may be dropped and therefore inbound minus inbound-drop equals the number of successfully sent packets',
    Label: "Inbound External Protocol's Packets Received",
    Keys: ['node']
  },
  {
    ID: 'external-protocols/agent/channel-messages/received',
    Description: "The number of messages received on the external protocol's channel",
    Label: "Messages Received from the External Protocol's Channel",
    Keys: ['node']
  },
  {
    ID: 'external-protocols/agent/channel-messages/sent',
    Description: "The number of messages sent on the external protocol's channel.",
    Label: "Messages Sent to the External Protocol's Channel",
    Keys: ['node']
  },
  { ID: 'routing/routes', Description: 'The number of active routes', Label: 'Active Routes', Keys: ['node'] },
  {
    ID: 'routing/errors/connection',
    Description: 'The number of client connection errors within the route manager',
    Label: 'Route Manager Client Connection Error',
    Keys: ['node']
  },
  {
    ID: 'routing/route-updates/received/total',
    Description: 'Number of route updates received',
    Label: 'Total Route Updates Received',
    Keys: ['node']
  },
  {
    ID: 'routing/route-updates/received/add',
    Description: 'Number of add routes received',
    Label: 'Add Routes Received',
    Keys: ['node']
  },
  {
    ID: 'routing/route-updates/received/delete',
    Description: 'Number of delete routes received',
    Label: 'Delete Routes Received',
    Keys: ['node']
  },
  {
    ID: 'routing/route-updates/received/end-of-fib',
    Description: 'Number of end of FIB messages received',
    Label: 'End of FIB Messages Received',
    Keys: ['node']
  },
  {
    ID: 'routing/route-updates/received/clear-fib',
    Description: 'Number of clear FIB messages received',
    Label: 'Clear FIB Messages Received',
    Keys: ['node']
  },
  {
    ID: 'routing/route-updates/received/clear-pending-fib',
    Description: 'Number of clear pending FIB messages received',
    Label: 'Clear Pending FIB Messages Received',
    Keys: ['node']
  },
  {
    ID: 'routing/route-updates/received/i-am-active',
    Description: 'Number of I am Active messages received',
    Label: 'I am Active Messages Received',
    Keys: ['node']
  },
  {
    ID: 'routing/route-updates/received/i-am-standby',
    Description: 'Number of I am Standby messages received',
    Label: 'I am Standby Messages Received',
    Keys: ['node']
  },
  {
    ID: 'routing/route-updates/sent/total',
    Description: 'Number of route updates sent',
    Label: 'Total Route Updates Sent',
    Keys: ['node']
  },
  {
    ID: 'ssc/clients',
    Description: 'The number of clients connected to the SSC',
    Label: 'Number of Clients',
    Keys: ['node']
  },
  {
    ID: 'ssc/received/invalid/message',
    Description: 'The number of malformed messages received by the SSC',
    Label: 'SSC Malformed Message',
    Keys: ['node']
  }
];
