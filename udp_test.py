from socket import socket, AF_INET, SOCK_DGRAM

HOST = ""
PORT = 8000
# 自分に送信
ADDRESS = "127.0.0.1"

sock = socket(AF_INET, SOCK_DGRAM)
while True:
    try:
        # メッセージ
        msg = 'test'
        # 送信
        sock.sendto(msg.encode(), (ADDRESS, PORT))
    except KeyboardInterrupt:
        print("終了します")
        sock.close()
