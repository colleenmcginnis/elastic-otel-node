const {startHttp} = require('./http');
const {startGrpc} = require('./grpc');

// Default hostname to 'localhost', because that is what `DEFAULT_COLLECTOR_URL`
// uses in the OTel core exporter packages. Note that 'localhost' can by IPv6
// '::1' or IPv4 '127.0.0.1', which can potentially cause confusion.
const DEFAULT_HOSTNAME = 'localhost';
const DEFAULT_HTTP_PORT = 4318;
const DEFAULT_GRPC_PORT = 4317;

// Start a server which accepts incoming HTTP requests. Exporters supported:
// Handles `OTEL_EXPORTER_OTLP_PROTOCOL=http/proto` and
// `OTEL_EXPORTER_OTLP_PROTOCOL=http/json`.
startHttp({
    hostname: DEFAULT_HOSTNAME,
    port: DEFAULT_HTTP_PORT,
});

// Start a server which accepts incoming GRPC calls.
// Handles `OTEL_EXPORTER_OTLP_PROTOCOL=grpc`.
//
// NOTE: to debug read this: https://github.com/grpc/grpc-node/blob/master/TROUBLESHOOTING.md
startGrpc({
    hostname: DEFAULT_HOSTNAME,
    port: DEFAULT_GRPC_PORT,
});
