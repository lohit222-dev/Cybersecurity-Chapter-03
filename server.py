import http.server
import socketserver
import os

PORT = int(os.environ.get("PORT", 8080))
WEB_DIR = os.path.dirname(os.path.abspath(__file__))
os.chdir(WEB_DIR)

class PortalRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate")
        super().end_headers()

if __name__ == "__main__":
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("0.0.0.0", PORT), PortalRequestHandler) as httpd:
        print(f"Chapter 3 Web Portal running at http://localhost:{PORT}", flush=True)
        httpd.serve_forever()
